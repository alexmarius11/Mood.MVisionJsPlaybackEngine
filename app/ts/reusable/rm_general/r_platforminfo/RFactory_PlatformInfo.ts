
import amGeneral  = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneralFactoryPlatformInfo  = require("../../../../../app/ts/abstract/am_general/a_platforminfo/AFactory_PlatformInfo");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import rmGeneralPlatformInfo    = require("../../../../../app/ts/reusable/rm_general/r_platforminfo/R_PlatformInfo");
import rmGeneralEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_general
{
  export class RFactory_PlatformInfo   extends    rmGeneralEntityFactory.rm_general.RFactory_Entity
                                     implements amGeneralFactoryPlatformInfo.am_general.AFactory_PlatformInfo
  {
    createEntity(entityName : string, error: amGeneralError.am_general.A_Error): amGeneral.am_general.A_Entity
    {
      return new rmGeneralPlatformInfo.rm_general.R_PlatformInfo();
    }
  }
} 


