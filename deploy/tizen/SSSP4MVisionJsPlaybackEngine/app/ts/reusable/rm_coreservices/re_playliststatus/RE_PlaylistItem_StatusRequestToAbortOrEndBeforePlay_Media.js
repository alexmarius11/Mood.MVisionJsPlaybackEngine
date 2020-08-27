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
define(["require", "exports", "../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay"], function (require, exports, rmPlaylistItemStatus) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_coreservices;
    (function (rm_coreservices) {
        var RE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay_Media = /** @class */ (function (_super) {
            __extends(RE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay_Media, _super);
            //----------------
            function RE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay_Media() {
                var _this = _super.call(this) || this;
                _this._statusName = "REQUEST-TO-ABORT-OR-END-BEFORE-PLAY_MEDIA";
                return _this;
            }
            //------------------------------
            RE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay_Media.prototype.injectDependencies = function (aSrvContainer, aSrvLocator, aSrvLog, error) {
                _super.prototype.injectDependencies.call(this, aSrvContainer, aSrvLocator, aSrvLog, error);
                //this._transitionTo_StatusDisable                  = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemTransition(error);
                return 0;
            };
            return RE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay_Media;
        }(rmPlaylistItemStatus.rm_coreservices.RE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay));
        rm_coreservices.RE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay_Media = RE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay_Media;
    })(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
});
//# sourceMappingURL=RE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay_Media.js.map