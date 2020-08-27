
import amTransversalServicesXmlConfigurator  = require("../../../../../app/ts/abstract/am_transversalservices/a_xmlconfigurator/A_XmlConfigurator");
import amTransversalServicesIXmlConfiguratorMain   = require("../../../../../app/ts/abstract/am_transversalservices/a_xmlconfigurator/I_XmlConfigurator_Main");
import amTransversalServicesIXmlConfiguratorSetup = require("../../../../../app/ts/abstract/am_transversalservices/a_xmlconfigurator/I_XmlConfigurator_Setup");

import amGeneralError                          = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralService                        = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");
import amGeneralFactoryDescription             = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amTransversalServicesLogService         = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import rmGeneralService                = require("../../../../../app/ts/reusable/rm_general/r_service/R_Service");

import rmTransversalServicesRemoteService = require("../../../../../app/ts/reusable/rm_transversalservices/r_xmlconfigurator_server/IImpl_XmlConfiguratorRemoteService_Server");
import rmTransversalServicesIXmlConfiguratorMain  = require("../../../../../app/ts/reusable/rm_transversalservices/r_xmlconfigurator_server/IImpl_XmlConfiguratorMain_Server");
import rmTransversalServicesIXmlConfiguratorSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_xmlconfigurator_server/IImpl_XmlConfiguratorSetup_Server");

export module rm_transversalservices
{
  export class R_XmlConfigurator_Server   extends rmGeneralService.rm_general.R_Service 
                                          implements amTransversalServicesXmlConfigurator.am_transversalservices.A_XmlConfigurator
  {
    //---------- interfaces
    _iXmlConfiguratorMain    : amTransversalServicesIXmlConfiguratorMain.am_transversalservices.I_XmlConfigurator_Main ;
    _iXmlConfiguratorSetup   : amTransversalServicesIXmlConfiguratorSetup.am_transversalservices.I_XmlConfigurator_Setup ;

    //----------- composants 
    //_aLogService : amTransversalServicesLogService.am_transversalservices.A_LogService; 

    _aTargetXmlConfigurator  : amTransversalServicesXmlConfigurator.am_transversalservices.A_XmlConfigurator;

    constructor( aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription, 
                 aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                 aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                 error              : amGeneralError.am_general.A_Error)  
    {      
      super(aFactoryDescription, aServiceContainer, aLogService, error);

      this._iRemoteService  = new rmTransversalServicesRemoteService.rm_transversalservices.IImpl_XmlConfiguratorRemoteService_Server(this) ;

      this._iXmlConfiguratorMain   = new rmTransversalServicesIXmlConfiguratorMain.rm_transversalservices.IImpl_XmlConfiguratorMain_Server(this) ;
      this._iXmlConfiguratorSetup  = new rmTransversalServicesIXmlConfiguratorSetup.rm_transversalservices.IImpl_XmlConfiguratorSetup_Server(this) ;

      //this._aLogService = aLogService;
    }

    
    //-----------------------------------------
    public setTargetService(targetService: amGeneralService.am_general.A_Service)
    {
      this._aTargetXmlConfigurator = <amTransversalServicesXmlConfigurator.am_transversalservices.A_XmlConfigurator>targetService;
    }
    
    
  }
} 