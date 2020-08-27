import amTransversalServicesNotifyLogMain = require("../../../../../app/ts/abstract/am_transversalservices/a_log_consumer/I_Log_notifyLogMain");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");


import rmTransversalServicesLogConsumer = require("../../../../../app/ts/reusable/rm_transversalservices/r_log_consumer/R_Log_Consumer");


export module rm_transversalservices
{
  export class IImpl_Log_notifyLogMain_LogConsumer implements amTransversalServicesNotifyLogMain.am_transversalservices.I_Log_notifyLogMain
  {
    //----------- properties
    _name: string;  

    //----------- owner
    _owner: rmTransversalServicesLogConsumer.rm_transversalservices.R_Log_Consumer;

    //----------- constructor 
    constructor(owner: rmTransversalServicesLogConsumer.rm_transversalservices.R_Log_Consumer)  
    {
      this._owner = owner;  
    }

    //-----------------------------
    public notify_log(logMsgLevel: number, logMsg: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }
    
  }
} 