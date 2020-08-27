import amTransversalServicesILogConfig = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/I_LogConfig");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralSoundProperties = require("../../../../../app/ts/abstract/am_general/a_soundproperties/A_SoundProperties");
import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");

import rmTransversalServicesLogConnector = require("../../../../../app/ts/reusable/rm_transversalservices/r_log_connector/R_Log_Connector");


export module rm_transversalservices
{
  export class IImpl_LogConfig_LogConnector implements amTransversalServicesILogConfig.am_transversalservices.I_LogConfig
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

    //--------------------------
    public setFileInfo(fileInfo : amGeneralFileInfo.am_general.A_FileInfo,  fileUrlInfo : amGeneralFileInfo.am_general.A_FileInfo, 
                       error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void     
    {
      var owner = this._owner;
      //-----------------
      var callback2 = function(ctx: amGeneralContext.am_general.A_Context)
      {
        //console.log( ctx.getResult);
        owner._iNotifyLogConfig.notify_setFileInfo(fileInfo, fileUrlInfo, error, context, callback) ;
      }
      owner._aTargetLogService._iLogConfig.setFileInfo(fileInfo, fileUrlInfo, error, context, callback2) ; 
    }

  }
} 