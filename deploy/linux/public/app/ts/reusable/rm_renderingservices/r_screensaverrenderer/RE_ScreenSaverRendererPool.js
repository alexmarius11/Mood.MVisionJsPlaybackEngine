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
define(["require", "exports", "../../../../../app/ts/reusable/rm_general/r_entity/R_Entity"], function (require, exports, rmGeneralEntity) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_renderingservices;
    (function (rm_renderingservices) {
        var RE_ScreenSaverRendererPool = /** @class */ (function (_super) {
            __extends(RE_ScreenSaverRendererPool, _super);
            //---------------------------
            function RE_ScreenSaverRendererPool() {
                var _this = _super.call(this) || this;
                _this._screenSaverRendererList = new Array();
                return _this;
            }
            //--------------------------------------------
            RE_ScreenSaverRendererPool.prototype.initPool = function (nbScreenSaverRenderers, error) {
                var i = 0;
                var newScreenSaverRenderer = null;
                var errorNo = 1;
                for (i = 0; i < nbScreenSaverRenderers; i++) {
                    newScreenSaverRenderer = this._aSrvLocator._iServiceCreation.createDefaultService_ScreenSaverRenderer(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, i, error);
                    if (error.isError()) {
                        errorNo = 1;
                        break;
                    }
                    newScreenSaverRenderer._iService.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);
                    newScreenSaverRenderer._iScreenSaverRendererConfig.setScreenSaverConfig(this._aScreenSaverConfig);
                    this.addScreenSaverRenderer(newScreenSaverRenderer);
                }
                return errorNo;
            };
            //----------------------------------
            RE_ScreenSaverRendererPool.prototype.setScreenSaverConfig = function (aScreenSaverConfig) {
                this._aScreenSaverConfig = aScreenSaverConfig;
            };
            //-----------------------------
            RE_ScreenSaverRendererPool.prototype.getScreenSaverConfig = function () {
                return this._aScreenSaverConfig;
            };
            //--------------------------
            RE_ScreenSaverRendererPool.prototype.addScreenSaverRenderer = function (screenSaverRenderer) {
                this._screenSaverRendererList.push(screenSaverRenderer);
            };
            //--------------------------
            RE_ScreenSaverRendererPool.prototype.reset = function () {
                var i = 0;
                for (i = 0; i < this._screenSaverRendererList.length; i++) {
                    this._screenSaverRendererList[i].reset();
                }
            };
            //------------
            RE_ScreenSaverRendererPool.prototype.copy = function (src) {
                if (src == null)
                    return 1;
                return 0;
            };
            //-----------------------------
            RE_ScreenSaverRendererPool.prototype.getScreenSaverRendererList = function () {
                return this._screenSaverRendererList;
            };
            //--------------------------
            RE_ScreenSaverRendererPool.prototype.getFreeScreenSaverRenderer = function () {
                var freeRenderParams = null;
                var i = 0;
                for (i = 0; i < this._screenSaverRendererList.length; i++) {
                    if (this._screenSaverRendererList[i] == null)
                        continue;
                    if (!this._screenSaverRendererList[i].isFree())
                        continue;
                    if (!this._screenSaverRendererList[i].setIsFree(false))
                        continue;
                    freeRenderParams = this._screenSaverRendererList[i];
                    break;
                }
                return freeRenderParams;
            };
            //--------------------------
            RE_ScreenSaverRendererPool.prototype.releaseScreenSaverRenderer = function (screenSaverRenderer) {
                if (screenSaverRenderer == null)
                    return false;
                screenSaverRenderer.setIsFree(false);
                return true;
            };
            return RE_ScreenSaverRendererPool;
        }(rmGeneralEntity.rm_general.R_Entity));
        rm_renderingservices.RE_ScreenSaverRendererPool = RE_ScreenSaverRendererPool;
    })(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
});
//# sourceMappingURL=RE_ScreenSaverRendererPool.js.map