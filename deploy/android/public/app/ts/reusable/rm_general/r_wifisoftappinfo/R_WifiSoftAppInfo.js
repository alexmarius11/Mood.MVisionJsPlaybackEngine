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
        var R_WifiSoftAppInfo = /** @class */ (function (_super) {
            __extends(R_WifiSoftAppInfo, _super);
            //----------- constructor 
            function R_WifiSoftAppInfo() {
                var _this = _super.call(this) || this;
                _this._enabled = false; //: true,
                _this._ssid = ""; //: "1A2B3C4D5E1A2B3C4D5E1A2B3C4D5EFF",
                _this._securityKey = ""; //:"123456"
                return _this;
            }
            //---------------------------
            R_WifiSoftAppInfo.prototype.isEnabled = function () {
                return this._enabled;
            };
            //---------------------------------
            R_WifiSoftAppInfo.prototype.setEnabled = function (enabled) {
                this._enabled = enabled;
            };
            //---------------------------
            R_WifiSoftAppInfo.prototype.getSSID = function () {
                return this._ssid;
            };
            //---------------------------------
            R_WifiSoftAppInfo.prototype.setSSID = function (ssid) {
                this._ssid = ssid;
            };
            //---------------------------
            R_WifiSoftAppInfo.prototype.getSecurityKey = function () {
                return this._securityKey;
            };
            //---------------------------------
            R_WifiSoftAppInfo.prototype.setSecurityKey = function (securityKey) {
                this._securityKey = securityKey;
            };
            return R_WifiSoftAppInfo;
        }(rmGeneralEntity.rm_general.R_Entity));
        rm_general.R_WifiSoftAppInfo = R_WifiSoftAppInfo;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=R_WifiSoftAppInfo.js.map