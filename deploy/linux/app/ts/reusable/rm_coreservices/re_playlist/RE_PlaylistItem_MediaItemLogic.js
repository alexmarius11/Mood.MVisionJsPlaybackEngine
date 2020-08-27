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
var rmPlaylistItemLogic = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_Logic");
var rm_coreservices;
(function (rm_coreservices) {
    var RE_PlaylistItem_MediaItemLogic = (function (_super) {
        __extends(RE_PlaylistItem_MediaItemLogic, _super);
        function RE_PlaylistItem_MediaItemLogic() {
            var _this = _super.call(this) || this;
            _this._hasARenderingRepresentation = true;
            _this._hasARenderingZone = false;
            _this._status_End = null;
            _this._status_Disable = null;
            _this._status_Error = null;
            _this._status_RequestToPlay_Media = null;
            _this._status_Play_Media = null;
            _this._status_RequestToSuspend_Media = null;
            _this._status_Suspended = null;
            _this._status_RequestToResume_Media = null;
            _this._status_RequestToAbort_Media = null;
            _this._status_RequestToEnd_Media = null;
            return _this;
        }
        RE_PlaylistItem_MediaItemLogic.prototype.injectDependencies = function (aSrvContainer, aSrvLocator, aSrvLog, error) {
            _super.prototype.injectDependencies.call(this, aSrvContainer, aSrvLocator, aSrvLog, error);
            this._status_End = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemStatusEnd(error);
            this._status_Disable = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemStatusDisable(error);
            this._status_Error = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemStatusError(error);
            this._status_RequestToPlay_Media = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemStatusRequestToPlay_Media(error);
            this._status_Play_Media = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemStatusPlay_Media(error);
            this._status_Suspended = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemStatusSuspended(error);
            this._status_RequestToSuspend_Media = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemStatusRequestToSuspend_Media(error);
            this._status_Suspended = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemStatusSuspended(error);
            this._status_RequestToResume_Media = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemStatusRequestToResume_Media(error);
            this._status_RequestToAbort_Media = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemStatusRequestToAbort_Media(error);
            this._status_RequestToEnd_Media = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemStatusRequestToEnd_Media(error);
            this._status_End.injectDependencies(aSrvContainer, aSrvLocator, aSrvLog, error);
            this._status_Disable.injectDependencies(aSrvContainer, aSrvLocator, aSrvLog, error);
            this._status_Error.injectDependencies(aSrvContainer, aSrvLocator, aSrvLog, error);
            this._status_RequestToPlay_Media.injectDependencies(aSrvContainer, aSrvLocator, aSrvLog, error);
            this._status_Play_Media.injectDependencies(aSrvContainer, aSrvLocator, aSrvLog, error);
            this._status_RequestToSuspend_Media.injectDependencies(aSrvContainer, aSrvLocator, aSrvLog, error);
            this._status_Suspended.injectDependencies(aSrvContainer, aSrvLocator, aSrvLog, error);
            this._status_RequestToResume_Media.injectDependencies(aSrvContainer, aSrvLocator, aSrvLog, error);
            this._status_RequestToAbort_Media.injectDependencies(aSrvContainer, aSrvLocator, aSrvLog, error);
            this._status_RequestToEnd_Media.injectDependencies(aSrvContainer, aSrvLocator, aSrvLog, error);
            this._status_End.setDiagram(this);
            this._status_Disable.setDiagram(this);
            this._status_Error.setDiagram(this);
            this._status_RequestToPlay_Media.setDiagram(this);
            this._status_Play_Media.setDiagram(this);
            this._status_RequestToSuspend_Media.setDiagram(this);
            this._status_Suspended.setDiagram(this);
            this._status_RequestToResume_Media.setDiagram(this);
            this._status_RequestToAbort_Media.setDiagram(this);
            this._status_RequestToEnd_Media.setDiagram(this);
            this._status_End._transitionTo_StatusDisable.setStatus(this._status_Disable);
            this._status_End._transitionTo_StatusRequestToPlay_or_Similar.setStatus(this._status_RequestToPlay_Media);
            this._status_Disable._transitionTo_StatusEnd.setStatus(this._status_End);
            this._status_Error._transitionTo_StatusEnd.setStatus(this._status_End);
            this._status_RequestToPlay_Media._transitionTo_StatusEnd.setStatus(this._status_End);
            this._status_RequestToPlay_Media._transitionTo_StatusError.setStatus(this._status_Error);
            this._status_RequestToPlay_Media._transitionTo_StatusPlay.setStatus(this._status_Play_Media);
            this._status_RequestToPlay_Media._transitionTo_StatusRequestToAbort.setStatus(this._status_RequestToAbort_Media);
            this._status_RequestToPlay_Media._transitionTo_StatusRequestToEnd.setStatus(this._status_RequestToEnd_Media);
            this._status_Play_Media._transitionTo_StatusEnd_or_Similar.setStatus(this._status_End);
            this._status_Play_Media._transitionTo_StatusError.setStatus(this._status_Error);
            this._status_Play_Media._transitionTo_StatusRequestToSuspend.setStatus(this._status_RequestToSuspend_Media);
            this._status_Play_Media._transitionTo_StatusRequestToAbort.setStatus(this._status_RequestToAbort_Media);
            this._status_Play_Media._transitionTo_StatusRequestToEnd.setStatus(this._status_RequestToEnd_Media);
            this._status_RequestToSuspend_Media._transitionTo_StatusSuspended.setStatus(this._status_Play_Media);
            this._status_RequestToSuspend_Media._transitionTo_StatusEnd_or_Similar.setStatus(this._status_End);
            this._status_RequestToSuspend_Media._transitionTo_StatusError.setStatus(this._status_Error);
            this._status_RequestToSuspend_Media._transitionTo_StatusRequestToAbort.setStatus(this._status_RequestToAbort_Media);
            this._status_RequestToSuspend_Media._transitionTo_StatusRequestToEnd.setStatus(this._status_RequestToEnd_Media);
            this._status_Suspended._transitionTo_StatusRequestToResume.setStatus(this._status_RequestToResume_Media);
            this._status_Suspended._transitionTo_StatusEnd_or_Similar.setStatus(this._status_End);
            this._status_Suspended._transitionTo_StatusError.setStatus(this._status_Error);
            this._status_Suspended._transitionTo_StatusRequestToAbort.setStatus(this._status_RequestToAbort_Media);
            this._status_Suspended._transitionTo_StatusRequestToEnd.setStatus(this._status_RequestToEnd_Media);
            this._status_RequestToResume_Media._transitionTo_StatusPlay.setStatus(this._status_Play_Media);
            this._status_RequestToResume_Media._transitionTo_StatusEnd_or_Similar.setStatus(this._status_End);
            this._status_RequestToResume_Media._transitionTo_StatusError.setStatus(this._status_Error);
            this._status_RequestToResume_Media._transitionTo_StatusRequestToAbort.setStatus(this._status_RequestToAbort_Media);
            this._status_RequestToResume_Media._transitionTo_StatusRequestToEnd.setStatus(this._status_RequestToEnd_Media);
            this._status_RequestToEnd_Media._transitionTo_StatusEnd.setStatus(this._status_End);
            this._status_RequestToEnd_Media._transitionTo_StatusRequestToAbort.setStatus(this._status_RequestToAbort_Media);
            this._status_RequestToAbort_Media._transitionTo_StatusEnd.setStatus(this._status_End);
            return 0;
        };
        RE_PlaylistItem_MediaItemLogic.prototype.receiveEvent = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
            switch (this._status) {
                case amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_End:
                    return this._status_End.receiveEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                case amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_Disable:
                    return this._status_Disable.receiveEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                case amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_Error:
                    return this._status_Error.receiveEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                case amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestToPlay_Media:
                    return this._status_RequestToPlay_Media.receiveEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                case amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_Play_Media:
                    return this._status_Play_Media.receiveEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                case amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestToSuspend_Media:
                    return this._status_RequestToSuspend_Media.receiveEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                case amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_Suspended:
                    return this._status_Suspended.receiveEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                case amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestToResume_Media:
                    return this._status_RequestToResume_Media.receiveEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                case amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestToAbort_Media:
                    return this._status_RequestToAbort_Media.receiveEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                case amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestToEnd_Media:
                    return this._status_RequestToEnd_Media.receiveEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                default:
                    return this.ignoreEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
            }
        };
        return RE_PlaylistItem_MediaItemLogic;
    }(rmPlaylistItemLogic.rm_coreservices.RE_PlaylistItem_Logic));
    rm_coreservices.RE_PlaylistItem_MediaItemLogic = RE_PlaylistItem_MediaItemLogic;
})(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
//# sourceMappingURL=RE_PlaylistItem_MediaItemLogic.js.map