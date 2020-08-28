import amCoreServices   = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToPlay_List");

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

import rmPlaylistItemStatus  = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToPlay");


export module rm_coreservices
{
  export class RE_PlaylistItem_StatusRequestToPlay_List extends rmPlaylistItemStatus.rm_coreservices.RE_PlaylistItem_StatusRequestToPlay
                                                        implements amCoreServices.am_coreservices.AE_PlaylistItem_StatusRequestToPlay_List
  {
    //------------- properties
    _lastStartedChildIdx     : number;
    _lastStartedChild        : amPlaylistItem.am_coreservices.AE_PlaylistItem;
    _bAtLeastOneChildStarted : boolean;
    _bAtLeastOneChildInError : boolean;
    _bAtLeastOneChildDisable : boolean;
    _bAtLeastOneChildEnded   : boolean;
    //_interruptionsHistory     : amGeneralQueue.am_general.AE_Queue;

    //----------------
    constructor()
    {
      super();
      this._statusName = "REQUEST-TO-PLAY_LIST";
      this._lastStartedChildIdx     = -1;
      this._lastStartedChild        = null; 
      this._bAtLeastOneChildStarted = false;
      this._bAtLeastOneChildInError = false;
      this._bAtLeastOneChildDisable = false;
      this._bAtLeastOneChildEnded   = false;
      //this._interruptionsHistory    = null;
    }

    //----------------------------
    public setLastStartedChild(lastStartedChild : amPlaylistItem.am_coreservices.AE_PlaylistItem) : boolean
    {
      if (lastStartedChild == null)
        return false; 
      this._lastStartedChild = lastStartedChild; 
      this._lastStartedChildIdx = this._lastStartedChild.getLogic().getOwnerIdxAsChild();
      return true;
    } 

    /*
    //----------------------------
    public addChildInInterruptionHistory(child: amPlaylistItem.am_coreservices.AE_PlaylistItem)
    {
      if (this._interruptionsHistory == null)
      {
        this._aSrvLocator._iEntityCreation.createDefaultQueue(null);
      }
      this._interruptionsHistory.push(child))
    }

    //--------------------------------
    public clearInterruptionHistory()
    {
      this._interruptionsHistory.clear();
    }*/

    public reset2()
    {
      this.getContainerDiagram().cmd_clearStartedChildren();
      this._lastStartedChildIdx     = -1;
      this._lastStartedChild        = null; 
      this._bAtLeastOneChildInError = false;
      this._bAtLeastOneChildDisable = false;
      this._bAtLeastOneChildDisable = false;
      this._bAtLeastOneChildEnded   = false;
    }
    //-----------------------------
    public reset()
    {
      if ( ! this.getContainerDiagram().cmd_hasMultiplay())
      {
        /*
        this._lastStartedChildIdx = -1;
        this._lastStartedChild    = this.getContainerDiagram().cmd_getCrtStartedChild(); 
        if (this._lastStartedChild == null)
          this._lastStartedChildIdx = this._lastStartedChild.getLogic().getOwnerIdxAsChild();
        */
        return;
      }  
      this.getContainerDiagram().cmd_clearStartedChildren();
      this._lastStartedChildIdx     = -1;
      this._lastStartedChild        = null; 
      this._bAtLeastOneChildInError = false;
      this._bAtLeastOneChildDisable = false;
      this._bAtLeastOneChildDisable = false;
      this._bAtLeastOneChildEnded   = false;
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
      this.getDiagram().setStatusCode(amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestToPlay_List);      
      //---- specific actions
      this.reset();
      
      if (this.manageAnExceptionalRequestToPlay(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback))
      {
        return;
      }
      this.requestNextChildToPlay(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
      //---------- no child to play - pass to status End
      if (this._lastStartedChild == null) // request to end
      {
        this.reset2();
        this._transitionTo_StatusEnd.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
        return ;
      }
      //---- notifications
      this.postEvent( amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToPlay, 
                        this._lastStartedChild.getLogic(), null, this._lastStartedChild.getLogic().getOwnerIdxAsChild(), eventQueue, error, context, callback);

    }

    //======================
    public manageAnExceptionalRequestToPlay(
          event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
          aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
          aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
          context: amGeneralContext.am_general.A_Context, callback): boolean
    {
      if (this._transitionTo_StatusRequestToAbortOrEndBeforePlay.getStatus() == null)
        return false;
      var nextChildToStart = this.getContainerDiagram().cmd_selectNextChildToPlay( 
                                     -1, 
                                     amNextChildSelectionType.am_coreservices.AE_NextChildSelectionType.NextChildSelectionType_Select_usingChildAddressFromEvent,
                                     event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
      if (nextChildToStart == null)
        return false;
      var nextChildToStartIdx = nextChildToStart.getLogic().getOwnerIdxAsChild();
      this.getContainerDiagram().cmd_setCrtStartedChild(nextChildToStart); 
      if ( this.getContainerDiagram().cmd_hasMultiplay())
        this.getContainerDiagram().cmd_addNewStartedChild(nextChildToStart); 
       return true;
      /*
      this._lastStartedChild = nextChildToStart; 
      this._lastStartedChildIdx = this._lastStartedChild.getLogic().getOwnerIdxAsChild();
  
      this.getContainerDiagram().cmd_setCrtStartedChild(this._lastStartedChild); 
      if ( this.getContainerDiagram().cmd_hasMultiplay())
        this.getContainerDiagram().cmd_addNewStartedChild(this._lastStartedChild); 
      */
    }
 
    //======================
    public on_ChildRequestToPlay(
                      event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                      aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                      aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                      context: amGeneralContext.am_general.A_Context, callback): void
    { 
      if (this._transitionTo_StatusRequestToAbortOrEndBeforePlay.getStatus() == null)
        return;
      var nextChildToStart = this.getContainerDiagram().cmd_selectNextChildToPlay( 
                                     -1, 
                                     amNextChildSelectionType.am_coreservices.AE_NextChildSelectionType.NextChildSelectionType_Select_usingChildAddressFromEvent,
                                     event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
      if (nextChildToStart == null)
        return;
      if (! this.getContainerDiagram().cmd_childHasBiggerOrEqualPriority_thanOtherStartedChildren(nextChildToStart))
        return;
      this._transitionTo_StatusRequestToAbortOrEndBeforePlay.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
    }
    
    //======================
    public requestNextChildToPlay( 
                     event : amGeneralEvent.am_general.AE_Event, 
                     eventQueue: amGeneralQueue.am_general.AE_Queue, 
                     error: amGeneralError.am_general.A_Error, 
                     aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                     aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                     context: amGeneralContext.am_general.A_Context, callback): void
    {    
      var nextChildToStart = this.getContainerDiagram().cmd_selectNextChildToPlay( 
                                 this._lastStartedChildIdx, this.getContainerDiagram().cmd_getNextChildSelectionType(),
                                 event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
      if (nextChildToStart == null)
      { 
        this._lastStartedChild = null;
        this._lastStartedChildIdx = -1;
        return ;
      }

      this._lastStartedChild = nextChildToStart; 
      this._lastStartedChildIdx = this._lastStartedChild.getLogic().getOwnerIdxAsChild();

      this.getContainerDiagram().cmd_setCrtStartedChild(this._lastStartedChild); 
      if ( this.getContainerDiagram().cmd_hasMultiplay())
        this.getContainerDiagram().cmd_addNewStartedChild(this._lastStartedChild); 
    }

    //========================
    public onNotify_ChildPlay(
               event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
               aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
               aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
               context: amGeneralContext.am_general.A_Context, callback): void
    {
      this._bAtLeastOneChildStarted = true;
      this.onNotify_ChildPlay_ChildEnd(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
    }

    //========================
    public onNotify_ChildError(
               event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
               aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
               aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
               context: amGeneralContext.am_general.A_Context, callback): void
    {
      this._bAtLeastOneChildInError = true;
      var senderChild = this.getContainerDiagram().cmd_getChildFromIndex(event.getCrtTargetIdx());
      if (senderChild == null)
        return;
      this.postEvent( amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToAbort, 
                      senderChild.getLogic(), null, -1, eventQueue, error, context, callback);
      //this.onNotify_ChildPlayErrorDisableEnd(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
      //this.postEvent( amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToAbort, 
                    //  event.getSender(), null, -1, eventQueue, error, context, callback);
    }

    //========================
    public onNotify_ChildDisable(
               event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
               aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
               aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
               context: amGeneralContext.am_general.A_Context, callback): void
    {
      this._bAtLeastOneChildDisable = true;
      var senderChild = this.getContainerDiagram().cmd_getChildFromIndex(event.getCrtTargetIdx());
      if (senderChild == null)
        return;
      this.postEvent( amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToAbort, 
                      senderChild.getLogic(), null, -1, eventQueue, error, context, callback);
      //this.onNotify_ChildPlayErrorDisableEnd(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
    }

 
    //======================
    public onNotify_ChildEnd(
                  event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                  aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                  aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                  context: amGeneralContext.am_general.A_Context, callback): void
    {
      var childIdx = event.getCrtTargetIdx();
      if (childIdx == 2)
      {
         var a =1;
      }
      /*
      if (event.getEventRequest() == amGeneralEventRequestType.am_general.AE_EventRequestType.EvtRequest_AbortParent)
      {
        return this._transitionTo_StatusRequestToAbort.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
      }*/
      if (event.getEventRequest() == amGeneralEventRequestType.am_general.AE_EventRequestType.EvtRequest_AbortParent)
      { 
        var crtContainerIdx = this.getContainerDiagram().getOwnerIdxAsChild();
        if (this.getContainerDiagram().cmd_acceptChildRequestToEndParent( crtContainerIdx, event, eventQueue, error, 
                                                                          aPlaylistController,aRenderingController, context, callback))
        {
          return this._transitionTo_StatusRequestToAbort.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
        }else{
          var senderChildIdx = event.getCrtTargetIdx();
          var senderChild = this.getContainerDiagram().cmd_getChildFromIndex(senderChildIdx);
          if (senderChild == null)
            return;   
          var self = this;
          //setTimeout( function() 
          //{ 
            self.postEvent( amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToPlay, 
                       senderChild.getLogic(), null, senderChild.getLogic().getOwnerIdxAsChild(), eventQueue, error, context, callback);
            return self.returnWithCallback(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
          //}, 
          //10);
          return;               
         }
      }
      this._bAtLeastOneChildEnded = true;
      this.onNotify_ChildPlay_ChildEnd(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
    }

    //======================
    public onNotify_ChildPlay_ChildEnd(
                  event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                  aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                  aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                  context: amGeneralContext.am_general.A_Context, callback): void
    {
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
          this.reset2();
          this._transitionTo_StatusEnd.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
        }
        //---- request to play the next child 
        this.postEvent( amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToPlay, 
                        this._lastStartedChild.getLogic(), null, this._lastStartedChild.getLogic().getOwnerIdxAsChild(), eventQueue, error, context, callback);
        
        //--- 
        return;
      }     
      
      //----------------- multiplay : start all children (in scope) one after the other from the beginning
      this.requestNextChildToPlay(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
      //--------------------------------- no child to start
      if (this._lastStartedChild == null)
      {
        if (this._bAtLeastOneChildStarted)
          this._transitionTo_StatusPlay.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
        else{
          this.reset2();
          this._transitionTo_StatusEnd.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
        }
        return ;
      }
      //---- request to play the next child 
      this.postEvent( amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToPlay, 
                      this._lastStartedChild.getLogic(), null, this._lastStartedChild.getLogic().getOwnerIdxAsChild(), eventQueue, error, context, callback);
    }


    //======================
    public  receiveEvent( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                          aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                          aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                          context: amGeneralContext.am_general.A_Context, callback): void
    {
      if (this.getDiagram().getStatusCode() != amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestToPlay_List)
        return this.ignoreEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
    
      switch(event.getEventId()) 
      {        
        case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToPlay:
          this.on_ChildRequestToPlay(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);  
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