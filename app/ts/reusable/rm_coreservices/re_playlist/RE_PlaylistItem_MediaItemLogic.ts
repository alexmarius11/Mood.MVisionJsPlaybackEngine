import amCoreServices   = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_MediaItemLogic");
import amPlaylistItemStatus = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_Status");

import amGeneralEntity     = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneralConfig  = require("../../../../../app/ts/abstract/am_general/ae_config/AE_Config");

import amGeneralError      = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amServiceLocator    = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");
import amServiceContainer  = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amServiceLog        = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

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

import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");

import amCoreServicesPlaylistController   = require("../../../../../app/ts/abstract/am_coreservices/a_playlistcontroller/A_PlaylistController");
import amCoreServicesRenderingController  = require("../../../../../app/ts/abstract/am_coreservices/a_renderingcontroller/A_RenderingController");

import amPlaylistItem  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem");
import amGeneralQueue = require("../../../../../app/ts/abstract/am_general/ae_queue/AE_Queue");
import amGeneralEvent = require("../../../../../app/ts/abstract/am_general/ae_event/AE_Event");
import amPlaylistItemStatusType = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItemStatusType");
import amPlaylistItemEventType  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItemEventType");

import rmGeneralEntity  = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");
import rmPlaylistItemLogic  = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_Logic");


export module rm_coreservices
{
  export class RE_PlaylistItem_MediaItemLogic extends rmPlaylistItemLogic.rm_coreservices.RE_PlaylistItem_Logic
                                              implements amCoreServices.am_coreservices.AE_PlaylistItem_MediaItemLogic
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

    //----------------
    constructor()
    {
      super();
      this._hasARenderingRepresentation = true;
      this._hasARenderingZone           = false;

      this._status_End                      = null;
      this._status_Disable                  = null;
      this._status_Error                    = null;
      this._status_RequestToPlay_Media      = null;
      this._status_Play_Media               = null;
      this._status_RequestToSuspend_Media   = null;
      this._status_Suspended                = null;
      this._status_RequestToResume_Media    = null;
      this._status_RequestToAbort_Media     = null;
      this._status_RequestToEnd_Media       = null;
    }

    //------------------------------
    public injectDependencies( aSrvContainer: amServiceContainer.am_configurationservices.A_ServiceContainer, 
                               aSrvLocator:   amServiceLocator.am_configurationservices.A_ServiceLocator, 
                               aSrvLog:       amServiceLog.am_transversalservices.A_LogService, 
                               error: amGeneralError.am_general.A_Error) : number
    {
      super.injectDependencies( aSrvContainer, aSrvLocator, aSrvLog, error);
          
      //--  create status
      this._status_End                         = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemStatusEnd(error);
      this._status_Disable                     = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemStatusDisable(error); 
      this._status_Error                       = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemStatusError(error); 
      this._status_RequestToPlay_Media         = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemStatusRequestToPlay_Media(error);
      this._status_Play_Media                  = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemStatusPlay_Media(error);
      this._status_Suspended                   = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemStatusSuspended(error);
      this._status_RequestToSuspend_Media      = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemStatusRequestToSuspend_Media(error);
      this._status_Suspended                   = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemStatusSuspended(error);
      this._status_RequestToResume_Media       = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemStatusRequestToResume_Media(error);
      this._status_RequestToAbort_Media        = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemStatusRequestToAbort_Media(error);
      this._status_RequestToEnd_Media          = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemStatusRequestToEnd_Media(error);

      this._status_End.injectDependencies( aSrvContainer, aSrvLocator, aSrvLog, error);
      this._status_Disable.injectDependencies( aSrvContainer, aSrvLocator, aSrvLog, error);
      this._status_Error.injectDependencies( aSrvContainer, aSrvLocator, aSrvLog, error);
      this._status_RequestToPlay_Media.injectDependencies( aSrvContainer, aSrvLocator, aSrvLog, error);
      this._status_Play_Media.injectDependencies( aSrvContainer, aSrvLocator, aSrvLog, error);
      this._status_RequestToSuspend_Media.injectDependencies( aSrvContainer, aSrvLocator, aSrvLog, error);
      this._status_Suspended.injectDependencies( aSrvContainer, aSrvLocator, aSrvLog, error);
      this._status_RequestToResume_Media.injectDependencies( aSrvContainer, aSrvLocator, aSrvLog, error);
      this._status_RequestToAbort_Media.injectDependencies( aSrvContainer, aSrvLocator, aSrvLog, error);
      this._status_RequestToEnd_Media.injectDependencies( aSrvContainer, aSrvLocator, aSrvLog, error);

      this._status_End.setDiagram(this);
      this._status_Disable.setDiagram(this);
      this._status_Error.setDiagram(this);
      this._status_RequestToPlay_Media.setDiagram(this);
      this._status_Play_Media.setDiagram(this);
      this._status_RequestToSuspend_Media.setDiagram(this);
      this._status_Suspended.setDiagram(this);
      this._status_RequestToResume_Media.setDiagram(this);
      this._status_RequestToAbort_Media.setDiagram(this);
      this._status_RequestToEnd_Media.setDiagram(this);

      //--  set transitions
      this._status_End._transitionTo_StatusDisable.setStatus(this._status_Disable);
      this._status_End._transitionTo_StatusRequestToPlay_or_Similar.setStatus(this._status_RequestToPlay_Media);
   
      this._status_Disable._transitionTo_StatusEnd.setStatus(this._status_End);

      this._status_Error._transitionTo_StatusEnd.setStatus(this._status_End);

      this._status_RequestToPlay_Media._transitionTo_StatusEnd.setStatus(this._status_End);     //in case of natural end
      this._status_RequestToPlay_Media._transitionTo_StatusError.setStatus(this._status_Error); //in case of natural error
      this._status_RequestToPlay_Media._transitionTo_StatusPlay.setStatus(this._status_Play_Media);
      this._status_RequestToPlay_Media._transitionTo_StatusRequestToAbort.setStatus(this._status_RequestToAbort_Media);
      this._status_RequestToPlay_Media._transitionTo_StatusRequestToEnd.setStatus(this._status_RequestToEnd_Media);

      this._status_Play_Media._transitionTo_StatusEnd_or_Similar.setStatus(this._status_End); //in case of natural end
      this._status_Play_Media._transitionTo_StatusError.setStatus(this._status_Error);        //in case of natural error
      this._status_Play_Media._transitionTo_StatusRequestToSuspend.setStatus(this._status_RequestToSuspend_Media);
      this._status_Play_Media._transitionTo_StatusRequestToAbort.setStatus(this._status_RequestToAbort_Media);
      this._status_Play_Media._transitionTo_StatusRequestToEnd.setStatus(this._status_RequestToEnd_Media);

      this._status_RequestToSuspend_Media._transitionTo_StatusSuspended.setStatus(this._status_Play_Media);
      this._status_RequestToSuspend_Media._transitionTo_StatusEnd_or_Similar.setStatus(this._status_End);    
      this._status_RequestToSuspend_Media._transitionTo_StatusError.setStatus(this._status_Error); 
      this._status_RequestToSuspend_Media._transitionTo_StatusRequestToAbort.setStatus(this._status_RequestToAbort_Media);
      this._status_RequestToSuspend_Media._transitionTo_StatusRequestToEnd.setStatus(this._status_RequestToEnd_Media);
  
      this._status_Suspended._transitionTo_StatusRequestToResume.setStatus(this._status_RequestToResume_Media); 
      this._status_Suspended._transitionTo_StatusEnd_or_Similar.setStatus(this._status_End); //in case of natural end
      this._status_Suspended._transitionTo_StatusError.setStatus(this._status_Error);        //in case of natural error
      this._status_Suspended._transitionTo_StatusRequestToAbort.setStatus(this._status_RequestToAbort_Media);
      this._status_Suspended._transitionTo_StatusRequestToEnd.setStatus(this._status_RequestToEnd_Media);

      this._status_RequestToResume_Media._transitionTo_StatusPlay.setStatus(this._status_Play_Media);
      this._status_RequestToResume_Media._transitionTo_StatusEnd_or_Similar.setStatus(this._status_End);    
      this._status_RequestToResume_Media._transitionTo_StatusError.setStatus(this._status_Error); 
      this._status_RequestToResume_Media._transitionTo_StatusRequestToAbort.setStatus(this._status_RequestToAbort_Media);
      this._status_RequestToResume_Media._transitionTo_StatusRequestToEnd.setStatus(this._status_RequestToEnd_Media);

      this._status_RequestToEnd_Media._transitionTo_StatusEnd.setStatus(this._status_End);    
      this._status_RequestToEnd_Media._transitionTo_StatusRequestToAbort.setStatus(this._status_RequestToAbort_Media);

      this._status_RequestToAbort_Media._transitionTo_StatusEnd.setStatus(this._status_End);    

      return 0;
    }


    //======================
    public receiveEvent( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                         aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                         aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                         context: amGeneralContext.am_general.A_Context, callback): void
    {
      switch(this._status) 
      {
        case amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_End:
          return this._status_End.receiveEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);

        case amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_Disable:
          return this._status_Disable.receiveEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);

        case amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_Error:
          return this._status_Error.receiveEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);

        case amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestToPlay_Media:
          return this._status_RequestToPlay_Media.receiveEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);

        case amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_Play_Media:
          return this._status_Play_Media.receiveEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);

        case amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestToSuspend_Media:
          return this._status_RequestToSuspend_Media.receiveEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);

        case amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_Suspended:
          return this._status_Suspended.receiveEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);

        case amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestToResume_Media:
          return this._status_RequestToResume_Media.receiveEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);

        case amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestToAbort_Media:
          return this._status_RequestToAbort_Media.receiveEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);

        case amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestToEnd_Media:
          return this._status_RequestToEnd_Media.receiveEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);

        default:
          return this.ignoreEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
      }
    }

  }
} 