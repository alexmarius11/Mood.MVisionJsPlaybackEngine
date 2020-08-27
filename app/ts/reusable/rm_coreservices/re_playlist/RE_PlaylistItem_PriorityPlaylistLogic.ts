import amCoreServices   = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_PriorityPlaylistLogic");

//import amGeneralError      = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amServiceLocator    = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");
import amServiceContainer  = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amServiceLog        = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");

//import amPlaylistItemStatus = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_Status");
import amPlaylistItemStatusEnd                   = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusEnd");
import amPlaylistItemStatusDisable               = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusDisable");
import amPlaylistItemStatusError                 = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusError");
import amPlaylistItemStatusSelectNextChildToPlay = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusSelectNextChildToPlay");
import amPlaylistItemStatusRequestToAbortOrEndBeforePlay_List = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay_List");
import amPlaylistItemStatusRequestToPlayList     = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToPlay_List");
import amPlaylistItemStatusPlayList              = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusPlay_List");
import amPlaylistItemStatusRequestToSuspendList  = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToSuspend_List");
import amPlaylistItemStatusSuspended             = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusSuspended");
import amPlaylistItemStatusRequestToResumeList   = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToResume_List");
import amPlaylistItemStatusRequestToAbortList    = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToAbort_List");
import amPlaylistItemStatusRequestToEndList      = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToEnd_List");

import amCoreServicesPlaylistController   = require("../../../../../app/ts/abstract/am_coreservices/a_playlistcontroller/A_PlaylistController");
import amCoreServicesRenderingController  = require("../../../../../app/ts/abstract/am_coreservices/a_renderingcontroller/A_RenderingController");

import amPlaylistItem  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem");
import amGeneralQueue = require("../../../../../app/ts/abstract/am_general/ae_queue/AE_Queue");
import amGeneralEvent = require("../../../../../app/ts/abstract/am_general/ae_event/AE_Event");
import amPlaylistItemStatusType = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItemStatusType");
import amPlaylistItemEventType  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItemEventType");
import amNextChildSelectionType = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_NextChildSelectionType");

import rmGeneralEntity  = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");
import rmPlaylistItemContainerLogic  = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_ContainerLogic");

//==========================================================
export module rm_coreservices
{
  export class RE_PlaylistItem_PriorityPlaylistLogic extends rmPlaylistItemContainerLogic.rm_coreservices.RE_PlaylistItem_ContainerLogic
                                             implements amCoreServices.am_coreservices.AE_PlaylistItem_PriorityPlaylistLogic
  {
    //-----------------------
    _status_End                        : amPlaylistItemStatusEnd.am_coreservices.AE_PlaylistItem_StatusEnd;
    _status_Disable                    : amPlaylistItemStatusDisable.am_coreservices.AE_PlaylistItem_StatusDisable; 
    _status_Error                      : amPlaylistItemStatusError.am_coreservices.AE_PlaylistItem_StatusError; 
    //_status_SelectNextChildToPlay      : amPlaylistItemStatusSelectNextChildToPlay.am_coreservices.AE_PlaylistItem_StatusSelectNextChildToPlay; 
    _status_StatusRequestToAbortOrEndBeforePlay_List : amPlaylistItemStatusRequestToAbortOrEndBeforePlay_List.am_coreservices.AE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay_List;
    _status_RequestToPlay_List         : amPlaylistItemStatusRequestToPlayList.am_coreservices.AE_PlaylistItem_StatusRequestToPlay_List;
    _status_Play_List                  : amPlaylistItemStatusPlayList.am_coreservices.AE_PlaylistItem_StatusPlay_List;
    _status_RequestToSuspend_List      : amPlaylistItemStatusRequestToSuspendList.am_coreservices.AE_PlaylistItem_StatusRequestToSuspend_List;
    _status_Suspended                  : amPlaylistItemStatusSuspended.am_coreservices.AE_PlaylistItem_StatusSuspended;
    _status_RequestToResume_List       : amPlaylistItemStatusRequestToResumeList.am_coreservices.AE_PlaylistItem_StatusRequestToResume_List;
    _status_RequestToAbort_List        : amPlaylistItemStatusRequestToAbortList.am_coreservices.AE_PlaylistItem_StatusRequestToAbort_List;
    _status_RequestToEnd_List          : amPlaylistItemStatusRequestToEndList.am_coreservices.AE_PlaylistItem_StatusRequestToEnd_List;

    //----------------
    constructor()
    {
      super();
      this._hasARenderingRepresentation = false;
      this._hasARenderingZone           = true;
      this._nextChildSelectionType = amNextChildSelectionType.am_coreservices.AE_NextChildSelectionType.NextChildSelectionType_Select_fromTheBegining_ByPriority;
      this._hasMultiplay = true;

      this._status_End                     = null;
      this._status_Disable                 = null;
      this._status_Error                   = null;
      //this._status_SelectNextChildToPlay   = null;
      this._status_StatusRequestToAbortOrEndBeforePlay_List  = null;
      this._status_RequestToPlay_List      = null;
      this._status_Play_List               = null;
      this._status_RequestToSuspend_List   = null;
      this._status_Suspended               = null;
      this._status_RequestToResume_List    = null;
      this._status_RequestToAbort_List     = null;
      this._status_RequestToEnd_List       = null;
    }

    //==============
    reset()
    {
      super.reset();

      if (this._status_End != null)
        this._status_End.reset2();

      if (this._status_Disable != null)
        this._status_Disable.reset2();

      if (this._status_Error != null)            
        this._status_Error.reset2();

      if (this._status_StatusRequestToAbortOrEndBeforePlay_List != null)            
        this._status_StatusRequestToAbortOrEndBeforePlay_List.reset2();

      if (this._status_RequestToPlay_List != null)
        this._status_RequestToPlay_List.reset2();

      if (this._status_Play_List != null)  
        this._status_Play_List.reset2();

      if (this._status_RequestToSuspend_List != null)
        this._status_RequestToSuspend_List.reset2();

      if (this._status_Suspended != null)
        this._status_Suspended.reset2();

      if (this._status_RequestToResume_List != null)
        this._status_RequestToResume_List.reset2();

      if (this._status_RequestToAbort_List != null)
        this._status_RequestToAbort_List.reset2();
        
      if (this._status_RequestToEnd_List != null)
        this._status_RequestToEnd_List.reset2();
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
      //this._status_SelectNextChildToPlay       = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemStatusSelectNextChildToPlay(error); ;
      this._status_StatusRequestToAbortOrEndBeforePlay_List = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemStatusRequestToAbortOrEndBeforePlay_List(error); ;
      this._status_RequestToPlay_List          = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemStatusRequestToPlay_List(error);
      this._status_Play_List                   = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemStatusPlay_List(error);
      this._status_Suspended                   = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemStatusSuspended(error);
      this._status_RequestToSuspend_List       = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemStatusRequestToSuspend_List(error);
      this._status_RequestToResume_List        = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemStatusRequestToResume_List(error);
      this._status_RequestToAbort_List         = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemStatusRequestToAbort_List(error);
      this._status_RequestToEnd_List           = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemStatusRequestToEnd_List(error);

      this._status_End.injectDependencies( aSrvContainer, aSrvLocator, aSrvLog, error);
      this._status_Disable.injectDependencies( aSrvContainer, aSrvLocator, aSrvLog, error);
      this._status_Error.injectDependencies( aSrvContainer, aSrvLocator, aSrvLog, error);
      //this._status_SelectNextChildToPlay.injectDependencies( aSrvContainer, aSrvLocator, aSrvLog, error);
      this._status_StatusRequestToAbortOrEndBeforePlay_List.injectDependencies( aSrvContainer, aSrvLocator, aSrvLog, error);
      this._status_RequestToPlay_List.injectDependencies( aSrvContainer, aSrvLocator, aSrvLog, error);
      this._status_Play_List.injectDependencies( aSrvContainer, aSrvLocator, aSrvLog, error);
      this._status_Suspended.injectDependencies( aSrvContainer, aSrvLocator, aSrvLog, error);
      this._status_RequestToSuspend_List.injectDependencies( aSrvContainer, aSrvLocator, aSrvLog, error);
      this._status_RequestToResume_List.injectDependencies( aSrvContainer, aSrvLocator, aSrvLog, error);
      this._status_RequestToAbort_List.injectDependencies( aSrvContainer, aSrvLocator, aSrvLog, error);
      this._status_RequestToEnd_List.injectDependencies( aSrvContainer, aSrvLocator, aSrvLog, error);

      this._status_End.setDiagram(this);
      this._status_Disable.setDiagram(this);
      this._status_Error.setDiagram(this);
      //this._status_SelectNextChildToPlay.setDiagram(this);
      this._status_StatusRequestToAbortOrEndBeforePlay_List.setDiagram(this);
      this._status_RequestToPlay_List.setDiagram(this);
      this._status_Play_List.setDiagram(this);
      this._status_Suspended.setDiagram(this);
      this._status_RequestToSuspend_List.setDiagram(this);
      this._status_RequestToResume_List.setDiagram(this);
      this._status_RequestToAbort_List.setDiagram(this);
      this._status_RequestToEnd_List.setDiagram(this);

      //--  set transitions
      this._status_End._transitionTo_StatusDisable.setStatus(this._status_Disable);
      this._status_End._transitionTo_StatusRequestToPlay_or_Similar.setStatus(this._status_RequestToPlay_List);
      //this._status_End._transitionTo_StatusRequestToPlay_or_Similar.setStatus(this._status_SelectNextChildToPlay);
   
      this._status_Disable._transitionTo_StatusEnd.setStatus(this._status_End);

      this._status_Error._transitionTo_StatusEnd.setStatus(this._status_End);

      //--- unused
      //this._status_SelectNextChildToPlay._transitionTo_StatusRequestToPlay_or_Similar.setStatus(this._status_StatusRequestToAbortOrEndBeforePlay_List);
      //this._status_SelectNextChildToPlay._transitionTo_StatusEnd.setStatus(this._status_End);     
      //this._status_SelectNextChildToPlay._transitionTo_StatusError.setStatus(this._status_Error); 
      //this._status_SelectNextChildToPlay._transitionTo_StatusRequestToAbort.setStatus(this._status_RequestToAbort_List);
      //this._status_SelectNextChildToPlay._transitionTo_StatusRequestToEnd.setStatus(this._status_RequestToEnd_List);

      this._status_StatusRequestToAbortOrEndBeforePlay_List._transitionTo_StatusRequestToPlay_or_Similar.setStatus(this._status_RequestToPlay_List);
      this._status_StatusRequestToAbortOrEndBeforePlay_List._transitionTo_StatusEnd.setStatus(this._status_End);     
      this._status_StatusRequestToAbortOrEndBeforePlay_List._transitionTo_StatusError.setStatus(this._status_Error); 
      this._status_StatusRequestToAbortOrEndBeforePlay_List._transitionTo_StatusRequestToAbort.setStatus(this._status_RequestToAbort_List);
      this._status_StatusRequestToAbortOrEndBeforePlay_List._transitionTo_StatusRequestToEnd.setStatus(this._status_RequestToEnd_List);

      this._status_RequestToPlay_List._transitionTo_StatusEnd.setStatus(this._status_End);     
      this._status_RequestToPlay_List._transitionTo_StatusError.setStatus(this._status_Error); 
      this._status_RequestToPlay_List._transitionTo_StatusPlay.setStatus(this._status_Play_List);
      this._status_RequestToPlay_List._transitionTo_StatusRequestToAbort.setStatus(this._status_RequestToAbort_List);
      this._status_RequestToPlay_List._transitionTo_StatusRequestToEnd.setStatus(this._status_RequestToEnd_List);
      this._status_RequestToPlay_List._transitionTo_StatusRequestToAbortOrEndBeforePlay.setStatus(this._status_StatusRequestToAbortOrEndBeforePlay_List);

      this._status_Play_List._transitionTo_StatusEnd_or_Similar.setStatus(this._status_End); 
      this._status_Play_List._transitionTo_StatusError.setStatus(this._status_Error);        
      this._status_Play_List._transitionTo_StatusRequestToPlay.setStatus(this._status_RequestToPlay_List);
      this._status_Play_List._transitionTo_StatusRequestToSuspend.setStatus(this._status_RequestToSuspend_List);
      this._status_Play_List._transitionTo_StatusRequestToAbort.setStatus(this._status_RequestToAbort_List);
      this._status_Play_List._transitionTo_StatusRequestToEnd.setStatus(this._status_RequestToEnd_List);
      this._status_Play_List._transitionTo_StatusRequestToAbortOrEndBeforePlay.setStatus(this._status_StatusRequestToAbortOrEndBeforePlay_List);

      this._status_RequestToSuspend_List._transitionTo_StatusSuspended.setStatus(this._status_Play_List);
      this._status_RequestToSuspend_List._transitionTo_StatusEnd_or_Similar.setStatus(this._status_End);    
      this._status_RequestToSuspend_List._transitionTo_StatusError.setStatus(this._status_Error); 
      this._status_RequestToSuspend_List._transitionTo_StatusRequestToAbort.setStatus(this._status_RequestToAbort_List);
      this._status_RequestToSuspend_List._transitionTo_StatusRequestToEnd.setStatus(this._status_RequestToEnd_List);
  
      this._status_Suspended._transitionTo_StatusRequestToResume.setStatus(this._status_RequestToResume_List); 
      this._status_Suspended._transitionTo_StatusEnd_or_Similar.setStatus(this._status_End); 
      this._status_Suspended._transitionTo_StatusError.setStatus(this._status_Error);        
      this._status_Suspended._transitionTo_StatusRequestToAbort.setStatus(this._status_RequestToAbort_List);
      this._status_Suspended._transitionTo_StatusRequestToEnd.setStatus(this._status_RequestToEnd_List);

      this._status_RequestToResume_List._transitionTo_StatusPlay.setStatus(this._status_Play_List);
      this._status_RequestToResume_List._transitionTo_StatusEnd_or_Similar.setStatus(this._status_End);    
      this._status_RequestToResume_List._transitionTo_StatusError.setStatus(this._status_Error); 
      this._status_RequestToResume_List._transitionTo_StatusRequestToAbort.setStatus(this._status_RequestToAbort_List);
      this._status_RequestToResume_List._transitionTo_StatusRequestToEnd.setStatus(this._status_RequestToEnd_List);

      this._status_RequestToEnd_List._transitionTo_StatusEnd.setStatus(this._status_End);    
      this._status_RequestToEnd_List._transitionTo_StatusRequestToAbort.setStatus(this._status_RequestToAbort_List);

      this._status_RequestToAbort_List._transitionTo_StatusEnd.setStatus(this._status_End);    

      return 0;
    }

    //======================
    public isDisable( refDate : Date, event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                      aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                      aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                      context: amGeneralContext.am_general.A_Context, callback): boolean
    {
      return false; //use channel difussion
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

        //case amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_SelectNextChildToPlay:
          //return this._status_SelectNextChildToPlay.receiveEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);

        case amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestEndOrAbortBeforePlay_List:
          return this._status_StatusRequestToAbortOrEndBeforePlay_List.receiveEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);

        case amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestToPlay_List:
          return this._status_RequestToPlay_List.receiveEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);

        case amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_Play_List:
          return this._status_Play_List.receiveEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);

        case amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestToSuspend_List:
          return this._status_RequestToSuspend_List.receiveEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);

        case amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_Suspended:
          return this._status_Suspended.receiveEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);

        case amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestToResume_List:
          return this._status_RequestToResume_List.receiveEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);

        case amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestToAbort_List:
          return this._status_RequestToAbort_List.receiveEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);

        case amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestToEnd_List:
          return this._status_RequestToEnd_List.receiveEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);

        default:
          return this.ignoreEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
      }
    }

    //======================================
    //   manage Receive Event
    //======================================

    /*
    //======================
    public receiveEvent( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                         aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                         aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                         context: amGeneralContext.am_general.A_Context, callback): void
    {
      switch(this._status) 
      {
        case amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_End:
          return this.statusEnd_receiveEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
  
        //case amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_Play:
          //return this.statusPlay_receiveEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
       
        ////-- the main playlist cannot reach this status  
        //case amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_Error:
          //return this.statusError_receiveEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);

         ////-- the main playlist cannot reach this status because is always enable
         //case amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_Disable:
          //return this.statusDisable_receiveEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);

        //case amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestToPlayAll:
          //return this.statusRequestToPlayAll_receiveEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);

        //case amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestToAbortAll:
          //return this.statusRequestToAbort_receiveEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);

        //case amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestToEndAll:
          //return this.statusRequestToEndAll_receiveEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
        
        default:
          return this.ignoreEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
      }
    }

    //======================
    //  statusEnd
    //======================

    //======================
    public passedTo_statusEnd( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                               aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                               aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                               context: amGeneralContext.am_general.A_Context, callback): void
    {
      this._status = amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_End;
      //---- specific actions
      this.reset();
      //this.clearDurationTimersIfAny();
      //---- notifications
      this.inStatusEnd_notifyChildEnd( event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
    }

    //======================
    public inStatusEnd_notifyChildEnd( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                                       aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                       aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                       context: amGeneralContext.am_general.A_Context, callback): void
    {
      //---- notifications
      if (this._owner.getParent() != null)
      {
        this.postEvent( amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildEnd, 
                      this._owner.getParent().getLogic(), null, -1, eventQueue, error, context, callback);
      }
    }

    //======================
    //public inStatusEnd_reqNextChildToPlay_andPassedToAbortOrEndBeforePlay( 
    //                           event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
    //                           aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
    //                           aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
    //                           context: amGeneralContext.am_general.A_Context, callback): void
    //{
      //var nextChild = this.selectNextChild(this._nextChildSelectionType, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
      //if (nextChild != null)
      //{
        //this.postEvent( amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToPlay, 
        //                nextChild.getLogic(), null, -1, eventQueue, error, context, callback);
      //}else{
        //return this.passedTo_statusPlay(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
      //}
    //}

    //======================
    public statusEnd_receiveEvent( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                                   aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                   aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                   context: amGeneralContext.am_general.A_Context, callback): void
    {
      if (this._status != amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_End)
        return this.ignoreEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
    
      switch(event.getEventId()) 
      { 
        //---
        case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToPlay:
        {
          if (! this.isDisable(null, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback))
          {
            return this.passedTo_statusSelectNextChildToPlay(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
          }else{
            return this.passedTo_statusDisable(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
          }
          break;
        }
        //--
        case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToAbort:
          break;
        case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToEnd:    
          break;
        case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildPlay:
          break;
        //case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildAbort:
          //break;
        case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildEnd:
          break;
        case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyGraphicDescendantEnd:
          break;
        case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildDisable:
          break;
        case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildError:
          break;
        default:
      }  
    }

    //======================
    //  status
    //======================

    //======================
    public passedTo_statusSelectNextChildToPlay( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                               aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                               aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                               context: amGeneralContext.am_general.A_Context, callback): void
    {
      this._status = amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_SelectNextChildToPlay;
      //---- specific actions
      this.inStatusSelectNextChildToPlay_selectNextChildToPlay_OrEnd(event, eventQueue, error, aPlaylistController,aRenderingController, context, callback);
    }

    //======================
    public inStatusSelectNextChildToPlay_selectNextChildToPlay_OrEnd( 
                               event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                               aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                               aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                               context: amGeneralContext.am_general.A_Context, callback): void
    {
      var nextChildToPlay = null;
      //-------------------- if is specified excatly who will play (like: a specified event in events)
      //if (event.getTargetAddress() != null)
      //{
        //nextChildToPlay = this.selectNextChild( 
        //                      amNextChildSelectionType.am_coreservices.AE_NextChildSelectionType.NextChildSelectionType_Select_usingChildAddressFromEvent,
        //                      event, eventQueue, error, aPlaylistController,aRenderingController, context, callback);
      //}else{
        //nextChildToPlay = this.selectNextChild( 
        //                      amNextChildSelectionType.am_coreservices.AE_NextChildSelectionType.NextChildSelectionType_Select_fromTheBegining_ByPriority,
        //                      event, eventQueue, error, aPlaylistController,aRenderingController, context, callback);
      //}

      //-------------
      if (nextChildToPlay == null)
        return this.passedTo_statusEnd(event, eventQueue, error, aPlaylistController,aRenderingController, context, callback);

      //return this.passedTo_statusRequestToEndOrAbortBeforePlay(event, eventQueue, error, aPlaylistController,aRenderingController, context, callback);
    }

    //======================
    public inStatusSelectNextChildToPlay_scheduledNextChildrenToPlay( 
                     event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                     aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                     aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                     context: amGeneralContext.am_general.A_Context, callback): void
    {
    }


    //======================
    public statusSelectNextChildToPlay_receiveEvent( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                                   aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                   aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                   context: amGeneralContext.am_general.A_Context, callback): void
    {
      if (this._status != amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_SelectNextChildToPlay)
        return this.ignoreEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
    
      switch(event.getEventId()) 
      { 
        //---
        case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToPlay:
          break;
        //--
        case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToAbort:
          break;
        case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToEnd:    
          break;
        case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildPlay:
          break;
        //case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildAbort:
          //break;
        case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildEnd:
          break;
        case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyGraphicDescendantEnd:
          break;
        case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildDisable:
          break;
        case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildError:
          break;
        default:
      }  
    }


    //======================
    //  status
    //======================

    //======================
    public passedTo_statusRequestAllToEndOrAbortBeforePlay( 
                               event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                               aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                               aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                               context: amGeneralContext.am_general.A_Context, callback): void
    {
      this._status = amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestEndOrAbortBeforePlay;
      //---- specific actions
      this.inStatusSelectNextChildToPlay_selectNextChildToPlay_OrEnd(event, eventQueue, error, aPlaylistController,aRenderingController, context, callback);
    }
    */

  }
} 