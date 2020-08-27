import amTransversalServicesINotifyLogConfig = require("../../../../../app/ts/abstract/am_transversalservices/a_log_consumer/I_Log_notifyLogConfig");

import amGeneralError    = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext  = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");

import rmRenderingServicesLogConsumerLogRenderer = require("../../../../../app/ts/reusable/rm_renderingservices/r_logrenderer/R_LogConsumer_LogRenderer");


export module rm_transversalservices
{
  export class IImpl_Log_notifyLogConfig_LogConsumer_LogRenderer implements amTransversalServicesINotifyLogConfig.am_transversalservices.I_Log_notifyLogConfig
  {    
    //------- properties
    _name: string;  

    //----------- owner
    _owner: rmRenderingServicesLogConsumerLogRenderer.rm_renderingservices.R_LogConsumer_LogRenderer;

    //----------- constructor 
    constructor(owner: rmRenderingServicesLogConsumerLogRenderer.rm_renderingservices.R_LogConsumer_LogRenderer)  
    {
      this._owner = owner;  
    }

    //----------------------------
    public notify_setFileInfo( fileInfo : amGeneralFileInfo.am_general.A_FileInfo,  fileUrlInfo : amGeneralFileInfo.am_general.A_FileInfo, 
      error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }

  }
} 