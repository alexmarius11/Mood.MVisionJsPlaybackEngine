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
var rmPlaylistItemStatus = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusPlay");
var rm_coreservices;
(function (rm_coreservices) {
    var RE_PlaylistItem_StatusPlay_List = (function (_super) {
        __extends(RE_PlaylistItem_StatusPlay_List, _super);
        function RE_PlaylistItem_StatusPlay_List() {
            var _this = _super.call(this) || this;
            _this._statusName = "PLAY_LIST";
            return _this;
        }
        RE_PlaylistItem_StatusPlay_List.prototype.injectDependencies = function (aSrvContainer, aSrvLocator, aSrvLog, error) {
            _super.prototype.injectDependencies.call(this, aSrvContainer, aSrvLocator, aSrvLog, error);
            return 0;
        };
        RE_PlaylistItem_StatusPlay_List.prototype.onNotify_ChildPlay = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
        };
        RE_PlaylistItem_StatusPlay_List.prototype.onNotify_ChildError = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
            var senderChild = this.getContainerDiagram().cmd_getChildFromIndex(event.getCrtTargetIdx());
            if (senderChild == null)
                return;
            this.postEvent(amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToAbort, senderChild.getLogic(), null, -1, eventQueue, error, context, callback);
        };
        RE_PlaylistItem_StatusPlay_List.prototype.onNotify_ChildDisable = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
            var senderChild = this.getContainerDiagram().cmd_getChildFromIndex(event.getCrtTargetIdx());
            if (senderChild == null)
                return;
            this.postEvent(amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToAbort, senderChild.getLogic(), null, -1, eventQueue, error, context, callback);
        };
        RE_PlaylistItem_StatusPlay_List.prototype.onNotify_ChildEnd = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
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
            if (!this.getContainerDiagram().cmd_hasMultiplay()) {
                var childIdx = event.getCrtTargetIdx();
                if (childIdx == 2) {
                    var a = 1;
                }
                this._transitionTo_StatusRequestToPlay.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                return;
            }
            this._transitionTo_StatusEnd_or_Similar.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
        };
        RE_PlaylistItem_StatusPlay_List.prototype.passToMe = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
            this.getDiagram().setStatusCode(amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_Play_List);
            this.reset();
            this.notifyChildPlay(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
        };
        RE_PlaylistItem_StatusPlay_List.prototype.notifyChildPlay = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
            if (this.getDiagram().getOwner().getParent() == null)
                return;
            this.postEvent(amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildPlay, this.getDiagram().getOwner().getParent().getLogic(), null, this.getDiagram().getOwner().getParent().getLogic().getOwnerIdxAsChild(), eventQueue, error, context, callback);
        };
        RE_PlaylistItem_StatusPlay_List.prototype.on_ChildRequestToPlay = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
            if (this._transitionTo_StatusRequestToAbortOrEndBeforePlay.getStatus() == null)
                return;
            var nextChildToStart = this.getContainerDiagram().cmd_selectNextChildToPlay(-1, amNextChildSelectionType.am_coreservices.AE_NextChildSelectionType.NextChildSelectionType_Select_usingChildAddressFromEvent, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
            if (nextChildToStart == null)
                return;
            if (!this.getContainerDiagram().cmd_childHasBiggerOrEqualPriority_thanOtherStartedChildren(nextChildToStart))
                return;
            this._transitionTo_StatusRequestToAbortOrEndBeforePlay.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
        };
        RE_PlaylistItem_StatusPlay_List.prototype.receiveEvent = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
            if (this.getDiagram().getStatusCode() != amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_Play_List)
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
        return RE_PlaylistItem_StatusPlay_List;
    }(rmPlaylistItemStatus.rm_coreservices.RE_PlaylistItem_StatusPlay));
    rm_coreservices.RE_PlaylistItem_StatusPlay_List = RE_PlaylistItem_StatusPlay_List;
})(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
//# sourceMappingURL=RE_PlaylistItem_StatusPlay_List.js.map