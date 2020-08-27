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
var rmGeneralEntity = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");
var amImageDisplayTypeEnum = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_ImageDisplayTypeEnum");
var rm_renderingservices;
(function (rm_renderingservices) {
    var RE_RenderParams_Image = (function (_super) {
        __extends(RE_RenderParams_Image, _super);
        function RE_RenderParams_Image() {
            var _this = _super.call(this) || this;
            _this._displayType = amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Stretch;
            _this._imageNaturalWidth = 0;
            _this._imageNaturalHeight = 0;
            return _this;
        }
        RE_RenderParams_Image.prototype.reset = function () {
            this._displayType = amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Stretch;
        };
        RE_RenderParams_Image.prototype.setDisplayType = function (displayType) {
            this._displayType = displayType;
        };
        RE_RenderParams_Image.prototype.getDisplayType = function () {
            return this._displayType;
        };
        RE_RenderParams_Image.prototype.setDisplayTypeAsNumber = function (displayTypeAsNumber) {
            if (displayTypeAsNumber == null) {
                this._displayType = amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Stretch;
                return 0;
            }
            if (isNaN(displayTypeAsNumber)) {
                this._displayType = amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Stretch;
                return 0;
            }
            if (displayTypeAsNumber == 1) {
                this._displayType = amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Stretch;
                return 0;
            }
            if (displayTypeAsNumber == 2) {
                this._displayType = amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Fill;
                return 0;
            }
            if (displayTypeAsNumber == 3) {
                this._displayType = amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Fit;
                return 0;
            }
            if (displayTypeAsNumber == 4) {
                this._displayType = amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Center;
                return 0;
            }
            if (displayTypeAsNumber == 5) {
                this._displayType = amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Normal;
                return 0;
            }
            this._displayType = amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Stretch;
            return 1;
        };
        RE_RenderParams_Image.prototype.getDisplayTypeAsNumber = function () {
            return this._displayType;
        };
        RE_RenderParams_Image.prototype.setDisplayTypeAsString = function (displayTypeAsString) {
            if ((displayTypeAsString == "CENTER") || (displayTypeAsString == "Center") || (displayTypeAsString == "center")) {
                this._displayType = amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Center;
                return 0;
            }
            if ((displayTypeAsString == "FILL") || (displayTypeAsString == "Fill") || (displayTypeAsString == "fill")) {
                this._displayType = amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Fill;
                return 0;
            }
            if ((displayTypeAsString == "FIT") || (displayTypeAsString == "Fit") || (displayTypeAsString == "fit")) {
                this._displayType = amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Fit;
                return 0;
            }
            if ((displayTypeAsString == "STRETCH") || (displayTypeAsString == "Stretch") || (displayTypeAsString == "stretch")) {
                this._displayType = amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Stretch;
                return 0;
            }
            if ((displayTypeAsString == "NORMAL") || (displayTypeAsString == "Normal") || (displayTypeAsString == "normal")) {
                this._displayType = amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Normal;
                return 0;
            }
            return 1;
        };
        RE_RenderParams_Image.prototype.getDisplayTypeAsString = function () {
            if (this._displayType == amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Center)
                return "CENTER";
            if (this._displayType == amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Fill)
                return "FILL";
            if (this._displayType == amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Fit)
                return "FIT";
            if (this._displayType == amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Stretch)
                return "STRETCH";
            if (this._displayType == amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Normal)
                return "NORMAL";
            return "";
        };
        RE_RenderParams_Image.prototype.getImageNaturalWidth = function () {
            return this._imageNaturalWidth;
        };
        RE_RenderParams_Image.prototype.setImageNaturalWidth = function (imageNaturalWidth) {
            this._imageNaturalWidth = imageNaturalWidth;
        };
        RE_RenderParams_Image.prototype.setImageNaturalHeight = function (imageNaturalHeight) {
            this._imageNaturalHeight = imageNaturalHeight;
        };
        RE_RenderParams_Image.prototype.getImageNaturalHeight = function () {
            return this._imageNaturalHeight;
        };
        RE_RenderParams_Image.prototype.copy = function (src) {
            if (src == null)
                return 1;
            this._displayType = src.getDisplayType();
            this._imageNaturalWidth = src.getImageNaturalWidth();
            this._imageNaturalHeight = src.getImageNaturalHeight();
            return 0;
        };
        return RE_RenderParams_Image;
    }(rmGeneralEntity.rm_general.R_Entity));
    rm_renderingservices.RE_RenderParams_Image = RE_RenderParams_Image;
})(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
//# sourceMappingURL=RE_RenderParams_Image.js.map