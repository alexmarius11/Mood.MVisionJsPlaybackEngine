define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_renderingservices;
    (function (rm_renderingservices) {
        var IImpl_FillRectRenderer_Config = /** @class */ (function () {
            //----------- constructor 
            function IImpl_FillRectRenderer_Config(owner) {
                this._owner = owner;
            }
            //---------------------------------
            IImpl_FillRectRenderer_Config.prototype.setHtmlZoneDiv = function (htmlZoneDiv) {
                return this._owner.setHtmlZoneDiv(htmlZoneDiv);
            };
            //-------------------------------
            IImpl_FillRectRenderer_Config.prototype.getHtmlZoneDiv = function () {
                return this._owner.getHtmlZoneDiv();
            };
            //-------------------------------
            IImpl_FillRectRenderer_Config.prototype.setHtmlRectDiv = function (htmlRectDiv) {
                return this._owner.setHtmlRectDiv(htmlRectDiv);
            };
            //------------------------------
            IImpl_FillRectRenderer_Config.prototype.getHtmlRectDiv = function () {
                return this._owner.getHtmlRectDiv();
            };
            //------------------------------
            IImpl_FillRectRenderer_Config.prototype.setRGBA = function (R, G, B, A) {
                return this._owner.setRGBA(R, G, B, A);
            };
            return IImpl_FillRectRenderer_Config;
        }());
        rm_renderingservices.IImpl_FillRectRenderer_Config = IImpl_FillRectRenderer_Config;
    })(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
});
//# sourceMappingURL=IImpl_FillRectRenderer_Config.js.map