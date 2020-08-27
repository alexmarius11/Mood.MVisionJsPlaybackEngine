import amTransversalServicesXmlConfiguratorService  = require("../../../../../app/ts/abstract/am_transversalservices/a_xmlconfigurator/A_XmlConfigurator");
import amTransversalServicesIXmlConfiguratorMain    = require("../../../../../app/ts/abstract/am_transversalservices/a_xmlconfigurator/I_XmlConfigurator_Main");
import amTransversalServicesIXmlConfiguratorSetup   = require("../../../../../app/ts/abstract/am_transversalservices/a_xmlconfigurator/I_XmlConfigurator_Setup");

import amTransversalServicesLogService  = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import amGeneralError                          = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralService                        = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");
import amGeneralFactoryDescription             = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amTransversalServicesLogConsumer        = require("../../../../../app/ts/abstract/am_transversalservices/a_log_consumer/A_Log_Consumer");

import rmGeneralService                = require("../../../../../app/ts/reusable/rm_general/r_service/R_Service");
import rmTransversalServicesIXmlConfiguratorMain  = require("../../../../../app/ts/reusable/rm_transversalservices/r_xmlconfigurator_client/IImpl_XmlConfiguratorMain_Client");
import rmTransversalServicesIXmlConfiguratorSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_xmlconfigurator_client/IImpl_XmlConfiguratorSetup_Client");

import rmTransversalServicesRemoteService = require("../../../../../app/ts/reusable/rm_transversalservices/r_xmlconfigurator_client/IImpl_XmlConfiguratorRemoteService_Client");

//import modSocketIO = require("../../../../../app/js/socket.io"); //.js

//import "../../../../../app/js/socket.io"; //.js
//import "/socket.io.js"; //.js
declare var io : any;

export module rm_transversalservices
{
  export class R_XmlConfigurator_Client   extends rmGeneralService.rm_general.R_Service 
                                          implements amTransversalServicesXmlConfiguratorService.am_transversalservices.A_XmlConfigurator
  {

    _socket : any ; 
    _remoteServerUrl : string ; 

    //---------- interfaces
    _iXmlConfiguratorMain       : amTransversalServicesIXmlConfiguratorMain.am_transversalservices.I_XmlConfigurator_Main ;
    _iXmlConfiguratorSetup      : amTransversalServicesIXmlConfiguratorSetup.am_transversalservices.I_XmlConfigurator_Setup ;

    //----------- composants 
    //_aLogService   : amTransversalServicesLogService.am_transversalservices.A_LogService; 
    //_aLogConsumer  : amTransversalServicesLogConsumer.am_transversalservices.A_Log_Consumer; 

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

      this._iRemoteService  = new rmTransversalServicesRemoteService.rm_transversalservices.IImpl_XmlConfiguratorRemoteService_Client(this) ;

      this._iXmlConfiguratorMain  = new rmTransversalServicesIXmlConfiguratorMain.rm_transversalservices.IImpl_XmlConfiguratorMain_Client(this) ;
      this._iXmlConfiguratorSetup = new rmTransversalServicesIXmlConfiguratorSetup.rm_transversalservices.IImpl_XmlConfiguratorSetup_Client(this) ;
      
      //this._aLogService = aLogService;
      //this._aLogConsumer = null;
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
      //this._aLogConsumer  = <amTransversalServicesLogConsumer.am_transversalservices.A_Log_Consumer>aConsumerService;    
    }



  }
} 