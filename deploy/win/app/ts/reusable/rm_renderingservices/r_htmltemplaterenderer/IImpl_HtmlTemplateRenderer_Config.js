"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_renderingservices;
(function (rm_renderingservices) {
    var IImpl_HtmlTemplateRenderer_Config = (function () {
        function IImpl_HtmlTemplateRenderer_Config(owner) {
            this._owner = owner;
        }
        IImpl_HtmlTemplateRenderer_Config.prototype.setHtmlZoneDiv = function (htmlZoneDiv) {
            return this._owner.setHtmlZoneDiv(htmlZoneDiv);
        };
        IImpl_HtmlTemplateRenderer_Config.prototype.getHtmlZoneDiv = function () {
            return this._owner.getHtmlZoneDiv();
        };
        IImpl_HtmlTemplateRenderer_Config.prototype.setHtmlIFrame = function (htmlIFrame) {
            return this._owner.setHtmlIFrame(htmlIFrame);
        };
        IImpl_HtmlTemplateRenderer_Config.prototype.getHtmlIFrame = function () {
            return this._owner.getHtmlIFrame();
        };
        return IImpl_HtmlTemplateRenderer_Config;
    }());
    rm_renderingservices.IImpl_HtmlTemplateRenderer_Config = IImpl_HtmlTemplateRenderer_Config;
})(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
//# sourceMappingURL=IImpl_HtmlTemplateRenderer_Config.js.map