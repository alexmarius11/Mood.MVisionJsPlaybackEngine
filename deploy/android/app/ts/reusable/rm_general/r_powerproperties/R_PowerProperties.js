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
    var R_PowerProperties = (function (_super) {
        __extends(R_PowerProperties, _super);
        function R_PowerProperties() {
            var _this = _super.call(this) || this;
            _this._powerCommand = "";
            _this._powerMode = "";
            _this._powerOnDelay_delayTime = 20;
            _this._displayPowerMng_mode = "";
            _this._displayPowerMng_wakeupSignal = "";
            _this._wakedOnLan = false;
            return _this;
        }
        R_PowerProperties.prototype.getPowerCommand = function () {
            return this._powerCommand;
        };
        R_PowerProperties.prototype.setPowerCommand = function (powerCommand) {
            this._powerCommand = powerCommand;
        };
        R_PowerProperties.prototype.getPower_mode = function () {
            return this._powerMode;
        };
        R_PowerProperties.prototype.setPower_mode = function (powerMode) {
            this._powerMode = powerMode;
        };
        R_PowerProperties.prototype.getPowerOnDelay_delayTime = function () {
            return this._powerOnDelay_delayTime;
        };
        R_PowerProperties.prototype.setPowerOnDelay_delayTime = function (powerOnDelayDelayTime) {
            this._powerOnDelay_delayTime = powerOnDelayDelayTime;
        };
        R_PowerProperties.prototype.getDisplayPowerMng_mode = function () {
            return this._displayPowerMng_mode;
        };
        R_PowerProperties.prototype.setDisplayPowerMng_mode = function (displayPowerMng_mode) {
            this._displayPowerMng_mode = displayPowerMng_mode;
        };
        R_PowerProperties.prototype.getDisplayPowerMng_wakeupSignal = function () {
            return this._displayPowerMng_wakeupSignal;
        };
        R_PowerProperties.prototype.setDisplayPowerMng_wakeupSignal = function (displayPowerMng_wakeupSignal) {
            this._displayPowerMng_wakeupSignal = displayPowerMng_wakeupSignal;
        };
        R_PowerProperties.prototype.isWakedOnLan = function () {
            return this._wakedOnLan;
        };
        R_PowerProperties.prototype.setWakedOnLan = function (wakedOnLan) {
            this._wakedOnLan = wakedOnLan;
        };
        return R_PowerProperties;
    }(rmGeneralEntity.rm_general.R_Entity));
    rm_general.R_PowerProperties = R_PowerProperties;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=R_PowerProperties.js.map