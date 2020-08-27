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
    var RE_BackgroundRendererPool = (function (_super) {
        __extends(RE_BackgroundRendererPool, _super);
        function RE_BackgroundRendererPool() {
            var _this = _super.call(this) || this;
            _this._backgroundRendererList = new Array();
            return _this;
        }
        RE_BackgroundRendererPool.prototype.initPool = function (nbBackgroundRenderers, error) {
            var i = 0;
            var newBackgroundRenderer = null;
            var errorNo = 1;
            for (i = 0; i < nbBackgroundRenderers; i++) {
                newBackgroundRenderer = this._aSrvLocator._iServiceCreation.createDefaultService_BackgroundRenderer(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, i, error);
                if (error.isError()) {
                    errorNo = 1;
                    break;
                }
                newBackgroundRenderer._iService.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);
                this.addBackgroundRenderer(newBackgroundRenderer);
            }
            return errorNo;
        };
        RE_BackgroundRendererPool.prototype.addBackgroundRenderer = function (backgroundRenderer) {
            this._backgroundRendererList.push(backgroundRenderer);
        };
        RE_BackgroundRendererPool.prototype.reset = function () {
            var i = 0;
            for (i = 0; i < this._backgroundRendererList.length; i++) {
                this._backgroundRendererList[i].reset();
            }
        };
        RE_BackgroundRendererPool.prototype.copy = function (src) {
            if (src == null)
                return 1;
            return 0;
        };
        RE_BackgroundRendererPool.prototype.getBackgroundRendererList = function () {
            return this._backgroundRendererList;
        };
        RE_BackgroundRendererPool.prototype.getFreeBackgroundRenderer = function () {
            var freeRenderParams = null;
            var i = 0;
            for (i = 0; i < this._backgroundRendererList.length; i++) {
                if (this._backgroundRendererList[i] == null)
                    continue;
                if (!this._backgroundRendererList[i].isFree())
                    continue;
                if (!this._backgroundRendererList[i].setIsFree(false))
                    continue;
                freeRenderParams = this._backgroundRendererList[i];
                break;
            }
            return freeRenderParams;
        };
        RE_BackgroundRendererPool.prototype.releaseBackgroundRenderer = function (backgroundRenderer) {
            if (backgroundRenderer == null)
                return false;
            backgroundRenderer.setIsFree(false);
            return true;
        };
        return RE_BackgroundRendererPool;
    }(rmGeneralEntity.rm_general.R_Entity));
    rm_renderingservices.RE_BackgroundRendererPool = RE_BackgroundRendererPool;
})(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
//# sourceMappingURL=RE_BackgroundRendererPool.js.map