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
define(["require", "exports", "../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_Status"], function (require, exports, rmPlaylistItemStatus) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_coreservices;
    (function (rm_coreservices) {
        var RE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay = /** @class */ (function (_super) {
            __extends(RE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay, _super);
            //----------------
            function RE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay() {
                var _this = _super.call(this) || this;
                _this._transitionTo_StatusRequestToPlay_or_Similar = null;
                _this._transitionTo_StatusError = null;
                _this._transitionTo_StatusEnd = null;
                _this._transitionTo_StatusRequestToAbort = null;
                _this._transitionTo_StatusRequestToEnd = null;
                return _this;
            }
            //------------------------------
            RE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay.prototype.injectDependencies = function (aSrvContainer, aSrvLocator, aSrvLog, error) {
                _super.prototype.injectDependencies.call(this, aSrvContainer, aSrvLocator, aSrvLog, error);
                this._transitionTo_StatusRequestToPlay_or_Similar = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemTransition(error);
                this._transitionTo_StatusError = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemTransition(error);
                this._transitionTo_StatusEnd = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemTransition(error);
                this._transitionTo_StatusRequestToAbort = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemTransition(error);
                this._transitionTo_StatusRequestToEnd = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemTransition(error);
                return 0;
            };
            return RE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay;
        }(rmPlaylistItemStatus.rm_coreservices.RE_PlaylistItem_Status));
        rm_coreservices.RE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay = RE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay;
    })(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
});
//# sourceMappingURL=RE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay.js.map