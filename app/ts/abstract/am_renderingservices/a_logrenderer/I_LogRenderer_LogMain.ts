import amGeneral = require("../../../../../app/ts/abstract/am_general/i_interface/I_Interface");

import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

export module am_renderingservices
{
  export interface I_LogRenderer_LogMain extends amGeneral.am_general.I_Interface
  {
    _name: string;    

    action_log(logMsgLevel: number, logMsg: string, context);

    logStartAction(logMsg : string);
    logEndAction(logMsg : string, context);

    //-----------------------
    // log rendering functions 
    //-----------------------"
    action_createLogRenderer();
    action_displayLogRenderer();
    action_hideLogRenderer();
    action_eraseLogRenderer();
    action_viewLogFile();
    action_closeViewLogFile();
    render_notify_log(context);

  }
} 