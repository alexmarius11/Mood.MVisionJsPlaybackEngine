import amConfigurationServicesServiceLocator    = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");

import amControlStatusParams     = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Status");
import amControlStatusParamsPool = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_StatusPool");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_renderingservices
{
  export class RE_ControlParams_StatusPool  extends    rmGeneralEntity.rm_general.R_Entity
                                             implements amControlStatusParamsPool.am_renderingservices.AE_ControlParams_StatusPool
                                            
  {
    _statusParamsList    : Array<amControlStatusParams.am_renderingservices.AE_ControlParams_Status>;   

    //---------------------------
    constructor()
    {
      super();

      this._statusParamsList   = new Array<amControlStatusParams.am_renderingservices.AE_ControlParams_Status>();   
    }

    //--------------------------------------------
    public initPool(nbControlStatusParams: number, error: amGeneralError.am_general.A_Error) : number
    {
      var i = 0;     
      var newStatusParams: amControlStatusParams.am_renderingservices.AE_ControlParams_Status = null;
      var errorNo = 1;
      for (i = 0; i < nbControlStatusParams; i++)
      {
        newStatusParams = this._aSrvLocator._iEntityCreation.createDefaultControlStatusParams(error);
        if (error.isError())
        {
          errorNo =1;
          break;
        }
        newStatusParams.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);
        this.addStatusParams(newStatusParams);
      }
      return errorNo ;
    }

    //--------------------------
    public addStatusParams(statusParams : amControlStatusParams.am_renderingservices.AE_ControlParams_Status) : number
    {
      this._statusParamsList.push(statusParams);
      return 0;
    }

    //--------------------------
    public reset() : void
    {
      var i = 0;           
      for (i = 0; i < this._statusParamsList.length; i++)
      {
        this._statusParamsList[i].reset();
      }
    }    


    //------------
    public copy(src : amControlStatusParamsPool.am_renderingservices.AE_ControlParams_StatusPool) : number
    {
      if (src == null)
        return 1;
      return 0;
    }

    //-----------------------------
    public getStatusParamsList() : Array<amControlStatusParams.am_renderingservices.AE_ControlParams_Status>
    {
      return this._statusParamsList;
    }
  
  
    //--------------------------
  public getFreeStatusParams() : amControlStatusParams.am_renderingservices.AE_ControlParams_Status
  {
    var freeStatusParams: amControlStatusParams.am_renderingservices.AE_ControlParams_Status = null;
    var i = 0;     
    for (i = 0; i < this._statusParamsList.length; i++)
    {
      if (this._statusParamsList[i] == null)
        continue;
      if (! this._statusParamsList[i].isFree())
        continue;
      if (! this._statusParamsList[i].setIsFree(false))  
        continue;
      freeStatusParams = this._statusParamsList[i];
      break; 
    }
    return freeStatusParams;
  }
  
  //--------------------------
  public releaseStatusParams(statusParams : amControlStatusParams.am_renderingservices.AE_ControlParams_Status) : boolean
  {
    if (statusParams == null)
      return false;
    statusParams.setIsFree(false);
    return true;
  }

  }
} 

