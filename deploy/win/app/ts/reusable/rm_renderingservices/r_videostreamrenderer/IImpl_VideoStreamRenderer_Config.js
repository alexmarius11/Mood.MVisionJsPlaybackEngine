"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_renderingservices;
(function (rm_renderingservices) {
    var IImpl_VideoStreamRenderer_Config = (function () {
        function IImpl_VideoStreamRenderer_Config(owner) {
            this._owner = owner;
        }
        IImpl_VideoStreamRenderer_Config.prototype.setHtmlZoneDiv = function (htmlZoneDiv) {
            return this._owner.setHtmlZoneDiv(htmlZoneDiv);
        };
        IImpl_VideoStreamRenderer_Config.prototype.getHtmlZoneDiv = function () {
            return this._owner.getHtmlZoneDiv();
        };
        IImpl_VideoStreamRenderer_Config.prototype.setHtmlVideoStream = function (htmlVideoStream) {
            return this._owner.setHtmlVideoStream(htmlVideoStream);
        };
        IImpl_VideoStreamRenderer_Config.prototype.getHtmlVideoStream = function () {
            return this._owner.getHtmlVideoStream();
        };
        return IImpl_VideoStreamRenderer_Config;
    }());
    rm_renderingservices.IImpl_VideoStreamRenderer_Config = IImpl_VideoStreamRenderer_Config;
})(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
//# sourceMappingURL=IImpl_VideoStreamRenderer_Config.js.map