import amCoreServices   = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay_List");

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

import amGeneralEventRequestType  = require("../../../../../app/ts/abstract/am_general/ae_event/AE_EventRequestType");
import amNextChildSelectionType = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_NextChildSelectionType");
import rmCoreServicesPlaylistItem  = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem");

import rmPlaylistItemStatus  = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay");


export module rm_coreservices
{
  export class RE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay_List 
                                           extends    rmPlaylistItemStatus.rm_coreservices.RE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay
                                           implements amCoreServices.am_coreservices.AE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay_List
  {

    //------------- properties
    _lastAbortEndSuspendChildIdx     : number;
    _lastAbortEndSuspendChild        : amPlaylistItem.am_coreservices.AE_PlaylistItem;
    _bAtLeastOneChildAbortEndSuspended : boolean;
    _initialRequestToPlayEvent    : amGeneralEvent.am_general.AE_Event;
    
    //----------------
    constructor()
    {
      super();
      this._statusName = "REQUEST-TO-ABORT-OR-END-BEFORE-PLAY_LIST";
      this._lastAbortEndSuspendChildIdx       = -1;
      this._lastAbortEndSuspendChild          = null;
      this._bAtLeastOneChildAbortEndSuspended = false;
      this._initialRequestToPlayEvent         = null;
    }

    //------------------------------
    public injectDependencies( aSrvContainer: amServiceContainer.am_configurationservices.A_ServiceContainer, 
                               aSrvLocator:   amServiceLocator.am_configurationservices.A_ServiceLocator, 
                               aSrvLog:       amServiceLog.am_transversalservices.A_LogService, 
                               error: amGeneralError.am_general.A_Error) : number
    {
      super.injectDependencies( aSrvContainer, aSrvLocator, aSrvLog, error);
      return 0;
    }

    //=========================
    public reset()
    {
      this._lastAbortEndSuspendChildIdx       = -1;
      this._lastAbortEndSuspendChild          = null;
      this._bAtLeastOneChildAbortEndSuspended = false;
      this._initialRequestToPlayEvent         = null;
    }


    //======================
    public passToMe( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                     aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                     aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                     context: amGeneralContext.am_general.A_Context, callback): void
    {
      this.getDiagram().setStatusCode(amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestEndOrAbortBeforePlay_List);      
      //---- specific actions
      this.reset();
      this._initialRequestToPlayEvent         = event;
      this.requestNextChildToAbortEndSuspend(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
    }


    
    //======================
    public requestNextChildToAbortEndSuspend( 
                     event : amGeneralEvent.am_general.AE_Event, 
                     eventQueue: amGeneralQueue.am_general.AE_Queue, 
                     error: amGeneralError.am_general.A_Error, 
                     aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                     aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                     context: amGeneralContext.am_general.A_Context, callback): void
    {    
      if ( ( event.getEventRequest() != amGeneralEventRequestType.am_general.AE_EventRequestType.EvtRequest_AbortSiblings) &&
           ( event.getEventRequest() != amGeneralEventRequestType.am_general.AE_EventRequestType.EvtRequest_EndSiblings)  //&& to be added
           //( event.getEventRequest() != amGeneralEventRequestType.am_general.AE_EventRequestType.EvtRequest_SuspendSiblings) 
         )
      {
        this._transitionTo_StatusRequestToPlay_or_Similar.getStatus().passToMe( this._initialRequestToPlayEvent, eventQueue, error, 
                                                                                aPlaylistController, aRenderingController, context, callback);
        return;
      }

      var nextChildToAbortEndSuspend = this.getContainerDiagram().cmd_selectNextStartedChild( 
                                 this._lastAbortEndSuspendChildIdx, 
                                 this._initialRequestToPlayEvent, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
      if (nextChildToAbortEndSuspend == null)
      {
        return ;
      }
      this._lastAbortEndSuspendChild    = nextChildToAbortEndSuspend; 
      this._lastAbortEndSuspendChildIdx = this._lastAbortEndSuspendChild.getLogic().getOwnerIdxAsChild();

      //---------- no child to play - pss to status End
      if (this._lastAbortEndSuspendChild == null)
      {
        this._transitionTo_StatusRequestToPlay_or_Similar.getStatus().passToMe(  this._initialRequestToPlayEvent, eventQueue, 
                                                                                 error, aPlaylistController, aRenderingController, context, callback);
        return ;
      }
      //---- try to end or abort or suspend the started child if suspended
      switch(event.getEventRequest())
      {
        case amGeneralEventRequestType.am_general.AE_EventRequestType.EvtRequest_AbortSiblings:
          this.postEvent( amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToAbort, 
                          this._lastAbortEndSuspendChild.getLogic(), null, this._lastAbortEndSuspendChild.getLogic().getOwnerIdxAsChild(), 
                          eventQueue, error, context, callback);
          return;
        case amGeneralEventRequestType.am_general.AE_EventRequestType.EvtRequest_EndSiblings:
          this.postEvent( amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToEnd, 
                          this._lastAbortEndSuspendChild.getLogic(), null, this._lastAbortEndSuspendChild.getLogic().getOwnerIdxAsChild(), 
                          eventQueue, error, context, callback);
          return;
        case amGeneralEventRequestType.am_general.AE_EventRequestType.EvtRequest_SuspendSiblings:
          this.postEvent( amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToEnd, 
                          this._lastAbortEndSuspendChild.getLogic(), null, this._lastAbortEndSuspendChild.getLogic().getOwnerIdxAsChild(),  
                          eventQueue, error, context, callback);
          return;                
      }
    }

    //========================
    public onNotify_ChildSuspended(
               event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
               aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
               aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
               context: amGeneralContext.am_general.A_Context, callback): void
    {
      //this._bAtLeastOneChildSuspended = true;
      this.onNotify_ChildErrorDisableSuspendEnd(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
    }

    //========================
    public onNotify_ChildError(
               event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
               aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
               aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
               context: amGeneralContext.am_general.A_Context, callback): void
    {
      //this._bAtLeastOneChildInError = true;
      this.onNotify_ChildErrorDisableSuspendEnd(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
    }

    //========================
    public onNotify_ChildDisable(
               event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
               aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
               aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
               context: amGeneralContext.am_general.A_Context, callback): void
    {
      //this._bAtLeastOneChildDisable = true;
      this.onNotify_ChildErrorDisableSuspendEnd(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
    }

 
    //======================
    public onNotify_ChildEnd(
                  event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                  aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                  aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                  context: amGeneralContext.am_general.A_Context, callback): void
    {
      //this._bAtLeastOneChildEnded = true;
      this.onNotify_ChildErrorDisableSuspendEnd(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
    }

    //======================
    public onNotify_ChildErrorDisableSuspendEnd(
                  event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                  aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                  aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                  context: amGeneralContext.am_general.A_Context, callback): void
    {
      return this.requestNextChildToAbortEndSuspend(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
    }

    //======================
    public  receiveEvent( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                          aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                          aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                          context: amGeneralContext.am_general.A_Context, callback): void
    {
      if (this.getDiagram().getStatusCode() != amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestEndOrAbortBeforePlay_List)
        return this.ignoreEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
    
      switch(event.getEventId()) 
      {        
        case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToPlay:
          //this.passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
          break;       
        case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToEnd:
          this._transitionTo_StatusRequestToEnd.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
          break;
        case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToAbort:
          this._transitionTo_StatusRequestToAbort.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
          break;
        //--- in the End Status you cannot passed a playlist-item in the status Suspended or to Resume the suspension
        case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToSuspend:
          break;       
        case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToResume:
          break;       

        //---- a media item has no playlist children -- but has a natural child
        case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildPlay:
          break;
        case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildEnd:
          this.onNotify_ChildEnd(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);  
          break;
        case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildDisable:
          this.onNotify_ChildDisable(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);  
          break;
        case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildError:
          this.onNotify_ChildError(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);  
          break;
        case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildSuspended:
          this.onNotify_ChildSuspended(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);  
          break;
        case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildResumed:
          break;
        case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyGraphicDescendantEnd:
          break;
        default:
      } 
      return this.returnWithCallback(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback); 
    }


  }
} 