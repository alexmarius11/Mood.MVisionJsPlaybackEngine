import amCoreServicesIPlaylistControllerPlaylistCustomv1 = require("../../../../../app/ts/abstract/am_coreservices/a_playlistcontroller/I_PlaylistController_Playlist_Custom_v1");

import rmCoreServicesPlaylistController = require("../../../../../app/ts/reusable/rm_coreservices/r_playlistcontroller/R_PlaylistController");
                                                     
import amGeneralService              = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");
                                                     
import amGeneralError    = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext  = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");
import amPlaylistItem = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem");

export module rm_coreservices
{
  export class IImpl_PlaylistController_Playlist_Custom_v1 implements  
                                                             amCoreServicesIPlaylistControllerPlaylistCustomv1.am_coreservices.I_PlaylistController_Playlist_Custom_v1
  {
    _name: string;    

    //----------- owner
    _owner: rmCoreServicesPlaylistController.rm_coreservices.R_PlaylistController;

    //----------- constructor 
    constructor(owner: rmCoreServicesPlaylistController.rm_coreservices.R_PlaylistController)  
    {
      this._owner = owner;  
    }

    //-----------------------------------------
    public setRenderingControllerService(targetService: amGeneralService.am_general.A_Service)
    {
      this._owner.setRenderingControllerService(targetService);
    }

    //-------------------------------------------
    public loadPlaylist( aPlaylistType: string, jsonObject : any, aPlaylistFile: amGeneralFileInfo.am_general.A_FileInfo, 
                         aParent: amPlaylistItem.am_coreservices.AE_PlaylistItem,
                         error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      
    }

    //-------------------------------------------------------
    public getEmptyPlaylist() : string
    {
      return "";//IImpl_PlaylistController_Playlist_Mood_v5.EMPTY_PLAYLIST;
    }

  }
} 