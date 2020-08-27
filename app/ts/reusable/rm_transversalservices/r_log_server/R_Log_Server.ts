
import amTransversalServices  = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/A_SDK_JsTV");
import amTransversalServicesILogMain   = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/I_LogMain");
import amTransversalServicesILogConfig = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/I_LogConfig");

import amGeneralError                          = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralService                        = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");
import amGeneralFactoryDescription             = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amTransversalServicesLogService         = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import rmGeneralService                = require("../../../../../app/ts/reusable/rm_general/r_service/R_Service");

import rmTransversalServicesRemoteService = require("../../../../../app/ts/reusable/rm_transversalservices/r_log_server/IImpl_RemoteService_LogServer");
import rmTransversalServicesILogMain      = require("../../../../../app/ts/reusable/rm_transversalservices/r_log_server/IImpl_LogMain_LogServer");
import rmTransversalServicesILogConfig    = require("../../../../../app/ts/reusable/rm_transversalservices/r_log_server/IImpl_LogConfig_LogServer");

export module rm_transversalservices
{
  export class R_Log_Server   extends rmGeneralService.rm_general.R_Service 
                             implements amTransversalServicesLogService.am_transversalservices.A_LogService
  {
    //---------------- constants 
    LOGMSG_FATALERROR:number    = 1;
    LOGMSG_ERROR:number         = 2;
    LOGMSG_WARNING:number       = 3;
    LOGMSG_INFO:number          = 4;
    LOGMSG_TRACELEVEL1:number   = 5;
    LOGMSG_TRACELEVEL2:number   = 6;
    LOGMSG_TRACELEVEL3:number   = 7;

    //---------- interfaces
    _iLogMain      : amTransversalServicesILogMain.am_transversalservices.I_LogMain ;
    _iLogConfig   : amTransversalServicesILogConfig.am_transversalservices.I_LogConfig ;

    //----------- composants 
    _aLogService : amTransversalServicesLogService.am_transversalservices.A_LogService; 

    _aTargetLog  : amTransversalServicesLogService.am_transversalservices.A_LogService;

    constructor( aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription, 
                 aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                 aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                 error              : amGeneralError.am_general.A_Error)  
    {      
      super(aFactoryDescription, aServiceContainer, aLogService, error);

      this._iRemoteService  = new rmTransversalServicesRemoteService.rm_transversalservices.IImpl_RemoteService_LogServer(this) ;

      this._iLogMain       = new rmTransversalServicesILogMain.rm_transversalservices.IImpl_LogMain_LogServer(this) ;
      this._iLogConfig     = new rmTransversalServicesILogConfig.rm_transversalservices.IImpl_LogConfig_LogServer(this) ;

      //this._aLogService = aLogService;
    }

    
    //-----------------------------------------
    public setTargetService(targetService: amGeneralService.am_general.A_Service)
    {
      this._aTargetLog = <amTransversalServicesLogService.am_transversalservices.A_LogService>targetService;
    }
    

  }
} 