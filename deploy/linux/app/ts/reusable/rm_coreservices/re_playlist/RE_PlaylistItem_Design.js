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
var rmCoreServicesPlaylistItemPlaylist = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_Playlist");
var rm_coreservices;
(function (rm_coreservices) {
    var RE_PlaylistItem_Design = (function (_super) {
        __extends(RE_PlaylistItem_Design, _super);
        function RE_PlaylistItem_Design() {
            var _this = _super.call(this) || this;
            _this._playlistItemTypeName = "DESIGN";
            _this._main_type = null;
            _this._main_arrAspectRatioIDs = null;
            _this._main_CreationDate = null;
            _this._main_Description = null;
            _this._main_Duration = null;
            _this._main_ID = null;
            _this._main_IsLocked = null;
            _this._main_IsSharedFromParentWorkgroup = null;
            _this._main_IsUnsharedButPartOfASharedContainer = null;
            _this._main_LastLock = null;
            _this._main_LastModificationDate = null;
            _this._main_LastModifierId = null;
            _this._main_Loop = null;
            _this._main_MediaParentId = null;
            _this._main_MediaType = null;
            _this._main_Name = null;
            _this._main_OwnerId = null;
            _this._main_OwnerName = null;
            _this._main_arrTagIDs = null;
            _this._main_UserIDLock = null;
            _this._main_UserNameLock = null;
            _this._main_WorkgroupId = null;
            _this._main_CustomID = null;
            _this._main_arrDiffusionDays = null;
            _this._main_EndTime = null;
            _this._main_ExpectedPlayDate = null;
            _this._main_ExpectedPlayTime = null;
            _this._main_FirstDiffusion = null;
            _this._main_LastDiffusion = null;
            _this._main_arrMediaAccessRights = null;
            _this._main_SharingType = null;
            _this._main_StartTime = null;
            _this._main_H = null;
            _this._main_ID_ASPECT_RATIO = null;
            _this._main_W = null;
            _this._main_X = null;
            _this._main_Y = null;
            _this._main_arrZones = null;
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
        RE_PlaylistItem_Design.prototype.loadProperties = function (playlistType, jsonObject, aPlaylistFile, aParent, error, context, callback) {
            if (playlistType == "mood_v5")
                return this.loadProperties_MoodV5(playlistType, jsonObject, aPlaylistFile, aParent, error, context, callback);
            if (playlistType == "custom_v1")
                return this.loadProperties_CustomV1(playlistType, jsonObject, aPlaylistFile, aParent, error, context, callback);
        };
        RE_PlaylistItem_Design.prototype.loadProperties_MoodV5 = function (playlistType, jsonObject, aPlaylistFile, aParent, error, context, callback) {
        };
        RE_PlaylistItem_Design.prototype.loadProperties_CustomV1 = function (playlistType, jsonObject, aPlaylistFile, aParent, error, context, callback) {
        };
        RE_PlaylistItem_Design.prototype.toJSONString = function () {
            var result = "{";
            result += "__type : " + JSON.stringify(this._main_type);
            result += "," + "AspectRatioIDs : " + JSON.stringify(this._main_arrAspectRatioIDs);
            result += "," + "CreationDate : " + JSON.stringify(this._main_CreationDate);
            result += "," + "Description : " + JSON.stringify(this._main_Description);
            result += "," + "Duration : " + JSON.stringify(this._main_Duration);
            result += "," + "ID : " + JSON.stringify(this._main_ID);
            result += "," + "IsLocked : " + JSON.stringify(this._main_IsLocked);
            result += "," + "IsSharedFromParentWorkgroup : " + JSON.stringify(this._main_IsSharedFromParentWorkgroup);
            result += "," + "IsUnsharedButPartOfASharedContainer : " + JSON.stringify(this._main_IsUnsharedButPartOfASharedContainer);
            result += "," + "LastLock : " + JSON.stringify(this._main_LastLock);
            result += "," + "LastModificationDate : " + JSON.stringify(this._main_LastModificationDate);
            result += "," + "LastModifierId : " + JSON.stringify(this._main_LastModifierId);
            result += "," + "Loop : " + JSON.stringify(this._main_Loop);
            result += "," + "MediaParentId : " + JSON.stringify(this._main_MediaParentId);
            result += "," + "MediaType : " + JSON.stringify(this._main_MediaType);
            result += "," + "Name : " + JSON.stringify(this._main_Name);
            result += "," + "OwnerId : " + JSON.stringify(this._main_OwnerId);
            result += "," + "OwnerName : " + JSON.stringify(this._main_OwnerName);
            result += "," + "TagIDs : " + JSON.stringify(this._main_arrTagIDs);
            result += "," + "UserIDLock : " + JSON.stringify(this._main_UserIDLock);
            result += "," + "UserNameLock : " + JSON.stringify(this._main_UserNameLock);
            result += "," + "WorkgroupId : " + JSON.stringify(this._main_WorkgroupId);
            result += "," + "CustomID : " + JSON.stringify(this._main_CustomID);
            result += "," + "DiffusionDays : " + JSON.stringify(this._main_arrDiffusionDays);
            result += "," + "EndTime : " + JSON.stringify(this._main_EndTime);
            result += "," + "ExpectedPlayDate : " + JSON.stringify(this._main_ExpectedPlayDate);
            result += "," + "ExpectedPlayTime : " + JSON.stringify(this._main_ExpectedPlayTime);
            result += "," + "FirstDiffusion : " + JSON.stringify(this._main_FirstDiffusion);
            result += "," + "LastDiffusion : " + JSON.stringify(this._main_LastDiffusion);
            result += "," + "MediaAccessRights : " + JSON.stringify(this._main_arrMediaAccessRights);
            result += "," + "SharingType : " + JSON.stringify(this._main_SharingType);
            result += "," + "StartTime : " + JSON.stringify(this._main_StartTime);
            result += "," + "H : " + JSON.stringify(this._main_H);
            result += "," + "ID_ASPECT_RATIO : " + JSON.stringify(this._main_ID_ASPECT_RATIO);
            result += "," + "W : " + JSON.stringify(this._main_W);
            result += "," + "X : " + JSON.stringify(this._main_X);
            result += "," + "Y : " + JSON.stringify(this._main_Y);
            result += "," + "Zones : " + JSON.stringify(this._main_arrZones);
            result += "," + "Zones_Extended : [ ";
            var isFirstTime = true;
            for (var iZone = 0; iZone < this._playlistItems.length; iZone++) {
                if (isFirstTime == true) {
                    result += this._playlistItems[iZone].toJSONString();
                    isFirstTime = false;
                    continue;
                }
                result += "," + this._playlistItems[iZone].toJSONString();
            }
            result += " ] ";
            result += "}";
            return result;
        };
        return RE_PlaylistItem_Design;
    }(rmCoreServicesPlaylistItemPlaylist.rm_coreservices.RE_PlaylistItem_Playlist));
    rm_coreservices.RE_PlaylistItem_Design = RE_PlaylistItem_Design;
})(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
//# sourceMappingURL=RE_PlaylistItem_Design.js.map