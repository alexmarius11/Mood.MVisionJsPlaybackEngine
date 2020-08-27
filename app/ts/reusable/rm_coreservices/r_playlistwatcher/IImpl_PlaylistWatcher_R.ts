import amCoreServicesIPlaylistWatcher = require("../../../../../app/ts/abstract/am_coreservices/a_playlistwatcher/I_PlaylistWatcher");

import rmCoreServicesPlaylistWatcher = require("../../../../../app/ts/reusable/rm_coreservices/r_playlistwatcher/R_PlaylistWatcher");
                                                     
                                                     

export module rm_coreservices
{
  export class IImpl_PlaylistWatcher_R implements  amCoreServicesIPlaylistWatcher.am_coreservices.I_PlaylistWatcher
  {
    _name: string;    

    //----------- owner
    _owner: rmCoreServicesPlaylistWatcher.rm_coreservices.R_PlaylistWatcher;

    //----------- constructor 
    constructor(owner: rmCoreServicesPlaylistWatcher.rm_coreservices.R_PlaylistWatcher)  
    {
      this._owner = owner;  
    }
  }
} 