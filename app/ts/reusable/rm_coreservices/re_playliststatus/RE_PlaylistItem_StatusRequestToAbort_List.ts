import amCoreServices   = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToAbort_List");

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


import rmPlaylistItemStatus  = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToAbort");

export module rm_coreservices
{
  export class RE_PlaylistItem_StatusRequestToAbort_List extends rmPlaylistItemStatus.rm_coreservices.RE_PlaylistItem_StatusRequestToAbort
                                                          implements amCoreServices.am_coreservices.AE_PlaylistItem_StatusRequestToAbort_List
  {
    //------------- properties
    _lastAbortChildIdx     : number;
    _lastAbortChild         : amPlaylistItem.am_coreservices.AE_PlaylistItem;

 
    //----------------
    constructor()
    {
      super();
      this._statusName = "REQUEST-TO-ABORT_LIST";
      this._lastAbortChildIdx       = -1;
      this._lastAbortChild          = null;
    }

    //======================
    public injectDependencies( aSrvContainer: amServiceContainer.am_configurationservices.A_ServiceContainer, 
                               aSrvLocator:   amServiceLocator.am_configurationservices.A_ServiceLocator, 
                               aSrvLog:       amServiceLog.am_transversalservices.A_LogService, 
                               error: amGeneralError.am_general.A_Error) : number
    {
      super.injectDependencies( aSrvContainer, aSrvLocator, aSrvLog, error);
      return 0;
    }

    //=========================
    public reset2()
    {
      this._lastAbortChildIdx       = -1;
      this._lastAbortChild          = null;
    }

    //=========================
    public reset()
    {
      this._lastAbortChildIdx       = -1;
      this._lastAbortChild          = null;
    }
    

    //======================
    public passToMe( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                      aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                      aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                      context: amGeneralContext.am_general.A_Context, callback): void
    {
      this.getDiagram().setStatusCode(amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestToAbort_List);      
      //---- specific actions
      this.reset();
      this.requestNextChildToAbortAndEnd(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
    }


    
    //======================
    public requestNextChildToAbortAndEnd( 
                      event : amGeneralEvent.am_general.AE_Event, 
                      eventQueue: amGeneralQueue.am_general.AE_Queue, 
                      error: amGeneralError.am_general.A_Error, 
                      aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                      aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                      context: amGeneralContext.am_general.A_Context, callback): void
    {    
      var nextChildToEnd = this.getContainerDiagram().cmd_selectNextStartedChild( 
                                            this._lastAbortChildIdx, 
                                             event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
      if (nextChildToEnd == null)
      {
        this._lastAbortChild    = null; 
        this._lastAbortChildIdx = -1;  
        this.reset2();
        this._transitionTo_StatusEnd.getStatus().passToMe( event, eventQueue, 
                                                           error, aPlaylistController, aRenderingController, context, callback);
        return ;
      }
      this._lastAbortChild    = nextChildToEnd; 
      this._lastAbortChildIdx = this._lastAbortChild.getLogic().getOwnerIdxAsChild();
      //---------
      this.postEvent( amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToAbort, 
                      this._lastAbortChild.getLogic(), null, this._lastAbortChild.getLogic().getOwnerIdxAsChild(), eventQueue, error, context, callback);
    }


    //======================
    public onNotify_ChildEnd(
                  event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                  aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                  aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                  context: amGeneralContext.am_general.A_Context, callback): void
    {
      //this._bAtLeastOneChildEnded = true;
      return this.requestNextChildToAbortAndEnd(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
    }




    //======================
    public requestCrtChildToAbort( 
                      event : amGeneralEvent.am_general.AE_Event, 
                      eventQueue: amGeneralQueue.am_general.AE_Queue, 
                      error: amGeneralError.am_general.A_Error, 
                      aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                      aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                      context: amGeneralContext.am_general.A_Context, callback): void
    {   
      //---------- 
      if (this._lastAbortChild == null)
      {
        this.reset2();
        this._transitionTo_StatusEnd.getStatus().passToMe( event, eventQueue, 
                                                           error, aPlaylistController, aRenderingController, context, callback);
        return ;
      }
      //------
      this.postEvent( amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToAbort, 
                      this._lastAbortChild.getLogic(), null, this._lastAbortChild.getLogic().getOwnerIdxAsChild(), eventQueue, error, context, callback);
    }
    //========================
    public onNotify_ChildSuspended(
                event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                context: amGeneralContext.am_general.A_Context, callback): void
    {
      //this._bAtLeastOneChildSuspended = true;
      return this.requestCrtChildToAbort(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
    }

    //========================
    public onNotify_ChildError(
                event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                context: amGeneralContext.am_general.A_Context, callback): void
    {
      //this._bAtLeastOneChildInError = true;
      return this.requestCrtChildToAbort(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
    }
    //========================
    public onNotify_ChildDisable(
                event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                context: amGeneralContext.am_general.A_Context, callback): void
    {
      //this._bAtLeastOneChildDisable = true;
      return this.requestCrtChildToAbort(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
    }


    //======================
    public  receiveEvent( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                          aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                          aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                          context: amGeneralContext.am_general.A_Context, callback): void
    {
      if (this.getDiagram().getStatusCode() != amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestToAbort_List)
        return this.ignoreEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
    
      switch(event.getEventId()) 
      {        
        case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToPlay:
          break;       
        case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToEnd:
          break;
        case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToAbort:
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
          //this.onNotify_ChildDisable(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);  
          break;
        case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildError:
          //this.onNotify_ChildError(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);  
          break;
        case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildSuspended:
          //this.onNotify_ChildSuspended(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);  
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