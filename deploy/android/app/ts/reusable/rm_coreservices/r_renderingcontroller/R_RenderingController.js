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
var rmGeneral = require("../../../../../app/ts/reusable/rm_general/r_service/R_Service");
var rmIImplRenderingController = require("../../../../../app/ts/reusable/rm_coreservices/r_renderingcontroller/IImpl_RenderingController_R");
var rmIImplRenderingControllerConfig = require("../../../../../app/ts/reusable/rm_coreservices/r_renderingcontroller/IImpl_RenderingController_Config");
var rmIImplRenderingControllerControl = require("../../../../../app/ts/reusable/rm_coreservices/r_renderingcontroller/IImpl_RenderingController_Control");
var rm_coreservices;
(function (rm_coreservices) {
    var R_RenderingController = (function (_super) {
        __extends(R_RenderingController, _super);
        function R_RenderingController(aFactoryDescription, aServiceContainer, aLogService, error) {
            var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
            _this._iRenderingController = new rmIImplRenderingController.rm_coreservices.IImpl_RenderingController_R(_this);
            _this._iRenderingControllerConfig = new rmIImplRenderingControllerConfig.rm_coreservices.IImpl_RenderingController_Config(_this);
            _this._iRenderingControllerControl = new rmIImplRenderingControllerControl.rm_coreservices.IImpl_RenderingController_Control(_this);
            _this._aLogService = aLogService;
            _this._aRenderingZonePool = null;
            _this._aImageRendererPool = null;
            _this._aVideoRendererPool = null;
            _this._aVideoStreamRendererPool = null;
            _this._aHtmlRendererPool = null;
            _this._aHtmlTemplateRendererPool = null;
            _this._aFlashRendererPool = null;
            _this._aScreenSaverRendererPool = null;
            _this._aFillRectRendererPool = null;
            _this._aTvHdmiPassThroughSrvPool = null;
            _this._aBackgroundRendererPool = null;
            _this._aHtmlZonePool = null;
            _this._renderingControllerConfig = null;
            return _this;
        }
        R_RenderingController.prototype.injectDependencies = function (aServiceContainer, aServiceLocator, aLogService, error) {
            this._aServiceLocator = aServiceLocator;
            this._aRenderingZonePool = this._aServiceLocator._iEntityCreation.createDefaultRenderingZonePool(error);
            this._aRenderingZonePool.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
            this._aImageRendererPool = this._aServiceLocator._iEntityCreation.createDefaultImageRendererPool(error);
            this._aImageRendererPool.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
            this._aVideoRendererPool = this._aServiceLocator._iEntityCreation.createDefaultVideoRendererPool(error);
            this._aVideoRendererPool.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
            this._aVideoStreamRendererPool = this._aServiceLocator._iEntityCreation.createDefaultVideoStreamRendererPool(error);
            this._aVideoStreamRendererPool.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
            this._aHtmlRendererPool = this._aServiceLocator._iEntityCreation.createDefaultHtmlRendererPool(error);
            this._aHtmlRendererPool.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
            this._aHtmlTemplateRendererPool = this._aServiceLocator._iEntityCreation.createDefaultHtmlTemplateRendererPool(error);
            this._aHtmlTemplateRendererPool.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
            this._aFlashRendererPool = this._aServiceLocator._iEntityCreation.createDefaultFlashRendererPool(error);
            this._aFlashRendererPool.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
            this._aScreenSaverRendererPool = this._aServiceLocator._iEntityCreation.createDefaultScreenSaverRendererPool(error);
            this._aScreenSaverRendererPool.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
            this._aFillRectRendererPool = this._aServiceLocator._iEntityCreation.createDefaultFillRectRendererPool(error);
            this._aFillRectRendererPool.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
            this._aTvHdmiPassThroughSrvPool = this._aServiceLocator._iEntityCreation.createDefaultTvHdmiPassThroughSrvPool(error);
            this._aTvHdmiPassThroughSrvPool.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
            this._aBackgroundRendererPool = this._aServiceLocator._iEntityCreation.createDefaultBackgroundRendererPool(error);
            this._aBackgroundRendererPool.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
            this._aHtmlZonePool = this._aServiceLocator._iEntityCreation.createDefaultHtmlZonePool(error);
            this._aHtmlZonePool.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
            return 0;
        };
        R_RenderingController.prototype.init = function (aConfig, error, context, callback) {
            this._renderingControllerConfig = aConfig;
            this._aHtmlZonePool.initPool(this._renderingControllerConfig.getInitialPoolNb_OfHtmlZones(), error);
            this._aRenderingZonePool.setScreenSaverConfig(this._renderingControllerConfig.getScreenSaverConfig());
            this._aRenderingZonePool.initPool(this._renderingControllerConfig.getInitialPoolNb_OfRenderingZones(), error);
            this._aImageRendererPool.initPool(this._renderingControllerConfig.getInitialPoolNb_OfImageRenderers(), error);
            this._aVideoRendererPool.initPool(this._renderingControllerConfig.getInitialPoolNb_OfVideoRenderers(), error);
            this._aVideoStreamRendererPool.initPool(this._renderingControllerConfig.getInitialPoolNb_OfVideoStreamRenderers(), error);
            this._aHtmlRendererPool.initPool(this._renderingControllerConfig.getInitialPoolNb_OfHtmlRenderers(), error);
            this._aHtmlTemplateRendererPool.initPool(this._renderingControllerConfig.getInitialPoolNb_OfHtmlTemplateRenderers(), error);
            this._aFillRectRendererPool.initPool(this._renderingControllerConfig.getInitialPoolNb_OfFillRectRenderers(), error);
            this._aFlashRendererPool.initPool(this._renderingControllerConfig.getInitialPoolNb_OfFlashRenderers(), error);
            this._aTvHdmiPassThroughSrvPool.initPool(this._renderingControllerConfig.getInitialPoolNb_OfTvHdmiPassThroughSrv(), error);
            this._aScreenSaverRendererPool.setScreenSaverConfig(this._renderingControllerConfig.getScreenSaverConfig());
            this._aScreenSaverRendererPool.initPool(this._renderingControllerConfig.getInitialPoolNb_OfScreenSaverRenderers(), error);
            this._aBackgroundRendererPool.initPool(this._renderingControllerConfig.getInitialPoolNb_OfBackgroundRenderers(), error);
            if (callback != null) {
                callback(context);
                return;
            }
            return;
        };
        R_RenderingController.prototype.createZone = function (zoneId, prepareParams, error, context, callback) {
            var newRenderingZone = this._aRenderingZonePool.getFreeRenderingZone();
            if (newRenderingZone == null)
                return;
            newRenderingZone._iRenderingZoneConfig.setZoneId(zoneId);
        };
        R_RenderingController.prototype.destroyZone = function (zoneId, stopParams, error, context, callback) {
            var foundRenderingZone = this._aRenderingZonePool.getRenderingZoneByZoneId(zoneId);
            var owner = this;
            var callbackDestroyZone = function callbackDestroyZone() {
                owner._aRenderingZonePool.releaseRenderingZone(foundRenderingZone);
                if (callback != null)
                    return callback();
                return;
            };
            foundRenderingZone._iRenderingZone.destroyZone(stopParams, error, context, callbackDestroyZone);
        };
        R_RenderingController.prototype.stopZone = function (zoneId, stopParams, error, context, callback) {
            var foundRenderingZone = this._aRenderingZonePool.getRenderingZoneByZoneId(zoneId);
            foundRenderingZone._iRenderingZone.stopZone(stopParams, error, context, callback);
        };
        R_RenderingController.prototype.prepareNextMediaItem = function (zoneId, prepareParams, error, context, callback) {
            var renderingZone = this._aRenderingZonePool.getRenderingZoneByZoneId(zoneId);
            if (renderingZone == null) {
                alert("No Free zones. maximum number of zones reached");
                return;
            }
            renderingZone._iRenderingServiceControl.prepareNextMediaItem(prepareParams, error, context, callback);
            return;
        };
        R_RenderingController.prototype.playNextMediaItem = function (zoneId, runParams, error, context, callback) {
            var renderingZone = this._aRenderingZonePool.getRenderingZoneByZoneId(zoneId);
            renderingZone._iRenderingServiceControl.playNextMediaItem(runParams, error, context, callback);
        };
        R_RenderingController.prototype.prepareAndPlayNextMediaItem = function (zoneId, prepareParams, stopParams, runParams, error, context, callback) {
            var renderingZone = this._aRenderingZonePool.getRenderingZoneByZoneId(zoneId);
            renderingZone._iRenderingServiceControl.prepareAndPlayNextMediaItem(prepareParams, stopParams, runParams, error, context, callback);
        };
        R_RenderingController.prototype.stopCrtMediaItem = function (zoneId, stopParams, error, context, callback) {
            var renderingZone = this._aRenderingZonePool.getRenderingZoneByZoneId(zoneId);
            renderingZone._iRenderingServiceControl.stopCrtMediaItem(stopParams, error, context, callback);
        };
        return R_RenderingController;
    }(rmGeneral.rm_general.R_Service));
    rm_coreservices.R_RenderingController = R_RenderingController;
})(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
//# sourceMappingURL=R_RenderingController.js.map