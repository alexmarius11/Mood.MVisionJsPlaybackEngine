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
    var R_SystemMonitorInfo = (function (_super) {
        __extends(R_SystemMonitorInfo, _super);
        function R_SystemMonitorInfo() {
            var _this = _super.call(this) || this;
            _this._fan = false;
            _this._signal = false;
            _this._lamp = false;
            _this._screen = false;
            _this._temperature = false;
            _this._monitorEventHandler = null;
            return _this;
        }
        R_SystemMonitorInfo.prototype.isFanMonitored = function () {
            return this._fan;
        };
        R_SystemMonitorInfo.prototype.setFanMonitor = function (fan) {
            this._fan = fan;
            ;
        };
        R_SystemMonitorInfo.prototype.isSignalMonitored = function () {
            return this._signal;
        };
        R_SystemMonitorInfo.prototype.setSignalMonitor = function (signal) {
            this._signal = signal;
        };
        R_SystemMonitorInfo.prototype.isLampMonitored = function () {
            return this._lamp;
        };
        R_SystemMonitorInfo.prototype.setLampMonitor = function (lamp) {
            this._lamp = lamp;
        };
        R_SystemMonitorInfo.prototype.isScreenMonitored = function () {
            return this._screen;
        };
        R_SystemMonitorInfo.prototype.setScreenMonitor = function (screen) {
            this._screen = screen;
        };
        R_SystemMonitorInfo.prototype.isTemperatureMonitored = function () {
            return this._temperature;
        };
        R_SystemMonitorInfo.prototype.setTemperatureMonitor = function (temperature) {
            this._temperature = temperature;
        };
        R_SystemMonitorInfo.prototype.getMonitorEventHandler = function () {
            return this._monitorEventHandler;
        };
        R_SystemMonitorInfo.prototype.setMonitorEventHandler = function (monitorEventHandler) {
            this._monitorEventHandler = monitorEventHandler;
        };
        return R_SystemMonitorInfo;
    }(rmGeneralEntity.rm_general.R_Entity));
    rm_general.R_SystemMonitorInfo = R_SystemMonitorInfo;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=R_SystemMonitorInfo.js.map