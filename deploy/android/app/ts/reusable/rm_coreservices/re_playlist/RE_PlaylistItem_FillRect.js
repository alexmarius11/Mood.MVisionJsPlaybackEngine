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
var rmPlaylistMediaItem = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_MediaItem");
var rm_coreservices;
(function (rm_coreservices) {
    var RE_PlaylistItem_FillRect = (function (_super) {
        __extends(RE_PlaylistItem_FillRect, _super);
        function RE_PlaylistItem_FillRect() {
            var _this = _super.call(this) || this;
            _this._playlistItemTypeName = "FILL_RECT";
            _this._main_BackColor = null;
            _this._main_BackImage = null;
            _this._main_H = null;
            _this._main_ID = null;
            _this._main_IsMainZone = null;
            _this._main_Name = null;
            _this._main_Playlist = null;
            _this._main_VirtualPlaylistId = null;
            _this._main_W = null;
            _this._main_X = null;
            _this._main_Y = null;
            _this._main_Z = null;
            _this._meta_ID = null;
            _this._meta_Name = null;
            _this._meta_CustomID = null;
            _this._meta_MediaType = null;
            _this._diff_duration = null;
            _this._diff_startDate = null;
            _this._diff_endDate = null;
            _this._diff_startTime = null;
            _this._diff_endTime = null;
            _this._diff_weekdays = null;
            return _this;
        }
        RE_PlaylistItem_FillRect.prototype.loadProperties = function (playlistType, jsonObject, aPlaylistFile, aParent, error, context, callback) {
            if (playlistType == "mood_v5")
                return this.loadProperties_MoodV5(playlistType, jsonObject, aPlaylistFile, aParent, error, context, callback);
            if (playlistType == "custom_v1")
                return this.loadProperties_CustomV1(playlistType, jsonObject, aPlaylistFile, aParent, error, context, callback);
        };
        RE_PlaylistItem_FillRect.prototype.loadProperties_MoodV5 = function (playlistType, jsonObject, aPlaylistFile, aParent, error, context, callback) {
        };
        RE_PlaylistItem_FillRect.prototype.loadProperties_CustomV1 = function (playlistType, jsonObject, aPlaylistFile, aParent, error, context, callback) {
        };
        RE_PlaylistItem_FillRect.prototype.toJSONString = function () {
            var result = "{";
            result += "BackColor : " + JSON.stringify(this._main_BackColor);
            result += "," + "BackImage : " + JSON.stringify(this._main_BackImage);
            result += "," + "H : " + JSON.stringify(this._main_H);
            result += "," + "ID : " + JSON.stringify(this._main_ID);
            result += "," + "IsMainZone : " + JSON.stringify(this._main_IsMainZone);
            result += "," + "Name : " + JSON.stringify(this._main_Name);
            result += "," + "Playlist : " + JSON.stringify(this._main_Playlist);
            result += "," + "VirtualPlaylistId : " + JSON.stringify(this._main_VirtualPlaylistId);
            result += "," + "W : " + JSON.stringify(this._main_W);
            result += "," + "X : " + JSON.stringify(this._main_X);
            result += "," + "Y : " + JSON.stringify(this._main_Y);
            result += "," + "Z : " + JSON.stringify(this._main_Z);
            result += "}";
            return result;
        };
        return RE_PlaylistItem_FillRect;
    }(rmPlaylistMediaItem.rm_coreservices.RE_PlaylistItem_MediaItem));
    rm_coreservices.RE_PlaylistItem_FillRect = RE_PlaylistItem_FillRect;
})(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
//# sourceMappingURL=RE_PlaylistItem_FillRect.js.map