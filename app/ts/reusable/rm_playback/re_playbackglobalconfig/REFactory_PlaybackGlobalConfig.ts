
import amGeneral  = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneralError  = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amPlaybackPlaybackGlobalConfig = require("../../../../../app/ts/abstract/am_playback/ae_playbackglobalconfig/AEFactory_PlaybackGlobalConfig");

import rmGeneralEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");
import rmScreenSaverConfig = require("../../../../../app/ts/reusable/rm_playback/re_screensaverconfig/RE_ScreenSaverConfig");


export module rm_playback
{
  export class REFactory_PlaybackGlobalConfig   extends  rmGeneralEntityFactory.rm_general.RFactory_Entity
                                                      implements amPlaybackPlaybackGlobalConfig.am_playback.AEFactory_PlaybackGlobalConfig
  {
    createEntity(entityName : string, error: amGeneralError.am_general.A_Error): amGeneral.am_general.A_Entity
    {
      return new rmScreenSaverConfig.rm_playback.RE_ScreenSaverConfig();
    }
  }
} 


