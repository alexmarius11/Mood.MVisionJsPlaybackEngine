import amGeneral = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");

import amCoreServices = require("../../../../../app/ts/abstract/am_coreservices/a_playlistwatcher/I_PlaylistWatcher");

export module am_coreservices
{
  export interface A_PlaylistWatcher extends amGeneral.am_general.A_Service 
  {
    _iPlaylistWatcher : amCoreServices.am_coreservices.I_PlaylistWatcher ;
  }
} 