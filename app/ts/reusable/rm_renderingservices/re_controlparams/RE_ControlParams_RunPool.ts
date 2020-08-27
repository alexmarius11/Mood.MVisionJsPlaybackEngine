import amConfigurationServicesServiceLocator    = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");

import amControlRunParams     = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Run");
import amControlRunParamsPool = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_RunPool");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_renderingservices
{
  export class RE_ControlParams_RunPool  extends    rmGeneralEntity.rm_general.R_Entity
                                             implements amControlRunParamsPool.am_renderingservices.AE_ControlParams_RunPool
                                            
  {
    _runParamsList    : Array<amControlRunParams.am_renderingservices.AE_ControlParams_Run>;   

    //---------------------------
    constructor()
    {
      super();

      this._runParamsList   = new Array<amControlRunParams.am_renderingservices.AE_ControlParams_Run>();   
    }

    //--------------------------------------------
    public initPool(nbControlRunParams: number, error: amGeneralError.am_general.A_Error) : number
    {
      var i = 0;     
      var newRunParams: amControlRunParams.am_renderingservices.AE_ControlParams_Run = null;
      var errorNo = 1;
      for (i = 0; i < nbControlRunParams; i++)
      {
        newRunParams = this._aSrvLocator._iEntityCreation.createDefaultControlRunParams(error);
        if (error.isError())
        {
          errorNo =1;
          break;
        }
        newRunParams.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);
        this.addRunParams(newRunParams);
      }
      return errorNo ;
    }

    //--------------------------
    public addRunParams(runParams : amControlRunParams.am_renderingservices.AE_ControlParams_Run) : number
    {
      this._runParamsList.push(runParams);
      return 0;
    }

    //--------------------------
    public reset() : void
    {
      var i = 0;           
      for (i = 0; i < this._runParamsList.length; i++)
      {
        this._runParamsList[i].reset();
      }
    }    


    //------------
    public copy(src : amControlRunParamsPool.am_renderingservices.AE_ControlParams_RunPool) : number
    {
      if (src == null)
        return 1;
      return 0;
    }

    //-----------------------------
    public getRunParamsList() : Array<amControlRunParams.am_renderingservices.AE_ControlParams_Run>
    {
      return this._runParamsList;
    }
  
  
    //--------------------------
  public getFreeRunParams() : amControlRunParams.am_renderingservices.AE_ControlParams_Run
  {
    var freeRunParams: amControlRunParams.am_renderingservices.AE_ControlParams_Run = null;
    var i = 0;     
    for (i = 0; i < this._runParamsList.length; i++)
    {
      if (this._runParamsList[i] == null)
        continue;
      if (! this._runParamsList[i].isFree())
        continue;
      if (! this._runParamsList[i].setIsFree(false))  
        continue;
      freeRunParams = this._runParamsList[i];
      break; 
    }
    return freeRunParams;
  }
  
  //--------------------------
  public releaseRunParams(runParams : amControlRunParams.am_renderingservices.AE_ControlParams_Run) : boolean
  {
    if (runParams == null)
      return false;
    runParams.setIsFree(false);
    return true;
  }

  }
} 

