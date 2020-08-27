
import amTransversalServicesLogService         = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");
import amTransversalServicesLogConsumer  = require("../../../../../app/ts/abstract/am_transversalservices/a_log_consumer/A_Log_Consumer");

import amTransversalServicesILogMain   = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/I_LogMain");
import amTransversalServicesILogConfig = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/I_LogConfig");

import amGeneralError                          = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralService                        = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");
import amGeneralFactoryDescription             = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");

import rmGeneralService                = require("../../../../../app/ts/reusable/rm_general/r_service/R_Service");
import rmTransversalServicesILogMain   = require("../../../../../app/ts/reusable/rm_transversalservices/r_log_connector/IImpl_LogMain_LogConnector");
import rmTransversalServicesILogConfig = require("../../../../../app/ts/reusable/rm_transversalservices/r_log_connector/IImpl_LogConfig_LogConnector");

import amTransversalServicesINotifyLogMain   = require("../../../../../app/ts/abstract/am_transversalservices/a_log_consumer/I_Log_notifyLogMain");
import amTransversalServicesINotifyLogConfig = require("../../../../../app/ts/abstract/am_transversalservices/a_log_consumer/I_Log_notifyLogConfig");

import rmTransversalServicesINotifyLogMain    = require("../../../../../app/ts/reusable/rm_transversalservices/r_log_connector/IImpl_Log_notifyLogMain_LogConnector");
import rmTransversalServicesINotifyLogConfig  = require("../../../../../app/ts/reusable/rm_transversalservices/r_log_connector/IImpl_Log_notifyLogConfig_LogConnector");


export module rm_transversalservices
{
  export class R_Log_Connector   extends rmGeneralService.rm_general.R_Service 
                                 implements amTransversalServicesLogService.am_transversalservices.A_LogService,
                                            amTransversalServicesLogConsumer.am_transversalservices.A_Log_Consumer
  {
    //---------------- constants 
    LOGMSG_FATALERROR:number    = 1;
    LOGMSG_ERROR:number         = 2;
    LOGMSG_WARNING:number       = 3;
    LOGMSG_INFO:number          = 4;
    LOGMSG_TRACELEVEL1:number   = 5;
    LOGMSG_TRACELEVEL2:number   = 6;
    LOGMSG_TRACELEVEL3:number   = 7;

    //---------- connected components
    _aTargetLogService  : amTransversalServicesLogService.am_transversalservices.A_LogService;
    _aTargetLogConsumer : amTransversalServicesLogConsumer.am_transversalservices.A_Log_Consumer;

    //---------- interfaces
    _iLogMain       : amTransversalServicesILogMain.am_transversalservices.I_LogMain ;
    _iLogConfig     : amTransversalServicesILogConfig.am_transversalservices.I_LogConfig ;

    _iNotifyLogMain       : amTransversalServicesINotifyLogMain.am_transversalservices.I_Log_notifyLogMain ;
    _iNotifyLogConfig     : amTransversalServicesINotifyLogConfig.am_transversalservices.I_Log_notifyLogConfig ;
  
    //----------- composants 
    _aLogService : amTransversalServicesLogService.am_transversalservices.A_LogService; 

    
    constructor( aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription, 
                 aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                 aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                 error              : amGeneralError.am_general.A_Error)  
    {      
      super(aFactoryDescription, aServiceContainer, aLogService, error);
      
      this._aTargetLogService  = null;
      this._aTargetLogConsumer = null;
  
      this._iLogMain       = new rmTransversalServicesILogMain.rm_transversalservices.IImpl_LogMain_LogConnector(this) ;
      this._iLogConfig     = new rmTransversalServicesILogConfig.rm_transversalservices.IImpl_LogConfig_LogConnector(this) ;

      this._iNotifyLogMain   = new rmTransversalServicesINotifyLogMain.rm_transversalservices.IImpl_Log_notifyLogMain_LogConnector(this) ;
      this._iNotifyLogConfig = new rmTransversalServicesINotifyLogConfig.rm_transversalservices.IImpl_Log_notifyLogConfig_LogConnector(this) ;

      //this._aLogService = aLogService;
    }

    //-----------------------------------------
    public setTargetService(targetService: amGeneralService.am_general.A_Service)
    {
      this._aTargetLogService = <amTransversalServicesLogService.am_transversalservices.A_LogService>targetService;
    }
    
    //-----------------------------------------
    public setConsumerService(consumerService: amGeneralService.am_general.A_Service)
    {
      this._aTargetLogConsumer = <amTransversalServicesLogConsumer.am_transversalservices.A_Log_Consumer>consumerService;
    }

  }
} 