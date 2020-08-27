import amCoreServices = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem");
import amGeneralRandom = require("../../../../../app/ts/abstract/am_general/ae_random/AE_Random");

export module am_coreservices
{
  export interface AE_PlaylistItem_RealTag extends amCoreServices.am_coreservices.AE_PlaylistItem
  {
      getRealTagRandom() : amGeneralRandom.am_general.AE_Random;
      setRealTagRandom(realTagRandom : amGeneralRandom.am_general.AE_Random);

      //------------------ properties
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
      _main_arrMEDIAS             ;
      _main_arrMEDIA_IDS          ;
      _main_OVERRRULE_MEDIA_DATES ;
      _main_PICK                  ;

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