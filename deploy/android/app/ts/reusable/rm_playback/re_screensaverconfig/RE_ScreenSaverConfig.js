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
var amMediaTypeEnum = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_MediaTypeEnum");
var amImageDisplayTypeEnum = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_ImageDisplayTypeEnum");
var rmGeneralEntity = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");
var rm_playback;
(function (rm_playback) {
    var RE_ScreenSaverConfig = (function (_super) {
        __extends(RE_ScreenSaverConfig, _super);
        function RE_ScreenSaverConfig() {
            var _this = _super.call(this) || this;
            _this._fileFullName = "";
            _this._urlFullName = "";
            _this._lastMediaInZone = true;
            _this._duration = 0;
            _this._mediaType = amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_None;
            _this._imageDisplayType = amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_None;
            return _this;
        }
        RE_ScreenSaverConfig.prototype.getFileFullName = function () {
            return this._fileFullName;
        };
        RE_ScreenSaverConfig.prototype.setFileFullName = function (fileFullName) {
            this._fileFullName = fileFullName;
            return 0;
        };
        RE_ScreenSaverConfig.prototype.getUrlFullName = function () {
            return this._urlFullName;
        };
        RE_ScreenSaverConfig.prototype.setUrlFullName = function (urlFullName) {
            this._urlFullName = urlFullName;
            return 0;
        };
        RE_ScreenSaverConfig.prototype.getLastMediaInZone = function () {
            return this._lastMediaInZone;
        };
        RE_ScreenSaverConfig.prototype.setLastMediaInZone = function (lastMediaInZone) {
            this._lastMediaInZone = lastMediaInZone;
            return 0;
        };
        RE_ScreenSaverConfig.prototype.setLastMediaInZoneFromString = function (strLastMediaInZone) {
            if ((strLastMediaInZone == null) || (strLastMediaInZone == "")) {
                this._lastMediaInZone = false;
                return 1;
            }
            if ((strLastMediaInZone == "false") || (strLastMediaInZone == "False") || (strLastMediaInZone == "FALSE")) {
                this._lastMediaInZone = false;
                return 0;
            }
            if ((strLastMediaInZone == "true") || (strLastMediaInZone == "True") || (strLastMediaInZone == "TRUE")) {
                this._lastMediaInZone = true;
                return 0;
            }
            this._lastMediaInZone = false;
            return 1;
        };
        RE_ScreenSaverConfig.prototype.getMediaType = function () {
            return this._mediaType;
        };
        RE_ScreenSaverConfig.prototype.setMediaType = function (mediaType) {
            this._mediaType = mediaType;
            return 0;
        };
        RE_ScreenSaverConfig.prototype.setMediaTypeFromConfigString = function (strMediaTypeFromConfigString) {
            if ((strMediaTypeFromConfigString == null) || (strMediaTypeFromConfigString == "")) {
                this._mediaType = amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_None;
                return 1;
            }
            if ((strMediaTypeFromConfigString == "form_flashplayer") || (strMediaTypeFromConfigString == "Form_FlashPlayer") || (strMediaTypeFromConfigString == "FORM_FLASHPLAYER")) {
                this._mediaType = this._mediaType = amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Flash;
                return 0;
            }
            if ((strMediaTypeFromConfigString == "form_imageplayer") || (strMediaTypeFromConfigString == "Form_ImagePlayer") || (strMediaTypeFromConfigString == "FORM_IMAGEPLAYER")) {
                this._mediaType = this._mediaType = amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Image;
                return 0;
            }
            if ((strMediaTypeFromConfigString == "form_videoplayer") || (strMediaTypeFromConfigString == "Form_VideoPlayer") || (strMediaTypeFromConfigString == "FORM_VIDEOPLAYER")) {
                this._mediaType = this._mediaType = amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Video;
                return 0;
            }
            this._mediaType = amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_None;
            return 1;
        };
        RE_ScreenSaverConfig.prototype.getDuration = function () {
            return this._duration;
        };
        RE_ScreenSaverConfig.prototype.setDuration = function (duration) {
            this._duration = duration;
            return 0;
        };
        RE_ScreenSaverConfig.prototype.setDurationFromString = function (strDuration) {
            try {
                this._duration = parseInt(strDuration);
            }
            catch (e) {
                this._duration = 0;
                return 1;
            }
            return 0;
        };
        RE_ScreenSaverConfig.prototype.getImageDisplayType = function () {
            return this._imageDisplayType;
        };
        RE_ScreenSaverConfig.prototype.setImageDisplayType = function (imageDisplayType) {
            this._imageDisplayType = imageDisplayType;
            return 0;
        };
        RE_ScreenSaverConfig.prototype.setImageDisplayTypeFromConfigString = function (strImageDisplayTypeFromConfigString) {
            if ((strImageDisplayTypeFromConfigString == null) || (strImageDisplayTypeFromConfigString == "")) {
                this._imageDisplayType = amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_None;
                return 1;
            }
            if ((strImageDisplayTypeFromConfigString == "center") || (strImageDisplayTypeFromConfigString == "Center") || (strImageDisplayTypeFromConfigString == "CENTER")) {
                this._imageDisplayType = amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Center;
                return 0;
            }
            if ((strImageDisplayTypeFromConfigString == "stretch") || (strImageDisplayTypeFromConfigString == "Stretch") || (strImageDisplayTypeFromConfigString == "STRETCH")) {
                this._imageDisplayType = amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Stretch;
                return 0;
            }
            if ((strImageDisplayTypeFromConfigString == "fill") || (strImageDisplayTypeFromConfigString == "Fill") || (strImageDisplayTypeFromConfigString == "FILL")) {
                this._imageDisplayType = amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Fill;
                return 0;
            }
            if ((strImageDisplayTypeFromConfigString == "fit") || (strImageDisplayTypeFromConfigString == "Fit") || (strImageDisplayTypeFromConfigString == "FIT")) {
                this._imageDisplayType = amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Fit;
                return 0;
            }
            if ((strImageDisplayTypeFromConfigString == "normal") || (strImageDisplayTypeFromConfigString == "Normal") || (strImageDisplayTypeFromConfigString == "NORMAL")) {
                this._imageDisplayType = amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Normal;
                return 0;
            }
            this._imageDisplayType = amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_None;
            return 1;
        };
        return RE_ScreenSaverConfig;
    }(rmGeneralEntity.rm_general.R_Entity));
    rm_playback.RE_ScreenSaverConfig = RE_ScreenSaverConfig;
})(rm_playback = exports.rm_playback || (exports.rm_playback = {}));
//# sourceMappingURL=RE_ScreenSaverConfig.js.map