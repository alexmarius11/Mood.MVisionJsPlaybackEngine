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
        var R_EddystoneInfo = /** @class */ (function (_super) {
            __extends(R_EddystoneInfo, _super);
            //----------- constructor 
            function R_EddystoneInfo() {
                var _this = _super.call(this) || this;
                _this._enabled = false; //: true,
                _this._frameType = "url"; // frame : DeviceInfo.EddystoneFrame.URL,
                _this._frameData = ""; //: "http://www.lge.com"
                return _this;
            }
            //------------------------------
            R_EddystoneInfo.prototype.isEnabled = function () {
                return this._enabled;
            };
            //------------------------------
            R_EddystoneInfo.prototype.setEnabled = function (enabled) {
                this._enabled = enabled;
            };
            //------------------------------
            R_EddystoneInfo.prototype.getFrameType = function () {
                return this._frameType;
            };
            //------------------------------
            R_EddystoneInfo.prototype.setFrameType = function (frameType) {
                this._frameType = frameType;
            };
            //------------------------------
            R_EddystoneInfo.prototype.getFrameData = function () {
                return this._frameData;
            };
            //------------------------------
            R_EddystoneInfo.prototype.setFramedata = function (frameData) {
                this._frameData = frameData;
            };
            return R_EddystoneInfo;
        }(rmGeneralEntity.rm_general.R_Entity));
        rm_general.R_EddystoneInfo = R_EddystoneInfo;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=R_EddystoneInfo.js.map