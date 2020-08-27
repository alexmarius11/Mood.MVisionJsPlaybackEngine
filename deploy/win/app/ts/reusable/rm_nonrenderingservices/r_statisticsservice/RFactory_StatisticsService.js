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
var rmGeneralServiceFactory = require("../../../../../app/ts/reusable/rm_general/r_service/RFactory_Service");
var mod_R_StatisticsService = require("../../../../../app/ts/reusable/rm_nonrenderingservices/r_statisticsservice/R_StatisticsService");
var rm_nonrenderingservices;
(function (rm_nonrenderingservices) {
    var RFactory_StatisticsService = (function (_super) {
        __extends(RFactory_StatisticsService, _super);
        function RFactory_StatisticsService() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RFactory_StatisticsService.prototype.createService = function (aFactoryDescription, aServiceContainer, serviceProperties, aLogService, error) {
            return new mod_R_StatisticsService.rm_nonrenderingservices.R_StatisticsService(aFactoryDescription, aServiceContainer, aLogService, error);
        };
        return RFactory_StatisticsService;
    }(rmGeneralServiceFactory.rm_general.RFactory_Service));
    rm_nonrenderingservices.RFactory_StatisticsService = RFactory_StatisticsService;
})(rm_nonrenderingservices = exports.rm_nonrenderingservices || (exports.rm_nonrenderingservices = {}));
//# sourceMappingURL=RFactory_StatisticsService.js.map