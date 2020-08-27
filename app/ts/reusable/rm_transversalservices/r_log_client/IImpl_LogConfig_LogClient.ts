import amTransversalServicesILogConfig = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/I_LogConfig");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");

import amGeneralDateTime   = require("../../../../../app/ts/abstract/am_general/a_datetime/A_DateTime");
import amGeneralTimeZone   = require("../../../../../app/ts/abstract/am_general/a_timezone/A_TimeZone");

import rmTransversalServicesLogClient = require("../../../../../app/ts/reusable/rm_transversalservices/r_log_client/R_Log_Client");

export module rm_transversalservices
{
  export class IImpl_LogConfig_LogClient implements amTransversalServicesILogConfig.am_transversalservices.I_LogConfig
  {
    //----------- properties
    _name: string;  

    //----------- owner
    _owner: rmTransversalServicesLogClient.rm_transversalservices.R_Log_Client;

    //----------- constructor 
    constructor(owner: rmTransversalServicesLogClient.rm_transversalservices.R_Log_Client)  
    {
      this._owner = owner;  
    }

    //--------------------------
    public setFileInfo( fileInfo : amGeneralFileInfo.am_general.A_FileInfo,  fileUrlInfo : amGeneralFileInfo.am_general.A_FileInfo, 
                        error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void     
    {
      var callId = this._owner.addCallback(context, callback);
      var params = {
        "logStorage"     : fileInfo.getStorage(),
        "logFolder"      : fileInfo.getPath(),
        "logFile"        : fileInfo.getName(),
        "logUrlStorage"  : fileUrlInfo.getStorage(),
        "logUrlFolder"   : fileUrlInfo.getPath(),
        "logUrlFile"     : fileUrlInfo.getName(),
        "callId"         : callId,
      };
      this._owner._socket.emit('log.logconfig.setfileinfo', params);                
    }
    

  }
} 