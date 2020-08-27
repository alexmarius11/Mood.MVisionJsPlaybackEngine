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
var rmPlaylistItemStatus = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_Status");
var rm_coreservices;
(function (rm_coreservices) {
    var RE_PlaylistItem_StatusSuspended = (function (_super) {
        __extends(RE_PlaylistItem_StatusSuspended, _super);
        function RE_PlaylistItem_StatusSuspended() {
            var _this = _super.call(this) || this;
            _this._statusName = "SUSPENDED";
            _this._transitionTo_StatusRequestToResume = null;
            _this._transitionTo_StatusEnd_or_Similar = null;
            _this._transitionTo_StatusError = null;
            _this._transitionTo_StatusRequestToAbort = null;
            _this._transitionTo_StatusRequestToEnd = null;
            return _this;
        }
        RE_PlaylistItem_StatusSuspended.prototype.injectDependencies = function (aSrvContainer, aSrvLocator, aSrvLog, error) {
            _super.prototype.injectDependencies.call(this, aSrvContainer, aSrvLocator, aSrvLog, error);
            this._transitionTo_StatusRequestToResume = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemTransition(error);
            this._transitionTo_StatusEnd_or_Similar = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemTransition(error);
            this._transitionTo_StatusError = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemTransition(error);
            this._transitionTo_StatusRequestToAbort = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemTransition(error);
            this._transitionTo_StatusRequestToEnd = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemTransition(error);
            return 0;
        };
        RE_PlaylistItem_StatusSuspended.prototype.reset = function () {
        };
        RE_PlaylistItem_StatusSuspended.prototype.passToMe = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
            this.getDiagram().setStatusCode(amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_Suspended);
            this.reset();
        };
        RE_PlaylistItem_StatusSuspended.prototype.receiveEvent = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
            if (this.getDiagram().getStatusCode() != amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_Suspended)
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
                    this._transitionTo_StatusRequestToResume.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                    break;
                case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildPlay:
                    break;
                case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildEnd:
                    break;
                case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildDisable:
                    break;
                case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildError:
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
        return RE_PlaylistItem_StatusSuspended;
    }(rmPlaylistItemStatus.rm_coreservices.RE_PlaylistItem_Status));
    rm_coreservices.RE_PlaylistItem_StatusSuspended = RE_PlaylistItem_StatusSuspended;
})(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
//# sourceMappingURL=RE_PlaylistItem_StatusSuspended.js.map