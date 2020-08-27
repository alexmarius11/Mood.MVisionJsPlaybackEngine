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
var rmRenderingServices = require("../../../../../app/ts/reusable/rm_renderingservices/r_renderingservice/R_RenderingService");
var rmIBackgroundRenderer = require("../../../../../app/ts/reusable/rm_renderingservices/r_backgroundrenderer/IImpl_BackgroundRenderer_R");
var rmIBackgroundRendererConfig = require("../../../../../app/ts/reusable/rm_renderingservices/r_backgroundrenderer/IImpl_BackgroundRenderer_Config");
var rm_renderingservices;
(function (rm_renderingservices) {
    var R_BackgroundRenderer = (function (_super) {
        __extends(R_BackgroundRenderer, _super);
        function R_BackgroundRenderer(aFactoryDescription, aServiceContainer, aLogService, error) {
            var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
            _this._iBackgroundRenderer = new rmIBackgroundRenderer.rm_renderingservices.IImpl_BackgroundRenderer_R(_this);
            _this._iBackgroundRendererConfig = new rmIBackgroundRendererConfig.rm_renderingservices.IImpl_BackgroundRenderer_Config(_this);
            _this._aLogService = aLogService;
            _this._htmlZoneDiv = null;
            return _this;
        }
        R_BackgroundRenderer.prototype.reset = function () {
            this._htmlZoneDiv = null;
        };
        R_BackgroundRenderer.prototype.setHtmlZoneDiv = function (htmlZoneDiv) {
            this._htmlZoneDiv = htmlZoneDiv;
        };
        R_BackgroundRenderer.prototype.getHtmlZoneDiv = function () {
            return this._htmlZoneDiv;
        };
        return R_BackgroundRenderer;
    }(rmRenderingServices.rm_renderingservices.R_RenderingService));
    rm_renderingservices.R_BackgroundRenderer = R_BackgroundRenderer;
})(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
//# sourceMappingURL=R_BackgroundRenderer.js.map