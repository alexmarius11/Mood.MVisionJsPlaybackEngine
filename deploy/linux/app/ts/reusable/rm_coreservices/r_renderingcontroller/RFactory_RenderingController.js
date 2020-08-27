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
var mod_R_RenderingController = require("../../../../../app/ts/reusable/rm_coreservices/r_renderingcontroller/R_RenderingController");
var rm_coreservices;
(function (rm_coreservices) {
    var RFactory_RenderingController = (function (_super) {
        __extends(RFactory_RenderingController, _super);
        function RFactory_RenderingController() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RFactory_RenderingController.prototype.createService = function (aFactoryDescription, aServiceContainer, serviceProperties, aLogService, error) {
            return new mod_R_RenderingController.rm_coreservices.R_RenderingController(aFactoryDescription, aServiceContainer, aLogService, error);
        };
        return RFactory_RenderingController;
    }(rmGeneralServiceFactory.rm_general.RFactory_Service));
    rm_coreservices.RFactory_RenderingController = RFactory_RenderingController;
})(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
//# sourceMappingURL=RFactory_RenderingController.js.map