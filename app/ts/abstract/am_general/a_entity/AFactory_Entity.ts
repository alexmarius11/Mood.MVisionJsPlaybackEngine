
import amGeneralEntity   = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

export module am_general
{
  export interface AFactory_Entity
  {
    createEntity(entityName : string, error: amGeneralError.am_general.A_Error): amGeneralEntity.am_general.A_Entity;

    getEntityName(): string;
  }
} 