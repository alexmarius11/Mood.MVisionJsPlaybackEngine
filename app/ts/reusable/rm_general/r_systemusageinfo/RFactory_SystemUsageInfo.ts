
import amGeneral  = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneralFactorySystemUsageInfo  = require("../../../../../app/ts/abstract/am_general/a_systemusageinfo/AFactory_SystemUsageInfo");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import rmGeneralSystemUsageInfo    = require("../../../../../app/ts/reusable/rm_general/r_systemusageinfo/R_SystemUsageInfo");
import rmGeneralEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_general
{
  export class RFactory_SystemUsageInfo   extends    rmGeneralEntityFactory.rm_general.RFactory_Entity
                                     implements amGeneralFactorySystemUsageInfo.am_general.AFactory_SystemUsageInfo
  {
    createEntity(entityName : string, error: amGeneralError.am_general.A_Error): amGeneral.am_general.A_Entity
    {
      return new rmGeneralSystemUsageInfo.rm_general.R_SystemUsageInfo();
    }
  }
} 


