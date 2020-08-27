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
var mod_R_VideoRenderer = require("../../../../../app/ts/reusable/rm_renderingservices/r_videorenderer/R_VideoRenderer");
var rm_renderingservices;
(function (rm_renderingservices) {
    var RFactory_VideoRenderer = (function (_super) {
        __extends(RFactory_VideoRenderer, _super);
        function RFactory_VideoRenderer() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RFactory_VideoRenderer.prototype.createService = function (aFactoryDescription, aServiceContainer, serviceProperties, aLogService, error) {
            return new mod_R_VideoRenderer.rm_renderingservices.R_VideoRenderer(aFactoryDescription, aServiceContainer, aLogService, error);
        };
        return RFactory_VideoRenderer;
    }(rmGeneralServiceFactory.rm_general.RFactory_Service));
    rm_renderingservices.RFactory_VideoRenderer = RFactory_VideoRenderer;
})(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
//# sourceMappingURL=RFactory_VideoRenderer.js.map