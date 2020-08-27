import amTransversalServicesILogMain = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/I_LogMain");

import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import rmTransversalServices = require("../../../../../app/ts/reusable/rm_transversalservices/r_logservice/R_LogService");
                                                                                                        

export module rm_transversalservices
{
  export class IImpl_LogMain_R implements amTransversalServicesILogMain.am_transversalservices.I_LogMain
  {
    _name: string;    

    //----------- owner
    _owner: rmTransversalServices.rm_transversalservices.R_LogService;

    //----------- constructor 
    constructor(owner: rmTransversalServices.rm_transversalservices.R_LogService)  
    {
      this._owner = owner;  
    }

    //----------------
    public log(logMsgLevel: number, logMsg: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      this._owner.log(logMsgLevel, logMsg, error, context, callback) ;
    }
  }
} 