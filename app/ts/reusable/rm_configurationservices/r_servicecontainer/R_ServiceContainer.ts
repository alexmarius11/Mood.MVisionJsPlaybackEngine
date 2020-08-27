
import amConfigurationServicesIServiceManager = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/I_ServiceContainer_ServiceManager");

import amGeneralError                           = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralFactoryDescription              = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer  = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amTransversalServicesLogService          = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import amConfigurationServicesServiceLocator       = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");
import amConfigurationServicesPlatformConfigurator = require("../../../../../app/ts/abstract/am_configurationservices/a_platformconfigurator/A_PlatformConfigurator");

import amGeneralService         = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");
import amGeneralServices        = require("../../../../../app/ts/abstract/am_general/a_service/A_Services");
import amGeneralProperties      = require("../../../../../app/ts/abstract/am_general/a_property/A_Properties");

import rmGeneral                = require("../../../../../app/ts/reusable/rm_general/r_service/R_Service");
import rmGeneralError           = require("../../../../../app/ts/reusable/rm_general/r_error/R_Error");

import rmConfigurationServicesServiceLocator = require("../../../../../app/ts/reusable/rm_configurationservices/r_servicelocator/R_ServiceLocator");

import rmConfigurationServices2 = require("./IImpl_ServiceContainer_ServiceManager_R");

import amTransversalServices3 = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

export module rm_configurationservices
{
  export class R_ServiceContainer extends rmGeneral.rm_general.R_Service 
                                  implements amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer
  {
    //---------- data members
    _services: amGeneralServices.am_general.A_Services;

    //---------- interfaces
    _iServiceManager : amConfigurationServicesIServiceManager.am_configurationservices.I_ServiceContainer_ServiceManager ;

    //----------- composants 
    _aServiceLocator: amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator;

    //----------- constructor 
    constructor( aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription, 
                 aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                 aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                 error              : amGeneralError.am_general.A_Error)  
    {  
      super(aFactoryDescription, aServiceContainer, aLogService, error);

      if (this._aServiceContainer == null)
        this._aServiceContainer = this;
      
      this._iServiceManager   = new rmConfigurationServices2.rm_configurationservices.IImpl_ServiceContainer_ServiceManager_R(this) ;

      //--------- we need to have service list from the begining
      this._services = rmConfigurationServicesServiceLocator.rm_configurationservices.R_ServiceLocator.startupCreateDefaultServices(error);

    }

    //------------------------------
    public injectDependencies( aServiceContainer : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer, 
                               aServiceLocator   : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator, 
                               aLogService       : amTransversalServicesLogService.am_transversalservices.A_LogService, 
                               error : amGeneralError.am_general.A_Error) : number     
    {
      //----------------
      if (this._aServiceContainer == null)
      {
        error.setError(201,"Fatal error: R_ServiceContainer.injectDependencies - A_ServiceContainer not set");
        return 1;
      }
      //----------------
      this._aServiceLocator = <amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator>
                                     this._aServiceContainer._iServiceManager.getServiceByAbstractName("A_ServiceLocator",null,error);    
      if (this._aServiceLocator == null)
      {
        error.setError(202,"Fatal error: R_ServiceContainer.injectDependencies - Cannot inject A_ServiceLocator.  A_ServiceLocator not found");
        return 1;
      }
      return 0;
    }
    
    //----------------------------------------------------------------------
    public static startup() : amGeneralError.am_general.A_Error
    {
      var error                 : amGeneralError.am_general.A_Error;
      var aServiceContainer     : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer;
      var aServiceLocator       : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator;
      var aPlatformConfigurator : amConfigurationServicesPlatformConfigurator.am_configurationservices.A_PlatformConfigurator;
      //alert("startup");
      error = new rmGeneralError.rm_general.R_Error(); // no other way, because no other service exists. the single new outside the Service Locator
      //----------
      aServiceContainer = rmConfigurationServicesServiceLocator.rm_configurationservices.R_ServiceLocator.startupCreateDefaultServiceContainer(error);
      if (error.isError())
      {
        alert("Fatal Error: R_ServiceContainer.startup cannot create the default Service Container");
        return error;
      }
      //----------
      aServiceLocator = rmConfigurationServicesServiceLocator.rm_configurationservices.R_ServiceLocator.startupCreateDefaultServiceLocator(aServiceContainer, error);
      if (error.isError())
      {
        alert("Fatal Error: R_ServiceContainer.startup cannot create the default Service Locator");
        return error; 
      }
      //----------
      aPlatformConfigurator = rmConfigurationServicesServiceLocator.rm_configurationservices.R_ServiceLocator.startupCreateDefaultPlatformConfigurator(aServiceContainer, error);
      if (error.isError())
      {
        alert("Fatal Error: R_ServiceContainer.startup cannot create the default Service Configurator");
        return error; 
      }

      //------------
      aServiceContainer._iServiceManager.addService(aServiceContainer, error);
      if (error.isError())
        return;
      aServiceContainer._iServiceManager.addService(aServiceLocator, error);
      if (error.isError())
        return;
      aServiceContainer._iServiceManager.addService(aPlatformConfigurator, error);
      if (error.isError())
        return;      
  
      //-------------
      aServiceContainer._iServiceManager.injectDependenciesForAllServices(aServiceContainer, aServiceLocator, null, error);
      if (error.isError())
      {
        alert("Fatal Error: R_ServiceContainer.startup cannot inject dependencies" + error.getErrMsg());
        return;
      }

      //-----------
      aPlatformConfigurator._iLoadConfigurations.loadConfigurationFiles(error);
      if (error.isError())
      {
        alert("Fatal Error: R_ServiceContainer.startup cannot load Configuration Files in PlatformConfigurator._iLoadConfigurations.loadConfigurationFiles");
        return error; 
      }
      //-----------
      /*
      aServiceLocator._iServiceCreation.createAllStartupServices(error);
      if (error.isError())
      {
        alert("Fatal Error: R_ServiceContainer.startup cannot create all startup services in aServiceLocator._iServiceCreation.createAllStartupServices");
        return error; 
      }
      */
      return error;
    }

    //----------------------
    public getServiceByAbstractName( abstractName: string, 
                                     properties: amGeneralProperties.am_general.A_Properties, 
                                     error: amGeneralError.am_general.A_Error) : amGeneralService.am_general.A_Service
    {
      if (this._services == null)
      {
        error.setError(210,"R_ServiceContainer.getServiceByAbstractName this._services is null");
        return;
      }
      return this._services.getServiceByAbstractName(abstractName, properties, error);
    }
    
  
    //----------------------
    public addService(aService : amGeneralService.am_general.A_Service, error: amGeneralError.am_general.A_Error) : void
    {
      this._services.addService(aService,error);
    }

    //----------------------
    public injectDependenciesForAllServices( aServiceContainer : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer, 
                                             aServiceLocator   : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator, 
                                             aLogService       : amTransversalServicesLogService.am_transversalservices.A_LogService, 
                                             error : amGeneralError.am_general.A_Error) : void      
               
    {
      var listService = this._services.getServices(error);
      for (let crtService of listService) 
      {
        crtService._iService.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
        if (error.isError())
          return ;
      }

      /*
      var listService = this._services.getServices(error);
      listService.forEach( (crtService, index) => {
        crtService._iService.injectDependencies(error);
        if (error.isError())
          return ;
      });
      */  
    }
    
  }
} 