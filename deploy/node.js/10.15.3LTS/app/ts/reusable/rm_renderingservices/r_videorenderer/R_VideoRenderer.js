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
var rmRenderingServices2 = require("../../../../../app/ts/reusable/rm_renderingservices/r_videorenderer/IImpl_VideoRenderer_R");
var rm_renderingservices;
(function (rm_renderingservices) {
    var R_VideoRenderer = (function (_super) {
        __extends(R_VideoRenderer, _super);
        function R_VideoRenderer(aFactoryDescription, aServiceContainer, aLogService, error) {
            var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
            _this._iVideoRenderer = new rmRenderingServices2.rm_renderingservices.IImpl_VideoRenderer_R(_this);
            _this._aLogService = aLogService;
            return _this;
        }
        return R_VideoRenderer;
    }(rmRenderingServices.rm_renderingservices.R_RenderingService));
    rm_renderingservices.R_VideoRenderer = R_VideoRenderer;
})(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
//# sourceMappingURL=R_VideoRenderer.js.map