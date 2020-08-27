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
        var R_DeviceTimerInfo = /** @class */ (function (_super) {
            __extends(R_DeviceTimerInfo, _super);
            //----------- constructor 
            function R_DeviceTimerInfo() {
                var _this = _super.call(this) || this;
                _this._hour = 0;
                _this._minute = 0; //= 0;
                _this._onMon = false; //Power.TimerWeek.MONDAY + Power.TimerWeek.FRIDAY;
                _this._onTue = false;
                _this._onWed = false;
                _this._onThu = false;
                _this._onFri = false;
                _this._onSat = false;
                _this._onSun = false;
                _this._inputSource = ""; //= "hdmi:1" ; ////"ext://hdmi:1";
                return _this;
            }
            //-----------------------------
            R_DeviceTimerInfo.prototype.getHour = function () {
                return this._hour;
            };
            //-----------------------------
            R_DeviceTimerInfo.prototype.setHour = function (hour) {
                this._hour = hour;
            };
            //-----------------------------
            R_DeviceTimerInfo.prototype.getMinute = function () {
                return this._minute;
            };
            //-----------------------------
            R_DeviceTimerInfo.prototype.setMinute = function (minute) {
                this._minute = minute;
            };
            //-----------------------------
            R_DeviceTimerInfo.prototype.isOnMon = function () {
                return this._onMon;
            };
            //-----------------------------
            R_DeviceTimerInfo.prototype.setOnMon = function (onMon) {
                this._onMon = onMon;
            };
            //-----------------------------
            R_DeviceTimerInfo.prototype.isOnTue = function () {
                return this._onTue;
            };
            //-----------------------------
            R_DeviceTimerInfo.prototype.setOnTue = function (onTue) {
                this._onTue = onTue;
            };
            //-----------------------------
            R_DeviceTimerInfo.prototype.isOnWed = function () {
                return this._onWed;
            };
            //-----------------------------
            R_DeviceTimerInfo.prototype.setOnWed = function (onWed) {
                this._onWed = onWed;
            };
            //-----------------------------
            R_DeviceTimerInfo.prototype.isOnThu = function () {
                return this._onThu;
            };
            //-----------------------------
            R_DeviceTimerInfo.prototype.setOnThu = function (onThu) {
                this._onThu = onThu;
            };
            //-----------------------------
            R_DeviceTimerInfo.prototype.isOnFri = function () {
                return this._onFri;
            };
            //-----------------------------
            R_DeviceTimerInfo.prototype.setOnFri = function (onFri) {
                this._onFri = onFri;
            };
            //-----------------------------
            R_DeviceTimerInfo.prototype.isOnSat = function () {
                return this._onSat;
            };
            //-----------------------------
            R_DeviceTimerInfo.prototype.setOnSat = function (onSat) {
                this._onSat = onSat;
            };
            //-----------------------------
            R_DeviceTimerInfo.prototype.isOnSun = function () {
                return this._onSun;
            };
            //-----------------------------
            R_DeviceTimerInfo.prototype.setOnSun = function (onSun) {
                this._onSun = onSun;
            };
            //-----------------------------
            R_DeviceTimerInfo.prototype.getInputSource = function () {
                return this._inputSource;
            };
            //-----------------------------
            R_DeviceTimerInfo.prototype.setInputSource = function (inputSource) {
                this._inputSource = inputSource;
            };
            return R_DeviceTimerInfo;
        }(rmGeneralEntity.rm_general.R_Entity));
        rm_general.R_DeviceTimerInfo = R_DeviceTimerInfo;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=R_DeviceTimerInfo.js.map