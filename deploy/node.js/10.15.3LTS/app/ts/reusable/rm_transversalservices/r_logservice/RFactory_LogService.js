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
var mod_R_LogService = require("../../../../../app/ts/reusable/rm_transversalservices/r_logservice/R_LogService");
var rm_transversalservices;
(function (rm_transversalservices) {
    var RFactory_LogService = (function (_super) {
        __extends(RFactory_LogService, _super);
        function RFactory_LogService() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RFactory_LogService.prototype.createService = function (aFactoryDescription, aServiceContainer, serviceProperties, aLogService, error) {
            return new mod_R_LogService.rm_transversalservices.R_LogService(aFactoryDescription, aServiceContainer, aLogService, error);
        };
        return RFactory_LogService;
    }(rmGeneralServiceFactory.rm_general.RFactory_Service));
    rm_transversalservices.RFactory_LogService = RFactory_LogService;
})(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
//# sourceMappingURL=RFactory_LogService.js.map