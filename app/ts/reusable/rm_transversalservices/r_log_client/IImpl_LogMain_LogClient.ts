import amGeneralILogMain = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/I_LogMain");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import rmTransversalServicesLogClient = require("../../../../../app/ts/reusable/rm_transversalservices/r_log_client/R_Log_Client");

import amGeneralCaptureScreenInfo   = require("../../../../../app/ts/abstract/am_general/a_capturescreeninfo/A_CaptureScreenInfo");
import amGeneralFailureModeInfo   = require("../../../../../app/ts/abstract/am_general/a_failuremodeinfo/A_FailureModeInfo");
import amGeneralTileInfo          = require("../../../../../app/ts/abstract/am_general/a_tileinfo/A_TileInfo");
import amGeneralSystemMonitorInfo = require("../../../../../app/ts/abstract/am_general/a_systemmonitorinfo/A_SystemMonitorInfo");
import amGeneralUsageData         = require("../../../../../app/ts/abstract/am_general/a_usagedata/A_UsageData");
import amGeneralUsagePermissions  = require("../../../../../app/ts/abstract/am_general/a_usagepermissions/A_UsagePermissions");

export module rm_transversalservices
{
  export class IImpl_LogMain_LogClient implements amGeneralILogMain.am_transversalservices.I_LogMain
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


    //----------------------
    public log(logMsgLevel: number, logMsg: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      var callId = this._owner.addCallback(context, callback);
      var params = {
        "logMsgLevel" : logMsgLevel,
        "logMsg"      : logMsg,
        "callId"      : callId,
      };
      this._owner._socket.emit('log.logmain.log', params);                

    }

  }
} 