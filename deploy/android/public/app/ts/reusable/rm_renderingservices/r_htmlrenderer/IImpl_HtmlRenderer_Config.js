define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_renderingservices;
    (function (rm_renderingservices) {
        var IImpl_HtmlRenderer_Config = /** @class */ (function () {
            //----------- constructor 
            function IImpl_HtmlRenderer_Config(owner) {
                this._owner = owner;
            }
            //---------------------------------
            IImpl_HtmlRenderer_Config.prototype.setHtmlZoneDiv = function (htmlZoneDiv) {
                return this._owner.setHtmlZoneDiv(htmlZoneDiv);
            };
            //-------------------------------
            IImpl_HtmlRenderer_Config.prototype.getHtmlZoneDiv = function () {
                return this._owner.getHtmlZoneDiv();
            };
            //-------------------------------
            IImpl_HtmlRenderer_Config.prototype.setHtmlIFrame = function (htmlIFrame) {
                return this._owner.setHtmlIFrame(htmlIFrame);
            };
            //------------------------------
            IImpl_HtmlRenderer_Config.prototype.getHtmlIFrame = function () {
                return this._owner.getHtmlIFrame();
            };
            return IImpl_HtmlRenderer_Config;
        }());
        rm_renderingservices.IImpl_HtmlRenderer_Config = IImpl_HtmlRenderer_Config;
    })(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
});
//# sourceMappingURL=IImpl_HtmlRenderer_Config.js.map