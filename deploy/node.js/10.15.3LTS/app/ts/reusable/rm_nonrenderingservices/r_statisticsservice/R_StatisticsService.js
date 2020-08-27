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
var rmNonRenderingServices = require("../../../../../app/ts/reusable/rm_nonrenderingservices/r_nonrenderingservice/R_NonRenderingService");
var rmNonRenderingServices2 = require("../../../../../app/ts/reusable/rm_nonrenderingservices/r_statisticsservice/IImpl_StatisticsService_R");
var rm_nonrenderingservices;
(function (rm_nonrenderingservices) {
    var R_StatisticsService = (function (_super) {
        __extends(R_StatisticsService, _super);
        function R_StatisticsService(aFactoryDescription, aServiceContainer, aLogService, error) {
            var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
            _this._iStatisticsService = new rmNonRenderingServices2.rm_nonrenderingservices.IImpl_StatisticsService_R(_this);
            _this._aLogService = aLogService;
            return _this;
        }
        return R_StatisticsService;
    }(rmNonRenderingServices.rm_nonrenderingservices.R_NonRenderingService));
    rm_nonrenderingservices.R_StatisticsService = R_StatisticsService;
})(rm_nonrenderingservices = exports.rm_nonrenderingservices || (exports.rm_nonrenderingservices = {}));
//# sourceMappingURL=R_StatisticsService.js.map