
import amGeneral  = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneralError  = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amPlaybackHardwareSettings = require("../../../../../app/ts/abstract/am_playback/a_hardwaresettings/AFactory_HardwareSettings");

import rmGeneralEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");
import rmPlaybackHardwareSettings = require("../../../../../app/ts/reusable/rm_playback/r_hardwaresettings/R_HardwareSettings");


export module rm_playback
{
  export class RFactory_HardwareSettings   extends    rmGeneralEntityFactory.rm_general.RFactory_Entity
                                                      implements amPlaybackHardwareSettings.am_playback.AFactory_HardwareSettings
  {
    createEntity(entityName : string, error: amGeneralError.am_general.A_Error): amGeneral.am_general.A_Entity
    {
      return new rmPlaybackHardwareSettings.rm_playback.R_HardwareSettings();
    }
  }
} 


