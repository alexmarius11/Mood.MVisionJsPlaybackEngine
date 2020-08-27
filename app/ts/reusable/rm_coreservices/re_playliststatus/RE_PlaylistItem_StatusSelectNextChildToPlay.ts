import amCoreServices   = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusSelectNextChildToPlay");

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
import amGeneralEventRequestType  = require("../../../../../app/ts/abstract/am_general/ae_event/AE_EventRequestType");
import amNextChildSelectionType = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_NextChildSelectionType");

import rmPlaylistItemStatus  = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_Status");


export module rm_coreservices
{
  export class RE_PlaylistItem_StatusSelectNextChildToPlay extends rmPlaylistItemStatus.rm_coreservices.RE_PlaylistItem_Status
                                                           implements amCoreServices.am_coreservices.AE_PlaylistItem_StatusSelectNextChildToPlay
  {

    //--------------------- 
    _transitionTo_StatusRequestToPlay_or_Similar : amPlaylistItemTransition.am_coreservices.AE_PlaylistItem_Transition;
    _transitionTo_StatusError                    : amPlaylistItemTransition.am_coreservices.AE_PlaylistItem_Transition;
    _transitionTo_StatusEnd                      : amPlaylistItemTransition.am_coreservices.AE_PlaylistItem_Transition;
    _transitionTo_StatusRequestToAbort           : amPlaylistItemTransition.am_coreservices.AE_PlaylistItem_Transition;
    _transitionTo_StatusRequestToEnd             : amPlaylistItemTransition.am_coreservices.AE_PlaylistItem_Transition;

     //------------- properties
     _lastSelectedChildIdx     : number;
     _lastSelectedChild        : amPlaylistItem.am_coreservices.AE_PlaylistItem;
     _bAtLeastOneChildSelected : boolean;
     //_bAtLeastOneChildInError : boolean;
     //_bAtLeastOneChildDisable : boolean;
     //_bAtLeastOneChildEnded   : boolean;
 
     //----------------
     constructor()
     {
       super();
       this._statusName = "SELECT-NEXT-CHILD_TO_PLAY";
       this._transitionTo_StatusRequestToPlay_or_Similar = null;
       this._transitionTo_StatusError                    = null;
       this._transitionTo_StatusEnd                      = null;
       this._transitionTo_StatusRequestToAbort           = null;
       this._transitionTo_StatusRequestToEnd             = null; 

       this._lastSelectedChildIdx     = -1;
       this._lastSelectedChild        = null; 
       this._bAtLeastOneChildSelected = false;
     }

   
    //------------------------------
    public injectDependencies( aSrvContainer: amServiceContainer.am_configurationservices.A_ServiceContainer, 
                               aSrvLocator:   amServiceLocator.am_configurationservices.A_ServiceLocator, 
                               aSrvLog:       amServiceLog.am_transversalservices.A_LogService, 
                               error: amGeneralError.am_general.A_Error) : number
    {
      super.injectDependencies( aSrvContainer, aSrvLocator, aSrvLog, error);
      this._transitionTo_StatusRequestToPlay_or_Similar = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemTransition(error);
      this._transitionTo_StatusError                    = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemTransition(error);
      this._transitionTo_StatusEnd                      = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemTransition(error);
      this._transitionTo_StatusRequestToAbort           = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemTransition(error);
      this._transitionTo_StatusRequestToEnd             = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemTransition(error);  
      return 0;
    }


    //-----------------------------
    public reset()
    {
      this._lastSelectedChildIdx     = -1;
      this._lastSelectedChild        = null; 
      this._bAtLeastOneChildSelected = false;
    }


    //======================
    public passToMe( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                     aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                     aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                     context: amGeneralContext.am_general.A_Context, callback): void
    {
      //---
      if (this.getContainerDiagram() == null)
      {
        this._transitionTo_StatusRequestToEnd.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
        return ;
      }

      this.getDiagram().setStatusCode(amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_SelectNextChildToPlay);      
      //---- specific actions
      this.reset();
      this.requestNextChildToSelect(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
      //---------- no child to play - pss to status End
      if (this._lastSelectedChild == null)
      {
        this._transitionTo_StatusRequestToEnd.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
        return ;
      }
      //---- pass to necxt status
      this._transitionTo_StatusRequestToPlay_or_Similar.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);

    }

    
    //======================
    public requestNextChildToSelect( 
                     event : amGeneralEvent.am_general.AE_Event, 
                     eventQueue: amGeneralQueue.am_general.AE_Queue, 
                     error: amGeneralError.am_general.A_Error, 
                     aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                     aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                     context: amGeneralContext.am_general.A_Context, callback): void
    {    
      var nextChildToStart = this.getContainerDiagram().cmd_selectNextChildToPlay( 
                                 this._lastSelectedChildIdx, null,
                                 event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
      if (nextChildToStart == null)
        return ;

      this._lastSelectedChild = nextChildToStart; 
      this._lastSelectedChildIdx = this._lastSelectedChild.getLogic().getOwnerIdxAsChild();

      this.getContainerDiagram().cmd_setCrtSelectedChild(this._lastSelectedChild); 

      //if ( this.getContainerDiagram().cmd_hasMultiplay()) // to do?
        //this.getContainerDiagram().cmd_addNewSelectedChild(this._lastSelectedChild); 
    }

    //========================
    public onNotify_ChildPlay(
               event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
               aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
               aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
               context: amGeneralContext.am_general.A_Context, callback): void
    {
      //this._bAtLeastOneChildStarted = true;
      this.onNotify_ChildPlayErrorDisableEnd(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
    }

    //========================
    public onNotify_ChildError(
               event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
               aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
               aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
               context: amGeneralContext.am_general.A_Context, callback): void
    {
      //this._bAtLeastOneChildInError = true;
      this.onNotify_ChildPlayErrorDisableEnd(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
    }

    //========================
    public onNotify_ChildDisable(
               event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
               aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
               aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
               context: amGeneralContext.am_general.A_Context, callback): void
    {
      //this._bAtLeastOneChildDisable = true;
      this.onNotify_ChildPlayErrorDisableEnd(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
    }

 
    //======================
    public onNotify_ChildEnd(
                  event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                  aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                  aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                  context: amGeneralContext.am_general.A_Context, callback): void
    {
      if (event.getEventRequest() == amGeneralEventRequestType.am_general.AE_EventRequestType.EvtRequest_AbortParent)
        this._transitionTo_StatusRequestToAbort.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);

      //this._bAtLeastOneChildEnded = true;
      this.onNotify_ChildPlayErrorDisableEnd(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
    }

    //======================
    public onNotify_ChildPlayErrorDisableEnd(
                  event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                  aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                  aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                  context: amGeneralContext.am_general.A_Context, callback): void
    {
      /*
      //------------- singleplay : one child starts at a time
      if ( ! this.getContainerDiagram().cmd_hasMultiplay())
      {
        if (event.getEventId() == amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildPlay)
        {
          this._transitionTo_StatusPlay.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
          return ;
        }
        this.requestNextChildToPlay(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
        if (this._lastStartedChild == null)
        {
          this._transitionTo_StatusEnd.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
        }
        //---- request to play the next child 
        this.postEvent( amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToPlay, 
                        this._lastStartedChild.getLogic(), null, -1, eventQueue, error, context, callback);
      }     
      
      //----------------- multiplay : start all children (in scope) one after the other from the beginning
      this.requestNextChildToPlay(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
      //--------------------------------- no child to start
      if (this._lastStartedChild == null)
      {
        if (this._bAtLeastOneChildStarted)
          this._transitionTo_StatusPlay.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
        else
          this._transitionTo_StatusEnd.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
        return ;
      }
      //---- request to play the next child 
      this.postEvent( amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToPlay, 
                      this._lastStartedChild.getLogic(), null, -1, eventQueue, error, context, callback);
      */
    }

    //======================
    public  receiveEvent( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                          aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                          aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                          context: amGeneralContext.am_general.A_Context, callback): void
    {
      if (this.getDiagram().getStatusCode() != amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_SelectNextChildToPlay)
        return this.ignoreEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
    
      switch(event.getEventId()) 
      {        
        case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToPlay:
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
          this.onNotify_ChildPlay(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);  
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