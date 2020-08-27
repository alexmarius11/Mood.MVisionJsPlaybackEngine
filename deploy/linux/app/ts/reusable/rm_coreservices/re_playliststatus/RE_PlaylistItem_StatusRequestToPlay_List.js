"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var amPlaylistItemStatusType = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItemStatusType");
var amPlaylistItemEventType = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItemEventType");
var amGeneralEventRequestType = require("../../../../../app/ts/abstract/am_general/ae_event/AE_EventRequestType");
var amNextChildSelectionType = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_NextChildSelectionType");
var rmPlaylistItemStatus = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToPlay");
var rm_coreservices;
(function (rm_coreservices) {
    var RE_PlaylistItem_StatusRequestToPlay_List = (function (_super) {
        __extends(RE_PlaylistItem_StatusRequestToPlay_List, _super);
        function RE_PlaylistItem_StatusRequestToPlay_List() {
            var _this = _super.call(this) || this;
            _this._statusName = "REQUEST-TO-PLAY_LIST";
            _this._lastStartedChildIdx = -1;
            _this._lastStartedChild = null;
            _this._bAtLeastOneChildStarted = false;
            _this._bAtLeastOneChildInError = false;
            _this._bAtLeastOneChildDisable = false;
            _this._bAtLeastOneChildEnded = false;
            return _this;
        }
        RE_PlaylistItem_StatusRequestToPlay_List.prototype.setLastStartedChild = function (lastStartedChild) {
            if (lastStartedChild == null)
                return false;
            this._lastStartedChild = lastStartedChild;
            this._lastStartedChildIdx = this._lastStartedChild.getLogic().getOwnerIdxAsChild();
            return true;
        };
        RE_PlaylistItem_StatusRequestToPlay_List.prototype.reset2 = function () {
            this.getContainerDiagram().cmd_clearStartedChildren();
            this._lastStartedChildIdx = -1;
            this._lastStartedChild = null;
            this._bAtLeastOneChildInError = false;
            this._bAtLeastOneChildDisable = false;
            this._bAtLeastOneChildDisable = false;
            this._bAtLeastOneChildEnded = false;
        };
        RE_PlaylistItem_StatusRequestToPlay_List.prototype.reset = function () {
            if (!this.getContainerDiagram().cmd_hasMultiplay()) {
                return;
            }
            this.getContainerDiagram().cmd_clearStartedChildren();
            this._lastStartedChildIdx = -1;
            this._lastStartedChild = null;
            this._bAtLeastOneChildInError = false;
            this._bAtLeastOneChildDisable = false;
            this._bAtLeastOneChildDisable = false;
            this._bAtLeastOneChildEnded = false;
        };
        RE_PlaylistItem_StatusRequestToPlay_List.prototype.injectDependencies = function (aSrvContainer, aSrvLocator, aSrvLog, error) {
            _super.prototype.injectDependencies.call(this, aSrvContainer, aSrvLocator, aSrvLog, error);
            return 0;
        };
        RE_PlaylistItem_StatusRequestToPlay_List.prototype.passToMe = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
            if (this.getContainerDiagram() == null) {
                this._transitionTo_StatusRequestToEnd.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                return;
            }
            this.getDiagram().setStatusCode(amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestToPlay_List);
            this.reset();
            if (this.manageAnExceptionalRequestToPlay(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback)) {
                return;
            }
            this.requestNextChildToPlay(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
            if (this._lastStartedChild == null) {
                this.reset2();
                this._transitionTo_StatusEnd.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                return;
            }
            this.postEvent(amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToPlay, this._lastStartedChild.getLogic(), null, this._lastStartedChild.getLogic().getOwnerIdxAsChild(), eventQueue, error, context, callback);
        };
        RE_PlaylistItem_StatusRequestToPlay_List.prototype.manageAnExceptionalRequestToPlay = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
            if (this._transitionTo_StatusRequestToAbortOrEndBeforePlay.getStatus() == null)
                return false;
            var nextChildToStart = this.getContainerDiagram().cmd_selectNextChildToPlay(-1, amNextChildSelectionType.am_coreservices.AE_NextChildSelectionType.NextChildSelectionType_Select_usingChildAddressFromEvent, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
            if (nextChildToStart == null)
                return false;
            var nextChildToStartIdx = nextChildToStart.getLogic().getOwnerIdxAsChild();
            this.getContainerDiagram().cmd_setCrtStartedChild(nextChildToStart);
            if (this.getContainerDiagram().cmd_hasMultiplay())
                this.getContainerDiagram().cmd_addNewStartedChild(nextChildToStart);
            return true;
        };
        RE_PlaylistItem_StatusRequestToPlay_List.prototype.on_ChildRequestToPlay = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
            if (this._transitionTo_StatusRequestToAbortOrEndBeforePlay.getStatus() == null)
                return;
            var nextChildToStart = this.getContainerDiagram().cmd_selectNextChildToPlay(-1, amNextChildSelectionType.am_coreservices.AE_NextChildSelectionType.NextChildSelectionType_Select_usingChildAddressFromEvent, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
            if (nextChildToStart == null)
                return;
            if (!this.getContainerDiagram().cmd_childHasBiggerOrEqualPriority_thanOtherStartedChildren(nextChildToStart))
                return;
            this._transitionTo_StatusRequestToAbortOrEndBeforePlay.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
        };
        RE_PlaylistItem_StatusRequestToPlay_List.prototype.requestNextChildToPlay = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
            var nextChildToStart = this.getContainerDiagram().cmd_selectNextChildToPlay(this._lastStartedChildIdx, this.getContainerDiagram().cmd_getNextChildSelectionType(), event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
            if (nextChildToStart == null) {
                this._lastStartedChild = null;
                this._lastStartedChildIdx = -1;
                return;
            }
            this._lastStartedChild = nextChildToStart;
            this._lastStartedChildIdx = this._lastStartedChild.getLogic().getOwnerIdxAsChild();
            this.getContainerDiagram().cmd_setCrtStartedChild(this._lastStartedChild);
            if (this.getContainerDiagram().cmd_hasMultiplay())
                this.getContainerDiagram().cmd_addNewStartedChild(this._lastStartedChild);
        };
        RE_PlaylistItem_StatusRequestToPlay_List.prototype.onNotify_ChildPlay = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
            this._bAtLeastOneChildStarted = true;
            this.onNotify_ChildPlay_ChildEnd(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
        };
        RE_PlaylistItem_StatusRequestToPlay_List.prototype.onNotify_ChildError = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
            this._bAtLeastOneChildInError = true;
            var senderChild = this.getContainerDiagram().cmd_getChildFromIndex(event.getCrtTargetIdx());
            if (senderChild == null)
                return;
            this.postEvent(amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToAbort, senderChild.getLogic(), null, -1, eventQueue, error, context, callback);
        };
        RE_PlaylistItem_StatusRequestToPlay_List.prototype.onNotify_ChildDisable = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
            this._bAtLeastOneChildDisable = true;
            var senderChild = this.getContainerDiagram().cmd_getChildFromIndex(event.getCrtTargetIdx());
            if (senderChild == null)
                return;
            this.postEvent(amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToAbort, senderChild.getLogic(), null, -1, eventQueue, error, context, callback);
        };
        RE_PlaylistItem_StatusRequestToPlay_List.prototype.onNotify_ChildEnd = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
            var childIdx = event.getCrtTargetIdx();
            if (childIdx == 2) {
                var a = 1;
            }
            if (event.getEventRequest() == amGeneralEventRequestType.am_general.AE_EventRequestType.EvtRequest_AbortParent) {
                var crtContainerIdx = this.getContainerDiagram().getOwnerIdxAsChild();
                if (this.getContainerDiagram().cmd_acceptChildRequestToEndParent(crtContainerIdx, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback)) {
                    return this._transitionTo_StatusRequestToAbort.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                }
                else {
                    var senderChildIdx = event.getCrtTargetIdx();
                    var senderChild = this.getContainerDiagram().cmd_getChildFromIndex(senderChildIdx);
                    if (senderChild == null)
                        return;
                    var self = this;
                    self.postEvent(amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToPlay, senderChild.getLogic(), null, senderChild.getLogic().getOwnerIdxAsChild(), eventQueue, error, context, callback);
                    return self.returnWithCallback(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                    return;
                }
            }
            this._bAtLeastOneChildEnded = true;
            this.onNotify_ChildPlay_ChildEnd(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
        };
        RE_PlaylistItem_StatusRequestToPlay_List.prototype.onNotify_ChildPlay_ChildEnd = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
            if (!this.getContainerDiagram().cmd_hasMultiplay()) {
                if (event.getEventId() == amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildPlay) {
                    this._transitionTo_StatusPlay.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                    return;
                }
                this.requestNextChildToPlay(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                if (this._lastStartedChild == null) {
                    this.reset2();
                    this._transitionTo_StatusEnd.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                }
                this.postEvent(amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToPlay, this._lastStartedChild.getLogic(), null, this._lastStartedChild.getLogic().getOwnerIdxAsChild(), eventQueue, error, context, callback);
            }
            this.requestNextChildToPlay(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
            if (this._lastStartedChild == null) {
                if (this._bAtLeastOneChildStarted)
                    this._transitionTo_StatusPlay.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                else {
                    this.reset2();
                    this._transitionTo_StatusEnd.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                }
                return;
            }
            this.postEvent(amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToPlay, this._lastStartedChild.getLogic(), null, this._lastStartedChild.getLogic().getOwnerIdxAsChild(), eventQueue, error, context, callback);
        };
        RE_PlaylistItem_StatusRequestToPlay_List.prototype.receiveEvent = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
            if (this.getDiagram().getStatusCode() != amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestToPlay_List)
                return this.ignoreEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
            switch (event.getEventId()) {
                case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToPlay:
                    this.on_ChildRequestToPlay(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                    break;
                case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToEnd:
                    this._transitionTo_StatusRequestToEnd.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                    break;
                case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToAbort:
                    this._transitionTo_StatusRequestToAbort.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                    break;
                case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToSuspend:
                    break;
                case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToResume:
                    break;
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
        return RE_PlaylistItem_StatusRequestToPlay_List;
    }(rmPlaylistItemStatus.rm_coreservices.RE_PlaylistItem_StatusRequestToPlay));
    rm_coreservices.RE_PlaylistItem_StatusRequestToPlay_List = RE_PlaylistItem_StatusRequestToPlay_List;
})(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
//# sourceMappingURL=RE_PlaylistItem_StatusRequestToPlay_List.js.map