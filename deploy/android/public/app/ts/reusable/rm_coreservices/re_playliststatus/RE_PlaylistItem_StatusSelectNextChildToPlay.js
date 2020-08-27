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
define(["require", "exports", "../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItemStatusType", "../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItemEventType", "../../../../../app/ts/abstract/am_general/ae_event/AE_EventRequestType", "../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_Status"], function (require, exports, amPlaylistItemStatusType, amPlaylistItemEventType, amGeneralEventRequestType, rmPlaylistItemStatus) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_coreservices;
    (function (rm_coreservices) {
        var RE_PlaylistItem_StatusSelectNextChildToPlay = /** @class */ (function (_super) {
            __extends(RE_PlaylistItem_StatusSelectNextChildToPlay, _super);
            //_bAtLeastOneChildInError : boolean;
            //_bAtLeastOneChildDisable : boolean;
            //_bAtLeastOneChildEnded   : boolean;
            //----------------
            function RE_PlaylistItem_StatusSelectNextChildToPlay() {
                var _this = _super.call(this) || this;
                _this._statusName = "SELECT-NEXT-CHILD_TO_PLAY";
                _this._transitionTo_StatusRequestToPlay_or_Similar = null;
                _this._transitionTo_StatusError = null;
                _this._transitionTo_StatusEnd = null;
                _this._transitionTo_StatusRequestToAbort = null;
                _this._transitionTo_StatusRequestToEnd = null;
                _this._lastSelectedChildIdx = -1;
                _this._lastSelectedChild = null;
                _this._bAtLeastOneChildSelected = false;
                return _this;
            }
            //------------------------------
            RE_PlaylistItem_StatusSelectNextChildToPlay.prototype.injectDependencies = function (aSrvContainer, aSrvLocator, aSrvLog, error) {
                _super.prototype.injectDependencies.call(this, aSrvContainer, aSrvLocator, aSrvLog, error);
                this._transitionTo_StatusRequestToPlay_or_Similar = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemTransition(error);
                this._transitionTo_StatusError = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemTransition(error);
                this._transitionTo_StatusEnd = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemTransition(error);
                this._transitionTo_StatusRequestToAbort = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemTransition(error);
                this._transitionTo_StatusRequestToEnd = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemTransition(error);
                return 0;
            };
            //-----------------------------
            RE_PlaylistItem_StatusSelectNextChildToPlay.prototype.reset = function () {
                this._lastSelectedChildIdx = -1;
                this._lastSelectedChild = null;
                this._bAtLeastOneChildSelected = false;
            };
            //======================
            RE_PlaylistItem_StatusSelectNextChildToPlay.prototype.passToMe = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                //---
                if (this.getContainerDiagram() == null) {
                    this._transitionTo_StatusRequestToEnd.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                    return;
                }
                this.getDiagram().setStatusCode(amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_SelectNextChildToPlay);
                //---- specific actions
                this.reset();
                this.requestNextChildToSelect(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                //---------- no child to play - pss to status End
                if (this._lastSelectedChild == null) {
                    this._transitionTo_StatusRequestToEnd.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                    return;
                }
                //---- pass to necxt status
                this._transitionTo_StatusRequestToPlay_or_Similar.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
            };
            //======================
            RE_PlaylistItem_StatusSelectNextChildToPlay.prototype.requestNextChildToSelect = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                var nextChildToStart = this.getContainerDiagram().cmd_selectNextChildToPlay(this._lastSelectedChildIdx, null, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                if (nextChildToStart == null)
                    return;
                this._lastSelectedChild = nextChildToStart;
                this._lastSelectedChildIdx = this._lastSelectedChild.getLogic().getOwnerIdxAsChild();
                this.getContainerDiagram().cmd_setCrtSelectedChild(this._lastSelectedChild);
                //if ( this.getContainerDiagram().cmd_hasMultiplay()) // to do?
                //this.getContainerDiagram().cmd_addNewSelectedChild(this._lastSelectedChild); 
            };
            //========================
            RE_PlaylistItem_StatusSelectNextChildToPlay.prototype.onNotify_ChildPlay = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                //this._bAtLeastOneChildStarted = true;
                this.onNotify_ChildPlayErrorDisableEnd(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
            };
            //========================
            RE_PlaylistItem_StatusSelectNextChildToPlay.prototype.onNotify_ChildError = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                //this._bAtLeastOneChildInError = true;
                this.onNotify_ChildPlayErrorDisableEnd(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
            };
            //========================
            RE_PlaylistItem_StatusSelectNextChildToPlay.prototype.onNotify_ChildDisable = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                //this._bAtLeastOneChildDisable = true;
                this.onNotify_ChildPlayErrorDisableEnd(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
            };
            //======================
            RE_PlaylistItem_StatusSelectNextChildToPlay.prototype.onNotify_ChildEnd = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                if (event.getEventRequest() == amGeneralEventRequestType.am_general.AE_EventRequestType.EvtRequest_AbortParent)
                    this._transitionTo_StatusRequestToAbort.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                //this._bAtLeastOneChildEnded = true;
                this.onNotify_ChildPlayErrorDisableEnd(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
            };
            //======================
            RE_PlaylistItem_StatusSelectNextChildToPlay.prototype.onNotify_ChildPlayErrorDisableEnd = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                /*
                //------------- singleplay : one child starts at a time
                if ( ! this.getContainerDiagram().cmd_hasMultiplay())
                {
                  if (event.getEventId() == amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildPlay)
                  {
                    this._transitionTo_StatusPlay.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                    return ;
                  }
                  this.requestNextChildToPlay(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                  if (this._lastStartedChild == null)
                  {
                    this._transitionTo_StatusEnd.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                  }
                  //---- request to play the next child
                  this.postEvent( amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToPlay,
                                  this._lastStartedChild.getLogic(), null, -1, eventQueue, error, context, callback);
                }
                
                //----------------- multiplay : start all children (in scope) one after the other from the beginning
                this.requestNextChildToPlay(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                //--------------------------------- no child to start
                if (this._lastStartedChild == null)
                {
                  if (this._bAtLeastOneChildStarted)
                    this._transitionTo_StatusPlay.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                  else
                    this._transitionTo_StatusEnd.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                  return ;
                }
                //---- request to play the next child
                this.postEvent( amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToPlay,
                                this._lastStartedChild.getLogic(), null, -1, eventQueue, error, context, callback);
                */
            };
            //======================
            RE_PlaylistItem_StatusSelectNextChildToPlay.prototype.receiveEvent = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                if (this.getDiagram().getStatusCode() != amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_SelectNextChildToPlay)
                    return this.ignoreEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                switch (event.getEventId()) {
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
                        this.onNotify_ChildPlay(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                        break;
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildEnd:
                        this.onNotify_ChildEnd(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                        break;
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildDisable:
                        this.onNotify_ChildDisable(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                        break;
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildError:
                        this.onNotify_ChildError(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
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
            };
            return RE_PlaylistItem_StatusSelectNextChildToPlay;
        }(rmPlaylistItemStatus.rm_coreservices.RE_PlaylistItem_Status));
        rm_coreservices.RE_PlaylistItem_StatusSelectNextChildToPlay = RE_PlaylistItem_StatusSelectNextChildToPlay;
    })(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
});
//# sourceMappingURL=RE_PlaylistItem_StatusSelectNextChildToPlay.js.map