import amCoreServices = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_MediaItem");

export module am_coreservices
{
  export interface AE_PlaylistItem_WebPage extends amCoreServices.am_coreservices.AE_PlaylistItem_MediaItem
  {
    //------------------ metadata
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
    _main_RemoteMediaProperties ;
    _main_State                 ;

    _meta_ID                    ;
    _meta_Name                  ;
    _meta_CustomID              ;
    _meta_MediaType             ;
    _meta_ContentFileName       ;
    _meta_ContentPlayerFileName ;
    
    _prop_type                  ;
    _prop_AllowSubdomains       ;
    _prop_AllowedDomains        ;
    _prop_AlwaysReload          ;
    _prop_BackgroundColor       ;
    _prop_BackgroundTransparent ;
    _prop_EnableInteraction     ;
    _prop_GeneralOpacity        ;
    _prop_InteractivityTimeout  ;
    _prop_NavigationBar         ;
    _prop_Url                   ;
    _prop_ViewMode              ;

    _diff_duration              ;
    _diff_startDate             ;
    _diff_endDate               ;
    _diff_startTime             ;
    _diff_endTime               ;
    _diff_weekdays              ;
  }

} 