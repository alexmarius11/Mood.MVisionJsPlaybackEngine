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
var rm_renderingservices;
(function (rm_renderingservices) {
    var RE_RenderParams_Duration = (function (_super) {
        __extends(RE_RenderParams_Duration, _super);
        function RE_RenderParams_Duration() {
            return _super.call(this) || this;
        }
        RE_RenderParams_Duration.prototype.RE_RenderParams_Duration = function () {
            this._bHasRealTimeDuration = false;
            this._durationInMilliseconds = 0;
            this._strStartDate = "";
            this._dtStartDate = new Date();
            this._strEndDate = "";
            this._dtEndDate = new Date();
        };
        RE_RenderParams_Duration.prototype.reset = function () {
            this._bHasRealTimeDuration = false;
            this._durationInMilliseconds = 0;
            this._strStartDate = "";
            this._strEndDate = "";
        };
        RE_RenderParams_Duration.prototype.setHasRealTimeDuration = function (hasRealTimeDuration) {
            this._bHasRealTimeDuration = hasRealTimeDuration;
        };
        RE_RenderParams_Duration.prototype.getHasRealTimeDuration = function () {
            return this._bHasRealTimeDuration;
        };
        RE_RenderParams_Duration.prototype.setDuration = function (durationnInMilliseconds) {
            this._durationInMilliseconds = durationnInMilliseconds;
        };
        RE_RenderParams_Duration.prototype.getDuration = function () {
            return this._durationInMilliseconds;
        };
        RE_RenderParams_Duration.prototype.setStrStartDate = function (strStartDate) {
            this._strStartDate = strStartDate;
        };
        RE_RenderParams_Duration.prototype.getStrStartDate = function () {
            return this._strStartDate;
        };
        RE_RenderParams_Duration.prototype.setStartDate = function (dtStartDate) {
            this._dtStartDate = dtStartDate;
        };
        RE_RenderParams_Duration.prototype.getStartDate = function () {
            return this._dtStartDate;
        };
        RE_RenderParams_Duration.prototype.setStrEndDate = function (strEndDate) {
            this._strEndDate = strEndDate;
        };
        RE_RenderParams_Duration.prototype.getStrEndDate = function () {
            return this._strEndDate;
        };
        RE_RenderParams_Duration.prototype.setEndDate = function (dtEndDate) {
            this._dtEndDate = dtEndDate;
        };
        RE_RenderParams_Duration.prototype.getEndDate = function () {
            return this._dtEndDate;
        };
        RE_RenderParams_Duration.prototype.copy = function (src) {
            if (src == null)
                return 1;
            this._bHasRealTimeDuration = src.getHasRealTimeDuration();
            return 0;
        };
        return RE_RenderParams_Duration;
    }(rmGeneralEntity.rm_general.R_Entity));
    rm_renderingservices.RE_RenderParams_Duration = RE_RenderParams_Duration;
})(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
//# sourceMappingURL=RE_RenderParams_Duration.js.map