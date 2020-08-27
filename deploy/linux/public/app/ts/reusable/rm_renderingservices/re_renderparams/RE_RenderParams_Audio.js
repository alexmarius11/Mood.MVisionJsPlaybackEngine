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
        var RE_RenderParams_Audio = /** @class */ (function (_super) {
            __extends(RE_RenderParams_Audio, _super);
            //---------------------------
            function RE_RenderParams_Audio() {
                var _this = _super.call(this) || this;
                _this._isEnable = false;
                _this._volume = 50;
                return _this;
            }
            //--------------------------
            RE_RenderParams_Audio.prototype.reset = function () {
                this._isEnable = false;
                this._volume = 50;
            };
            //---------------
            RE_RenderParams_Audio.prototype.setIsEnable = function (isEnable) {
                this._isEnable = isEnable;
            };
            //---------------
            RE_RenderParams_Audio.prototype.getIsEnable = function () {
                return this._isEnable;
            };
            //---------------
            RE_RenderParams_Audio.prototype.setVolume = function (volume) {
                this._volume = volume;
            };
            //---------------
            RE_RenderParams_Audio.prototype.getVolume = function () {
                return this._volume;
            };
            //------------
            RE_RenderParams_Audio.prototype.copy = function (src) {
                if (src == null)
                    return 1;
                this._isEnable = src.getIsEnable();
                this._volume = src.getVolume();
                return 0;
            };
            return RE_RenderParams_Audio;
        }(rmGeneralEntity.rm_general.R_Entity));
        rm_renderingservices.RE_RenderParams_Audio = RE_RenderParams_Audio;
    })(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
});
//# sourceMappingURL=RE_RenderParams_Audio.js.map