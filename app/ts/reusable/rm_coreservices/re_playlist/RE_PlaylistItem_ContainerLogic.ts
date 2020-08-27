import amCoreServices   = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_ContainerLogic");

import amGeneralError    = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext  = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");
import amPlaylistItem        = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem");
import amPlaylistItemType    = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItemType");
import amPlaylistContainer   = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_Container");
import amPlaylistContainerLogic   = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_ContainerLogic");
import amPlaylistItemStream  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_Stream");
import amPlaylistTagManager  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_TagManager");
import amPlaylistItemRealTag = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_RealTag");

import amGeneralRandom = require("../../../../../app/ts/abstract/am_general/ae_random/AE_Random");
import amGeneralDiffusion = require("../../../../../app/ts/abstract/am_general/ae_diffusion/AE_Diffusion");

import amCoreServicesPlaylistController   = require("../../../../../app/ts/abstract/am_coreservices/a_playlistcontroller/A_PlaylistController");
import amCoreServicesRenderingController  = require("../../../../../app/ts/abstract/am_coreservices/a_renderingcontroller/A_RenderingController");

import amGeneralQueue = require("../../../../../app/ts/abstract/am_general/ae_queue/AE_Queue");
import amGeneralEvent = require("../../../../../app/ts/abstract/am_general/ae_event/AE_Event");
import amPlaylistItemStatusType = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItemStatusType");
import amPlaylistItemEventType  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItemEventType");
import amNextChildSelectionType = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_NextChildSelectionType");

import rmGeneralEntity  = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");
import rmPlaylistItemLogic  = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_Logic");
//import { am_renderingservices } from "../../../abstract/am_renderingservices/ae_renderparams/AE_RenderParams_MediaTypeEnum";

import amContainerPosAndSize = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_ContainerPosAndSize");


export module rm_coreservices
{
  export class RE_PlaylistItem_ContainerLogic extends rmPlaylistItemLogic.rm_coreservices.RE_PlaylistItem_Logic
                                              implements amCoreServices.am_coreservices.AE_PlaylistItem_ContainerLogic
  {
    //------------
    _nextChildSelectionType : amNextChildSelectionType.am_coreservices.AE_NextChildSelectionType;
    _hasMultiplay : boolean;

    _hasLoop      : boolean;
    _isRandom     : boolean;

    _random    : amGeneralRandom.am_general.AE_Random;
    _diffusion : amGeneralDiffusion.am_general.AE_Diffusion;

    //------------ new dynamics 
    __crtSelectedChild    : amPlaylistItem.am_coreservices.AE_PlaylistItem;
    __crtStartedChild     : amPlaylistItem.am_coreservices.AE_PlaylistItem;
    __crtStartedChildren  : Array<amPlaylistItem.am_coreservices.AE_PlaylistItem>;

    __crtNbChildrenChoosed  : number;
    __nbMaxChildrenToChoose : number;

    //------------ old dynamics    
    //-- for single play
    _crtChildIdx  : number;
    _prevChildIdx : number;
    _crtChild : amPlaylistItem.am_coreservices.AE_PlaylistItem;
    _prevChild : amPlaylistItem.am_coreservices.AE_PlaylistItem;

    //--- for multiplay play
    //    multiplay is defined that each child can play independently from the other.
    //              a new  arriving child will not stop the crt playing activity if is marked as "overlay" (if it marks in the event "do not stop rendering")
    //              a new  arriving child with lower priority will not start if another child is playing.
    _crtChildToPlayIdx  : number;
    _prevChildToPlayIdx : number;
    //-
    _crtChildToAbortOrEndBeforePlay : number;
    _prevChildToAbortOrEndBeforePlay : number;
    //-
    _crtChildrenIdx  : Array<number>;
    _prevChildrenIdx : Array<number>;
    _crtChildToAbort  : number;
    _prevChildToAbort : number;
    //-
    _crtChildToEnd  : number;
    _nextChildToEnd : number;
    //-
    _crtChildren      : Array<amPlaylistItem.am_coreservices.AE_PlaylistItem>;
    _prevChildren     : Array<amPlaylistItem.am_coreservices.AE_PlaylistItem>;

    //==============
    constructor()
    {
      super();
      this._hasARenderingRepresentation = false;
      this._hasARenderingZone           = false;

      this._nextChildSelectionType = amNextChildSelectionType.am_coreservices.AE_NextChildSelectionType.NextChildSelectionType_OneAfterTheOther_NoLoop;

      //-- for single play
      this._hasMultiplay = false;
    
      this._isRandom     = false;
    
      this._random       = null;
      this._diffusion    = null;
  
      //------------ new dynamics 
      this.__crtSelectedChild    = null;
      this.__crtStartedChild     = null;
      this.__crtStartedChildren  = null;
  
      this.__crtNbChildrenChoosed  = 0;
      this.__nbMaxChildrenToChoose = 0;

      //------------ old dynamics
      this._crtChildIdx  = -1;
      this._prevChildIdx = -1;  
      this._crtChild  = null;
      this._prevChild = null;  

      //--- for multiplay play
      //this._crtChildrenIdx   = null;
      //this._prevChildrendIdx = null;
      //this._crtChildren      = null;
      //this._prevChildren     = null;

    }


    //==============
    reset()
    {
      super.reset();

      //------------ new dynamics 
      this.__crtSelectedChild    = null;
      this.__crtStartedChild     = null;
      this.cmd_clearStartedChildren();
      if (this._random != null)
      {
         this._random.resetRandom();
      }
      this.__crtNbChildrenChoosed  = 0;

      //----------------------- old version
      this._crtChildIdx  = -1;
      this._prevChildIdx = -1;  
      this._crtChild  = null;
      this._prevChild = null;  
    }

     //------------------
     public isContainer()
     {
       return true;
     }

    //================================
    // set get Random
    //===============================

    //------------------
    public cmd_getRandom() : amGeneralRandom.am_general.AE_Random    
    {
      return this._random;
    }
   
    //--------------------
    public cmd_setRandom(random: amGeneralRandom.am_general.AE_Random)
    {
      this._random = random;
    }


    //===============================
    // accept child request to end
    //===============================
    public cmd_acceptChildRequestToEndParent( crtChildIdx: number, event : amGeneralEvent.am_general.AE_Event, 
                                              eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                                              aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                              aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                              context: amGeneralContext.am_general.A_Context, callback) : boolean
    {
      return true;
    }

    //======================
    public hasNoDurationAndAPlaylistParent( crtChildIdx: number, event : amGeneralEvent.am_general.AE_Event, 
                                            eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                                            aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                            aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                            context: amGeneralContext.am_general.A_Context, callback) : boolean
    {
      if (this._diff_duration != null)
        return false;
      var aParent : amPlaylistContainer.am_coreservices.AE_PlaylistItem_Container;
      aParent = <amPlaylistContainer.am_coreservices.AE_PlaylistItem_Container>this.getOwner().getParent();
      if (aParent == null)
        return false;
      if (aParent.getPlaylistItemType() == amPlaylistItemType.am_coreservices.AE_PlaylistItemType.PlaylistItemType_Stream)
        return true;
      if (aParent.getPlaylistItemType() == amPlaylistItemType.am_coreservices.AE_PlaylistItemType.PlaylistItemType_Playlist)
        return true;
      //if (aParent.getPlaylistItemType() == amPlaylistItemType.am_coreservices.AE_PlaylistItemType.PlaylistItemType_PriorityPlaylist)
        //return true;
      return false;     
    }

    //======================
    public isParent_aPlaylistStream( crtChildIdx: number, event : amGeneralEvent.am_general.AE_Event, 
                                     eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                                     aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                     aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                     context: amGeneralContext.am_general.A_Context, callback) : boolean
    {
      var aParent : amPlaylistContainer.am_coreservices.AE_PlaylistItem_Container;
      aParent = <amPlaylistContainer.am_coreservices.AE_PlaylistItem_Container>this.getOwner().getParent();
      if (aParent == null)
        return false;
      if (aParent.getPlaylistItemType() == amPlaylistItemType.am_coreservices.AE_PlaylistItemType.PlaylistItemType_Stream)
        return true;
      return false;     
    }
    
    //======================
    public hasTheSameChildNextToPlay( crtChildIdx: number, event : amGeneralEvent.am_general.AE_Event, 
                                     eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                                     aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                     aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                     context: amGeneralContext.am_general.A_Context, callback) : amPlaylistItem.am_coreservices.AE_PlaylistItem
    {
      if (! this.hasNoDurationAndAPlaylistParent(crtChildIdx, event, eventQueue, error, aPlaylistController, aRenderingController,context, callback))
        return null;  
      var aParent : amPlaylistContainer.am_coreservices.AE_PlaylistItem_Container;
      aParent = <amPlaylistContainer.am_coreservices.AE_PlaylistItem_Container>this.getOwner().getParent();
      if (aParent == null)
        return null;
      var containerLogic: amPlaylistContainerLogic.am_coreservices.AE_PlaylistItem_ContainerLogic = 
                                                    <amPlaylistContainerLogic.am_coreservices.AE_PlaylistItem_ContainerLogic>aParent.getLogic();
      if (containerLogic.isParent_aPlaylistStream(crtChildIdx, event, eventQueue, error, aPlaylistController, aRenderingController,context, callback))
        return containerLogic.hasTheSameChildNextToPlay_InChannelPlaylist(crtChildIdx, event, eventQueue, error, aPlaylistController, aRenderingController,context, callback);
      return containerLogic.hasTheSameChildNextToPlay_InSecondaryPlaylist(crtChildIdx, event, eventQueue, error, aPlaylistController, aRenderingController,context, callback);;
    }

    //======================
    public hasTheSameChildNextToPlay_InChannelPlaylist( crtChildIdx: number, event : amGeneralEvent.am_general.AE_Event, 
                                                                      eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                                                                      aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                                                      aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                                                      context: amGeneralContext.am_general.A_Context, callback) : amPlaylistItem.am_coreservices.AE_PlaylistItem
    {
      var childrenList : Array<amPlaylistItem.am_coreservices.AE_PlaylistItem> = this.getChildrenList();
      if (childrenList == null)
        return null;
      var nbChildren   : number = childrenList.length;
      if (nbChildren == 0)
        return null;

      var a = 0;
      if (this.getOwner().getPlaylistItemId() == 68581)
      {
        a=1;
      }

      var refChild:amPlaylistItem.am_coreservices.AE_PlaylistItem = childrenList[crtChildIdx];
      var refId = refChild.getPlaylistItemId();

      var nextChild:amPlaylistItem.am_coreservices.AE_PlaylistItem = null;
      var nextChildIdx = crtChildIdx + 1
      var refDate = new Date();
      var findChild:amPlaylistItem.am_coreservices.AE_PlaylistItem = null;
      while (true)
      {
        if (nextChildIdx >= nbChildren)
          nextChildIdx = 0;
        nextChild = childrenList[nextChildIdx] ;
        if (nextChild.getPlaylistItemType() == amPlaylistItemType.am_coreservices.AE_PlaylistItemType.PlaylistItemType_FillRect)
        {
          nextChildIdx++;
          continue;
        }

        if( nextChild.getLogic().hasActiveRenderingDescendantsToPlayAndItself( refDate, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) )
        {
          if (refId == nextChild.getPlaylistItemId())
          {
            findChild = nextChild;
            break;
          }else{
            findChild = null;
            break;
          }
        } 
        if (nextChildIdx == crtChildIdx)  
        {
          findChild = nextChild;
          break;
        }
        nextChildIdx++;
      }
      if (findChild == null)
        return null;
      return findChild;   
    }

    //======================
    public hasTheSameChildNextToPlay_InSecondaryPlaylist( crtChildIdx: number, event : amGeneralEvent.am_general.AE_Event, 
                                                         eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                                                         aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                                         aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                                         context: amGeneralContext.am_general.A_Context, callback) : amPlaylistItem.am_coreservices.AE_PlaylistItem
    {
      var childrenList : Array<amPlaylistItem.am_coreservices.AE_PlaylistItem> = this.getChildrenList();
      if (childrenList == null)
        return null;
      var nbChildren   : number = childrenList.length;
      if (nbChildren == 0)
        return null;

      if (crtChildIdx + 1 >= nbChildren)
        return null;

      var refChild:amPlaylistItem.am_coreservices.AE_PlaylistItem = childrenList[crtChildIdx];
      var refId = refChild.getPlaylistItemId();

      var nextChild:amPlaylistItem.am_coreservices.AE_PlaylistItem = null;
      var nextChildIdx = crtChildIdx + 1
      var refDate = new Date();

      var findChild:amPlaylistItem.am_coreservices.AE_PlaylistItem = null;
      while (true)
      {
        if (nextChildIdx >= nbChildren)
          return null;

        nextChild = childrenList[nextChildIdx] ;
        if (nextChild.getPlaylistItemType() == amPlaylistItemType.am_coreservices.AE_PlaylistItemType.PlaylistItemType_FillRect)
        {
          nextChildIdx++;
          continue;
        }
        if( nextChild.getLogic().hasActiveRenderingDescendantsToPlayAndItself( refDate, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) )
        {
          if (refId == nextChild.getPlaylistItemId())
          {
            findChild = nextChild;
            break;
          }else{
            findChild = null;
            break;
          }
        } 
        nextChildIdx++;
      }

      if (findChild == null)
        return null;
      return findChild;  
    }

    //================================
    // get crt/prevChild - getChildren
    //===============================

    public cmd_getNbChildren()
    {
      var childrenList : Array<amPlaylistItem.am_coreservices.AE_PlaylistItem> = this.getChildrenList();
      if (childrenList == null)
        return 0;

      var nbChildren   : number = childrenList.length;
      if (nbChildren == 0)
        return 0;
      return nbChildren;
    }
    
    //======================
    public hasChildren() : boolean
    {
      var childrenList : Array<amPlaylistItem.am_coreservices.AE_PlaylistItem> = this.getChildrenList();
      if (childrenList == null)
        return null;
      if (childrenList.length == 0)
        return false;
      return true;
    }

    //---------------------------------------------------------------
    public cmd_childHasBiggerOrEqualPriority_thanOtherStartedChildren( refChild: amPlaylistItem.am_coreservices.AE_PlaylistItem) : boolean
    {
      // Note: priority zero is the highest priority
      if (refChild)
        return false;
      if (this.__crtStartedChild != null)
      {
        if (this.__crtStartedChild.getLogic().getPriority() < refChild.getLogic().getPriority())
          return false;
      } 
      if (this.__crtStartedChildren == null)
        return true;
      var childrenList : Array<amPlaylistItem.am_coreservices.AE_PlaylistItem> = this.__crtStartedChildren;
      if (childrenList == null)
        return true;
      if (childrenList.length == 0)
        return false;
      for (var iCrtChildIdx = 0 ; iCrtChildIdx < childrenList.length ; iCrtChildIdx++)
      {
        if (childrenList[iCrtChildIdx] == null)
          continue;
        if (refChild == childrenList[iCrtChildIdx])
          continue;  
        if (childrenList[iCrtChildIdx].getLogic().getPriority() < refChild.getLogic().getPriority())
          return false;
      }
      return true;    
    }

    //======================
    public getChildrenList() : Array<amPlaylistItem.am_coreservices.AE_PlaylistItem>
    {
      return this._owner.getPlaylistItems();
    } 

    //======================
    public getCrtChild() : amPlaylistItem.am_coreservices.AE_PlaylistItem
    {
      return this._crtChild;
    }

    //======================
    public getPrevChild() : amPlaylistItem.am_coreservices.AE_PlaylistItem
    {
      return this._prevChild;
    }

    //==============================
    //  external methods
    //==============================

    //======================
    public cmd_getNextChildSelectionType() : amNextChildSelectionType.am_coreservices.AE_NextChildSelectionType
    {
      return this._nextChildSelectionType;
    }

    //======================
    public cmd_setNextChildSelectionType(nextChildSelectionType : amNextChildSelectionType.am_coreservices.AE_NextChildSelectionType)
    {
      this._nextChildSelectionType = nextChildSelectionType;
    }    
    
    //======================
    public cmd_hasMultiplay() : boolean
    {
      return this._hasMultiplay;
    }
    
    //======================
    public cmd_setHasMultiplay(hasMultiplay: boolean) : void
    {
      this._hasMultiplay = hasMultiplay;
    }

    //======================
    public cmd_getChildFromIndex( crtChildIdx: number) : amPlaylistItem.am_coreservices.AE_PlaylistItem
    {
      if (crtChildIdx < 0)
        return null;

      var childrenList : Array<amPlaylistItem.am_coreservices.AE_PlaylistItem> = this.getChildrenList();
      if (childrenList == null)
        return null;
      var nbChildren   : number = childrenList.length;

      if (crtChildIdx >= nbChildren)
        return null;
        
      return childrenList[crtChildIdx] ;
    }

    //---------------------------
    public  cmd_selectNextChildToPlay( crtChildIdx:  number,  
                                       nextChildSelectionType : amNextChildSelectionType.am_coreservices.AE_NextChildSelectionType,
                                       event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, 
                                       error: amGeneralError.am_general.A_Error, 
                                       aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                       aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                       context: amGeneralContext.am_general.A_Context, callback): amPlaylistItem.am_coreservices.AE_PlaylistItem
    {
      switch (nextChildSelectionType)
      {
        case amNextChildSelectionType.am_coreservices.AE_NextChildSelectionType.NextChildSelectionType_OneAfterTheOther_NoLoop:
          return this.cmd_selectNextChild_OneAfterTheOther_NoLoop(crtChildIdx, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);

        case amNextChildSelectionType.am_coreservices.AE_NextChildSelectionType.NextChildSelectionType_OneAfterTheOther_NoLoop_WithDiffusion:
          return this.cmd_selectNextChild_OneAfterTheOther_NoLoop_WithDiffusion(crtChildIdx, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
        
        case amNextChildSelectionType.am_coreservices.AE_NextChildSelectionType.NextChildSelectionType_OneAfterTheOther_Loop:
          return this.cmd_selectNextChild_OneAfterTheOther_Loop(crtChildIdx, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                  
        case amNextChildSelectionType.am_coreservices.AE_NextChildSelectionType.NextChildSelectionType_OneAfterTheOther_Loop_WithDiffusion:
          return this.cmd_selectNextChild_OneAfterTheOther_Loop_WithDiffusion(crtChildIdx, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);

        case amNextChildSelectionType.am_coreservices.AE_NextChildSelectionType.NextChildSelectionType_Random_NoLoop:
          return this.cmd_selectNextChild_Random_NoLoop(crtChildIdx, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
         
        case amNextChildSelectionType.am_coreservices.AE_NextChildSelectionType.NextChildSelectionType_Random_NoLoop_WithDiffusion:
          return this.cmd_selectNextChild_Ramdom_NoLoop_WithDiffusion(crtChildIdx, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);

        case amNextChildSelectionType.am_coreservices.AE_NextChildSelectionType.NextChildSelectionType_Random_Loop:
          return this.cmd_selectNextChild_Random_Loop(crtChildIdx, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);

        case amNextChildSelectionType.am_coreservices.AE_NextChildSelectionType.NextChildSelectionType_Random_Loop_WithDiffusion:
          return this.cmd_selectNextChild_Random_Loop_WithDiffusion(crtChildIdx, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);

        case amNextChildSelectionType.am_coreservices.AE_NextChildSelectionType.NextChildSelectionType_Select_usingChildAddressFromEvent: // to do
          return this.cmd_selectNextChild_usingChildAddressFromEvent(crtChildIdx, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
    
        case amNextChildSelectionType.am_coreservices.AE_NextChildSelectionType.NextChildSelectionType_Select_fromTheBegining_ByPriority:
          return this.cmd_selectNextChild_Select_fromTheBegining_ByPriority(crtChildIdx, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);

        case amNextChildSelectionType.am_coreservices.AE_NextChildSelectionType.NextChildSelectionType_ChooseRandom_OnlyOne_ByTagId:
            return this.cmd_selectNextChild_ChooseRandom_OnlyOne_ByTagId(crtChildIdx, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
        default:
          break;
      }
      return null;
    }

    //======================================
    //  One after the other 
    //======================================

    //======================
    public cmd_selectNextChild_OneAfterTheOther_NoLoop( crtChildIdx: number, event : amGeneralEvent.am_general.AE_Event, 
                                                        eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                                                        aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                                        aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                                        context: amGeneralContext.am_general.A_Context, callback) : amPlaylistItem.am_coreservices.AE_PlaylistItem
    {
      var childrenList : Array<amPlaylistItem.am_coreservices.AE_PlaylistItem> = this.getChildrenList();
      if (childrenList == null)
        return null;
      var nbChildren   : number = childrenList.length;
      if (nbChildren == 0)
        return null;

      if (crtChildIdx + 1 >= nbChildren)
        return null;

      return childrenList[crtChildIdx+1] ;
    }

    //======================
    public cmd_selectNextChild_OneAfterTheOther_NoLoop_WithDiffusion( crtChildIdx: number, event : amGeneralEvent.am_general.AE_Event, 
                                                                      eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                                                                      aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                                                      aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                                                      context: amGeneralContext.am_general.A_Context, callback) : amPlaylistItem.am_coreservices.AE_PlaylistItem
    {
      var childrenList : Array<amPlaylistItem.am_coreservices.AE_PlaylistItem> = this.getChildrenList();
      if (childrenList == null)
        return null;
      var nbChildren   : number = childrenList.length;
      if (nbChildren == 0)
        return null;

      if (crtChildIdx + 1 >= nbChildren)
        return null;
      var a = 0;
      if (this.getOwner().getPlaylistItemId() == 68581)
      {
        a=1;
      }
      var nextChild:amPlaylistItem.am_coreservices.AE_PlaylistItem = null;
      var nextChildIdx = crtChildIdx + 1;

      var nextNextChild:amPlaylistItem.am_coreservices.AE_PlaylistItem = null;
      var nextNextChildIdx = nextChildIdx + 1

      var refDate = new Date();
      while (true)
      {
        if (nextChildIdx >= nbChildren)
          return null;

        nextChild = childrenList[nextChildIdx] ;
        
        //--------------------------------------------
        nextNextChild = null;
        if (nextChild.getPlaylistItemType() == amPlaylistItemType.am_coreservices.AE_PlaylistItemType.PlaylistItemType_FillRect)
        {
          var bVisible = nextChild.getPrepareParams().getRenderParams().isVisible();
          if (bVisible == false)
          {
            if (nextNextChildIdx < nbChildren)
            {
              nextNextChild = childrenList[nextNextChildIdx] ;
              if(nextNextChild.getLogic().hasActiveRenderingDescendantsToPlayAndItself( refDate, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) )
              {
                break;
              }       
              nextChildIdx++;
              nextNextChildIdx++;
              continue;      
            }
          }
        }
        //------------------
        if( nextChild.getLogic().hasActiveRenderingDescendantsToPlayAndItself( refDate, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) )
        {
          break;
        } 
        nextChildIdx++;
        nextNextChildIdx++;
      }
      return nextChild;
    }

    //======================
    public cmd_selectNextChild_OneAfterTheOther_Loop( crtChildIdx: number, event : amGeneralEvent.am_general.AE_Event, 
                                                        eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                                                        aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                                        aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                                        context: amGeneralContext.am_general.A_Context, callback) : amPlaylistItem.am_coreservices.AE_PlaylistItem
    {
      var childrenList : Array<amPlaylistItem.am_coreservices.AE_PlaylistItem> = this.getChildrenList();
      if (childrenList == null)
        return null;
      var nbChildren   : number = childrenList.length;
      if (nbChildren == 0)
        return null;

      var nextChildIdx = crtChildIdx + 1;
      if (nextChildIdx >= nbChildren)
        nextChildIdx = 0;

      return childrenList[nextChildIdx] ;
    }

    //======================
    public cmd_selectNextChild_OneAfterTheOther_Loop_WithDiffusion( crtChildIdx: number, event : amGeneralEvent.am_general.AE_Event, 
                                                                    eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                                                                    aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                                                    aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                                                    context: amGeneralContext.am_general.A_Context, callback) : amPlaylistItem.am_coreservices.AE_PlaylistItem
    {
      var childrenList : Array<amPlaylistItem.am_coreservices.AE_PlaylistItem> = this.getChildrenList();
      if (childrenList == null)
        return null;
      var nbChildren   : number = childrenList.length;
      if (nbChildren == 0)
        return null;

      if (crtChildIdx + 1 >= nbChildren)
        return null;

      var nextChild:amPlaylistItem.am_coreservices.AE_PlaylistItem = null;
      var nextChildIdx = crtChildIdx + 1
      var refDate = new Date();
      while (true)
      {
        if (nextChildIdx >= nbChildren)
          nextChildIdx = 0;
        nextChild = childrenList[nextChildIdx] ;
        if( nextChild.getLogic().hasActiveRenderingDescendantsToPlayAndItself( refDate, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) )
        {
          break;
        } 
        if (nextChildIdx == crtChildIdx)  
          return null;
        nextChildIdx++;
      }
      return nextChild;
    }


    //======================================
    //  Random 
    //======================================

    //======================
    public cmd_selectNextChild_Random_NoLoop( crtChildIdx: number, event : amGeneralEvent.am_general.AE_Event, 
                                                        eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                                                        aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                                        aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                                        context: amGeneralContext.am_general.A_Context, callback) : amPlaylistItem.am_coreservices.AE_PlaylistItem
    {
      var childrenList : Array<amPlaylistItem.am_coreservices.AE_PlaylistItem> = this.getChildrenList();
      if (childrenList == null)
        return null;
      var nbChildren   : number = childrenList.length;
      if (nbChildren == 0)
        return null;

      if (this._random == null)
        return null;
        
      var nextChildIx = this._random.getRandom();  
      if (nextChildIx < 0)
        return null;
      if (nextChildIx >= nbChildren)
        return null;

      return childrenList[crtChildIdx] ;
    }

    //======================
    public cmd_selectNextChild_Ramdom_NoLoop_WithDiffusion( crtChildIdx: number, event : amGeneralEvent.am_general.AE_Event, 
                                                            eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                                                            aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                                            aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                                            context: amGeneralContext.am_general.A_Context, callback) : amPlaylistItem.am_coreservices.AE_PlaylistItem
    {
      var childrenList : Array<amPlaylistItem.am_coreservices.AE_PlaylistItem> = this.getChildrenList();
      if (childrenList == null)
        return null;
      var nbChildren   : number = childrenList.length;
      if (nbChildren == 0)
        return null;

      if (this._random == null)
        return null;

      var nextChild:amPlaylistItem.am_coreservices.AE_PlaylistItem = null;
      var nextChildIdx = this._random.getRandom();
      var refDate = new Date();
      while (true)
      {
        if (nextChildIdx == -1)
          return null;
          
        nextChild = childrenList[nextChildIdx] ;
        if( nextChild.getLogic().hasActiveRenderingDescendantsToPlayAndItself( refDate, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) )
        {
          break;
        } 
        nextChildIdx = this._random.getRandom();
      }
      return nextChild;
    }


    //======================
    public cmd_selectNextChild_Random_Loop( crtChildIdx: number, event : amGeneralEvent.am_general.AE_Event, 
                                                        eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                                                        aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                                        aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                                        context: amGeneralContext.am_general.A_Context, callback) : amPlaylistItem.am_coreservices.AE_PlaylistItem
    {
      var childrenList : Array<amPlaylistItem.am_coreservices.AE_PlaylistItem> = this.getChildrenList();
      if (childrenList == null)
        return null;
      var nbChildren   : number = childrenList.length;
      if (nbChildren == 0)
        return null;

      if (this._random == null)
        return null;
       
      var nextChildIx = this._random.getRandom();  
      if (nextChildIx < 0)
      {
        this._random.resetRandom(); 
        //cum  ---> trebuie pus ?
        nextChildIx = this._random.getRandom(); 
        if (nextChildIx < 0)
          return null;
      }
      
      if (nextChildIx >= nbChildren)
        return null;

      return childrenList[nextChildIx] ;
    }


    //======================
    public cmd_selectNextChild_Random_Loop_WithDiffusion( crtChildIdx: number, event : amGeneralEvent.am_general.AE_Event, 
                                                          eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                                                          aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                                          aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                                          context: amGeneralContext.am_general.A_Context, callback) : amPlaylistItem.am_coreservices.AE_PlaylistItem
    {
      var childrenList : Array<amPlaylistItem.am_coreservices.AE_PlaylistItem> = this.getChildrenList();
      if (childrenList == null)
        return null;
      var nbChildren   : number = childrenList.length;
      if (nbChildren == 0)
        return null;

      if (this._random == null)
        return null;

      var nextChild:amPlaylistItem.am_coreservices.AE_PlaylistItem = null;
      var nextChildIdx = -1;
      var refChildIdx = -1;
      var refDate = new Date();
      var isFirstTime = true;
      while (true)
      {
        nextChildIdx = this._random.getRandom();  
        if (nextChildIdx < 0)
          this._random.resetRandom(); 

        if (nextChildIdx>= nbChildren)
          return  null;

        nextChild = childrenList[nextChildIdx] ;

        //------------------------------------------
        if( nextChild.getLogic().hasActiveRenderingDescendantsToPlayAndItself( refDate, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) )
        {
          break;
        } 
        //----------------------- exit test
        if (isFirstTime)
        {
          isFirstTime = false;
          refChildIdx  = nextChildIdx;
        }else{
          if (nextChildIdx == refChildIdx)  // end loop no selection
            return null;
        }
        //-----------------------  
      }
      return nextChild;
    }

    
    //========================================
    public cmd_selectNextChild_usingChildAddressFromEvent(
                                crtChildIdx: number, event : amGeneralEvent.am_general.AE_Event, 
                                eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                                aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                context: amGeneralContext.am_general.A_Context, callback) : amPlaylistItem.am_coreservices.AE_PlaylistItem
    {       
      var childIdx = this.getChildIdx_fromAddressIdx(event.getTargetAddress(), event.getCrtTargetIdx());
      if (childIdx <= 0)  
        return null;
      
      var childrenList : Array<amPlaylistItem.am_coreservices.AE_PlaylistItem> = this.getChildrenList();
      if (childrenList == null)
        return null;

      var nbChildren   : number = childrenList.length;
      if (nbChildren == 0)
        return null;
      if (childIdx >= nbChildren)  
        return null;

       return  childrenList[childIdx] ;
    }


    //======================
    public cmd_selectNextChild_Select_fromTheBegining_ByPriority( 
                                                   crtChildIdx: number, event : amGeneralEvent.am_general.AE_Event, 
                                                   eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                                                   aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                                   aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                                  context: amGeneralContext.am_general.A_Context, callback) : amPlaylistItem.am_coreservices.AE_PlaylistItem
    {
      var childrenList : Array<amPlaylistItem.am_coreservices.AE_PlaylistItem> = this.getChildrenList();
      if (childrenList == null)
        return null;
      var nbChildren   : number = childrenList.length;
      if (nbChildren == 0)
        return null;

      var nextChild:amPlaylistItem.am_coreservices.AE_PlaylistItem = null;
      var crtChildIdxFromBeg = 0;
      var refDate = new Date();
      while (true)
      {
        if (crtChildIdxFromBeg >= nbChildren)
          return null;

        nextChild = childrenList[crtChildIdxFromBeg] ;
        if( nextChild.getLogic().hasActiveRenderingDescendantsToPlayAndItself( refDate, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) )
        {
          break;
        } 
        crtChildIdxFromBeg++;
      }
      return nextChild;
    }

    /*
    //===================
    public getTagId() : number
    {
       return null;
    }

    //=====================
    public getRandomByTagId( crtChildIdx: number, event : amGeneralEvent.am_general.AE_Event, 
                             eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                             aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                             aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                            context: amGeneralContext.am_general.A_Context, callback) : amGeneralRandom.am_general.AE_Random
    {
       var tagId = this.getTagId();
       if (tagId == null)
         return null;

      var stream:amPlaylistItemStream.am_coreservices.AE_PlaylistItem_Stream = this.getOwner().getStream(); 
      if (stream == null)
        return ;

      var tagManager:amPlaylistTagManager.am_coreservices.AE_TagManager = stream.getTagManager();
      if (tagManager == null)
        return null;

      var realTag:amPlaylistItemRealTag.am_coreservices.AE_PlaylistItem_RealTag =   tagManager.getRealTag(tagId);
      if (realTag == null)
        return null;

      var randomByTagId:amGeneralRandom.am_general.AE_Random = realTag.getRealTagRandom();
      if (realTag == null)
        return null;

      return randomByTagId;
    }*/
    
    //===================
    public getRealTagRandom() : amGeneralRandom.am_general.AE_Random
    {
       return null;
    }

    //======================
    public cmd_selectNextChild_ChooseRandom_OnlyOne_ByTagId( 
                                        crtChildIdx: number, event : amGeneralEvent.am_general.AE_Event, 
                                        eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                                        aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                        aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                        context: amGeneralContext.am_general.A_Context, callback) : amPlaylistItem.am_coreservices.AE_PlaylistItem
    {
      var childrenList : Array<amPlaylistItem.am_coreservices.AE_PlaylistItem> = this.getChildrenList();
      if (childrenList == null)
        return null;
      var nbChildren   : number = childrenList.length;
      if (nbChildren == 0)
        return null;

      if (this.__crtNbChildrenChoosed + 1 > this.__nbMaxChildrenToChoose)
        return null;  
      this.__crtNbChildrenChoosed++;

      var randomByTagId =  this.getRealTagRandom();//this.getRandomByTagId(crtChildIdx, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);  
      if (randomByTagId == null)
        return null;

      var nextChild:amPlaylistItem.am_coreservices.AE_PlaylistItem = null;
      var nextChildIdx = -1;

      var nextNextChild:amPlaylistItem.am_coreservices.AE_PlaylistItem = null;
      var nextNextChildIdx = -1;

      var refChildIdx = -1;
      var refDate = new Date();
      var isFirstTime = true;
      while (true)
      {
        nextChildIdx = randomByTagId.getRandom();  
        if (nextChildIdx < 0)
          return null;
        /*
        if (nextChildIdx < 0)
        {
          randomByTagId.resetRandom(); 
          nextChildIdx = randomByTagId.getRandom();  
        }*/
        if (nextChildIdx>= nbChildren)
          return  null;

        nextChild = childrenList[nextChildIdx] ;
        //---------------------------------------
        /*
        nextNextChild = null;
        if (nextChild.getPlaylistItemType() == amPlaylistItemType.am_coreservices.AE_PlaylistItemType.PlaylistItemType_FillRect)
        {
          var bVisible = nextChild.getPrepareParams().getRenderParams().isVisible();
          if (bVisible == false)
          {
            nextNextChildIdx = nextChildIdx+1;
            if (nextNextChildIdx < nbChildren)
            {
              nextNextChild = childrenList[nextNextChildIdx] ;
              if(nextNextChild.getLogic().hasActiveRenderingDescendantsToPlayAndItself( refDate, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) )
              {
                randomByTagId.setValidPlay(nextChildIdx, 1);
                break;
              }       
              randomByTagId.setValidPlay(nextChildIdx, 0);
              if (randomByTagId.testAllInvalid())
                return null;
              continue;      
            }
          }
        }*/
        //---------------------------------------
        if( nextChild.getLogic().hasActiveRenderingDescendantsToPlayAndItself( refDate, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) )
        {
          randomByTagId.setValidPlay(nextChildIdx, 1);
          break;
        } 
        //nValidPlay = 0; - Invalid for play -> Must be set
        randomByTagId.setValidPlay(nextChildIdx, 0);

        if (randomByTagId.testAllInvalid())
          return null;
        /*
        //----------------------- exit test
        if (isFirstTime)
        {
          isFirstTime = false;
          refChildIdx  = nextChildIdx;
        }else{
          if (nextChildIdx == refChildIdx)  // end loop no selection
            return null;
        }*/
        //-----------------------  
      }
      return nextChild;
    }

    //========================================

    //======================================
    //  hasActiveRenderingDescendantsToPlayAndItself
    //======================================

    //======================
    public hasActiveRenderingDescendantsToPlayAndItself( 
                        refDate: Date, event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                        aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                        aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                        context: amGeneralContext.am_general.A_Context, callback) 
    {
      if (this.isDisable(refDate, event, eventQueue, error, aPlaylistController, aRenderingController,context,callback))  
        return false;
      if (this.hasAtLeastOneAncestorDisable(refDate, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback))
        return false;
      if (this._hasARenderingRepresentation)
        return true;
      var childrenList : Array<amPlaylistItem.am_coreservices.AE_PlaylistItem> = this.getChildrenList();
      if (childrenList == null)
        return false;

      var nbChildren : number = childrenList.length;
      if (nbChildren == 0)
        return false;

      var hasGraphicChildToPlay:boolean = false;
      var crtChild:amPlaylistItem.am_coreservices.AE_PlaylistItem=null;
      for (var childIdx = 0 ; childIdx < nbChildren; childIdx++)
      {
        crtChild = childrenList[childIdx];
        hasGraphicChildToPlay = crtChild.getLogic().hasActiveRenderingDescendantsToPlayAndItself(refDate, event, eventQueue, error, aPlaylistController, aRenderingController,context,callback);
        if (hasGraphicChildToPlay)
          return true;
      }
      return false;
    }


    //======================
    public setAncestorThatMustCreateARenderingZone( error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
      var pAncestorWithRenderingZone:amPlaylistItem.am_coreservices.AE_PlaylistItem = null;
      if (this._hasARenderingRepresentation)
      {
        pAncestorWithRenderingZone  = this.getFirstParentWithARenderingZone() ;
        if ( pAncestorWithRenderingZone != null)
          pAncestorWithRenderingZone.getLogic().setMustCreateARenderingZone(true);
      }
      var childrenList : Array<amPlaylistItem.am_coreservices.AE_PlaylistItem> = this.getChildrenList();
      if (childrenList == null)
        return false;

      var nbChildren : number = childrenList.length;
      if (nbChildren == 0)
        return false;

      var hasGraphicChildToPlay:boolean = false;
      var crtChild:amPlaylistItem.am_coreservices.AE_PlaylistItem=null;
      for (var childIdx = 0 ; childIdx < nbChildren; childIdx++)
      {
        crtChild = childrenList[childIdx];
        if (crtChild == null)
          continue;
        if (crtChild.getLogic().hasARenderingRepresentation())
        {
          pAncestorWithRenderingZone  = this.getFirstParentWithARenderingZone() ;
          if ( pAncestorWithRenderingZone != null)
            pAncestorWithRenderingZone.getLogic().setMustCreateARenderingZone(true);
        }
        crtChild.getLogic().setAncestorThatMustCreateARenderingZone( error, context, callback) ;
      }
    }

    

    //-----------------------------------                           
    public cmd_setCrtSelectedChild(crtSelectedChild: amPlaylistItem.am_coreservices.AE_PlaylistItem)
    {
      this.__crtSelectedChild = crtSelectedChild;
    }

    //-----------------------------------                           
    public cmd_getCrtSelectedChild() : amPlaylistItem.am_coreservices.AE_PlaylistItem
    {
      return this.__crtSelectedChild;
    }

    //-----------------------------------                           
    public cmd_setCrtStartedChild(crtStartedChild: amPlaylistItem.am_coreservices.AE_PlaylistItem)
    {
      this.__crtStartedChild = crtStartedChild;
    }

    //-----------------------------------                           
    public cmd_getCrtStartedChild() : amPlaylistItem.am_coreservices.AE_PlaylistItem
    {
      return this.__crtStartedChild;
    }

    //-----------------------------------                           
    public cmd_addNewStartedChild(crtStartedChild: amPlaylistItem.am_coreservices.AE_PlaylistItem)
    {
      if (this.__crtStartedChildren == null)
        this.__crtStartedChildren = new Array<amPlaylistItem.am_coreservices.AE_PlaylistItem>();
      this.__crtStartedChildren.push(crtStartedChild);
    }

    //-----------------------------------                           
    public cmd_getStartedChildren(): Array<amPlaylistItem.am_coreservices.AE_PlaylistItem>
    {
      return this.__crtStartedChildren;
    }

    //-----------------------------------                           
    public cmd_clearStartedChildren() 
    {
      if (this.__crtStartedChildren == null)
        return;

      while (this.__crtStartedChildren.length) 
      {
        this.__crtStartedChildren.pop();
      }
    }

    //-----------------------------------                           
    public cmd_selectNextStartedChild( crtChildIdx:  number, 
                                       event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, 
                                       error: amGeneralError.am_general.A_Error, 
                                       aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                       aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                       context: amGeneralContext.am_general.A_Context, callback): amPlaylistItem.am_coreservices.AE_PlaylistItem
    {

      if (! this.cmd_hasMultiplay())
      {
        if (crtChildIdx == -1)
          return this.__crtStartedChild;
        return null;  
      }

      var childrenList : Array<amPlaylistItem.am_coreservices.AE_PlaylistItem> = this.__crtStartedChildren;
      if (childrenList == null)
        return null;
      var nbChildren   : number = childrenList.length;
      if (nbChildren == 0)
        return null;

      if (crtChildIdx + 1 >= nbChildren)
        return null;

      return childrenList[crtChildIdx+1] ;
    }
      

    //==============================
    // select next child algorithms
    //==============================
    //======================
    public selectNextChildToAbortOrEnd( 
                         nextChildSelectionType : amNextChildSelectionType.am_coreservices.AE_NextChildSelectionType,
                         event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                         aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                         aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
      context: amGeneralContext.am_general.A_Context, callback) : amPlaylistItem.am_coreservices.AE_PlaylistItem
    {
      //------------------------- single play
      if (! this._hasMultiplay)
        return this._crtChild;

      //------------------------- multiplay
      if (this._crtChildren == null)
        return null;
      if (this._crtChildren.length == 0)
        return null;

      var nextChildToAbort = null;  
      /*
      var nextChildToAbortIdx = this._crtChildToAbortBeforePlayIdx;

      this._crtChildIdxToAbort + 1 <= nbChildren  
      
      }while  (this._crtChildIdxToAbort + 1 <= nbChildren)
        return null;

      this._prevChildIdx = this._crtChildIdx;
      this._prevChild    = this._crtChild;

      this._crtChildIdx++;
      this._crtChild = childrenList[this._crtChildIdx] ;
      return this._crtChild;
      */
      return null;
    }

    //======================
    public selectNextChildToPlay( 
                            nextChildSelectionType : amNextChildSelectionType.am_coreservices.AE_NextChildSelectionType,
                            event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                            aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                            aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                            context: amGeneralContext.am_general.A_Context, callback) : amPlaylistItem.am_coreservices.AE_PlaylistItem
    {
      switch (nextChildSelectionType)
      {
        case amNextChildSelectionType.am_coreservices.AE_NextChildSelectionType.NextChildSelectionType_OneAfterTheOther_NoLoop:
          return this.selectNextChild_OneAfterTheOther_NoLoop( event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);

        case amNextChildSelectionType.am_coreservices.AE_NextChildSelectionType.NextChildSelectionType_OneAfterTheOther_Loop:
          return this.selectNextChild_OneAfterTheOther_Loop( event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                  
        case amNextChildSelectionType.am_coreservices.AE_NextChildSelectionType.NextChildSelectionType_Random_usingTagRules:
          return this.selectNextChild_Random_usingTagRules( event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
         
        case amNextChildSelectionType.am_coreservices.AE_NextChildSelectionType.NextChildSelectionType_Select_usingChildAddressFromEvent:
          return this.selectNextChild_usingChildAddressFromEvent( event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
    
        case amNextChildSelectionType.am_coreservices.AE_NextChildSelectionType.NextChildSelectionType_Select_fromTheBegining_ByPriority:
          return this.selectNextChild_usingChildAddressFromEvent( event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);

        default:
        break;
      }
      return null;
    }


    //======================
    public selectNextChild_OneAfterTheOther_NoLoop( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                                                    aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                                    aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                                    context: amGeneralContext.am_general.A_Context, callback) : amPlaylistItem.am_coreservices.AE_PlaylistItem
    {
      var childrenList : Array<amPlaylistItem.am_coreservices.AE_PlaylistItem> = this.getChildrenList();
      if (childrenList == null)
        return null;
      var nbChildren   : number = childrenList.length;
      if (nbChildren == 0)
        return null;

      if (this._crtChildIdx + 1 >= nbChildren)
        return null;

      this._prevChildIdx = this._crtChildIdx;
      this._prevChild    = this._crtChild;

      this._crtChildIdx++;
      this._crtChild = childrenList[this._crtChildIdx] ;
      return this._crtChild;
    }


    //======================
    public selectNextChild_OneAfterTheOther_Loop( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                                                  aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                                  aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                                  context: amGeneralContext.am_general.A_Context, callback)  : amPlaylistItem.am_coreservices.AE_PlaylistItem
    {
      var childrenList : Array<amPlaylistItem.am_coreservices.AE_PlaylistItem> = this.getChildrenList();
      if (childrenList == null)
        return null;
      var nbChildren   : number = childrenList.length;
      if (nbChildren == 0)
        return null;

      this._prevChildIdx = this._crtChildIdx;
      this._crtChildIdx++;

      if (this._crtChildIdx >= nbChildren)
        this._crtChildIdx = 0;

      this._prevChildIdx = this._crtChildIdx;
      this._prevChild    = this._crtChild;

      this._crtChild = childrenList[this._crtChildIdx] ;
      return this._crtChild;
    }

    //======================
    public getChildIdx_fromAddressIdx( childAddress: Array<number>, lastAddressIdx : number) : number
    {
      if ( childAddress == null)
        return null;
      var childAddressIdx = lastAddressIdx;
      if (childAddressIdx < 0)
        return null;
      if (childAddressIdx >= childAddress.length)  
        return null;
      var childIdx = childAddress[childAddressIdx];
      return childIdx;
    }     


    //======================
    public selectNextChild_usingChildAddressFromEvent( 
                         event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                         aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                         aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                         context: amGeneralContext.am_general.A_Context, callback)  : amPlaylistItem.am_coreservices.AE_PlaylistItem
    {
      var childIdx = this.getChildIdx_fromAddressIdx(event.getTargetAddress(), event.getCrtTargetIdx());

      var childrenList : Array<amPlaylistItem.am_coreservices.AE_PlaylistItem> = this.getChildrenList();
      if (childrenList == null)
        return null;

      var nbChildren   : number = childrenList.length;
      if (nbChildren == 0)
        return null;
      if (childIdx >= nbChildren)  
        return null;

      this._prevChildIdx = this._crtChildIdx;
      this._prevChild    = this._crtChild;

      this._crtChildIdx  = childIdx;
      this._crtChild     = childrenList[this._crtChildIdx] ;
      return this._crtChild;
    }


    //======================
    public selectNextChild_Random_usingTagRules( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                                                 aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                                 aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                                 context: amGeneralContext.am_general.A_Context, callback)  : amPlaylistItem.am_coreservices.AE_PlaylistItem
    {
      return null; // logic used by the RealTag item.
    }

    //======================
    public scheduleNextChildrenToPlay( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                                       aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                       aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                       context: amGeneralContext.am_general.A_Context, callback) 
    {
    }

    //=============================================
    //  adjust coordinates - resize
    //==============================================

    //======================
    public forAllChildren_adjustChildrenCoordinates_AlignNearbyEdges(  error: amGeneralError.am_general.A_Error, 
                                                                       context: amGeneralContext.am_general.A_Context, callback) : number
    {
      var childrenList : Array<amPlaylistItem.am_coreservices.AE_PlaylistItem> = this.getChildrenList();
      if (childrenList == null)
        return 1;

      var nbChildren : number = childrenList.length;
      if (nbChildren == 0)
        return 1;

      this.adjustChildrenCoordinates_AlignNearbyEdges(  error, context, callback) ;

      var crtChild:amPlaylistItem.am_coreservices.AE_PlaylistItem=null;
      for (var childIdx = 0 ; childIdx < nbChildren; childIdx++)
      {
        crtChild = childrenList[childIdx];
        if (crtChild == null)
          continue;
        crtChild.getLogic().forAllChildren_adjustChildrenCoordinates_AlignNearbyEdges(  error, context, callback) ;
      }
    }

    //-------------------------------------------------------
    public forAllChildren_setSizes_fromAdjustedContainer() : number
    {
      var childrenList : Array<amPlaylistItem.am_coreservices.AE_PlaylistItem> = this.getChildrenList();
      if (childrenList == null)
        return 1;

      var nbChildren : number = childrenList.length;
      if (nbChildren == 0)
        return 1;

      var crtChild:amPlaylistItem.am_coreservices.AE_PlaylistItem=null;
      for (var childIdx = 0 ; childIdx < nbChildren; childIdx++)
      {
        crtChild = childrenList[childIdx];
        if (crtChild == null)
          continue;
        crtChild.getLogic().setSizes_fromAdjustedContainer() ;
        crtChild.getLogic().forAllChildren_setSizes_fromAdjustedContainer() ;
      }
    }

     //-------------------------------------
     public adjustChildrenCoordinates_AlignNearbyEdges(  error: amGeneralError.am_general.A_Error, 
                                                         context: amGeneralContext.am_general.A_Context, callback) : number
     {
       var childrenList : Array<amPlaylistItem.am_coreservices.AE_PlaylistItem> = this.getChildrenList();
       if (childrenList == null)
         return 1;
       var nbChildren   : number = childrenList.length;
       if (nbChildren <= 1)
         return 1;
       var refChild:amPlaylistItem.am_coreservices.AE_PlaylistItem=null;
       var crtChild:amPlaylistItem.am_coreservices.AE_PlaylistItem=null;
       for (var refIdx = 0 ; refIdx < nbChildren; refIdx++)
       {
         refChild = childrenList[refIdx];
         if (refChild == null)
          continue;
         for (var crtIdx = refIdx+1 ; crtIdx < nbChildren; crtIdx++)
         {
           crtChild = childrenList[crtIdx];
           if (crtChild == null)
             continue;
 
           var bAdjusted = this.adjustChildCoordinates_AlignNearbyEdges(refChild, crtChild, error, context, callback);
           if (bAdjusted)
           {
            crtChild.getLogic().forAllChildren_setSizes_fromAdjustedContainer();
           }
         }
       }
       return 0;
     }    

     //-------------------------------------
     public adjustChildCoordinates_AlignNearbyEdges(  refChild : amPlaylistItem.am_coreservices.AE_PlaylistItem,
                                                      crtChild : amPlaylistItem.am_coreservices.AE_PlaylistItem,
                                                      error: amGeneralError.am_general.A_Error, 
                                                      context: amGeneralContext.am_general.A_Context, callback)  : number
     {
       if (! refChild.getLogic().hasARenderingZone())
         return 0;
       if (! crtChild.getLogic().hasARenderingZone())
         return 0;

       if (refChild.getPrepareParams()== null)
         return 0;
       if (refChild.getPrepareParams().getRenderParams() == null)
         return 0;
       if (refChild.getPrepareParams().getRenderParams().getParamContainerAdjustedPosSize() == null)
         return 0;

       if (crtChild.getPrepareParams()== null)
         return 0;
       if (crtChild.getPrepareParams().getRenderParams() == null)
         return 0;
       if (crtChild.getPrepareParams().getRenderParams().getParamContainerAdjustedPosSize() == null)
         return 0;

       var refChildPostAndSize:amContainerPosAndSize.am_renderingservices.AE_RenderParams_ContainerPosAndSize 
                                    = refChild.getPrepareParams().getRenderParams().getParamContainerAdjustedPosSize();
       var crtChildPostAndSize:amContainerPosAndSize.am_renderingservices.AE_RenderParams_ContainerPosAndSize  
                                    = crtChild.getPrepareParams().getRenderParams().getParamContainerAdjustedPosSize();

       var refPercLeft   = refChildPostAndSize.getContainerOrigPercentLeft();
       var refPercRight  = refChildPostAndSize.getContainerOrigPercentRight();
       var refPercTop    = refChildPostAndSize.getContainerOrigPercentTop();
       var refPercBottom = refChildPostAndSize.getContainerOrigPercentBottom();

       var refLeft   = refChildPostAndSize.getContainerLeft();
       var refRight  = refChildPostAndSize.getContainerRight();
       var refTop    = refChildPostAndSize.getContainerTop();
       var refBottom = refChildPostAndSize.getContainerBottom();

       var crtPercLeft   = crtChildPostAndSize.getContainerOrigPercentLeft();
       var crtPercRight  = crtChildPostAndSize.getContainerOrigPercentRight();
       var crtPercTop    = crtChildPostAndSize.getContainerOrigPercentTop();
       var crtPercBottom = crtChildPostAndSize.getContainerOrigPercentBottom();

       var crtLeft   = crtChildPostAndSize.getContainerLeft();
       var crtRight  = crtChildPostAndSize.getContainerRight();
       var crtTop    = crtChildPostAndSize.getContainerTop();
       var crtBottom = crtChildPostAndSize.getContainerBottom();

       var offset = 2;
       var bAdjusted:number = 0;
       if (this.isCrtExternalOnTheLefEdgeOfRef(refPercLeft, refPercTop, refPercRight, refPercBottom,  crtPercLeft, crtPercTop, crtPercRight, crtPercBottom))
       { 
         bAdjusted = 1;
         this.translateCrtRightEdge_nearby_RefLeftEdge(refLeft-offset, crtChild);
       }
       if (this.isCrtExternalOnTheRightEdgeOfRef(refPercLeft, refPercTop, refPercRight, refPercBottom,  crtPercLeft, crtPercTop, crtPercRight, crtPercBottom))
       { 
        bAdjusted = 1;
        this.translateCrtLeftEdge_nearby_RefRightEdge(refRight+offset, crtChild);
       }
       if (this.isCrtExternalOnTheTopEdgeOfRef(refPercLeft, refPercTop, refPercRight, refPercBottom,  crtPercLeft, crtPercTop, crtPercRight, crtPercBottom))
       { 
        bAdjusted = 1;
        this.translateCrtBottomEdge_nearby_RefTopEdge(refTop-offset, crtChild);
       }
       if (this.isCrtExternalOnTheBottomEdgeOfRef(refPercLeft, refPercTop, refPercRight, refPercBottom,  crtPercLeft, crtPercTop, crtPercRight, crtPercBottom))
       { 
        bAdjusted = 1;
        this.translateCrtTopEdge_nearby_RefBottomEdge(refBottom+offset, crtChild);
       }
       return bAdjusted;  
     }

    //----------------------------------------
    public isCrtExternalOnTheLefEdgeOfRef( refPercLeft : number, refPercTop  :  number,  refPercRight :  number, refPercBottom  : number,  
                                           crtPercLeft : number, crtPercTop  :  number,  crtPercRight :  number, crtPercBottom  : number) : boolean
    {
      //  |-------------------------------|------------------------
      //  |                               |
      //  |-------------------------------|
      //                                  |------------------------
      if (crtPercRight != refPercLeft)   
        return false;
      if (crtPercTop > refPercBottom)   
        return false;
      if (crtPercBottom < refPercTop)   
        return false;
      return true;
    }

    //----------------------------------------
    public isCrtExternalOnTheRightEdgeOfRef( refPercLeft : number, refPercTop  :  number, refPercRight :  number, refPercBottom  : number,  
                                             crtPercLeft : number, crtPercTop  :  number, crtPercRight :  number, crtPercBottom  : number) : boolean
    {
      if (crtPercLeft != refPercRight)   
        return false;
      if (crtPercTop > refPercBottom)   
        return false;
      if (crtPercBottom < refPercTop)   
        return false;
      return true;
    }

    //----------------------------------------
    public isCrtExternalOnTheTopEdgeOfRef( refPercLeft : number, refPercTop  :  number, refPercRight :  number, refPercBottom  : number,  
                                           crtPercLeft : number, crtPercTop  :  number, crtPercRight :  number, crtPercBottom  : number) : boolean
    {
      //  |-------------------------------|
      //  |                               |
      //  |-------------------------------|
      //  |                               |
      //  |-------------------------------|
      if (crtPercBottom != refPercTop)   
        return false;
      if (crtPercLeft > refPercRight)   
        return false;
      if (crtPercRight < refPercLeft)   
        return false;
      return true;
    }

    //----------------------------------------
    public isCrtExternalOnTheBottomEdgeOfRef( refPercLeft : number, refPercTop  :  number, refPercRight :  number, refPercBottom  : number,  
                                              crtPercLeft : number, crtPercTop  :  number, crtPercRight :  number, crtPercBottom  : number) : boolean
    {
      if (crtPercTop != refPercBottom)   
        return false;
      if (crtPercLeft > refPercRight)   
        return false;
      if (crtPercRight < refPercLeft)   
        return false;
      return true;
    }

    //----------------------------------
    public translateCrtRightEdge_nearby_RefLeftEdge(refLeftMinus1: number, crtChild: amPlaylistItem.am_coreservices.AE_PlaylistItem) : void
    {
      var crtChildLeft   = crtChild.getPrepareParams().getRenderParams().getParamContainerAdjustedPosSize().getContainerLeft();
      var crtChildRight  = crtChild.getPrepareParams().getRenderParams().getParamContainerAdjustedPosSize().getContainerRight();
      var crtChildTop    = crtChild.getPrepareParams().getRenderParams().getParamContainerAdjustedPosSize().getContainerTop();
      var crtChildBottom = crtChild.getPrepareParams().getRenderParams().getParamContainerAdjustedPosSize().getContainerBottom();

      var crtChildNewRight  = refLeftMinus1;
      var crtChildNewLeft   = crtChildNewRight - (crtChildRight - crtChildLeft);

      var crtChildNewTop    = crtChildTop;
      var crtChildNewBottom = crtChildBottom;

      crtChild.getPrepareParams().getRenderParams().getParamContainerAdjustedPosSize().setAllPosAndSizes
                                                    (crtChildNewLeft, crtChildNewTop, crtChildNewRight, crtChildNewBottom,  -1,-1,-1,-1);
    }

    //--------------------------------------
    public translateCrtLeftEdge_nearby_RefRightEdge(refRightPlus1: number, crtChild: amPlaylistItem.am_coreservices.AE_PlaylistItem) : void
    {
      var crtChildLeft   = crtChild.getPrepareParams().getRenderParams().getParamContainerAdjustedPosSize().getContainerLeft();
      var crtChildRight  = crtChild.getPrepareParams().getRenderParams().getParamContainerAdjustedPosSize().getContainerRight();
      var crtChildTop    = crtChild.getPrepareParams().getRenderParams().getParamContainerAdjustedPosSize().getContainerTop();
      var crtChildBottom = crtChild.getPrepareParams().getRenderParams().getParamContainerAdjustedPosSize().getContainerBottom();

      var crtChildNewLeft   = refRightPlus1; //crtChildLeft;
      var crtChildNewRight  = crtChildNewLeft  + (crtChildRight - crtChildLeft);

      var crtChildNewTop    = crtChildTop;
      var crtChildNewBottom = crtChildBottom;

      crtChild.getPrepareParams().getRenderParams().getParamContainerAdjustedPosSize().setAllPosAndSizes
                                                    (crtChildNewLeft, crtChildNewTop, crtChildNewRight, crtChildNewBottom,  -1,-1,-1,-1);
    }

    //----------------------------------
    public translateCrtBottomEdge_nearby_RefTopEdge(refTopMinus1: number, crtChild: amPlaylistItem.am_coreservices.AE_PlaylistItem) : void
    {
      var crtChildLeft   = crtChild.getPrepareParams().getRenderParams().getParamContainerAdjustedPosSize().getContainerLeft();
      var crtChildRight  = crtChild.getPrepareParams().getRenderParams().getParamContainerAdjustedPosSize().getContainerRight();
      var crtChildTop    = crtChild.getPrepareParams().getRenderParams().getParamContainerAdjustedPosSize().getContainerTop();
      var crtChildBottom = crtChild.getPrepareParams().getRenderParams().getParamContainerAdjustedPosSize().getContainerBottom();

      var crtChildNewLeft   = crtChildLeft;
      var crtChildNewRight  = crtChildRight;
      
      var crtChildNewBottom = refTopMinus1; //crtChildBottom;
      var crtChildNewTop    = crtChildNewBottom - (crtChildBottom - crtChildTop);

      crtChild.getPrepareParams().getRenderParams().getParamContainerAdjustedPosSize().setAllPosAndSizes
                                                    (crtChildNewLeft, crtChildNewTop, crtChildNewRight, crtChildNewBottom,  -1,-1,-1,-1);
    }

    //----------------------------------
    public translateCrtTopEdge_nearby_RefBottomEdge(refBottomPlus1: number, crtChild: amPlaylistItem.am_coreservices.AE_PlaylistItem) : void
    {
      var crtChildLeft   = crtChild.getPrepareParams().getRenderParams().getParamContainerAdjustedPosSize().getContainerLeft();
      var crtChildRight  = crtChild.getPrepareParams().getRenderParams().getParamContainerAdjustedPosSize().getContainerRight();
      var crtChildTop    = crtChild.getPrepareParams().getRenderParams().getParamContainerAdjustedPosSize().getContainerTop();
      var crtChildBottom = crtChild.getPrepareParams().getRenderParams().getParamContainerAdjustedPosSize().getContainerBottom();

      var crtChildNewLeft   = crtChildLeft;
      var crtChildNewRight  = crtChildRight;
      var crtChildNewTop    = refBottomPlus1;                                  
      var crtChildNewBottom = crtChildNewTop + (crtChildBottom - crtChildTop);

      crtChild.getPrepareParams().getRenderParams().getParamContainerAdjustedPosSize().setAllPosAndSizes
                                                    (crtChildNewLeft, crtChildNewTop, crtChildNewRight, crtChildNewBottom,  -1,-1,-1,-1);
    }


  }   
} 