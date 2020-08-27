define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_coreservices;
    (function (rm_coreservices) {
        var IImpl_PlaylistController_Config = /** @class */ (function () {
            //----------- constructor 
            function IImpl_PlaylistController_Config(owner) {
                this._owner = owner;
            }
            //-----------------------------------------
            IImpl_PlaylistController_Config.prototype.setRenderingControllerService = function (targetService) {
                this._owner.setRenderingControllerService(targetService);
            };
            //-------------------------------------------
            IImpl_PlaylistController_Config.prototype.loadPlaylist = function (aPlaylistType, aPlaylistFile, aMediaFilesFolder, bTestFileExists, error, context, callback) {
                return this._owner.loadPlaylist(aPlaylistType, aPlaylistFile, aMediaFilesFolder, bTestFileExists, error, context, callback);
            };
            //-------------------------------------------
            IImpl_PlaylistController_Config.prototype.getPlaylist = function () {
                return this._owner.getPlaylist();
            };
            //--------------------
            // get empty playlist
            //--------------------
            IImpl_PlaylistController_Config.prototype.getEmptyPlaylist = function (aPlaylistType) {
                return this._owner.getEmptyPlaylist(aPlaylistType);
            };
            //----------------------------
            // set / get screen properties
            //----------------------------
            //----------------------
            IImpl_PlaylistController_Config.prototype.setScreenProperties = function (aScreenProperties) {
                this._owner.setScreenProperties(aScreenProperties);
            };
            //----------------------
            IImpl_PlaylistController_Config.prototype.getScreenProperties = function () {
                return this._owner.getScreenProperties();
            };
            //--------------------------------------
            // set / get playlist controller config
            //---------------------------------------
            //----------------------------
            IImpl_PlaylistController_Config.prototype.setPlaybackGlobalConfig = function (aPlaybackGlobalConfig) {
                return this._owner.setPlaybackGlobalConfig(aPlaybackGlobalConfig);
            };
            //-----------------------------
            IImpl_PlaylistController_Config.prototype.getPlaybackGlobalConfig = function () {
                return this._owner.getPlaybackGlobalConfig();
            };
            return IImpl_PlaylistController_Config;
        }());
        rm_coreservices.IImpl_PlaylistController_Config = IImpl_PlaylistController_Config;
    })(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
});
//# sourceMappingURL=IImpl_PlaylistController_Config.js.map