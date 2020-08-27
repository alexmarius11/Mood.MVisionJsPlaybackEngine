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
var mod_R_HtmlRenderer = require("../../../../../app/ts/reusable/rm_renderingservices/r_htmlrenderer/R_HtmlRenderer");
var rm_renderingservices;
(function (rm_renderingservices) {
    var RFactory_HtmlRenderer = (function (_super) {
        __extends(RFactory_HtmlRenderer, _super);
        function RFactory_HtmlRenderer() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RFactory_HtmlRenderer.prototype.createService = function (aFactoryDescription, aServiceContainer, serviceProperties, aLogService, error) {
            return new mod_R_HtmlRenderer.rm_renderingservices.R_HtmlRenderer(aFactoryDescription, aServiceContainer, aLogService, error);
        };
        return RFactory_HtmlRenderer;
    }(rmGeneralServiceFactory.rm_general.RFactory_Service));
    rm_renderingservices.RFactory_HtmlRenderer = RFactory_HtmlRenderer;
})(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
//# sourceMappingURL=RFactory_HtmlRenderer.js.map