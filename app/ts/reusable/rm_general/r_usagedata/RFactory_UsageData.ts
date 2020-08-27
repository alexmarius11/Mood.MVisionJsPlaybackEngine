
import amGeneral  = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneralFactoryUsageData  = require("../../../../../app/ts/abstract/am_general/a_usagedata/AFactory_UsageData");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import rmGeneralUsageData    = require("../../../../../app/ts/reusable/rm_general/r_usagedata/R_UsageData");
import rmGeneralEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_general
{
  export class RFactory_UsageData   extends    rmGeneralEntityFactory.rm_general.RFactory_Entity
                                     implements amGeneralFactoryUsageData.am_general.AFactory_UsageData
  {
    createEntity(entityName : string, error: amGeneralError.am_general.A_Error): amGeneral.am_general.A_Entity
    {
      return new rmGeneralUsageData.rm_general.R_UsageData();
    }
  }
} 


