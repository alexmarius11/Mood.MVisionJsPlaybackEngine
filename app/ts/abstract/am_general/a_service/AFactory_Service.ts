
import amGeneralService     = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");
import amGeneralError       = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralProperties  = require("../../../../../app/ts/abstract/am_general/a_property/A_Properties");

import amGeneralFactoryDescription             = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amTransversalServicesLogService         = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

export module am_general
{
  export interface AFactory_Service 
  {
    getFactoryName() : string;

    createService( aFactoryDescription : amGeneralFactoryDescription.am_general.A_FactoryDescription, 
                   aServiceContainer   : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer, 
                   serviceProperties   : amGeneralProperties.am_general.A_Properties, 
                   aLogService         : amTransversalServicesLogService.am_transversalservices.A_LogService,
                   error               : amGeneralError.am_general.A_Error)
                        : amGeneralService.am_general.A_Service;
  }
} 

