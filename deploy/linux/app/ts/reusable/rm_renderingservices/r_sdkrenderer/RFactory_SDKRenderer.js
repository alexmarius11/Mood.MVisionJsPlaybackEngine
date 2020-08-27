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
var mod_R_SDKRenderer = require("../../../../../app/ts/reusable/rm_renderingservices/r_sdkrenderer/R_SDKRenderer");
var rm_renderingservices;
(function (rm_renderingservices) {
    var RFactory_SDKRenderer = (function (_super) {
        __extends(RFactory_SDKRenderer, _super);
        function RFactory_SDKRenderer() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RFactory_SDKRenderer.prototype.createService = function (aFactoryDescription, aServiceContainer, serviceProperties, aLogService, error) {
            return new mod_R_SDKRenderer.rm_renderingservices.R_SDKRenderer(aFactoryDescription, aServiceContainer, aLogService, error);
        };
        return RFactory_SDKRenderer;
    }(rmGeneralServiceFactory.rm_general.RFactory_Service));
    rm_renderingservices.RFactory_SDKRenderer = RFactory_SDKRenderer;
})(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
//# sourceMappingURL=RFactory_SDKRenderer.js.map