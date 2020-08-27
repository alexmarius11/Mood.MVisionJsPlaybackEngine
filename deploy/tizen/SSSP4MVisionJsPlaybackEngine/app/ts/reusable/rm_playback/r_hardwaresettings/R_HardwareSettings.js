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
    var rm_playback;
    (function (rm_playback) {
        var R_HardwareSettings = /** @class */ (function (_super) {
            __extends(R_HardwareSettings, _super);
            //----------- constructor 
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
            //-----------------
            // hardware type
            //-----------------
            //-------------------------
            R_HardwareSettings.prototype.getHardwareType = function () {
                return this._hardwareType;
            };
            //-------------------------
            R_HardwareSettings.prototype.setHardwareType = function (hardwareType) {
                this._hardwareType = hardwareType;
            };
            //-----------------
            // early adapters
            //-----------------
            //-------------------------
            R_HardwareSettings.prototype.isEarlyAdapter = function () {
                if (this._earlyAdapter == "1")
                    return true;
                return false;
            };
            //-------------------------
            R_HardwareSettings.prototype.getEarlyAdapter = function () {
                return this._earlyAdapter;
            };
            //-------------
            R_HardwareSettings.prototype.setEarlyAdapter = function (earlyAdapter) {
                this._earlyAdapter = earlyAdapter;
            };
            //-----------------
            // serial number
            //-----------------
            //----------
            R_HardwareSettings.prototype.getSerialNumber = function () {
                return this._serialNumber;
            };
            //---------
            R_HardwareSettings.prototype.setSerialNumber = function (serialNumber) {
                this._serialNumber = serialNumber;
            };
            //-----------------
            // account id 
            //-----------------
            //-------------------
            R_HardwareSettings.prototype.getAccountId = function () {
                return this._accountId;
            };
            //-------------------
            R_HardwareSettings.prototype.setAccountId = function (accountId) {
                this._accountId = accountId;
            };
            //-----------------
            // account name
            //-----------------
            R_HardwareSettings.prototype.getAccountName = function () {
                return this._accountName;
            };
            R_HardwareSettings.prototype.setAccountName = function (accountName) {
                this._accountName = accountName;
            };
            //-----------------
            // account password
            //-----------------
            //----------
            R_HardwareSettings.prototype.getAccountPassword = function () {
                return this._accountPassword;
            };
            //---------
            R_HardwareSettings.prototype.setAccountPassword = function (accountPassword) {
                this._accountPassword = accountPassword;
            };
            return R_HardwareSettings;
        }(rmGeneralEntity.rm_general.R_Entity));
        rm_playback.R_HardwareSettings = R_HardwareSettings;
    })(rm_playback = exports.rm_playback || (exports.rm_playback = {}));
});
/*
<?xml version="1.0" encoding="UTF-8"?>

<!DOCTYPE HARDWARE_SETTINGS>

-<HARDWARE_SETTINGS>


-<ENVIRONMENT>

<ENV_NAME>MVP425_WES7</ENV_NAME>

<EARLY_ADOPTER>0</EARLY_ADOPTER>

</ENVIRONMENT>

<SERIAL_NUMBER>PC100001</SERIAL_NUMBER>


-<WINDOWS_ACCOUNTS>


-<ACCOUNT>

<ACCOUNT_ID>1</ACCOUNT_ID>

<NAME>stream01</NAME>

<PWD>retr9xEt</PWD>

</ACCOUNT>

</WINDOWS_ACCOUNTS>

</HARDWARE_SETTINGS>
*/ 
//# sourceMappingURL=R_HardwareSettings.js.map