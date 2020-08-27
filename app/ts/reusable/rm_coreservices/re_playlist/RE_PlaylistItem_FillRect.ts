import amCoreServices   = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_FillRect");

import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");
import amPlaylistItem  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem");
import amPlaylistMediaItem = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_MediaItem");

import rmCoreServicesPlaylistItem  = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem");

import rmPlaylistItem  = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem");
import rmPlaylistMediaItem = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_MediaItem");

export module rm_coreservices
{
  export class RE_PlaylistItem_FillRect  extends rmPlaylistMediaItem.rm_coreservices.RE_PlaylistItem_MediaItem
                                         implements amCoreServices.am_coreservices.AE_PlaylistItem_FillRect  
  {

    _main_BackColor  ;
    _main_BackImage  ;
    _main_H          ;
    _main_ID         ;
    _main_IsMainZone ;
    _main_Name       ;
    _main_Playlist   ;
    _main_VirtualPlaylistId ;
    _main_W          ;
    _main_X          ;
    _main_Y          ;
    _main_Z          ;
  
    _meta_ID         ;
    _meta_Name       ;
    _meta_CustomID   ;
    _meta_MediaType  ;

    _diff_duration   ;
    _diff_startDate  ;
    _diff_endDate    ;
    _diff_startTime  ;
    _diff_endTime    ;
    _diff_weekdays   ;

     //----------------
     constructor()
     {
       super();
       this._playlistItemTypeName = "FILL_RECT";

       this._main_BackColor  = null;
       this._main_BackImage  = null;
       this._main_H          = null;
       this._main_ID         = null;
       this._main_IsMainZone = null;
       this._main_Name       = null;
       this._main_Playlist   = null;
       this._main_VirtualPlaylistId = null;
       this._main_W          = null;
       this._main_X          = null;
       this._main_Y          = null;
       this._main_Z          = null;   

       this._meta_ID         = null; 
       this._meta_Name       = null; 
       this._meta_CustomID   = null;
       this._meta_MediaType  = null;
   
       this._diff_duration   = null;
       this._diff_startDate  = null;
       this._diff_endDate    = null;
       this._diff_startTime  = null;
       this._diff_endTime    = null;
       this._diff_weekdays   = null;
   
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

      //-----------------------------------------------------
      public toJSONString() : string
      {
        var result = "{";
        result += "BackColor : "                   + JSON.stringify(this._main_BackColor);
        result += ","  + "BackImage : "            + JSON.stringify(this._main_BackImage);
        result += ","  + "H : "                    + JSON.stringify(this._main_H);
        result += ","  + "ID : "                   + JSON.stringify(this._main_ID);
        result += ","  + "IsMainZone : "           + JSON.stringify(this._main_IsMainZone);
        result += ","  + "Name : "                 + JSON.stringify(this._main_Name);
        result += ","  + "Playlist : "             + JSON.stringify(this._main_Playlist);
        result += ","  + "VirtualPlaylistId : "    + JSON.stringify(this._main_VirtualPlaylistId);
        result += ","  + "W : "                    + JSON.stringify(this._main_W);
        result += ","  + "X : "                    + JSON.stringify(this._main_X);
        result += ","  + "Y : "                    + JSON.stringify(this._main_Y);
        result += ","  + "Z : "                    + JSON.stringify(this._main_Z);

        result += "}";
        return result;
      }

  }
} 