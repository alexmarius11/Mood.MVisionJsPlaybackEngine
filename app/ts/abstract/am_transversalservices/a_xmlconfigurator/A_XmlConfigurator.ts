import amGeneral = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");

import amTransversalServicesIXmlConfiguratorMain  = require("../../../../../app/ts/abstract/am_transversalservices/a_xmlconfigurator/I_XmlConfigurator_Main");
import amTransversalServicesIXmlConfiguratorSetup = require("../../../../../app/ts/abstract/am_transversalservices/a_xmlconfigurator/I_XmlConfigurator_Setup");

//---
export module am_transversalservices
{
  export interface A_XmlConfigurator extends amGeneral.am_general.A_Service 
  {
    _iXmlConfiguratorMain  : amTransversalServicesIXmlConfiguratorMain.am_transversalservices.I_XmlConfigurator_Main ;
    _iXmlConfiguratorSetup : amTransversalServicesIXmlConfiguratorSetup.am_transversalservices.I_XmlConfigurator_Setup ;
  }
} 