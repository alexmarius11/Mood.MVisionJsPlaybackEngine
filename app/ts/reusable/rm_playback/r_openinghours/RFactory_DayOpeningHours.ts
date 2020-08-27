
import amGeneral  = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneralError  = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amPlaybackFactoryDayOpeningHours = require("../../../../../app/ts/abstract/am_playback/a_openinghours/AFactory_DayOpeningHours");

import rmGeneralEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");
import rmPlaybackDayOpeningHours = require("../../../../../app/ts/reusable/rm_playback/r_openinghours/R_DayOpeningHours");


export module rm_playback
{
  export class RFactory_DayOpeningHours extends    rmGeneralEntityFactory.rm_general.RFactory_Entity
                                        implements amPlaybackFactoryDayOpeningHours.am_playback.AFactory_DayOpeningHours
  {
    createEntity(entityName : string, error: amGeneralError.am_general.A_Error): amGeneral.am_general.A_Entity
    {
      return new rmPlaybackDayOpeningHours.rm_playback.R_DayOpeningHours();
    }
  }
} 


