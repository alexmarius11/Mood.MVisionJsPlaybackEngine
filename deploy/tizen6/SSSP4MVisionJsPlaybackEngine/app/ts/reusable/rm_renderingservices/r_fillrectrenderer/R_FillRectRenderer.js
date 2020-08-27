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
define(["require", "exports", "../../../../../app/ts/reusable/rm_renderingservices/r_renderingservice/R_RenderingService", "../../../../../app/ts/reusable/rm_renderingservices/r_fillrectrenderer/IImpl_FillRectRenderer_R", "../../../../../app/ts/reusable/rm_renderingservices/r_fillrectrenderer/IImpl_FillRectRenderer_Config"], function (require, exports, rmRenderingServices, rmIFillRectRenderer, rmIFillRectRendererConfig) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_renderingservices;
    (function (rm_renderingservices) {
        var R_FillRectRenderer = /** @class */ (function (_super) {
            __extends(R_FillRectRenderer, _super);
            //----------- constructor 
            function R_FillRectRenderer(aFactoryDescription, aServiceContainer, aLogService, error) {
                var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
                _this._iFillRectRenderer = new rmIFillRectRenderer.rm_renderingservices.IImpl_FillRectRenderer_R(_this);
                _this._iFillRectRendererConfig = new rmIFillRectRendererConfig.rm_renderingservices.IImpl_FillRectRenderer_Config(_this);
                _this._aLogService = aLogService;
                _this._htmlZoneDiv = null;
                _this._htmlRectDiv = null;
                _this._isVisible = true;
                return _this;
            }
            //---------------------------
            R_FillRectRenderer.prototype.reset = function () {
                this._htmlZoneDiv = null;
                this._htmlRectDiv = null;
                this._isVisible = true;
            };
            //---------------------------------
            R_FillRectRenderer.prototype.setHtmlZoneDiv = function (htmlZoneDiv) {
                this._htmlZoneDiv = htmlZoneDiv;
            };
            //-------------------------------
            R_FillRectRenderer.prototype.getHtmlZoneDiv = function () {
                return this._htmlZoneDiv;
            };
            //-------------------------------
            R_FillRectRenderer.prototype.setHtmlRectDiv = function (htmlRectDiv) {
                this._htmlRectDiv = htmlRectDiv;
            };
            //------------------------------
            R_FillRectRenderer.prototype.getHtmlRectDiv = function () {
                return this._htmlRectDiv;
            };
            //----------------
            R_FillRectRenderer.prototype.prepareNextMediaItem = function (prepareParams, error, context, callback) {
                //var strImageUrl = prepareParams.getRenderParams().getParamFileInfo().getFullUrlName(); //this._owner._aUtilsService._iUtilsFiles.getFileUrl(storageName, folderName, fileName, this._startFolder, this._startUrlFolder);
                //var owner = this;
                // this._htmlImage.onload = function ()
                //{
                //owner.onChangeContainerSize( prepareParams, error, context, callback) ;
                //}
                //this._htmlImage.src = strImageUrl;
                //this.onChangeContainerSize( prepareParams, error, context, callback) ;
                //var rgb = "rgb("  +  prepareParams.getRenderParams().getParamBackground().getR() + ","  
                //                 +  prepareParams.getRenderParams().getParamBackground().getG() +  ","  
                //               +  prepareParams.getRenderParams().getParamBackground().getB()
                //      + ")"; 
                //"rgba(201, 76, 76, 0.3)";
                try {
                    this._isVisible = prepareParams.getRenderParams().isVisible();
                    if (this._htmlRectDiv != null)
                        this._htmlRectDiv.style.backgroundColor = prepareParams.getRenderParams().getParamFillRect().getRGBAString(); //"rgb(255,0,0)";
                    //prepareParams.getRenderParams().getParamBackground().getRGBAString();//"rgb(255,0,0)";
                    this.onChangeContainerSize(prepareParams, error, context, callback);
                }
                catch (e) {
                }
                if (callback != null) {
                    callback(context);
                    return;
                }
            };
            //-------------------
            R_FillRectRenderer.prototype.playNextMediaItem = function (runParams, error, context, callback) {
                if (this._isVisible) {
                    //this._htmlRectDiv.style.visibility   = "visible";
                    try {
                        if (this._htmlRectDiv != null)
                            this._htmlRectDiv.style.display = "block";
                    }
                    catch (e) {
                    }
                }
                if (callback != null) {
                    callback(context);
                    return;
                }
            };
            //-------------------------------------------
            R_FillRectRenderer.prototype.onChangeContainerSize = function (prepareParams, error, context, callback) {
                if (prepareParams == null)
                    return 1;
                if (this._htmlRectDiv == null)
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
                //this._htmlRectDiv.style.zIndex   = "" + containerZOrder;
                return this.onChangeMediaSizeOrDisplayType(prepareParams, error, context, callback);
            };
            //-----------------------------------
            R_FillRectRenderer.prototype.onChangeMediaSizeOrDisplayType = function (prepareParams, error, context, callback) {
                if (prepareParams == null)
                    return 1;
                if (this._htmlRectDiv == null)
                    return 1;
                if (this._htmlZoneDiv == null)
                    return 1;
                this._htmlRectDiv.style.top = "0px"; //this._htmlZoneDiv.style.top;
                this._htmlRectDiv.style.left = "0px"; //this._htmlZoneDiv.style.left;  
                this._htmlRectDiv.style.width = this._htmlZoneDiv.style.width;
                this._htmlRectDiv.style.height = this._htmlZoneDiv.style.height;
            };
            //---------------------
            R_FillRectRenderer.prototype.stopCrtMediaItem = function (stopParams, error, context, callback) {
                try {
                    if (this._htmlRectDiv != null) {
                        //this._htmlRectDiv.style.visibility   = "hidden";
                        this._htmlRectDiv.style.display = "none";
                    }
                }
                catch (e) {
                }
                if (callback != null) {
                    callback(context);
                }
                return;
            };
            //---------------------
            R_FillRectRenderer.prototype.destroyCrtMediaItem = function (stopParams, error, context, callback) {
                if (callback != null) {
                    callback(context);
                }
                return;
            };
            //------------------------------
            R_FillRectRenderer.prototype.setRGBA = function (R, G, B, A) {
                if (this._htmlRectDiv != null) {
                    this._htmlRectDiv.style.backgroundColor = "rgba(R,G,B,A)";
                    return 0;
                }
                return 1;
            };
            return R_FillRectRenderer;
        }(rmRenderingServices.rm_renderingservices.R_RenderingService));
        rm_renderingservices.R_FillRectRenderer = R_FillRectRenderer;
    })(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
});
//# sourceMappingURL=R_FillRectRenderer.js.map