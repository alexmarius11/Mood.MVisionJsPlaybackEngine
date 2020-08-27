import amGeneralINotifyLogConfig = require("../../../../../app/ts/abstract/am_transversalservices/a_log_consumer/I_Log_notifyLogConfig");

import amGeneralError    = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext  = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");

import rmTransversalServicesLogConnector = require("../../../../../app/ts/reusable/rm_transversalservices/r_log_connector/R_Log_Connector");


export module rm_transversalservices
{
  export class IImpl_Log_notifyLogConfig_LogConnector implements amGeneralINotifyLogConfig.am_transversalservices.I_Log_notifyLogConfig
  {
    //----------- properties
    _name: string;  

    //----------- owner
    _owner: rmTransversalServicesLogConnector.rm_transversalservices.R_Log_Connector;

    //----------- constructor 
    constructor(owner: rmTransversalServicesLogConnector.rm_transversalservices.R_Log_Connector)  
    {
      this._owner = owner;  
    }

    //----------------------------
    public notify_setFileInfo( fileInfo : amGeneralFileInfo.am_general.A_FileInfo,  fileUrlInfo : amGeneralFileInfo.am_general.A_FileInfo, 
                               error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      this._owner._aTargetLogConsumer._iNotifyLogConfig.notify_setFileInfo(fileInfo,  fileUrlInfo, error, context, callback);
    }

  }
} 