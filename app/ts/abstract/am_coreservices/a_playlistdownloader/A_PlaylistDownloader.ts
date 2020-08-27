import amGeneral = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");

import amCoreServices = require("../../../../../app/ts/abstract/am_coreservices/a_playlistdownloader/I_PlaylistDownloader");

export module am_coreservices
{
  export interface A_PlaylistDownloader extends amGeneral.am_general.A_Service 
  {
    _iPlaylistDownloader : amCoreServices.am_coreservices.I_PlaylistDownloader ;
  }
} 