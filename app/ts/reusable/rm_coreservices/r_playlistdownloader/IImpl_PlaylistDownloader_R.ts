import amCoreServicesIPlaylistDownloader = require("../../../../../app/ts/abstract/am_coreservices/a_playlistdownloader/I_PlaylistDownloader");

import rmCoreServicesPlaylistDownloader = require("../../../../../app/ts/reusable/rm_coreservices/r_playlistdownloader/R_PlaylistDownloader");
                                                     
                                                     

export module rm_coreservices
{
  export class IImpl_PlaylistDownloader_R implements  amCoreServicesIPlaylistDownloader.am_coreservices.I_PlaylistDownloader
  {
    _name: string;    

    //----------- owner
    _owner: rmCoreServicesPlaylistDownloader.rm_coreservices.R_PlaylistDownloader;

    //----------- constructor 
    constructor(owner: rmCoreServicesPlaylistDownloader.rm_coreservices.R_PlaylistDownloader)  
    {
      this._owner = owner;  
    }
  }
} 