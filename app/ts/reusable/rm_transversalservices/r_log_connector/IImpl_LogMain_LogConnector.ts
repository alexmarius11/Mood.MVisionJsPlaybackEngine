import amGeneralILogMain = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/I_LogMain");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");


import rmTransversalServicesLogConnector = require("../../../../../app/ts/reusable/rm_transversalservices/r_log_connector/R_Log_Connector");

export module rm_transversalservices
{
  export class IImpl_LogMain_LogConnector implements amGeneralILogMain.am_transversalservices.I_LogMain
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

    //----------------------
    public log(logMsgLevel: number, logMsg: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      var owner = this._owner;
      //-----------------
      var callback2 = function(ctx: amGeneralContext.am_general.A_Context)
      {
        //console.log( ctx.getResult());
        owner._iNotifyLogMain.notify_log(logMsgLevel, logMsg, error, ctx, callback) ;
      }
      owner._aTargetLogService._iLogMain.log(logMsgLevel, logMsg, error, context, callback2) ; 

    }

  }
} 