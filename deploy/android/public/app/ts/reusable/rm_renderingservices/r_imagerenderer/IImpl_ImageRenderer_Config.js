define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_renderingservices;
    (function (rm_renderingservices) {
        var IImpl_ImageRenderer_Config = /** @class */ (function () {
            //----------- constructor 
            function IImpl_ImageRenderer_Config(owner) {
                this._owner = owner;
            }
            //---------------------------------
            IImpl_ImageRenderer_Config.prototype.setHtmlZoneDiv = function (htmlZoneDiv) {
                return this._owner.setHtmlZoneDiv(htmlZoneDiv);
            };
            //-------------------------------
            IImpl_ImageRenderer_Config.prototype.getHtmlZoneDiv = function () {
                return this._owner.getHtmlZoneDiv();
            };
            //-------------------------------
            IImpl_ImageRenderer_Config.prototype.setHtmlImage = function (htmlImage) {
                return this._owner.setHtmlImage(htmlImage);
            };
            //------------------------------
            IImpl_ImageRenderer_Config.prototype.getHtmlImage = function () {
                return this._owner.getHtmlImage();
            };
            return IImpl_ImageRenderer_Config;
        }());
        rm_renderingservices.IImpl_ImageRenderer_Config = IImpl_ImageRenderer_Config;
    })(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
});
//# sourceMappingURL=IImpl_ImageRenderer_Config.js.map