import amCoreServices   = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_HtmlTemplate");

import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");
import amPlaylistItem  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem");
import amPlaylistItemType = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItemType");
import rmCoreServicesPlaylistItem  = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_WebPage");

import rmPlaylistItem  = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem");

export module rm_coreservices
{
  export class RE_PlaylistItem_HtmlTemplate extends rmCoreServicesPlaylistItem.rm_coreservices.RE_PlaylistItem_WebPage
                                            implements amCoreServices.am_coreservices.AE_PlaylistItem_HtmlTemplate
  {
    //--------------------------
    _main_type                  ;
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
    _main_ContentFileID         ;
    _main_ContentFileName       ;
    _main_ContentFilePlayerShaCode ;
    _main_ContentFileStateID    ;
    _main_ContentPlayerFileName ;
    _main_Flag                  ;
    _main_Properties            ;
    _main_RemoteMediaProperties ;
    _main_State                 ;
    _main_arrHtmlParameters_Extended;
    _main_arrHtml_Template_Resources;

    _meta_ID                    ;
    _meta_Name                  ;
    _meta_CustomID              ;
    _meta_MediaType             ;
    _meta_ContentFileName       ;
    _meta_ContentPlayerFileName ;
    
    //_prop_type                  ;
    //_prop_AllowSubdomains       ;
    //_prop_AllowedDomains        ;
    //_prop_AlwaysReload          ;
    //_prop_BackgroundColor       ;
    //_prop_BackgroundTransparent ;
    //_prop_EnableInteraction     ;
    //_prop_GeneralOpacity        ;
    //_prop_InteractivityTimeout  ;
    //_prop_NavigationBar         ;
    //_prop_Url                   ;
    //_prop_ViewMode              ;

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
       this._playlistItemType = amPlaylistItemType.am_coreservices.AE_PlaylistItemType.PlaylistItemType_HtmlTemplate;
       this._playlistItemTypeName = "HTML_TEMPLATE"; 
      //------------------ 
      this._main_type                  = null;
      this._main_arrAspectRatioIDs     = null;
      this._main_CreationDate          = null;
      this._main_Description           = null;
      this._main_Duration              = null;
      this._main_ID                    = null;
      this._main_IsLocked              = null;
      this._main_IsSharedFromParentWorkgroup = null;
      this._main_IsUnsharedButPartOfASharedContainer = null;
      this._main_LastLock              = null;
      this._main_LastModificationDate  = null;
      this._main_LastModifierId        = null;
      this._main_Loop                  = null;
      this._main_MediaParentId         = null;
      this._main_MediaType             = null;
      this._main_Name                  = null;
      this._main_OwnerId               = null;
      this._main_OwnerName             = null;
      this._main_arrTagIDs             = null;
      this._main_UserIDLock            = null;
      this._main_UserNameLock          = null;
      this._main_WorkgroupId           = null;
      this._main_CustomID              = null;
      this._main_arrDiffusionDays      = null;
      this._main_EndTime               = null;
      this._main_ExpectedPlayDate      = null;
      this._main_ExpectedPlayTime      = null;
      this._main_FirstDiffusion        = null;
      this._main_LastDiffusion         = null;
      this._main_arrMediaAccessRights  = null;
      this._main_SharingType           = null;
      this._main_StartTime             = null;
      this._main_ContentFileID         = null;
      this._main_ContentFileName       = null;
      this._main_ContentFilePlayerShaCode = null;
      this._main_ContentFileStateID    = null;
      this._main_ContentPlayerFileName = null;
      this._main_Flag                  = null;
      this._main_Properties            = null;
      this._main_RemoteMediaProperties = null;
      this._main_State                 = null;
      this._main_arrHtmlParameters_Extended = null;
      this._main_arrHtml_Template_Resources = null;
  
      this._meta_ID                    = null;
      this._meta_Name                  = null;
      this._meta_CustomID              = null;
      this._meta_MediaType             = null;
      this._meta_ContentFileName       = null;
      this._meta_ContentPlayerFileName = null;
      
      //this._prop_type                  = null;
      //this._prop_AllowSubdomains       = null;
      //this._prop_AllowedDomains        = null;
      //this._prop_AlwaysReload          = null;
      //this._prop_BackgroundColor       = null;
      //this._prop_BackgroundTransparent = null;
      //this._prop_EnableInteraction     = null;
      //this._prop_GeneralOpacity        = null;
      //this._prop_InteractivityTimeout  = null;
      //this._prop_NavigationBar         = null;
      //this._prop_Url                   = null;
      //this._prop_ViewMode              = null;

      this._diff_duration              = null;
      this._diff_startDate             = null;
      this._diff_endDate               = null;
      this._diff_startTime             = null;
      this._diff_endTime               = null;
      this._diff_weekdays              = null;

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
        result +=        JSON.stringify("__type")               + ":" + JSON.stringify(this._main_type);
        result += ","  + JSON.stringify("AspectRatioIDs")       + ":" + JSON.stringify(this._main_arrAspectRatioIDs);
        result += ","  + JSON.stringify("CreationDate")         + ":" + JSON.stringify(this._main_CreationDate);
        result += ","  + JSON.stringify("Description")          + ":" + JSON.stringify(this._main_Description);
        result += ","  + JSON.stringify("Duration")             + ":" + JSON.stringify(this._main_Duration);
        result += ","  + JSON.stringify("ID")                   + ":" + JSON.stringify(this._main_ID);
        result += ","  + JSON.stringify("IsLocked")             + ":" + JSON.stringify(this._main_IsLocked);
        result += ","  + JSON.stringify("IsSharedFromParentWorkgroup") + ":" + JSON.stringify(this._main_IsSharedFromParentWorkgroup);
        result += ","  + JSON.stringify("IsUnsharedButPartOfASharedContainer") + ":" + JSON.stringify(this._main_IsUnsharedButPartOfASharedContainer);
        result += ","  + JSON.stringify("LastLock")             + ":" + JSON.stringify(this._main_LastLock);
        result += ","  + JSON.stringify("LastModificationDate") + ":" + JSON.stringify(this._main_LastModificationDate);
        result += ","  + JSON.stringify("LastModifierId")       + ":" + JSON.stringify(this._main_LastModifierId);
        result += ","  + JSON.stringify("Loop")                 + ":" + JSON.stringify(this._main_Loop);
        result += ","  + JSON.stringify("MediaParentId")        + ":" + JSON.stringify(this._main_MediaParentId);
        result += ","  + JSON.stringify("MediaType")            + ":" + JSON.stringify(this._main_MediaType);
        result += ","  + JSON.stringify("Name")                 + ":" + JSON.stringify(this._main_Name);
        result += ","  + JSON.stringify("OwnerId")              + ":" + JSON.stringify(this._main_OwnerId);
        result += ","  + JSON.stringify("OwnerName")            + ":" + JSON.stringify(this._main_OwnerName);
        result += ","  + JSON.stringify("TagIDs")               + ":" + JSON.stringify(this._main_arrTagIDs);
        result += ","  + JSON.stringify("UserIDLock")           + ":" + JSON.stringify(this._main_UserIDLock);
        result += ","  + JSON.stringify("UserNameLock")         + ":" + JSON.stringify(this._main_UserNameLock);
        result += ","  + JSON.stringify("WorkgroupId")          + ":" + JSON.stringify(this._main_WorkgroupId);
        result += ","  + JSON.stringify("CustomID")             + ":" + JSON.stringify(this._main_CustomID);
        result += ","  + JSON.stringify("DiffusionDays")        + ":" + JSON.stringify(this._main_arrDiffusionDays);
        result += ","  + JSON.stringify("EndTime")              + ":" + JSON.stringify(this._main_EndTime);
        result += ","  + JSON.stringify("ExpectedPlayDate")     + ":" + JSON.stringify(this._main_ExpectedPlayDate);
        result += ","  + JSON.stringify("ExpectedPlayTime")     + ":" + JSON.stringify(this._main_ExpectedPlayTime);
        result += ","  + JSON.stringify("FirstDiffusion")       + ":" + JSON.stringify(this._main_FirstDiffusion);
        result += ","  + JSON.stringify("LastDiffusion")        + ":" + JSON.stringify(this._main_LastDiffusion);
        result += ","  + JSON.stringify("MediaAccessRights")    + ":" + JSON.stringify(this._main_arrMediaAccessRights);
        result += ","  + JSON.stringify("SharingType")          + ":" + JSON.stringify(this._main_SharingType);
        result += ","  + JSON.stringify("StartTime")            + ":" + JSON.stringify(this._main_StartTime);
        result += ","  + JSON.stringify("ContentFileID")        + ":" + JSON.stringify(this._main_ContentFileID);
        result += ","  + JSON.stringify("ContentFileName")      + ":" + JSON.stringify(this._main_ContentFileName);
        result += ","  + JSON.stringify("ContentFilePlayerShaCode") + ":" + JSON.stringify(this._main_ContentFilePlayerShaCode);
        result += ","  + JSON.stringify("ContentFileStateID")    + ":" + JSON.stringify(this._main_ContentFileStateID );
        result += ","  + JSON.stringify("ContentPlayerFileName") + ":" + JSON.stringify(this._main_ContentPlayerFileName);
        result += ","  + JSON.stringify("Flag")                  + ":" + JSON.stringify(this._main_Flag);
        result += ","  + JSON.stringify("Properties")            + ":" + JSON.stringify(this._main_Properties); 
        result += ","  + JSON.stringify("RemoteMediaProperties") + ":" + JSON.stringify(this._main_RemoteMediaProperties);
        result += ","  + JSON.stringify("State")                 + ":" + JSON.stringify(this._main_State);
        result += ","  + JSON.stringify("HtmlParameters_Extended") + ":" + JSON.stringify(this._main_arrHtmlParameters_Extended);
        result += ","  + JSON.stringify("Html_Template_Resources") + ":" + JSON.stringify(this._main_arrHtml_Template_Resources);    
        result += "}";
        return result;
      }

  }
} 