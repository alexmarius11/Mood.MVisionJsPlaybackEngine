import amCoreServices   = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToPlay_Media");

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

import rmPlaylistItemStatus  = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToPlay");

import amPlaylistItemType = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItemType");

export module rm_coreservices
{
  export class RE_PlaylistItem_StatusRequestToPlay_Media extends rmPlaylistItemStatus.rm_coreservices.RE_PlaylistItem_StatusRequestToPlay
                                                        implements amCoreServices.am_coreservices.AE_PlaylistItem_StatusRequestToPlay_Media
  {
     //----------------
     constructor()
     {
       super();
       this._statusName = "REQUEST-TO-PLAY_MEDIA";
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

    //=====================
    public reset()
    {

    }

    //======================
    public passToMe( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                     aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                     aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                     context: amGeneralContext.am_general.A_Context, callback): void
    {
      this.getDiagram().setStatusCode(amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestToPlay_Media);
      
      //---- specific actions
      this.reset();
      this.startPlayOrPassedToError(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
      //---- notifications
    }

    //=============================
    public startPlayOrPassedToError( 
                                     event : amGeneralEvent.am_general.AE_Event, 
                                     eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                                     aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                     aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                     context: amGeneralContext.am_general.A_Context, callback): void
    {
      var self = this;
      var bUseFake = true;
      var playlistItemType = this.getDiagram().getOwner().getPlaylistItemType();
      if (     (playlistItemType  == amPlaylistItemType.am_coreservices.AE_PlaylistItemType.PlaylistItemType_Image) 
            || (playlistItemType  == amPlaylistItemType.am_coreservices.AE_PlaylistItemType.PlaylistItemType_Video) 
            || (playlistItemType  == amPlaylistItemType.am_coreservices.AE_PlaylistItemType.PlaylistItemType_WebPage)   
            || (playlistItemType  == amPlaylistItemType.am_coreservices.AE_PlaylistItemType.PlaylistItemType_ScreenSaverImage)   
            || (playlistItemType  == amPlaylistItemType.am_coreservices.AE_PlaylistItemType.PlaylistItemType_ScreenSaverVideo)   
            || (playlistItemType  == amPlaylistItemType.am_coreservices.AE_PlaylistItemType.PlaylistItemType_FillRect)   
         )
      {
        bUseFake = false;
      }
      //---------------------------------
      if (bUseFake) // not implemented yet
      {
        var fakeStartPlayOrError = function fakeStartPlayOrError()
        {
          if (! error.isError()) //------- pass in Play status  
          {
            self._transitionTo_StatusPlay.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
            //self.postEvent( amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildPlay, 
                          // self, null, -1, eventQueue, error, context, callback);
          }else{                 //------- pass in Error status  
            self._transitionTo_StatusError.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
            //self.postEvent( amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildError, 
                          // self, null, -1, eventQueue, error, context, callback);
          }
        }
        fakeStartPlayOrError()
      }
      //---------------------------------
      self._transitionTo_StatusPlay.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
      var targetZoneId = this.getDiagram().getTargetRenderingZoneId();
      var prepareParams = this.getDiagram().getOwner().getPrepareParams();

      var ctx = this._aSrvLocator._iEntityCreation.createDefaultContext();
      var err = this._aSrvLocator._iEntityCreation.createDefaultError();
      var callbackPrepare2 = function callbackPrepare2()
      {
        var callbackRun2 = function callbackRun2()
        {
          /*
          if (! error.isError()) //------- pass in Play status  
          {
            self._transitionTo_StatusPlay.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
            //self.postEvent( amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildPlay, 
                          // self, null, -1, eventQueue, error, context, callback);
          }else{                 //------- pass in Error status  
            self._transitionTo_StatusError.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
            //self.postEvent( amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildError, 
                          // self, null, -1, eventQueue, error, context, callback);
          }*/
        }  
        //return aPlaylistController._iPlaylistControllerCommands.cmd_playNextMediaItem(targetZoneId , prepareParams, error, null, callbackRun2);

        var evt:amGeneralEvent.am_general.AE_Event = <amGeneralEvent.am_general.AE_Event>ctx.getObjectResult();
        if (evt != null)
        {
          var self2 = self;
          setTimeout( function() 
          { 
            /*
            self._transitionTo_StatusError.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, null);
            return self.returnWithCallback(event, eventQueue, error, aPlaylistController, aRenderingController, context, null);
            */
             var callbackLocal = function callbackLocal()
             {
               var a =1;
             }
             var ctx2 = self2._aSrvLocator._iEntityCreation.createDefaultContext();
             var err2 = self2._aSrvLocator._iEntityCreation.createDefaultError();       
             var evt2 : amGeneralEvent.am_general.AE_Event = self2.createEvent( amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildError, 
                                                                              self2.getDiagram(), null, self2.getDiagram().getOwnerIdxAsChild(), 
                                                                              eventQueue, err2, ctx2, null);
            evt2.setSender(self.getDiagram());
            return aPlaylistController._iPlaylistControllerRun.receiveEvent(evt2, null, err2, ctx2, callbackLocal);
                  //self.getDiagram().receiveEvent(evt2, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
          }, 
          5);
        }
      }
      //return aPlaylistController._iPlaylistControllerCommands.cmd_prepareNextMediaItem(targetZoneId , prepareParams, error, null, callbackPrepare2);
      return aPlaylistController._iPlaylistControllerCommands.cmd_prepareAndPlayNextMediaItem
                                                                         (targetZoneId , prepareParams, null, null, err, ctx, callbackPrepare2);
    }

    //======================
    public  receiveEvent( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                          aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                          aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                          context: amGeneralContext.am_general.A_Context, callback): void
    {
      if (this.getDiagram().getStatusCode() != amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestToPlay_Media)
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
          this._transitionTo_StatusPlay.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
          break;
        case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildEnd:
          this._transitionTo_StatusRequestToEnd.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
          break;
        case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildDisable:
          break;
        case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildError:
          this._transitionTo_StatusError.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
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