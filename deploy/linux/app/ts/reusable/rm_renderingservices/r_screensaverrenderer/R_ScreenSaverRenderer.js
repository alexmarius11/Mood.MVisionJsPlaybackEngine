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
var amMediaTypeEnum = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_MediaTypeEnum");
var rmRenderingServices = require("../../../../../app/ts/reusable/rm_renderingservices/r_renderingservice/R_RenderingService");
var rmIScreenSaverRenderer = require("../../../../../app/ts/reusable/rm_renderingservices/r_screensaverrenderer/IImpl_ScreenSaverRenderer_R");
var rmIScreenSaverRendererConfig = require("../../../../../app/ts/reusable/rm_renderingservices/r_screensaverrenderer/IImpl_ScreenSaverRenderer_Config");
var rm_renderingservices;
(function (rm_renderingservices) {
    var R_ScreenSaverRenderer = (function (_super) {
        __extends(R_ScreenSaverRenderer, _super);
        function R_ScreenSaverRenderer(aFactoryDescription, aServiceContainer, aLogService, error) {
            var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
            _this._iScreenSaverRenderer = new rmIScreenSaverRenderer.rm_renderingservices.IImpl_ScreenSaverRenderer_R(_this);
            _this._iScreenSaverRendererConfig = new rmIScreenSaverRendererConfig.rm_renderingservices.IImpl_ScreenSaverRenderer_Config(_this);
            _this._aLogService = aLogService;
            _this._aScreenSaverConfig = null;
            _this._htmlZoneDiv = null;
            _this._imageRenderer = null;
            _this._videoRenderer = null;
            return _this;
        }
        R_ScreenSaverRenderer.prototype.reset = function () {
            this._htmlZoneDiv = null;
            this._htmlImage = null;
            this._htmlVideo = null;
        };
        R_ScreenSaverRenderer.prototype.setHtmlZoneDiv = function (htmlZoneDiv) {
            this._htmlZoneDiv = htmlZoneDiv;
            this._videoRenderer._iVideoRendererConfig.setHtmlZoneDiv(this._htmlZoneDiv);
            this._imageRenderer._iImageRendererConfig.setHtmlZoneDiv(this._htmlZoneDiv);
        };
        R_ScreenSaverRenderer.prototype.getHtmlZoneDiv = function () {
            return this._htmlZoneDiv;
        };
        R_ScreenSaverRenderer.prototype.setHtmlVideo = function (htmlVideo) {
            this._htmlVideo = htmlVideo;
            this._videoRenderer._iVideoRendererConfig.setHtmlVideo(this._htmlVideo);
        };
        R_ScreenSaverRenderer.prototype.getHtmlVideo = function () {
            return this._htmlVideo;
        };
        R_ScreenSaverRenderer.prototype.setHtmlImage = function (htmlImage) {
            this._htmlImage = htmlImage;
            this._imageRenderer._iImageRendererConfig.setHtmlImage(this._htmlImage);
        };
        R_ScreenSaverRenderer.prototype.getHtmlImage = function () {
            return this._htmlImage;
        };
        R_ScreenSaverRenderer.prototype.injectDependencies = function (aSrvContainer, aSrvLocator, aSrvLog, error) {
            _super.prototype.injectDependencies.call(this, aSrvContainer, aSrvLocator, aSrvLog, error);
            var errorNo = 0;
            this._imageRenderer = this._aServiceLocator._iServiceCreation.createDefaultService_ImageRenderer(this._aServiceContainer, this._aServiceLocator, this._aLogService, 1, error);
            if (error.isError()) {
                errorNo = 1;
            }
            this._imageRenderer._iService.injectDependencies(this._aServiceContainer, this._aServiceLocator, this._aLogService, error);
            this._videoRenderer = this._aServiceLocator._iServiceCreation.createDefaultService_VideoRenderer(this._aServiceContainer, this._aServiceLocator, this._aLogService, 1, error);
            if (error.isError()) {
                errorNo = 1;
            }
            this._videoRenderer._iService.injectDependencies(this._aServiceContainer, this._aServiceLocator, this._aLogService, error);
            return 0;
        };
        R_ScreenSaverRenderer.prototype.setScreenSaverConfig = function (aScreenSaverConfig) {
            this._aScreenSaverConfig = aScreenSaverConfig;
        };
        R_ScreenSaverRenderer.prototype.getScreenSaverConfig = function () {
            return this._aScreenSaverConfig;
        };
        R_ScreenSaverRenderer.prototype.prepareNextMediaItem = function (prepareParams, error, context, callback) {
            this.setCrtPrepareParams(prepareParams);
            var callbackPrepare = function callbackPrepare() {
                if (callback != null) {
                    callback(context);
                }
                return;
            };
            if (this._aScreenSaverConfig.getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Image) {
                prepareParams.getRenderParams().getParamFileInfo().setUrlStorage(this._aScreenSaverConfig.getFileFullName());
                prepareParams.getRenderParams().getParamFileInfo().setUrlPath("");
                prepareParams.getRenderParams().getParamFileInfo().setUrlName("");
                prepareParams.getRenderParams().getParamImage().setDisplayType(this._aScreenSaverConfig.getImageDisplayType());
                this._imageRenderer._iRenderingServiceControl.prepareNextMediaItem(prepareParams, error, context, callbackPrepare);
                return;
            }
            if (this._aScreenSaverConfig.getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Video) {
                prepareParams.getRenderParams().getParamFileInfo().setUrlStorage(this._aScreenSaverConfig.getFileFullName());
                prepareParams.getRenderParams().getParamFileInfo().setUrlPath("");
                prepareParams.getRenderParams().getParamFileInfo().setUrlName("");
                this._videoRenderer._iRenderingServiceControl.prepareNextMediaItem(prepareParams, error, context, callbackPrepare);
                return;
            }
            return callbackPrepare();
        };
        R_ScreenSaverRenderer.prototype.playNextMediaItem = function (runParams, error, context, callback) {
            var callbackPlay = function callbackPlay() {
                if (callback != null) {
                    callback(context);
                }
                return;
            };
            if (this._aScreenSaverConfig.getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Image) {
                this._imageRenderer._iRenderingServiceControl.playNextMediaItem(runParams, error, context, callbackPlay);
                return;
            }
            if (this._aScreenSaverConfig.getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Video) {
                this._videoRenderer._iRenderingServiceControl.playNextMediaItem(runParams, error, context, callbackPlay);
                return;
            }
            callbackPlay();
        };
        R_ScreenSaverRenderer.prototype.stopCrtMediaItem = function (stopParams, error, context, callback) {
            var callbackStop = function callbackStop() {
                if (callback != null) {
                    callback(context);
                }
                return;
            };
            if (this._aScreenSaverConfig != null) {
                if (this._aScreenSaverConfig.getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Image) {
                    this._imageRenderer._iRenderingServiceControl.stopCrtMediaItem(stopParams, error, context, callbackStop);
                    return;
                }
                if (this._aScreenSaverConfig.getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Video) {
                    this._videoRenderer._iRenderingServiceControl.stopCrtMediaItem(stopParams, error, context, callbackStop);
                    return;
                }
            }
            callbackStop();
        };
        R_ScreenSaverRenderer.prototype.destroyCrtMediaItem = function (stopParams, error, context, callback) {
            var callbackDestroy = function callbackDestroy() {
                if (callback != null) {
                    callback(context);
                }
                return;
            };
            if (this._aScreenSaverConfig != null) {
                if (this._aScreenSaverConfig.getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Image) {
                    this._imageRenderer._iRenderingServiceControl.destroyCrtMediaItem(stopParams, error, context, callbackDestroy);
                    return;
                }
                if (this._aScreenSaverConfig.getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Video) {
                    this._videoRenderer._iRenderingServiceControl.destroyCrtMediaItem(stopParams, error, context, callbackDestroy);
                    return;
                }
            }
            callbackDestroy();
        };
        return R_ScreenSaverRenderer;
    }(rmRenderingServices.rm_renderingservices.R_RenderingService));
    rm_renderingservices.R_ScreenSaverRenderer = R_ScreenSaverRenderer;
})(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
//# sourceMappingURL=R_ScreenSaverRenderer.js.map