
import amGeneral  = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneralFactoryBeaconInfo  = require("../../../../../app/ts/abstract/am_general/a_beaconinfo/AFactory_BeaconInfo");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import rmGeneralBeaconInfo    = require("../../../../../app/ts/reusable/rm_general/r_beaconinfo/R_BeaconInfo");
import rmGeneralEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_general
{
  export class RFactory_BeaconInfo   extends    rmGeneralEntityFactory.rm_general.RFactory_Entity
                                     implements amGeneralFactoryBeaconInfo.am_general.AFactory_BeaconInfo
  {
    createEntity(entityName : string, error: amGeneralError.am_general.A_Error): amGeneral.am_general.A_Entity
    {
      return new rmGeneralBeaconInfo.rm_general.R_BeaconInfo();
    }
  }
} 


