"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_renderingservices;
(function (rm_renderingservices) {
    var IImpl_RenderingService_Control = (function () {
        function IImpl_RenderingService_Control(owner) {
            this._owner = owner;
        }
        IImpl_RenderingService_Control.prototype.canPlayNextMediaItem = function (prepareParams, error, context, callback) {
            return this._owner.canPlayNextMediaItem(prepareParams, error, context, callback);
        };
        IImpl_RenderingService_Control.prototype.prepareNextMediaItem = function (prepareParams, error, context, callback) {
            return this._owner.prepareNextMediaItem(prepareParams, error, context, callback);
        };
        IImpl_RenderingService_Control.prototype.playNextMediaItem = function (runParams, error, context, callback) {
            return this._owner.playNextMediaItem(runParams, error, context, callback);
        };
        IImpl_RenderingService_Control.prototype.prepareAndPlayNextMediaItem = function (prepareParams, stopParams, runParams, error, context, callback) {
            return this._owner.prepareAndPlayNextMediaItem(prepareParams, stopParams, runParams, error, context, callback);
        };
        IImpl_RenderingService_Control.prototype.stopCrtMediaItem = function (stopParams, error, context, callback) {
            return this._owner.stopCrtMediaItem(stopParams, error, context, callback);
        };
        IImpl_RenderingService_Control.prototype.destroyCrtMediaItem = function (stopParams, error, context, callback) {
            return this._owner.destroyCrtMediaItem(stopParams, error, context, callback);
        };
        IImpl_RenderingService_Control.prototype.onChangeContainerSize = function (prepareParams, error, context, callback) {
            return this.onChangeContainerSize(prepareParams, error, context, callback);
        };
        IImpl_RenderingService_Control.prototype.onChangeMediaSizeOrDisplayType = function (prepareParams, error, context, callback) {
            return this.onChangeMediaSizeOrDisplayType(prepareParams, error, context, callback);
        };
        return IImpl_RenderingService_Control;
    }());
    rm_renderingservices.IImpl_RenderingService_Control = IImpl_RenderingService_Control;
})(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
//# sourceMappingURL=IImpl_RenderingService_Control.js.map