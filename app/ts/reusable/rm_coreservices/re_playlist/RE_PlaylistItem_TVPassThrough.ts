import amCoreServices   = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_TVPassThrough");

import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");
import amPlaylistItem  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem");

import rmCoreServicesPlaylistItem  = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_MediaItem");

export module rm_coreservices
{
  export class RE_PlaylistItem_TVPassThrough extends rmCoreServicesPlaylistItem.rm_coreservices.RE_PlaylistItem_MediaItem
                                            implements amCoreServices.am_coreservices.AE_PlaylistItem_TVPassThrough 
  {
     //----------------
     constructor()
     {
       super();
       this._playlistItemTypeName = "TV_PASS_THROUGH"; 
     }

      //------------------------------
      public loadProperties( playlistType : string, jsonObject : any, aPlaylistFile: amGeneralFileInfo.am_general.A_FileInfo, 
                             aParent: amPlaylistItem.am_coreservices.AE_PlaylistItem,
                             error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
      {
         if (playlistType == "mood_v5")
           return this.loadProperties_MoodV5(playlistType, jsonObject, aPlaylistFile, aParent, error, context, callback);

         if (playlistType == "custom_v1")
           return this.loadProperties_CustomV1(playlistType, jsonObject, aPlaylistFile, aParent, error, context, callback);
      }


      //------------------------------
      public loadProperties_MoodV5( playlistType : string, jsonObject : any, aPlaylistFile: amGeneralFileInfo.am_general.A_FileInfo, 
                                    aParent: amPlaylistItem.am_coreservices.AE_PlaylistItem,
                                    error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
      {
      }

      //------------------------------
      public loadProperties_CustomV1( playlistType : string, jsonObject : any, aPlaylistFile: amGeneralFileInfo.am_general.A_FileInfo, 
                                      aParent: amPlaylistItem.am_coreservices.AE_PlaylistItem,
                                      error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
      {
      }


  }
} 