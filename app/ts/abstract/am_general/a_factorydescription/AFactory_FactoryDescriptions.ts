import amGeneral  = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneral2  = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneral3 = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescriptions");
import amGeneral4 = require("../../../../../app/ts/abstract/am_general/a_entity/AFactory_Entity");

export module am_general
{
  export interface AFactory_FactoryDescriptions extends amGeneral4.am_general.AFactory_Entity
  {
    createEntity(entityName : string, error: amGeneral2.am_general.A_Error): amGeneral.am_general.A_Entity;
  }
}  


