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
define(["require", "exports", "../../../../../app/ts/reusable/rm_renderingservices/r_renderingservice/R_RenderingService", "../../../../../app/ts/reusable/rm_renderingservices/r_videorenderer/IImpl_VideoRenderer_R", "../../../../../app/ts/reusable/rm_renderingservices/r_videorenderer/IImpl_VideoRenderer_Config"], function (require, exports, rmRenderingServices, rmIVideoRenderer, rmIVideoRendererConfig) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_renderingservices;
    (function (rm_renderingservices) {
        var R_VideoRenderer = /** @class */ (function (_super) {
            __extends(R_VideoRenderer, _super);
            //----------- constructor 
            function R_VideoRenderer(aFactoryDescription, aServiceContainer, aLogService, error) {
                var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
                _this._iVideoRenderer = new rmIVideoRenderer.rm_renderingservices.IImpl_VideoRenderer_R(_this);
                _this._iVideoRendererConfig = new rmIVideoRendererConfig.rm_renderingservices.IImpl_VideoRenderer_Config(_this);
                _this._aLogService = aLogService;
                _this._htmlZoneDiv = null;
                _this._htmlVideo = null;
                return _this;
            }
            //---------------------------
            R_VideoRenderer.prototype.reset = function () {
                this._htmlZoneDiv = null;
                this._htmlVideo = null;
            };
            //---------------------------------
            R_VideoRenderer.prototype.setHtmlZoneDiv = function (htmlZoneDiv) {
                this._htmlZoneDiv = htmlZoneDiv;
            };
            //-------------------------------
            R_VideoRenderer.prototype.getHtmlZoneDiv = function () {
                return this._htmlZoneDiv;
            };
            //-------------------------------
            R_VideoRenderer.prototype.setHtmlVideo = function (htmlVideo) {
                this._htmlVideo = htmlVideo;
            };
            //------------------------------
            R_VideoRenderer.prototype.getHtmlVideo = function () {
                return this._htmlVideo;
            };
            //----------------
            R_VideoRenderer.prototype.prepareNextMediaItem = function (prepareParams, error, context, callback) {
                var strVideoUrl = prepareParams.getRenderParams().getParamFileInfo().getFullUrlName(); //this._owner._aUtilsService._iUtilsFiles.getFileUrl(storageName, folderName, fileName, this._startFolder, this._startUrlFolder);
                var owner = this;
                this._htmlVideo.onloadeddata = function () {
                    if (owner._htmlVideo != null) {
                        try {
                            //owner._htmlVideo.muted = true;
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
                /*
                this._htmlVideo.onplay = function ()
                {
                  if (owner._htmlVideo != null)
                  {
                    try{
                    }catch(e)
                    {
                    }
                  }
                  if (callback != null)
                  {
                    callback(context);
                    return;
                  }
                  return;
                }*/
                //---------- start the video
                if (this._htmlVideo != null) {
                    try {
                        this._htmlVideo.src = strVideoUrl;
                        //owner._htmlVideo.currentTime = 5;
                        //this._htmlVideo.load();
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
                //this.onChangeContainerSize( prepareParams, error, context, callback) ;
            };
            //-------------------
            R_VideoRenderer.prototype.playNextMediaItem = function (runParams, error, context, callback) {
                var self = this;
                //setTimeout( function() 
                {
                    if (self._htmlVideo != null) {
                        try {
                            //this._htmlVideo.play();
                            //self._htmlVideo.pause();
                            //self._htmlVideo.currentTime = 0;
                            //self._htmlVideo.play();
                            //--
                            //self._htmlVideo.parentElement.style.display = "block";    
                            self._htmlVideo.style.display = "block";
                            //--
                            //var red = "rgb(255, 0, 0)"; 
                            //this._htmlVideo.style.backgroundColor = red; 
                            //this._htmlVideo.style.visibility   = "visible";
                        }
                        catch (e) {
                        }
                    }
                    if (callback != null) {
                        callback(context);
                        return;
                    }
                }
                //, 
                //5000)
                //;
            };
            //The object-fit property can have the following values:
            //fill - This is default. The replaced content is sized to fill the element's content box. If necessary, the object will be stretched or squished to fit
            //contain - The replaced content is scaled to maintain its aspect ratio while fitting within the element's content box
            //cover - The replaced content is sized to maintain its aspect ratio while filling the element's entire content box. The object will be clipped to fit
            //none - The replaced content is not resized
            //scale-down - The content is sized as if none or contain were specified (would result in a smaller concrete object size)
            //-------------------------------------------
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
            //-------------------------------------------
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
            //-------------------------------------------
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
                //this._htmlVideo.style.zIndex   = "" + containerZOrder;
                return this.onChangeMediaSizeOrDisplayType(prepareParams, error, context, callback);
            };
            //-----------------------------------
            R_VideoRenderer.prototype.onChangeMediaSizeOrDisplayType = function (prepareParams, error, context, callback) {
                if (prepareParams == null)
                    return 1;
                if (this._htmlVideo == null)
                    return 1;
                if (this._htmlZoneDiv == null)
                    return 1;
                //this._htmlVideo.parentElement.style.top    = "0px";//this._htmlZoneDiv.style.top;
                //this._htmlVideo.parentElement.style.left   = "0px";//this._htmlZoneDiv.style.left;  
                //this._htmlVideo.parentElement.style.width  = this._htmlZoneDiv.style.width;
                //this._htmlVideo.parentElement.style.height = this._htmlZoneDiv.style.height;
                this._htmlVideo.style.top = "0px"; //this._htmlZoneDiv.style.top;
                this._htmlVideo.style.left = "0px"; //this._htmlZoneDiv.style.left;  
                this._htmlVideo.style.width = this._htmlZoneDiv.style.width;
                this._htmlVideo.style.height = this._htmlZoneDiv.style.height;
            };
            //---------------------
            R_VideoRenderer.prototype.stopCrtMediaItem = function (stopParams, error, context, callback) {
                if (this._htmlVideo != null) {
                    try {
                        //this._htmlVideo.style.visibility   = "hidden";
                        //var red = "rgb(255, 0, 0)"; 
                        //this._htmlVideo.parentElement.style.backgroundColor = red;       
                        //this._htmlVideo.style.display      = "none";        
                        //this._htmlVideo.parentElement.style.display = "none";    
                    }
                    catch (e) {
                    }
                    try {
                        if (this._htmlVideo != null) {
                            this._htmlVideo.pause();
                            //this._htmlVideo.style.backgroundColor = "black";
                            //this._htmlVideo.src="file:///opt/media/USBDriveA1/moodmedia/project/screen_saver/videoblack.mp4";
                            //this._htmlVideo.src = "about:blank";
                            //this._htmlVideo.removeAttribute("src");
                            //this._htmlVideo.load();
                        }
                    }
                    catch (e) {
                    }
                }
                /* new
                try{
                  if (this._htmlVideo != null)
                  {
                    this._htmlVideo.pause();
                  }
                 }catch(e)
                 {
                 }*/
                if (callback != null) {
                    callback(context);
                }
                return;
            };
            //---------------------
            R_VideoRenderer.prototype.destroyCrtMediaItem = function (stopParams, error, context, callback) {
                //this._htmlVideo.src = "";
                //-- new
                if (this._htmlVideo != null) {
                    try {
                        if (this._htmlVideo != null) {
                            //this._htmlVideo.pause();
                            //this._htmlVideo.style.visibility   = "hidden";
                            //this._htmlVideo.style.display      = 'none';
                            //---- new test
                            this._htmlVideo.style.display = "none";
                            //this._htmlVideo.parentElement.style.display = "none";    
                            //this._htmlVideo.currentTime = 0.0;
                            //var startX ;
                            //var startY ;
                            //for (var i = 0; i < this._htmlVideo.buffered.length; i++) 
                            //{
                            //startX = this._htmlVideo.buffered.start(0);
                            //startY = this._htmlVideo.buffered.end(0);
                            //}
                            this._htmlVideo.src = "";
                            //this._htmlVideo.src = "about:blank";
                            this._htmlVideo.removeAttribute("src");
                            this._htmlVideo.load();
                            //this._htmlVideo.parentElement.style.top    = "0px";//this._htmlZoneDiv.style.top;
                            //this._htmlVideo.parentElement.style.left   = "0px";//this._htmlZoneDiv.style.left;  
                            //this._htmlVideo.parentElement.style.width  = "1px";
                            //this._htmlVideo.parentElement.style.height = "1px";
                            //this._htmlVideo.style.top    = "0px";//this._htmlZoneDiv.style.top;
                            //this._htmlVideo.style.left   = "0px";//this._htmlZoneDiv.style.left;  
                            //this._htmlVideo.style.width  = "1px";
                            //this._htmlVideo.style.height = "1px";
                            //this._htmlVideo.currentTime = 0.0;
                            //for (var i = 0; i < this._htmlVideo.buffered.length; i++) 
                            //{
                            //startX = this._htmlVideo.buffered.start(0);
                            //startY = this._htmlVideo.buffered.end(0);
                            //}
                            //this._htmlVideo.style.backgroundColor = "transparent";
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
});
//# sourceMappingURL=R_VideoRenderer.js.map