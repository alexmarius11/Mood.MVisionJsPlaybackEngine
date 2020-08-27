import amGeneral = require("../../am_general/i_interface/I_Interface");

import amGeneral3 = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneral4 = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescriptions");
import amGeneral5 = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");

export module am_configurationservices
{
  export interface I_PlatformConfigurator_PlatformConfiguration extends amGeneral.am_general.I_Interface
  {
    _name: string;    

    getServiceFactoryDescriptions(error: amGeneral3.am_general.A_Error): amGeneral4.am_general.A_FactoryDescriptions;
    getServiceFactoryDescription(factoryName: string, error: amGeneral3.am_general.A_Error): amGeneral5.am_general.A_FactoryDescription;

    getEntityFactoryDescriptions(error: amGeneral3.am_general.A_Error): amGeneral4.am_general.A_FactoryDescriptions;
    getEntityFactoryDescription(factoryName: string, error: amGeneral3.am_general.A_Error):  amGeneral5.am_general.A_FactoryDescription;

  }
} 