
import amGeneralEntity    = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneralError     = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralDateTime  = require("../../../../../app/ts/abstract/am_general/a_datetime/A_DateTime");

import amGeneralFactoryDateTime = require("../../../../../app/ts/abstract/am_general/a_datetime/AFactory_DateTime");

import rmGeneralDateTime        = require("../../../../../app/ts/reusable/rm_general/r_datetime/R_DateTime");
import rmGeneralEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_general
{
  export class RFactory_DateTime extends    rmGeneralEntityFactory.rm_general.RFactory_Entity
                                 implements amGeneralFactoryDateTime.am_general.AFactory_DateTime
  {
    createEntity(entityName : string, error: amGeneralError.am_general.A_Error): amGeneralEntity.am_general.A_Entity
    {
      return new rmGeneralDateTime.rm_general.R_DateTime();
    }
  }
} 


