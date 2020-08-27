import amCoreServices   = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_Stream");

import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");
import amPlaylistItem  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem");
import amPlaylistItemEvents = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_Events");
import amPlaylistItemContainer = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_Container");
import amPlaylistTagManager = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_TagManager");
import rmCoreServicesPlaylistItemPriorityPlaylist = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_PriorityPlaylist");

import rmPlaylistItem  = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem");

export module rm_coreservices
{
  export class RE_PlaylistItem_Stream  extends rmCoreServicesPlaylistItemPriorityPlaylist.rm_coreservices.RE_PlaylistItem_PriorityPlaylist
                                       implements amCoreServices.am_coreservices.AE_PlaylistItem_Stream  
  {
     //----------- properties
     _stream_HardwareID       ;
     _stream_Height           ;
     _stream_ID               ;
     _stream_Name             ;
     _stream_Width            ;
     _stream_WindowsAccountId ;
     _stream_X                ;
     _stream_Y                ;

     _channel_arrAspectRatioIDs     ;
     _channel_CreationDate          ;
     _channel_Description           ;
     _channel_Duration              ;
     _channel_ID                    ;
     _channel_IsLocked              ;
     _channel_IsSharedFromParentWorkgroup ;
     _channel_IsUnsharedButPartOfASharedContainer ;
     _channel_LastLock              ;
     _channel_LastModificationDate  ;
     _channel_LastModifierId        ;
     _channel_Loop                  ;
     _channel_MediaParentId         ;
     _channel_MediaType             ;
     _channel_Name                  ;
     _channel_OwnerId               ;
     _channel_OwnerName             ;
     _channel_arrTagIDs             ;
     _channel_UserIDLock            ;
     _channel_UserNameLock          ;
     _channel_WorkgroupId           ;
     _channel_CustomID              ;
     _channel_arrDiffusionDays      ;
     _channel_EndTime               ;
     _channel_ExpectedPlayDate      ;
     _channel_ExpectedPlayTime      ;
     _channel_FirstDiffusion        ;
     _channel_LastDiffusion         ;
     _channel_arrMediaAccessRights  ;
     _channel_SharingType           ;
     _channel_StartTime             ;
     _channel_EventIds              ;
     _channel_LastActivation        ;
     _channel_Sequence              ;
     _channel_isForLocalInput       ;
     _channel_arrEvents             ;
     _channel_arrMedias_Statics_Extended ;

     _meta_ID                    ;
     _meta_Name                  ;
     _meta_CustomID              ;
     _meta_MediaType             ;
 
     _diff_duration              ;
     _diff_startDate             ;
     _diff_endDate               ; 
     _diff_startTime             ;
     _diff_endTime               ;
     _diff_weekdays              ;

     _staticMediaItems: amPlaylistItemContainer.am_coreservices.AE_PlaylistItem_Container;
     _events: amPlaylistItemEvents.am_coreservices.AE_PlaylistItem_Events;

     _tagManager : amPlaylistTagManager.am_coreservices.AE_TagManager;

     
     //-------------
     constructor()
     {
       super();
       this._playlistItemTypeName = "STREAM"; 

       this._stream_HardwareID       = null;
       this._stream_Height           = null;
       this._stream_ID               = null;
       this._stream_Name             = null;
       this._stream_Width            = null;
       this._stream_WindowsAccountId = null;
       this._stream_X                = null;
       this._stream_Y                = null;
 
       this._channel_arrAspectRatioIDs     = null;
       this._channel_CreationDate          = null;
       this._channel_Description           = null;
       this._channel_Duration              = null;
       this._channel_ID                    = null;
       this._channel_IsLocked              = null;
       this._channel_IsSharedFromParentWorkgroup = null;
       this._channel_IsUnsharedButPartOfASharedContainer = null;
       this._channel_LastLock              = null;
       this._channel_LastModificationDate  = null;
       this._channel_LastModifierId        = null;
       this._channel_Loop                  = null;
       this._channel_MediaParentId         = null;
       this._channel_MediaType             = null;
       this._channel_Name                  = null;
       this._channel_OwnerId               = null;
       this._channel_OwnerName             = null;
       this._channel_arrTagIDs             = null;
       this._channel_UserIDLock            = null;
       this._channel_UserNameLock          = null;
       this._channel_WorkgroupId           = null;
       this._channel_CustomID              = null;
       this._channel_arrDiffusionDays      = null;
       this._channel_EndTime               = null;
       this._channel_ExpectedPlayDate      = null;
       this._channel_ExpectedPlayTime      = null;
       this._channel_FirstDiffusion        = null;
       this._channel_LastDiffusion         = null;
       this._channel_arrMediaAccessRights  = null;
       this._channel_SharingType           = null;
       this._channel_StartTime             = null;
       this._channel_EventIds              = null;
       this._channel_LastActivation        = null;
       this._channel_Sequence              = null;
       this._channel_isForLocalInput       = null;
       this._channel_arrEvents             = null;
       this._channel_arrMedias_Statics_Extended = null;
 
       this._meta_ID                    = null;
       this._meta_Name                  = null;
       this._meta_CustomID              = null;
       this._meta_MediaType             = null;
   
       this._diff_duration              = null;
       this._diff_startDate             = null;
       this._diff_endDate               = null; 
       this._diff_startTime             = null;
       this._diff_endTime               = null;
       this._diff_weekdays              = null;

       this._staticMediaItems = null;
       this._events      = null;
       
       this._tagManager = null;
 
     }
     
     //-------------------------
     //  set/get static medias
     //-------------------------


     //================================
     public getJsonStaticMedias() : any
     {
       return this._channel_arrMedias_Statics_Extended ;
     } 

     //================================
     public setJsonStaticMedias(jsonStaticMedias : any) : void
     {
       this._channel_arrMedias_Statics_Extended = jsonStaticMedias;
     } 

     //-------------------------
     //  set/get tag manager
     //-------------------------

     //----------------------------
     public getTagManager() : amPlaylistTagManager.am_coreservices.AE_TagManager
     {
       return this._tagManager ;
     }
    
     //----------------------------
     public setTagManager(tagManager : amPlaylistTagManager.am_coreservices.AE_TagManager)
     {
       this._tagManager = tagManager;
     }

     //-------------------------
     //  set/get properties
     //-------------------------
     //----------------
     public setEvents(events: amPlaylistItemEvents.am_coreservices.AE_PlaylistItem_Events)
     {
       this._events = events;
     }
     //----------------
     public getEvents() : amPlaylistItemEvents.am_coreservices.AE_PlaylistItem_Events
     {
       return this._events;
     }

     //----------------
     public setStaticMediaItems(staticMediaItems: amPlaylistItemContainer.am_coreservices.AE_PlaylistItem_Container)
     {
       this._staticMediaItems = staticMediaItems;
     }
     //----------------
     public getStaticMediaItems() : amPlaylistItemContainer.am_coreservices.AE_PlaylistItem_Container
     {
       return this._staticMediaItems;
     }

     //----------------
     public setStreamID(ID: string)
     {
       this._stream_ID = ID;
     }
     //----------------
     public getStreamID() : string
     {
       return this._stream_ID ;
     }

     //------------------------
     public setStreamName(Name : string)
     {
      this._stream_Name = Name;
     }   
     //----------------
     public getStreamName() : string
     {
       return this._stream_Name ;
     }   

     //---------------------
     public setHardwareID(HardwareID)
     {
      this._stream_HardwareID = HardwareID;
     }   
     //----------------
     public getHardwareID() : string
     {
       return this._stream_HardwareID ;
     }     

     //----------------------
     public setWindowsAccountId(WindowsAccountId)
     {
       this._stream_WindowsAccountId = WindowsAccountId;
     }
     //----------------
     public getWindowsAccountId() : string
     {
       return this._stream_WindowsAccountId ;
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
        result +=         JSON.stringify("HardwareID")       + ":" + JSON.stringify(this._stream_HardwareID);  
        result += ","  +  JSON.stringify("Height")           + ":" + JSON.stringify(this._stream_Height);  
        result += ","  +  JSON.stringify("ID")               + ":" + JSON.stringify(this._stream_ID);  
        result += ","  +  JSON.stringify("Name")             + ":" + JSON.stringify(this._stream_Name);  
        result += ","  +  JSON.stringify("Width")            + ":" + JSON.stringify(this._stream_Width);  
        result += ","  +  JSON.stringify("WindowsAccountId") + ":" + JSON.stringify(this._stream_WindowsAccountId);  
        result += ","  +  JSON.stringify("X")                + ":" + JSON.stringify(this._stream_X);  
        result += ","  +  JSON.stringify("Y")                + ":" + JSON.stringify(this._stream_Y);  
        result +=  ","  + JSON.stringify("Channel_Extended")       + ":{";
          result +=        JSON.stringify("AspectRatioIDs")      + ":"   + JSON.stringify(this._channel_arrAspectRatioIDs);
          result += ","  + JSON.stringify("CreationDate")        + ":"   + JSON.stringify(this._channel_CreationDate);
          result += ","  + JSON.stringify("Description")         + ":"   + JSON.stringify(this._channel_Description);
          result += ","  + JSON.stringify("Duration")            + ":"   + JSON.stringify(this._channel_Duration);
          result += ","  + JSON.stringify("ID")                  + ":"   + JSON.stringify(this._channel_ID);
          result += ","  + JSON.stringify("IsLocked")            + ":"   + JSON.stringify(this._channel_IsLocked);
          result += ","  + JSON.stringify("IsSharedFromParentWorkgroup")         + ":"   + JSON.stringify(this._channel_IsSharedFromParentWorkgroup);
          result += ","  + JSON.stringify("IsUnsharedButPartOfASharedContainer") + ":"  + JSON.stringify(this._channel_IsUnsharedButPartOfASharedContainer);
          result += ","  + JSON.stringify("LastLock")             + ":"  + JSON.stringify(this._channel_LastLock);
          result += ","  + JSON.stringify("LastModificationDate") + ":"  + JSON.stringify(this._channel_LastModificationDate);
          result += ","  + JSON.stringify("LastModifierId")       + ":"  + JSON.stringify(this._channel_LastModifierId);
          result += ","  + JSON.stringify("Loop")                 + ":"  + JSON.stringify(this._channel_Loop);
          result += ","  + JSON.stringify("MediaParentId")        + ":"  + JSON.stringify(this._channel_MediaParentId);
          result += ","  + JSON.stringify("MediaType")            + ":"  + JSON.stringify(this._channel_MediaType);
          result += ","  + JSON.stringify("Name")                 + ":"  + JSON.stringify(this._channel_Name);    
          result += ","  + JSON.stringify("OwnerId")              + ":"  + JSON.stringify(this._channel_OwnerId);
          result += ","  + JSON.stringify("OwnerName")            + ":"  + JSON.stringify(this._channel_OwnerName);
          result += ","  + JSON.stringify("TagIDs")               + ":"  + JSON.stringify(this._channel_arrTagIDs);
          result += ","  + JSON.stringify("UserIDLock")           + ":"  + JSON.stringify(this._channel_UserIDLock);
          result += ","  + JSON.stringify("UserNameLock")         + ":"  + JSON.stringify(this._channel_UserNameLock);
          result += ","  + JSON.stringify("WorkgroupId")          + ":"  + JSON.stringify(this._channel_WorkgroupId);
          result += ","  + JSON.stringify("CustomID")             + ":"  + JSON.stringify(this._channel_CustomID);
          result += ","  + JSON.stringify("DiffusionDays")        + ":"  + JSON.stringify(this._channel_arrDiffusionDays);
          result += ","  + JSON.stringify("EndTime")              + ":"  + JSON.stringify(this._channel_EndTime);
          result += ","  + JSON.stringify("ExpectedPlayDate")     + ":"  + JSON.stringify(this._channel_ExpectedPlayDate);
          result += ","  + JSON.stringify("ExpectedPlayTime")     + ":"  + JSON.stringify(this._channel_ExpectedPlayTime);
          result += ","  + JSON.stringify("FirstDiffusion")       + ":"  + JSON.stringify(this._channel_FirstDiffusion);
          result += ","  + JSON.stringify("LastDiffusion")        + ":"  + JSON.stringify(this._channel_LastDiffusion);
          result += ","  + JSON.stringify("MediaAccessRights")    + ":"  + JSON.stringify(this._channel_arrMediaAccessRights);
          result += ","  + JSON.stringify("SharingType")          + ":"  + JSON.stringify(this._channel_SharingType);
          result += ","  + JSON.stringify("StartTime")            + ":"  + JSON.stringify(this._channel_StartTime);
          result += ","  + JSON.stringify("EventIds")             + ":"  + JSON.stringify(this._channel_EventIds);
          result += ","  + JSON.stringify("LastActivation")       + ":"  + JSON.stringify(this._channel_LastActivation);
          result += ","  + JSON.stringify("Sequence")             + ":"  + JSON.stringify(this._channel_Sequence);
          result += ","  + JSON.stringify("isForLocalInput")      + ":"  + JSON.stringify(this._channel_isForLocalInput);

          result += ","  + JSON.stringify("Events")                  + ":"  + this._events.toJSONString();
          result += ","  + JSON.stringify("Medias_Statics_Extended") + ":"  + this._staticMediaItems.toJSONString();
          //if (this._events != null)
            //result += ","  + JSON.stringify("Events")               + ":"  + this._events.toJSONString();
          //else
            //result += ","  + JSON.stringify("Events")               + ":"  + JSON.stringify(this._channel_arrEvents);
          //result += ","  + JSON.stringify("Medias_Statics_Extended") + ":"  + JSON.stringify(this._channel_arrMedias_Statics_Extended);

          result += ","  + JSON.stringify("Playlist_Extended") + ":" ;
          result += this._playlistItems[0].toJSONString();
  
        result += "}";

      result +=  "}";
      return result;
    }


  }
} 