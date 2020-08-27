import amTransversalServicesINotifyLogMain = require("../../../../../app/ts/abstract/am_transversalservices/a_log_consumer/I_Log_notifyLogMain");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import rmRenderingServicesLogConsumerLogRenderer = require("../../../../../app/ts/reusable/rm_renderingservices/r_logrenderer/R_LogConsumer_LogRenderer");


export module rm_transversalservices
{
  export class IImpl_Log_notifyLogMain_LogConsumer_LogRenderer implements amTransversalServicesINotifyLogMain.am_transversalservices.I_Log_notifyLogMain
  {
    //----------- properties
    _name: string;  

    //----------- owner
    _owner: rmRenderingServicesLogConsumerLogRenderer.rm_renderingservices.R_LogConsumer_LogRenderer;

    //----------- constructor 
    constructor(owner: rmRenderingServicesLogConsumerLogRenderer.rm_renderingservices.R_LogConsumer_LogRenderer)  
    {
      this._owner = owner;  
    }

    //-----------------------------
    public notify_log(logMsgLevel: number, logMsg: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      this._owner._aLogRenderer._iLogMainRenderer.render_notify_log(context);
    }

  }
} 