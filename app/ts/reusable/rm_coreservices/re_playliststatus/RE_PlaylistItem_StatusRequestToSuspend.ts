import amCoreServices   = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToSuspend");

import amGeneralError      = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amServiceLocator    = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");
import amServiceContainer  = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amServiceLog        = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");
import amPlaylistItemTransition  = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_Transition");

import amCoreServicesPlaylistController   = require("../../../../../app/ts/abstract/am_coreservices/a_playlistcontroller/A_PlaylistController");
import amCoreServicesRenderingController  = require("../../../../../app/ts/abstract/am_coreservices/a_renderingcontroller/A_RenderingController");

import amPlaylistItem  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem");
import amGeneralQueue = require("../../../../../app/ts/abstract/am_general/ae_queue/AE_Queue");
import amGeneralEvent = require("../../../../../app/ts/abstract/am_general/ae_event/AE_Event");
import amPlaylistItemStatusType = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItemStatusType");
import amPlaylistItemEventType  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItemEventType");

import rmCoreServicesPlaylistItem  = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem");

import rmPlaylistItemStatus  = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_Status");

export module rm_coreservices
{
  export class RE_PlaylistItem_StatusRequestToSuspend  extends rmPlaylistItemStatus.rm_coreservices.RE_PlaylistItem_Status
                                                       implements amCoreServices.am_coreservices.AE_PlaylistItem_StatusRequestToSuspend
  {
    //--------------------- 
    _transitionTo_StatusSuspended        : amPlaylistItemTransition.am_coreservices.AE_PlaylistItem_Transition;
    _transitionTo_StatusError            : amPlaylistItemTransition.am_coreservices.AE_PlaylistItem_Transition;
    _transitionTo_StatusEnd_or_Similar   : amPlaylistItemTransition.am_coreservices.AE_PlaylistItem_Transition;
    _transitionTo_StatusRequestToAbort   : amPlaylistItemTransition.am_coreservices.AE_PlaylistItem_Transition;
    _transitionTo_StatusRequestToEnd     : amPlaylistItemTransition.am_coreservices.AE_PlaylistItem_Transition;

    //----------------
    constructor()
    {
      super();
      this._transitionTo_StatusSuspended        = null;
      this._transitionTo_StatusError            = null;
      this._transitionTo_StatusEnd_or_Similar   = null;
      this._transitionTo_StatusRequestToAbort   = null;
      this._transitionTo_StatusRequestToEnd     = null;
    }

    //------------------------------
    public injectDependencies( aSrvContainer: amServiceContainer.am_configurationservices.A_ServiceContainer, 
                               aSrvLocator:   amServiceLocator.am_configurationservices.A_ServiceLocator, 
                               aSrvLog:       amServiceLog.am_transversalservices.A_LogService, 
                               error: amGeneralError.am_general.A_Error) : number
    {
      super.injectDependencies( aSrvContainer, aSrvLocator, aSrvLog, error);
      this._transitionTo_StatusSuspended        = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemTransition(error);
      this._transitionTo_StatusError            = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemTransition(error);
      this._transitionTo_StatusEnd_or_Similar   = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemTransition(error);
      this._transitionTo_StatusRequestToAbort   = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemTransition(error);
      this._transitionTo_StatusRequestToEnd     = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemTransition(error);
      return 0;
    }
  }
} 