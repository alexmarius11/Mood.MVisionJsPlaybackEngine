import amGeneralEntity  = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralServiceFactories = require("../../../../../app/ts/abstract/am_general/a_service/AFactory_ServiceFactories");

import rmGeneralServiceFactories  = require("../../../../../app/ts/reusable/rm_general/r_service/R_ServiceFactories");
import rmGeneralEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_general
{
  export class RFactory_ServiceFactories implements amGeneralServiceFactories.am_general.AFactory_ServiceFactories
  {
    createEntity(entityName : string, error: amGeneralError.am_general.A_Error): amGeneralEntity.am_general.A_Entity
    {
      return new rmGeneralServiceFactories.rm_general.R_ServiceFactories();
    }
  }
} 


