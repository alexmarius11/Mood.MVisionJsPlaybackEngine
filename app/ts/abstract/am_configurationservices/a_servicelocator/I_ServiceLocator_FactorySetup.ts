import amGeneral  = require("../../../../../app/ts/abstract/am_general/i_interface/I_Interface");

import amGeneralError               = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralFactoryDescriptions = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescriptions");
import amGeneralServiceFactory     = require("../../../../../app/ts/abstract/am_general/a_service/AFactory_Service");
import amGeneralEntityFactory      = require("../../../../../app/ts/abstract/am_general/a_entity/AFactory_Entity");

export module am_configurationservices
{
  export interface I_ServiceLocator_FactorySetup extends amGeneral.am_general.I_Interface
  {
    _name: string;    

    setupServiceFactories(FactoryDescriptions: amGeneralFactoryDescriptions.am_general.A_FactoryDescriptions, error: amGeneralError.am_general.A_Error):  void;                          
    setupEntityFactories(FactoryDescriptions: amGeneralFactoryDescriptions.am_general.A_FactoryDescriptions, error: amGeneralError.am_general.A_Error):  void;    
    
    addServiceFactory(aServiceFactory: amGeneralServiceFactory.am_general.AFactory_Service, error: amGeneralError.am_general.A_Error):  void;
    addEntityFactory(aEntityFactory: amGeneralEntityFactory.am_general.AFactory_Entity, error: amGeneralError.am_general.A_Error):  void;
    

  }
} 