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
var rmPlaylistItemStatus = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToEnd");
var rm_coreservices;
(function (rm_coreservices) {
    var RE_PlaylistItem_StatusRequestToEnd_List = (function (_super) {
        __extends(RE_PlaylistItem_StatusRequestToEnd_List, _super);
        function RE_PlaylistItem_StatusRequestToEnd_List() {
            var _this = _super.call(this) || this;
            _this._statusName = "REQUEST-TO-END_LIST";
            _this._lastEndChildIdx = -1;
            _this._lastEndChild = null;
            return _this;
        }
        RE_PlaylistItem_StatusRequestToEnd_List.prototype.reset = function () {
            this._lastEndChildIdx = -1;
            this._lastEndChild = null;
        };
        RE_PlaylistItem_StatusRequestToEnd_List.prototype.injectDependencies = function (aSrvContainer, aSrvLocator, aSrvLog, error) {
            _super.prototype.injectDependencies.call(this, aSrvContainer, aSrvLocator, aSrvLog, error);
            return 0;
        };
        RE_PlaylistItem_StatusRequestToEnd_List.prototype.passToMe = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
            this.getDiagram().setStatusCode(amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestToEnd_List);
            this.reset();
            this.requestNextChildToEnd(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
        };
        RE_PlaylistItem_StatusRequestToEnd_List.prototype.requestNextChildToEnd = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
            var nextChildToEnd = this.getContainerDiagram().cmd_selectNextStartedChild(this._lastEndChildIdx, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
            if (nextChildToEnd == null) {
                this._lastEndChild = null;
                this._lastEndChildIdx = -1;
                return;
            }
            this._lastEndChild = nextChildToEnd;
            this._lastEndChildIdx = this._lastEndChild.getLogic().getOwnerIdxAsChild();
            if (this._lastEndChild == null) {
                this._transitionTo_StatusEnd.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                return;
            }
            this.postEvent(amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToEnd, this._lastEndChild.getLogic(), null, this._lastEndChild.getLogic().getOwnerIdxAsChild(), eventQueue, error, context, callback);
        };
        RE_PlaylistItem_StatusRequestToEnd_List.prototype.requestCrtChildToEnd = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
            if (this._lastEndChild == null) {
                this._transitionTo_StatusEnd.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                return;
            }
            this.postEvent(amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToEnd, this._lastEndChild.getLogic(), null, this._lastEndChild.getLogic().getOwnerIdxAsChild(), eventQueue, error, context, callback);
        };
        RE_PlaylistItem_StatusRequestToEnd_List.prototype.onNotify_ChildSuspended = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
            this.onNotify_ChildErrorDisableSuspend(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
        };
        RE_PlaylistItem_StatusRequestToEnd_List.prototype.onNotify_ChildError = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
            this.onNotify_ChildErrorDisableSuspend(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
        };
        RE_PlaylistItem_StatusRequestToEnd_List.prototype.onNotify_ChildDisable = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
            this.onNotify_ChildErrorDisableSuspend(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
        };
        RE_PlaylistItem_StatusRequestToEnd_List.prototype.onNotify_ChildEnd = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
            return this.requestNextChildToEnd(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
        };
        RE_PlaylistItem_StatusRequestToEnd_List.prototype.onNotify_ChildErrorDisableSuspend = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
            return this.requestCrtChildToEnd(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
        };
        RE_PlaylistItem_StatusRequestToEnd_List.prototype.receiveEvent = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
            if (this.getDiagram().getStatusCode() != amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestToEnd_List)
                return this.ignoreEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
            switch (event.getEventId()) {
                case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToPlay:
                    break;
                case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToEnd:
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
        return RE_PlaylistItem_StatusRequestToEnd_List;
    }(rmPlaylistItemStatus.rm_coreservices.RE_PlaylistItem_StatusRequestToEnd));
    rm_coreservices.RE_PlaylistItem_StatusRequestToEnd_List = RE_PlaylistItem_StatusRequestToEnd_List;
})(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
//# sourceMappingURL=RE_PlaylistItem_StatusRequestToEnd_List.js.map