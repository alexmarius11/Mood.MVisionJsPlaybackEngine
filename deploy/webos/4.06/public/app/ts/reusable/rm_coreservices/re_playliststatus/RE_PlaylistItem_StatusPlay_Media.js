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
define(["require", "exports", "../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItemStatusType", "../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItemEventType", "../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusPlay"], function (require, exports, amPlaylistItemStatusType, amPlaylistItemEventType, rmPlaylistItemStatus) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_coreservices;
    (function (rm_coreservices) {
        var RE_PlaylistItem_StatusPlay_Media = /** @class */ (function (_super) {
            __extends(RE_PlaylistItem_StatusPlay_Media, _super);
            //----------------
            function RE_PlaylistItem_StatusPlay_Media() {
                var _this = _super.call(this) || this;
                _this._statusName = "PLAY_MEDIA";
                return _this;
            }
            //------------------------------
            RE_PlaylistItem_StatusPlay_Media.prototype.injectDependencies = function (aSrvContainer, aSrvLocator, aSrvLog, error) {
                _super.prototype.injectDependencies.call(this, aSrvContainer, aSrvLocator, aSrvLog, error);
                return 0;
            };
            //=====================
            RE_PlaylistItem_StatusPlay_Media.prototype.reset = function () {
            };
            //======================
            RE_PlaylistItem_StatusPlay_Media.prototype.passToMe = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                this.getDiagram().setStatusCode(amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_Play_Media);
                this.traceAll("plc_trace");
                //alert(this.traceString());
                //---- specific actions
                this.reset();
                //---- notifications
                //this.getDiagram().startDurationTimersIfAny(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                //---- notifications
                this.notifyChildPlay(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
            };
            //======================
            RE_PlaylistItem_StatusPlay_Media.prototype.notifyChildPlay = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                if (this.getDiagram().getOwner().getParent() == null)
                    return;
                this.postEvent(amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildPlay, this.getDiagram().getOwner().getParent().getLogic(), null, this.getDiagram().getOwner().getParent().getLogic().getOwnerIdxAsChild(), eventQueue, error, context, callback);
            };
            //=============================
            /*
            public startPlayOrPassedToError(
                                              event : amGeneralEvent.am_general.AE_Event,
                                              eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error,
                                              aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                                              aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                                              context: amGeneralContext.am_general.A_Context, callback): void
            {
              var self = this;
              var startPlayOrError = function startPlayOrError()
              {
                if (! error.isError()) //------- pass in Play status
                {
                  self.postEvent( amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildPlay,
                                  self, null, -1, eventQueue, error, context, callback);
                }else{                 //------- pass in Error status
                  self.postEvent( amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildError,
                                  self, null, -1, eventQueue, error, context, callback);
                }
              }
              startPlayOrError();
            }*/
            //======================
            RE_PlaylistItem_StatusPlay_Media.prototype.receiveEvent = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                if (this.getDiagram().getStatusCode() != amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_Play_Media)
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
                        this._transitionTo_StatusRequestToSuspend.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                        break;
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToResume:
                        break;
                    //---- a media item has no playlist children -- but has a natural child
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildPlay:
                        //this._transitionTo_StatusPlay.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
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
            return RE_PlaylistItem_StatusPlay_Media;
        }(rmPlaylistItemStatus.rm_coreservices.RE_PlaylistItem_StatusPlay));
        rm_coreservices.RE_PlaylistItem_StatusPlay_Media = RE_PlaylistItem_StatusPlay_Media;
    })(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
});
//# sourceMappingURL=RE_PlaylistItem_StatusPlay_Media.js.map