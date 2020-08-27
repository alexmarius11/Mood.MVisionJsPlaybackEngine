
import amGeneral  = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneralFactoryPowerSaveModeInfo  = require("../../../../../app/ts/abstract/am_general/a_powersavemodeinfo/AFactory_PowerSafeModeInfo");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import rmGeneralPowerSaveModeInfo    = require("../../../../../app/ts/reusable/rm_general/r_powersavemodeinfo/R_PowerSaveModeInfo");
import rmGeneralEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_general
{
  export class RFactory_PowerSaveModeInfo   extends    rmGeneralEntityFactory.rm_general.RFactory_Entity
                                     implements amGeneralFactoryPowerSaveModeInfo.am_general.AFactory_PowerSafeModeInfo
  {
    createEntity(entityName : string, error: amGeneralError.am_general.A_Error): amGeneral.am_general.A_Entity
    {
      return new rmGeneralPowerSaveModeInfo.rm_general.R_PowerSaveModeInfo();
    }
  }
} 


