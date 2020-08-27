
import amTransversalServicesLogConsumer  = require("../../../../../app/ts/abstract/am_transversalservices/a_log_consumer/A_Log_Consumer");

import amGeneralError                          = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralService                        = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");
import amGeneralFactoryDescription             = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amTransversalServicesLogService         = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import rmGeneralService                = require("../../../../../app/ts/reusable/rm_general/r_service/R_Service");

import amTransversalServicesINotifyLogMain   = require("../../../../../app/ts/abstract/am_transversalservices/a_log_consumer/I_Log_notifyLogMain");
import amTransversalServicesINotifyLogConfig = require("../../../../../app/ts/abstract/am_transversalservices/a_log_consumer/I_Log_notifyLogConfig");

import rmTransversalServicesINotifyLogMain   = require("../../../../../app/ts/reusable/rm_transversalservices/r_log_consumer/IImpl_Log_notifyLogMain_LogConsumer");
import rmTransversalServicesINotifyLogConfig = require("../../../../../app/ts/reusable/rm_transversalservices/r_log_consumer/IImpl_Log_notifyLogConfig_LogConsumer");


export module rm_transversalservices
{
  export class R_Log_Consumer extends rmGeneralService.rm_general.R_Service 
                              implements amTransversalServicesLogConsumer.am_transversalservices.A_Log_Consumer
  {
    //---------- interfaces
    _iNotifyLogMain        : amTransversalServicesINotifyLogMain.am_transversalservices.I_Log_notifyLogMain ;
    _iNotifyLogConfig      : amTransversalServicesINotifyLogConfig.am_transversalservices.I_Log_notifyLogConfig ;

    //----------- composants 
    _aLogService   : amTransversalServicesLogService.am_transversalservices.A_LogService; 

    _aTargetLogService  : amTransversalServicesLogService.am_transversalservices.A_LogService;
    
    //------------------
    constructor( aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription, 
                 aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                 aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                 error              : amGeneralError.am_general.A_Error)  
    {      
      super(aFactoryDescription, aServiceContainer, aLogService, error);

      this._aTargetLogService = null;

      this._iNotifyLogMain      = new rmTransversalServicesINotifyLogMain.rm_transversalservices.IImpl_Log_notifyLogMain_LogConsumer(this) ;
      this._iNotifyLogConfig    = new rmTransversalServicesINotifyLogConfig.rm_transversalservices.IImpl_Log_notifyLogConfig_LogConsumer(this) ;
  
      //this._aLogService = aLogService;
    }

    //-----------------------------------------
    public setTargetService(aTargetService: amGeneralService.am_general.A_Service)
    {
      this._aTargetService = aTargetService;    
      this._aTargetLogService = <amTransversalServicesLogService.am_transversalservices.A_LogService>aTargetService;
    }
        
    //-----------------------------------------
    public setConsumerService(aConsumerService: amGeneralService.am_general.A_Service)
    {
      this._aConsumerService = aConsumerService;    
    }
        

  }
} 