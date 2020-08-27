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
define(["require", "exports", "../../../../../app/ts/reusable/rm_renderingservices/r_renderingservice/R_RenderingService", "../../../../../app/ts/reusable/rm_renderingservices/r_logrenderer/IImpl_LogRenderer_LogMain_R", "../../../../../app/ts/reusable/rm_renderingservices/r_logrenderer/IImpl_LogRenderer_LogConfig_R", "../../../../../app/ts/reusable/rm_renderingservices/r_logrenderer/R_LogConsumer_LogRenderer"], function (require, exports, rmRenderingServices, rmRenderingServicesLogRendererILogMain, rmRenderingServicesLogRendererILogConfig, rmRenderingServicesLogConsumer) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_renderingservices;
    (function (rm_renderingservices) {
        var R_LogRenderer = /** @class */ (function (_super) {
            __extends(R_LogRenderer, _super);
            //----------- constructor 
            function R_LogRenderer(aFactoryDescription, aServiceContainer, aLogService, error) {
                var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
                _this._fileInfo = null;
                _this._fileUrlInfo = null;
                _this._aLogConsumer = new rmRenderingServicesLogConsumer.rm_renderingservices.R_LogConsumer_LogRenderer(null, aServiceContainer, aLogService, error);
                _this._aLogConsumer._iService.setOwnerService(_this);
                _this._iLogMainRenderer = new rmRenderingServicesLogRendererILogMain.rm_renderingservices.IImpl_LogRenderer_LogMain_R(_this);
                _this._iLogConfigRenderer = new rmRenderingServicesLogRendererILogConfig.rm_renderingservices.IImpl_LogRenderer_LogConfig_R(_this);
                _this._aTargetLog = null;
                _this._aLogService = aLogService;
                return _this;
            }
            //---------------------------------------------------------------
            R_LogRenderer.prototype.setFileInfo = function (fileInfo, fileUrlInfo) {
                this._fileInfo = fileInfo;
                this._fileUrlInfo = fileUrlInfo;
            };
            //--------------------------------------------
            R_LogRenderer.prototype.setTargetService = function (aTargetService) {
                this._aTargetService = aTargetService;
                this._aTargetLog = aTargetService;
            };
            return R_LogRenderer;
        }(rmRenderingServices.rm_renderingservices.R_RenderingService));
        rm_renderingservices.R_LogRenderer = R_LogRenderer;
    })(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
});
//# sourceMappingURL=R_LogRenderer.js.map