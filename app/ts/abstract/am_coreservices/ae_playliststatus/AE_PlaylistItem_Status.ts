import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");

import amPlaylistItemType  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItemType");
import amRenderParametersAllParameters     = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_AllParameters");
import amPlaylistItemLogic  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_Logic");

import amCoreServicesPlaylistController   = require("../../../../../app/ts/abstract/am_coreservices/a_playlistcontroller/A_PlaylistController");
import amCoreServicesRenderingController  = require("../../../../../app/ts/abstract/am_coreservices/a_renderingcontroller/A_RenderingController");

import amPlaylistItem  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem");
import amGeneralQueue = require("../../../../../app/ts/abstract/am_general/ae_queue/AE_Queue");
import amGeneralEvent = require("../../../../../app/ts/abstract/am_general/ae_event/AE_Event");
import amPlaylistItemStatusType = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItemStatusType");
import amPlaylistItemEventType  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItemEventType");


export module am_coreservices
{
  export interface AE_PlaylistItem_Status extends amGeneral.am_general.A_Entity
  {
    getStatusName(): string;

    setDiagram(playlistItemDiagram : amPlaylistItemLogic.am_coreservices.AE_PlaylistItem_Logic);
    getDiagram() : amPlaylistItemLogic.am_coreservices.AE_PlaylistItem_Logic;

    receiveEvent( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                  aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                  aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                  context: amGeneralContext.am_general.A_Context, callback): void;

    passToMe( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
              aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
              aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
              context: amGeneralContext.am_general.A_Context, callback): void;

     //--------- tracing    
     traceAll(selectId: string);     
     traceString();
     traceInListBox(selectId: string);

     reset2();
 
  }

} 