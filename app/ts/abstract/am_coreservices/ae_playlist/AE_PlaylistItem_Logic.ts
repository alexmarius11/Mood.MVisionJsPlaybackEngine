import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");
import amGeneralEventType  = require("../../../../../app/ts/abstract/am_general/ae_event/AE_EventType");

import amCoreServicesPlaylistController   = require("../../../../../app/ts/abstract/am_coreservices/a_playlistcontroller/A_PlaylistController");
import amCoreServicesRenderingController  = require("../../../../../app/ts/abstract/am_coreservices/a_renderingcontroller/A_RenderingController");

import amPlaylistItem  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem");
import amGeneralQueue = require("../../../../../app/ts/abstract/am_general/ae_queue/AE_Queue");
import amGeneralEvent = require("../../../../../app/ts/abstract/am_general/ae_event/AE_Event");
import amPlaylistItemStatusType = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItemStatusType");

export module am_coreservices
{
  export interface AE_PlaylistItem_Logic extends amGeneral.am_general.A_Entity
  {

    setOwner(owner : amPlaylistItem.am_coreservices.AE_PlaylistItem);
    getOwner() : amPlaylistItem.am_coreservices.AE_PlaylistItem;

    getStatusCode() : amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType;
    setStatusCode(status  : amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType);
    
    getPriority() : number;
    setPriority(iPriority  : number);

    //------------------------------------
    getTargetRenderingZoneId() : number;
    setTargetRenderingZoneId(targetRenderingZoneId : number);

    hasARenderingRepresentation() : boolean;
    setHasARenderingRepresentation(hasARenderingRepresentation: boolean);

    hasARenderingZone() : boolean;
    setHasARenderingZone(hasARenderingZone: boolean);

    mustCreateARenderingZone() : boolean;
    setMustCreateARenderingZone(mustCreateARenderingZone: boolean);

    getFirstParentWithARenderingZone() : amPlaylistItem.am_coreservices.AE_PlaylistItem;

    setAncestorThatMustCreateARenderingZone(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) ;

    //----------------- an address of an item in the playlist tree like: //[0,2,2,1,0,2,1,1,1] //first one is the root that is always 0
    //-------------- [0,2,2,1,0,2,1,1,1]
    //                          | -> owner level index of a supplied address of an item can be (sometimes) 'earlier' that the full address (len-1)
    createAndGenerateOwnerAddress() : Array<number>
    generateOwnerAddress(ownerAddress : Array<number>)
    getOwnerIdxAsChild() : number;
    setOwnerIdxAsChild(ownerIdxAsChild : number) : void;
    getOwnerIdxAsLevel() : number
    setOwnerIdxAsLevel(ownerIdxAsLevel : number) : void;

    setDuration(iDuration : number);
    getDuration() : number;
    setDurationAsString(duration : string);
    getDurationAsString() : string;

    setNaturalDuration(iDuration : number, epsilonTimeBeforeNaturalEnd: number);
    getNaturalDuration() : number;
    setNaturalDurationAsString(duration : string, epsilonTimeBeforeNaturalEnd: number);
    getNaturalDurationAsString() : string;

    setDiffusionInfos(diff_duration : string, diff_startDate : string, diff_endDate : string, diff_startTime : string, diff_endTime:string, diff_weekdays:number);
    
    //-------- if yes - means that the playlist item (the owner) has a graphic representation (that plays on the screen)
    hasARenderingRepresentation() : boolean;
    setHasARenderingRepresentation(hasARenderingRepresentation: boolean); 
    
    //------- if yes - means that this playlist item (the owner) defines a X,Y,width,height area
    hasARenderingZone() : boolean;  
    setHasARenderingZone(hasARenderingZone: boolean);
    
    //------- if yes - means that the playlist item (the owner) 
    //                    that defines a X,Y,width,height area 
    //                    needs to create a rendering zone (where it or its children will play)
    //                    because it has "proximal" children with a graphical represenation      
    mustCreateARenderingZone() : boolean;  
    setMustCreateARenderingZone(mustCreateARenderingZone: boolean);

    receiveEvent( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                  aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                  aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                  context: amGeneralContext.am_general.A_Context, callback): void;

    postEvent( eventId: number, receiver: any, targetAddress: [], iCrtTargetIdx : number,
               eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
               context: amGeneralContext.am_general.A_Context, callback): void;

    prepareEvent( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, 
                  error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback): void;


    hasActiveRenderingDescendantsToPlayAndItself( 
                                         refDate: Date, event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                                         aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                         aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                         context: amGeneralContext.am_general.A_Context, callback) ;

               
    isDisable( refDate: Date, 
        event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
        aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
        aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
        context: amGeneralContext.am_general.A_Context, callback): boolean;

    reset();


    startDurationTimersIfAny( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
          aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
          aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
          context: amGeneralContext.am_general.A_Context, callback) : number;

    clearDurationTimersIfAny() : void;

    
    //-------------------------------------
    forAllChildren_adjustChildrenCoordinates_AlignNearbyEdges(  error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : number;
    adjustChildrenCoordinates_AlignNearbyEdges(  error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : number;

    forAllChildren_setSizes_fromAdjustedContainer() : number;
    setSizes_fromAdjustedContainer() : number;

    //--------------------------------
    hasAtLeastOneAncestorDisable( refDate: Date, event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                                 aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                 aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                 context: amGeneralContext.am_general.A_Context, callback): boolean ;


  }             

} 