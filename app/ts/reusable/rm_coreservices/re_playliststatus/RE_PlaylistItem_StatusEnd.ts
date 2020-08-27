import amCoreServices   = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusEnd");

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
import amPrepareParams = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Prepare");
import amRunParams     = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Run");
import amStopParams    = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Stop");

export module rm_coreservices
{
  export class RE_PlaylistItem_StatusEnd extends rmPlaylistItemStatus.rm_coreservices.RE_PlaylistItem_Status
                                         implements amCoreServices.am_coreservices.AE_PlaylistItem_StatusEnd
  {
    //-----------------
    _transitionTo_StatusDisable : amPlaylistItemTransition.am_coreservices.AE_PlaylistItem_Transition;
    _transitionTo_StatusRequestToPlay_or_Similar : amPlaylistItemTransition.am_coreservices.AE_PlaylistItem_Transition;

    //----------------
    constructor()
    {
      super();
      this._statusName = "END";
      this._transitionTo_StatusDisable                  = null;
      this._transitionTo_StatusRequestToPlay_or_Similar = null;
    }

    //------------------------------
    public injectDependencies( aSrvContainer: amServiceContainer.am_configurationservices.A_ServiceContainer, 
                               aSrvLocator:   amServiceLocator.am_configurationservices.A_ServiceLocator, 
                               aSrvLog:       amServiceLog.am_transversalservices.A_LogService, 
                               error: amGeneralError.am_general.A_Error) : number
    {
      super.injectDependencies( aSrvContainer, aSrvLocator, aSrvLog, error);
      this._transitionTo_StatusDisable                  = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemTransition(error);
      this._transitionTo_StatusRequestToPlay_or_Similar = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemTransition(error);
      return 0;
    }

    //======================
    public passToMe( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                     aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                     aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                      context: amGeneralContext.am_general.A_Context, callback): void
    {
      this.getDiagram().setStatusCode(amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_End);
      
      //---- specific actions
      this.getDiagram().clearDurationTimersIfAny();
      this.reset();
      this.getDiagram().reset();
      var self = this;
      var destroyRenderingZoneEnd = function destroyRenderingZoneEnd()
      {
        //---- notifications
        self.notifyChildEnd(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
        //self.notifyGraphicDescendantEnd(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
      }
      this.destroyRenderingZoneIfNecessary(event, eventQueue, error, aPlaylistController, aRenderingController, context, destroyRenderingZoneEnd);
    }

    //======================
    public createRenderingZoneIfNecessary( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                                           aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                           aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                           context: amGeneralContext.am_general.A_Context, callback): void
    {
      //try {
        if (this.getDiagram() == null)
          return ;
        var self = this;
        if (this.getDiagram().mustCreateARenderingZone())
        {
            this.trace(1,"plc_trace", " START ", " CREATE RENDERING ZONE ");
            var createZone = function createZone()
            {
            }
            var zoneId =  this.getDiagram().getOwner().getPlaylistItemId();
            aPlaylistController._iPlaylistControllerCommands.cmd_createZone(
                                                zoneId,  //zoneId : number, 
                                                this.getDiagram().getOwner().getPrepareParams(), error, context, createZone) ;
            
        }
      //}catch(e){
      //}
    }

    //======================
    public destroyRenderingZoneIfNecessary( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                                           aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                           aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                           context: amGeneralContext.am_general.A_Context, callback): void
    {
      //try
      //{
        if (this.getDiagram() != null)
        {
          if (this.getDiagram().mustCreateARenderingZone())
          {
            this.trace(1,"plc_trace", " STOP ", " DESTROY RENDERING ZONE ");
            var owner = this;
            var zoneId =  this.getDiagram().getOwner().getPlaylistItemId();
            var stopParams: amStopParams.am_renderingservices.AE_ControlParams_Stop = null;
            var stopZone = function stopZone(): void
            {
              //---
              var destroyZone = function destroyZone(): void
              {
                context.setError(error);
                if (callback != null)
                   callback(context);     
                return ; 
              }
              return aPlaylistController._iPlaylistControllerCommands.cmd_destroyZone(zoneId, stopParams, error, context, destroyZone) ;
            }  
            return aPlaylistController._iPlaylistControllerCommands.cmd_stopZone(zoneId, stopParams, error, context,  stopZone);
      
          }
        }
        context.setError(error);
        if (callback != null)
           callback(context);     
        return ; 
      //}catch(e){
      //}
    }

    //======================
    public notifyChildEnd( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                           aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                           aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                           context: amGeneralContext.am_general.A_Context, callback): void
    {
      if (this.getDiagram().getOwner().getParent() == null)
        return ;
      this.postEvent( amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildEnd, 
                      this.getDiagram().getOwner().getParent().getLogic(), null, this.getDiagram().getOwnerIdxAsChild(), 
                                                                                //this.getDiagram().getOwner().getParent().getLogic().getOwnerIdxAsChild(), 
                      eventQueue, error, context, callback);            
    }

    //======================
    public notifyGraphicDescendantEnd( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                                       aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                       aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                       context: amGeneralContext.am_general.A_Context, callback): void
    {
      if (this.getDiagram().getOwner().getParent() == null)
        return ;      
      if ( ! this.getDiagram().hasARenderingRepresentation())  
        return ;
      this.postEvent( amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyGraphicDescendantEnd, 
                      this.getDiagram().getOwner().getParent().getLogic(), null, this.getDiagram().getOwner().getParent().getLogic().getOwnerIdxAsChild(), 
                      eventQueue, error, context, callback);  
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
        {
          if ( this.getDiagram().isDisable(null, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback))
          {
            this._transitionTo_StatusDisable.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);            
            return this.returnWithCallback(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
          }
          this.trace(1,"plc_trace", " START ", "");
          this.getDiagram().startDurationTimersIfAny(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
          this.createRenderingZoneIfNecessary(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
          this._transitionTo_StatusRequestToPlay_or_Similar.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
          break;
        }        
        case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToEnd:
          this.notifyChildEnd(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
          break;
        case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToAbort:
          this.notifyChildEnd(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
          break;
        //--- in the End Status you cannot passed a playlist-item in the status Suspended or to Resume the suspension
        case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToSuspend:
          break;  
        case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToResume:
          break;  
        //---- a media item has no children
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

    }

  }  
} 