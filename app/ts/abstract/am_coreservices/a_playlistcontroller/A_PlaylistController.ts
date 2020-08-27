import amGeneral = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");

import amIPlaylistController         = require("../../../../../app/ts/abstract/am_coreservices/a_playlistcontroller/I_PlaylistController");
import amIPlaylistControllerConfig   = require("../../../../../app/ts/abstract/am_coreservices/a_playlistcontroller/I_PlaylistController_Config");
import amIPlaylistControllerCommands = require("../../../../../app/ts/abstract/am_coreservices/a_playlistcontroller/I_PlaylistController_Commands");
import amIPlaylistControllerRun      = require("../../../../../app/ts/abstract/am_coreservices/a_playlistcontroller/I_PlaylistController_Run");

export module am_coreservices
{
  export interface A_PlaylistController extends amGeneral.am_general.A_Service 
  {
    _iPlaylistController         : amIPlaylistController.am_coreservices.I_PlaylistController ;
    _iPlaylistControllerConfig   : amIPlaylistControllerConfig.am_coreservices.I_PlaylistController_Config ;
    _iPlaylistControllerCommands : amIPlaylistControllerCommands.am_coreservices.I_PlaylistController_Commands ;
    _iPlaylistControllerRun      : amIPlaylistControllerRun.am_coreservices.I_PlaylistController_Run ;
  }
} 