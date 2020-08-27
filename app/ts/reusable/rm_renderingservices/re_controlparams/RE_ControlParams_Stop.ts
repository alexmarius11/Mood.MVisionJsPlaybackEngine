import amControlStopParams  = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Stop");

import amGeneralError  = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amRenderParametersAllParameters     = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_AllParameters");

import amServiceLocator    = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");
import amServiceContainer  = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amServiceLog        = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_renderingservices
{
  export class RE_ControlParams_Stop extends rmGeneralEntity.rm_general.R_Entity
                                        implements amControlStopParams.am_renderingservices.AE_ControlParams_Stop
  {

    _isFree : boolean;


    //-----------
    constructor()
    {
      super();
      this._isFree = true;
    }

    //-----------------------
    public reset() : void 
    {
      this._isFree = true;
    }

    //-----------------
    public isFree() : boolean 
    {
      return this._isFree;
    }

    //-----------------------
    public setIsFree(isFree: boolean)  : boolean
    {
      this._isFree = isFree;
      return true;
    }



    //-----------------------------------------------
    public copy(src : amControlStopParams.am_renderingservices.AE_ControlParams_Stop) : number
    {
      return 0;
    }

    //------------------------------
    public injectDependencies( aSrvContainer: amServiceContainer.am_configurationservices.A_ServiceContainer, 
                               aSrvLocator:   amServiceLocator.am_configurationservices.A_ServiceLocator, 
                               aSrvLog:       amServiceLog.am_transversalservices.A_LogService, 
                              error: amGeneralError.am_general.A_Error) : number
    {
      super.injectDependencies(aSrvContainer, aSrvLocator, aSrvLog, error);

      return 0;
    }

  }
} 