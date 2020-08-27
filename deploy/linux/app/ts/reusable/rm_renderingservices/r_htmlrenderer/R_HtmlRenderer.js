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
var rmIHtmlRenderer = require("../../../../../app/ts/reusable/rm_renderingservices/r_htmlrenderer/IImpl_HtmlRenderer_R");
var rmIHtmlRendererConfig = require("../../../../../app/ts/reusable/rm_renderingservices/r_htmlrenderer/IImpl_HtmlRenderer_Config");
var rm_renderingservices;
(function (rm_renderingservices) {
    var R_HtmlRenderer = (function (_super) {
        __extends(R_HtmlRenderer, _super);
        function R_HtmlRenderer(aFactoryDescription, aServiceContainer, aLogService, error) {
            var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
            _this._iHtmlRenderer = new rmIHtmlRenderer.rm_renderingservices.IImpl_HtmlRenderer_R(_this);
            _this._iHtmlRendererConfig = new rmIHtmlRendererConfig.rm_renderingservices.IImpl_HtmlRenderer_Config(_this);
            _this._aLogService = aLogService;
            _this._htmlZoneDiv = null;
            _this._htmlIFrame = null;
            _this._debug = false;
            return _this;
        }
        R_HtmlRenderer.prototype.reset = function () {
            this._htmlZoneDiv = null;
            this._htmlIFrame = null;
        };
        R_HtmlRenderer.prototype.setHtmlZoneDiv = function (htmlZoneDiv) {
            this._htmlZoneDiv = htmlZoneDiv;
        };
        R_HtmlRenderer.prototype.getHtmlZoneDiv = function () {
            return this._htmlZoneDiv;
        };
        R_HtmlRenderer.prototype.setHtmlIFrame = function (htmlIFrame) {
            this._htmlIFrame = htmlIFrame;
        };
        R_HtmlRenderer.prototype.getHtmlIFrame = function () {
            return this._htmlIFrame;
        };
        R_HtmlRenderer.prototype.canAccessWebPage = function (url, context, callback) {
            var canAccessWebPage = false;
            var canDisplay = false;
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == this.HEADERS_RECEIVED) {
                    var xFrameOptions = xhttp.getResponseHeader("X-Frame-Options");
                    if (xFrameOptions != null) {
                        if ((xFrameOptions.toLowerCase() != "deny") && (xFrameOptions.toLowerCase() != "sameorigin"))
                            canDisplay = true;
                    }
                    else {
                        canDisplay = true;
                    }
                }
                if (this.readyState == 4 && this.status == 200) {
                    if (canDisplay)
                        canAccessWebPage = true;
                    if (callback != null) {
                        context.setBoolResult(canAccessWebPage);
                        callback(context);
                        return;
                    }
                }
                else {
                    if (this.readyState == 4 && this.status != 200) {
                        canAccessWebPage = false;
                        if (callback != null) {
                            context.setBoolResult(canAccessWebPage);
                            callback(context);
                            return;
                        }
                    }
                }
            };
            try {
                xhttp.open("GET", url + ((/\?/).test(url) ? "&" : "?") + (new Date()).getTime());
                xhttp.open("GET", url, true);
                xhttp.send(null);
            }
            catch (e) {
                canAccessWebPage = false;
                if (callback != null) {
                    context.setBoolResult(canAccessWebPage);
                    callback(context);
                    return;
                }
            }
        };
        R_HtmlRenderer.prototype.canPlayNextMediaItem = function (prepareParams, error, context, callback) {
            if (callback != null) {
                callback(context);
                return;
            }
            return;
            var strHtmlUrl = prepareParams.getRenderParams().getParamFileInfo().getFullUrlName();
            var ctx = this._aServiceLocator._iEntityCreation.createDefaultContext();
            var err = this._aServiceLocator._iEntityCreation.createDefaultError();
            var evt = this._aServiceLocator._iEntityCreation.createDefaultEvent(err);
            var callbackCanAcccessWebPage = function canAccessWebPage() {
                var res = ctx.getBoolResult();
                if (res == true) {
                    if (callback != null) {
                        context.setObjectResult(null);
                        return callback(context);
                    }
                }
                else {
                    context.setObjectResult(evt);
                    return callback(context);
                }
            };
            this.canAccessWebPage(strHtmlUrl, ctx, callbackCanAcccessWebPage);
            return;
        };
        R_HtmlRenderer.prototype.prepareNextMediaItem = function (prepareParams, error, context, callback) {
            var strHtmlUrl = prepareParams.getRenderParams().getParamFileInfo().getFullUrlName();
            var owner = this;
            try {
                this.onChangeContainerSize(prepareParams, error, context, callback);
                if (this._htmlIFrame != null) {
                    this._htmlIFrame.src = strHtmlUrl;
                }
            }
            catch (e) {
            }
            if (callback != null) {
                callback(context);
                return;
            }
        };
        R_HtmlRenderer.prototype.prepareNextMediaItem_prev = function (prepareParams, error, context, callback) {
            var strHtmlUrl = prepareParams.getRenderParams().getParamFileInfo().getFullUrlName();
            var owner = this;
            try {
                this.onChangeContainerSize(prepareParams, error, context, callback);
                if (this._htmlIFrame != null) {
                    this._htmlIFrame.src = strHtmlUrl;
                }
            }
            catch (e) {
            }
            if (callback != null) {
                callback(context);
                return;
            }
        };
        R_HtmlRenderer.prototype.playNextMediaItem = function (runParams, error, context, callback) {
            var self = this;
            {
                try {
                    if (self._htmlIFrame != null) {
                        self._htmlIFrame.style.display = "block";
                    }
                }
                catch (e) {
                }
                if (callback != null) {
                    callback(context);
                    return;
                }
            }
        };
        R_HtmlRenderer.prototype.setScrolls = function (prepareParams, error, context, callback) {
            if (this._htmlIFrame.src == "")
                return 1;
            if (prepareParams == null)
                return 1;
            if (this._htmlIFrame == null)
                return 1;
            if (this._htmlZoneDiv == null)
                return 1;
            var scrollLeft = prepareParams.getRenderParams().getParamWebPage().getScrollLeft();
            if (scrollLeft == null)
                scrollLeft = 0;
            if (typeof (scrollLeft) == "undefined")
                scrollLeft = 0;
            if (scrollLeft < 0)
                scrollLeft = 0;
            var scrollTop = prepareParams.getRenderParams().getParamWebPage().getScrollTop();
            if (scrollTop == null)
                scrollTop = 0;
            if (typeof (scrollTop) == "undefined")
                scrollTop = 0;
            if (scrollTop < 0)
                scrollTop = 0;
            this._htmlIFrame.scrollLeft = scrollLeft;
            this._htmlIFrame.scrollTop = scrollTop;
        };
        R_HtmlRenderer.prototype.onChangeContainerSize = function (prepareParams, error, context, callback) {
            if (prepareParams == null)
                return 1;
            if (this._htmlIFrame == null)
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
        R_HtmlRenderer.prototype.onChangeMediaSizeOrDisplayType = function (prepareParams, error, context, callback) {
            if (prepareParams == null)
                return 1;
            if (this._htmlIFrame == null)
                return 1;
            if (this._htmlZoneDiv == null)
                return 1;
            this._htmlIFrame.style.top = "0px";
            this._htmlIFrame.style.left = "0px";
            this._htmlIFrame.style.width = this._htmlZoneDiv.style.width;
            this._htmlIFrame.style.height = this._htmlZoneDiv.style.height;
        };
        R_HtmlRenderer.prototype.stopCrtMediaItem = function (stopParams, error, context, callback) {
            if (this._htmlIFrame != null) {
                try {
                }
                catch (e) {
                }
            }
            if (callback != null) {
                callback(context);
            }
            return;
        };
        R_HtmlRenderer.prototype.destroyCrtMediaItem = function (stopParams, error, context, callback) {
            if (this._htmlIFrame != null) {
                try {
                    if (this._htmlIFrame != null) {
                        this._htmlIFrame.style.display = "none";
                        this._htmlIFrame.src = "";
                        this._htmlIFrame.removeAttribute('src');
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
        return R_HtmlRenderer;
    }(rmRenderingServices.rm_renderingservices.R_RenderingService));
    rm_renderingservices.R_HtmlRenderer = R_HtmlRenderer;
})(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
//# sourceMappingURL=R_HtmlRenderer.js.map