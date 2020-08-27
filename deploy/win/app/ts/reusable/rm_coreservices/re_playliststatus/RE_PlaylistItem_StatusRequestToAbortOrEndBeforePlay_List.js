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
var rmPlaylistItemStatus = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay");
var rm_coreservices;
(function (rm_coreservices) {
    var RE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay_List = (function (_super) {
        __extends(RE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay_List, _super);
        function RE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay_List() {
            var _this = _super.call(this) || this;
            _this._statusName = "REQUEST-TO-ABORT-OR-END-BEFORE-PLAY_LIST";
            _this._lastAbortEndSuspendChildIdx = -1;
            _this._lastAbortEndSuspendChild = null;
            _this._bAtLeastOneChildAbortEndSuspended = false;
            _this._initialRequestToPlayEvent = null;
            return _this;
        }
        RE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay_List.prototype.injectDependencies = function (aSrvContainer, aSrvLocator, aSrvLog, error) {
            _super.prototype.injectDependencies.call(this, aSrvContainer, aSrvLocator, aSrvLog, error);
            return 0;
        };
        RE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay_List.prototype.reset = function () {
            this._lastAbortEndSuspendChildIdx = -1;
            this._lastAbortEndSuspendChild = null;
            this._bAtLeastOneChildAbortEndSuspended = false;
            this._initialRequestToPlayEvent = null;
        };
        RE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay_List.prototype.passToMe = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
            this.getDiagram().setStatusCode(amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestEndOrAbortBeforePlay_List);
            this.reset();
            this._initialRequestToPlayEvent = event;
            this.requestNextChildToAbortEndSuspend(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
        };
        RE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay_List.prototype.requestNextChildToAbortEndSuspend = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
            if ((event.getEventRequest() != amGeneralEventRequestType.am_general.AE_EventRequestType.EvtRequest_AbortSiblings) &&
                (event.getEventRequest() != amGeneralEventRequestType.am_general.AE_EventRequestType.EvtRequest_EndSiblings)) {
                this._transitionTo_StatusRequestToPlay_or_Similar.getStatus().passToMe(this._initialRequestToPlayEvent, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                return;
            }
            var nextChildToAbortEndSuspend = this.getContainerDiagram().cmd_selectNextStartedChild(this._lastAbortEndSuspendChildIdx, this._initialRequestToPlayEvent, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
            if (nextChildToAbortEndSuspend == null) {
                return;
            }
            this._lastAbortEndSuspendChild = nextChildToAbortEndSuspend;
            this._lastAbortEndSuspendChildIdx = this._lastAbortEndSuspendChild.getLogic().getOwnerIdxAsChild();
            if (this._lastAbortEndSuspendChild == null) {
                this._transitionTo_StatusRequestToPlay_or_Similar.getStatus().passToMe(this._initialRequestToPlayEvent, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                return;
            }
            switch (event.getEventRequest()) {
                case amGeneralEventRequestType.am_general.AE_EventRequestType.EvtRequest_AbortSiblings:
                    this.postEvent(amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToAbort, this._lastAbortEndSuspendChild.getLogic(), null, this._lastAbortEndSuspendChild.getLogic().getOwnerIdxAsChild(), eventQueue, error, context, callback);
                    return;
                case amGeneralEventRequestType.am_general.AE_EventRequestType.EvtRequest_EndSiblings:
                    this.postEvent(amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToEnd, this._lastAbortEndSuspendChild.getLogic(), null, this._lastAbortEndSuspendChild.getLogic().getOwnerIdxAsChild(), eventQueue, error, context, callback);
                    return;
                case amGeneralEventRequestType.am_general.AE_EventRequestType.EvtRequest_SuspendSiblings:
                    this.postEvent(amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToEnd, this._lastAbortEndSuspendChild.getLogic(), null, this._lastAbortEndSuspendChild.getLogic().getOwnerIdxAsChild(), eventQueue, error, context, callback);
                    return;
            }
        };
        RE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay_List.prototype.onNotify_ChildSuspended = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
            this.onNotify_ChildErrorDisableSuspendEnd(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
        };
        RE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay_List.prototype.onNotify_ChildError = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
            this.onNotify_ChildErrorDisableSuspendEnd(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
        };
        RE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay_List.prototype.onNotify_ChildDisable = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
            this.onNotify_ChildErrorDisableSuspendEnd(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
        };
        RE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay_List.prototype.onNotify_ChildEnd = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
            this.onNotify_ChildErrorDisableSuspendEnd(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
        };
        RE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay_List.prototype.onNotify_ChildErrorDisableSuspendEnd = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
            return this.requestNextChildToAbortEndSuspend(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
        };
        RE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay_List.prototype.receiveEvent = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
            if (this.getDiagram().getStatusCode() != amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestEndOrAbortBeforePlay_List)
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
                    this.onNotify_ChildSuspended(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                    break;
                case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildResumed:
                    break;
                case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyGraphicDescendantEnd:
                    break;
                default:
            }
            return this.returnWithCallback(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
        };
        return RE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay_List;
    }(rmPlaylistItemStatus.rm_coreservices.RE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay));
    rm_coreservices.RE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay_List = RE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay_List;
})(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
//# sourceMappingURL=RE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay_List.js.map