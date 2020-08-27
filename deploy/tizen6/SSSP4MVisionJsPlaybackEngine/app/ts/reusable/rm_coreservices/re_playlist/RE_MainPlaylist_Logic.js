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
define(["require", "exports", "../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_NextChildSelectionType", "../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_PlaylistLogic"], function (require, exports, amNextChildSelectionType, rmPlaylistItemPlaylistLogic) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_coreservices;
    (function (rm_coreservices) {
        var RE_MainPlaylist_Logic = /** @class */ (function (_super) {
            __extends(RE_MainPlaylist_Logic, _super);
            //----------------
            function RE_MainPlaylist_Logic() {
                var _this = _super.call(this) || this;
                _this._nextChildSelectionType = amNextChildSelectionType.am_coreservices.AE_NextChildSelectionType.NextChildSelectionType_OneAfterTheOther_NoLoop;
                _this._hasMultiplay = true;
                _this._hasARenderingRepresentation = false;
                _this._hasARenderingZone = false;
                return _this;
            }
            //======================
            RE_MainPlaylist_Logic.prototype.isDisable = function (refDate, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                return false;
            };
            return RE_MainPlaylist_Logic;
        }(rmPlaylistItemPlaylistLogic.rm_coreservices.RE_PlaylistItem_PlaylistLogic));
        rm_coreservices.RE_MainPlaylist_Logic = RE_MainPlaylist_Logic;
    })(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
});
//# sourceMappingURL=RE_MainPlaylist_Logic.js.map