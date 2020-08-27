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
var rm_renderingservices;
(function (rm_renderingservices) {
    var RE_RenderParams_AllParameters = (function (_super) {
        __extends(RE_RenderParams_AllParameters, _super);
        function RE_RenderParams_AllParameters() {
            var _this = _super.call(this) || this;
            _this._isVisible = true;
            return _this;
        }
        RE_RenderParams_AllParameters.prototype.injectDependencies = function (aSrvContainer, aSrvLocator, aSrvLog, error) {
            _super.prototype.injectDependencies.call(this, aSrvContainer, aSrvLocator, aSrvLog, error);
            this._paramFileInfo = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
            if ((error != null) && (error.isError()))
                return 1;
            this._paramFileInfo.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);
            this._paramIdentification = this._aSrvLocator._iEntityCreation.createDefaultRenderParamsIdentification(error);
            if ((error != null) && (error.isError()))
                return 1;
            this._paramIdentification.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);
            this._paramItemPosAndSize = this._aSrvLocator._iEntityCreation.createDefaultRenderParamsItemPosAndSize(error);
            if ((error != null) && (error.isError()))
                return 1;
            this._paramItemPosAndSize.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);
            this._paramContainerPosSize = this._aSrvLocator._iEntityCreation.createDefaultRenderParamsContainerPosAndSize(error);
            if ((error != null) && (error.isError()))
                return 1;
            this._paramContainerPosSize.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);
            this._paramContainerAdjustedPosSize = this._aSrvLocator._iEntityCreation.createDefaultRenderParamsContainerPosAndSize(error);
            if ((error != null) && (error.isError()))
                return 1;
            this._paramContainerAdjustedPosSize.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);
            this._paramDuration = this._aSrvLocator._iEntityCreation.createDefaultRenderParamsDuration(error);
            if ((error != null) && (error.isError()))
                return 1;
            this._paramDuration.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);
            this._paramBackground = this._aSrvLocator._iEntityCreation.createDefaultRenderParamsBackground(error);
            if ((error != null) && (error.isError()))
                return 1;
            this._paramBackground.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);
            this._paramImage = this._aSrvLocator._iEntityCreation.createDefaultRenderParamsImage(error);
            if ((error != null) && (error.isError()))
                return 1;
            this._paramImage.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);
            this._paramWebImage = this._aSrvLocator._iEntityCreation.createDefaultRenderParamsWebImage(error);
            if ((error != null) && (error.isError()))
                return 1;
            this._paramWebImage.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);
            this._paramVideo = this._aSrvLocator._iEntityCreation.createDefaultRenderParamsVideo(error);
            if ((error != null) && (error.isError()))
                return 1;
            this._paramVideo.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);
            this._paramVideoStream = this._aSrvLocator._iEntityCreation.createDefaultRenderParamsVideoStream(error);
            if ((error != null) && (error.isError()))
                return 1;
            this._paramVideoStream.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);
            this._paramAudio = this._aSrvLocator._iEntityCreation.createDefaultRenderParamsAudio(error);
            if ((error != null) && (error.isError()))
                return 1;
            this._paramAudio.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);
            this._paramWebPage = this._aSrvLocator._iEntityCreation.createDefaultRenderParamsWebPage(error);
            if ((error != null) && (error.isError()))
                return 1;
            this._paramWebPage.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);
            this._paramHtmlTemplate = this._aSrvLocator._iEntityCreation.createDefaultRenderParamsHtmlTemplate(error);
            if ((error != null) && (error.isError()))
                return 1;
            this._paramHtmlTemplate.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);
            this._paramFillRect = this._aSrvLocator._iEntityCreation.createDefaultRenderParamsFillRect(error);
            if ((error != null) && (error.isError()))
                return 1;
            this._paramFillRect.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);
            return 0;
        };
        RE_RenderParams_AllParameters.prototype.isFree = function () {
            return this._isFree;
        };
        RE_RenderParams_AllParameters.prototype.setIsFree = function (isFree) {
            this._isFree = isFree;
            return true;
        };
        RE_RenderParams_AllParameters.prototype.isVisible = function () {
            return this._isVisible;
        };
        RE_RenderParams_AllParameters.prototype.setIsVisible = function (isVisible) {
            this._isVisible = isVisible;
        };
        RE_RenderParams_AllParameters.prototype.getParamFileInfo = function () {
            return this._paramFileInfo;
        };
        RE_RenderParams_AllParameters.prototype.getParamAudio = function () {
            return this._paramAudio;
        };
        RE_RenderParams_AllParameters.prototype.getParamBackground = function () {
            return this._paramBackground;
        };
        RE_RenderParams_AllParameters.prototype.getParamContainerPosSize = function () {
            return this._paramContainerPosSize;
        };
        RE_RenderParams_AllParameters.prototype.getParamContainerAdjustedPosSize = function () {
            return this._paramContainerAdjustedPosSize;
        };
        RE_RenderParams_AllParameters.prototype.getParamDuration = function () {
            return this._paramDuration;
        };
        RE_RenderParams_AllParameters.prototype.getParamHtmlTemplate = function () {
            return this._paramHtmlTemplate;
        };
        RE_RenderParams_AllParameters.prototype.getParamIdentification = function () {
            return this._paramIdentification;
        };
        RE_RenderParams_AllParameters.prototype.getParamImage = function () {
            return this._paramImage;
        };
        RE_RenderParams_AllParameters.prototype.getParamItemPosAndSize = function () {
            return this._paramItemPosAndSize;
        };
        RE_RenderParams_AllParameters.prototype.getParamVideo = function () {
            return this._paramVideo;
        };
        RE_RenderParams_AllParameters.prototype.getParamVideoStream = function () {
            return this._paramVideoStream;
        };
        RE_RenderParams_AllParameters.prototype.getParamWebImage = function () {
            return this._paramWebImage;
        };
        RE_RenderParams_AllParameters.prototype.getParamWebPage = function () {
            return this._paramWebPage;
        };
        RE_RenderParams_AllParameters.prototype.getParamFillRect = function () {
            return this._paramFillRect;
        };
        RE_RenderParams_AllParameters.prototype.reset = function () {
            this._paramAudio.reset();
            this._paramBackground.reset();
            this._paramContainerPosSize.reset();
            this._paramDuration.reset();
            this._paramHtmlTemplate.reset();
            this._paramIdentification.reset();
            this._paramImage.reset();
            this._paramItemPosAndSize.reset();
            this._paramVideo.reset();
            this._paramVideoStream.reset();
            this._paramWebImage.reset();
            this._paramWebPage.reset();
            this._paramFileInfo.reset();
            this._paramFillRect.reset();
        };
        RE_RenderParams_AllParameters.prototype.copy = function (src) {
            if (src == null)
                return 1;
            this._paramAudio.copy(src.getParamAudio());
            this._paramBackground.copy(src.getParamBackground());
            this._paramContainerPosSize.copy(src.getParamContainerPosSize());
            this._paramDuration.copy(src.getParamDuration());
            this._paramHtmlTemplate.copy(src.getParamHtmlTemplate());
            this._paramIdentification.copy(src.getParamIdentification());
            this._paramImage.copy(src.getParamImage());
            this._paramItemPosAndSize.copy(src.getParamItemPosAndSize());
            this._paramVideo.copy(src.getParamVideo());
            this._paramVideoStream.copy(src.getParamVideoStream());
            this._paramWebImage.copy(src.getParamWebImage());
            this._paramWebPage.copy(src.getParamWebPage());
            this._paramFileInfo.copy(src.getParamFileInfo());
            this._paramFillRect.copy(src.getParamFillRect());
            return 0;
        };
        return RE_RenderParams_AllParameters;
    }(rmGeneralEntity.rm_general.R_Entity));
    rm_renderingservices.RE_RenderParams_AllParameters = RE_RenderParams_AllParameters;
})(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
//# sourceMappingURL=RE_RenderParams_AllParameters.js.map