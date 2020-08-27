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
var rmIVideoRenderer = require("../../../../../app/ts/reusable/rm_renderingservices/r_videorenderer/IImpl_VideoRenderer_R");
var rmIVideoRendererConfig = require("../../../../../app/ts/reusable/rm_renderingservices/r_videorenderer/IImpl_VideoRenderer_Config");
var rm_renderingservices;
(function (rm_renderingservices) {
    var R_VideoRenderer = (function (_super) {
        __extends(R_VideoRenderer, _super);
        function R_VideoRenderer(aFactoryDescription, aServiceContainer, aLogService, error) {
            var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
            _this._iVideoRenderer = new rmIVideoRenderer.rm_renderingservices.IImpl_VideoRenderer_R(_this);
            _this._iVideoRendererConfig = new rmIVideoRendererConfig.rm_renderingservices.IImpl_VideoRenderer_Config(_this);
            _this._aLogService = aLogService;
            _this._htmlZoneDiv = null;
            _this._htmlVideo = null;
            return _this;
        }
        R_VideoRenderer.prototype.reset = function () {
            this._htmlZoneDiv = null;
            this._htmlVideo = null;
        };
        R_VideoRenderer.prototype.setHtmlZoneDiv = function (htmlZoneDiv) {
            this._htmlZoneDiv = htmlZoneDiv;
        };
        R_VideoRenderer.prototype.getHtmlZoneDiv = function () {
            return this._htmlZoneDiv;
        };
        R_VideoRenderer.prototype.setHtmlVideo = function (htmlVideo) {
            this._htmlVideo = htmlVideo;
        };
        R_VideoRenderer.prototype.getHtmlVideo = function () {
            return this._htmlVideo;
        };
        R_VideoRenderer.prototype.prepareNextMediaItem = function (prepareParams, error, context, callback) {
            var strVideoUrl = prepareParams.getRenderParams().getParamFileInfo().getFullUrlName();
            var owner = this;
            this._htmlVideo.onloadeddata = function () {
                if (owner._htmlVideo != null) {
                    try {
                        owner.onChangeContainerSize(prepareParams, error, context, callback);
                        owner.setAspectRatio(prepareParams, error, context, callback);
                        owner.setVolume(prepareParams, error, context, callback);
                        owner._htmlVideo.play();
                    }
                    catch (e) {
                    }
                }
                if (callback != null) {
                    callback(context);
                    return;
                }
                return;
            };
            if (this._htmlVideo != null) {
                try {
                    this._htmlVideo.src = strVideoUrl;
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
        R_VideoRenderer.prototype.playNextMediaItem = function (runParams, error, context, callback) {
            var self = this;
            {
                if (self._htmlVideo != null) {
                    try {
                        self._htmlVideo.style.display = "block";
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
        R_VideoRenderer.prototype.setAspectRatio = function (prepareParams, error, context, callback) {
            if (prepareParams == null)
                return 1;
            if (this._htmlVideo == null)
                return 1;
            if (this._htmlZoneDiv == null)
                return 1;
            var aspectRatio = prepareParams.getRenderParams().getParamVideo().getKeepAspectRatio();
            if (aspectRatio == true)
                this._htmlVideo.style.objectFit = "contain";
            else
                this._htmlVideo.style.objectFit = "fill";
        };
        R_VideoRenderer.prototype.setVolume = function (prepareParams, error, context, callback) {
            if (prepareParams == null)
                return 1;
            if (this._htmlVideo == null)
                return 1;
            if (this._htmlZoneDiv == null)
                return 1;
            var volume = prepareParams.getRenderParams().getParamVideo().getVideoAudioVolume();
            var muted = prepareParams.getRenderParams().getParamVideo().getVideoMuteAudio();
            this._htmlVideo.volume = volume / 100.00;
            this._htmlVideo.muted = muted;
        };
        R_VideoRenderer.prototype.onChangeContainerSize = function (prepareParams, error, context, callback) {
            if (prepareParams == null)
                return 1;
            if (this._htmlVideo == null)
                return 1;
            if (this._htmlZoneDiv == null)
                return 1;
            var containerLeft = prepareParams.getRenderParams().getParamContainerAdjustedPosSize().getContainerLeft();
            var containerTop = prepareParams.getRenderParams().getParamContainerAdjustedPosSize().getContainerTop();
            var containerWidth = prepareParams.getRenderParams().getParamContainerAdjustedPosSize().getContainerWidth();
            var containerHeight = prepareParams.getRenderParams().getParamContainerAdjustedPosSize().getContainerHeight();
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
        R_VideoRenderer.prototype.onChangeMediaSizeOrDisplayType = function (prepareParams, error, context, callback) {
            if (prepareParams == null)
                return 1;
            if (this._htmlVideo == null)
                return 1;
            if (this._htmlZoneDiv == null)
                return 1;
            this._htmlVideo.style.top = "0px";
            this._htmlVideo.style.left = "0px";
            this._htmlVideo.style.width = this._htmlZoneDiv.style.width;
            this._htmlVideo.style.height = this._htmlZoneDiv.style.height;
        };
        R_VideoRenderer.prototype.stopCrtMediaItem = function (stopParams, error, context, callback) {
            if (this._htmlVideo != null) {
                try {
                }
                catch (e) {
                }
                try {
                    if (this._htmlVideo != null) {
                        this._htmlVideo.pause();
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
        R_VideoRenderer.prototype.destroyCrtMediaItem = function (stopParams, error, context, callback) {
            if (this._htmlVideo != null) {
                try {
                    if (this._htmlVideo != null) {
                        this._htmlVideo.style.display = "none";
                        this._htmlVideo.src = "";
                        this._htmlVideo.removeAttribute("src");
                        this._htmlVideo.load();
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
        return R_VideoRenderer;
    }(rmRenderingServices.rm_renderingservices.R_RenderingService));
    rm_renderingservices.R_VideoRenderer = R_VideoRenderer;
})(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
//# sourceMappingURL=R_VideoRenderer.js.map