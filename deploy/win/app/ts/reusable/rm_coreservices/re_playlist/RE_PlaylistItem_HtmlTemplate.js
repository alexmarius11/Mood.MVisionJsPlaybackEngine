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
var rmCoreServicesPlaylistItem = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_WebPage");
var rm_coreservices;
(function (rm_coreservices) {
    var RE_PlaylistItem_HtmlTemplate = (function (_super) {
        __extends(RE_PlaylistItem_HtmlTemplate, _super);
        function RE_PlaylistItem_HtmlTemplate() {
            var _this = _super.call(this) || this;
            _this._playlistItemType = amPlaylistItemType.am_coreservices.AE_PlaylistItemType.PlaylistItemType_HtmlTemplate;
            _this._playlistItemTypeName = "HTML_TEMPLATE";
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
            _this._main_ContentFileID = null;
            _this._main_ContentFileName = null;
            _this._main_ContentFilePlayerShaCode = null;
            _this._main_ContentFileStateID = null;
            _this._main_ContentPlayerFileName = null;
            _this._main_Flag = null;
            _this._main_Properties = null;
            _this._main_RemoteMediaProperties = null;
            _this._main_State = null;
            _this._main_arrHtmlParameters_Extended = null;
            _this._main_arrHtml_Template_Resources = null;
            _this._meta_ID = null;
            _this._meta_Name = null;
            _this._meta_CustomID = null;
            _this._meta_MediaType = null;
            _this._meta_ContentFileName = null;
            _this._meta_ContentPlayerFileName = null;
            _this._diff_duration = null;
            _this._diff_startDate = null;
            _this._diff_endDate = null;
            _this._diff_startTime = null;
            _this._diff_endTime = null;
            _this._diff_weekdays = null;
            return _this;
        }
        RE_PlaylistItem_HtmlTemplate.prototype.loadProperties = function (playlistType, jsonObject, aPlaylistFile, aParent, error, context, callback) {
            if (playlistType == "mood_v5")
                return this.loadProperties_MoodV5(playlistType, jsonObject, aPlaylistFile, aParent, error, context, callback);
            if (playlistType == "custom_v1")
                return this.loadProperties_CustomV1(playlistType, jsonObject, aPlaylistFile, aParent, error, context, callback);
        };
        RE_PlaylistItem_HtmlTemplate.prototype.loadProperties_MoodV5 = function (playlistType, jsonObject, aPlaylistFile, aParent, error, context, callback) {
        };
        RE_PlaylistItem_HtmlTemplate.prototype.loadProperties_CustomV1 = function (playlistType, jsonObject, aPlaylistFile, aParent, error, context, callback) {
        };
        RE_PlaylistItem_HtmlTemplate.prototype.toJSONString = function () {
            var result = "{";
            result += JSON.stringify("__type") + ":" + JSON.stringify(this._main_type);
            result += "," + JSON.stringify("AspectRatioIDs") + ":" + JSON.stringify(this._main_arrAspectRatioIDs);
            result += "," + JSON.stringify("CreationDate") + ":" + JSON.stringify(this._main_CreationDate);
            result += "," + JSON.stringify("Description") + ":" + JSON.stringify(this._main_Description);
            result += "," + JSON.stringify("Duration") + ":" + JSON.stringify(this._main_Duration);
            result += "," + JSON.stringify("ID") + ":" + JSON.stringify(this._main_ID);
            result += "," + JSON.stringify("IsLocked") + ":" + JSON.stringify(this._main_IsLocked);
            result += "," + JSON.stringify("IsSharedFromParentWorkgroup") + ":" + JSON.stringify(this._main_IsSharedFromParentWorkgroup);
            result += "," + JSON.stringify("IsUnsharedButPartOfASharedContainer") + ":" + JSON.stringify(this._main_IsUnsharedButPartOfASharedContainer);
            result += "," + JSON.stringify("LastLock") + ":" + JSON.stringify(this._main_LastLock);
            result += "," + JSON.stringify("LastModificationDate") + ":" + JSON.stringify(this._main_LastModificationDate);
            result += "," + JSON.stringify("LastModifierId") + ":" + JSON.stringify(this._main_LastModifierId);
            result += "," + JSON.stringify("Loop") + ":" + JSON.stringify(this._main_Loop);
            result += "," + JSON.stringify("MediaParentId") + ":" + JSON.stringify(this._main_MediaParentId);
            result += "," + JSON.stringify("MediaType") + ":" + JSON.stringify(this._main_MediaType);
            result += "," + JSON.stringify("Name") + ":" + JSON.stringify(this._main_Name);
            result += "," + JSON.stringify("OwnerId") + ":" + JSON.stringify(this._main_OwnerId);
            result += "," + JSON.stringify("OwnerName") + ":" + JSON.stringify(this._main_OwnerName);
            result += "," + JSON.stringify("TagIDs") + ":" + JSON.stringify(this._main_arrTagIDs);
            result += "," + JSON.stringify("UserIDLock") + ":" + JSON.stringify(this._main_UserIDLock);
            result += "," + JSON.stringify("UserNameLock") + ":" + JSON.stringify(this._main_UserNameLock);
            result += "," + JSON.stringify("WorkgroupId") + ":" + JSON.stringify(this._main_WorkgroupId);
            result += "," + JSON.stringify("CustomID") + ":" + JSON.stringify(this._main_CustomID);
            result += "," + JSON.stringify("DiffusionDays") + ":" + JSON.stringify(this._main_arrDiffusionDays);
            result += "," + JSON.stringify("EndTime") + ":" + JSON.stringify(this._main_EndTime);
            result += "," + JSON.stringify("ExpectedPlayDate") + ":" + JSON.stringify(this._main_ExpectedPlayDate);
            result += "," + JSON.stringify("ExpectedPlayTime") + ":" + JSON.stringify(this._main_ExpectedPlayTime);
            result += "," + JSON.stringify("FirstDiffusion") + ":" + JSON.stringify(this._main_FirstDiffusion);
            result += "," + JSON.stringify("LastDiffusion") + ":" + JSON.stringify(this._main_LastDiffusion);
            result += "," + JSON.stringify("MediaAccessRights") + ":" + JSON.stringify(this._main_arrMediaAccessRights);
            result += "," + JSON.stringify("SharingType") + ":" + JSON.stringify(this._main_SharingType);
            result += "," + JSON.stringify("StartTime") + ":" + JSON.stringify(this._main_StartTime);
            result += "," + JSON.stringify("ContentFileID") + ":" + JSON.stringify(this._main_ContentFileID);
            result += "," + JSON.stringify("ContentFileName") + ":" + JSON.stringify(this._main_ContentFileName);
            result += "," + JSON.stringify("ContentFilePlayerShaCode") + ":" + JSON.stringify(this._main_ContentFilePlayerShaCode);
            result += "," + JSON.stringify("ContentFileStateID") + ":" + JSON.stringify(this._main_ContentFileStateID);
            result += "," + JSON.stringify("ContentPlayerFileName") + ":" + JSON.stringify(this._main_ContentPlayerFileName);
            result += "," + JSON.stringify("Flag") + ":" + JSON.stringify(this._main_Flag);
            result += "," + JSON.stringify("Properties") + ":" + JSON.stringify(this._main_Properties);
            result += "," + JSON.stringify("RemoteMediaProperties") + ":" + JSON.stringify(this._main_RemoteMediaProperties);
            result += "," + JSON.stringify("State") + ":" + JSON.stringify(this._main_State);
            result += "," + JSON.stringify("HtmlParameters_Extended") + ":" + JSON.stringify(this._main_arrHtmlParameters_Extended);
            result += "," + JSON.stringify("Html_Template_Resources") + ":" + JSON.stringify(this._main_arrHtml_Template_Resources);
            result += "}";
            return result;
        };
        return RE_PlaylistItem_HtmlTemplate;
    }(rmCoreServicesPlaylistItem.rm_coreservices.RE_PlaylistItem_WebPage));
    rm_coreservices.RE_PlaylistItem_HtmlTemplate = RE_PlaylistItem_HtmlTemplate;
})(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
//# sourceMappingURL=RE_PlaylistItem_HtmlTemplate.js.map