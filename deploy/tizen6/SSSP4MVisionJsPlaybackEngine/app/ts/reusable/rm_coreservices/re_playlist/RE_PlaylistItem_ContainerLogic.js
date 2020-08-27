var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItemType", "../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_NextChildSelectionType", "../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_Logic"], function (require, exports, amPlaylistItemType, amNextChildSelectionType, rmPlaylistItemLogic) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_coreservices;
    (function (rm_coreservices) {
        var RE_PlaylistItem_ContainerLogic = /** @class */ (function (_super) {
            __extends(RE_PlaylistItem_ContainerLogic, _super);
            //==============
            function RE_PlaylistItem_ContainerLogic() {
                var _this = _super.call(this) || this;
                _this._hasARenderingRepresentation = false;
                _this._hasARenderingZone = false;
                _this._nextChildSelectionType = amNextChildSelectionType.am_coreservices.AE_NextChildSelectionType.NextChildSelectionType_OneAfterTheOther_NoLoop;
                //-- for single play
                _this._hasMultiplay = false;
                _this._isRandom = false;
                _this._random = null;
                _this._diffusion = null;
                //------------ new dynamics 
                _this.__crtSelectedChild = null;
                _this.__crtStartedChild = null;
                _this.__crtStartedChildren = null;
                _this.__crtNbChildrenChoosed = 0;
                _this.__nbMaxChildrenToChoose = 0;
                //------------ old dynamics
                _this._crtChildIdx = -1;
                _this._prevChildIdx = -1;
                _this._crtChild = null;
                _this._prevChild = null;
                return _this;
                //--- for multiplay play
                //this._crtChildrenIdx   = null;
                //this._prevChildrendIdx = null;
                //this._crtChildren      = null;
                //this._prevChildren     = null;
            }
            //==============
            RE_PlaylistItem_ContainerLogic.prototype.reset = function () {
                _super.prototype.reset.call(this);
                //------------ new dynamics 
                this.__crtSelectedChild = null;
                this.__crtStartedChild = null;
                this.cmd_clearStartedChildren();
                if (this._random != null) {
                    this._random.resetRandom();
                }
                this.__crtNbChildrenChoosed = 0;
                //----------------------- old version
                this._crtChildIdx = -1;
                this._prevChildIdx = -1;
                this._crtChild = null;
                this._prevChild = null;
            };
            //------------------
            RE_PlaylistItem_ContainerLogic.prototype.isContainer = function () {
                return true;
            };
            //================================
            // set get Random
            //===============================
            //------------------
            RE_PlaylistItem_ContainerLogic.prototype.cmd_getRandom = function () {
                return this._random;
            };
            //--------------------
            RE_PlaylistItem_ContainerLogic.prototype.cmd_setRandom = function (random) {
                this._random = random;
            };
            //===============================
            // accept child request to end
            //===============================
            RE_PlaylistItem_ContainerLogic.prototype.cmd_acceptChildRequestToEndParent = function (crtChildIdx, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                return true;
            };
            //======================
            RE_PlaylistItem_ContainerLogic.prototype.hasNoDurationAndAPlaylistParent = function (crtChildIdx, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                if (this._diff_duration != null)
                    return false;
                var aParent;
                aParent = this.getOwner().getParent();
                if (aParent == null)
                    return false;
                if (aParent.getPlaylistItemType() == amPlaylistItemType.am_coreservices.AE_PlaylistItemType.PlaylistItemType_Stream)
                    return true;
                if (aParent.getPlaylistItemType() == amPlaylistItemType.am_coreservices.AE_PlaylistItemType.PlaylistItemType_Playlist)
                    return true;
                //if (aParent.getPlaylistItemType() == amPlaylistItemType.am_coreservices.AE_PlaylistItemType.PlaylistItemType_PriorityPlaylist)
                //return true;
                return false;
            };
            //======================
            RE_PlaylistItem_ContainerLogic.prototype.isParent_aPlaylistStream = function (crtChildIdx, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                var aParent;
                aParent = this.getOwner().getParent();
                if (aParent == null)
                    return false;
                if (aParent.getPlaylistItemType() == amPlaylistItemType.am_coreservices.AE_PlaylistItemType.PlaylistItemType_Stream)
                    return true;
                return false;
            };
            //======================
            RE_PlaylistItem_ContainerLogic.prototype.hasTheSameChildNextToPlay = function (crtChildIdx, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                if (!this.hasNoDurationAndAPlaylistParent(crtChildIdx, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback))
                    return null;
                var aParent;
                aParent = this.getOwner().getParent();
                if (aParent == null)
                    return null;
                var containerLogic = aParent.getLogic();
                if (containerLogic.isParent_aPlaylistStream(crtChildIdx, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback))
                    return containerLogic.hasTheSameChildNextToPlay_InChannelPlaylist(crtChildIdx, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                return containerLogic.hasTheSameChildNextToPlay_InSecondaryPlaylist(crtChildIdx, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                ;
            };
            //======================
            RE_PlaylistItem_ContainerLogic.prototype.hasTheSameChildNextToPlay_InChannelPlaylist = function (crtChildIdx, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                var childrenList = this.getChildrenList();
                if (childrenList == null)
                    return null;
                var nbChildren = childrenList.length;
                if (nbChildren == 0)
                    return null;
                var a = 0;
                if (this.getOwner().getPlaylistItemId() == 68581) {
                    a = 1;
                }
                var refChild = childrenList[crtChildIdx];
                var refId = refChild.getPlaylistItemId();
                var nextChild = null;
                var nextChildIdx = crtChildIdx + 1;
                var refDate = new Date();
                var findChild = null;
                while (true) {
                    if (nextChildIdx >= nbChildren)
                        nextChildIdx = 0;
                    nextChild = childrenList[nextChildIdx];
                    if (nextChild.getPlaylistItemType() == amPlaylistItemType.am_coreservices.AE_PlaylistItemType.PlaylistItemType_FillRect) {
                        nextChildIdx++;
                        continue;
                    }
                    if (nextChild.getLogic().hasActiveRenderingDescendantsToPlayAndItself(refDate, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback)) {
                        if (refId == nextChild.getPlaylistItemId()) {
                            findChild = nextChild;
                            break;
                        }
                        else {
                            findChild = null;
                            break;
                        }
                    }
                    if (nextChildIdx == crtChildIdx) {
                        findChild = nextChild;
                        break;
                    }
                    nextChildIdx++;
                }
                if (findChild == null)
                    return null;
                return findChild;
            };
            //======================
            RE_PlaylistItem_ContainerLogic.prototype.hasTheSameChildNextToPlay_InSecondaryPlaylist = function (crtChildIdx, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                var childrenList = this.getChildrenList();
                if (childrenList == null)
                    return null;
                var nbChildren = childrenList.length;
                if (nbChildren == 0)
                    return null;
                if (crtChildIdx + 1 >= nbChildren)
                    return null;
                var refChild = childrenList[crtChildIdx];
                var refId = refChild.getPlaylistItemId();
                var nextChild = null;
                var nextChildIdx = crtChildIdx + 1;
                var refDate = new Date();
                var findChild = null;
                while (true) {
                    if (nextChildIdx >= nbChildren)
                        return null;
                    nextChild = childrenList[nextChildIdx];
                    if (nextChild.getPlaylistItemType() == amPlaylistItemType.am_coreservices.AE_PlaylistItemType.PlaylistItemType_FillRect) {
                        nextChildIdx++;
                        continue;
                    }
                    if (nextChild.getLogic().hasActiveRenderingDescendantsToPlayAndItself(refDate, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback)) {
                        if (refId == nextChild.getPlaylistItemId()) {
                            findChild = nextChild;
                            break;
                        }
                        else {
                            findChild = null;
                            break;
                        }
                    }
                    nextChildIdx++;
                }
                if (findChild == null)
                    return null;
                return findChild;
            };
            //================================
            // get crt/prevChild - getChildren
            //===============================
            RE_PlaylistItem_ContainerLogic.prototype.cmd_getNbChildren = function () {
                var childrenList = this.getChildrenList();
                if (childrenList == null)
                    return 0;
                var nbChildren = childrenList.length;
                if (nbChildren == 0)
                    return 0;
                return nbChildren;
            };
            //======================
            RE_PlaylistItem_ContainerLogic.prototype.hasChildren = function () {
                var childrenList = this.getChildrenList();
                if (childrenList == null)
                    return null;
                if (childrenList.length == 0)
                    return false;
                return true;
            };
            //---------------------------------------------------------------
            RE_PlaylistItem_ContainerLogic.prototype.cmd_childHasBiggerOrEqualPriority_thanOtherStartedChildren = function (refChild) {
                // Note: priority zero is the highest priority
                if (refChild)
                    return false;
                if (this.__crtStartedChild != null) {
                    if (this.__crtStartedChild.getLogic().getPriority() < refChild.getLogic().getPriority())
                        return false;
                }
                if (this.__crtStartedChildren == null)
                    return true;
                var childrenList = this.__crtStartedChildren;
                if (childrenList == null)
                    return true;
                if (childrenList.length == 0)
                    return false;
                for (var iCrtChildIdx = 0; iCrtChildIdx < childrenList.length; iCrtChildIdx++) {
                    if (childrenList[iCrtChildIdx] == null)
                        continue;
                    if (refChild == childrenList[iCrtChildIdx])
                        continue;
                    if (childrenList[iCrtChildIdx].getLogic().getPriority() < refChild.getLogic().getPriority())
                        return false;
                }
                return true;
            };
            //======================
            RE_PlaylistItem_ContainerLogic.prototype.getChildrenList = function () {
                return this._owner.getPlaylistItems();
            };
            //======================
            RE_PlaylistItem_ContainerLogic.prototype.getCrtChild = function () {
                return this._crtChild;
            };
            //======================
            RE_PlaylistItem_ContainerLogic.prototype.getPrevChild = function () {
                return this._prevChild;
            };
            //==============================
            //  external methods
            //==============================
            //======================
            RE_PlaylistItem_ContainerLogic.prototype.cmd_getNextChildSelectionType = function () {
                return this._nextChildSelectionType;
            };
            //======================
            RE_PlaylistItem_ContainerLogic.prototype.cmd_setNextChildSelectionType = function (nextChildSelectionType) {
                this._nextChildSelectionType = nextChildSelectionType;
            };
            //======================
            RE_PlaylistItem_ContainerLogic.prototype.cmd_hasMultiplay = function () {
                return this._hasMultiplay;
            };
            //======================
            RE_PlaylistItem_ContainerLogic.prototype.cmd_setHasMultiplay = function (hasMultiplay) {
                this._hasMultiplay = hasMultiplay;
            };
            //======================
            RE_PlaylistItem_ContainerLogic.prototype.cmd_getChildFromIndex = function (crtChildIdx) {
                if (crtChildIdx < 0)
                    return null;
                var childrenList = this.getChildrenList();
                if (childrenList == null)
                    return null;
                var nbChildren = childrenList.length;
                if (crtChildIdx >= nbChildren)
                    return null;
                return childrenList[crtChildIdx];
            };
            //---------------------------
            RE_PlaylistItem_ContainerLogic.prototype.cmd_selectNextChildToPlay = function (crtChildIdx, nextChildSelectionType, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                switch (nextChildSelectionType) {
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
            };
            //======================================
            //  One after the other 
            //======================================
            //======================
            RE_PlaylistItem_ContainerLogic.prototype.cmd_selectNextChild_OneAfterTheOther_NoLoop = function (crtChildIdx, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                var childrenList = this.getChildrenList();
                if (childrenList == null)
                    return null;
                var nbChildren = childrenList.length;
                if (nbChildren == 0)
                    return null;
                if (crtChildIdx + 1 >= nbChildren)
                    return null;
                return childrenList[crtChildIdx + 1];
            };
            //======================
            RE_PlaylistItem_ContainerLogic.prototype.cmd_selectNextChild_OneAfterTheOther_NoLoop_WithDiffusion = function (crtChildIdx, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                var childrenList = this.getChildrenList();
                if (childrenList == null)
                    return null;
                var nbChildren = childrenList.length;
                if (nbChildren == 0)
                    return null;
                if (crtChildIdx + 1 >= nbChildren)
                    return null;
                var a = 0;
                if (this.getOwner().getPlaylistItemId() == 68581) {
                    a = 1;
                }
                var nextChild = null;
                var nextChildIdx = crtChildIdx + 1;
                var nextNextChild = null;
                var nextNextChildIdx = nextChildIdx + 1;
                var refDate = new Date();
                while (true) {
                    if (nextChildIdx >= nbChildren)
                        return null;
                    nextChild = childrenList[nextChildIdx];
                    //--------------------------------------------
                    nextNextChild = null;
                    if (nextChild.getPlaylistItemType() == amPlaylistItemType.am_coreservices.AE_PlaylistItemType.PlaylistItemType_FillRect) {
                        var bVisible = nextChild.getPrepareParams().getRenderParams().isVisible();
                        if (bVisible == false) {
                            if (nextNextChildIdx < nbChildren) {
                                nextNextChild = childrenList[nextNextChildIdx];
                                if (nextNextChild.getLogic().hasActiveRenderingDescendantsToPlayAndItself(refDate, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback)) {
                                    break;
                                }
                                nextChildIdx++;
                                nextNextChildIdx++;
                                continue;
                            }
                        }
                    }
                    //------------------
                    if (nextChild.getLogic().hasActiveRenderingDescendantsToPlayAndItself(refDate, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback)) {
                        break;
                    }
                    nextChildIdx++;
                    nextNextChildIdx++;
                }
                return nextChild;
            };
            //======================
            RE_PlaylistItem_ContainerLogic.prototype.cmd_selectNextChild_OneAfterTheOther_Loop = function (crtChildIdx, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                var childrenList = this.getChildrenList();
                if (childrenList == null)
                    return null;
                var nbChildren = childrenList.length;
                if (nbChildren == 0)
                    return null;
                var nextChildIdx = crtChildIdx + 1;
                if (nextChildIdx >= nbChildren)
                    nextChildIdx = 0;
                return childrenList[nextChildIdx];
            };
            //======================
            RE_PlaylistItem_ContainerLogic.prototype.cmd_selectNextChild_OneAfterTheOther_Loop_WithDiffusion = function (crtChildIdx, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                var childrenList = this.getChildrenList();
                if (childrenList == null)
                    return null;
                var nbChildren = childrenList.length;
                if (nbChildren == 0)
                    return null;
                if (crtChildIdx + 1 >= nbChildren)
                    return null;
                var nextChild = null;
                var nextChildIdx = crtChildIdx + 1;
                var refDate = new Date();
                while (true) {
                    if (nextChildIdx >= nbChildren)
                        nextChildIdx = 0;
                    nextChild = childrenList[nextChildIdx];
                    if (nextChild.getLogic().hasActiveRenderingDescendantsToPlayAndItself(refDate, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback)) {
                        break;
                    }
                    if (nextChildIdx == crtChildIdx)
                        return null;
                    nextChildIdx++;
                }
                return nextChild;
            };
            //======================================
            //  Random 
            //======================================
            //======================
            RE_PlaylistItem_ContainerLogic.prototype.cmd_selectNextChild_Random_NoLoop = function (crtChildIdx, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                var childrenList = this.getChildrenList();
                if (childrenList == null)
                    return null;
                var nbChildren = childrenList.length;
                if (nbChildren == 0)
                    return null;
                if (this._random == null)
                    return null;
                var nextChildIx = this._random.getRandom();
                if (nextChildIx < 0)
                    return null;
                if (nextChildIx >= nbChildren)
                    return null;
                return childrenList[crtChildIdx];
            };
            //======================
            RE_PlaylistItem_ContainerLogic.prototype.cmd_selectNextChild_Ramdom_NoLoop_WithDiffusion = function (crtChildIdx, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                var childrenList = this.getChildrenList();
                if (childrenList == null)
                    return null;
                var nbChildren = childrenList.length;
                if (nbChildren == 0)
                    return null;
                if (this._random == null)
                    return null;
                var nextChild = null;
                var nextChildIdx = this._random.getRandom();
                var refDate = new Date();
                while (true) {
                    if (nextChildIdx == -1)
                        return null;
                    nextChild = childrenList[nextChildIdx];
                    if (nextChild.getLogic().hasActiveRenderingDescendantsToPlayAndItself(refDate, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback)) {
                        break;
                    }
                    nextChildIdx = this._random.getRandom();
                }
                return nextChild;
            };
            //======================
            RE_PlaylistItem_ContainerLogic.prototype.cmd_selectNextChild_Random_Loop = function (crtChildIdx, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                var childrenList = this.getChildrenList();
                if (childrenList == null)
                    return null;
                var nbChildren = childrenList.length;
                if (nbChildren == 0)
                    return null;
                if (this._random == null)
                    return null;
                var nextChildIx = this._random.getRandom();
                if (nextChildIx < 0) {
                    this._random.resetRandom();
                    //cum  ---> trebuie pus ?
                    nextChildIx = this._random.getRandom();
                    if (nextChildIx < 0)
                        return null;
                }
                if (nextChildIx >= nbChildren)
                    return null;
                return childrenList[nextChildIx];
            };
            //======================
            RE_PlaylistItem_ContainerLogic.prototype.cmd_selectNextChild_Random_Loop_WithDiffusion = function (crtChildIdx, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                var childrenList = this.getChildrenList();
                if (childrenList == null)
                    return null;
                var nbChildren = childrenList.length;
                if (nbChildren == 0)
                    return null;
                if (this._random == null)
                    return null;
                var nextChild = null;
                var nextChildIdx = -1;
                var refChildIdx = -1;
                var refDate = new Date();
                var isFirstTime = true;
                while (true) {
                    nextChildIdx = this._random.getRandom();
                    if (nextChildIdx < 0)
                        this._random.resetRandom();
                    if (nextChildIdx >= nbChildren)
                        return null;
                    nextChild = childrenList[nextChildIdx];
                    //------------------------------------------
                    if (nextChild.getLogic().hasActiveRenderingDescendantsToPlayAndItself(refDate, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback)) {
                        break;
                    }
                    //----------------------- exit test
                    if (isFirstTime) {
                        isFirstTime = false;
                        refChildIdx = nextChildIdx;
                    }
                    else {
                        if (nextChildIdx == refChildIdx) // end loop no selection
                            return null;
                    }
                    //-----------------------  
                }
                return nextChild;
            };
            //========================================
            RE_PlaylistItem_ContainerLogic.prototype.cmd_selectNextChild_usingChildAddressFromEvent = function (crtChildIdx, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                var childIdx = this.getChildIdx_fromAddressIdx(event.getTargetAddress(), event.getCrtTargetIdx());
                if (childIdx <= 0)
                    return null;
                var childrenList = this.getChildrenList();
                if (childrenList == null)
                    return null;
                var nbChildren = childrenList.length;
                if (nbChildren == 0)
                    return null;
                if (childIdx >= nbChildren)
                    return null;
                return childrenList[childIdx];
            };
            //======================
            RE_PlaylistItem_ContainerLogic.prototype.cmd_selectNextChild_Select_fromTheBegining_ByPriority = function (crtChildIdx, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                var childrenList = this.getChildrenList();
                if (childrenList == null)
                    return null;
                var nbChildren = childrenList.length;
                if (nbChildren == 0)
                    return null;
                var nextChild = null;
                var crtChildIdxFromBeg = 0;
                var refDate = new Date();
                while (true) {
                    if (crtChildIdxFromBeg >= nbChildren)
                        return null;
                    nextChild = childrenList[crtChildIdxFromBeg];
                    if (nextChild.getLogic().hasActiveRenderingDescendantsToPlayAndItself(refDate, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback)) {
                        break;
                    }
                    crtChildIdxFromBeg++;
                }
                return nextChild;
            };
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
            RE_PlaylistItem_ContainerLogic.prototype.getRealTagRandom = function () {
                return null;
            };
            //======================
            RE_PlaylistItem_ContainerLogic.prototype.cmd_selectNextChild_ChooseRandom_OnlyOne_ByTagId = function (crtChildIdx, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                var childrenList = this.getChildrenList();
                if (childrenList == null)
                    return null;
                var nbChildren = childrenList.length;
                if (nbChildren == 0)
                    return null;
                if (this.__crtNbChildrenChoosed + 1 > this.__nbMaxChildrenToChoose)
                    return null;
                this.__crtNbChildrenChoosed++;
                var randomByTagId = this.getRealTagRandom(); //this.getRandomByTagId(crtChildIdx, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);  
                if (randomByTagId == null)
                    return null;
                var nextChild = null;
                var nextChildIdx = -1;
                var nextNextChild = null;
                var nextNextChildIdx = -1;
                var refChildIdx = -1;
                var refDate = new Date();
                var isFirstTime = true;
                while (true) {
                    nextChildIdx = randomByTagId.getRandom();
                    if (nextChildIdx < 0)
                        return null;
                    /*
                    if (nextChildIdx < 0)
                    {
                      randomByTagId.resetRandom();
                      nextChildIdx = randomByTagId.getRandom();
                    }*/
                    if (nextChildIdx >= nbChildren)
                        return null;
                    nextChild = childrenList[nextChildIdx];
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
                    if (nextChild.getLogic().hasActiveRenderingDescendantsToPlayAndItself(refDate, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback)) {
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
            };
            //========================================
            //======================================
            //  hasActiveRenderingDescendantsToPlayAndItself
            //======================================
            //======================
            RE_PlaylistItem_ContainerLogic.prototype.hasActiveRenderingDescendantsToPlayAndItself = function (refDate, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                if (this.isDisable(refDate, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback))
                    return false;
                if (this.hasAtLeastOneAncestorDisable(refDate, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback))
                    return false;
                if (this._hasARenderingRepresentation)
                    return true;
                var childrenList = this.getChildrenList();
                if (childrenList == null)
                    return false;
                var nbChildren = childrenList.length;
                if (nbChildren == 0)
                    return false;
                var hasGraphicChildToPlay = false;
                var crtChild = null;
                for (var childIdx = 0; childIdx < nbChildren; childIdx++) {
                    crtChild = childrenList[childIdx];
                    hasGraphicChildToPlay = crtChild.getLogic().hasActiveRenderingDescendantsToPlayAndItself(refDate, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                    if (hasGraphicChildToPlay)
                        return true;
                }
                return false;
            };
            //======================
            RE_PlaylistItem_ContainerLogic.prototype.setAncestorThatMustCreateARenderingZone = function (error, context, callback) {
                var pAncestorWithRenderingZone = null;
                if (this._hasARenderingRepresentation) {
                    pAncestorWithRenderingZone = this.getFirstParentWithARenderingZone();
                    if (pAncestorWithRenderingZone != null)
                        pAncestorWithRenderingZone.getLogic().setMustCreateARenderingZone(true);
                }
                var childrenList = this.getChildrenList();
                if (childrenList == null)
                    return false;
                var nbChildren = childrenList.length;
                if (nbChildren == 0)
                    return false;
                var hasGraphicChildToPlay = false;
                var crtChild = null;
                for (var childIdx = 0; childIdx < nbChildren; childIdx++) {
                    crtChild = childrenList[childIdx];
                    if (crtChild == null)
                        continue;
                    if (crtChild.getLogic().hasARenderingRepresentation()) {
                        pAncestorWithRenderingZone = this.getFirstParentWithARenderingZone();
                        if (pAncestorWithRenderingZone != null)
                            pAncestorWithRenderingZone.getLogic().setMustCreateARenderingZone(true);
                    }
                    crtChild.getLogic().setAncestorThatMustCreateARenderingZone(error, context, callback);
                }
            };
            //-----------------------------------                           
            RE_PlaylistItem_ContainerLogic.prototype.cmd_setCrtSelectedChild = function (crtSelectedChild) {
                this.__crtSelectedChild = crtSelectedChild;
            };
            //-----------------------------------                           
            RE_PlaylistItem_ContainerLogic.prototype.cmd_getCrtSelectedChild = function () {
                return this.__crtSelectedChild;
            };
            //-----------------------------------                           
            RE_PlaylistItem_ContainerLogic.prototype.cmd_setCrtStartedChild = function (crtStartedChild) {
                this.__crtStartedChild = crtStartedChild;
            };
            //-----------------------------------                           
            RE_PlaylistItem_ContainerLogic.prototype.cmd_getCrtStartedChild = function () {
                return this.__crtStartedChild;
            };
            //-----------------------------------                           
            RE_PlaylistItem_ContainerLogic.prototype.cmd_addNewStartedChild = function (crtStartedChild) {
                if (this.__crtStartedChildren == null)
                    this.__crtStartedChildren = new Array();
                this.__crtStartedChildren.push(crtStartedChild);
            };
            //-----------------------------------                           
            RE_PlaylistItem_ContainerLogic.prototype.cmd_getStartedChildren = function () {
                return this.__crtStartedChildren;
            };
            //-----------------------------------                           
            RE_PlaylistItem_ContainerLogic.prototype.cmd_clearStartedChildren = function () {
                if (this.__crtStartedChildren == null)
                    return;
                while (this.__crtStartedChildren.length) {
                    this.__crtStartedChildren.pop();
                }
            };
            //-----------------------------------                           
            RE_PlaylistItem_ContainerLogic.prototype.cmd_selectNextStartedChild = function (crtChildIdx, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                if (!this.cmd_hasMultiplay()) {
                    if (crtChildIdx == -1)
                        return this.__crtStartedChild;
                    return null;
                }
                var childrenList = this.__crtStartedChildren;
                if (childrenList == null)
                    return null;
                var nbChildren = childrenList.length;
                if (nbChildren == 0)
                    return null;
                if (crtChildIdx + 1 >= nbChildren)
                    return null;
                return childrenList[crtChildIdx + 1];
            };
            //==============================
            // select next child algorithms
            //==============================
            //======================
            RE_PlaylistItem_ContainerLogic.prototype.selectNextChildToAbortOrEnd = function (nextChildSelectionType, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                //------------------------- single play
                if (!this._hasMultiplay)
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
            };
            //======================
            RE_PlaylistItem_ContainerLogic.prototype.selectNextChildToPlay = function (nextChildSelectionType, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                switch (nextChildSelectionType) {
                    case amNextChildSelectionType.am_coreservices.AE_NextChildSelectionType.NextChildSelectionType_OneAfterTheOther_NoLoop:
                        return this.selectNextChild_OneAfterTheOther_NoLoop(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                    case amNextChildSelectionType.am_coreservices.AE_NextChildSelectionType.NextChildSelectionType_OneAfterTheOther_Loop:
                        return this.selectNextChild_OneAfterTheOther_Loop(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                    case amNextChildSelectionType.am_coreservices.AE_NextChildSelectionType.NextChildSelectionType_Random_usingTagRules:
                        return this.selectNextChild_Random_usingTagRules(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                    case amNextChildSelectionType.am_coreservices.AE_NextChildSelectionType.NextChildSelectionType_Select_usingChildAddressFromEvent:
                        return this.selectNextChild_usingChildAddressFromEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                    case amNextChildSelectionType.am_coreservices.AE_NextChildSelectionType.NextChildSelectionType_Select_fromTheBegining_ByPriority:
                        return this.selectNextChild_usingChildAddressFromEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                    default:
                        break;
                }
                return null;
            };
            //======================
            RE_PlaylistItem_ContainerLogic.prototype.selectNextChild_OneAfterTheOther_NoLoop = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                var childrenList = this.getChildrenList();
                if (childrenList == null)
                    return null;
                var nbChildren = childrenList.length;
                if (nbChildren == 0)
                    return null;
                if (this._crtChildIdx + 1 >= nbChildren)
                    return null;
                this._prevChildIdx = this._crtChildIdx;
                this._prevChild = this._crtChild;
                this._crtChildIdx++;
                this._crtChild = childrenList[this._crtChildIdx];
                return this._crtChild;
            };
            //======================
            RE_PlaylistItem_ContainerLogic.prototype.selectNextChild_OneAfterTheOther_Loop = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                var childrenList = this.getChildrenList();
                if (childrenList == null)
                    return null;
                var nbChildren = childrenList.length;
                if (nbChildren == 0)
                    return null;
                this._prevChildIdx = this._crtChildIdx;
                this._crtChildIdx++;
                if (this._crtChildIdx >= nbChildren)
                    this._crtChildIdx = 0;
                this._prevChildIdx = this._crtChildIdx;
                this._prevChild = this._crtChild;
                this._crtChild = childrenList[this._crtChildIdx];
                return this._crtChild;
            };
            //======================
            RE_PlaylistItem_ContainerLogic.prototype.getChildIdx_fromAddressIdx = function (childAddress, lastAddressIdx) {
                if (childAddress == null)
                    return null;
                var childAddressIdx = lastAddressIdx;
                if (childAddressIdx < 0)
                    return null;
                if (childAddressIdx >= childAddress.length)
                    return null;
                var childIdx = childAddress[childAddressIdx];
                return childIdx;
            };
            //======================
            RE_PlaylistItem_ContainerLogic.prototype.selectNextChild_usingChildAddressFromEvent = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                var childIdx = this.getChildIdx_fromAddressIdx(event.getTargetAddress(), event.getCrtTargetIdx());
                var childrenList = this.getChildrenList();
                if (childrenList == null)
                    return null;
                var nbChildren = childrenList.length;
                if (nbChildren == 0)
                    return null;
                if (childIdx >= nbChildren)
                    return null;
                this._prevChildIdx = this._crtChildIdx;
                this._prevChild = this._crtChild;
                this._crtChildIdx = childIdx;
                this._crtChild = childrenList[this._crtChildIdx];
                return this._crtChild;
            };
            //======================
            RE_PlaylistItem_ContainerLogic.prototype.selectNextChild_Random_usingTagRules = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                return null; // logic used by the RealTag item.
            };
            //======================
            RE_PlaylistItem_ContainerLogic.prototype.scheduleNextChildrenToPlay = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
            };
            //=============================================
            //  adjust coordinates - resize
            //==============================================
            //======================
            RE_PlaylistItem_ContainerLogic.prototype.forAllChildren_adjustChildrenCoordinates_AlignNearbyEdges = function (error, context, callback) {
                var childrenList = this.getChildrenList();
                if (childrenList == null)
                    return 1;
                var nbChildren = childrenList.length;
                if (nbChildren == 0)
                    return 1;
                this.adjustChildrenCoordinates_AlignNearbyEdges(error, context, callback);
                var crtChild = null;
                for (var childIdx = 0; childIdx < nbChildren; childIdx++) {
                    crtChild = childrenList[childIdx];
                    if (crtChild == null)
                        continue;
                    crtChild.getLogic().forAllChildren_adjustChildrenCoordinates_AlignNearbyEdges(error, context, callback);
                }
            };
            //-------------------------------------------------------
            RE_PlaylistItem_ContainerLogic.prototype.forAllChildren_setSizes_fromAdjustedContainer = function () {
                var childrenList = this.getChildrenList();
                if (childrenList == null)
                    return 1;
                var nbChildren = childrenList.length;
                if (nbChildren == 0)
                    return 1;
                var crtChild = null;
                for (var childIdx = 0; childIdx < nbChildren; childIdx++) {
                    crtChild = childrenList[childIdx];
                    if (crtChild == null)
                        continue;
                    crtChild.getLogic().setSizes_fromAdjustedContainer();
                    crtChild.getLogic().forAllChildren_setSizes_fromAdjustedContainer();
                }
            };
            //-------------------------------------
            RE_PlaylistItem_ContainerLogic.prototype.adjustChildrenCoordinates_AlignNearbyEdges = function (error, context, callback) {
                var childrenList = this.getChildrenList();
                if (childrenList == null)
                    return 1;
                var nbChildren = childrenList.length;
                if (nbChildren <= 1)
                    return 1;
                var refChild = null;
                var crtChild = null;
                for (var refIdx = 0; refIdx < nbChildren; refIdx++) {
                    refChild = childrenList[refIdx];
                    if (refChild == null)
                        continue;
                    for (var crtIdx = refIdx + 1; crtIdx < nbChildren; crtIdx++) {
                        crtChild = childrenList[crtIdx];
                        if (crtChild == null)
                            continue;
                        var bAdjusted = this.adjustChildCoordinates_AlignNearbyEdges(refChild, crtChild, error, context, callback);
                        if (bAdjusted) {
                            crtChild.getLogic().forAllChildren_setSizes_fromAdjustedContainer();
                        }
                    }
                }
                return 0;
            };
            //-------------------------------------
            RE_PlaylistItem_ContainerLogic.prototype.adjustChildCoordinates_AlignNearbyEdges = function (refChild, crtChild, error, context, callback) {
                if (!refChild.getLogic().hasARenderingZone())
                    return 0;
                if (!crtChild.getLogic().hasARenderingZone())
                    return 0;
                if (refChild.getPrepareParams() == null)
                    return 0;
                if (refChild.getPrepareParams().getRenderParams() == null)
                    return 0;
                if (refChild.getPrepareParams().getRenderParams().getParamContainerAdjustedPosSize() == null)
                    return 0;
                if (crtChild.getPrepareParams() == null)
                    return 0;
                if (crtChild.getPrepareParams().getRenderParams() == null)
                    return 0;
                if (crtChild.getPrepareParams().getRenderParams().getParamContainerAdjustedPosSize() == null)
                    return 0;
                var refChildPostAndSize = refChild.getPrepareParams().getRenderParams().getParamContainerAdjustedPosSize();
                var crtChildPostAndSize = crtChild.getPrepareParams().getRenderParams().getParamContainerAdjustedPosSize();
                var refPercLeft = refChildPostAndSize.getContainerOrigPercentLeft();
                var refPercRight = refChildPostAndSize.getContainerOrigPercentRight();
                var refPercTop = refChildPostAndSize.getContainerOrigPercentTop();
                var refPercBottom = refChildPostAndSize.getContainerOrigPercentBottom();
                var refLeft = refChildPostAndSize.getContainerLeft();
                var refRight = refChildPostAndSize.getContainerRight();
                var refTop = refChildPostAndSize.getContainerTop();
                var refBottom = refChildPostAndSize.getContainerBottom();
                var crtPercLeft = crtChildPostAndSize.getContainerOrigPercentLeft();
                var crtPercRight = crtChildPostAndSize.getContainerOrigPercentRight();
                var crtPercTop = crtChildPostAndSize.getContainerOrigPercentTop();
                var crtPercBottom = crtChildPostAndSize.getContainerOrigPercentBottom();
                var crtLeft = crtChildPostAndSize.getContainerLeft();
                var crtRight = crtChildPostAndSize.getContainerRight();
                var crtTop = crtChildPostAndSize.getContainerTop();
                var crtBottom = crtChildPostAndSize.getContainerBottom();
                var offset = 2;
                var bAdjusted = 0;
                if (this.isCrtExternalOnTheLefEdgeOfRef(refPercLeft, refPercTop, refPercRight, refPercBottom, crtPercLeft, crtPercTop, crtPercRight, crtPercBottom)) {
                    bAdjusted = 1;
                    this.translateCrtRightEdge_nearby_RefLeftEdge(refLeft - offset, crtChild);
                }
                if (this.isCrtExternalOnTheRightEdgeOfRef(refPercLeft, refPercTop, refPercRight, refPercBottom, crtPercLeft, crtPercTop, crtPercRight, crtPercBottom)) {
                    bAdjusted = 1;
                    this.translateCrtLeftEdge_nearby_RefRightEdge(refRight + offset, crtChild);
                }
                if (this.isCrtExternalOnTheTopEdgeOfRef(refPercLeft, refPercTop, refPercRight, refPercBottom, crtPercLeft, crtPercTop, crtPercRight, crtPercBottom)) {
                    bAdjusted = 1;
                    this.translateCrtBottomEdge_nearby_RefTopEdge(refTop - offset, crtChild);
                }
                if (this.isCrtExternalOnTheBottomEdgeOfRef(refPercLeft, refPercTop, refPercRight, refPercBottom, crtPercLeft, crtPercTop, crtPercRight, crtPercBottom)) {
                    bAdjusted = 1;
                    this.translateCrtTopEdge_nearby_RefBottomEdge(refBottom + offset, crtChild);
                }
                return bAdjusted;
            };
            //----------------------------------------
            RE_PlaylistItem_ContainerLogic.prototype.isCrtExternalOnTheLefEdgeOfRef = function (refPercLeft, refPercTop, refPercRight, refPercBottom, crtPercLeft, crtPercTop, crtPercRight, crtPercBottom) {
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
            };
            //----------------------------------------
            RE_PlaylistItem_ContainerLogic.prototype.isCrtExternalOnTheRightEdgeOfRef = function (refPercLeft, refPercTop, refPercRight, refPercBottom, crtPercLeft, crtPercTop, crtPercRight, crtPercBottom) {
                if (crtPercLeft != refPercRight)
                    return false;
                if (crtPercTop > refPercBottom)
                    return false;
                if (crtPercBottom < refPercTop)
                    return false;
                return true;
            };
            //----------------------------------------
            RE_PlaylistItem_ContainerLogic.prototype.isCrtExternalOnTheTopEdgeOfRef = function (refPercLeft, refPercTop, refPercRight, refPercBottom, crtPercLeft, crtPercTop, crtPercRight, crtPercBottom) {
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
            };
            //----------------------------------------
            RE_PlaylistItem_ContainerLogic.prototype.isCrtExternalOnTheBottomEdgeOfRef = function (refPercLeft, refPercTop, refPercRight, refPercBottom, crtPercLeft, crtPercTop, crtPercRight, crtPercBottom) {
                if (crtPercTop != refPercBottom)
                    return false;
                if (crtPercLeft > refPercRight)
                    return false;
                if (crtPercRight < refPercLeft)
                    return false;
                return true;
            };
            //----------------------------------
            RE_PlaylistItem_ContainerLogic.prototype.translateCrtRightEdge_nearby_RefLeftEdge = function (refLeftMinus1, crtChild) {
                var crtChildLeft = crtChild.getPrepareParams().getRenderParams().getParamContainerAdjustedPosSize().getContainerLeft();
                var crtChildRight = crtChild.getPrepareParams().getRenderParams().getParamContainerAdjustedPosSize().getContainerRight();
                var crtChildTop = crtChild.getPrepareParams().getRenderParams().getParamContainerAdjustedPosSize().getContainerTop();
                var crtChildBottom = crtChild.getPrepareParams().getRenderParams().getParamContainerAdjustedPosSize().getContainerBottom();
                var crtChildNewRight = refLeftMinus1;
                var crtChildNewLeft = crtChildNewRight - (crtChildRight - crtChildLeft);
                var crtChildNewTop = crtChildTop;
                var crtChildNewBottom = crtChildBottom;
                crtChild.getPrepareParams().getRenderParams().getParamContainerAdjustedPosSize().setAllPosAndSizes(crtChildNewLeft, crtChildNewTop, crtChildNewRight, crtChildNewBottom, -1, -1, -1, -1);
            };
            //--------------------------------------
            RE_PlaylistItem_ContainerLogic.prototype.translateCrtLeftEdge_nearby_RefRightEdge = function (refRightPlus1, crtChild) {
                var crtChildLeft = crtChild.getPrepareParams().getRenderParams().getParamContainerAdjustedPosSize().getContainerLeft();
                var crtChildRight = crtChild.getPrepareParams().getRenderParams().getParamContainerAdjustedPosSize().getContainerRight();
                var crtChildTop = crtChild.getPrepareParams().getRenderParams().getParamContainerAdjustedPosSize().getContainerTop();
                var crtChildBottom = crtChild.getPrepareParams().getRenderParams().getParamContainerAdjustedPosSize().getContainerBottom();
                var crtChildNewLeft = refRightPlus1; //crtChildLeft;
                var crtChildNewRight = crtChildNewLeft + (crtChildRight - crtChildLeft);
                var crtChildNewTop = crtChildTop;
                var crtChildNewBottom = crtChildBottom;
                crtChild.getPrepareParams().getRenderParams().getParamContainerAdjustedPosSize().setAllPosAndSizes(crtChildNewLeft, crtChildNewTop, crtChildNewRight, crtChildNewBottom, -1, -1, -1, -1);
            };
            //----------------------------------
            RE_PlaylistItem_ContainerLogic.prototype.translateCrtBottomEdge_nearby_RefTopEdge = function (refTopMinus1, crtChild) {
                var crtChildLeft = crtChild.getPrepareParams().getRenderParams().getParamContainerAdjustedPosSize().getContainerLeft();
                var crtChildRight = crtChild.getPrepareParams().getRenderParams().getParamContainerAdjustedPosSize().getContainerRight();
                var crtChildTop = crtChild.getPrepareParams().getRenderParams().getParamContainerAdjustedPosSize().getContainerTop();
                var crtChildBottom = crtChild.getPrepareParams().getRenderParams().getParamContainerAdjustedPosSize().getContainerBottom();
                var crtChildNewLeft = crtChildLeft;
                var crtChildNewRight = crtChildRight;
                var crtChildNewBottom = refTopMinus1; //crtChildBottom;
                var crtChildNewTop = crtChildNewBottom - (crtChildBottom - crtChildTop);
                crtChild.getPrepareParams().getRenderParams().getParamContainerAdjustedPosSize().setAllPosAndSizes(crtChildNewLeft, crtChildNewTop, crtChildNewRight, crtChildNewBottom, -1, -1, -1, -1);
            };
            //----------------------------------
            RE_PlaylistItem_ContainerLogic.prototype.translateCrtTopEdge_nearby_RefBottomEdge = function (refBottomPlus1, crtChild) {
                var crtChildLeft = crtChild.getPrepareParams().getRenderParams().getParamContainerAdjustedPosSize().getContainerLeft();
                var crtChildRight = crtChild.getPrepareParams().getRenderParams().getParamContainerAdjustedPosSize().getContainerRight();
                var crtChildTop = crtChild.getPrepareParams().getRenderParams().getParamContainerAdjustedPosSize().getContainerTop();
                var crtChildBottom = crtChild.getPrepareParams().getRenderParams().getParamContainerAdjustedPosSize().getContainerBottom();
                var crtChildNewLeft = crtChildLeft;
                var crtChildNewRight = crtChildRight;
                var crtChildNewTop = refBottomPlus1;
                var crtChildNewBottom = crtChildNewTop + (crtChildBottom - crtChildTop);
                crtChild.getPrepareParams().getRenderParams().getParamContainerAdjustedPosSize().setAllPosAndSizes(crtChildNewLeft, crtChildNewTop, crtChildNewRight, crtChildNewBottom, -1, -1, -1, -1);
            };
            return RE_PlaylistItem_ContainerLogic;
        }(rmPlaylistItemLogic.rm_coreservices.RE_PlaylistItem_Logic));
        rm_coreservices.RE_PlaylistItem_ContainerLogic = RE_PlaylistItem_ContainerLogic;
    })(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
});
//# sourceMappingURL=RE_PlaylistItem_ContainerLogic.js.map