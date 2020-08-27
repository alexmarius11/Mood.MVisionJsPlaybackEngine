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
define(["require", "exports", "../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItemStatusType", "../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItemEventType", "../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToSuspend"], function (require, exports, amPlaylistItemStatusType, amPlaylistItemEventType, rmPlaylistItemStatus) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_coreservices;
    (function (rm_coreservices) {
        var RE_PlaylistItem_StatusRequestToSuspend_Media = /** @class */ (function (_super) {
            __extends(RE_PlaylistItem_StatusRequestToSuspend_Media, _super);
            //----------------
            function RE_PlaylistItem_StatusRequestToSuspend_Media() {
                var _this = _super.call(this) || this;
                _this._statusName = "REQUEST-TO-SUSPEND_MEDIA";
                return _this;
            }
            //------------------------------
            RE_PlaylistItem_StatusRequestToSuspend_Media.prototype.injectDependencies = function (aSrvContainer, aSrvLocator, aSrvLog, error) {
                _super.prototype.injectDependencies.call(this, aSrvContainer, aSrvLocator, aSrvLog, error);
                //this._transitionTo_StatusDisable                  = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemTransition(error);
                return 0;
            };
            //=====================
            RE_PlaylistItem_StatusRequestToSuspend_Media.prototype.reset = function () {
            };
            //======================
            RE_PlaylistItem_StatusRequestToSuspend_Media.prototype.passToMe = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                this.getDiagram().setStatusCode(amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestToSuspend_Media);
                //---- specific actions
                this.reset();
                this.startMediaSuspendAndPassedToSuspendedStatus(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                //---- notifications
            };
            //=============================
            RE_PlaylistItem_StatusRequestToSuspend_Media.prototype.startMediaSuspendAndPassedToSuspendedStatus = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                var self = this;
                var startMediaSuspend = function startPlayOrError() {
                    if (!error.isError()) //------- pass in Play status  
                     {
                        self._transitionTo_StatusError.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                    }
                    else { //------- pass in Suspended status  
                        self._transitionTo_StatusSuspended.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                    }
                };
                startMediaSuspend();
            };
            //======================
            RE_PlaylistItem_StatusRequestToSuspend_Media.prototype.receiveEvent = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                if (this.getDiagram().getStatusCode() != amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestToSuspend_Media)
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
            return RE_PlaylistItem_StatusRequestToSuspend_Media;
        }(rmPlaylistItemStatus.rm_coreservices.RE_PlaylistItem_StatusRequestToSuspend));
        rm_coreservices.RE_PlaylistItem_StatusRequestToSuspend_Media = RE_PlaylistItem_StatusRequestToSuspend_Media;
    })(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
});
//# sourceMappingURL=RE_PlaylistItem_StatusRequestToSuspend_Media.js.map