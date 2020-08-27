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
define(["require", "exports", "../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItemStatusType", "../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItemEventType", "../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_Status"], function (require, exports, amPlaylistItemStatusType, amPlaylistItemEventType, rmPlaylistItemStatus) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_coreservices;
    (function (rm_coreservices) {
        var RE_PlaylistItem_StatusDisable = /** @class */ (function (_super) {
            __extends(RE_PlaylistItem_StatusDisable, _super);
            //=======================
            function RE_PlaylistItem_StatusDisable() {
                var _this = _super.call(this) || this;
                _this._statusName = "DISABLE";
                _this._transitionTo_StatusEnd = null;
                return _this;
            }
            //========================
            RE_PlaylistItem_StatusDisable.prototype.injectDependencies = function (aSrvContainer, aSrvLocator, aSrvLog, error) {
                _super.prototype.injectDependencies.call(this, aSrvContainer, aSrvLocator, aSrvLog, error);
                this._transitionTo_StatusEnd = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemTransition(error);
                return 0;
            };
            //======================
            RE_PlaylistItem_StatusDisable.prototype.passToMe = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                this.getDiagram().setStatusCode(amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_Disable);
                //---- specific actions
                //this.getDiagram().clearDurationTimersIfAny(); not needed
                this.reset();
                //this.getDiagram().reset();
                //---- notifications
                this.notifyChildDisable(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
            };
            //======================
            RE_PlaylistItem_StatusDisable.prototype.notifyChildDisable = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                if (this.getDiagram().getOwner().getParent() == null)
                    return;
                this.postEvent(amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildDisable, this.getDiagram().getOwner().getParent().getLogic(), null, this.getDiagram().getOwner().getParent().getLogic().getOwnerIdxAsChild(), eventQueue, error, context, callback);
            };
            //======================
            RE_PlaylistItem_StatusDisable.prototype.receiveEvent = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                if (this.getDiagram().getStatusCode() != amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_Disable)
                    return this.ignoreEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                switch (event.getEventId()) {
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToPlay:
                        this.notifyChildDisable(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                        break;
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToEnd:
                        this._transitionTo_StatusEnd.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                        break;
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToAbort:
                        this._transitionTo_StatusEnd.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                        break;
                    //--- in the End Status you cannot passed a playlist-item in the status Suspended or to Resume the suspension
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToSuspend:
                        this.notifyChildDisable(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                        break;
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToResume:
                        this.notifyChildDisable(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                        break;
                    //---- a media item has no children
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
            return RE_PlaylistItem_StatusDisable;
        }(rmPlaylistItemStatus.rm_coreservices.RE_PlaylistItem_Status));
        rm_coreservices.RE_PlaylistItem_StatusDisable = RE_PlaylistItem_StatusDisable;
    })(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
});
//# sourceMappingURL=RE_PlaylistItem_StatusDisable.js.map