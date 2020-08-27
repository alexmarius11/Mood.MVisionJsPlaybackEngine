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
    var R_DateTime = (function (_super) {
        __extends(R_DateTime, _super);
        function R_DateTime() {
            var _this = _super.call(this) || this;
            _this._year = 1970;
            _this._month = 1;
            _this._day = 1;
            _this._hour = 0;
            _this._minutes = 0;
            _this._seconds = 0;
            _this._milliseconds = 0;
            _this._strTime = "";
            _this._strDate = "";
            _this._strDateTime = "";
            return _this;
        }
        R_DateTime.prototype.setDateTime = function (year, month, day, hour, minutes, seconds, milliseconds) {
            this._year = year;
            this._month = month;
            this._day = day;
            this._hour = hour;
            this._minutes = minutes;
            this._seconds = seconds;
            this._milliseconds = milliseconds;
        };
        R_DateTime.prototype.setDate = function (year, month, day) {
            this._year = year;
            this._month = month;
            this._day = day;
            this._hour = 0;
            this._minutes = 0;
            this._seconds = 0;
            this._milliseconds = 0;
        };
        R_DateTime.prototype.setYear = function (year) {
            this._year = year;
        };
        R_DateTime.prototype.getYear = function () {
            return this._year;
        };
        R_DateTime.prototype.setMonth = function (month) {
            this._month = month;
        };
        R_DateTime.prototype.getMonth = function () {
            return this._month;
        };
        R_DateTime.prototype.setDay = function (day) {
            this._day = day;
        };
        R_DateTime.prototype.getDay = function () {
            return this._day;
        };
        R_DateTime.prototype.setHour = function (hour) {
            this._hour = hour;
        };
        R_DateTime.prototype.getHour = function () {
            return this._hour;
        };
        R_DateTime.prototype.setMinutes = function (minutes) {
            this._minutes = minutes;
        };
        R_DateTime.prototype.getMinutes = function () {
            return this._minutes;
        };
        R_DateTime.prototype.setSeconds = function (seconds) {
            this._seconds = seconds;
        };
        R_DateTime.prototype.getSeconds = function () {
            return this._seconds;
        };
        R_DateTime.prototype.setMilliseconds = function (milliseconds) {
            this._milliseconds = milliseconds;
        };
        R_DateTime.prototype.getMilliseconds = function () {
            return this._milliseconds;
        };
        R_DateTime.prototype.isEquals = function (aOtherDateTime) {
            if (this._year != aOtherDateTime.getYear())
                return false;
            if (this._month != aOtherDateTime.getMonth())
                return false;
            if (this._day != aOtherDateTime.getDay())
                return false;
            if (this._hour != aOtherDateTime.getHour())
                return false;
            if (this._minutes != aOtherDateTime.getMinutes())
                return false;
            if (this._seconds != aOtherDateTime.getSeconds())
                return false;
            if (this._milliseconds != aOtherDateTime.getMilliseconds())
                return false;
            return true;
        };
        R_DateTime.prototype.isGreater = function (aOtherDateTime) {
            if (this._year > aOtherDateTime.getYear())
                return true;
            if (this._year < aOtherDateTime.getYear())
                return false;
            if (this._month > aOtherDateTime.getMonth())
                return true;
            if (this._month < aOtherDateTime.getMonth())
                return false;
            if (this._day > aOtherDateTime.getDay())
                return true;
            if (this._day < aOtherDateTime.getDay())
                return false;
            if (this._hour > aOtherDateTime.getHour())
                return true;
            if (this._hour < aOtherDateTime.getHour())
                return false;
            if (this._minutes > aOtherDateTime.getMinutes())
                return true;
            if (this._minutes < aOtherDateTime.getMinutes())
                return false;
            if (this._seconds > aOtherDateTime.getSeconds())
                return true;
            if (this._seconds < aOtherDateTime.getSeconds())
                return false;
            if (this._milliseconds > aOtherDateTime.getMilliseconds())
                return true;
            if (this._milliseconds < aOtherDateTime.getMilliseconds())
                return false;
            return false;
        };
        R_DateTime.prototype.isLower = function (aOtherDateTime) {
            if (this._year > aOtherDateTime.getYear())
                return false;
            if (this._year < aOtherDateTime.getYear())
                return true;
            if (this._month > aOtherDateTime.getMonth())
                return false;
            if (this._month < aOtherDateTime.getMonth())
                return true;
            if (this._day > aOtherDateTime.getDay())
                return false;
            if (this._day < aOtherDateTime.getDay())
                return true;
            if (this._hour > aOtherDateTime.getHour())
                return false;
            if (this._hour < aOtherDateTime.getHour())
                return true;
            if (this._minutes > aOtherDateTime.getMinutes())
                return false;
            if (this._minutes < aOtherDateTime.getMinutes())
                return true;
            if (this._seconds > aOtherDateTime.getSeconds())
                return false;
            if (this._seconds < aOtherDateTime.getSeconds())
                return true;
            if (this._milliseconds > aOtherDateTime.getMilliseconds())
                return false;
            if (this._milliseconds < aOtherDateTime.getMilliseconds())
                return true;
            return false;
        };
        R_DateTime.prototype.getAsString = function () {
            return "" + this._year + "/"
                + this._month + "/"
                + this._day + " "
                + this._hour + ":"
                + this._minutes + ":"
                + this._seconds + "."
                + this._milliseconds;
        };
        R_DateTime.prototype.getAsISOString = function () {
            var strMinutes = "" + this._minutes;
            if (this._minutes < 10)
                strMinutes = "0" + this._minutes;
            var strHour = "" + this._hour;
            if (this._hour < 10)
                strHour = "0" + this._hour;
            var strSeconds = "" + this._seconds;
            if (this._seconds < 10)
                strSeconds = "0" + this._seconds;
            var strMonth = "" + this._month;
            if (this._month < 10)
                strMonth = "0" + this._month;
            var strDay = "" + this._day;
            if (this._day < 10)
                strDay = "0" + this._day;
            var strMs = "" + this._milliseconds;
            if ((this._milliseconds >= 100) && (this._milliseconds < 1000))
                strMs = "0" + this._milliseconds;
            else if ((this._milliseconds >= 0) && (this._milliseconds < 100))
                strMs = "00" + this._milliseconds;
            return ""
                + this._year + "-"
                + strMonth + "-"
                + strDay + "T"
                + strHour + ":"
                + strMinutes + ":"
                + strSeconds + "."
                + strMs;
        };
        R_DateTime.prototype.setDateAsString = function (strDate) {
            this._strDate = strDate;
        };
        R_DateTime.prototype.getDateAsString = function () {
            return this._strDate;
        };
        R_DateTime.prototype.setTimeAsString = function (strTime) {
            this._strTime = strTime;
        };
        R_DateTime.prototype.getTimeAsString = function () {
            return this._strTime;
        };
        R_DateTime.prototype.setDateTimeAsString = function (strDateTime) {
            this._strDateTime = strDateTime;
        };
        R_DateTime.prototype.getDateTimeAsString = function () {
            return this._strDateTime;
        };
        return R_DateTime;
    }(rmGeneralEntity.rm_general.R_Entity));
    rm_general.R_DateTime = R_DateTime;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=R_DateTime.js.map