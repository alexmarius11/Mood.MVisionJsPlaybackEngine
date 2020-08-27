
import amGeneralFactoryContext  = require("../../../../../app/ts/abstract/am_general/a_context/AFactory_Context");
import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralEntity  = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

import rmGeneralContext = require("../../../../../app/ts/reusable/rm_general/r_context/R_Context");
import rmGeneralEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_general
{
  export class RFactory_Context extends    rmGeneralEntityFactory.rm_general.RFactory_Entity
                                implements amGeneralFactoryContext.am_general.AFactory_Context
  {
    createEntity(entityName : string, error: amGeneralError.am_general.A_Error): amGeneralEntity.am_general.A_Entity
    {
      return new rmGeneralContext.rm_general.R_Context();
    }
  }
} 


