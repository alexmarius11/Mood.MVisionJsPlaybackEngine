import amGeneral = require("../../../../../app/ts/abstract/am_general/i_interface/I_Interface");
import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import amPrepareParams = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Prepare");
import amRunParams     = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Run");
import amStopParams     = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Stop");

export module am_renderingservices
{
  export interface I_RenderingService_Control extends amGeneral.am_general.I_Interface
  {
    _name: string;    

    canPlayNextMediaItem(prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, 
                         error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void;
    prepareNextMediaItem(prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, 
                         error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void;
    playNextMediaItem(runParams: amRunParams.am_renderingservices.AE_ControlParams_Run, 
                         error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void;   
    prepareAndPlayNextMediaItem( prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, 
                                 stopParams: amStopParams.am_renderingservices.AE_ControlParams_Stop, 
                                 runParams: amRunParams.am_renderingservices.AE_ControlParams_Run, 
                                 error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void;

    stopCrtMediaItem(stopParams: amStopParams.am_renderingservices.AE_ControlParams_Stop, 
                          error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void;
    destroyCrtMediaItem(stopParams: amStopParams.am_renderingservices.AE_ControlParams_Stop, 
                          error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void;

    onChangeContainerSize( prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, 
                           error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : number;
    onChangeMediaSizeOrDisplayType( prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, 
               error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : number ;
 
  }
} 