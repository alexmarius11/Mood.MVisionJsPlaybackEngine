import amGeneral = require("../../../../../app/ts/abstract/am_general/i_interface/I_Interface");

import amGeneralError                          = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
                                                     
import amPrepareParams = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Prepare");
import amRunParams     = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Run");
import amStopParams    = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Stop");
export module am_renderingservices
{
  export interface I_RenderingZone extends amGeneral.am_general.I_Interface
  {
    _name: string; 
    
    stopZone( stopParams: amRunParams.am_renderingservices.AE_ControlParams_Run, 
              error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void;

    destroyZone( stopParams: amRunParams.am_renderingservices.AE_ControlParams_Run, 
                 error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void;
  

  }
} 