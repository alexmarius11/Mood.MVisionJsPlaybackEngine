import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

export module am_coreservices
{
  export enum AE_PlaylistItemStatusType
  {
    PlaylistItemStatusType_End                    = 0,
    PlaylistItemStatusType_Disable                = 1,
    PlaylistItemStatusType_Error                  = 2,

    PlaylistItemStatusType_SelectNextChildToPlay  = 3,

    PlaylistItemStatusType_RequestEndOrAbortBeforePlay       = 4,
    PlaylistItemStatusType_RequestEndOrAbortBeforePlay_Media = 5,
    PlaylistItemStatusType_RequestEndOrAbortBeforePlay_List  = 6,

    PlaylistItemStatusType_RequestToPlay          = 7,
    PlaylistItemStatusType_RequestToPlay_Media    = 8,
    PlaylistItemStatusType_RequestToPlay_List     = 9,

    PlaylistItemStatusType_Play                   = 10,
    PlaylistItemStatusType_Play_Media             = 11,
    PlaylistItemStatusType_Play_List              = 12,

    PlaylistItemStatusType_RequestToSuspend       = 13,
    PlaylistItemStatusType_RequestToSuspend_Media = 14,
    PlaylistItemStatusType_RequestToSuspend_List  = 15,

    PlaylistItemStatusType_Suspended              = 16,
    PlaylistItemStatusType_Suspended_Media        = 17,
    PlaylistItemStatusType_Suspended_List         = 18,

    PlaylistItemStatusType_RequestToResume        = 19,
    PlaylistItemStatusType_RequestToResume_Media  = 20,
    PlaylistItemStatusType_RequestToResume_List   = 21,

    PlaylistItemStatusType_RequestToAbort         = 22,
    PlaylistItemStatusType_RequestToAbort_Media   = 23,
    PlaylistItemStatusType_RequestToAbort_List    = 24,

    PlaylistItemStatusType_RequestToEnd           = 25,
    PlaylistItemStatusType_RequestToEnd_Media     = 26,
    PlaylistItemStatusType_RequestToEnd_List      = 27    
  }

} 