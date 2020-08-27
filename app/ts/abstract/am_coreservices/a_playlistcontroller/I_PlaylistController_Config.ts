import amGeneral = require("../../../../../app/ts/abstract/am_general/i_interface/I_Interface");

import amGeneralService              = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");

import amGeneralError    = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext  = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");
import amGeneralScreenProperties     = require("../../../../../app/ts/abstract/am_general/a_screenproperties/A_ScreenProperties");
import amPlaylist      = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_MainPlaylist");
import amGeneralPlaybackGlobalConfig = require("../../../../../app/ts/abstract/am_playback/ae_playbackglobalconfig/AE_PlaybackGlobalConfig");

export module am_coreservices
{
  export interface I_PlaylistController_Config extends amGeneral.am_general.I_Interface
  {
    _name: string;    

    setRenderingControllerService(targetService: amGeneralService.am_general.A_Service);
    
    getPlaylist() : amPlaylist.am_coreservices.AE_MainPlaylist ;

    loadPlaylist( aPlaylistType: string, aPlaylistFile: amGeneralFileInfo.am_general.A_FileInfo, 
                  aMediaFilesFolder: amGeneralFileInfo.am_general.A_FileInfo, bTestFileExists: boolean,
                  error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback);

    getEmptyPlaylist(aPlaylistType: string) : string;

    setScreenProperties( aScreenProperties: amGeneralScreenProperties.am_general.A_ScreenProperties);
    getScreenProperties() : amGeneralScreenProperties.am_general.A_ScreenProperties;

    setPlaybackGlobalConfig( aPlaybackGlobalConfig: amGeneralPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig);
    getPlaybackGlobalConfig() : amGeneralPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig;
  }
  
} 