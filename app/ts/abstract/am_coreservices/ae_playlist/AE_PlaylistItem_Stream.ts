import amCoreServices = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_Container");
import amPlaylistItemEvents = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_Events");
import amPlaylistItemContainer = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_Container");
import amPlaylistTagManager = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_TagManager");

export module am_coreservices
{
  export interface AE_PlaylistItem_Stream extends amCoreServices.am_coreservices.AE_PlaylistItem_Container
  {
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

    getJsonStaticMedias() : any;
    setJsonStaticMedias(jsonStaticMedias : any) : void;
    
    getTagManager() : amPlaylistTagManager.am_coreservices.AE_TagManager
    setTagManager(tagManager : amPlaylistTagManager.am_coreservices.AE_TagManager);

    //-------------------------------------------
    setEvents(events: amPlaylistItemEvents.am_coreservices.AE_PlaylistItem_Events);
    getEvents() : amPlaylistItemEvents.am_coreservices.AE_PlaylistItem_Events;
    
    setStaticMediaItems(staticMediaItems: amPlaylistItemContainer.am_coreservices.AE_PlaylistItem_Container);
    getStaticMediaItems() : amPlaylistItemContainer.am_coreservices.AE_PlaylistItem_Container;
    
    //-------------------------------------------
    setStreamID(ID: string);
    getStreamID() : string;

    setStreamName(Name : string);
    getStreamName() : string;

    setHardwareID(HardwareID: string)
    getHardwareID() : string;

    setWindowsAccountId(WindowsAccountId: string);
    getWindowsAccountId() : string ;

  }

} 