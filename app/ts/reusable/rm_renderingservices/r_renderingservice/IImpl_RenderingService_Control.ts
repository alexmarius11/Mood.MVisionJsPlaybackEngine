import amRenderingServiceIControl = require("../../../../../app/ts/abstract/am_renderingservices/a_renderingservice/I_RenderingService_Control");
import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import rmRenderingServices = require("../../../../../app/ts/reusable/rm_renderingservices/r_renderingservice/R_RenderingService");
                                                     
import amPrepareParams = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Prepare");
import amRunParams     = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Run");
import amStopParams     = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Stop");

export module rm_renderingservices
{
  export class IImpl_RenderingService_Control implements amRenderingServiceIControl.am_renderingservices.I_RenderingService_Control
  {
    _name: string;    

    //----------- owner
    _owner: rmRenderingServices.rm_renderingservices.R_RenderingService;

    //----------- constructor 
    constructor(owner: rmRenderingServices.rm_renderingservices.R_RenderingService)  
    {
      this._owner = owner;  
    }

    //----------------
    public canPlayNextMediaItem( prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, 
                                 error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      return this._owner.canPlayNextMediaItem(prepareParams, error, context, callback) ;
    }

    //----------------
    public prepareNextMediaItem(prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, 
                                error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      return this._owner.prepareNextMediaItem(prepareParams, error, context, callback) ;
    }

    //-------------------
    public playNextMediaItem(runParams: amRunParams.am_renderingservices.AE_ControlParams_Run, 
                             error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      return this._owner.playNextMediaItem(runParams, error, context, callback) ;
    }

    //-----------------------
    public prepareAndPlayNextMediaItem( prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, 
                                        stopParams: amStopParams.am_renderingservices.AE_ControlParams_Stop, 
                                        runParams: amRunParams.am_renderingservices.AE_ControlParams_Run, 
                                        error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      return this._owner.prepareAndPlayNextMediaItem(prepareParams, stopParams, runParams, error, context, callback) ;
    }


    //--------------------
    public stopCrtMediaItem( stopParams: amRunParams.am_renderingservices.AE_ControlParams_Run, 
                             error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      return this._owner.stopCrtMediaItem(stopParams, error, context, callback) ;
    }

    //-------------------
    public destroyCrtMediaItem( stopParams: amStopParams.am_renderingservices.AE_ControlParams_Stop, 
                                error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      return this._owner.destroyCrtMediaItem(stopParams, error, context, callback) ;
    }


    //-----------------------
    //   resize  / redraw 
    //-----------------------

    //----------------------
    public onChangeContainerSize( prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, 
                                  error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : number 
    {
      return this.onChangeContainerSize(prepareParams, error, context, callback);
    }

    //-----------------------------------
    public onChangeMediaSizeOrDisplayType( prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, 
                                           error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : number 
    {
      return this.onChangeMediaSizeOrDisplayType(prepareParams, error, context, callback);
    }
  }
} 