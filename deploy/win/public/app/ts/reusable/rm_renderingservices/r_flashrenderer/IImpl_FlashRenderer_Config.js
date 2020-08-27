define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_renderingservices;
    (function (rm_renderingservices) {
        var IImpl_FlashRenderer_Config = /** @class */ (function () {
            //----------- constructor 
            function IImpl_FlashRenderer_Config(owner) {
                this._owner = owner;
            }
            //---------------------------------
            IImpl_FlashRenderer_Config.prototype.setHtmlZoneDiv = function (htmlZoneDiv) {
                return this._owner.setHtmlZoneDiv(htmlZoneDiv);
            };
            //-------------------------------
            IImpl_FlashRenderer_Config.prototype.getHtmlZoneDiv = function () {
                return this._owner.getHtmlZoneDiv();
            };
            //-------------------------------
            IImpl_FlashRenderer_Config.prototype.setHtmlObject = function (htmlObject) {
                return this._owner.setHtmlObject(htmlObject);
            };
            //------------------------------
            IImpl_FlashRenderer_Config.prototype.getHtmlObject = function () {
                return this._owner.getHtmlObject();
            };
            return IImpl_FlashRenderer_Config;
        }());
        rm_renderingservices.IImpl_FlashRenderer_Config = IImpl_FlashRenderer_Config;
    })(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
});
//# sourceMappingURL=IImpl_FlashRenderer_Config.js.map