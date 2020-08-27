import amGeneral = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_ContainerLogic");
//import amPlaylistItemStatus = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_Status");
import amPlaylistItemStatusEnd                   = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusEnd");
import amPlaylistItemStatusDisable               = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusDisable");
import amPlaylistItemStatusError                 = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusError");
import amPlaylistItemStatusRequestToPlayList     = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToPlay_List");
import amPlaylistItemStatusPlayList              = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusPlay_List");
import amPlaylistItemStatusRequestToSuspendList  = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToSuspend_List");
import amPlaylistItemStatusSuspended             = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusSuspended");
import amPlaylistItemStatusRequestToResumeList   = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToResume_List");
import amPlaylistItemStatusRequestToAbortList    = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToAbort_List");
import amPlaylistItemStatusRequestToEndList      = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToEnd_List");

export module am_coreservices
{
  export interface AE_PlaylistItem_PlaylistLogic extends amGeneral.am_coreservices.AE_PlaylistItem_ContainerLogic
  {
    //-----------------------
    _status_End                        : amPlaylistItemStatusEnd.am_coreservices.AE_PlaylistItem_StatusEnd;
    _status_Disable                    : amPlaylistItemStatusDisable.am_coreservices.AE_PlaylistItem_StatusDisable; 
    _status_Error                      : amPlaylistItemStatusError.am_coreservices.AE_PlaylistItem_StatusError; 
    _status_RequestToPlay_List         : amPlaylistItemStatusRequestToPlayList.am_coreservices.AE_PlaylistItem_StatusRequestToPlay_List;
    _status_Play_List                  : amPlaylistItemStatusPlayList.am_coreservices.AE_PlaylistItem_StatusPlay_List;
    _status_RequestToSuspend_List      : amPlaylistItemStatusRequestToSuspendList.am_coreservices.AE_PlaylistItem_StatusRequestToSuspend_List;
    _status_Suspended                  : amPlaylistItemStatusSuspended.am_coreservices.AE_PlaylistItem_StatusSuspended;
    _status_RequestToResume_List       : amPlaylistItemStatusRequestToResumeList.am_coreservices.AE_PlaylistItem_StatusRequestToResume_List;
    _status_RequestToAbort_List        : amPlaylistItemStatusRequestToAbortList.am_coreservices.AE_PlaylistItem_StatusRequestToAbort_List;
    _status_RequestToEnd_List          : amPlaylistItemStatusRequestToEndList.am_coreservices.AE_PlaylistItem_StatusRequestToEnd_List;
    
  }

} 