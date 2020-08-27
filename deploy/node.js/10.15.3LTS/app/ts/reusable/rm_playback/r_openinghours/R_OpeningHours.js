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
    var R_OpeningHours = (function (_super) {
        __extends(R_OpeningHours, _super);
        function R_OpeningHours() {
            var _this = _super.call(this) || this;
            _this._openingHoursList = new Array();
            return _this;
        }
        R_OpeningHours.prototype.getOpeningHours = function () {
            return this._openingHoursList;
        };
        R_OpeningHours.prototype.addDayOpeningHours = function (dayOpeningHour) {
            this._openingHoursList.push(dayOpeningHour);
        };
        R_OpeningHours.prototype.getDayOpeningHours = function (startDayName) {
            if (startDayName == null)
                return null;
            var foundDayOpeningHour = null;
            if (this._openingHoursList == null)
                return null;
            var i = 0;
            for (i = 0; i < this._openingHoursList.length; i++) {
                if (this._openingHoursList[i] == null)
                    continue;
                if (startDayName == this._openingHoursList[i].getOpenDayName()) {
                    foundDayOpeningHour = this._openingHoursList[i];
                    break;
                }
            }
            return foundDayOpeningHour;
        };
        return R_OpeningHours;
    }(rmGeneralEntity.rm_general.R_Entity));
    rm_playback.R_OpeningHours = R_OpeningHours;
})(rm_playback = exports.rm_playback || (exports.rm_playback = {}));
//# sourceMappingURL=R_OpeningHours.js.map