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
    var RE_ImageRendererPool = (function (_super) {
        __extends(RE_ImageRendererPool, _super);
        function RE_ImageRendererPool() {
            var _this = _super.call(this) || this;
            _this._imageRendererList = new Array();
            return _this;
        }
        RE_ImageRendererPool.prototype.initPool = function (nbImageRenderers, error) {
            var i = 0;
            var newImageRenderer = null;
            var errorNo = 1;
            for (i = 0; i < nbImageRenderers; i++) {
                newImageRenderer = this._aSrvLocator._iServiceCreation.createDefaultService_ImageRenderer(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, i, error);
                if (error.isError()) {
                    errorNo = 1;
                    break;
                }
                newImageRenderer._iService.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);
                this.addImageRenderer(newImageRenderer);
            }
            return errorNo;
        };
        RE_ImageRendererPool.prototype.addImageRenderer = function (imageRenderer) {
            this._imageRendererList.push(imageRenderer);
        };
        RE_ImageRendererPool.prototype.reset = function () {
            var i = 0;
            for (i = 0; i < this._imageRendererList.length; i++) {
                this._imageRendererList[i].reset();
            }
        };
        RE_ImageRendererPool.prototype.copy = function (src) {
            if (src == null)
                return 1;
            return 0;
        };
        RE_ImageRendererPool.prototype.getImageRendererList = function () {
            return this._imageRendererList;
        };
        RE_ImageRendererPool.prototype.getFreeImageRenderer = function () {
            var freeRenderParams = null;
            var i = 0;
            for (i = 0; i < this._imageRendererList.length; i++) {
                if (this._imageRendererList[i] == null)
                    continue;
                if (!this._imageRendererList[i].isFree())
                    continue;
                if (!this._imageRendererList[i].setIsFree(false))
                    continue;
                freeRenderParams = this._imageRendererList[i];
                break;
            }
            return freeRenderParams;
        };
        RE_ImageRendererPool.prototype.releaseImageRenderer = function (imageRenderer) {
            if (imageRenderer == null)
                return false;
            imageRenderer.setIsFree(false);
            return true;
        };
        return RE_ImageRendererPool;
    }(rmGeneralEntity.rm_general.R_Entity));
    rm_renderingservices.RE_ImageRendererPool = RE_ImageRendererPool;
})(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
//# sourceMappingURL=RE_ImageRendererPool.js.map