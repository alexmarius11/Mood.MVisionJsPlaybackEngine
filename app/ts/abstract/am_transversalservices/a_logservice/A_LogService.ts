import amGeneral = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");

import amTransversalServicesILogMain   = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/I_LogMain");
import amTransversalServicesILogConfig = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/I_LogConfig");

export module am_transversalservices
{
  export interface A_LogService extends amGeneral.am_general.A_Service 
  {
    LOGMSG_FATALERROR:number;
    LOGMSG_ERROR:number;
    LOGMSG_WARNING:number;
    LOGMSG_INFO:number;
    LOGMSG_TRACELEVEL1:number;
    LOGMSG_TRACELEVEL2:number;
    LOGMSG_TRACELEVEL3:number;

    _iLogMain  : amTransversalServicesILogMain.am_transversalservices.I_LogMain ;
    _iLogConfig: amTransversalServicesILogConfig.am_transversalservices.I_LogConfig ;
  }
} 