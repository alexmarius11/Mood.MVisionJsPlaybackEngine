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
var rmPlaylistItemStatus = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToPlay");
var amPlaylistItemType = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItemType");
var rm_coreservices;
(function (rm_coreservices) {
    var RE_PlaylistItem_StatusRequestToPlay_Media = (function (_super) {
        __extends(RE_PlaylistItem_StatusRequestToPlay_Media, _super);
        function RE_PlaylistItem_StatusRequestToPlay_Media() {
            var _this = _super.call(this) || this;
            _this._statusName = "REQUEST-TO-PLAY_MEDIA";
            return _this;
        }
        RE_PlaylistItem_StatusRequestToPlay_Media.prototype.injectDependencies = function (aSrvContainer, aSrvLocator, aSrvLog, error) {
            _super.prototype.injectDependencies.call(this, aSrvContainer, aSrvLocator, aSrvLog, error);
            return 0;
        };
        RE_PlaylistItem_StatusRequestToPlay_Media.prototype.reset = function () {
        };
        RE_PlaylistItem_StatusRequestToPlay_Media.prototype.passToMe = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
            this.getDiagram().setStatusCode(amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestToPlay_Media);
            this.reset();
            this.startPlayOrPassedToError(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
        };
        RE_PlaylistItem_StatusRequestToPlay_Media.prototype.startPlayOrPassedToError = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
            var self = this;
            var bUseFake = true;
            var playlistItemType = this.getDiagram().getOwner().getPlaylistItemType();
            if ((playlistItemType == amPlaylistItemType.am_coreservices.AE_PlaylistItemType.PlaylistItemType_Image)
                || (playlistItemType == amPlaylistItemType.am_coreservices.AE_PlaylistItemType.PlaylistItemType_Video)
                || (playlistItemType == amPlaylistItemType.am_coreservices.AE_PlaylistItemType.PlaylistItemType_WebPage)
                || (playlistItemType == amPlaylistItemType.am_coreservices.AE_PlaylistItemType.PlaylistItemType_ScreenSaverImage)
                || (playlistItemType == amPlaylistItemType.am_coreservices.AE_PlaylistItemType.PlaylistItemType_ScreenSaverVideo)
                || (playlistItemType == amPlaylistItemType.am_coreservices.AE_PlaylistItemType.PlaylistItemType_FillRect)) {
                bUseFake = false;
            }
            if (bUseFake) {
                var fakeStartPlayOrError = function fakeStartPlayOrError() {
                    if (!error.isError()) {
                        self._transitionTo_StatusPlay.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                    }
                    else {
                        self._transitionTo_StatusError.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                    }
                };
                fakeStartPlayOrError();
            }
            self._transitionTo_StatusPlay.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
            var targetZoneId = this.getDiagram().getTargetRenderingZoneId();
            var prepareParams = this.getDiagram().getOwner().getPrepareParams();
            var ctx = this._aSrvLocator._iEntityCreation.createDefaultContext();
            var err = this._aSrvLocator._iEntityCreation.createDefaultError();
            var callbackPrepare2 = function callbackPrepare2() {
                var callbackRun2 = function callbackRun2() {
                };
                var evt = ctx.getObjectResult();
                if (evt != null) {
                    var self2 = self;
                    setTimeout(function () {
                        var callbackLocal = function callbackLocal() {
                            var a = 1;
                        };
                        var ctx2 = self2._aSrvLocator._iEntityCreation.createDefaultContext();
                        var err2 = self2._aSrvLocator._iEntityCreation.createDefaultError();
                        var evt2 = self2.createEvent(amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildError, self2.getDiagram(), null, self2.getDiagram().getOwnerIdxAsChild(), eventQueue, err2, ctx2, null);
                        evt2.setSender(self.getDiagram());
                        return aPlaylistController._iPlaylistControllerRun.receiveEvent(evt2, null, err2, ctx2, callbackLocal);
                    }, 5);
                }
            };
            return aPlaylistController._iPlaylistControllerCommands.cmd_prepareAndPlayNextMediaItem(targetZoneId, prepareParams, null, null, err, ctx, callbackPrepare2);
        };
        RE_PlaylistItem_StatusRequestToPlay_Media.prototype.receiveEvent = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
            if (this.getDiagram().getStatusCode() != amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestToPlay_Media)
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
                    this._transitionTo_StatusPlay.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                    break;
                case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildEnd:
                    this._transitionTo_StatusRequestToEnd.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                    break;
                case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildDisable:
                    break;
                case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildError:
                    this._transitionTo_StatusError.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
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
        return RE_PlaylistItem_StatusRequestToPlay_Media;
    }(rmPlaylistItemStatus.rm_coreservices.RE_PlaylistItem_StatusRequestToPlay));
    rm_coreservices.RE_PlaylistItem_StatusRequestToPlay_Media = RE_PlaylistItem_StatusRequestToPlay_Media;
})(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
//# sourceMappingURL=RE_PlaylistItem_StatusRequestToPlay_Media.js.map