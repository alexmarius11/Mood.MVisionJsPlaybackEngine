import amGeneral = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/I_SDK_TimeSetup");
import amTransversalServicesILogMain   = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/I_LogMain");
import amTransversalServicesILogConfig = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/I_LogConfig");

import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");
import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import amGeneralDateTime   = require("../../../../../app/ts/abstract/am_general/a_datetime/A_DateTime");
import amGeneralTimeZone   = require("../../../../../app/ts/abstract/am_general/a_timezone/A_TimeZone");

import rmTransversalServicesLogServer = require("../../../../../app/ts/reusable/rm_transversalservices/r_log_server/R_Log_Server");

export module rm_transversalservices
{
  export class IImpl_LogConfig_LogServer implements amTransversalServicesILogConfig.am_transversalservices.I_LogConfig
  {
    //----------- properties
    _name: string;  

    //----------- owner
    _owner: rmTransversalServicesLogServer.rm_transversalservices.R_Log_Server;

    //----------- constructor 
    constructor(owner: rmTransversalServicesLogServer.rm_transversalservices.R_Log_Server)  
    {
      this._owner = owner;  
    }

    //--------------------------
    public setFileInfo(  fileInfo : amGeneralFileInfo.am_general.A_FileInfo,  fileUrlInfo : amGeneralFileInfo.am_general.A_FileInfo, 
                         error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void     
    {
      this._owner._aTargetLog._iLogConfig.setFileInfo(fileInfo, fileUrlInfo, error, context, callback);        
    }

    
  }
} 