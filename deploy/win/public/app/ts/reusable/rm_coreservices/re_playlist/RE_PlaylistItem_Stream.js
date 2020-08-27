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
define(["require", "exports", "../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_PriorityPlaylist"], function (require, exports, rmCoreServicesPlaylistItemPriorityPlaylist) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_coreservices;
    (function (rm_coreservices) {
        var RE_PlaylistItem_Stream = /** @class */ (function (_super) {
            __extends(RE_PlaylistItem_Stream, _super);
            //-------------
            function RE_PlaylistItem_Stream() {
                var _this = _super.call(this) || this;
                _this._playlistItemTypeName = "STREAM";
                _this._stream_HardwareID = null;
                _this._stream_Height = null;
                _this._stream_ID = null;
                _this._stream_Name = null;
                _this._stream_Width = null;
                _this._stream_WindowsAccountId = null;
                _this._stream_X = null;
                _this._stream_Y = null;
                _this._channel_arrAspectRatioIDs = null;
                _this._channel_CreationDate = null;
                _this._channel_Description = null;
                _this._channel_Duration = null;
                _this._channel_ID = null;
                _this._channel_IsLocked = null;
                _this._channel_IsSharedFromParentWorkgroup = null;
                _this._channel_IsUnsharedButPartOfASharedContainer = null;
                _this._channel_LastLock = null;
                _this._channel_LastModificationDate = null;
                _this._channel_LastModifierId = null;
                _this._channel_Loop = null;
                _this._channel_MediaParentId = null;
                _this._channel_MediaType = null;
                _this._channel_Name = null;
                _this._channel_OwnerId = null;
                _this._channel_OwnerName = null;
                _this._channel_arrTagIDs = null;
                _this._channel_UserIDLock = null;
                _this._channel_UserNameLock = null;
                _this._channel_WorkgroupId = null;
                _this._channel_CustomID = null;
                _this._channel_arrDiffusionDays = null;
                _this._channel_EndTime = null;
                _this._channel_ExpectedPlayDate = null;
                _this._channel_ExpectedPlayTime = null;
                _this._channel_FirstDiffusion = null;
                _this._channel_LastDiffusion = null;
                _this._channel_arrMediaAccessRights = null;
                _this._channel_SharingType = null;
                _this._channel_StartTime = null;
                _this._channel_EventIds = null;
                _this._channel_LastActivation = null;
                _this._channel_Sequence = null;
                _this._channel_isForLocalInput = null;
                _this._channel_arrEvents = null;
                _this._channel_arrMedias_Statics_Extended = null;
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
                _this._staticMediaItems = null;
                _this._events = null;
                _this._tagManager = null;
                return _this;
            }
            //-------------------------
            //  set/get static medias
            //-------------------------
            //================================
            RE_PlaylistItem_Stream.prototype.getJsonStaticMedias = function () {
                return this._channel_arrMedias_Statics_Extended;
            };
            //================================
            RE_PlaylistItem_Stream.prototype.setJsonStaticMedias = function (jsonStaticMedias) {
                this._channel_arrMedias_Statics_Extended = jsonStaticMedias;
            };
            //-------------------------
            //  set/get tag manager
            //-------------------------
            //----------------------------
            RE_PlaylistItem_Stream.prototype.getTagManager = function () {
                return this._tagManager;
            };
            //----------------------------
            RE_PlaylistItem_Stream.prototype.setTagManager = function (tagManager) {
                this._tagManager = tagManager;
            };
            //-------------------------
            //  set/get properties
            //-------------------------
            //----------------
            RE_PlaylistItem_Stream.prototype.setEvents = function (events) {
                this._events = events;
            };
            //----------------
            RE_PlaylistItem_Stream.prototype.getEvents = function () {
                return this._events;
            };
            //----------------
            RE_PlaylistItem_Stream.prototype.setStaticMediaItems = function (staticMediaItems) {
                this._staticMediaItems = staticMediaItems;
            };
            //----------------
            RE_PlaylistItem_Stream.prototype.getStaticMediaItems = function () {
                return this._staticMediaItems;
            };
            //----------------
            RE_PlaylistItem_Stream.prototype.setStreamID = function (ID) {
                this._stream_ID = ID;
            };
            //----------------
            RE_PlaylistItem_Stream.prototype.getStreamID = function () {
                return this._stream_ID;
            };
            //------------------------
            RE_PlaylistItem_Stream.prototype.setStreamName = function (Name) {
                this._stream_Name = Name;
            };
            //----------------
            RE_PlaylistItem_Stream.prototype.getStreamName = function () {
                return this._stream_Name;
            };
            //---------------------
            RE_PlaylistItem_Stream.prototype.setHardwareID = function (HardwareID) {
                this._stream_HardwareID = HardwareID;
            };
            //----------------
            RE_PlaylistItem_Stream.prototype.getHardwareID = function () {
                return this._stream_HardwareID;
            };
            //----------------------
            RE_PlaylistItem_Stream.prototype.setWindowsAccountId = function (WindowsAccountId) {
                this._stream_WindowsAccountId = WindowsAccountId;
            };
            //----------------
            RE_PlaylistItem_Stream.prototype.getWindowsAccountId = function () {
                return this._stream_WindowsAccountId;
            };
            //------------------------------
            RE_PlaylistItem_Stream.prototype.loadProperties = function (playlistType, jsonObject, aPlaylistFile, aParent, error, context, callback) {
                if (playlistType == "mood_v5")
                    return this.loadProperties_MoodV5(playlistType, jsonObject, aPlaylistFile, aParent, error, context, callback);
                if (playlistType == "custom_v1")
                    return this.loadProperties_CustomV1(playlistType, jsonObject, aPlaylistFile, aParent, error, context, callback);
            };
            //------------------------------
            RE_PlaylistItem_Stream.prototype.loadProperties_MoodV5 = function (playlistType, jsonObject, aPlaylistFile, aParent, error, context, callback) {
            };
            //------------------------------
            RE_PlaylistItem_Stream.prototype.loadProperties_CustomV1 = function (playlistType, jsonObject, aPlaylistFile, aParent, error, context, callback) {
            };
            //-----------------------------------------------------
            RE_PlaylistItem_Stream.prototype.toJSONString = function () {
                var result = "{";
                result += JSON.stringify("HardwareID") + ":" + JSON.stringify(this._stream_HardwareID);
                result += "," + JSON.stringify("Height") + ":" + JSON.stringify(this._stream_Height);
                result += "," + JSON.stringify("ID") + ":" + JSON.stringify(this._stream_ID);
                result += "," + JSON.stringify("Name") + ":" + JSON.stringify(this._stream_Name);
                result += "," + JSON.stringify("Width") + ":" + JSON.stringify(this._stream_Width);
                result += "," + JSON.stringify("WindowsAccountId") + ":" + JSON.stringify(this._stream_WindowsAccountId);
                result += "," + JSON.stringify("X") + ":" + JSON.stringify(this._stream_X);
                result += "," + JSON.stringify("Y") + ":" + JSON.stringify(this._stream_Y);
                result += "," + JSON.stringify("Channel_Extended") + ":{";
                result += JSON.stringify("AspectRatioIDs") + ":" + JSON.stringify(this._channel_arrAspectRatioIDs);
                result += "," + JSON.stringify("CreationDate") + ":" + JSON.stringify(this._channel_CreationDate);
                result += "," + JSON.stringify("Description") + ":" + JSON.stringify(this._channel_Description);
                result += "," + JSON.stringify("Duration") + ":" + JSON.stringify(this._channel_Duration);
                result += "," + JSON.stringify("ID") + ":" + JSON.stringify(this._channel_ID);
                result += "," + JSON.stringify("IsLocked") + ":" + JSON.stringify(this._channel_IsLocked);
                result += "," + JSON.stringify("IsSharedFromParentWorkgroup") + ":" + JSON.stringify(this._channel_IsSharedFromParentWorkgroup);
                result += "," + JSON.stringify("IsUnsharedButPartOfASharedContainer") + ":" + JSON.stringify(this._channel_IsUnsharedButPartOfASharedContainer);
                result += "," + JSON.stringify("LastLock") + ":" + JSON.stringify(this._channel_LastLock);
                result += "," + JSON.stringify("LastModificationDate") + ":" + JSON.stringify(this._channel_LastModificationDate);
                result += "," + JSON.stringify("LastModifierId") + ":" + JSON.stringify(this._channel_LastModifierId);
                result += "," + JSON.stringify("Loop") + ":" + JSON.stringify(this._channel_Loop);
                result += "," + JSON.stringify("MediaParentId") + ":" + JSON.stringify(this._channel_MediaParentId);
                result += "," + JSON.stringify("MediaType") + ":" + JSON.stringify(this._channel_MediaType);
                result += "," + JSON.stringify("Name") + ":" + JSON.stringify(this._channel_Name);
                result += "," + JSON.stringify("OwnerId") + ":" + JSON.stringify(this._channel_OwnerId);
                result += "," + JSON.stringify("OwnerName") + ":" + JSON.stringify(this._channel_OwnerName);
                result += "," + JSON.stringify("TagIDs") + ":" + JSON.stringify(this._channel_arrTagIDs);
                result += "," + JSON.stringify("UserIDLock") + ":" + JSON.stringify(this._channel_UserIDLock);
                result += "," + JSON.stringify("UserNameLock") + ":" + JSON.stringify(this._channel_UserNameLock);
                result += "," + JSON.stringify("WorkgroupId") + ":" + JSON.stringify(this._channel_WorkgroupId);
                result += "," + JSON.stringify("CustomID") + ":" + JSON.stringify(this._channel_CustomID);
                result += "," + JSON.stringify("DiffusionDays") + ":" + JSON.stringify(this._channel_arrDiffusionDays);
                result += "," + JSON.stringify("EndTime") + ":" + JSON.stringify(this._channel_EndTime);
                result += "," + JSON.stringify("ExpectedPlayDate") + ":" + JSON.stringify(this._channel_ExpectedPlayDate);
                result += "," + JSON.stringify("ExpectedPlayTime") + ":" + JSON.stringify(this._channel_ExpectedPlayTime);
                result += "," + JSON.stringify("FirstDiffusion") + ":" + JSON.stringify(this._channel_FirstDiffusion);
                result += "," + JSON.stringify("LastDiffusion") + ":" + JSON.stringify(this._channel_LastDiffusion);
                result += "," + JSON.stringify("MediaAccessRights") + ":" + JSON.stringify(this._channel_arrMediaAccessRights);
                result += "," + JSON.stringify("SharingType") + ":" + JSON.stringify(this._channel_SharingType);
                result += "," + JSON.stringify("StartTime") + ":" + JSON.stringify(this._channel_StartTime);
                result += "," + JSON.stringify("EventIds") + ":" + JSON.stringify(this._channel_EventIds);
                result += "," + JSON.stringify("LastActivation") + ":" + JSON.stringify(this._channel_LastActivation);
                result += "," + JSON.stringify("Sequence") + ":" + JSON.stringify(this._channel_Sequence);
                result += "," + JSON.stringify("isForLocalInput") + ":" + JSON.stringify(this._channel_isForLocalInput);
                result += "," + JSON.stringify("Events") + ":" + this._events.toJSONString();
                result += "," + JSON.stringify("Medias_Statics_Extended") + ":" + this._staticMediaItems.toJSONString();
                //if (this._events != null)
                //result += ","  + JSON.stringify("Events")               + ":"  + this._events.toJSONString();
                //else
                //result += ","  + JSON.stringify("Events")               + ":"  + JSON.stringify(this._channel_arrEvents);
                //result += ","  + JSON.stringify("Medias_Statics_Extended") + ":"  + JSON.stringify(this._channel_arrMedias_Statics_Extended);
                result += "," + JSON.stringify("Playlist_Extended") + ":";
                result += this._playlistItems[0].toJSONString();
                result += "}";
                result += "}";
                return result;
            };
            return RE_PlaylistItem_Stream;
        }(rmCoreServicesPlaylistItemPriorityPlaylist.rm_coreservices.RE_PlaylistItem_PriorityPlaylist));
        rm_coreservices.RE_PlaylistItem_Stream = RE_PlaylistItem_Stream;
    })(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
});
//# sourceMappingURL=RE_PlaylistItem_Stream.js.map