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
    var rm_general;
    (function (rm_general) {
        var R_ScreenProperties = /** @class */ (function (_super) {
            __extends(R_ScreenProperties, _super);
            //----------- constructor 
            function R_ScreenProperties() {
                var _this = _super.call(this) || this;
                _this._backlight = 50;
                _this._contrast = 50;
                _this._brightness = 50;
                _this._color = 50;
                _this._tint = 50;
                _this._screenLeft = 0;
                _this._screenTop = 0;
                _this._screenRight = 1920;
                _this._screenBottom = 1080;
                return _this;
            }
            //--------------------------
            R_ScreenProperties.prototype.setBacklight = function (backlight) {
                this._backlight = backlight;
            };
            //-------------------------------
            R_ScreenProperties.prototype.getBacklight = function () {
                return this._backlight;
            };
            //-------------------------------
            R_ScreenProperties.prototype.setContrast = function (contrast) {
                this._contrast = contrast;
            };
            //-------------------------------
            R_ScreenProperties.prototype.getContrast = function () {
                return this._contrast;
            };
            //-------------------------------
            R_ScreenProperties.prototype.setBrightness = function (brightness) {
                this._brightness = brightness;
            };
            //------------------------------
            R_ScreenProperties.prototype.getBrightness = function () {
                return this._brightness;
            };
            //---------------------------------
            R_ScreenProperties.prototype.setColor = function (color) {
                this._color = color;
            };
            //------------------------------
            R_ScreenProperties.prototype.getColor = function () {
                return this._color;
            };
            //---------------------------------
            R_ScreenProperties.prototype.setTint = function (tint) {
                this._tint = tint;
            };
            //------------------------------------
            R_ScreenProperties.prototype.getTint = function () {
                return this._tint;
            };
            //---------------------------------
            R_ScreenProperties.prototype.setScreenLeft = function (screenLeft) {
                this._screenLeft = screenLeft;
            };
            //------------------------------------
            R_ScreenProperties.prototype.getScreenLeft = function () {
                return this._screenLeft;
            };
            //---------------------------------
            R_ScreenProperties.prototype.setScreenTop = function (screenTop) {
                this._screenTop = screenTop;
            };
            //------------------------------------
            R_ScreenProperties.prototype.getScreenTop = function () {
                return this._screenTop;
            };
            //---------------------------------
            R_ScreenProperties.prototype.setScreenRight = function (screenRight) {
                this._screenRight = screenRight;
            };
            //------------------------------------
            R_ScreenProperties.prototype.getScreenRight = function () {
                return this._screenRight;
            };
            //---------------------------------
            R_ScreenProperties.prototype.setScreenBottom = function (screenBottom) {
                this._screenBottom = screenBottom;
            };
            //------------------------------------
            R_ScreenProperties.prototype.getScreenBottom = function () {
                return this._screenBottom;
            };
            return R_ScreenProperties;
        }(rmGeneralEntity.rm_general.R_Entity));
        rm_general.R_ScreenProperties = R_ScreenProperties;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=R_ScreenProperties.js.map