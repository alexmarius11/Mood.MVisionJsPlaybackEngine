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
var mod_R_EnvUpdaterService = require("../../../../../app/ts/reusable/rm_nonrenderingservices/r_envupdaterservice/R_EnvUpdaterService");
var rm_nonrenderingservices;
(function (rm_nonrenderingservices) {
    var RFactory_EnvUpdaterService = (function (_super) {
        __extends(RFactory_EnvUpdaterService, _super);
        function RFactory_EnvUpdaterService() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RFactory_EnvUpdaterService.prototype.createService = function (aFactoryDescription, aServiceContainer, serviceProperties, aLogService, error) {
            return new mod_R_EnvUpdaterService.rm_nonrenderingservices.R_EnvUpdaterService(aFactoryDescription, aServiceContainer, aLogService, error);
        };
        return RFactory_EnvUpdaterService;
    }(rmGeneralServiceFactory.rm_general.RFactory_Service));
    rm_nonrenderingservices.RFactory_EnvUpdaterService = RFactory_EnvUpdaterService;
})(rm_nonrenderingservices = exports.rm_nonrenderingservices || (exports.rm_nonrenderingservices = {}));
//# sourceMappingURL=RFactory_EnvUpdaterService.js.map