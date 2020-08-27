
import amGeneral  = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneralError  = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amPlaybackFactoryOpeningHours = require("../../../../../app/ts/abstract/am_playback/a_openinghours/AFactory_OpeningHours");

import rmGeneralEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");
import rmPlaybackOpeningHours = require("../../../../../app/ts/reusable/rm_playback/r_openinghours/R_OpeningHours");


export module rm_playback
{
  export class RFactory_OpeningHours   extends    rmGeneralEntityFactory.rm_general.RFactory_Entity
                                       implements amPlaybackFactoryOpeningHours.am_playback.AFactory_OpeningHours
  {
    createEntity(entityName : string, error: amGeneralError.am_general.A_Error): amGeneral.am_general.A_Entity
    {
      return new rmPlaybackOpeningHours.rm_playback.R_OpeningHours();
    }
  }
} 


