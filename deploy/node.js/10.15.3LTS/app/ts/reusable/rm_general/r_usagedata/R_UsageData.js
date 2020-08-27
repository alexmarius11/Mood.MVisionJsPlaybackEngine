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
    var R_UsageData = (function (_super) {
        __extends(R_UsageData, _super);
        function R_UsageData() {
            var _this = _super.call(this) || this;
            _this._systemUptime = "";
            _this._systemTotalUsed = "";
            return _this;
        }
        R_UsageData.prototype.getSystemUptime = function () {
            return this._systemUptime;
        };
        R_UsageData.prototype.setSystemUptime = function (systemUptime) {
            this._systemUptime = systemUptime;
        };
        R_UsageData.prototype.getSystemTotalUsed = function () {
            return this._systemTotalUsed;
        };
        R_UsageData.prototype.setSystemTotalUsed = function (systemTotalUsed) {
            this._systemTotalUsed = systemTotalUsed;
        };
        return R_UsageData;
    }(rmGeneralEntity.rm_general.R_Entity));
    rm_general.R_UsageData = R_UsageData;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=R_UsageData.js.map