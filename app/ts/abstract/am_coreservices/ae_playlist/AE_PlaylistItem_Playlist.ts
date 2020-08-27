import amCoreServices = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_Container");

export module am_coreservices
{
  export interface AE_PlaylistItem_Playlist extends amCoreServices.am_coreservices.AE_PlaylistItem_Container
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

      _diff_duration              ;
      _diff_startDate             ;
      _diff_endDate               ;
      _diff_startTime             ;
      _diff_endTime               ;
      _diff_weekdays              ;

  }

} 