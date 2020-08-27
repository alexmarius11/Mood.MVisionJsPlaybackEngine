import amGeneral = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_Logic");

import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");
import amGeneralEventType  = require("../../../../../app/ts/abstract/am_general/ae_event/AE_EventType");
import amNextChildSelectionType = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_NextChildSelectionType");

import amGeneralRandom  = require("../../../../../app/ts/abstract/am_general/ae_random/AE_Random");

import amCoreServicesPlaylistController   = require("../../../../../app/ts/abstract/am_coreservices/a_playlistcontroller/A_PlaylistController");
import amCoreServicesRenderingController  = require("../../../../../app/ts/abstract/am_coreservices/a_renderingcontroller/A_RenderingController");

import amPlaylistItem  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem");
import amGeneralQueue = require("../../../../../app/ts/abstract/am_general/ae_queue/AE_Queue");
import amGeneralEvent = require("../../../../../app/ts/abstract/am_general/ae_event/AE_Event");
import amPlaylistItemStatusType = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItemStatusType");
import amPlaylistItemEventType  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItemEventType");


export module am_coreservices
{
  export interface AE_PlaylistItem_ContainerLogic extends amGeneral.am_coreservices.AE_PlaylistItem_Logic
  {
     
    //---------------------------
    cmd_hasMultiplay() : boolean;
    cmd_setHasMultiplay(hasMultiplay : boolean) : void;

    //------------------
    cmd_getNextChildSelectionType() : amNextChildSelectionType.am_coreservices.AE_NextChildSelectionType;
    cmd_setNextChildSelectionType(nextChildSelectionType : amNextChildSelectionType.am_coreservices.AE_NextChildSelectionType);

    //------------------
    cmd_getRandom() : amGeneralRandom.am_general.AE_Random;
    cmd_setRandom(random: amGeneralRandom.am_general.AE_Random);
    
    //---------------------------
    cmd_childHasBiggerOrEqualPriority_thanOtherStartedChildren( refChild: amPlaylistItem.am_coreservices.AE_PlaylistItem) : boolean;

    //------------------------
    cmd_getNbChildren() : number;
    cmd_getChildFromIndex( crtChildIdx: number) : amPlaylistItem.am_coreservices.AE_PlaylistItem;

    //---------------------------
    cmd_selectNextChildToPlay( crtChildIdx:  number,      
                               nextChildSelectionType : amNextChildSelectionType.am_coreservices.AE_NextChildSelectionType,
                               event : amGeneralEvent.am_general.AE_Event, 
                               eventQueue: amGeneralQueue.am_general.AE_Queue, 
                               error: amGeneralError.am_general.A_Error, 
                               aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                               aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                               context: amGeneralContext.am_general.A_Context, callback): amPlaylistItem.am_coreservices.AE_PlaylistItem;

    //-----------------------------------   
    cmd_setCrtSelectedChild(crtStartedChild: amPlaylistItem.am_coreservices.AE_PlaylistItem);
    cmd_getCrtSelectedChild() : amPlaylistItem.am_coreservices.AE_PlaylistItem;
                        
    cmd_setCrtStartedChild(crtStartedChild: amPlaylistItem.am_coreservices.AE_PlaylistItem);
    cmd_getCrtStartedChild() : amPlaylistItem.am_coreservices.AE_PlaylistItem;

    cmd_addNewStartedChild(crtStartedChild: amPlaylistItem.am_coreservices.AE_PlaylistItem);
    cmd_getStartedChildren(): Array<amPlaylistItem.am_coreservices.AE_PlaylistItem>;
    cmd_clearStartedChildren() ;

    cmd_selectNextStartedChild( crtChildIdx:  number, 
                                event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                                aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                context: amGeneralContext.am_general.A_Context, callback): amPlaylistItem.am_coreservices.AE_PlaylistItem;
 
    forAllChildren_adjustChildrenCoordinates_AlignNearbyEdges(  error: amGeneralError.am_general.A_Error, 
                                  context: amGeneralContext.am_general.A_Context, callback) : number;

    //---
    cmd_acceptChildRequestToEndParent( crtChildIdx: number, event : amGeneralEvent.am_general.AE_Event, 
                                       eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                                       aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                       aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                       context: amGeneralContext.am_general.A_Context, callback) : boolean

    isParent_aPlaylistStream( crtChildIdx: number, event : amGeneralEvent.am_general.AE_Event, 
                                           eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                                           aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                           aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                           context: amGeneralContext.am_general.A_Context, callback) : boolean;
   
    hasTheSameChildNextToPlay( crtChildIdx: number, event : amGeneralEvent.am_general.AE_Event, 
                              eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                              aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                              aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                              context: amGeneralContext.am_general.A_Context, callback) : amPlaylistItem.am_coreservices.AE_PlaylistItem;

    hasTheSameChildNextToPlay_InChannelPlaylist( crtChildIdx: number, event : amGeneralEvent.am_general.AE_Event, 
                                                                      eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                                                                      aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                                                      aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                                                      context: amGeneralContext.am_general.A_Context, callback) : amPlaylistItem.am_coreservices.AE_PlaylistItem;

    hasTheSameChildNextToPlay_InSecondaryPlaylist( crtChildIdx: number, event : amGeneralEvent.am_general.AE_Event, 
                                                         eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                                                         aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                                         aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                                         context: amGeneralContext.am_general.A_Context, callback) : amPlaylistItem.am_coreservices.AE_PlaylistItem;
                                  

  }

} 