
import amGeneral  = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneralFactoryDeviceTimerInfo  = require("../../../../../app/ts/abstract/am_general/a_devicetimerinfo/AFactory_DeviceTimerInfo");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import rmGeneralDeviceTimerInfo    = require("../../../../../app/ts/reusable/rm_general/r_devicetimerinfo/R_DeviceTimerInfo");
import rmGeneralEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_general
{
  export class RFactory_DeviceTimerInfo   extends    rmGeneralEntityFactory.rm_general.RFactory_Entity
                                     implements amGeneralFactoryDeviceTimerInfo.am_general.AFactory_DeviceTimerInfo
  {
    createEntity(entityName : string, error: amGeneralError.am_general.A_Error): amGeneral.am_general.A_Entity
    {
      return new rmGeneralDeviceTimerInfo.rm_general.R_DeviceTimerInfo();
    }
  }
} 


