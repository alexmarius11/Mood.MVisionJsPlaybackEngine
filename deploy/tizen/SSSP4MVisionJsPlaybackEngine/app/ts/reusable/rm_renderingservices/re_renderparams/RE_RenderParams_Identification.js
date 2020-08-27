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
define(["require", "exports", "../../../../../app/ts/reusable/rm_general/r_entity/R_Entity", "../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_MediaTypeEnum"], function (require, exports, rmGeneralEntity, amMediaTypeEnum) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_renderingservices;
    (function (rm_renderingservices) {
        var RE_RenderParams_Identification = /** @class */ (function (_super) {
            __extends(RE_RenderParams_Identification, _super);
            //--------------------------
            function RE_RenderParams_Identification() {
                var _this = _super.call(this) || this;
                _this._id = 0;
                _this._name = "";
                _this._mediaType = amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_None;
                return _this;
            }
            //--------------------------
            RE_RenderParams_Identification.prototype.reset = function () {
                this._id = 0;
                this._name = "";
                this._mediaType = 0;
            };
            //--------- 
            //---------------
            RE_RenderParams_Identification.prototype.setId = function (id) {
                this._id = id;
            };
            //---------------
            RE_RenderParams_Identification.prototype.getId = function () {
                return this._id;
            };
            //---------------
            RE_RenderParams_Identification.prototype.setName = function (name) {
                this._name = name;
            };
            //---------------
            RE_RenderParams_Identification.prototype.getName = function () {
                return this._name;
            };
            //------------
            RE_RenderParams_Identification.prototype.copy = function (src) {
                if (src == null)
                    return 1;
                this._id = src.getId();
                this._name = src.getName();
                this._mediaType = src.getMediaType();
                return 0;
            };
            //---------------
            RE_RenderParams_Identification.prototype.setMediaType = function (mediaType) {
                this._mediaType = mediaType;
            };
            //---------------
            RE_RenderParams_Identification.prototype.getMediaType = function () {
                return this._mediaType;
            };
            //---------------
            /*
              MediaType_None         = 0,
              MediaType_Image        = 1,
              MediaType_Video        = 2,
              MediaType_VideoStream  = 3,
              MediaType_Html         = 4,
              MediaType_HtmlTemplate = 5,
              MediaType_Rect         = 6,
              MediaType_ScreenSaver  = 7,
              MediaType_TvHdmiPassThrough = 8,
              MediaType_Background   = 9,
              MediaType_Flash        = 10
            */
            RE_RenderParams_Identification.prototype.setMediaTypeAsNumber = function (mediaTypeAsNumber) {
                if (mediaTypeAsNumber == 1) {
                    this._mediaType = amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Image;
                    return 0;
                }
                if (mediaTypeAsNumber == 2) {
                    this._mediaType = amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Video;
                    return 0;
                }
                if (mediaTypeAsNumber == 3) {
                    this._mediaType = amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_VideoStream;
                    return 0;
                }
                if (mediaTypeAsNumber == 4) {
                    this._mediaType = amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Html;
                    return 0;
                }
                if (mediaTypeAsNumber == 5) {
                    this._mediaType = amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_HtmlTemplate;
                    return 0;
                }
                if (mediaTypeAsNumber == 6) {
                    this._mediaType = amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Rect;
                    return 0;
                }
                if (mediaTypeAsNumber == 7) {
                    this._mediaType = amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_ScreenSaver;
                    return 0;
                }
                if (mediaTypeAsNumber == 8) {
                    this._mediaType = amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_TvHdmiPassThrough;
                    return 0;
                }
                if (mediaTypeAsNumber == 9) {
                    this._mediaType = amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Background;
                    return 0;
                }
                if (mediaTypeAsNumber == 10) {
                    this._mediaType = amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Flash;
                    return 0;
                }
                //this._mediaType = amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_None;
                return 1;
            };
            //---------------
            RE_RenderParams_Identification.prototype.getMediaTypeAsNumber = function () {
                return this._mediaType;
            };
            //---------------
            RE_RenderParams_Identification.prototype.setMediaTypeAsString = function (mediaTypeAsString) {
                if ((mediaTypeAsString == "IMAGE") || (mediaTypeAsString == "Image") || (mediaTypeAsString == "image")) {
                    this._mediaType = amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Image;
                    return 0;
                }
                if ((mediaTypeAsString == "VIDEO") || (mediaTypeAsString == "Video") || (mediaTypeAsString == "video")) {
                    this._mediaType = amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Video;
                    return 0;
                }
                if ((mediaTypeAsString == "VIDEOSTREAM") || (mediaTypeAsString == "VideoStream") || (mediaTypeAsString == "videostream")) {
                    this._mediaType = amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_VideoStream;
                    return 0;
                }
                if ((mediaTypeAsString == "HTML") || (mediaTypeAsString == "Html") || (mediaTypeAsString == "html")) {
                    this._mediaType = amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Html;
                    return 0;
                }
                if ((mediaTypeAsString == "HTMLTEMPLATE") || (mediaTypeAsString == "HtmlTemplate") || (mediaTypeAsString == "htmltemplate")) {
                    this._mediaType = amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_HtmlTemplate;
                    return 0;
                }
                if ((mediaTypeAsString == "RECT") || (mediaTypeAsString == "Rect") || (mediaTypeAsString == "rect")) {
                    this._mediaType = amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Rect;
                    return 0;
                }
                if ((mediaTypeAsString == "SCREENSAVER") || (mediaTypeAsString == "ScreenSaver") || (mediaTypeAsString == "screensaver")) {
                    this._mediaType = amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_ScreenSaver;
                    return 0;
                }
                if ((mediaTypeAsString == "BACKGROUND") || (mediaTypeAsString == "Background") || (mediaTypeAsString == "background")) {
                    this._mediaType = amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Background;
                    return 0;
                }
                if ((mediaTypeAsString == "TVHDMIPASSTHROUGH") || (mediaTypeAsString == "TvHdmiPassThrough") || (mediaTypeAsString == "tvhdmipassthrough")) {
                    this._mediaType = amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_TvHdmiPassThrough;
                    return 0;
                }
                if ((mediaTypeAsString == "FLASH") || (mediaTypeAsString == "Flash") || (mediaTypeAsString == "flash")) {
                    this._mediaType = amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Flash;
                    return 0;
                }
                return 1;
            };
            //---------------
            RE_RenderParams_Identification.prototype.getMediaTypeAsString = function () {
                if (this._mediaType == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Image)
                    return "IMAGE";
                if (this._mediaType == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Video)
                    return "VIDEO";
                if (this._mediaType == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_VideoStream)
                    return "VIDEOSTREAM";
                if (this._mediaType == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Html)
                    return "HTML";
                if (this._mediaType == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_HtmlTemplate)
                    return "HTMLTEMPLATE";
                if (this._mediaType == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Rect)
                    return "RECT";
                if (this._mediaType == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_ScreenSaver)
                    return "SCREENSAVER";
                if (this._mediaType == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Background)
                    return "BACKGROUND";
                if (this._mediaType == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_TvHdmiPassThrough)
                    return "TVHDMIPASSTHROUGH";
                if (this._mediaType == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Flash)
                    return "FLASH";
                return "";
            };
            return RE_RenderParams_Identification;
        }(rmGeneralEntity.rm_general.R_Entity));
        rm_renderingservices.RE_RenderParams_Identification = RE_RenderParams_Identification;
    })(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
});
//# sourceMappingURL=RE_RenderParams_Identification.js.map