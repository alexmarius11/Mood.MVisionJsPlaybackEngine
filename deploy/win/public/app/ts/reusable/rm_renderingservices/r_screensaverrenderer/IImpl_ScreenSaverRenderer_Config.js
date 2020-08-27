define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_renderingservices;
    (function (rm_renderingservices) {
        var IImpl_ScreenSaverRenderer_Config = /** @class */ (function () {
            //----------- constructor 
            function IImpl_ScreenSaverRenderer_Config(owner) {
                this._owner = owner;
            }
            //---------------------------------
            IImpl_ScreenSaverRenderer_Config.prototype.setHtmlZoneDiv = function (htmlZoneDiv) {
                return this._owner.setHtmlZoneDiv(htmlZoneDiv);
            };
            //-------------------------------
            IImpl_ScreenSaverRenderer_Config.prototype.getHtmlZoneDiv = function () {
                return this._owner.getHtmlZoneDiv();
            };
            //-------------------------------
            IImpl_ScreenSaverRenderer_Config.prototype.setHtmlImage = function (htmlImage) {
                return this._owner.setHtmlImage(htmlImage);
            };
            //------------------------------
            IImpl_ScreenSaverRenderer_Config.prototype.getHtmlImage = function () {
                return this._owner.getHtmlImage();
            };
            //-------------------------------
            IImpl_ScreenSaverRenderer_Config.prototype.setHtmlVideo = function (htmlVideo) {
                return this._owner.setHtmlVideo(htmlVideo);
            };
            //------------------------------
            IImpl_ScreenSaverRenderer_Config.prototype.getHtmlVideo = function () {
                return this._owner.getHtmlVideo();
            };
            //----------------------------------
            IImpl_ScreenSaverRenderer_Config.prototype.setScreenSaverConfig = function (aScreenSaverConfig) {
                return this._owner.setScreenSaverConfig(aScreenSaverConfig);
            };
            //-----------------------------
            IImpl_ScreenSaverRenderer_Config.prototype.getScreenSaverConfig = function () {
                return this._owner.getScreenSaverConfig();
            };
            return IImpl_ScreenSaverRenderer_Config;
        }());
        rm_renderingservices.IImpl_ScreenSaverRenderer_Config = IImpl_ScreenSaverRenderer_Config;
    })(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
});
//# sourceMappingURL=IImpl_ScreenSaverRenderer_Config.js.map