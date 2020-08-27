
import amGeneralProperties = require("../../../../../app/ts/abstract/am_general/a_property/A_Properties");
import amGeneralError      = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralService    = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");

import amConfigurationServices = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/I_ServiceContainer_ServiceManager");
import amConfigurationServicesServiceContainer = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amConfigurationServicesServiceLocator   = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");

import amTransversalServicesLogService          = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import rmTransversalServices = require("./R_ServiceContainer");
                                                                                                        

export module rm_configurationservices
{
  export class IImpl_ServiceContainer_ServiceManager_R implements amConfigurationServices.am_configurationservices.I_ServiceContainer_ServiceManager
  {
    _name: string;    

    //----------- owner
    _owner: rmTransversalServices.rm_configurationservices.R_ServiceContainer;

    //----------- constructor 
    constructor(owner: rmTransversalServices.rm_configurationservices.R_ServiceContainer)  
    {
      this._owner = owner;  
    }

    //----------------------
    public getServiceByAbstractName( abstractName: string, 
                                     properties: amGeneralProperties.am_general.A_Properties, 
                                     error: amGeneralError.am_general.A_Error) : amGeneralService.am_general.A_Service
    {
      return this._owner.getServiceByAbstractName(abstractName, properties, error) ;
    }

    //----------------------
    public addService(aService : amGeneralService.am_general.A_Service, error: amGeneralError.am_general.A_Error) : void
    {
      this._owner.addService(aService,error);
    }

    //----------------------
    public injectDependenciesForAllServices( aServiceContainer : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer, 
                                             aServiceLocator   : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator, 
                                             aLogService       : amTransversalServicesLogService.am_transversalservices.A_LogService, 
                                             error : amGeneralError.am_general.A_Error) : void      
 
    {
      this._owner.injectDependenciesForAllServices(aServiceContainer, aServiceLocator, aLogService, error);
    }


  }
} 