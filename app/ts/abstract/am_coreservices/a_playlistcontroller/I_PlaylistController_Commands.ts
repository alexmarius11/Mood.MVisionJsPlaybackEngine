import amGeneral = require("../../../../../app/ts/abstract/am_general/i_interface/I_Interface");
import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import amPrepareParams = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Prepare");
import amRunParams     = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Run");
import amStopParams    = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Stop");

export module am_coreservices
{
  export interface I_PlaylistController_Commands extends amGeneral.am_general.I_Interface
  {
    _name: string;    

    cmd_getNewPreparedParam(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : amPrepareParams.am_renderingservices.AE_ControlParams_Prepare;
    cmd_freeNewPreparedParam(prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;

    cmd_createZone(zoneId : number, prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, 
                   error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void;  
    cmd_stopZone( zoneId : number, stopParams: amStopParams.am_renderingservices.AE_ControlParams_Stop,
                            error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void;
    cmd_destroyZone( zoneId : number, stopParams: amStopParams.am_renderingservices.AE_ControlParams_Stop,
                            error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void;

    cmd_prepareNextMediaItem(zoneId : number, prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void;
    cmd_playNextMediaItem(zoneId : number, runParams: amRunParams.am_renderingservices.AE_ControlParams_Run, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    cmd_prepareAndPlayNextMediaItem( zoneId : number, 
                                     prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, 
                                     stopParams: amStopParams.am_renderingservices.AE_ControlParams_Stop, 
                                     runParams: amRunParams.am_renderingservices.AE_ControlParams_Run, 
                                     error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void;

    cmd_changeDesign( iOldDesign : number, iNewDesign: number, designs: any, 
                      aFileStorage: string, aUrlStorage : string,  
                      error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void;

  }
} 