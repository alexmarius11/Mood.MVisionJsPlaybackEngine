import amGeneral  = require("../../../../../app/ts/abstract/am_general/i_interface/I_Interface");

import amGeneralProperties = require("../../../../../app/ts/abstract/am_general/a_property/A_Properties");
import amGeneralError      = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralService    = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");

import amConfigurationServicesServiceContainer = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amConfigurationServicesServiceLocator   = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");
import amTransversalServicesLogService          = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

export module am_configurationservices
{
  export interface I_ServiceContainer_ServiceManager extends amGeneral.am_general.I_Interface
  {
    _name: string;    

    getServiceByAbstractName( abstractName: string, 
                              properties: amGeneralProperties.am_general.A_Properties, 
                              error: amGeneralError.am_general.A_Error) : amGeneralService.am_general.A_Service;

    addService(aService : amGeneralService.am_general.A_Service, error: amGeneralError.am_general.A_Error) : void;
                          
    injectDependenciesForAllServices( aServiceContainer : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer, 
                                      aServiceLocator   : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator, 
                                      aLogService       : amTransversalServicesLogService.am_transversalservices.A_LogService, 
                                      error : amGeneralError.am_general.A_Error) : void ;     
                        
  }
} 