
import amGeneral = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");

import amConfigurationServices2   = require("../../../../../app/ts/abstract/am_configurationservices/a_platformconfigurator/I_PlatformConfigurator_LoadConfigurations");
import amConfigurationServices3  = require("../../../../../app/ts/abstract/am_configurationservices/a_platformconfigurator/I_PlatformConfigurator_StartupConfiguration");
import amConfigurationServices4  = require("../../../../../app/ts/abstract/am_configurationservices/a_platformconfigurator/I_PlatformConfigurator_PlatformConfiguration");

export module am_configurationservices
{
  export interface A_PlatformConfigurator  extends amGeneral.am_general.A_Service 
  {
    _iLoadConfigurations         : amConfigurationServices2.am_configurationservices.I_PlatformConfigurator_LoadConfigurations ;
    _iStartupConfiguration       : amConfigurationServices3.am_configurationservices.I_PlatformConfigurator_StartupConfiguration ;
    _iPlatformConfiguration      : amConfigurationServices4.am_configurationservices.I_PlatformConfigurator_PlatformConfiguration ;
  }
} 