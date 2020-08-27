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
var rm_general;
(function (rm_general) {
    var R_PlatformInfo = (function (_super) {
        __extends(R_PlatformInfo, _super);
        function R_PlatformInfo() {
            var _this = _super.call(this) || this;
            _this._hardwareVersion = "";
            _this._modelName = "";
            _this._osdResolution = "";
            _this._platformName = "";
            _this._sdkVersion = "";
            _this._serialNumber = "";
            _this._firmwareVersion = "";
            return _this;
        }
        R_PlatformInfo.prototype.getHardwareVersion = function () {
            return this._hardwareVersion;
        };
        R_PlatformInfo.prototype.getModelName = function () {
            return this._modelName;
        };
        R_PlatformInfo.prototype.getOSDResolution = function () {
            return this._osdResolution;
        };
        R_PlatformInfo.prototype.getPlatformName = function () {
            return this._osdResolution;
        };
        R_PlatformInfo.prototype.getSDKVersion = function () {
            return this._sdkVersion;
        };
        R_PlatformInfo.prototype.getSerialNumber = function () {
            return this._serialNumber;
        };
        R_PlatformInfo.prototype.getFirmwareVersion = function () {
            return this._serialNumber;
        };
        return R_PlatformInfo;
    }(rmGeneralEntity.rm_general.R_Entity));
    rm_general.R_PlatformInfo = R_PlatformInfo;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=R_PlatformInfo.js.map