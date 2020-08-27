
import amGeneral  = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneralFactoryPlatformInfo  = require("../../../../../app/ts/abstract/am_general/a_signageinfo/AFactory_SignageInfo");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import rmGeneralSignageInfo    = require("../../../../../app/ts/reusable/rm_general/r_signageinfo/R_SignageInfo");
import rmGeneralEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_general
{
  export class RFactory_SignageInfo   extends    rmGeneralEntityFactory.rm_general.RFactory_Entity
                                     implements amGeneralFactoryPlatformInfo.am_general.AFactory_SignageInfo
  {
    createEntity(entityName : string, error: amGeneralError.am_general.A_Error): amGeneral.am_general.A_Entity
    {
      return new rmGeneralSignageInfo.rm_general.R_SignageInfo();
    }
  }
} 


