
import amGeneral  = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneralFactoryUsagePermissions  = require("../../../../../app/ts/abstract/am_general/a_usagepermissions/AFactory_UsagePermissions");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import rmGeneralUsagePermissions    = require("../../../../../app/ts/reusable/rm_general/r_usagepermissions/R_UsagePermissions");
import rmGeneralEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_general
{
  export class RFactory_UsagePermissions   extends    rmGeneralEntityFactory.rm_general.RFactory_Entity
                                     implements amGeneralFactoryUsagePermissions.am_general.AFactory_UsagePermissions
  {
    createEntity(entityName : string, error: amGeneralError.am_general.A_Error): amGeneral.am_general.A_Entity
    {
      return new rmGeneralUsagePermissions.rm_general.R_UsagePermissions();
    }
  }
} 


