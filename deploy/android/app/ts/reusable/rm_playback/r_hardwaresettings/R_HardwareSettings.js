"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var rmGeneralEntity = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");
var rm_playback;
(function (rm_playback) {
    var R_HardwareSettings = (function (_super) {
        __extends(R_HardwareSettings, _super);
        function R_HardwareSettings() {
            var _this = _super.call(this) || this;
            _this._hardwareType = "";
            _this._earlyAdapter = "";
            _this._serialNumber = "";
            _this._accountId = "";
            _this._accountName = "";
            _this._accountPassword = "";
            return _this;
        }
        R_HardwareSettings.prototype.getHardwareType = function () {
            return this._hardwareType;
        };
        R_HardwareSettings.prototype.setHardwareType = function (hardwareType) {
            this._hardwareType = hardwareType;
        };
        R_HardwareSettings.prototype.isEarlyAdapter = function () {
            if (this._earlyAdapter == "1")
                return true;
            return false;
        };
        R_HardwareSettings.prototype.getEarlyAdapter = function () {
            return this._earlyAdapter;
        };
        R_HardwareSettings.prototype.setEarlyAdapter = function (earlyAdapter) {
            this._earlyAdapter = earlyAdapter;
        };
        R_HardwareSettings.prototype.getSerialNumber = function () {
            return this._serialNumber;
        };
        R_HardwareSettings.prototype.setSerialNumber = function (serialNumber) {
            this._serialNumber = serialNumber;
        };
        R_HardwareSettings.prototype.getAccountId = function () {
            return this._accountId;
        };
        R_HardwareSettings.prototype.setAccountId = function (accountId) {
            this._accountId = accountId;
        };
        R_HardwareSettings.prototype.getAccountName = function () {
            return this._accountName;
        };
        R_HardwareSettings.prototype.setAccountName = function (accountName) {
            this._accountName = accountName;
        };
        R_HardwareSettings.prototype.getAccountPassword = function () {
            return this._accountPassword;
        };
        R_HardwareSettings.prototype.setAccountPassword = function (accountPassword) {
            this._accountPassword = accountPassword;
        };
        return R_HardwareSettings;
    }(rmGeneralEntity.rm_general.R_Entity));
    rm_playback.R_HardwareSettings = R_HardwareSettings;
})(rm_playback = exports.rm_playback || (exports.rm_playback = {}));
//# sourceMappingURL=R_HardwareSettings.js.map