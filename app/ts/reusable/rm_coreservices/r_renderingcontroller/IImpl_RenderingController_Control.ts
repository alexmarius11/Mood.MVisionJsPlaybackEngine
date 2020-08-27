import amIRenderingControllerControl = require("../../../../../app/ts/abstract/am_coreservices/a_renderingcontroller/I_RenderingController_Control");

import amGeneralError                          = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import amPrepareParams = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Prepare");
import amRunParams     = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Run");
import amStopParams    = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Stop");

import rmCoreServicesRenderingController = require("../../../../../app/ts/reusable/rm_coreservices/r_renderingcontroller/R_RenderingController");
                                                     
                                                     

export module rm_coreservices
{
  export class IImpl_RenderingController_Control implements amIRenderingControllerControl.am_coreservices.I_RenderingController_Control
  {
    _name: string;    

    //----------- owner
    _owner: rmCoreServicesRenderingController.rm_coreservices.R_RenderingController;

    //----------- constructor 
    constructor(owner: rmCoreServicesRenderingController.rm_coreservices.R_RenderingController)  
    {
      this._owner = owner;  
    }    

    //---------------
    public createZone(zoneId : number, prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      this._owner.createZone(zoneId, prepareParams, error, context, callback);
    }  

    //---------------
    public destroyZone( zoneId : number, stopParams: amStopParams.am_renderingservices.AE_ControlParams_Stop,
                         error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      this._owner.destroyZone(zoneId, stopParams, error, context, callback);
    }

    public stopZone( zoneId : number, stopParams: amStopParams.am_renderingservices.AE_ControlParams_Stop,
                     error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      this._owner.stopZone(zoneId, stopParams, error, context, callback);
    }

    //---------------
    public prepareNextMediaItem(zoneId : number, prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      this._owner.prepareNextMediaItem(zoneId, prepareParams, error, context, callback);
    }

    //---------------
    public playNextMediaItem(zoneId : number, runParams: amRunParams.am_renderingservices.AE_ControlParams_Run, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      this._owner.playNextMediaItem(zoneId, runParams, error, context, callback);
    }

    //------------------
    public prepareAndPlayNextMediaItem( zoneId : number, 
                                        prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, 
                                        stopParams: amStopParams.am_renderingservices.AE_ControlParams_Stop, 
                                        runParams: amRunParams.am_renderingservices.AE_ControlParams_Run, 
                                        error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      this._owner.prepareAndPlayNextMediaItem(zoneId, prepareParams, stopParams, runParams, error, context, callback);
    }

    //---------------
    public stopCrtMediaItem(zoneId : number, stopParams: amStopParams.am_renderingservices.AE_ControlParams_Stop, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      this._owner.stopCrtMediaItem(zoneId, stopParams, error, context, callback);
    }

  }
  
} 