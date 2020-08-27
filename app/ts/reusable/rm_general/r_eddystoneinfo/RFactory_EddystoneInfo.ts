
import amGeneral  = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneralFactoryEddystoneInfo  = require("../../../../../app/ts/abstract/am_general/a_eddystoneinfo/AFactory_EddystoneInfo");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import rmGeneralEddystoneInfo    = require("../../../../../app/ts/reusable/rm_general/r_eddystoneinfo/R_EddystoneInfo");
import rmGeneralEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_general
{
  export class RFactory_EddystoneInfo   extends    rmGeneralEntityFactory.rm_general.RFactory_Entity
                                     implements amGeneralFactoryEddystoneInfo.am_general.AFactory_EddystoneInfo
  {
    createEntity(entityName : string, error: amGeneralError.am_general.A_Error): amGeneral.am_general.A_Entity
    {
      return new rmGeneralEddystoneInfo.rm_general.R_EddystoneInfo();
    }
  }
} 


