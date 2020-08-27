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
    var R_DayOpeningHours = (function (_super) {
        __extends(R_DayOpeningHours, _super);
        function R_DayOpeningHours() {
            return _super.call(this) || this;
        }
        R_DayOpeningHours.prototype.getOpenDayName = function () {
            return this._openDayName;
        };
        R_DayOpeningHours.prototype.setOpenDayName = function (openDayName) {
            this._openDayName = openDayName;
        };
        R_DayOpeningHours.prototype.getOpenTime = function () {
            return this._openTime;
        };
        R_DayOpeningHours.prototype.setOpenTime = function (openTime) {
            this._openTime = openTime;
        };
        R_DayOpeningHours.prototype.getCloseDayName = function () {
            return this._closeDayName;
        };
        R_DayOpeningHours.prototype.setCloseDayName = function (closeDayName) {
            this._closeDayName = closeDayName;
        };
        R_DayOpeningHours.prototype.getCloseTime = function () {
            return this._closeTime;
        };
        R_DayOpeningHours.prototype.setCloseTime = function (closeTime) {
            this._closeTime = closeTime;
        };
        return R_DayOpeningHours;
    }(rmGeneralEntity.rm_general.R_Entity));
    rm_playback.R_DayOpeningHours = R_DayOpeningHours;
})(rm_playback = exports.rm_playback || (exports.rm_playback = {}));
//# sourceMappingURL=R_DayOpeningHours.js.map