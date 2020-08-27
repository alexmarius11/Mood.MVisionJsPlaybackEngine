define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_renderingservices;
    (function (rm_renderingservices) {
        var IImpl_RenderingZone_R = /** @class */ (function () {
            //----------- constructor 
            function IImpl_RenderingZone_R(owner) {
                this._owner = owner;
            }
            //---------------------
            IImpl_RenderingZone_R.prototype.stopZone = function (stopParams, error, context, callback) {
                return this._owner.stopZone(stopParams, error, context, callback);
            };
            //---------------------
            IImpl_RenderingZone_R.prototype.destroyZone = function (stopParams, error, context, callback) {
                return this._owner.destroyZone(stopParams, error, context, callback);
            };
            return IImpl_RenderingZone_R;
        }());
        rm_renderingservices.IImpl_RenderingZone_R = IImpl_RenderingZone_R;
    })(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
});
//# sourceMappingURL=IImpl_RenderingZone_R.js.map