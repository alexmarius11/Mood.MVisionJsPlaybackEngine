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
define(["require", "exports", "../../../../../app/ts/reusable/rm_renderingservices/r_renderingservice/R_RenderingService", "../../../../../app/ts/reusable/rm_renderingservices/r_sdkrenderer/IImpl_SDKRenderer_FileSystem_R", "../../../../../app/ts/reusable/rm_renderingservices/r_sdkrenderer/R_SDKConsumer_SDKRenderer"], function (require, exports, rmRenderingServices, rmRenderingServicesIFileSystemRenderer, rmRenderingServicesSDKConsumer) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_renderingservices;
    (function (rm_renderingservices) {
        var R_SDKRenderer = /** @class */ (function (_super) {
            __extends(R_SDKRenderer, _super);
            //----------- constructor 
            function R_SDKRenderer(aFactoryDescription, aServiceContainer, aLogService, error) {
                var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
                _this._aSDKConsumer = new rmRenderingServicesSDKConsumer.rm_renderingservices.R_SDKConsumer_SDKRenderer(null, aServiceContainer, aLogService, error);
                _this._aSDKConsumer._iService.setOwnerService(_this);
                _this._iFileSystemRenderer = new rmRenderingServicesIFileSystemRenderer.rm_renderingservices.IImpl_SDKRenderer_FileSystem_R(_this);
                _this._aSDKJsTV = null;
                _this._aLogService = aLogService;
                _this._aLogRenderer = null;
                return _this;
            }
            //--------------------------------------------
            R_SDKRenderer.prototype.setTargetService = function (aTargetService) {
                this._aTargetService = aTargetService;
                this._aSDKJsTV = aTargetService;
            };
            //---------------------------------------------------------------
            R_SDKRenderer.prototype.action_displayFile = function (storageName, folderName, fileName) {
                return this._iFileSystemRenderer.action_displayFile(storageName, folderName, fileName);
            };
            //--------------------------------------------
            R_SDKRenderer.prototype.setLogRenderer = function (aLogRenderer) {
                this._aLogRenderer = aLogRenderer;
            };
            return R_SDKRenderer;
        }(rmRenderingServices.rm_renderingservices.R_RenderingService));
        rm_renderingservices.R_SDKRenderer = R_SDKRenderer;
    })(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
});
//# sourceMappingURL=R_SDKRenderer.js.map