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
var mod_R_UtilsService = require("../../../../../app/ts/reusable/rm_transversalservices/r_utilsservice/R_UtilsService");
var rm_transversalservices;
(function (rm_transversalservices) {
    var RFactory_UtilsService = (function (_super) {
        __extends(RFactory_UtilsService, _super);
        function RFactory_UtilsService() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RFactory_UtilsService.prototype.createService = function (aFactoryDescription, aServiceContainer, serviceProperties, aLogService, error) {
            return new mod_R_UtilsService.rm_transversalservices.R_UtilsService(aFactoryDescription, aServiceContainer, aLogService, error);
        };
        return RFactory_UtilsService;
    }(rmGeneralServiceFactory.rm_general.RFactory_Service));
    rm_transversalservices.RFactory_UtilsService = RFactory_UtilsService;
})(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
//# sourceMappingURL=RFactory_UtilsService.js.map