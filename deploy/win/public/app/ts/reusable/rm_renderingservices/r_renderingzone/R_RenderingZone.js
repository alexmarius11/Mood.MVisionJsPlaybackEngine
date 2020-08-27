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
define(["require", "exports", "../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_MediaTypeEnum", "../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_MediaItemStatus", "../../../../../app/ts/reusable/rm_renderingservices/r_renderingservice/R_RenderingService", "../../../../../app/ts/reusable/rm_renderingservices/r_renderingzone/IImpl_RenderingZone_R", "../../../../../app/ts/reusable/rm_renderingservices/r_renderingzone/IImpl_RenderingZone_Config"], function (require, exports, amMediaTypeEnum, amMediaItemStatus, rmRenderingServices, rmIRenderingZone, rmIRenderingZoneConfig) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_renderingservices;
    (function (rm_renderingservices) {
        var R_RenderingZone = /** @class */ (function (_super) {
            __extends(R_RenderingZone, _super);
            //----------- composants 
            //_aLogService : amTransversalServices4.am_transversalservices.A_LogService; 
            //----------- constructor 
            function R_RenderingZone(aFactoryDescription, aServiceContainer, aLogService, error) {
                var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
                _this._iRenderingZone = new rmIRenderingZone.rm_renderingservices.IImpl_RenderingZone_R(_this);
                _this._iRenderingZoneConfig = new rmIRenderingZoneConfig.rm_renderingservices.IImpl_RenderingZone_Config(_this);
                _this._aLogService = aLogService;
                _this._isFree = true;
                _this._imageRenderers = new Array(2);
                _this._imageRenderers[0] = null;
                _this._imageRenderers[1] = null;
                _this._videosRenderers = new Array(2);
                _this._videosRenderers[0] = null;
                _this._videosRenderers[1] = null;
                _this._videoStreamRenderers = new Array(2);
                _this._videoStreamRenderers[0] = null;
                _this._videoStreamRenderers[1] = null;
                _this._htmlPageRenderers = new Array(2);
                _this._htmlPageRenderers[0] = null;
                _this._htmlPageRenderers[1] = null;
                _this._htmlPageTemplateRenderers = new Array(2);
                _this._htmlPageTemplateRenderers[0] = null;
                _this._htmlPageTemplateRenderers[1] = null;
                _this._fillRectRenderers = new Array(2);
                _this._fillRectRenderers[0] = null;
                _this._fillRectRenderers[1] = null;
                _this._flashRenderers = new Array(2);
                _this._flashRenderers[0] = null;
                _this._flashRenderers[1] = null;
                _this._screenSaverRenderers = new Array(2);
                _this._screenSaverRenderers[0] = null;
                _this._screenSaverRenderers[1] = null;
                _this._tvHdmiPassThroughSrvs = new Array(2);
                _this._tvHdmiPassThroughSrvs[0] = null;
                _this._tvHdmiPassThroughSrvs[1] = null;
                _this._prepareParams = new Array(2);
                _this._prepareParams[0] = null;
                _this._prepareParams[1] = null;
                _this._runParams = new Array(2);
                _this._runParams[0] = null;
                _this._runParams[1] = null;
                _this._stopParams = new Array(2);
                _this._stopParams[0] = null;
                _this._stopParams[1] = null;
                _this._mediaItemStatus = new Array(2);
                _this._mediaItemStatus[0] = amMediaItemStatus.am_renderingservices.AE_RenderParams_MediaItemStatus.MediaItemStatus_None;
                _this._mediaItemStatus[1] = amMediaItemStatus.am_renderingservices.AE_RenderParams_MediaItemStatus.MediaItemStatus_None;
                _this._iCrtIndex = 0;
                _this._aScreenSaverConfig = null;
                return _this;
            }
            //-----------------------
            R_RenderingZone.prototype.reset = function () {
                _super.prototype.reset.call(this);
                this._isFree = true;
                this._iCrtIndex = 0;
                //this._aScreenSaverConfig = null;
                /*
                this._imageRenderers[0] = null;
                this._imageRenderers[1] = null;
          
                this._videosRenderers[0] = null;
                this._videosRenderers[1] = null;
          
                this._videoStreamRenderers[0] = null;
                this._videoStreamRenderers[1] = null;
          
                this._htmlPageRenderers[0] = null;
                this._htmlPageRenderers[1] = null;
          
                this._htmlPageTemplateRenderers[0] = null;
                this._htmlPageTemplateRenderers[1] = null;
               
                this._fillRectRenderers[0] = null;
                this._fillRectRenderers[1] = null;
               
                this._flashRenderers[0] = null;
                this._flashRenderers[1] = null;
          
                this._screenSaverRenderers[0] = null;
                this._screenSaverRenderers[1] = null;
          
                this._tvHdmiPassThroughSrvs[0] = null;
                this._tvHdmiPassThroughSrvs[1] = null;
                */
            };
            //------------------------------
            R_RenderingZone.prototype.injectDependencies = function (aSrvContainer, aSrvLocator, aSrvLog, error) {
                _super.prototype.injectDependencies.call(this, aSrvContainer, aSrvLocator, aSrvLog, error);
                //----------
                this._htmlZone = this._aServiceLocator._iEntityCreation.createDefaultHtmlZone(error);
                this._htmlZone.injectDependencies(this._aServiceContainer, this._aServiceLocator, this._aLogService, error);
                //----------
                //----------
                this._imageRenderers[0] = this._aServiceLocator._iServiceCreation.createDefaultService_ImageRenderer(this._aServiceContainer, this._aServiceLocator, this._aLogService, 0, error);
                this._imageRenderers[0]._iService.injectDependencies(this._aServiceContainer, this._aServiceLocator, this._aLogService, error);
                //---
                this._imageRenderers[1] = this._aServiceLocator._iServiceCreation.createDefaultService_ImageRenderer(this._aServiceContainer, this._aServiceLocator, this._aLogService, 1, error);
                this._imageRenderers[1]._iService.injectDependencies(this._aServiceContainer, this._aServiceLocator, this._aLogService, error);
                //----------
                //----------
                this._videosRenderers[0] = this._aServiceLocator._iServiceCreation.createDefaultService_VideoRenderer(this._aServiceContainer, this._aServiceLocator, this._aLogService, 0, error);
                this._videosRenderers[0]._iService.injectDependencies(this._aServiceContainer, this._aServiceLocator, this._aLogService, error);
                //---
                this._videosRenderers[1] = this._aServiceLocator._iServiceCreation.createDefaultService_VideoRenderer(this._aServiceContainer, this._aServiceLocator, this._aLogService, 1, error);
                this._videosRenderers[1]._iService.injectDependencies(this._aServiceContainer, this._aServiceLocator, this._aLogService, error);
                //----------
                //----------
                this._videoStreamRenderers[0] = this._aServiceLocator._iServiceCreation.createDefaultService_VideoStreamRenderer(this._aServiceContainer, this._aServiceLocator, this._aLogService, 0, error);
                this._videoStreamRenderers[0]._iService.injectDependencies(this._aServiceContainer, this._aServiceLocator, this._aLogService, error);
                //---
                this._videoStreamRenderers[1] = this._aServiceLocator._iServiceCreation.createDefaultService_VideoStreamRenderer(this._aServiceContainer, this._aServiceLocator, this._aLogService, 1, error);
                this._videoStreamRenderers[1]._iService.injectDependencies(this._aServiceContainer, this._aServiceLocator, this._aLogService, error);
                //----------
                //----------
                this._htmlPageRenderers[0] = this._aServiceLocator._iServiceCreation.createDefaultService_HtmlRenderer(this._aServiceContainer, this._aServiceLocator, this._aLogService, 0, error);
                this._htmlPageRenderers[0]._iService.injectDependencies(this._aServiceContainer, this._aServiceLocator, this._aLogService, error);
                //---
                this._htmlPageRenderers[1] = this._aServiceLocator._iServiceCreation.createDefaultService_HtmlRenderer(this._aServiceContainer, this._aServiceLocator, this._aLogService, 1, error);
                this._htmlPageRenderers[1]._iService.injectDependencies(this._aServiceContainer, this._aServiceLocator, this._aLogService, error);
                //----------
                //----------
                this._htmlPageTemplateRenderers[0] = this._aServiceLocator._iServiceCreation.createDefaultService_HtmlTemplateRenderer(this._aServiceContainer, this._aServiceLocator, this._aLogService, 0, error);
                this._htmlPageTemplateRenderers[0]._iService.injectDependencies(this._aServiceContainer, this._aServiceLocator, this._aLogService, error);
                //---
                this._htmlPageTemplateRenderers[1] = this._aServiceLocator._iServiceCreation.createDefaultService_HtmlTemplateRenderer(this._aServiceContainer, this._aServiceLocator, this._aLogService, 1, error);
                this._htmlPageTemplateRenderers[1]._iService.injectDependencies(this._aServiceContainer, this._aServiceLocator, this._aLogService, error);
                //----------
                //----------
                this._fillRectRenderers[0] = this._aServiceLocator._iServiceCreation.createDefaultService_FillRectRenderer(this._aServiceContainer, this._aServiceLocator, this._aLogService, 0, error);
                this._fillRectRenderers[0]._iService.injectDependencies(this._aServiceContainer, this._aServiceLocator, this._aLogService, error);
                //---
                this._fillRectRenderers[1] = this._aServiceLocator._iServiceCreation.createDefaultService_FillRectRenderer(this._aServiceContainer, this._aServiceLocator, this._aLogService, 1, error);
                this._fillRectRenderers[1]._iService.injectDependencies(this._aServiceContainer, this._aServiceLocator, this._aLogService, error);
                //----------
                //----------
                this._flashRenderers[0] = this._aServiceLocator._iServiceCreation.createDefaultService_FlashRenderer(this._aServiceContainer, this._aServiceLocator, this._aLogService, 0, error);
                this._flashRenderers[0]._iService.injectDependencies(this._aServiceContainer, this._aServiceLocator, this._aLogService, error);
                //---
                this._flashRenderers[1] = this._aServiceLocator._iServiceCreation.createDefaultService_FlashRenderer(this._aServiceContainer, this._aServiceLocator, this._aLogService, 1, error);
                this._flashRenderers[1]._iService.injectDependencies(this._aServiceContainer, this._aServiceLocator, this._aLogService, error);
                //----------
                //----------
                this._screenSaverRenderers[0] = this._aServiceLocator._iServiceCreation.createDefaultService_ScreenSaverRenderer(this._aServiceContainer, this._aServiceLocator, this._aLogService, 0, error);
                this._screenSaverRenderers[0]._iService.injectDependencies(this._aServiceContainer, this._aServiceLocator, this._aLogService, error);
                //---
                this._screenSaverRenderers[1] = this._aServiceLocator._iServiceCreation.createDefaultService_ScreenSaverRenderer(this._aServiceContainer, this._aServiceLocator, this._aLogService, 1, error);
                this._screenSaverRenderers[1]._iService.injectDependencies(this._aServiceContainer, this._aServiceLocator, this._aLogService, error);
                //----------
                //----------
                this._tvHdmiPassThroughSrvs[0] = this._aServiceLocator._iServiceCreation.createDefaultService_TvHdmiPassThroughSrv(this._aServiceContainer, this._aServiceLocator, this._aLogService, 0, error);
                this._tvHdmiPassThroughSrvs[0]._iService.injectDependencies(this._aServiceContainer, this._aServiceLocator, this._aLogService, error);
                //---
                this._tvHdmiPassThroughSrvs[1] = this._aServiceLocator._iServiceCreation.createDefaultService_TvHdmiPassThroughSrv(this._aServiceContainer, this._aServiceLocator, this._aLogService, 1, error);
                this._tvHdmiPassThroughSrvs[1]._iService.injectDependencies(this._aServiceContainer, this._aServiceLocator, this._aLogService, error);
                //----------
                return 0;
            };
            //---------------------
            // config 
            //----------------------
            //-----------------------------------
            R_RenderingZone.prototype.setScreenSaverConfig = function (aScreenSaverConfig) {
                this._aScreenSaverConfig = aScreenSaverConfig;
            };
            //-----------------------------------
            R_RenderingZone.prototype.getScreenSaverConfig = function () {
                return this._aScreenSaverConfig;
            };
            //---------------------------------
            R_RenderingZone.prototype.setZoneId = function (zoneId) {
                this._zoneId = zoneId;
            };
            //---------------------------------
            R_RenderingZone.prototype.getZoneId = function () {
                return this._zoneId;
            };
            //---------------------------------
            R_RenderingZone.prototype.setHtmlZoneId = function (htmlZoneId) {
                this._htmlZoneId = htmlZoneId;
                var divZoneId;
                if (this._htmlZoneId < 10)
                    divZoneId = "z0" + this._htmlZoneId;
                else
                    divZoneId = "z" + this._htmlZoneId;
                this._htmlZone.initHtml(divZoneId, null); //, error);//to do
            };
            //---------------------------------
            R_RenderingZone.prototype.getHtmlZoneId = function () {
                return this._htmlZoneId;
            };
            //---------------------------------
            R_RenderingZone.prototype.setHtmlZone = function (htmlZone) {
                this._htmlZone = htmlZone;
            };
            //---------------------------------
            R_RenderingZone.prototype.getHtmlZone = function () {
                return this._htmlZone;
            };
            //---------------------------------
            R_RenderingZone.prototype.setImageRenderer = function (idx, imageRenderer) {
                this._imageRenderers[idx] = imageRenderer;
            };
            //---------------------------------
            R_RenderingZone.prototype.getImageRenderer = function (idx) {
                return this._imageRenderers[idx];
            };
            //---------------------------------
            R_RenderingZone.prototype.setVideoRenderer = function (idx, videoRenderer) {
                this._videosRenderers[idx] = videoRenderer;
            };
            //---------------------------------
            R_RenderingZone.prototype.getVideoRenderer = function (idx) {
                return this._videosRenderers[idx];
            };
            //---------------------------------
            R_RenderingZone.prototype.setVideoStreamRenderer = function (idx, videoStreamRenderer) {
                this._videoStreamRenderers[idx] = videoStreamRenderer;
            };
            //---------------------------------
            R_RenderingZone.prototype.getVideoStreamRenderer = function (idx) {
                return this._videoStreamRenderers[idx];
            };
            //---------------------------------
            R_RenderingZone.prototype.setHtmlPageRenderer = function (idx, htmlPageRenderer) {
                this._htmlPageRenderers[idx] = htmlPageRenderer;
            };
            //---------------------------------
            R_RenderingZone.prototype.getHtmlPageRenderer = function (idx) {
                return this._htmlPageRenderers[idx];
            };
            //---------------------------------
            R_RenderingZone.prototype.setHtmlTemplateRenderer = function (idx, htmlPageRenderer) {
                this._htmlPageTemplateRenderers[idx] = htmlPageRenderer;
            };
            //---------------------------------
            R_RenderingZone.prototype.getHtmlTemplateRenderer = function (idx) {
                return this._htmlPageTemplateRenderers[idx];
            };
            //---------------------------------
            R_RenderingZone.prototype.setFillRectRenderer = function (idx, fillRectRenderer) {
                this._fillRectRenderers[idx] = fillRectRenderer;
            };
            //---------------------------------
            R_RenderingZone.prototype.getFillRectRenderer = function (idx) {
                return this._fillRectRenderers[idx];
            };
            //---------------------------------
            R_RenderingZone.prototype.setFlashRenderer = function (idx, flashRenderer) {
                this._flashRenderers[idx] = flashRenderer;
            };
            //---------------------------------
            R_RenderingZone.prototype.getFlashRenderer = function (idx) {
                return this._flashRenderers[idx];
            };
            //---------------------------------
            R_RenderingZone.prototype.setScreenSaverRenderer = function (idx, screenSaverRenderer) {
                this._screenSaverRenderers[idx] = screenSaverRenderer;
            };
            //---------------------------------
            R_RenderingZone.prototype.getScreenSaverRenderer = function (idx) {
                return this._screenSaverRenderers[idx];
            };
            //---------------------------------
            R_RenderingZone.prototype.setTvHdmiPassThroughSrv = function (idx, tvHdmiPassThroughSrv) {
                this._tvHdmiPassThroughSrvs[idx] = tvHdmiPassThroughSrv;
            };
            //---------------------------------
            R_RenderingZone.prototype.getTvHdmiPassThroughSrv = function (idx) {
                return this._tvHdmiPassThroughSrvs[idx];
            };
            //---------------------------------
            R_RenderingZone.prototype.setPrepareParams = function (idx, prepareParams) {
                this._prepareParams[idx] = prepareParams;
            };
            //---------------------------------
            R_RenderingZone.prototype.getPrepareParams = function (idx) {
                return this._prepareParams[idx];
            };
            //---------------------------------
            R_RenderingZone.prototype.setRunParams = function (idx, runParams) {
                this._runParams[idx] = runParams;
            };
            //---------------------------------
            R_RenderingZone.prototype.getRunParams = function (idx) {
                return this._runParams[idx];
            };
            //---------------------------------
            R_RenderingZone.prototype.setStopParams = function (idx, stopParams) {
                this._stopParams[idx] = stopParams;
            };
            //---------------------------------
            R_RenderingZone.prototype.getStopParams = function (idx) {
                return this._stopParams[idx];
            };
            //---------------------------------
            R_RenderingZone.prototype.setMediaItemStatus = function (idx, mediaItemStatus) {
                this._mediaItemStatus[idx] = mediaItemStatus;
            };
            //---------------------------------
            R_RenderingZone.prototype.getMediaItemStatus = function (idx) {
                return this._mediaItemStatus[idx];
            };
            //-------------------------------
            R_RenderingZone.prototype.getCrtIndex = function () {
                return this._iCrtIndex;
            };
            //-------------------------------
            R_RenderingZone.prototype.getPrevNextIndex = function () {
                if (this._iCrtIndex == 1)
                    return 0;
                else
                    return 1;
            };
            //-------------------------------
            R_RenderingZone.prototype.changeCrtIndex = function () {
                if (this._iCrtIndex == 1)
                    this._iCrtIndex = 0;
                else
                    this._iCrtIndex = 1;
            };
            //==============================================
            //
            //===============================================
            //-------------------------------
            R_RenderingZone.prototype.getCrtVideoIndex = function () {
                return this._iCrtVideoIndex;
            };
            //-------------------------------
            R_RenderingZone.prototype.getPrevNextVideoIndex = function () {
                if (this._iCrtVideoIndex == 1)
                    return 0;
                else
                    return 1;
            };
            //-------------------------------
            R_RenderingZone.prototype.changeCrtVideoIndex = function () {
                if (this._iCrtVideoIndex == 1)
                    this._iCrtVideoIndex = 0;
                else
                    this._iCrtVideoIndex = 1;
            };
            //----------------
            R_RenderingZone.prototype.prepareNextMediaItem = function (prepareParams, error, context, callback) {
                return this.stopPrev_prepareNext_MediaItem(this.getStopParams(this.getPrevNextIndex()), prepareParams, error, context, callback);
            };
            //-------------------
            R_RenderingZone.prototype.playNextMediaItem = function (runParams, error, context, callback) {
                return this.stopCrt_playNext_destroyCrt_MediaItem(this.getStopParams(this.getCrtIndex()), this.getPrepareParams(this.getPrevNextIndex()), runParams, error, context, callback);
            };
            //----------------
            R_RenderingZone.prototype.prepareAndPlayNextMediaItem = function (prepareParams, stopParams, runParams, error, context, callback) {
                return this.prepareNext_stopCrt_playNext_destroyCrt_MediaItem(prepareParams, stopParams, runParams, error, context, callback);
            };
            //---------------------
            R_RenderingZone.prototype.stopZone = function (stopParams, error, context, callback) {
                var owner = this;
                var stopVideoRenderer0 = function stopVideoRenderer0() {
                    var stopVideoRenderer1 = function stopVideoRenderer1() {
                        var stopHtmlRenderer0 = function stopHtmlRenderer0() {
                            var stopHtmlRenderer1 = function stopHtmlRenderer1() {
                                var stopImageRenderer0 = function stopImageRenderer0() {
                                    var stopImageRenderer1 = function stopImageRenderer1() {
                                        var stopScreenSaverRenderer0 = function stopScreenSaverRenderer0() {
                                            var stopScreenSaverRenderer1 = function stopScreenSaverRenderer1() {
                                                var stopFillRectRenderer0 = function stopFillRectRenderer0() {
                                                    var stopFillRectRenderer1 = function stopFillRectRenderer1() {
                                                        var stopVideoStreamRenderer0 = function stopVideoStreamRenderer0() {
                                                            var stopVideoStreamRenderer1 = function stopVideoStreamRenderer1() {
                                                                var stopHtmlTemplateRenderer0 = function stopHtmlTemplateRenderer0() {
                                                                    var stopHtmlTemplateRenderer1 = function stopHtmlTemplateRenderer1() {
                                                                        if (callback != null)
                                                                            return callback();
                                                                        return;
                                                                    };
                                                                    owner._htmlPageTemplateRenderers[1]._iRenderingServiceControl.stopCrtMediaItem(stopParams, error, context, stopHtmlTemplateRenderer1);
                                                                };
                                                                owner._htmlPageTemplateRenderers[0]._iRenderingServiceControl.stopCrtMediaItem(stopParams, error, context, stopHtmlTemplateRenderer0);
                                                            };
                                                            owner._videoStreamRenderers[1]._iRenderingServiceControl.stopCrtMediaItem(stopParams, error, context, stopVideoStreamRenderer1);
                                                        };
                                                        owner._videoStreamRenderers[0]._iRenderingServiceControl.stopCrtMediaItem(stopParams, error, context, stopVideoStreamRenderer0);
                                                    };
                                                    owner._fillRectRenderers[1]._iRenderingServiceControl.stopCrtMediaItem(stopParams, error, context, stopFillRectRenderer1);
                                                };
                                                owner._fillRectRenderers[0]._iRenderingServiceControl.stopCrtMediaItem(stopParams, error, context, stopFillRectRenderer0);
                                            };
                                            owner._screenSaverRenderers[1]._iRenderingServiceControl.stopCrtMediaItem(stopParams, error, context, stopScreenSaverRenderer1);
                                        };
                                        owner._screenSaverRenderers[0]._iRenderingServiceControl.stopCrtMediaItem(stopParams, error, context, stopScreenSaverRenderer0);
                                    };
                                    owner._imageRenderers[1]._iRenderingServiceControl.stopCrtMediaItem(stopParams, error, context, stopImageRenderer1);
                                };
                                owner._imageRenderers[0]._iRenderingServiceControl.stopCrtMediaItem(stopParams, error, context, stopImageRenderer0);
                            };
                            owner._htmlPageRenderers[1]._iRenderingServiceControl.stopCrtMediaItem(stopParams, error, context, stopHtmlRenderer1);
                        };
                        owner._htmlPageRenderers[0]._iRenderingServiceControl.stopCrtMediaItem(stopParams, error, context, stopHtmlRenderer0);
                    };
                    owner._videosRenderers[1]._iRenderingServiceControl.stopCrtMediaItem(stopParams, error, context, stopVideoRenderer1);
                };
                owner._videosRenderers[0]._iRenderingServiceControl.stopCrtMediaItem(stopParams, error, context, stopVideoRenderer0);
            };
            //---------------------
            R_RenderingZone.prototype.destroyZone = function (stopParams, error, context, callback) {
                var owner = this;
                //----
                var destroyVideoRenderer0 = function destroyVideoRenderer0() {
                    var destroyVideoRenderer1 = function destroyVideoRenderer1() {
                        var destroyHtmlRenderer0 = function destroyHtmlRenderer0() {
                            var destroyHtmlRenderer1 = function destroyHtmlRenderer1() {
                                var destroyImageRenderer0 = function destroyImageRenderer0() {
                                    var destroyImageRenderer1 = function destroyImageRenderer1() {
                                        var destroyScreenSaverRenderer0 = function destroyScreenSaverRenderer0() {
                                            var destroyScreenSaverRenderer1 = function destroyScreenSaverRenderer1() {
                                                var destroyFillRectRenderer0 = function destroyFillRectRenderer0() {
                                                    var destroyFillRectRenderer1 = function destroyFillRectRenderer1() {
                                                        var destroyVideoStreamRenderer0 = function destroyVideoStreamRenderer0() {
                                                            var destroyVideoStreamRenderer1 = function destroyVideoStreamRenderer1() {
                                                                var destroyHtmlTemplateRenderer0 = function destroyHtmlTemplateRenderer0() {
                                                                    var destroyHtmlTemplateRenderer1 = function destroyHtmlTemplateRenderer1() {
                                                                        owner.reset();
                                                                        if (callback != null)
                                                                            return callback();
                                                                        return;
                                                                    };
                                                                    owner._htmlPageTemplateRenderers[1]._iRenderingServiceControl.destroyCrtMediaItem(stopParams, error, context, destroyHtmlTemplateRenderer1);
                                                                };
                                                                owner._htmlPageTemplateRenderers[0]._iRenderingServiceControl.destroyCrtMediaItem(stopParams, error, context, destroyHtmlTemplateRenderer0);
                                                            };
                                                            owner._videoStreamRenderers[1]._iRenderingServiceControl.destroyCrtMediaItem(stopParams, error, context, destroyVideoStreamRenderer1);
                                                        };
                                                        owner._videoStreamRenderers[0]._iRenderingServiceControl.destroyCrtMediaItem(stopParams, error, context, destroyVideoStreamRenderer0);
                                                    };
                                                    owner._fillRectRenderers[1]._iRenderingServiceControl.destroyCrtMediaItem(stopParams, error, context, destroyFillRectRenderer1);
                                                };
                                                owner._fillRectRenderers[0]._iRenderingServiceControl.destroyCrtMediaItem(stopParams, error, context, destroyFillRectRenderer0);
                                            };
                                            owner._screenSaverRenderers[1]._iRenderingServiceControl.destroyCrtMediaItem(stopParams, error, context, destroyScreenSaverRenderer1);
                                        };
                                        owner._screenSaverRenderers[0]._iRenderingServiceControl.destroyCrtMediaItem(stopParams, error, context, destroyScreenSaverRenderer0);
                                    };
                                    owner._imageRenderers[1]._iRenderingServiceControl.destroyCrtMediaItem(stopParams, error, context, destroyImageRenderer1);
                                };
                                owner._imageRenderers[0]._iRenderingServiceControl.destroyCrtMediaItem(stopParams, error, context, destroyImageRenderer0);
                            };
                            owner._htmlPageRenderers[1]._iRenderingServiceControl.destroyCrtMediaItem(stopParams, error, context, destroyHtmlRenderer1);
                        };
                        owner._htmlPageRenderers[0]._iRenderingServiceControl.destroyCrtMediaItem(stopParams, error, context, destroyHtmlRenderer0);
                    };
                    owner._videosRenderers[1]._iRenderingServiceControl.destroyCrtMediaItem(stopParams, error, context, destroyVideoRenderer1);
                };
                owner._videosRenderers[0]._iRenderingServiceControl.destroyCrtMediaItem(stopParams, error, context, destroyVideoRenderer0);
            };
            //---------------------
            R_RenderingZone.prototype.stopCrtMediaItem = function (stopParams, error, context, callback) {
                var owner = this;
                var callbackStopCrtMediaItem = function callbackStopCrtMediaItem() {
                    if (callback != null)
                        return callback();
                    return;
                };
                //-
                //var prepareIndex1 : number = owner.getPrevNextIndex();
                //owner._stopCrtMediaItem(prepareIndex1, stopParams, error, context, callbackStopCrtMediaItem) ;
                var crtIndex1 = owner.getCrtIndex();
                owner._stopCrtMediaItem(crtIndex1, stopParams, error, context, callbackStopCrtMediaItem);
            };
            //---------------------
            R_RenderingZone.prototype.destroyCrtMediaItem = function (stopParams, error, context, callback) {
                var owner = this;
                var callbackDestroyCrtMediaItem = function callbackPrepareNextMediaItem() {
                    if (callback != null)
                        return callback();
                    return;
                };
                //-
                //var prepareIndex2 : number = owner.getPrevNextIndex();
                var crtIndex1 = owner.getCrtIndex();
                owner._destroyCrtMediaItem(crtIndex1, stopParams, error, context, callbackDestroyCrtMediaItem);
            };
            //===============================
            R_RenderingZone.prototype.stopPrev_prepareNext_MediaItem = function (stopParams, prepareParams, error, context, callback) {
                var owner = this;
                var callbackStopCrtMediaItem = function callbackStopCrtMediaItem() {
                    var callbackDestroyCrtMediaItem = function callbackPrepareNextMediaItem() {
                        var callbackPrepareNextMediaItem = function callbackPrepareNextMediaItem() {
                            if (callback != null)
                                return callback();
                            return;
                        };
                        //-
                        var prepareIndex3 = owner.getPrevNextIndex();
                        owner._prepareNextMediaItem(prepareIndex3, prepareParams, error, context, callbackPrepareNextMediaItem);
                    };
                    //-
                    var prepareIndex2 = owner.getPrevNextIndex();
                    owner._destroyCrtMediaItem(prepareIndex2, stopParams, error, context, callbackDestroyCrtMediaItem);
                };
                //-
                var prepareIndex1 = owner.getPrevNextIndex();
                owner._stopCrtMediaItem(prepareIndex1, stopParams, error, context, callbackStopCrtMediaItem);
            };
            //==================================
            R_RenderingZone.prototype.stopCrt_playNext_destroyCrt_MediaItem = function (stopParams, prepareParams, runParams, error, context, callback) {
                var owner = this;
                var nextMediaType = null;
                var crtMediaType = null;
                var callbackStopCrtMediaItem = function callbackStopCrtMediaItem() {
                    var callbackPlayCrtMediaItem = function callbackPlayCrtMediaItem() {
                        var callbackDestroyCrtMediaItem = function callbackDestroyCrtMediaItem() {
                            //if ((crtMediaType != null) && (crtMediaType != null) && (crtMediaType == nextMediaType))
                            owner.changeCrtIndex();
                            if (callback != null)
                                return callback();
                            return;
                        };
                        //--
                        var crtIndex2 = owner.getCrtIndex();
                        owner._destroyCrtMediaItem(crtIndex2, stopParams, error, context, callbackDestroyCrtMediaItem);
                    };
                    //--
                    var prepareIndex1 = owner.getPrevNextIndex();
                    //nextMediaType = owner.getPrepareParams(prepareIndex1).getRenderParams().getParamIdentification().getMediaType();
                    owner._playNextMediaItem(prepareIndex1, runParams, error, context, callbackPlayCrtMediaItem);
                };
                //---------------------
                var crtIndex1 = owner.getCrtIndex();
                //crtMediaType = owner.getPrepareParams(crtIndex1).getRenderParams().getParamIdentification().getMediaType();
                owner._stopCrtMediaItem(crtIndex1, stopParams, error, context, callbackStopCrtMediaItem);
            };
            //==================================
            R_RenderingZone.prototype.prepareNext_stopCrt_playNext_destroyCrt_MediaItem2 = function (prepareParams, stopParams, runParams, error, context, callback) {
                var owner = this;
                var callbackPrepareNextMediaItem = function callbackPrepareNextMediaItem() {
                    var callbackStopCrtMediaItem = function callbackStopCrtMediaItem() {
                        var callbackPlayCrtMediaItem = function callbackPlayCrtMediaItem() {
                            var callbackDestroyCrtMediaItem = function callbackDestroyCrtMediaItem() {
                                owner.changeCrtIndex();
                                if (callback != null)
                                    return callback();
                                return;
                            };
                            //--
                            var crtIndex2 = owner.getCrtIndex();
                            owner._destroyCrtMediaItem(crtIndex2, stopParams, error, context, callbackDestroyCrtMediaItem);
                        };
                        //--
                        var prepareIndex1 = owner.getPrevNextIndex();
                        owner._playNextMediaItem(prepareIndex1, runParams, error, context, callbackPlayCrtMediaItem);
                    };
                    //---------------------
                    var crtIndex1 = owner.getCrtIndex();
                    owner._stopCrtMediaItem(crtIndex1, stopParams, error, context, callbackStopCrtMediaItem);
                };
                //--
                var prepareIndex0 = owner.getPrevNextIndex();
                owner._prepareNextMediaItem(prepareIndex0, prepareParams, error, context, callbackPrepareNextMediaItem);
                //return owner.stopPrev_prepareNext_MediaItem( stopParams, prepareParams, error, context, callbackPrepareNextMediaItem) ;
            };
            //==================================
            R_RenderingZone.prototype.prepareNext_stopCrt_playNext_destroyCrt_MediaItem = function (prepareParams, stopParams, runParams, error, context, callback) {
                var owner = this;
                var callbackCanPlayNextMediaItem = function callbackCanPlayNextMediaItem() {
                    //------
                    var evt = context.getObjectResult();
                    if (evt != null) {
                        if (callback != null)
                            return callback();
                        return;
                    }
                    //----
                    var callbackStopCrtMediaItem = function callbackStopCrtMediaItem() {
                        //---
                        var callbackPrepareNextMediaItem = function callbackPrepareNextMediaItem() {
                            //-----
                            var callbackPlayCrtMediaItem = function callbackPlayCrtMediaItem() {
                                var callbackDestroyCrtMediaItem = function callbackDestroyCrtMediaItem() {
                                    owner.changeCrtIndex();
                                    if (callback != null)
                                        return callback();
                                    return;
                                };
                                //--
                                var crtIndex2 = owner.getCrtIndex();
                                owner._destroyCrtMediaItem(crtIndex2, stopParams, error, context, callbackDestroyCrtMediaItem);
                            };
                            //--
                            var prepareIndex1 = owner.getPrevNextIndex();
                            owner._playNextMediaItem(prepareIndex1, runParams, error, context, callbackPlayCrtMediaItem);
                        };
                        //---------------------
                        var prepareIndex0 = owner.getPrevNextIndex();
                        owner._prepareNextMediaItem(prepareIndex0, prepareParams, error, context, callbackPrepareNextMediaItem);
                        //return owner.stopPrev_prepareNext_MediaItem( stopParams, prepareParams, error, context, callbackPrepareNextMediaItem) ;
                    };
                    //---------------------
                    var crtIndex1 = owner.getCrtIndex();
                    owner._stopCrtMediaItem(crtIndex1, stopParams, error, context, callbackStopCrtMediaItem);
                };
                //---------------------
                var prepareIndexCanPlay = owner.getPrevNextIndex();
                owner._canPlayNextMediaItem(prepareIndexCanPlay, prepareParams, error, context, callbackCanPlayNextMediaItem);
            };
            //==================================
            R_RenderingZone.prototype._prepareNextMediaItem = function (prepareIndex, prepareParams, error, context, callback) {
                var owner = this;
                /*
                if (owner.getMediaItemStatus(prepareIndex) != amMediaItemStatus.am_renderingservices.AE_RenderParams_MediaItemStatus.MediaItemStatus_None)
                {
                  if (callback != null)
                  {
                    callback(context);
                  }
                  return ;
                }*/
                var callbackMediaItemPrepare = function callbackMediaItemPrepare() {
                    //owner.setRunParams(prepareIndex, prepareParams);
                    owner.setMediaItemStatus(prepareIndex, amMediaItemStatus.am_renderingservices.AE_RenderParams_MediaItemStatus.MediaItemStatus_Prepared);
                    if (callback != null) {
                        callback(context);
                    }
                    return;
                };
                this.setPrepareParams(prepareIndex, prepareParams);
                //-----
                if (this.getPrepareParams(prepareIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Image) {
                    this.getImageRenderer(prepareIndex)._iImageRendererConfig.setHtmlZoneDiv(this.getHtmlZone().getHtmlZoneDiv());
                    this.getImageRenderer(prepareIndex)._iImageRendererConfig.setHtmlImage(this.getHtmlZone().getHtmlImage(prepareIndex));
                    this.getImageRenderer(prepareIndex)._iRenderingServiceControl.prepareNextMediaItem(prepareParams, error, context, callbackMediaItemPrepare);
                    return;
                }
                //-----
                if (this.getPrepareParams(prepareIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Rect) {
                    this.getFillRectRenderer(prepareIndex)._iFillRectRendererConfig.setHtmlZoneDiv(this.getHtmlZone().getHtmlZoneDiv());
                    this.getFillRectRenderer(prepareIndex)._iFillRectRendererConfig.setHtmlRectDiv(this.getHtmlZone().getHtmlRect(prepareIndex));
                    this.getFillRectRenderer(prepareIndex)._iRenderingServiceControl.prepareNextMediaItem(prepareParams, error, context, callbackMediaItemPrepare);
                    return;
                }
                //-----
                if (this.getPrepareParams(prepareIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Video) {
                    this.getVideoRenderer(prepareIndex)._iVideoRendererConfig.setHtmlZoneDiv(this.getHtmlZone().getHtmlZoneDiv());
                    this.getVideoRenderer(prepareIndex)._iVideoRendererConfig.setHtmlVideo(this.getHtmlZone().getHtmlVideo(prepareIndex));
                    this.getVideoRenderer(prepareIndex)._iRenderingServiceControl.prepareNextMediaItem(prepareParams, error, context, callbackMediaItemPrepare);
                    return;
                }
                //-----
                if (this.getPrepareParams(prepareIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_VideoStream) {
                    this.getVideoStreamRenderer(prepareIndex)._iVideoStreamRendererConfig.setHtmlZoneDiv(this.getHtmlZone().getHtmlZoneDiv());
                    this.getVideoStreamRenderer(prepareIndex)._iVideoStreamRendererConfig.setHtmlVideoStream(this.getHtmlZone().getHtmlVideo(prepareIndex));
                    this.getVideoStreamRenderer(prepareIndex)._iRenderingServiceControl.prepareNextMediaItem(prepareParams, error, context, callbackMediaItemPrepare);
                    return;
                }
                //-----
                if (this.getPrepareParams(prepareIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Html) {
                    this.getHtmlPageRenderer(prepareIndex)._iHtmlRendererConfig.setHtmlZoneDiv(this.getHtmlZone().getHtmlZoneDiv());
                    this.getHtmlPageRenderer(prepareIndex)._iHtmlRendererConfig.setHtmlIFrame(this.getHtmlZone().getHtmlPage(prepareIndex));
                    this.getHtmlPageRenderer(prepareIndex)._iRenderingServiceControl.prepareNextMediaItem(prepareParams, error, context, callbackMediaItemPrepare);
                    return;
                }
                //-----
                if (this.getPrepareParams(prepareIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_HtmlTemplate) {
                    this.getHtmlTemplateRenderer(prepareIndex)._iHtmlTemplateRendererConfig.setHtmlZoneDiv(this.getHtmlZone().getHtmlZoneDiv());
                    this.getHtmlTemplateRenderer(prepareIndex)._iHtmlTemplateRendererConfig.setHtmlIFrame(this.getHtmlZone().getHtmlPage(prepareIndex));
                    this.getHtmlPageRenderer(prepareIndex)._iRenderingServiceControl.prepareNextMediaItem(prepareParams, error, context, callbackMediaItemPrepare);
                    return;
                }
                //-----
                if (this.getPrepareParams(prepareIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_ScreenSaver) {
                    this.getScreenSaverRenderer(prepareIndex)._iScreenSaverRendererConfig.setScreenSaverConfig(this._aScreenSaverConfig);
                    this.getScreenSaverRenderer(prepareIndex)._iScreenSaverRendererConfig.setHtmlZoneDiv(this.getHtmlZone().getHtmlZoneDiv());
                    this.getScreenSaverRenderer(prepareIndex)._iScreenSaverRendererConfig.setHtmlImage(this.getHtmlZone().getHtmlImage(prepareIndex));
                    this.getScreenSaverRenderer(prepareIndex)._iScreenSaverRendererConfig.setHtmlVideo(this.getHtmlZone().getHtmlVideo(prepareIndex));
                    this.getScreenSaverRenderer(prepareIndex)._iRenderingServiceControl.prepareNextMediaItem(prepareParams, error, context, callbackMediaItemPrepare);
                    return;
                }
                return callbackMediaItemPrepare();
            };
            //===============================
            R_RenderingZone.prototype._playNextMediaItem = function (prepareIndex, runParams, error, context, callback) {
                var owner = this;
                if (this.getMediaItemStatus(prepareIndex) != amMediaItemStatus.am_renderingservices.AE_RenderParams_MediaItemStatus.MediaItemStatus_Prepared) {
                    if (callback != null) {
                        callback(context);
                    }
                    return;
                }
                var callbackMediaItemPlay = function callbackMediaItemPlay() {
                    owner.setRunParams(prepareIndex, runParams);
                    owner.setMediaItemStatus(prepareIndex, amMediaItemStatus.am_renderingservices.AE_RenderParams_MediaItemStatus.MediaItemStatus_Play);
                    if (callback != null) {
                        callback(context);
                    }
                    return;
                };
                this.setRunParams(prepareIndex, runParams);
                if (this.getPrepareParams(prepareIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Image) {
                    this.getImageRenderer(prepareIndex)._iRenderingServiceControl.playNextMediaItem(runParams, error, context, callbackMediaItemPlay);
                    return;
                }
                //-----
                if (this.getPrepareParams(prepareIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Rect) {
                    this.getFillRectRenderer(prepareIndex)._iRenderingServiceControl.playNextMediaItem(runParams, error, context, callbackMediaItemPlay);
                    return;
                }
                //-----
                if (this.getPrepareParams(prepareIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Video) {
                    this.getVideoRenderer(prepareIndex)._iRenderingServiceControl.playNextMediaItem(runParams, error, context, callbackMediaItemPlay);
                    return;
                }
                //-----
                if (this.getPrepareParams(prepareIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_VideoStream) {
                    this.getVideoStreamRenderer(prepareIndex)._iRenderingServiceControl.playNextMediaItem(runParams, error, context, callbackMediaItemPlay);
                    return;
                }
                //-----
                if (this.getPrepareParams(prepareIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Html) {
                    this.getHtmlPageRenderer(prepareIndex)._iRenderingServiceControl.playNextMediaItem(runParams, error, context, callbackMediaItemPlay);
                    return;
                }
                //-----
                if (this.getPrepareParams(prepareIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_HtmlTemplate) {
                    this.getHtmlPageRenderer(prepareIndex)._iRenderingServiceControl.playNextMediaItem(runParams, error, context, callbackMediaItemPlay);
                    return;
                }
                //-----
                if (this.getPrepareParams(prepareIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_ScreenSaver) {
                    this.getScreenSaverRenderer(prepareIndex)._iRenderingServiceControl.playNextMediaItem(runParams, error, context, callbackMediaItemPlay);
                    return;
                }
                return callbackMediaItemPlay();
            };
            //===============================
            R_RenderingZone.prototype._stopCrtMediaItem = function (runIndex, stopParams, error, context, callback) {
                var owner = this;
                /*
                if (this.getMediaItemStatus(runIndex) != amMediaItemStatus.am_renderingservices.AE_RenderParams_MediaItemStatus.MediaItemStatus_Play)
                {
                  if (callback != null)
                  {
                    callback(context);
                  }
                  return ;
                }*/
                if (this.getPrepareParams(runIndex) == null) {
                    if (callback != null) {
                        callback(context);
                    }
                    return;
                }
                if (this.getPrepareParams(runIndex).getRenderParams() == null) {
                    if (callback != null) {
                        callback(context);
                    }
                    return;
                }
                var callbackMediaItemStopped = function callbackMediaItemStopped() {
                    owner.setStopParams(runIndex, stopParams);
                    owner.setMediaItemStatus(runIndex, amMediaItemStatus.am_renderingservices.AE_RenderParams_MediaItemStatus.MediaItemStatus_Stop);
                    if (callback != null) {
                        callback(context);
                    }
                    return;
                };
                if (this.getPrepareParams(runIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Image) {
                    this.getImageRenderer(runIndex)._iRenderingServiceControl.stopCrtMediaItem(stopParams, error, context, callbackMediaItemStopped);
                    return;
                }
                //-----
                if (this.getPrepareParams(runIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Rect) {
                    this.getFillRectRenderer(runIndex)._iRenderingServiceControl.stopCrtMediaItem(stopParams, error, context, callbackMediaItemStopped);
                    return;
                }
                //-----
                if (this.getPrepareParams(runIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Video) {
                    this.getVideoRenderer(runIndex)._iRenderingServiceControl.stopCrtMediaItem(stopParams, error, context, callbackMediaItemStopped);
                    return;
                }
                //-----
                if (this.getPrepareParams(runIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_VideoStream) {
                    this.getVideoStreamRenderer(runIndex)._iRenderingServiceControl.stopCrtMediaItem(stopParams, error, context, callbackMediaItemStopped);
                    return;
                }
                //-----
                if (this.getPrepareParams(runIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Html) {
                    this.getHtmlPageRenderer(runIndex)._iRenderingServiceControl.stopCrtMediaItem(stopParams, error, context, callbackMediaItemStopped);
                    return;
                }
                //-----
                if (this.getPrepareParams(runIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_HtmlTemplate) {
                    this.getHtmlPageRenderer(runIndex)._iRenderingServiceControl.stopCrtMediaItem(stopParams, error, context, callbackMediaItemStopped);
                    return;
                }
                //-----
                if (this.getPrepareParams(runIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_ScreenSaver) {
                    this.getScreenSaverRenderer(runIndex)._iRenderingServiceControl.stopCrtMediaItem(stopParams, error, context, callbackMediaItemStopped);
                    return;
                }
                return callbackMediaItemStopped();
            };
            //===============================
            R_RenderingZone.prototype._destroyCrtMediaItem = function (runIndex, stopParams, error, context, callback) {
                var owner = this;
                /*
                if (this.getMediaItemStatus(runIndex) != amMediaItemStatus.am_renderingservices.AE_RenderParams_MediaItemStatus.MediaItemStatus_Stop)
                {
                  if (callback != null)
                  {
                    callback(context);
                  }
                  return ;
                }*/
                if (this.getPrepareParams(runIndex) == null) {
                    if (callback != null) {
                        callback(context);
                    }
                    return;
                }
                if (this.getPrepareParams(runIndex).getRenderParams() == null) {
                    if (callback != null) {
                        callback(context);
                    }
                    return;
                }
                var callbackMediaItemDestroy = function callbackMediaItemDestroy() {
                    //this.setStopParams(runIndex, stopParams);
                    //freeStopParam
                    owner.setMediaItemStatus(runIndex, amMediaItemStatus.am_renderingservices.AE_RenderParams_MediaItemStatus.MediaItemStatus_None);
                    if (callback != null) {
                        callback(context);
                    }
                    return;
                };
                if (this.getPrepareParams(runIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Image) {
                    this.getImageRenderer(runIndex)._iRenderingServiceControl.destroyCrtMediaItem(stopParams, error, context, callbackMediaItemDestroy);
                    return;
                }
                //-----
                if (this.getPrepareParams(runIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Rect) {
                    this.getFillRectRenderer(runIndex)._iRenderingServiceControl.destroyCrtMediaItem(stopParams, error, context, callbackMediaItemDestroy);
                    return;
                }
                //-----
                if (this.getPrepareParams(runIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Video) {
                    this.getVideoRenderer(runIndex)._iRenderingServiceControl.destroyCrtMediaItem(stopParams, error, context, callbackMediaItemDestroy);
                    return;
                }
                //-----
                if (this.getPrepareParams(runIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_VideoStream) {
                    this.getVideoStreamRenderer(runIndex)._iRenderingServiceControl.destroyCrtMediaItem(stopParams, error, context, callbackMediaItemDestroy);
                    return;
                }
                //-----
                if (this.getPrepareParams(runIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Html) {
                    this.getHtmlPageRenderer(runIndex)._iRenderingServiceControl.destroyCrtMediaItem(stopParams, error, context, callbackMediaItemDestroy);
                    return;
                }
                //-----
                if (this.getPrepareParams(runIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_HtmlTemplate) {
                    this.getHtmlPageRenderer(runIndex)._iRenderingServiceControl.destroyCrtMediaItem(stopParams, error, context, callbackMediaItemDestroy);
                    return;
                }
                //-----
                if (this.getPrepareParams(runIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_ScreenSaver) {
                    this.getScreenSaverRenderer(runIndex)._iRenderingServiceControl.destroyCrtMediaItem(stopParams, error, context, callbackMediaItemDestroy);
                    return;
                }
                return callbackMediaItemDestroy();
            };
            //==================================
            R_RenderingZone.prototype._canPlayNextMediaItem = function (prepareIndex, prepareParams, error, context, callback) {
                var owner = this;
                /*
                if (owner.getMediaItemStatus(prepareIndex) != amMediaItemStatus.am_renderingservices.AE_RenderParams_MediaItemStatus.MediaItemStatus_None)
                {
                  if (callback != null)
                  {
                    callback(context);
                  }
                  return ;
                }*/
                var callbackMediaItemCanPlay = function callbackMediaItemCanPlay() {
                    //owner.setRunParams(prepareIndex, prepareParams);
                    //owner.setMediaItemStatus(prepareIndex, amMediaItemStatus.am_renderingservices.AE_RenderParams_MediaItemStatus.MediaItemStatus_Prepared);
                    if (callback != null) {
                        callback(context);
                    }
                    return;
                };
                this.setPrepareParams(prepareIndex, prepareParams);
                //-----
                if (this.getPrepareParams(prepareIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Image) {
                    //this.getImageRenderer(prepareIndex)._iImageRendererConfig.setHtmlZoneDiv( this.getHtmlZone().getHtmlZoneDiv() );
                    //this.getImageRenderer(prepareIndex)._iImageRendererConfig.setHtmlImage(   this.getHtmlZone().getHtmlImage(prepareIndex) );
                    this.getImageRenderer(prepareIndex)._iRenderingServiceControl.canPlayNextMediaItem(prepareParams, error, context, callbackMediaItemCanPlay);
                    return;
                }
                //-----
                if (this.getPrepareParams(prepareIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Rect) {
                    //this.getFillRectRenderer(prepareIndex)._iFillRectRendererConfig.setHtmlZoneDiv( this.getHtmlZone().getHtmlZoneDiv() );
                    //this.getFillRectRenderer(prepareIndex)._iFillRectRendererConfig.setHtmlRectDiv(   this.getHtmlZone().getHtmlRect(prepareIndex ) );
                    this.getFillRectRenderer(prepareIndex)._iRenderingServiceControl.canPlayNextMediaItem(prepareParams, error, context, callbackMediaItemCanPlay);
                    return;
                }
                //-----
                if (this.getPrepareParams(prepareIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Video) {
                    //this.getVideoRenderer(prepareIndex)._iVideoRendererConfig.setHtmlZoneDiv( this.getHtmlZone().getHtmlZoneDiv() );
                    //this.getVideoRenderer(prepareIndex)._iVideoRendererConfig.setHtmlVideo(   this.getHtmlZone().getHtmlVideo(prepareIndex) );
                    this.getVideoRenderer(prepareIndex)._iRenderingServiceControl.canPlayNextMediaItem(prepareParams, error, context, callbackMediaItemCanPlay);
                    return;
                }
                //-----
                if (this.getPrepareParams(prepareIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_VideoStream) {
                    //this.getVideoStreamRenderer(prepareIndex)._iVideoStreamRendererConfig.setHtmlZoneDiv( this.getHtmlZone().getHtmlZoneDiv() );
                    //this.getVideoStreamRenderer(prepareIndex)._iVideoStreamRendererConfig.setHtmlVideoStream(   this.getHtmlZone().getHtmlVideo(prepareIndex) );
                    this.getVideoStreamRenderer(prepareIndex)._iRenderingServiceControl.canPlayNextMediaItem(prepareParams, error, context, callbackMediaItemCanPlay);
                    return;
                }
                //-----
                if (this.getPrepareParams(prepareIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Html) {
                    //this.getHtmlPageRenderer(prepareIndex)._iHtmlRendererConfig.setHtmlZoneDiv( this.getHtmlZone().getHtmlZoneDiv() );
                    //this.getHtmlPageRenderer(prepareIndex)._iHtmlRendererConfig.setHtmlIFrame(  this.getHtmlZone().getHtmlPage(prepareIndex) );
                    this.getHtmlPageRenderer(prepareIndex)._iRenderingServiceControl.canPlayNextMediaItem(prepareParams, error, context, callbackMediaItemCanPlay);
                    return;
                }
                //-----
                if (this.getPrepareParams(prepareIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_HtmlTemplate) {
                    //this.getHtmlTemplateRenderer(prepareIndex)._iHtmlTemplateRendererConfig.setHtmlZoneDiv( this.getHtmlZone().getHtmlZoneDiv() );
                    //this.getHtmlTemplateRenderer(prepareIndex)._iHtmlTemplateRendererConfig.setHtmlIFrame(  this.getHtmlZone().getHtmlPage(prepareIndex) );
                    this.getHtmlPageRenderer(prepareIndex)._iRenderingServiceControl.canPlayNextMediaItem(prepareParams, error, context, callbackMediaItemCanPlay);
                    return;
                }
                //-----
                if (this.getPrepareParams(prepareIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_ScreenSaver) {
                    //this.getScreenSaverRenderer(prepareIndex)._iScreenSaverRendererConfig.setScreenSaverConfig( this._aScreenSaverConfig);
                    //this.getScreenSaverRenderer(prepareIndex)._iScreenSaverRendererConfig.setHtmlZoneDiv( this.getHtmlZone().getHtmlZoneDiv() );
                    //this.getScreenSaverRenderer(prepareIndex)._iScreenSaverRendererConfig.setHtmlImage(   this.getHtmlZone().getHtmlImage(prepareIndex) );
                    //this.getScreenSaverRenderer(prepareIndex)._iScreenSaverRendererConfig.setHtmlVideo(   this.getHtmlZone().getHtmlVideo(prepareIndex) );
                    this.getScreenSaverRenderer(prepareIndex)._iRenderingServiceControl.canPlayNextMediaItem(prepareParams, error, context, callbackMediaItemCanPlay);
                    return;
                }
                return callbackMediaItemCanPlay();
            };
            return R_RenderingZone;
        }(rmRenderingServices.rm_renderingservices.R_RenderingService));
        rm_renderingservices.R_RenderingZone = R_RenderingZone;
    })(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
});
//# sourceMappingURL=R_RenderingZone.js.map