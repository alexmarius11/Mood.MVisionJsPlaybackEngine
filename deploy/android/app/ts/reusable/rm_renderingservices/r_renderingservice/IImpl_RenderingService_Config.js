"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_renderingservices;
(function (rm_renderingservices) {
    var IImpl_RenderingService_Config = (function () {
        function IImpl_RenderingService_Config(owner) {
            this._owner = owner;
        }
        IImpl_RenderingService_Config.prototype.getCrtPrepareParams = function () {
            return this._owner.getCrtPrepareParams();
        };
        IImpl_RenderingService_Config.prototype.setCrtPrepareParams = function (crtPrepareParams) {
            return this._owner.setCrtPrepareParams(crtPrepareParams);
        };
        IImpl_RenderingService_Config.prototype.getPrevPrepareParams = function () {
            return this._owner.getPrevPrepareParams();
        };
        IImpl_RenderingService_Config.prototype.setPrevPrepareParams = function (prevPrepareParams) {
            return this._owner.setCrtPrepareParams(prevPrepareParams);
        };
        return IImpl_RenderingService_Config;
    }());
    rm_renderingservices.IImpl_RenderingService_Config = IImpl_RenderingService_Config;
})(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
//# sourceMappingURL=IImpl_RenderingService_Config.js.map