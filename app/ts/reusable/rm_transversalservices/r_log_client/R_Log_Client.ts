import amTransversalServicesLogService  = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");
import amTransversalServicesILogMain    = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/I_LogMain");
import amTransversalServicesILogConfig  = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/I_LogConfig");

import amGeneralError                          = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralService                        = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");
import amGeneralFactoryDescription             = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amTransversalServicesLogConsumer        = require("../../../../../app/ts/abstract/am_transversalservices/a_log_consumer/A_Log_Consumer");

import rmGeneralService                = require("../../../../../app/ts/reusable/rm_general/r_service/R_Service");
import rmTransversalServicesILogMain   = require("../../../../../app/ts/reusable/rm_transversalservices/r_log_client/IImpl_LogMain_LogClient");
import rmTransversalServicesILogConfig = require("../../../../../app/ts/reusable/rm_transversalservices/r_log_client/IImpl_LogConfig_LogClient");
import rmTransversalServicesRemoteService = require("../../../../../app/ts/reusable/rm_transversalservices/r_log_client/IImpl_RemoteService_LogClient");

//import modSocketIO = require("../../../../../app/js/socket.io"); //.js

//import "../../../../../app/js/socket.io"; //.js
//import "/socket.io.js"; //.js
declare var io : any;

export module rm_transversalservices
{
  export class R_Log_Client   extends rmGeneralService.rm_general.R_Service 
                              implements amTransversalServicesLogService.am_transversalservices.A_LogService
  {
    //---------------- constant 
    LOGMSG_FATALERROR:number    = 1;
    LOGMSG_ERROR:number         = 2;
    LOGMSG_WARNING:number       = 3;
    LOGMSG_INFO:number          = 4;
    LOGMSG_TRACELEVEL1:number   = 5;
    LOGMSG_TRACELEVEL2:number   = 6;
    LOGMSG_TRACELEVEL3:number   = 7;

    _socket : any ; 
    _remoteServerUrl : string ; 

    //---------- interfaces
    _iLogMain       : amTransversalServicesILogMain.am_transversalservices.I_LogMain ;
    _iLogConfig     : amTransversalServicesILogConfig.am_transversalservices.I_LogConfig ;

    //----------- composants 
    _aLogService   : amTransversalServicesLogService.am_transversalservices.A_LogService; 
    _aLogConsumer  : amTransversalServicesLogConsumer.am_transversalservices.A_Log_Consumer; 

    //------------------------------------------------------
    constructor( aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription, 
                 aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                 aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                 error              : amGeneralError.am_general.A_Error)  
    {      
      super(aFactoryDescription, aServiceContainer, aLogService, error);

      this._callbackArray = new Array<any>();
      this._callbackId    = 0;
      this._isRemoteCallback = true;

      this._socket = null;
      this._remoteServerUrl = "";

      this._iRemoteService  = new rmTransversalServicesRemoteService.rm_transversalservices.IImpl_RemoteService_LogClient(this) ;

      this._iLogMain       = new rmTransversalServicesILogMain.rm_transversalservices.IImpl_LogMain_LogClient(this) ;
      this._iLogConfig     = new rmTransversalServicesILogConfig.rm_transversalservices.IImpl_LogConfig_LogClient(this) ;
      
      //this._aLogService = aLogService;
      this._aLogConsumer = null;
    }    
    
    //-----------------------------------
    public startup_withConnectClient(remoteServerUrl: string) : void
    {
      this._remoteServerUrl = remoteServerUrl;
      this._socket = io(this._remoteServerUrl); ///"http://localhost:3000");
      this._iRemoteService.receive(this._socket, null);
    }

    //-----------------------------------
    public startup(socket: any) : void
    {
      this._socket = socket;
      this._iRemoteService.receive(this._socket, null);
    }

    //------------------------------------------
    public setTargetService(aTargetService: amGeneralService.am_general.A_Service) : void
    {
      this._aTargetService = aTargetService;    
    }
    
    //-------------------------------------------
    public setConsumerService(aConsumerService: amGeneralService.am_general.A_Service) : void
    {
      this._aConsumerService = aConsumerService;    
      this._aLogConsumer  = <amTransversalServicesLogConsumer.am_transversalservices.A_Log_Consumer>aConsumerService;    
    }



  }
} 