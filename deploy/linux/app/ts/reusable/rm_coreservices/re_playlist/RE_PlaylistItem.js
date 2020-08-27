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
var amPlaylistItemType = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItemType");
var rmGeneralEntity = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");
var rm_coreservices;
(function (rm_coreservices) {
    var RE_PlaylistItem = (function (_super) {
        __extends(RE_PlaylistItem, _super);
        function RE_PlaylistItem() {
            var _this = _super.call(this) || this;
            _this._playlistItemId = -1;
            _this._playlistItemName = "";
            _this._playlistItemType = amPlaylistItemType.am_coreservices.AE_PlaylistItemType.PlaylistItemType_None;
            _this._playlistItemTypeName = "PLAYLIST_ITEM";
            _this._parent = null;
            _this._logic = null;
            _this._prepareParameters = null;
            return _this;
        }
        RE_PlaylistItem.prototype.isContainer = function () {
            return false;
        };
        RE_PlaylistItem.prototype.setPlaylistItemIdAndName = function (playlistItemId, playlistItemName) {
            this._playlistItemId = playlistItemId;
            this._playlistItemName = playlistItemName;
        };
        RE_PlaylistItem.prototype.setPlaylistItemId = function (playlistItemId) {
            this._playlistItemId = playlistItemId;
        };
        RE_PlaylistItem.prototype.getPlaylistItemId = function () {
            return this._playlistItemId;
        };
        RE_PlaylistItem.prototype.setPlaylistItemName = function (playlistItemName) {
            this._playlistItemName = playlistItemName;
        };
        RE_PlaylistItem.prototype.getPlaylistItemName = function () {
            return this._playlistItemName;
        };
        RE_PlaylistItem.prototype.setPlaylistItemType = function (playlistItemType) {
            this._playlistItemType = playlistItemType;
        };
        RE_PlaylistItem.prototype.getPlaylistItemType = function () {
            return this._playlistItemType;
        };
        RE_PlaylistItem.prototype.setPlaylistItemTypeName = function (playlistItemTypeName) {
            this._playlistItemTypeName = playlistItemTypeName;
        };
        RE_PlaylistItem.prototype.getPlaylistItemTypeName = function () {
            return this._playlistItemTypeName;
        };
        RE_PlaylistItem.prototype.getPlaylistItems = function () {
            return null;
        };
        RE_PlaylistItem.prototype.toJSONString = function () {
            return "";
        };
        RE_PlaylistItem.prototype.setParent = function (parent) {
            this._parent = parent;
        };
        RE_PlaylistItem.prototype.getParent = function () {
            return this._parent;
        };
        RE_PlaylistItem.prototype.getStream = function () {
            var self = this;
            if (this.getPlaylistItemType() == amPlaylistItemType.am_coreservices.AE_PlaylistItemType.PlaylistItemType_Stream)
                return self;
            var crtParent = this.getParent();
            if (crtParent == null)
                return null;
            return crtParent.getStream();
        };
        RE_PlaylistItem.prototype.setLogic = function (logic) {
            this._logic = logic;
            this._logic.setOwner(this);
        };
        RE_PlaylistItem.prototype.getLogic = function () {
            return this._logic;
        };
        RE_PlaylistItem.prototype.setPrepareParams = function (prepareParameters) {
            this._prepareParameters = prepareParameters;
        };
        RE_PlaylistItem.prototype.getPrepareParams = function () {
            return this._prepareParameters;
        };
        RE_PlaylistItem.prototype.loadProperties = function (playlistType, jsonObject, aPlaylistFile, aParent, error, context, callback) {
            if (playlistType == "mood_v5")
                return this.loadProperties_MoodV5(playlistType, jsonObject, aPlaylistFile, aParent, error, context, callback);
            if (playlistType == "custom_v1")
                return this.loadProperties_CustomV1(playlistType, jsonObject, aPlaylistFile, aParent, error, context, callback);
        };
        RE_PlaylistItem.prototype.loadProperties_MoodV5 = function (playlistType, jsonObject, aPlaylistFile, aParent, error, context, callback) {
        };
        RE_PlaylistItem.prototype.loadProperties_CustomV1 = function (playlistType, jsonObject, aPlaylistFile, aParent, error, context, callback) {
        };
        return RE_PlaylistItem;
    }(rmGeneralEntity.rm_general.R_Entity));
    rm_coreservices.RE_PlaylistItem = RE_PlaylistItem;
})(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
//# sourceMappingURL=RE_PlaylistItem.js.map