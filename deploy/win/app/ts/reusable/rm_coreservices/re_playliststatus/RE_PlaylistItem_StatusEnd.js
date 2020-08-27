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
    var RE_PlaylistItem_StatusEnd = (function (_super) {
        __extends(RE_PlaylistItem_StatusEnd, _super);
        function RE_PlaylistItem_StatusEnd() {
            var _this = _super.call(this) || this;
            _this._statusName = "END";
            _this._transitionTo_StatusDisable = null;
            _this._transitionTo_StatusRequestToPlay_or_Similar = null;
            return _this;
        }
        RE_PlaylistItem_StatusEnd.prototype.injectDependencies = function (aSrvContainer, aSrvLocator, aSrvLog, error) {
            _super.prototype.injectDependencies.call(this, aSrvContainer, aSrvLocator, aSrvLog, error);
            this._transitionTo_StatusDisable = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemTransition(error);
            this._transitionTo_StatusRequestToPlay_or_Similar = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemTransition(error);
            return 0;
        };
        RE_PlaylistItem_StatusEnd.prototype.passToMe = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
            this.getDiagram().setStatusCode(amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_End);
            this.getDiagram().clearDurationTimersIfAny();
            this.reset();
            this.getDiagram().reset();
            var self = this;
            var destroyRenderingZoneEnd = function destroyRenderingZoneEnd() {
                self.notifyChildEnd(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
            };
            this.destroyRenderingZoneIfNecessary(event, eventQueue, error, aPlaylistController, aRenderingController, context, destroyRenderingZoneEnd);
        };
        RE_PlaylistItem_StatusEnd.prototype.createRenderingZoneIfNecessary = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
            if (this.getDiagram() == null)
                return;
            var self = this;
            if (this.getDiagram().mustCreateARenderingZone()) {
                this.trace(1, "plc_trace", " START ", " CREATE RENDERING ZONE ");
                var createZone = function createZone() {
                };
                var zoneId = this.getDiagram().getOwner().getPlaylistItemId();
                aPlaylistController._iPlaylistControllerCommands.cmd_createZone(zoneId, this.getDiagram().getOwner().getPrepareParams(), error, context, createZone);
            }
        };
        RE_PlaylistItem_StatusEnd.prototype.destroyRenderingZoneIfNecessary = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
            if (this.getDiagram() != null) {
                if (this.getDiagram().mustCreateARenderingZone()) {
                    this.trace(1, "plc_trace", " STOP ", " DESTROY RENDERING ZONE ");
                    var owner = this;
                    var zoneId = this.getDiagram().getOwner().getPlaylistItemId();
                    var stopParams = null;
                    var stopZone = function stopZone() {
                        var destroyZone = function destroyZone() {
                            context.setError(error);
                            if (callback != null)
                                callback(context);
                            return;
                        };
                        return aPlaylistController._iPlaylistControllerCommands.cmd_destroyZone(zoneId, stopParams, error, context, destroyZone);
                    };
                    return aPlaylistController._iPlaylistControllerCommands.cmd_stopZone(zoneId, stopParams, error, context, stopZone);
                }
            }
            context.setError(error);
            if (callback != null)
                callback(context);
            return;
        };
        RE_PlaylistItem_StatusEnd.prototype.notifyChildEnd = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
            if (this.getDiagram().getOwner().getParent() == null)
                return;
            this.postEvent(amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildEnd, this.getDiagram().getOwner().getParent().getLogic(), null, this.getDiagram().getOwnerIdxAsChild(), eventQueue, error, context, callback);
        };
        RE_PlaylistItem_StatusEnd.prototype.notifyGraphicDescendantEnd = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
            if (this.getDiagram().getOwner().getParent() == null)
                return;
            if (!this.getDiagram().hasARenderingRepresentation())
                return;
            this.postEvent(amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyGraphicDescendantEnd, this.getDiagram().getOwner().getParent().getLogic(), null, this.getDiagram().getOwner().getParent().getLogic().getOwnerIdxAsChild(), eventQueue, error, context, callback);
        };
        RE_PlaylistItem_StatusEnd.prototype.receiveEvent = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
            if (this.getDiagram().getStatusCode() != amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_End)
                return this.ignoreEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
            switch (event.getEventId()) {
                case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToPlay:
                    {
                        if (this.getDiagram().isDisable(null, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback)) {
                            this._transitionTo_StatusDisable.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                            return this.returnWithCallback(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                        }
                        this.trace(1, "plc_trace", " START ", "");
                        this.getDiagram().startDurationTimersIfAny(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                        this.createRenderingZoneIfNecessary(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                        this._transitionTo_StatusRequestToPlay_or_Similar.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                        break;
                    }
                case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToEnd:
                    this.notifyChildEnd(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                    break;
                case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToAbort:
                    this.notifyChildEnd(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                    break;
                case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToSuspend:
                    break;
                case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToResume:
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
        return RE_PlaylistItem_StatusEnd;
    }(rmPlaylistItemStatus.rm_coreservices.RE_PlaylistItem_Status));
    rm_coreservices.RE_PlaylistItem_StatusEnd = RE_PlaylistItem_StatusEnd;
})(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
//# sourceMappingURL=RE_PlaylistItem_StatusEnd.js.map