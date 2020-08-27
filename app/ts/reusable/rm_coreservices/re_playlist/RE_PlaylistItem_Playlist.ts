import amCoreServices   = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_Playlist");

import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");
import amPlaylistItem  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem");

import rmCoreServicesPlaylistItemContainer = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_Container");

import rmPlaylistItem  = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem");

export module rm_coreservices
{
  export class RE_PlaylistItem_Playlist  extends rmCoreServicesPlaylistItemContainer.rm_coreservices.RE_PlaylistItem_Container
                                         implements amCoreServices.am_coreservices.AE_PlaylistItem_Playlist  
  {
      //------------------ metadata
      _main_arrAspectRatioIDs     ;
      _main_CreationDate          ;
      _main_Description           ;
      _main_Duration              ;
      _main_ID                    ;
      _main_IsLocked              ;
      _main_IsSharedFromParentWorkgroup ;
      _main_IsUnsharedButPartOfASharedContainer ;
      _main_LastLock              ;
      _main_LastModificationDate  ;
      _main_LastModifierId        ;
      _main_Loop                  ;
      _main_MediaParentId         ;
      _main_MediaType             ;
      _main_Name                  ;
      _main_OwnerId               ;
      _main_OwnerName             ;
      _main_arrTagIDs             ;
      _main_UserIDLock            ;
      _main_UserNameLock          ;
      _main_WorkgroupId           ;
      _main_CustomID              ;
      _main_arrDiffusionDays      ;
      _main_EndTime               ;
      _main_ExpectedPlayDate      ;
      _main_ExpectedPlayTime      ;
      _main_FirstDiffusion        ;
      _main_LastDiffusion         ;
      _main_arrMediaAccessRights  ;
      _main_SharingType           ;
      _main_StartTime             ;
      _main_arrAllowedTypes       ;
      _main_arrDeniedTypes        ;
      _main_EventType             ;
      _main_FirstContentID        ;
      _main_IsRandom              ;
      _main_MaxNumberOfElements   ;
      _main_MediasIds             ;
      _main_arrPlaylistOrder      ;
      _main_arrProperties         ;
      _main_Repeat                ;
      _main_RepeatFrequency       ;
      _main_RepeatInterval        ;
      _main_RepeatNbOfTracks      ;

      _meta_ID                    ;
      _meta_Name                  ;
      _meta_CustomID              ;
      _meta_MediaType             ;
      _meta_PlaylistItemTypeName  ;

      _diff_duration              ;
      _diff_startDate             ;
      _diff_endDate               ;
      _diff_startTime             ;
      _diff_endTime               ;
      _diff_weekdays              ;

     //----------------
     constructor()
     {
       super();
       this._playlistItemTypeName = "PLAYLIST"; 

       this._main_arrAspectRatioIDs    = null; 
       this._main_CreationDate         = null; 
       this._main_Description          = null; 
       this._main_Duration             = null; 
       this._main_ID                   = null; 
       this._main_IsLocked             = null; 
       this._main_IsSharedFromParentWorkgroup = null; 
       this._main_IsUnsharedButPartOfASharedContainer = null; 
       this._main_LastLock             = null; 
       this._main_LastModificationDate = null; 
       this._main_LastModifierId       = null; 
       this._main_Loop                 = null; 
       this._main_MediaParentId        = null; 
       this._main_MediaType            = null; 
       this._main_Name                 = null; 
       this._main_OwnerId              = null; 
       this._main_OwnerName            = null; 
       this._main_arrTagIDs            = null; 
       this._main_UserIDLock           = null; 
       this._main_UserNameLock         = null; 
       this._main_WorkgroupId          = null; 
       this._main_CustomID             = null; 
       this._main_arrDiffusionDays     = null; 
       this._main_EndTime              = null; 
       this._main_ExpectedPlayDate     = null; 
       this._main_ExpectedPlayTime     = null; 
       this._main_FirstDiffusion       = null; 
       this._main_LastDiffusion        = null; 
       this._main_arrMediaAccessRights = null; 
       this._main_SharingType          = null; 
       this._main_StartTime            = null; 
       this._main_arrAllowedTypes      = null; 
       this._main_arrDeniedTypes       = null; 
       this._main_EventType            = null; 
       this._main_FirstContentID       = null; 
       this._main_IsRandom             = null; 
       this._main_MaxNumberOfElements  = null; 
       this._main_MediasIds            = null; 
       this._main_arrPlaylistOrder     = null; 
       this._main_arrProperties        = null; 
       this._main_Repeat               = null; 
       this._main_RepeatFrequency      = null; 
       this._main_RepeatInterval       = null; 
       this._main_RepeatNbOfTracks     = null; 
 
       this._meta_ID                   = null; 
       this._meta_Name                 = null; 
       this._meta_CustomID             = null; 
       this._meta_MediaType            = null; 
 
       this._diff_duration             = null; 
       this._diff_startDate            = null; 
       this._diff_endDate              = null; 
       this._diff_startTime            = null; 
       this._diff_endTime              = null; 
       this._diff_weekdays             = null; 
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
        result +=        "AspectRatioIDs : "       + JSON.stringify(this._main_arrAspectRatioIDs);
        result += ","  + "CreationDate : "         + JSON.stringify(this._main_CreationDate);
        result += ","  + "Description : "          + JSON.stringify(this._main_Description);
        result += ","  + "Duration : "             + JSON.stringify(this._main_Duration);
        result += ","  + "ID : "                   + JSON.stringify(this._main_ID);
        result += ","  + "IsLocked : "             + JSON.stringify(this._main_IsLocked);
        result += ","  + "IsSharedFromParentWorkgroup : "         + JSON.stringify(this._main_IsSharedFromParentWorkgroup);
        result += ","  + "IsUnsharedButPartOfASharedContainer : " + JSON.stringify(this._main_IsUnsharedButPartOfASharedContainer);
        result += ","  + "LastLock : "             + JSON.stringify(this._main_LastLock);
        result += ","  + "LastModificationDate : " + JSON.stringify(this._main_LastModificationDate);
        result += ","  + "LastModifierId : "       + JSON.stringify(this._main_LastModifierId);
        result += ","  + "Loop : "                 + JSON.stringify(this._main_Loop);
        result += ","  + "MediaParentId : "        + JSON.stringify(this._main_MediaParentId);
        result += ","  + "MediaType : "            + JSON.stringify(this._main_MediaType);
        result += ","  + "Name : "                 + JSON.stringify(this._main_Name);
        result += ","  + "OwnerId : "              + JSON.stringify(this._main_OwnerId);
        result += ","  + "OwnerName : "            + JSON.stringify(this._main_OwnerName);
        result += ","  + "TagIDs : "               + JSON.stringify(this._main_arrTagIDs);
        result += ","  + "UserIDLock : "           + JSON.stringify(this._main_UserIDLock);
        result += ","  + "UserNameLock : "         + JSON.stringify(this._main_UserNameLock);
        result += ","  + "WorkgroupId : "          + JSON.stringify(this._main_WorkgroupId);
        result += ","  + "CustomID : "             + JSON.stringify(this._main_CustomID);
        result += ","  + "DiffusionDays : "        + JSON.stringify(this._main_arrDiffusionDays);
        result += ","  + "EndTime : "              + JSON.stringify(this._main_EndTime);
        result += ","  + "ExpectedPlayDate : "     + JSON.stringify(this._main_ExpectedPlayDate);
        result += ","  + "ExpectedPlayTime : "     + JSON.stringify(this._main_ExpectedPlayTime);
        result += ","  + "FirstDiffusion : "       + JSON.stringify(this._main_FirstDiffusion);
        result += ","  + "LastDiffusion : "        + JSON.stringify(this._main_LastDiffusion);
        result += ","  + "MediaAccessRights : "    + JSON.stringify(this._main_arrMediaAccessRights);
        result += ","  + "SharingType : "          + JSON.stringify(this._main_SharingType);
        result += ","  + "StartTime : "            + JSON.stringify(this._main_StartTime);
        result += ","  + "AllowedTypes : "        + JSON.stringify(this._main_arrAllowedTypes);
        result += ","  + "DeniedTypes : "         + JSON.stringify(this._main_arrDeniedTypes);
        result += ","  + "EventType : "           + JSON.stringify(this._main_EventType);
        result += ","  + "FirstContentID : "      + JSON.stringify(this._main_FirstContentID);
        result += ","  + "IsRandom : "            + JSON.stringify(this._main_IsRandom);
        result += ","  + "MaxNumberOfElements : " + JSON.stringify(this._main_MaxNumberOfElements);
        result += ","  + "MediasIds : "           + JSON.stringify(this._main_MediasIds);
        result += ","  + "PlaylistOrder : "       + JSON.stringify(this._main_arrPlaylistOrder);
        result += ","  + "Properties : "          + JSON.stringify(this._main_arrProperties);
        result += ","  + "Repeat : "              + JSON.stringify(this._main_Repeat);
        result += ","  + "RepeatFrequency : "     + JSON.stringify(this._main_RepeatFrequency);
        result += ","  + "RepeatInterval : "      + JSON.stringify(this._main_RepeatInterval);
        result += ","  + "RepeatNbOfTracks : "    + JSON.stringify(this._main_RepeatNbOfTracks);

        //-------------------- load Streams
        result += ","  + "Medias_Extended : [ " ;
        var isFirstTime = true;
        for (var iMediaItem = 0; iMediaItem < this._playlistItems.length; iMediaItem++) 
        {
          if (isFirstTime == true)
          {
            result += this._playlistItems[iMediaItem].toJSONString();
            isFirstTime = false;
            continue;
          }
          result += ","  + this._playlistItems[iMediaItem].toJSONString();
        }
        result += " ] " ;
        result += "}";
        return result;
      }

  }
} 