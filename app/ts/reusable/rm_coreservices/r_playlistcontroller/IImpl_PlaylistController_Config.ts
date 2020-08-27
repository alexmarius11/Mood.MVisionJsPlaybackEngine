import amCoreServicesIPlaylistControllerConfig = require("../../../../../app/ts/abstract/am_coreservices/a_playlistcontroller/I_PlaylistController_Config");

import rmCoreServicesPlaylistController = require("../../../../../app/ts/reusable/rm_coreservices/r_playlistcontroller/R_PlaylistController");
                                                     
import amGeneralService              = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");
                                                     
import amGeneralError    = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext  = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");
import amGeneralScreenProperties     = require("../../../../../app/ts/abstract/am_general/a_screenproperties/A_ScreenProperties");

import amPlaylist      = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_MainPlaylist");
import amGeneralPlaybackGlobalConfig = require("../../../../../app/ts/abstract/am_playback/ae_playbackglobalconfig/AE_PlaybackGlobalConfig");

export module rm_coreservices
{
  export class IImpl_PlaylistController_Config implements  amCoreServicesIPlaylistControllerConfig.am_coreservices.I_PlaylistController_Config
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
    public loadPlaylist( aPlaylistType: string, aPlaylistFile: amGeneralFileInfo.am_general.A_FileInfo, 
                         aMediaFilesFolder: amGeneralFileInfo.am_general.A_FileInfo,  bTestFileExists: boolean,
                         error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      return this._owner.loadPlaylist(aPlaylistType, aPlaylistFile, aMediaFilesFolder, bTestFileExists, error, context, callback);
    }

    //-------------------------------------------
    public getPlaylist() : amPlaylist.am_coreservices.AE_MainPlaylist 
    {
      return this._owner.getPlaylist();
    }

    //--------------------
    // get empty playlist
    //--------------------

    public getEmptyPlaylist(aPlaylistType: string) : string
    {
      return this._owner.getEmptyPlaylist(aPlaylistType);
    }

    //----------------------------
    // set / get screen properties
    //----------------------------

    //----------------------
    public setScreenProperties( aScreenProperties: amGeneralScreenProperties.am_general.A_ScreenProperties)
    {
      this._owner.setScreenProperties(aScreenProperties);
    }

    //----------------------
    public getScreenProperties() : amGeneralScreenProperties.am_general.A_ScreenProperties
    {
      return this._owner.getScreenProperties();
    }

    //--------------------------------------
    // set / get playlist controller config
    //---------------------------------------

    //----------------------------
    public setPlaybackGlobalConfig( aPlaybackGlobalConfig: amGeneralPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig)
    {
      return this._owner.setPlaybackGlobalConfig(aPlaybackGlobalConfig);
    }

    //-----------------------------
    public getPlaybackGlobalConfig() : amGeneralPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig
    {
      return this._owner.getPlaybackGlobalConfig();
    }

  }
} 