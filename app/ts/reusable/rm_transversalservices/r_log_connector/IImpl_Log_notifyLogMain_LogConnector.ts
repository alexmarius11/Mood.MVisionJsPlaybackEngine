import amGeneralILogMain = require("../../../../../app/ts/abstract/am_transversalservices/a_log_consumer/I_Log_notifyLogMain");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import rmTransversalServicesLogConnector = require("../../../../../app/ts/reusable/rm_transversalservices/r_log_connector/R_Log_Connector");


export module rm_transversalservices
{
  export class IImpl_Log_notifyLogMain_LogConnector implements amGeneralILogMain.am_transversalservices.I_Log_notifyLogMain
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

    //-----------------------------
    public notify_log(logMsgLevel: number, logMsg: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      this._owner._aTargetLogConsumer._iNotifyLogMain.notify_log(logMsgLevel, logMsg, error, context, callback);
    }
  }
} 