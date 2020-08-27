define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_coreservices;
    (function (rm_coreservices) {
        var IImpl_PlaylistController_Playlist_Custom_v1 = /** @class */ (function () {
            //----------- constructor 
            function IImpl_PlaylistController_Playlist_Custom_v1(owner) {
                this._owner = owner;
            }
            //-----------------------------------------
            IImpl_PlaylistController_Playlist_Custom_v1.prototype.setRenderingControllerService = function (targetService) {
                this._owner.setRenderingControllerService(targetService);
            };
            //-------------------------------------------
            IImpl_PlaylistController_Playlist_Custom_v1.prototype.loadPlaylist = function (aPlaylistType, jsonObject, aPlaylistFile, aParent, error, context, callback) {
            };
            //-------------------------------------------------------
            IImpl_PlaylistController_Playlist_Custom_v1.prototype.getEmptyPlaylist = function () {
                return ""; //IImpl_PlaylistController_Playlist_Mood_v5.EMPTY_PLAYLIST;
            };
            return IImpl_PlaylistController_Playlist_Custom_v1;
        }());
        rm_coreservices.IImpl_PlaylistController_Playlist_Custom_v1 = IImpl_PlaylistController_Playlist_Custom_v1;
    })(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
});
//# sourceMappingURL=IImpl_PlaylistController_Playlist_Custom_v1.js.map