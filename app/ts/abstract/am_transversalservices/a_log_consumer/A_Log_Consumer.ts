
import amGeneralService = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");

import amTransversalServicesINotifyLogMain   = require("../../../../../app/ts/abstract/am_transversalservices/a_log_consumer/I_Log_notifyLogMain");
import amTransversalServicesINotifyLogConfig = require("../../../../../app/ts/abstract/am_transversalservices/a_log_consumer/I_Log_notifyLogConfig");

export module am_transversalservices
{
  export interface A_Log_Consumer extends amGeneralService.am_general.A_Service
  {
    //---------- interfaces
    _iNotifyLogMain    : amTransversalServicesINotifyLogMain.am_transversalservices.I_Log_notifyLogMain ;
    _iNotifyLogConfig  : amTransversalServicesINotifyLogConfig.am_transversalservices.I_Log_notifyLogConfig ;

  }
} 