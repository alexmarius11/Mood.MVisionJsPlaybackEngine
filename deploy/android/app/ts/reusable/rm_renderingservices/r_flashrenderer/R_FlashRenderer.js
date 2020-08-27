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
var rmIFlashRenderer = require("../../../../../app/ts/reusable/rm_renderingservices/r_flashrenderer/IImpl_FlashRenderer_R");
var rmIFlashRendererConfig = require("../../../../../app/ts/reusable/rm_renderingservices/r_flashrenderer/IImpl_FlashRenderer_Config");
var rm_renderingservices;
(function (rm_renderingservices) {
    var R_FlashRenderer = (function (_super) {
        __extends(R_FlashRenderer, _super);
        function R_FlashRenderer(aFactoryDescription, aServiceContainer, aLogService, error) {
            var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
            _this._iFlashRenderer = new rmIFlashRenderer.rm_renderingservices.IImpl_FlashRenderer_R(_this);
            _this._iFlashRendererConfig = new rmIFlashRendererConfig.rm_renderingservices.IImpl_FlashRenderer_Config(_this);
            _this._aLogService = aLogService;
            _this._htmlZoneDiv = null;
            _this._htmlObject = null;
            return _this;
        }
        R_FlashRenderer.prototype.reset = function () {
            this._htmlZoneDiv = null;
            this._htmlObject = null;
        };
        R_FlashRenderer.prototype.setHtmlZoneDiv = function (htmlZoneDiv) {
            this._htmlZoneDiv = htmlZoneDiv;
        };
        R_FlashRenderer.prototype.getHtmlZoneDiv = function () {
            return this._htmlZoneDiv;
        };
        R_FlashRenderer.prototype.setHtmlObject = function (htmlObject) {
            this._htmlObject = htmlObject;
        };
        R_FlashRenderer.prototype.getHtmlObject = function () {
            return this._htmlObject;
        };
        return R_FlashRenderer;
    }(rmRenderingServices.rm_renderingservices.R_RenderingService));
    rm_renderingservices.R_FlashRenderer = R_FlashRenderer;
})(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
//# sourceMappingURL=R_FlashRenderer.js.map