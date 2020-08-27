
import amGeneralService = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");

import amTransversalServicesLogService = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");
import amTransversalServicesLogConsumer = require("../../../../../app/ts/abstract/am_transversalservices/a_log_consumer/A_Log_Consumer");

export module am_transversalservices
{
  export interface A_Log_Connector extends amTransversalServicesLogService.am_transversalservices.A_LogService, 
                                           amTransversalServicesLogConsumer.am_transversalservices.A_Log_Consumer
  {
    
  }
} 