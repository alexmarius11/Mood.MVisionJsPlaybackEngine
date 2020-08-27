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
define(["require", "exports", "../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_Container"], function (require, exports, rmPlaylistContainer) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_coreservices;
    (function (rm_coreservices) {
        var RE_MainPlaylist = /** @class */ (function (_super) {
            __extends(RE_MainPlaylist, _super);
            //----------------
            function RE_MainPlaylist() {
                var _this = _super.call(this) || this;
                _this._playlistItemTypeName = "MAIN_PLAYLIST";
                _this._main_ID = null;
                _this._main_Name = null;
                _this._main_PlayerType = null;
                _this._main_SerialNumber = null;
                _this._main_SiteID = null;
                _this._main_arrStreamList = null;
                _this._main_WorkgroupID = null;
                _this._main_BrandType = null;
                _this._main_CompatibleHardwareVersions = null;
                _this._main_PaybackProfile = null;
                return _this;
            }
            //------------------------------
            RE_MainPlaylist.prototype.loadProperties = function (playlistType, jsonObject, aPlaylistFile, aParent, error, context, callback) {
                // not used - to be removed
                if (playlistType == "mood_v5")
                    return this.loadProperties_MoodV5(playlistType, jsonObject, aPlaylistFile, aParent, error, context, callback);
                if (playlistType == "custom_v1")
                    return this.loadProperties_CustomV1(playlistType, jsonObject, aPlaylistFile, aParent, error, context, callback);
            };
            //------------------------------
            RE_MainPlaylist.prototype.loadProperties_MoodV5 = function (playlistType, jsonObject, aPlaylistFile, aParent, error, context, callback) {
                //------------------------- load identification properties
                /*
                this._Name         = jsonObject.Name;
                this._PlayerType   = jsonObject.PlayerType;
                this._SerialNumber = jsonObject.SerialNumber;
                this._SiteID       = jsonObject.SiteID;
                //this._StreamList = jsonObject.StreamList[];
                this._WorkgroupID  = jsonObject.WorkgroupID;
                this._BrandType    = jsonObject.BrandType;
                this._CompatibleHardwareVersions = jsonObject.CompatibleHardwareVersions;
                this._PaybackProfile = jsonObject.PaybackProfile;
                */
            };
            //------------------------------
            RE_MainPlaylist.prototype.loadProperties_CustomV1 = function (playlistType, jsonObject, aPlaylistFile, aParent, error, context, callback) {
            };
            //------------------------------- 
            //   set/get properties
            //--------------------------------
            //----------------------------
            RE_MainPlaylist.prototype.setPlaylistID = function (ID) {
                this._main_ID = ID;
            };
            //---------------------------
            RE_MainPlaylist.prototype.getPlaylistID = function () {
                return this._main_ID;
            };
            //----------------------------
            RE_MainPlaylist.prototype.setPlaylistName = function (Name) {
                this._main_Name = Name;
            };
            //---------------------------
            RE_MainPlaylist.prototype.getPlaylistName = function () {
                return this._main_Name;
            };
            //------------------------
            RE_MainPlaylist.prototype.setPlayerType = function (PlayerType) {
                this._main_PlayerType = PlayerType;
            };
            //---------------------------
            RE_MainPlaylist.prototype.getPlayerType = function () {
                return this._main_PlayerType;
            };
            //---------------------------
            RE_MainPlaylist.prototype.setSerialNumber = function (SerialNumber) {
                this._main_SerialNumber = SerialNumber;
            };
            //---------------------------
            RE_MainPlaylist.prototype.getSerialNumber = function () {
                return this._main_SerialNumber;
            };
            //---------------------------
            RE_MainPlaylist.prototype.setSiteID = function (SiteID) {
                this._main_SiteID = SiteID;
            };
            //---------------------------
            RE_MainPlaylist.prototype.getSiteID = function () {
                return this._main_SiteID;
            };
            //---------------------------
            RE_MainPlaylist.prototype.setWorkgroupID = function (WorkgroupID) {
                this._main_WorkgroupID = WorkgroupID;
            };
            //---------------------------
            RE_MainPlaylist.prototype.getWorkgroupID = function () {
                return this._main_WorkgroupID;
            };
            //---------------------------
            RE_MainPlaylist.prototype.setBrandType = function (BrandType) {
                this._main_BrandType = BrandType;
            };
            //---------------------------
            RE_MainPlaylist.prototype.getBrandType = function () {
                return this._main_BrandType;
            };
            //---------------------------
            RE_MainPlaylist.prototype.setCompatibleHardwareVersions = function (CompatibleHardwareVersions) {
                this._main_CompatibleHardwareVersions = CompatibleHardwareVersions;
            };
            //---------------------------
            RE_MainPlaylist.prototype.getCompatibleHardwareVersions = function () {
                return this._main_CompatibleHardwareVersions;
            };
            //---------------------------
            RE_MainPlaylist.prototype.setPaybackProfile = function (PaybackProfile) {
                this._main_PaybackProfile = PaybackProfile;
            };
            //---------------------------
            RE_MainPlaylist.prototype.getPaybackProfile = function () {
                return this._main_PaybackProfile;
            };
            //-----------------------------------------------------
            RE_MainPlaylist.prototype.toJSONString = function () {
                var result = "{";
                result += JSON.stringify("ID") + ":" + JSON.stringify(this._main_ID);
                result += "," + JSON.stringify("Name") + ":" + JSON.stringify(this._main_Name);
                result += "," + JSON.stringify("PlayerType") + ":" + JSON.stringify(this._main_PlayerType);
                result += "," + JSON.stringify("SerialNumber") + ":" + JSON.stringify(this._main_SerialNumber);
                result += "," + JSON.stringify("SiteID") + ":" + JSON.stringify(this._main_SiteID);
                result += "," + JSON.stringify("StreamList") + ":" + JSON.stringify(this._main_arrStreamList);
                result += "," + JSON.stringify("WorkgroupID") + ":" + JSON.stringify(this._main_WorkgroupID);
                result += "," + JSON.stringify("BrandType") + ":" + JSON.stringify(this._main_BrandType);
                result += "," + JSON.stringify("CompatibleHardwareVersions") + ":" + JSON.stringify(this._main_CompatibleHardwareVersions);
                result += "," + JSON.stringify("PaybackProfile") + ":" + JSON.stringify(this._main_PaybackProfile);
                //-------------------- load Streams
                result += "," + JSON.stringify("Streams_Extended") + ":[";
                var isFirstTime = true;
                for (var iStreams = 0; iStreams < this._playlistItems.length; iStreams++) {
                    if (isFirstTime == true) {
                        result += this._playlistItems[iStreams].toJSONString();
                        isFirstTime = false;
                        continue;
                    }
                    result += "," + this._playlistItems[iStreams].toJSONString();
                }
                result += "]";
                result += "}";
                return result;
            };
            return RE_MainPlaylist;
        }(rmPlaylistContainer.rm_coreservices.RE_PlaylistItem_Container));
        rm_coreservices.RE_MainPlaylist = RE_MainPlaylist;
    })(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
});
//# sourceMappingURL=RE_MainPlaylist.js.map