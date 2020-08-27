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
var rmCoreServicesPlaylistItem = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem");
var rm_coreservices;
(function (rm_coreservices) {
    var RE_PlaylistItem_Container = (function (_super) {
        __extends(RE_PlaylistItem_Container, _super);
        function RE_PlaylistItem_Container() {
            var _this = _super.call(this) || this;
            _this._playlistItems = new Array();
            _this._playlistItemTypeName = "CONTAINER";
            return _this;
        }
        RE_PlaylistItem_Container.prototype.isContainer = function () {
            return true;
        };
        RE_PlaylistItem_Container.prototype.setPlaylistItems = function (playlistItems) {
            this._playlistItems = playlistItems;
        };
        RE_PlaylistItem_Container.prototype.getPlaylistItems = function () {
            return this._playlistItems;
        };
        RE_PlaylistItem_Container.prototype.addPlaylistItem = function (playlistItem) {
            playlistItem.setParent(this);
            this._playlistItems.push(playlistItem);
        };
        RE_PlaylistItem_Container.prototype.loadProperties = function (playlistType, jsonObject, aPlaylistFile, aParent, error, context, callback) {
            if (playlistType == "mood_v5")
                return this.loadProperties_MoodV5(playlistType, jsonObject, aPlaylistFile, aParent, error, context, callback);
            if (playlistType == "custom_v1")
                return this.loadProperties_CustomV1(playlistType, jsonObject, aPlaylistFile, aParent, error, context, callback);
        };
        RE_PlaylistItem_Container.prototype.loadProperties_MoodV5 = function (playlistType, jsonObject, aPlaylistFile, aParent, error, context, callback) {
        };
        RE_PlaylistItem_Container.prototype.loadProperties_CustomV1 = function (playlistType, jsonObject, aPlaylistFile, aParent, error, context, callback) {
        };
        RE_PlaylistItem_Container.prototype.toJSONString = function () {
            var result = "";
            result += "[";
            var isFirstTime = true;
            for (var iEventItem = 0; iEventItem < this._playlistItems.length; iEventItem++) {
                if (isFirstTime == true) {
                    result += this._playlistItems[iEventItem].toJSONString();
                    isFirstTime = false;
                    continue;
                }
                result += "," + this._playlistItems[iEventItem].toJSONString();
            }
            result += "]";
            result += "";
            return result;
        };
        return RE_PlaylistItem_Container;
    }(rmCoreServicesPlaylistItem.rm_coreservices.RE_PlaylistItem));
    rm_coreservices.RE_PlaylistItem_Container = RE_PlaylistItem_Container;
})(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
//# sourceMappingURL=RE_PlaylistItem_Container.js.map