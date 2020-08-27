define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_coreservices;
    (function (rm_coreservices) {
        var IImpl_RenderingController_Control = /** @class */ (function () {
            //----------- constructor 
            function IImpl_RenderingController_Control(owner) {
                this._owner = owner;
            }
            //---------------
            IImpl_RenderingController_Control.prototype.createZone = function (zoneId, prepareParams, error, context, callback) {
                this._owner.createZone(zoneId, prepareParams, error, context, callback);
            };
            //---------------
            IImpl_RenderingController_Control.prototype.destroyZone = function (zoneId, stopParams, error, context, callback) {
                this._owner.destroyZone(zoneId, stopParams, error, context, callback);
            };
            IImpl_RenderingController_Control.prototype.stopZone = function (zoneId, stopParams, error, context, callback) {
                this._owner.stopZone(zoneId, stopParams, error, context, callback);
            };
            //---------------
            IImpl_RenderingController_Control.prototype.prepareNextMediaItem = function (zoneId, prepareParams, error, context, callback) {
                this._owner.prepareNextMediaItem(zoneId, prepareParams, error, context, callback);
            };
            //---------------
            IImpl_RenderingController_Control.prototype.playNextMediaItem = function (zoneId, runParams, error, context, callback) {
                this._owner.playNextMediaItem(zoneId, runParams, error, context, callback);
            };
            //------------------
            IImpl_RenderingController_Control.prototype.prepareAndPlayNextMediaItem = function (zoneId, prepareParams, stopParams, runParams, error, context, callback) {
                this._owner.prepareAndPlayNextMediaItem(zoneId, prepareParams, stopParams, runParams, error, context, callback);
            };
            //---------------
            IImpl_RenderingController_Control.prototype.stopCrtMediaItem = function (zoneId, stopParams, error, context, callback) {
                this._owner.stopCrtMediaItem(zoneId, stopParams, error, context, callback);
            };
            return IImpl_RenderingController_Control;
        }());
        rm_coreservices.IImpl_RenderingController_Control = IImpl_RenderingController_Control;
    })(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
});
//# sourceMappingURL=IImpl_RenderingController_Control.js.map