define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_coreservices;
    (function (rm_coreservices) {
        var IImpl_PlaylistController_Commands = /** @class */ (function () {
            //----------- constructor 
            function IImpl_PlaylistController_Commands(owner) {
                this._owner = owner;
            }
            //------------------
            IImpl_PlaylistController_Commands.prototype.cmd_getNewZoneId = function () {
                return this._owner.cmd_getNewZoneId();
            };
            //------------------
            IImpl_PlaylistController_Commands.prototype.cmd_getNewPreparedParam = function (error, context, callback) {
                return this._owner.cmd_getNewPreparedParam(error, context, callback);
            };
            //------------------
            IImpl_PlaylistController_Commands.prototype.cmd_freeNewPreparedParam = function (prepareParams, error, context, callback) {
                return this._owner.cmd_freeNewPreparedParam(prepareParams, error, context, callback);
            };
            //---------------
            IImpl_PlaylistController_Commands.prototype.cmd_createZone = function (zoneId, prepareParams, error, context, callback) {
                this._owner.cmd_createZone(zoneId, prepareParams, error, context, callback);
            };
            //---------------
            IImpl_PlaylistController_Commands.prototype.cmd_stopZone = function (zoneId, stopParams, error, context, callback) {
                this._owner.cmd_stopZone(zoneId, stopParams, error, context, callback);
            };
            //---------------
            IImpl_PlaylistController_Commands.prototype.cmd_destroyZone = function (zoneId, stopParams, error, context, callback) {
                this._owner.cmd_destroyZone(zoneId, stopParams, error, context, callback);
            };
            //---------------
            IImpl_PlaylistController_Commands.prototype.cmd_prepareNextMediaItem = function (zoneId, prepareParams, error, context, callback) {
                this._owner.cmd_prepareNextMediaItem(zoneId, prepareParams, error, context, callback);
            };
            //---------------
            IImpl_PlaylistController_Commands.prototype.cmd_playNextMediaItem = function (zoneId, runParams, error, context, callback) {
                this._owner.cmd_playNextMediaItem(zoneId, runParams, error, context, callback);
            };
            //-----------------
            IImpl_PlaylistController_Commands.prototype.cmd_prepareAndPlayNextMediaItem = function (zoneId, prepareParams, stopParams, runParams, error, context, callback) {
                this._owner.cmd_prepareAndPlayNextMediaItem(zoneId, prepareParams, stopParams, runParams, error, context, callback);
            };
            //--------------- 
            IImpl_PlaylistController_Commands.prototype.cmd_changeDesign = function (iOldDesign, iNewDesign, designs, aFileStorage, aUrlStorage, error, context, callback) {
                this._owner.cmd_changeDesign(iOldDesign, iNewDesign, designs, aFileStorage, aUrlStorage, error, context, callback);
            };
            return IImpl_PlaylistController_Commands;
        }());
        rm_coreservices.IImpl_PlaylistController_Commands = IImpl_PlaylistController_Commands;
    })(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
});
//# sourceMappingURL=IImpl_PlaylistController_Commands.js.map