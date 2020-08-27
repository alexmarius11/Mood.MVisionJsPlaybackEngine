
import amGeneralEntity    = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneralError     = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
//import amGeneralFirmwareProperties  = require("../../../../../app/ts/abstract/am_general/a_firmwareproperties/A_FirmwareProperties");

import amGeneralFactoryFirmwareProperties = require("../../../../../app/ts/abstract/am_general/a_firmwareproperties/AFactory_FirmwareProperties");

import rmGeneralFirmwareProperties        = require("../../../../../app/ts/reusable/rm_general/r_firmwareproperties/R_FirmwareProperties");
import rmGeneralEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_general
{
  export class RFactory_FirmwareProperties extends rmGeneralEntityFactory.rm_general.RFactory_Entity
                                                   implements amGeneralFactoryFirmwareProperties.am_general.AFactory_FirmwareProperties
  {
    createEntity(entityName : string, error: amGeneralError.am_general.A_Error): amGeneralEntity.am_general.A_Entity
    {
      return new rmGeneralFirmwareProperties.rm_general.R_FirmwareProperties();
    }
  }
} 


