import amCoreServices   = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_Events");

import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");
import amPlaylistItem  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem");

import rmCoreServicesPlaylistItemPriorityPlaylist  = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_PriorityPlaylist");

import rmPlaylistItem  = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem");

export module rm_coreservices
{
  export class RE_PlaylistItem_Events  extends rmCoreServicesPlaylistItemPriorityPlaylist.rm_coreservices.RE_PlaylistItem_PriorityPlaylist
                                      implements amCoreServices.am_coreservices.AE_PlaylistItem_Events  
  {
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
       this._playlistItemTypeName = "EVENTS";

       this._meta_ID        = null ;
       this._meta_Name      = null ;
       this._meta_CustomID  = this ;
       this._meta_MediaType = this;
 
       this._diff_duration  = null;
       this._diff_startDate = null;
       this._diff_endDate   = null;
       this._diff_startTime = null;
       this._diff_endTime   = null;
       this._diff_weekdays  = null;


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
        var result = "";
        //-------------------- load Streams
        result += "[" ;
        var isFirstTime = true;
        for (var iEventItem = 0; iEventItem < this._playlistItems.length; iEventItem++) 
        {
          if (isFirstTime == true)
          {
            result += this._playlistItems[iEventItem].toJSONString();
            isFirstTime = false;
            continue;
          }
          result += ","  + this._playlistItems[iEventItem].toJSONString();
        }
        result += "]" ;
        result += "";
        return result;
      }

  }
} 