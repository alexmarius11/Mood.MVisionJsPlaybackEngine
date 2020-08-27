
import amGeneral   = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneral2  = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

export module am_general
{
  export interface AFactory_ServiceFactories
  {
    createEntity(entityName : string, error: amGeneral2.am_general.A_Error): amGeneral.am_general.A_Entity;    
  }
} 