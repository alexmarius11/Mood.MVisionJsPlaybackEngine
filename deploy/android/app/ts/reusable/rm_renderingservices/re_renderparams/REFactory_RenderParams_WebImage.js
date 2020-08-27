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
var rmRenderParametersWebImage = require("../../../../../app/ts/reusable/rm_renderingservices/re_renderparams/RE_RenderParams_WebImage");
var rmGeneralEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");
var rm_renderingservices;
(function (rm_renderingservices) {
    var RFactory_RenderParameters_WebImage = (function (_super) {
        __extends(RFactory_RenderParameters_WebImage, _super);
        function RFactory_RenderParameters_WebImage() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RFactory_RenderParameters_WebImage.prototype.createEntity = function (entityName, error) {
            return new rmRenderParametersWebImage.rm_renderingservices.RE_RenderParams_WebImage();
        };
        return RFactory_RenderParameters_WebImage;
    }(rmGeneralEntityFactory.rm_general.RFactory_Entity));
    rm_renderingservices.RFactory_RenderParameters_WebImage = RFactory_RenderParameters_WebImage;
})(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
//# sourceMappingURL=REFactory_RenderParams_WebImage.js.map