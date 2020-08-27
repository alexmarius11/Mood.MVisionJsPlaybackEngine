import amConfigurationServicesServiceLocator    = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");

import amTvHdmiPassThroughSrv     = require("../../../../../app/ts/abstract/am_renderingservices/a_tvHdmiPassThroughSrv/A_TvHdmiPassThroughSrv");
import amTvHdmiPassThroughSrvPool     = require("../../../../../app/ts/abstract/am_renderingservices/a_tvHdmiPassThroughSrv/AE_TvHdmiPassThroughSrvPool");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_renderingservices
{
  export class RE_TvHdmiPassThroughSrvPool  extends rmGeneralEntity.rm_general.R_Entity
                                implements amTvHdmiPassThroughSrvPool.am_renderingservices.AE_TvHdmiPassThroughSrvPool
                                            
  {
    _tvHdmiPassThroughSrvList    : Array<amTvHdmiPassThroughSrv.am_renderingservices.A_TvHdmiPassThroughSrv>;   

    //---------------------------
    constructor()
    {
      super();

      this._tvHdmiPassThroughSrvList   = new Array<amTvHdmiPassThroughSrv.am_renderingservices.A_TvHdmiPassThroughSrv>();   
    }

    //--------------------------------------------
    public initPool(nbTvHdmiPassThroughSrv: number, error: amGeneralError.am_general.A_Error) : number
    {
      var i = 0;     
      var newTvHdmiPassThroughSrv: amTvHdmiPassThroughSrv.am_renderingservices.A_TvHdmiPassThroughSrv = null;
      var errorNo = 1;
      for (i = 0; i < nbTvHdmiPassThroughSrv; i++)
      {
        newTvHdmiPassThroughSrv = this._aSrvLocator._iServiceCreation.createDefaultService_TvHdmiPassThroughSrv(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, i, error);
        if (error.isError())
        {
          errorNo =1;
          break;
        }
        newTvHdmiPassThroughSrv._iService.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);
        this.addTvHdmiPassThroughSrv(newTvHdmiPassThroughSrv);
      }
      return errorNo ;
    }

    //--------------------------
    public addTvHdmiPassThroughSrv(tvHdmiPassThroughSrv : amTvHdmiPassThroughSrv.am_renderingservices.A_TvHdmiPassThroughSrv) : void 
    {
      this._tvHdmiPassThroughSrvList.push(tvHdmiPassThroughSrv);
    }

    //--------------------------
    public reset() : void
    {
      var i = 0;           
      for (i = 0; i < this._tvHdmiPassThroughSrvList.length; i++)
      {
        this._tvHdmiPassThroughSrvList[i].reset();
      }
    }    


    //------------
    public copy(src : amTvHdmiPassThroughSrvPool.am_renderingservices.AE_TvHdmiPassThroughSrvPool) : number
    {
      if (src == null)
        return 1;
      return 0;
    }

    //-----------------------------
    public getTvHdmiPassThroughSrvList() : Array<amTvHdmiPassThroughSrv.am_renderingservices.A_TvHdmiPassThroughSrv>
    {
      return this._tvHdmiPassThroughSrvList;
    }
  
  
    //--------------------------
  public getFreeTvHdmiPassThroughSrv() : amTvHdmiPassThroughSrv.am_renderingservices.A_TvHdmiPassThroughSrv
  {
    var freeRenderParams: amTvHdmiPassThroughSrv.am_renderingservices.A_TvHdmiPassThroughSrv = null;
    var i = 0;     
    for (i = 0; i < this._tvHdmiPassThroughSrvList.length; i++)
    {
      if (this._tvHdmiPassThroughSrvList[i] == null)
        continue;
      if (! this._tvHdmiPassThroughSrvList[i].isFree())
        continue;
      if (! this._tvHdmiPassThroughSrvList[i].setIsFree(false))  
        continue;
      freeRenderParams = this._tvHdmiPassThroughSrvList[i];
      break; 
    }
    return freeRenderParams;
  }
  
  //--------------------------
  public releaseTvHdmiPassThroughSrv(tvHdmiPassThroughSrv : amTvHdmiPassThroughSrv.am_renderingservices.A_TvHdmiPassThroughSrv) : boolean
  {
    if (tvHdmiPassThroughSrv == null)
      return false;
    tvHdmiPassThroughSrv.setIsFree(false);
    return true;
  }

  }
} 

