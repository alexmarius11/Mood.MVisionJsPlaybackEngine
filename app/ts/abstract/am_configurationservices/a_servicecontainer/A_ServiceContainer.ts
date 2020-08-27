import amGeneral = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");

import amConfigurationServices = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/I_ServiceContainer_ServiceManager");

export module am_configurationservices
{
  export interface A_ServiceContainer extends amGeneral.am_general.A_Service 
  {
    _iServiceManager : amConfigurationServices.am_configurationservices.I_ServiceContainer_ServiceManager ;
  }
} 