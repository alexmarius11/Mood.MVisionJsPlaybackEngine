"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_renderingservices;
(function (rm_renderingservices) {
    var IImpl_VideoRenderer_Config = (function () {
        function IImpl_VideoRenderer_Config(owner) {
            this._owner = owner;
        }
        IImpl_VideoRenderer_Config.prototype.setHtmlZoneDiv = function (htmlZoneDiv) {
            return this._owner.setHtmlZoneDiv(htmlZoneDiv);
        };
        IImpl_VideoRenderer_Config.prototype.getHtmlZoneDiv = function () {
            return this._owner.getHtmlZoneDiv();
        };
        IImpl_VideoRenderer_Config.prototype.setHtmlVideo = function (htmlVideo) {
            return this._owner.setHtmlVideo(htmlVideo);
        };
        IImpl_VideoRenderer_Config.prototype.getHtmlVideo = function () {
            return this._owner.getHtmlVideo();
        };
        return IImpl_VideoRenderer_Config;
    }());
    rm_renderingservices.IImpl_VideoRenderer_Config = IImpl_VideoRenderer_Config;
})(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
//# sourceMappingURL=IImpl_VideoRenderer_Config.js.map