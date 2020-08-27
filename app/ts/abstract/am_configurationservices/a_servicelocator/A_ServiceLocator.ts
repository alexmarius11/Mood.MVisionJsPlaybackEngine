import amGeneral = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");

import amConfigurationServices2 = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/I_ServiceLocator_FactorySetup");
import amConfigurationServices3 = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/I_ServiceLocator_EntityCreation");
import amConfigurationServices4 = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/I_ServiceLocator_ServiceCreation");

export module am_configurationservices
{
  export interface A_ServiceLocator extends amGeneral.am_general.A_Service 
  {
    _iFactorySetup    : amConfigurationServices2.am_configurationservices.I_ServiceLocator_FactorySetup ;
    _iEntityCreation  : amConfigurationServices3.am_configurationservices.I_ServiceLocator_EntityCreation ;    
    _iServiceCreation : amConfigurationServices4.am_configurationservices.I_ServiceLocator_ServiceCreation ;    
  }
} 