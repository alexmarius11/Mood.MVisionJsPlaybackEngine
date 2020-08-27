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
var mod_R_SendLogService = require("../../../../../app/ts/reusable/rm_nonrenderingservices/r_sendlogservice/R_SendLogService");
var rm_nonrenderingservices;
(function (rm_nonrenderingservices) {
    var RFactory_SendLogService = (function (_super) {
        __extends(RFactory_SendLogService, _super);
        function RFactory_SendLogService() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RFactory_SendLogService.prototype.createService = function (aFactoryDescription, aServiceContainer, serviceProperties, aLogService, error) {
            return new mod_R_SendLogService.rm_nonrenderingservices.R_SendLogService(aFactoryDescription, aServiceContainer, aLogService, error);
        };
        return RFactory_SendLogService;
    }(rmGeneralServiceFactory.rm_general.RFactory_Service));
    rm_nonrenderingservices.RFactory_SendLogService = RFactory_SendLogService;
})(rm_nonrenderingservices = exports.rm_nonrenderingservices || (exports.rm_nonrenderingservices = {}));
//# sourceMappingURL=RFactory_SendLogService.js.map