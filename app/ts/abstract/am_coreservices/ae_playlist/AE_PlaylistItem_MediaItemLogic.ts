import amGeneral = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_Logic");

//import amPlaylistItemStatus = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_Status");
import amPlaylistItemStatusEnd                   = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusEnd");
import amPlaylistItemStatusDisable               = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusDisable");
import amPlaylistItemStatusError                 = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusError");
import amPlaylistItemStatusRequestToPlayMedia    = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToPlay_Media");
import amPlaylistItemStatusPlayMedia             = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusPlay_Media");
import amPlaylistItemStatusRequestToSuspendMedia = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToSuspend_Media");
import amPlaylistItemStatusSuspended             = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusSuspended");
import amPlaylistItemStatusRequestToResumeMedia  = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToResume_Media");
import amPlaylistItemStatusRequestToAbortMedia   = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToAbort_Media");
import amPlaylistItemStatusRequestToEndMedia     = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToEnd_Media");

export module am_coreservices
{
  export interface AE_PlaylistItem_MediaItemLogic extends amGeneral.am_coreservices.AE_PlaylistItem_Logic
  {
    //-----------------------
    _status_End                         : amPlaylistItemStatusEnd.am_coreservices.AE_PlaylistItem_StatusEnd;
    _status_Disable                     : amPlaylistItemStatusDisable.am_coreservices.AE_PlaylistItem_StatusDisable; 
    _status_Error                       : amPlaylistItemStatusError.am_coreservices.AE_PlaylistItem_StatusError; 
    _status_RequestToPlay_Media         : amPlaylistItemStatusRequestToPlayMedia.am_coreservices.AE_PlaylistItem_StatusRequestToPlay_Media;
    _status_Play_Media                  : amPlaylistItemStatusPlayMedia.am_coreservices.AE_PlaylistItem_StatusPlay_Media;
    _status_RequestToSuspend_Media      : amPlaylistItemStatusRequestToSuspendMedia.am_coreservices.AE_PlaylistItem_StatusRequestToSuspend_Media;
    _status_Suspended                   : amPlaylistItemStatusSuspended.am_coreservices.AE_PlaylistItem_StatusSuspended;
    _status_RequestToResume_Media       : amPlaylistItemStatusRequestToResumeMedia.am_coreservices.AE_PlaylistItem_StatusRequestToResume_Media;
    _status_RequestToAbort_Media        : amPlaylistItemStatusRequestToAbortMedia.am_coreservices.AE_PlaylistItem_StatusRequestToAbort_Media;
    _status_RequestToEnd_Media          : amPlaylistItemStatusRequestToEndMedia.am_coreservices.AE_PlaylistItem_StatusRequestToEnd_Media;
  }

} 