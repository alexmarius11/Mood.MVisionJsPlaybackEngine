import amCoreServicesIPlaylistController = require("../../../../../app/ts/abstract/am_coreservices/a_playlistcontroller/I_PlaylistController");

import rmCoreServicesPlaylistController = require("../../../../../app/ts/reusable/rm_coreservices/r_playlistcontroller/R_PlaylistController");
                                                     
                                                     

export module rm_coreservices
{
  export class IImpl_PlaylistController_R implements  amCoreServicesIPlaylistController.am_coreservices.I_PlaylistController
  {
    _name: string;    

    //----------- owner
    _owner: rmCoreServicesPlaylistController.rm_coreservices.R_PlaylistController;

    //----------- constructor 
    constructor(owner: rmCoreServicesPlaylistController.rm_coreservices.R_PlaylistController)  
    {
      this._owner = owner;  
    }
  }
} 