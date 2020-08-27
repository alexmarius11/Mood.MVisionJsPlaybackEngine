import amConfigurationServicesServiceLocator    = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");

import amControlStopParams     = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Stop");
import amControlStopParamsPool = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_StopPool");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_renderingservices
{
  export class RE_ControlParams_StopPool  extends    rmGeneralEntity.rm_general.R_Entity
                                             implements amControlStopParamsPool.am_renderingservices.AE_ControlParams_StopPool
                                            
  {
    _stopParamsList    : Array<amControlStopParams.am_renderingservices.AE_ControlParams_Stop>;   

    //---------------------------
    constructor()
    {
      super();

      this._stopParamsList   = new Array<amControlStopParams.am_renderingservices.AE_ControlParams_Stop>();   
    }

    //--------------------------------------------
    public initPool(nbControlStopParams: number, error: amGeneralError.am_general.A_Error) : number
    {
      var i = 0;     
      var newStopParams: amControlStopParams.am_renderingservices.AE_ControlParams_Stop = null;
      var errorNo = 1;
      for (i = 0; i < nbControlStopParams; i++)
      {
        newStopParams = this._aSrvLocator._iEntityCreation.createDefaultControlStopParams(error);
        if (error.isError())
        {
          errorNo =1;
          break;
        }
        newStopParams.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);
        this.addStopParams(newStopParams);
      }
      return errorNo ;
    }

    //--------------------------
    public addStopParams(stopParams : amControlStopParams.am_renderingservices.AE_ControlParams_Stop) : number
    {
      this._stopParamsList.push(stopParams);
      return 0;
    }

    //--------------------------
    public reset() : void
    {
      var i = 0;           
      for (i = 0; i < this._stopParamsList.length; i++)
      {
        this._stopParamsList[i].reset();
      }
    }    


    //------------
    public copy(src : amControlStopParamsPool.am_renderingservices.AE_ControlParams_StopPool) : number
    {
      if (src == null)
        return 1;
      return 0;
    }

    //-----------------------------
    public getStopParamsList() : Array<amControlStopParams.am_renderingservices.AE_ControlParams_Stop>
    {
      return this._stopParamsList;
    }
  
  
    //--------------------------
  public getFreeStopParams() : amControlStopParams.am_renderingservices.AE_ControlParams_Stop
  {
    var freeStopParams: amControlStopParams.am_renderingservices.AE_ControlParams_Stop = null;
    var i = 0;     
    for (i = 0; i < this._stopParamsList.length; i++)
    {
      if (this._stopParamsList[i] == null)
        continue;
      if (! this._stopParamsList[i].isFree())
        continue;
      if (! this._stopParamsList[i].setIsFree(false))  
        continue;
      freeStopParams = this._stopParamsList[i];
      break; 
    }
    return freeStopParams;
  }
  
  //--------------------------
  public releaseStopParams(stopParams : amControlStopParams.am_renderingservices.AE_ControlParams_Stop) : boolean
  {
    if (stopParams == null)
      return false;
    stopParams.setIsFree(false);
    return true;
  }

  }
} 

