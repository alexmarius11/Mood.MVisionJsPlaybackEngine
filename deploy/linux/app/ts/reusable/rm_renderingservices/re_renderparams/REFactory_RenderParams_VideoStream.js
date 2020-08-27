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
var rmRenderParametersVideoStream = require("../../../../../app/ts/reusable/rm_renderingservices/re_renderparams/RE_RenderParams_VideoStream");
var rmGeneralEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");
var rm_renderingservices;
(function (rm_renderingservices) {
    var RFactory_RenderParameters_VideoStream = (function (_super) {
        __extends(RFactory_RenderParameters_VideoStream, _super);
        function RFactory_RenderParameters_VideoStream() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RFactory_RenderParameters_VideoStream.prototype.createEntity = function (entityName, error) {
            return new rmRenderParametersVideoStream.rm_renderingservices.RE_RenderParams_VideoStream();
        };
        return RFactory_RenderParameters_VideoStream;
    }(rmGeneralEntityFactory.rm_general.RFactory_Entity));
    rm_renderingservices.RFactory_RenderParameters_VideoStream = RFactory_RenderParameters_VideoStream;
})(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
//# sourceMappingURL=REFactory_RenderParams_VideoStream.js.map