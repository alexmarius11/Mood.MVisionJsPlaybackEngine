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
define(["require", "exports", "../../../../../app/ts/reusable/rm_renderingservices/r_renderingservice/R_RenderingService", "../../../../../app/ts/reusable/rm_renderingservices/r_htmltemplaterenderer/IImpl_HtmlTemplateRenderer_R", "../../../../../app/ts/reusable/rm_renderingservices/r_htmltemplaterenderer/IImpl_HtmlTemplateRenderer_Config"], function (require, exports, rmRenderingServices, rmIHtmlTemplateRenderer, rmIHtmlTemplateRendererConfig) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_renderingservices;
    (function (rm_renderingservices) {
        var R_HtmlTemplateRenderer = /** @class */ (function (_super) {
            __extends(R_HtmlTemplateRenderer, _super);
            function R_HtmlTemplateRenderer(aFactoryDescription, aServiceContainer, aLogService, error) {
                var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
                _this._iHtmlTemplateRenderer = new rmIHtmlTemplateRenderer.rm_renderingservices.IImpl_HtmlTemplateRenderer_R(_this);
                _this._iHtmlTemplateRendererConfig = new rmIHtmlTemplateRendererConfig.rm_renderingservices.IImpl_HtmlTemplateRenderer_Config(_this);
                _this._aLogService = aLogService;
                _this._htmlZoneDiv = null;
                _this._htmlIFrame = null;
                return _this;
            }
            //---------------------------
            R_HtmlTemplateRenderer.prototype.reset = function () {
                this._htmlZoneDiv = null;
                this._htmlIFrame = null;
            };
            //---------------------------------
            R_HtmlTemplateRenderer.prototype.setHtmlZoneDiv = function (htmlZoneDiv) {
                this._htmlZoneDiv = htmlZoneDiv;
            };
            //-------------------------------
            R_HtmlTemplateRenderer.prototype.getHtmlZoneDiv = function () {
                return this._htmlZoneDiv;
            };
            //-------------------------------
            R_HtmlTemplateRenderer.prototype.setHtmlIFrame = function (htmlIFrame) {
                this._htmlIFrame = htmlIFrame;
            };
            //------------------------------
            R_HtmlTemplateRenderer.prototype.getHtmlIFrame = function () {
                return this._htmlIFrame;
            };
            //----------------
            R_HtmlTemplateRenderer.prototype.prepareNextMediaItem = function (prepareParams, error, context, callback) {
                var strHtmlUrl = prepareParams.getRenderParams().getParamFileInfo().getFullUrlName(); //this._owner._aUtilsService._iUtilsFiles.getFileUrl(storageName, folderName, fileName, this._startFolder, this._startUrlFolder);
                var owner = this;
                owner.onChangeContainerSize(prepareParams, error, context, callback);
                this._htmlIFrame.onload = function () {
                    //owner._htmlIFrame.style.visibility   = "visible";
                    //owner._htmlIFrame.style.display      = "block";
                    if (callback != null) {
                        callback(context);
                        return;
                    }
                };
                this._htmlIFrame.src = strHtmlUrl;
                //this.onChangeContainerSize( prepareParams, error, context, callback) ;
            };
            //-------------------
            R_HtmlTemplateRenderer.prototype.playNextMediaItem = function (runParams, error, context, callback) {
                this._htmlIFrame.style.visibility = "visible";
                this._htmlIFrame.style.display = "block";
                if (callback != null) {
                    callback(context);
                    return;
                }
            };
            //-------------------------------------------
            R_HtmlTemplateRenderer.prototype.onChangeContainerSize = function (prepareParams, error, context, callback) {
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
                //this._htmlIFrame.style.zIndex   = "" + containerZOrder;
                return this.onChangeMediaSizeOrDisplayType(prepareParams, error, context, callback);
            };
            //-----------------------------------
            R_HtmlTemplateRenderer.prototype.onChangeMediaSizeOrDisplayType = function (prepareParams, error, context, callback) {
                if (prepareParams == null)
                    return 1;
                if (this._htmlIFrame == null)
                    return 1;
                if (this._htmlZoneDiv == null)
                    return 1;
                this._htmlIFrame.style.top = "0px"; //this._htmlZoneDiv.style.top;
                this._htmlIFrame.style.left = "0px"; //this._htmlZoneDiv.style.left;  
                this._htmlIFrame.style.width = this._htmlZoneDiv.style.width;
                this._htmlIFrame.style.height = this._htmlZoneDiv.style.height;
            };
            //---------------------
            R_HtmlTemplateRenderer.prototype.stopCrtMediaItem = function (stopParams, error, context, callback) {
                if (this._htmlIFrame != null) {
                    this._htmlIFrame.style.visibility = "hidden";
                    this._htmlIFrame.style.display = "none";
                }
                if (callback != null) {
                    callback(context);
                }
                return;
            };
            //---------------------
            R_HtmlTemplateRenderer.prototype.destroyCrtMediaItem = function (stopParams, error, context, callback) {
                if (this._htmlIFrame != null) {
                    this._htmlIFrame.src = "";
                }
                if (callback != null) {
                    callback(context);
                }
                return;
            };
            return R_HtmlTemplateRenderer;
        }(rmRenderingServices.rm_renderingservices.R_RenderingService));
        rm_renderingservices.R_HtmlTemplateRenderer = R_HtmlTemplateRenderer;
    })(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
});
//# sourceMappingURL=R_HtmlTemplateRenderer.js.map