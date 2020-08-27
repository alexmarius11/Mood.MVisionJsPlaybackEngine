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
var amImageDisplayTypeEnum = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_ImageDisplayTypeEnum");
var rmRenderingServices = require("../../../../../app/ts/reusable/rm_renderingservices/r_renderingservice/R_RenderingService");
var rmIImageRenderer = require("../../../../../app/ts/reusable/rm_renderingservices/r_imagerenderer/IImpl_ImageRenderer_R");
var rmIImageRendererConfig = require("../../../../../app/ts/reusable/rm_renderingservices/r_imagerenderer/IImpl_ImageRenderer_Config");
var rm_renderingservices;
(function (rm_renderingservices) {
    var R_ImageRenderer = (function (_super) {
        __extends(R_ImageRenderer, _super);
        function R_ImageRenderer(aFactoryDescription, aServiceContainer, aLogService, error) {
            var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
            _this._iImageRenderer = new rmIImageRenderer.rm_renderingservices.IImpl_ImageRenderer_R(_this);
            _this._iImageRendererConfig = new rmIImageRendererConfig.rm_renderingservices.IImpl_ImageRenderer_Config(_this);
            _this._aLogService = aLogService;
            _this._htmlZoneDiv = null;
            _this._htmlImage = null;
            return _this;
        }
        R_ImageRenderer.prototype.reset = function () {
            this._htmlZoneDiv = null;
            this._htmlImage = null;
        };
        R_ImageRenderer.prototype.setHtmlZoneDiv = function (htmlZoneDiv) {
            this._htmlZoneDiv = htmlZoneDiv;
        };
        R_ImageRenderer.prototype.getHtmlZoneDiv = function () {
            return this._htmlZoneDiv;
        };
        R_ImageRenderer.prototype.setHtmlImage = function (htmlImage) {
            this._htmlImage = htmlImage;
        };
        R_ImageRenderer.prototype.getHtmlImage = function () {
            return this._htmlImage;
        };
        R_ImageRenderer.prototype.prepareNextMediaItem = function (prepareParams, error, context, callback) {
            var strImageUrl = prepareParams.getRenderParams().getParamFileInfo().getFullUrlName();
            var owner = this;
            this._htmlImage.onload = function () {
                try {
                    owner.onChangeContainerSize(prepareParams, error, context, callback);
                }
                catch (e) {
                }
                if (callback != null) {
                    callback(context);
                    return;
                }
            };
            if (this._htmlImage != null) {
                try {
                    this._htmlImage.src = strImageUrl;
                }
                catch (e) {
                    if (callback != null) {
                        callback(context);
                        return;
                    }
                }
            }
            else {
                if (callback != null) {
                    callback(context);
                    return;
                }
            }
        };
        R_ImageRenderer.prototype.playNextMediaItem = function (runParams, error, context, callback) {
            var self = this;
            {
                if (self._htmlImage != null) {
                    try {
                        self._htmlImage.style.display = "block";
                    }
                    catch (e) {
                    }
                }
                if (callback != null) {
                    callback(context);
                    return;
                }
            }
        };
        R_ImageRenderer.prototype.onChangeContainerSize = function (prepareParams, error, context, callback) {
            if (prepareParams == null)
                return 1;
            if (this._htmlImage == null)
                return 1;
            if (this._htmlZoneDiv == null)
                return 1;
            var containerLeft = prepareParams.getRenderParams().getParamContainerPosSize().getContainerLeft();
            var containerTop = prepareParams.getRenderParams().getParamContainerPosSize().getContainerTop();
            var containerWidth = prepareParams.getRenderParams().getParamContainerPosSize().getContainerWidth();
            var containerHeight = prepareParams.getRenderParams().getParamContainerPosSize().getContainerHeight();
            var containerZOrder = prepareParams.getRenderParams().getParamContainerPosSize().getContainerZOrder();
            if (containerWidth == 0)
                return 1;
            if (containerHeight == 0)
                return 1;
            this._htmlZoneDiv.style.top = "" + containerTop;
            this._htmlZoneDiv.style.left = "" + containerLeft;
            this._htmlZoneDiv.style.width = "" + containerWidth;
            this._htmlZoneDiv.style.height = "" + containerHeight;
            this._htmlZoneDiv.style.zIndex = "" + containerZOrder;
            return this.onChangeMediaSizeOrDisplayType(prepareParams, error, context, callback);
        };
        R_ImageRenderer.prototype.onChangeMediaSizeOrDisplayType = function (prepareParams, error, context, callback) {
            if (prepareParams == null)
                return 1;
            if (this._htmlImage == null)
                return 1;
            if (this._htmlZoneDiv == null)
                return 1;
            var imgRealWidth = prepareParams.getRenderParams().getParamImage().getImageNaturalWidth();
            var imgRealHeight = prepareParams.getRenderParams().getParamImage().getImageNaturalHeight();
            if ((imgRealWidth == null) || (imgRealWidth == 0)) {
                imgRealWidth = this._htmlImage.naturalWidth;
                if ((imgRealWidth == null) || (imgRealWidth == 0))
                    return 1;
                prepareParams.getRenderParams().getParamImage().setImageNaturalWidth(imgRealWidth);
            }
            if ((imgRealHeight == null) || (imgRealHeight == 0)) {
                imgRealHeight = this._htmlImage.naturalHeight;
                if ((imgRealHeight == null) || (imgRealHeight == 0))
                    return 1;
                prepareParams.getRenderParams().getParamImage().setImageNaturalHeight(imgRealHeight);
            }
            var imgNewWidth = imgRealWidth;
            var imgNewHeight = imgRealHeight;
            var canvasWidth = this._htmlZoneDiv.offsetWidth;
            var canvasHeight = this._htmlZoneDiv.offsetHeight;
            var ratioX = 1;
            var ratioY = 1;
            if (canvasWidth > 0)
                ratioX = imgRealWidth / canvasWidth;
            if (canvasHeight > 0)
                ratioY = imgRealHeight / canvasHeight;
            var imgDisplayType = prepareParams.getRenderParams().getParamImage().getDisplayType();
            if (imgDisplayType == amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Center) {
                this._htmlImage.style.width = imgRealWidth + "px";
                this._htmlImage.style.height = imgRealHeight + "px";
                this._htmlImage.style.marginLeft = (canvasWidth - imgRealWidth) / 2 + "px";
                this._htmlImage.style.marginRight = (canvasWidth - imgRealWidth) / 2 + "px";
                this._htmlImage.style.marginTop = (canvasHeight - imgRealHeight) / 2 + "px";
                this._htmlImage.style.marginBottom = (canvasHeight - imgRealHeight) / 2 + "px";
                return 0;
            }
            if (imgDisplayType == amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Fill) {
                this._htmlImage.style.width = "";
                this._htmlImage.style.height = "";
                this._htmlImage.style.marginLeft = "0";
                this._htmlImage.style.marginRight = "0";
                this._htmlImage.style.marginTop = "0";
                this._htmlImage.style.marginBottom = "0";
                if (ratioX < ratioY) {
                    imgNewWidth = canvasWidth;
                    imgNewHeight = imgRealHeight * (imgNewWidth / imgRealWidth);
                    this._htmlImage.style.width = imgNewWidth + "px";
                    this._htmlImage.style.marginTop = (canvasHeight - imgNewHeight) / 2 + "px";
                    this._htmlImage.style.marginBottom = (canvasHeight - imgNewHeight) / 2 + "px";
                }
                else {
                    imgNewHeight = canvasHeight;
                    imgNewWidth = imgRealWidth * (imgNewHeight / imgRealHeight);
                    this._htmlImage.style.height = imgNewHeight + "px";
                    this._htmlImage.style.marginLeft = (canvasWidth - imgNewWidth) / 2 + "px";
                    this._htmlImage.style.marginRight = (canvasWidth - imgNewWidth) / 2 + "px";
                }
                return 0;
            }
            if (imgDisplayType == amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Fit) {
                this._htmlImage.style.width = "";
                this._htmlImage.style.height = "";
                this._htmlImage.style.marginLeft = "0";
                this._htmlImage.style.marginRight = "0";
                this._htmlImage.style.marginTop = "0";
                this._htmlImage.style.marginBottom = "0";
                if (ratioX > ratioY) {
                    imgNewWidth = canvasWidth;
                    imgNewHeight = imgRealHeight * (imgNewWidth / imgRealWidth);
                    this._htmlImage.style.width = imgNewWidth + "px";
                    this._htmlImage.style.marginTop = (canvasHeight - imgNewHeight) / 2 + "px";
                    this._htmlImage.style.marginBottom = (canvasHeight - imgNewHeight) / 2 + "px";
                }
                else {
                    imgNewHeight = canvasHeight;
                    imgNewWidth = imgRealWidth * (imgNewHeight / imgRealHeight);
                    this._htmlImage.style.height = imgNewHeight + "px";
                    this._htmlImage.style.marginLeft = (canvasWidth - imgNewWidth) / 2 + "px";
                    this._htmlImage.style.marginRight = (canvasWidth - imgNewWidth) / 2 + "px";
                }
                return 0;
            }
            if (imgDisplayType == amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Stretch) {
                this._htmlImage.style.width = canvasWidth + "px";
                this._htmlImage.style.height = canvasHeight + "px";
                this._htmlImage.style.marginLeft = "0";
                this._htmlImage.style.marginRight = "0";
                this._htmlImage.style.marginTop = "0";
                this._htmlImage.style.marginBottom = "0";
                return 0;
            }
            if (imgDisplayType == amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Normal) {
                this._htmlImage.style.width = imgRealWidth + "px";
                this._htmlImage.style.height = imgRealHeight + "px";
                this._htmlImage.style.marginLeft = "0";
                this._htmlImage.style.marginRight = "0";
                this._htmlImage.style.marginTop = "0";
                this._htmlImage.style.marginBottom = "0";
                return 0;
            }
            return 1;
        };
        R_ImageRenderer.prototype.stopCrtMediaItem = function (stopParams, error, context, callback) {
            var self = this;
            if (this._htmlImage != null) {
                try {
                    if (this._htmlImage != null) {
                    }
                }
                catch (e) {
                }
            }
            if (callback != null) {
                callback(context);
            }
        };
        R_ImageRenderer.prototype.destroyCrtMediaItem = function (stopParams, error, context, callback) {
            if (this._htmlImage != null) {
                try {
                    if (this._htmlImage != null) {
                        this._htmlImage.style.display = "none";
                        this._htmlImage.src = "";
                        this._htmlImage.removeAttribute('src');
                    }
                }
                catch (e) {
                }
            }
            if (callback != null) {
                callback(context);
            }
            return;
        };
        return R_ImageRenderer;
    }(rmRenderingServices.rm_renderingservices.R_RenderingService));
    rm_renderingservices.R_ImageRenderer = R_ImageRenderer;
})(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
//# sourceMappingURL=R_ImageRenderer.js.map