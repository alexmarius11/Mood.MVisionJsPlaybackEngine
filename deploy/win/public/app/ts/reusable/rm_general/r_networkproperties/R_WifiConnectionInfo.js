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
        var R_WifiConnectionInfo = /** @class */ (function (_super) {
            __extends(R_WifiConnectionInfo, _super);
            //----------- constructor 
            function R_WifiConnectionInfo() {
                return _super.call(this) || this;
            }
            //---------------------------------
            R_WifiConnectionInfo.prototype.getSSID = function () {
                return this._ssid;
            };
            //------------------
            R_WifiConnectionInfo.prototype.setSSID = function (ssid) {
                this._ssid = ssid;
            };
            //-----------------------------
            R_WifiConnectionInfo.prototype.getWifiPassword = function () {
                return this._wifiPassword;
            };
            //-----------------------------
            R_WifiConnectionInfo.prototype.setWifiPassword = function (wifiPassword) {
                this._wifiPassword = wifiPassword;
            };
            //------------------------------
            R_WifiConnectionInfo.prototype.getWifiSignalLevel = function () {
                return this._wifiSignalLevel;
            };
            //-----------------------------------
            R_WifiConnectionInfo.prototype.setWifiSignalLevel = function (wifiSignalLevel) {
                this._wifiSignalLevel = wifiSignalLevel;
            };
            return R_WifiConnectionInfo;
        }(rmGeneralEntity.rm_general.R_Entity));
        rm_general.R_WifiConnectionInfo = R_WifiConnectionInfo;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=R_WifiConnectionInfo.js.map