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
define(["require", "exports", "../../../../../app/ts/reusable/rm_general/re_config/RE_Config"], function (require, exports, rmConfig) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_coreservices;
    (function (rm_coreservices) {
        var RE_RenderingControllerConfig = /** @class */ (function (_super) {
            __extends(RE_RenderingControllerConfig, _super);
            //------------------
            function RE_RenderingControllerConfig() {
                var _this = _super.call(this) || this;
                _this._renderingZones_initialPoolNb = 0;
                _this._imageRenderers_initialPoolNb = 0;
                _this._videoRenderers_initialPoolNb = 0;
                _this._videoStreamRenderers_initialPoolNb = 0;
                _this._htmlRenderers_initialPoolNb = 0;
                _this._htmlTemplateRenderers_initialPoolNb = 0;
                _this._fillRectRenderers_initialPoolNb = 0;
                _this._screenSaverRenderers_initialPoolNb = 0;
                _this._backgroundRenderers_initialPoolNb = 0;
                _this._tvHdmiPassThroughSrv_initialPoolNb = 0;
                _this._flashRenderers_initialPoolNb = 0;
                //----
                _this._htmlZones_initialPoolNb = 0;
                //----
                _this._rootDivId = "";
                //----
                _this._aScreenSaverConfig = null;
                return _this;
            }
            //------------------
            RE_RenderingControllerConfig.prototype.getInitialPoolNb_OfRenderingZones = function () {
                return this._renderingZones_initialPoolNb;
            };
            //------------------
            RE_RenderingControllerConfig.prototype.setInitialPoolNb_OfRenderingZones = function (nbRenderingZones) {
                this._renderingZones_initialPoolNb = nbRenderingZones;
            };
            //------------------
            RE_RenderingControllerConfig.prototype.getInitialPoolNb_OfImageRenderers = function () {
                return this._imageRenderers_initialPoolNb;
            };
            //------------------
            RE_RenderingControllerConfig.prototype.setInitialPoolNb_OfImageRenderers = function (nbImageRenderers) {
                this._imageRenderers_initialPoolNb = nbImageRenderers;
            };
            //------------------
            RE_RenderingControllerConfig.prototype.getInitialPoolNb_OfVideoRenderers = function () {
                return this._videoRenderers_initialPoolNb;
            };
            //------------------
            RE_RenderingControllerConfig.prototype.setInitialPoolNb_OfVideoRenderers = function (nbVideoRenderers) {
                this._videoRenderers_initialPoolNb = nbVideoRenderers;
            };
            //------------------
            RE_RenderingControllerConfig.prototype.getInitialPoolNb_OfVideoStreamRenderers = function () {
                return this._videoStreamRenderers_initialPoolNb;
            };
            //------------------
            RE_RenderingControllerConfig.prototype.setInitialPoolNb_OfVideoStreamRenderers = function (nbVideoStreamRenderers) {
                this._videoStreamRenderers_initialPoolNb = nbVideoStreamRenderers;
            };
            //------------------
            RE_RenderingControllerConfig.prototype.getInitialPoolNb_OfHtmlRenderers = function () {
                return this._htmlRenderers_initialPoolNb;
            };
            //------------------
            RE_RenderingControllerConfig.prototype.setInitialPoolNb_OfHtmlRenderers = function (nbHtmlRenderers) {
                this._htmlRenderers_initialPoolNb = nbHtmlRenderers;
            };
            //------------------
            RE_RenderingControllerConfig.prototype.getInitialPoolNb_OfHtmlTemplateRenderers = function () {
                return this._htmlTemplateRenderers_initialPoolNb;
            };
            //------------------
            RE_RenderingControllerConfig.prototype.setInitialPoolNb_OfHtmlTemplateRenderers = function (nbHtmlTemplateRenderers) {
                this._htmlTemplateRenderers_initialPoolNb = nbHtmlTemplateRenderers;
            };
            //------------------
            RE_RenderingControllerConfig.prototype.getInitialPoolNb_OfScreenSaverRenderers = function () {
                return this._screenSaverRenderers_initialPoolNb;
            };
            //------------------
            RE_RenderingControllerConfig.prototype.setInitialPoolNb_OfScreenSaverRenderers = function (nbScreenSaverRenderers) {
                this._screenSaverRenderers_initialPoolNb = nbScreenSaverRenderers;
            };
            //------------------
            RE_RenderingControllerConfig.prototype.getInitialPoolNb_OfFillRectRenderers = function () {
                return this._fillRectRenderers_initialPoolNb;
            };
            //------------------
            RE_RenderingControllerConfig.prototype.setInitialPoolNb_OfFillRectRenderers = function (nbFillRectRenderers) {
                this._fillRectRenderers_initialPoolNb = nbFillRectRenderers;
            };
            //------------------
            RE_RenderingControllerConfig.prototype.getInitialPoolNb_OfBackgroundRenderers = function () {
                return this._backgroundRenderers_initialPoolNb;
            };
            //------------------
            RE_RenderingControllerConfig.prototype.setInitialPoolNb_OfBackgroundRenderers = function (nbBackgroundRenderers) {
                this._backgroundRenderers_initialPoolNb = nbBackgroundRenderers;
            };
            //------------------
            RE_RenderingControllerConfig.prototype.getInitialPoolNb_OfFlashRenderers = function () {
                return this._flashRenderers_initialPoolNb;
            };
            //------------------
            RE_RenderingControllerConfig.prototype.setInitialPoolNb_OfFlashRenderers = function (nbFlashRenderers) {
                this._flashRenderers_initialPoolNb = nbFlashRenderers;
            };
            //------------------
            RE_RenderingControllerConfig.prototype.getInitialPoolNb_OfTvHdmiPassThroughSrv = function () {
                return this._tvHdmiPassThroughSrv_initialPoolNb;
            };
            //------------------
            RE_RenderingControllerConfig.prototype.setInitialPoolNb_OfTvHdmiPassThroughSrv = function (nbTvHdmiPassThroughSrv) {
                this._tvHdmiPassThroughSrv_initialPoolNb = nbTvHdmiPassThroughSrv;
            };
            //------------------------
            //  implementation setup
            // -----------------------
            //------------------
            RE_RenderingControllerConfig.prototype.getInitialPoolNb_OfHtmlZones = function () {
                return this._htmlZones_initialPoolNb;
            };
            //------------------
            RE_RenderingControllerConfig.prototype.setInitialPoolNb_OfHtmlZones = function (nbHtmlZones) {
                this._htmlZones_initialPoolNb = nbHtmlZones;
            };
            //---------------------------
            //  implementation of root div
            //----------------------------
            //------------------
            RE_RenderingControllerConfig.prototype.getRootDivId = function () {
                return this._rootDivId;
            };
            //------------------
            RE_RenderingControllerConfig.prototype.setRootDivId = function (rootDivId) {
                this._rootDivId = rootDivId;
            };
            //---------------------
            // screen saver config 
            //----------------------
            //-----------------------------------
            RE_RenderingControllerConfig.prototype.setScreenSaverConfig = function (aScreenSaverConfig) {
                this._aScreenSaverConfig = aScreenSaverConfig;
            };
            //-----------------------------------
            RE_RenderingControllerConfig.prototype.getScreenSaverConfig = function () {
                return this._aScreenSaverConfig;
            };
            return RE_RenderingControllerConfig;
        }(rmConfig.rm_general.RE_Config));
        rm_coreservices.RE_RenderingControllerConfig = RE_RenderingControllerConfig;
    })(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
});
//# sourceMappingURL=RE_RenderingControllerConfig.js.map