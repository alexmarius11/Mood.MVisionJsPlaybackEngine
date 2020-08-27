
import amGeneral  = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneralFactorySystemMonitorInfo  = require("../../../../../app/ts/abstract/am_general/a_systemmonitorinfo/AFactory_SystemMonitorInfo");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import rmGeneralSystemMonitorInfo    = require("../../../../../app/ts/reusable/rm_general/r_systemmonitorinfo/R_SystemMonitorInfo");
import rmGeneralEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_general
{
  export class RFactory_SystemMonitorInfo   extends    rmGeneralEntityFactory.rm_general.RFactory_Entity
                                            implements amGeneralFactorySystemMonitorInfo.am_general.AFactory_SystemMonitorInfo
  {
    createEntity(entityName : string, error: amGeneralError.am_general.A_Error): amGeneral.am_general.A_Entity
    {
      return new rmGeneralSystemMonitorInfo.rm_general.R_SystemMonitorInfo();
    }
  }
} 


