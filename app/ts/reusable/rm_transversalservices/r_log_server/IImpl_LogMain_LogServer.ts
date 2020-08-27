import amGeneral = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/I_SDK_TvSignageSetup");
import amTransversalServicesILogMain   = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/I_LogMain");
import amTransversalServicesILogConfig = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/I_LogConfig");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import amGeneralCaptureScreenInfo   = require("../../../../../app/ts/abstract/am_general/a_capturescreeninfo/A_CaptureScreenInfo");
import amGeneralFailureModeInfo   = require("../../../../../app/ts/abstract/am_general/a_failuremodeinfo/A_FailureModeInfo");
import amGeneralTileInfo          = require("../../../../../app/ts/abstract/am_general/a_tileinfo/A_TileInfo");
import amGeneralSystemMonitorInfo = require("../../../../../app/ts/abstract/am_general/a_systemmonitorinfo/A_SystemMonitorInfo");
import amGeneralUsageData         = require("../../../../../app/ts/abstract/am_general/a_usagedata/A_UsageData");
import amGeneralUsagePermissions  = require("../../../../../app/ts/abstract/am_general/a_usagepermissions/A_UsagePermissions");

import rmTransversalServicesLogServer = require("../../../../../app/ts/reusable/rm_transversalservices/r_log_server/R_Log_Server");

export module rm_transversalservices
{
  export class IImpl_LogMain_LogServer implements amTransversalServicesILogMain.am_transversalservices.I_LogMain
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

    //----------------------
    public log(logMsgLevel: number, logMsg: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      this._owner._aTargetLog._iLogMain.log(logMsgLevel, logMsg, error, context, callback);        
    }

  }
} 