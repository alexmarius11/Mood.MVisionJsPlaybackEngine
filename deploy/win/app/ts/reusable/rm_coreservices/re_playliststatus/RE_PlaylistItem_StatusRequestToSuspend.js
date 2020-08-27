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
var rmPlaylistItemStatus = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_Status");
var rm_coreservices;
(function (rm_coreservices) {
    var RE_PlaylistItem_StatusRequestToSuspend = (function (_super) {
        __extends(RE_PlaylistItem_StatusRequestToSuspend, _super);
        function RE_PlaylistItem_StatusRequestToSuspend() {
            var _this = _super.call(this) || this;
            _this._transitionTo_StatusSuspended = null;
            _this._transitionTo_StatusError = null;
            _this._transitionTo_StatusEnd_or_Similar = null;
            _this._transitionTo_StatusRequestToAbort = null;
            _this._transitionTo_StatusRequestToEnd = null;
            return _this;
        }
        RE_PlaylistItem_StatusRequestToSuspend.prototype.injectDependencies = function (aSrvContainer, aSrvLocator, aSrvLog, error) {
            _super.prototype.injectDependencies.call(this, aSrvContainer, aSrvLocator, aSrvLog, error);
            this._transitionTo_StatusSuspended = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemTransition(error);
            this._transitionTo_StatusError = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemTransition(error);
            this._transitionTo_StatusEnd_or_Similar = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemTransition(error);
            this._transitionTo_StatusRequestToAbort = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemTransition(error);
            this._transitionTo_StatusRequestToEnd = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemTransition(error);
            return 0;
        };
        return RE_PlaylistItem_StatusRequestToSuspend;
    }(rmPlaylistItemStatus.rm_coreservices.RE_PlaylistItem_Status));
    rm_coreservices.RE_PlaylistItem_StatusRequestToSuspend = RE_PlaylistItem_StatusRequestToSuspend;
})(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
//# sourceMappingURL=RE_PlaylistItem_StatusRequestToSuspend.js.map