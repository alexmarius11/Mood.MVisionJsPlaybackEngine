import amControlPrepareParams  = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Prepare");

import amGeneralError  = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amRenderParametersAllParameters     = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_AllParameters");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

import amServiceLocator    = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");
import amServiceContainer  = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amServiceLog        = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

export module rm_renderingservices
{
  export class RE_ControlParams_Prepare extends rmGeneralEntity.rm_general.R_Entity
                                        implements amControlPrepareParams.am_renderingservices.AE_ControlParams_Prepare
  {

    _isFree : boolean;
    _renderParams : amRenderParametersAllParameters.am_renderingservices.AE_RenderParams_AllParameters;

    //-----------
    constructor()
    {
      super();
      this._isFree = true;
    }

    //--------------------------
    public getRenderParams() : amRenderParametersAllParameters.am_renderingservices.AE_RenderParams_AllParameters
    {
      return this._renderParams;
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
    public copy(src : amControlPrepareParams.am_renderingservices.AE_ControlParams_Prepare) : number
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

      this._renderParams = this._aSrvLocator._iEntityCreation.createDefaultRenderParamsAllParameters(error);
      //if ((error != null ) && (error.isError()))
      //{
        //return 1;
      //}
      this._renderParams.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);
      return 0;
    }
  }
} 