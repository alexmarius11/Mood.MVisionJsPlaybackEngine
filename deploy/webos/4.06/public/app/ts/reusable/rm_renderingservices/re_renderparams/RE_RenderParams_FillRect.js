var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "../../../../../app/ts/reusable/rm_general/r_entity/R_Entity"], function (require, exports, rmGeneralEntity) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_renderingservices;
    (function (rm_renderingservices) {
        var RE_RenderParams_FillRect = /** @class */ (function (_super) {
            __extends(RE_RenderParams_FillRect, _super);
            //---------------------------
            function RE_RenderParams_FillRect() {
                var _this = _super.call(this) || this;
                _this._isTransparent = false;
                _this._alpha = 180;
                _this._R = 255;
                _this._G = 255;
                _this._B = 255;
                return _this;
            }
            //--------------------------
            RE_RenderParams_FillRect.prototype.reset = function () {
                this._isTransparent = false;
                this._alpha = 180;
                this._R = 255;
                this._G = 255;
                this._B = 255;
            };
            //---------------
            RE_RenderParams_FillRect.prototype.setIsTransparent = function (isTransparent) {
                this._isTransparent = isTransparent;
            };
            //---------------
            RE_RenderParams_FillRect.prototype.getIsTransparent = function () {
                return this._isTransparent;
            };
            //---------------
            RE_RenderParams_FillRect.prototype.setR = function (R) {
                this._R = R;
            };
            //---------------
            RE_RenderParams_FillRect.prototype.getR = function () {
                return this._R;
            };
            //---------------
            RE_RenderParams_FillRect.prototype.setG = function (G) {
                this._G = G;
            };
            //---------------
            RE_RenderParams_FillRect.prototype.getG = function () {
                return this._G;
            };
            //---------------
            RE_RenderParams_FillRect.prototype.setB = function (B) {
                this._B = B;
            };
            //---------------
            RE_RenderParams_FillRect.prototype.getB = function () {
                return this._B;
            };
            //---------------
            RE_RenderParams_FillRect.prototype.setAlpha = function (alpha) {
                this._alpha = alpha;
            };
            //---------------
            RE_RenderParams_FillRect.prototype.getAlpha = function () {
                return this._alpha;
            };
            //------------
            RE_RenderParams_FillRect.prototype.copy = function (src) {
                if (src == null)
                    return 1;
                this._isTransparent = src.getIsTransparent();
                this._alpha = src.getAlpha();
                this._R = src.getR();
                this._G = src.getG();
                this._B = src.getB();
                return 0;
            };
            //-----------------
            RE_RenderParams_FillRect.prototype.getRGBString = function () {
                return "rgb(" + this._R + "," + this._G + "," + this._B + ")";
            };
            //-----------------
            RE_RenderParams_FillRect.prototype.getRGBAString = function () {
                return "rgba(" + this._R + "," + this._G + "," + this._B + "," + this._alpha + ")";
            };
            return RE_RenderParams_FillRect;
        }(rmGeneralEntity.rm_general.R_Entity));
        rm_renderingservices.RE_RenderParams_FillRect = RE_RenderParams_FillRect;
    })(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
});
//# sourceMappingURL=RE_RenderParams_FillRect.js.map