import amConfigurationServicesServiceLocator    = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");

import amControlPrepareParams     = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Prepare");
import amControlPrepareParamsPool = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_PreparePool");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

import amGeneralConfig  = require("../../../../../app/ts/abstract/am_general/ae_config/AE_Config");

export module rm_renderingservices
{
  export class RE_ControlParams_PreparePool  extends    rmGeneralEntity.rm_general.R_Entity
                                             implements amControlPrepareParamsPool.am_renderingservices.AE_ControlParams_PreparePool
                                            
  {
    _prepareParamsList    : Array<amControlPrepareParams.am_renderingservices.AE_ControlParams_Prepare>;   

    //---------------------------
    constructor()
    {
      super();
      
      this._prepareParamsList   = new Array<amControlPrepareParams.am_renderingservices.AE_ControlParams_Prepare>();   
    }

    //--------------------------------------------
    public initPool(nbControlPrepareParams: number, error: amGeneralError.am_general.A_Error) : number
    {
      var i = 0;     
      var newPrepareParams: amControlPrepareParams.am_renderingservices.AE_ControlParams_Prepare = null;
      var errorNo = 1;
      for (i = 0; i < nbControlPrepareParams; i++)
      {
        newPrepareParams = this._aSrvLocator._iEntityCreation.createDefaultControlPrepareParams(error);
        if (error.isError())
        {
          errorNo =1;
          break;
        }
        newPrepareParams.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);
        this.addPrepareParams(newPrepareParams);
      }
      return errorNo ;
    }

    //--------------------------
    public addPrepareParams(prepareParams : amControlPrepareParams.am_renderingservices.AE_ControlParams_Prepare) : number
    {
      this._prepareParamsList.push(prepareParams);
      return 0;
    }

    //--------------------------
    public reset() : void
    {
      var i = 0;           
      for (i = 0; i < this._prepareParamsList.length; i++)
      {
        this._prepareParamsList[i].reset();
      }
    }    


    //------------
    public copy(src : amControlPrepareParamsPool.am_renderingservices.AE_ControlParams_PreparePool) : number
    {
      if (src == null)
        return 1;
      return 0;
    }

    //-----------------------------
    public getPrepareParamsList() : Array<amControlPrepareParams.am_renderingservices.AE_ControlParams_Prepare>
    {
      return this._prepareParamsList;
    }
  
  
    //--------------------------
  public getFreePrepareParams() : amControlPrepareParams.am_renderingservices.AE_ControlParams_Prepare
  {
    var freePrepareParams: amControlPrepareParams.am_renderingservices.AE_ControlParams_Prepare = null;
    var i = 0;     
    for (i = 0; i < this._prepareParamsList.length; i++)
    {
      if (this._prepareParamsList[i] == null)
        continue;
      if (! this._prepareParamsList[i].isFree())
        continue;
      if (! this._prepareParamsList[i].setIsFree(false))  
        continue;
      freePrepareParams = this._prepareParamsList[i];
      break; 
    }
    return freePrepareParams;
  }
  
  //--------------------------
  public releasePrepareParams(prepareParams : amControlPrepareParams.am_renderingservices.AE_ControlParams_Prepare) : boolean
  {
    if (prepareParams == null)
      return false;
    prepareParams.setIsFree(true);
    return true;
  }

  }
} 

