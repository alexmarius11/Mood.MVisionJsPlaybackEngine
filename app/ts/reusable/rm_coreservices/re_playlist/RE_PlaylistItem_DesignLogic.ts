import amCoreServices   = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_DesignLogic");

import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");
import amPlaylistItem  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem");
import amNextChildSelectionType = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_NextChildSelectionType");

import rmGeneralEntity  = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

import rmPlaylistItemPlaylistLogic  = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_PlaylistLogic");
import amCoreServicesPlaylistController   = require("../../../../../app/ts/abstract/am_coreservices/a_playlistcontroller/A_PlaylistController");
import amCoreServicesRenderingController  = require("../../../../../app/ts/abstract/am_coreservices/a_renderingcontroller/A_RenderingController");

import amGeneralQueue = require("../../../../../app/ts/abstract/am_general/ae_queue/AE_Queue");
import amGeneralEvent = require("../../../../../app/ts/abstract/am_general/ae_event/AE_Event");

import amPlaylistContainer       = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_Container");
import amPlaylistContainerLogic  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_ContainerLogic");

import amPlaylistItemPlaylist   = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_Playlist");
import amPlaylistItemPlaylistLogic  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_PlaylistLogic");

export module rm_coreservices
{
  export class RE_PlaylistItem_DesignLogic extends rmPlaylistItemPlaylistLogic.rm_coreservices.RE_PlaylistItem_PlaylistLogic
                                                   implements amCoreServices.am_coreservices.AE_PlaylistItem_DesignLogic
  {

      _sameChildToPlay : amPlaylistItem.am_coreservices.AE_PlaylistItem;

     //----------------
     constructor()
     {
       super();

       this._nextChildSelectionType = amNextChildSelectionType.am_coreservices.AE_NextChildSelectionType.NextChildSelectionType_OneAfterTheOther_NoLoop;
       this._hasMultiplay                = true;

       this._hasARenderingRepresentation = false;
       this._hasARenderingZone           = false;

       this._sameChildToPlay             = null;
     }

     //----------------------------
     reset()
     {
       super.reset();
       this._sameChildToPlay = null;
     }


     //----------------------------------------------------------
     public setSameChildToPlay(sameChildToPlay : amPlaylistItem.am_coreservices.AE_PlaylistItem) : boolean
     {
       this._sameChildToPlay = sameChildToPlay;
       if (this._sameChildToPlay == null)
         return false; 
       return true;
     }

     //----------------------------------------------------------
     public getSameChildToPlay() : amPlaylistItem.am_coreservices.AE_PlaylistItem
     {
       return this._sameChildToPlay ;
     }

     //----------------------------------------------------------
     public setSameChildToPlayAsLastStartedOne(sameChildToPlay : amPlaylistItem.am_coreservices.AE_PlaylistItem) : boolean
     {
       if (sameChildToPlay == null)
         return false; 
       var aParent : amPlaylistItemPlaylist.am_coreservices.AE_PlaylistItem_Playlist;
       aParent = <amPlaylistItemPlaylist.am_coreservices.AE_PlaylistItem_Playlist>this.getOwner().getParent();
       if (aParent == null)
         return null;
       var aParentlogic : amPlaylistItemPlaylistLogic.am_coreservices.AE_PlaylistItem_PlaylistLogic = 
                                          <amPlaylistItemPlaylistLogic.am_coreservices.AE_PlaylistItem_PlaylistLogic>aParent.getLogic();
       aParentlogic._status_RequestToPlay_List.setLastStartedChild(sameChildToPlay);
       return true;
     }

     //------------------------
     public cmd_acceptChildRequestToEndParent( crtChildIdx: number, event : amGeneralEvent.am_general.AE_Event, 
                                               eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                                               aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                               aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                               context: amGeneralContext.am_general.A_Context, callback) : boolean
     {
        var crtSameChildToPlay = this.getSameChildToPlay();
        var realCrtChildIdx = crtChildIdx;
        if (crtSameChildToPlay != null)
          realCrtChildIdx = crtSameChildToPlay.getLogic().getOwnerIdxAsChild();

        var newSameChildToPlay : amPlaylistItem.am_coreservices.AE_PlaylistItem 
                        = this.hasTheSameChildNextToPlay( realCrtChildIdx, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
        if (newSameChildToPlay != null)
        {
          this.setSameChildToPlay(newSameChildToPlay);

          this.setSameChildToPlayAsLastStartedOne(newSameChildToPlay);

          //this.cmd_setNextChildSelectionType(
                         //    amNextChildSelectionType.am_coreservices.AE_NextChildSelectionType.NextChildSelectionType_Select_fromTheBegining_ByPriority);

          return false;
        }
        //this.cmd_setNextChildSelectionType(
                     // amNextChildSelectionType.am_coreservices.AE_NextChildSelectionType.NextChildSelectionType_OneAfterTheOther_NoLoop);
        return true;
    }
  }
} 