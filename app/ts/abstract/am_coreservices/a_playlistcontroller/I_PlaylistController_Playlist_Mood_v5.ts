import amGeneral = require("../../../../../app/ts/abstract/am_general/i_interface/I_Interface");

import amGeneralService              = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");

import amGeneralError    = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext  = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");
import amPlaylistItem  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem");

export module am_coreservices
{
  export interface I_PlaylistController_Playlist_Mood_v5 extends amGeneral.am_general.I_Interface
  {
    _name: string;    

    setRenderingControllerService(targetService: amGeneralService.am_general.A_Service);
    
    loadPlaylist( aPlaylistType: string, jsonObject : any, aPlaylistFile: amGeneralFileInfo.am_general.A_FileInfo, 
                  aParent: amPlaylistItem.am_coreservices.AE_PlaylistItem, 
                  error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback);

    
    getEmptyPlaylist() : string;

  }
  
} 