import amGeneral  = require("../../../../../app/ts/abstract/am_general/i_interface/I_Interface");

import amGeneral2 = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

export module am_configurationservices
{
  export interface I_PlatformConfigurator_LoadConfigurations extends amGeneral.am_general.I_Interface
  {
    _name: string;    

    loadConfigurationFiles(error: amGeneral2.am_general.A_Error) ; 

  }
} 