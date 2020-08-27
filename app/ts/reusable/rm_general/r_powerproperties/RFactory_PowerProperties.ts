
import amGeneralEntity    = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneralError     = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralPowerProperties  = require("../../../../../app/ts/abstract/am_general/a_powerproperties/A_PowerProperties");

import amGeneralFactoryPowerProperties = require("../../../../../app/ts/abstract/am_general/a_powerproperties/AFactory_PowerProperties");

import rmGeneralPowerProperties        = require("../../../../../app/ts/reusable/rm_general/r_powerproperties/R_PowerProperties");
import rmGeneralEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_general
{
  export class RFactory_PowerProperties extends  rmGeneralEntityFactory.rm_general.RFactory_Entity
                                                 implements amGeneralFactoryPowerProperties.am_general.AFactory_PowerProperties
  {
    createEntity(entityName : string, error: amGeneralError.am_general.A_Error): amGeneralEntity.am_general.A_Entity
    {
      return new rmGeneralPowerProperties.rm_general.R_PowerProperties();
    }
  }
} 


