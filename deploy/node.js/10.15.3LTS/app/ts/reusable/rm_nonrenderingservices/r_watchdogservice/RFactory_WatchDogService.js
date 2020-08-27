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
var mod_R_WatchDogService = require("../../../../../app/ts/reusable/rm_nonrenderingservices/r_watchdogservice/R_WatchDogService");
var rm_nonrenderingservices;
(function (rm_nonrenderingservices) {
    var RFactory_WatchDogService = (function (_super) {
        __extends(RFactory_WatchDogService, _super);
        function RFactory_WatchDogService() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RFactory_WatchDogService.prototype.createService = function (aFactoryDescription, aServiceContainer, serviceProperties, aLogService, error) {
            return new mod_R_WatchDogService.rm_nonrenderingservices.R_WatchDogService(aFactoryDescription, aServiceContainer, aLogService, error);
        };
        return RFactory_WatchDogService;
    }(rmGeneralServiceFactory.rm_general.RFactory_Service));
    rm_nonrenderingservices.RFactory_WatchDogService = RFactory_WatchDogService;
})(rm_nonrenderingservices = exports.rm_nonrenderingservices || (exports.rm_nonrenderingservices = {}));
//# sourceMappingURL=RFactory_WatchDogService.js.map