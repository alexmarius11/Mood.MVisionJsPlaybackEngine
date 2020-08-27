"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_renderingservices;
(function (rm_renderingservices) {
    var IImpl_BackgroundRenderer_Config = (function () {
        function IImpl_BackgroundRenderer_Config(owner) {
            this._owner = owner;
        }
        IImpl_BackgroundRenderer_Config.prototype.setHtmlZoneDiv = function (htmlZoneDiv) {
            return this._owner.setHtmlZoneDiv(htmlZoneDiv);
        };
        IImpl_BackgroundRenderer_Config.prototype.getHtmlZoneDiv = function () {
            return this._owner.getHtmlZoneDiv();
        };
        return IImpl_BackgroundRenderer_Config;
    }());
    rm_renderingservices.IImpl_BackgroundRenderer_Config = IImpl_BackgroundRenderer_Config;
})(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
//# sourceMappingURL=IImpl_BackgroundRenderer_Config.js.map