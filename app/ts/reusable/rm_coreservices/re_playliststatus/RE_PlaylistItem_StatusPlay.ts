import amCoreServices   = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusPlay");

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
  export class RE_PlaylistItem_StatusPlay extends rmPlaylistItemStatus.rm_coreservices.RE_PlaylistItem_Status
                                         implements amCoreServices.am_coreservices.AE_PlaylistItem_StatusPlay
  {
    //-----------------
    _transitionTo_StatusEnd_or_Similar     : amPlaylistItemTransition.am_coreservices.AE_PlaylistItem_Transition;
    _transitionTo_StatusRequestToPlay      : amPlaylistItemTransition.am_coreservices.AE_PlaylistItem_Transition; 
    _transitionTo_StatusError              : amPlaylistItemTransition.am_coreservices.AE_PlaylistItem_Transition;
    _transitionTo_StatusRequestToSuspend   : amPlaylistItemTransition.am_coreservices.AE_PlaylistItem_Transition;
    _transitionTo_StatusRequestToAbort     : amPlaylistItemTransition.am_coreservices.AE_PlaylistItem_Transition;
    _transitionTo_StatusRequestToEnd       : amPlaylistItemTransition.am_coreservices.AE_PlaylistItem_Transition;
    _transitionTo_StatusRequestToAbortOrEndBeforePlay : amPlaylistItemTransition.am_coreservices.AE_PlaylistItem_Transition; 
    
    //----------------
    constructor()
    {
      super();
      this._transitionTo_StatusEnd_or_Similar     = null;
      this._transitionTo_StatusRequestToPlay      = null;
      this._transitionTo_StatusError              = null;
      this._transitionTo_StatusRequestToSuspend   = null;
      this._transitionTo_StatusRequestToAbort     = null;
      this._transitionTo_StatusRequestToEnd       = null;
      this._transitionTo_StatusRequestToAbortOrEndBeforePlay = null;
    }

    //------------------------------
    public injectDependencies( aSrvContainer: amServiceContainer.am_configurationservices.A_ServiceContainer, 
                               aSrvLocator:   amServiceLocator.am_configurationservices.A_ServiceLocator, 
                               aSrvLog:       amServiceLog.am_transversalservices.A_LogService, 
                               error: amGeneralError.am_general.A_Error) : number
    {
      super.injectDependencies( aSrvContainer, aSrvLocator, aSrvLog, error);
      this._transitionTo_StatusEnd_or_Similar     = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemTransition(error);
      this._transitionTo_StatusRequestToPlay      = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemTransition(error);
      this._transitionTo_StatusError              = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemTransition(error);
      this._transitionTo_StatusRequestToSuspend   = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemTransition(error);
      this._transitionTo_StatusRequestToAbort     = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemTransition(error);
      this._transitionTo_StatusRequestToEnd       = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemTransition(error);
      this._transitionTo_StatusRequestToAbortOrEndBeforePlay = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemTransition(error);
      return 0;
    }

    /*
    //======================
    public passToMe( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                     aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                     aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                     context: amGeneralContext.am_general.A_Context, callback): void
    {
      this.getDiagram().setStatusCode(amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_Play);
      
      //---- specific actions
      this.reset();
      //---- notifications
      this.notifyChildPlay(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
    }

    //======================
    public notifyChildPlay( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                             aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                             aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                             context: amGeneralContext.am_general.A_Context, callback): void
    {
      if (this.getDiagram().getOwner().getParent() == null)
        return ;
      this.postEvent( amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildPlay, 
                      this.getDiagram().getOwner().getParent().getLogic(), null, -1, eventQueue, error, context, callback);            
    }


    //======================
    public  receiveEvent( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                          aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                          aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                          context: amGeneralContext.am_general.A_Context, callback): void
    {
      if (this.getDiagram().getStatusCode() != amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_End)
        return this.ignoreEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
    
      switch(event.getEventId()) 
      {        
        case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToPlay:
          this.notifyChildPlay(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
          break;       
        case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToEnd:
          this._transitionTo_StatusRequestToEnd.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
          break;
        case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToAbort:
          this._transitionTo_StatusRequestToAbort.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
          break;
        //--- in the End Status you cannot passed a playlist-item in the status Suspended or to Resume the suspension
        case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToSuspend:
          this._transitionTo_StatusRequestToSuspend.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
          break;       
        case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToResume:
          this.notifyChildPlay(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
          break;       

        //---- a media item has no playlist children -- but has a natural child
        case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildPlay:
          break;
        case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildEnd:
          break;
        case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildDisable:
          break;
        case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildError:
          break;
        case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildSuspended:
          break;
        case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildResumed:
          break;
        case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyGraphicDescendantEnd:
          break;
        default:
      }  
      return this.returnWithCallback(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);

    }*/

  }
} 