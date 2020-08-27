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
define(["require", "exports", "../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_MediaItem"], function (require, exports, rmCoreServicesPlaylistItem) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_coreservices;
    (function (rm_coreservices) {
        var RE_PlaylistItem_TVPassThrough = /** @class */ (function (_super) {
            __extends(RE_PlaylistItem_TVPassThrough, _super);
            //----------------
            function RE_PlaylistItem_TVPassThrough() {
                var _this = _super.call(this) || this;
                _this._playlistItemTypeName = "TV_PASS_THROUGH";
                return _this;
            }
            //------------------------------
            RE_PlaylistItem_TVPassThrough.prototype.loadProperties = function (playlistType, jsonObject, aPlaylistFile, aParent, error, context, callback) {
                if (playlistType == "mood_v5")
                    return this.loadProperties_MoodV5(playlistType, jsonObject, aPlaylistFile, aParent, error, context, callback);
                if (playlistType == "custom_v1")
                    return this.loadProperties_CustomV1(playlistType, jsonObject, aPlaylistFile, aParent, error, context, callback);
            };
            //------------------------------
            RE_PlaylistItem_TVPassThrough.prototype.loadProperties_MoodV5 = function (playlistType, jsonObject, aPlaylistFile, aParent, error, context, callback) {
            };
            //------------------------------
            RE_PlaylistItem_TVPassThrough.prototype.loadProperties_CustomV1 = function (playlistType, jsonObject, aPlaylistFile, aParent, error, context, callback) {
            };
            return RE_PlaylistItem_TVPassThrough;
        }(rmCoreServicesPlaylistItem.rm_coreservices.RE_PlaylistItem_MediaItem));
        rm_coreservices.RE_PlaylistItem_TVPassThrough = RE_PlaylistItem_TVPassThrough;
    })(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
});
//# sourceMappingURL=RE_PlaylistItem_TVPassThrough.js.map