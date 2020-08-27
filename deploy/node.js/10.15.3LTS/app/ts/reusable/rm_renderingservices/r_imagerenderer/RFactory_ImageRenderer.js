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
var mod_R_ImageRenderer = require("../../../../../app/ts/reusable/rm_renderingservices/r_imagerenderer/R_ImageRenderer");
var rm_renderingservices;
(function (rm_renderingservices) {
    var RFactory_ImageRenderer = (function (_super) {
        __extends(RFactory_ImageRenderer, _super);
        function RFactory_ImageRenderer() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RFactory_ImageRenderer.prototype.createService = function (aFactoryDescription, aServiceContainer, serviceProperties, aLogService, error) {
            return new mod_R_ImageRenderer.rm_renderingservices.R_ImageRenderer(aFactoryDescription, aServiceContainer, aLogService, error);
        };
        return RFactory_ImageRenderer;
    }(rmGeneralServiceFactory.rm_general.RFactory_Service));
    rm_renderingservices.RFactory_ImageRenderer = RFactory_ImageRenderer;
})(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
//# sourceMappingURL=RFactory_ImageRenderer.js.map