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
var rmIVideoStreamRenderer = require("../../../../../app/ts/reusable/rm_renderingservices/r_videostreamrenderer/IImpl_VideoStreamRenderer_R");
var rmIVideoStreamRendererConfig = require("../../../../../app/ts/reusable/rm_renderingservices/r_videostreamrenderer/IImpl_VideoStreamRenderer_Config");
var rm_renderingservices;
(function (rm_renderingservices) {
    var R_VideoStreamRenderer = (function (_super) {
        __extends(R_VideoStreamRenderer, _super);
        function R_VideoStreamRenderer(aFactoryDescription, aServiceContainer, aLogService, error) {
            var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
            _this._iVideoStreamRenderer = new rmIVideoStreamRenderer.rm_renderingservices.IImpl_VideoStreamRenderer_R(_this);
            _this._iVideoStreamRendererConfig = new rmIVideoStreamRendererConfig.rm_renderingservices.IImpl_VideoStreamRenderer_Config(_this);
            _this._aLogService = aLogService;
            _this._htmlZoneDiv = null;
            _this._htmlVideoStream = null;
            return _this;
        }
        R_VideoStreamRenderer.prototype.reset = function () {
            this._htmlZoneDiv = null;
            this._htmlVideoStream = null;
        };
        R_VideoStreamRenderer.prototype.setHtmlZoneDiv = function (htmlZoneDiv) {
            this._htmlZoneDiv = htmlZoneDiv;
        };
        R_VideoStreamRenderer.prototype.getHtmlZoneDiv = function () {
            return this._htmlZoneDiv;
        };
        R_VideoStreamRenderer.prototype.setHtmlVideoStream = function (htmlVideoStream) {
            this._htmlVideoStream = htmlVideoStream;
        };
        R_VideoStreamRenderer.prototype.getHtmlVideoStream = function () {
            return this._htmlVideoStream;
        };
        R_VideoStreamRenderer.prototype.prepareNextMediaItem = function (prepareParams, error, context, callback) {
            var strVideoUrl = prepareParams.getRenderParams().getParamFileInfo().getFullUrlName();
            var owner = this;
            this._htmlVideoStream.onloadeddata = function () {
                owner._htmlVideoStream.muted = true;
                owner.onChangeContainerSize(prepareParams, error, context, callback);
                if (callback != null) {
                    callback(context);
                    return;
                }
            };
            this._htmlVideoStream.src = strVideoUrl;
        };
        R_VideoStreamRenderer.prototype.playNextMediaItem = function (runParams, error, context, callback) {
            this._htmlVideoStream.play();
            this._htmlVideoStream.style.visibility = "visible";
            this._htmlVideoStream.style.display = "block";
            if (callback != null) {
                callback(context);
                return;
            }
        };
        R_VideoStreamRenderer.prototype.onChangeContainerSize = function (prepareParams, error, context, callback) {
            if (prepareParams == null)
                return 1;
            if (this._htmlVideoStream == null)
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
        R_VideoStreamRenderer.prototype.onChangeMediaSizeOrDisplayType = function (prepareParams, error, context, callback) {
            if (prepareParams == null)
                return 1;
            if (this._htmlVideoStream == null)
                return 1;
            if (this._htmlZoneDiv == null)
                return 1;
            this._htmlVideoStream.style.top = "0px";
            this._htmlVideoStream.style.left = "0px";
            this._htmlVideoStream.style.width = this._htmlZoneDiv.style.width;
            this._htmlVideoStream.style.height = this._htmlZoneDiv.style.height;
        };
        R_VideoStreamRenderer.prototype.stopCrtMediaItem = function (stopParams, error, context, callback) {
            if (this._htmlVideoStream != null) {
                this._htmlVideoStream.style.visibility = "hidden";
                this._htmlVideoStream.style.display = "none";
            }
            if (callback != null) {
                callback(context);
            }
            return;
        };
        R_VideoStreamRenderer.prototype.destroyCrtMediaItem = function (stopParams, error, context, callback) {
            if (this._htmlVideoStream != null) {
                this._htmlVideoStream.src = "";
            }
            if (callback != null) {
                callback(context);
            }
            return;
        };
        return R_VideoStreamRenderer;
    }(rmRenderingServices.rm_renderingservices.R_RenderingService));
    rm_renderingservices.R_VideoStreamRenderer = R_VideoStreamRenderer;
})(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
//# sourceMappingURL=R_VideoStreamRenderer.js.map