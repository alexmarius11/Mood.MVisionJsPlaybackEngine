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
    var RE_VideoRendererPool = (function (_super) {
        __extends(RE_VideoRendererPool, _super);
        function RE_VideoRendererPool() {
            var _this = _super.call(this) || this;
            _this._videoRendererList = new Array();
            return _this;
        }
        RE_VideoRendererPool.prototype.initPool = function (nbVideoRenderers, error) {
            var i = 0;
            var newVideoRenderer = null;
            var errorNo = 1;
            for (i = 0; i < nbVideoRenderers; i++) {
                newVideoRenderer = this._aSrvLocator._iServiceCreation.createDefaultService_VideoRenderer(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, i, error);
                if (error.isError()) {
                    errorNo = 1;
                    break;
                }
                newVideoRenderer._iService.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);
                this.addVideoRenderer(newVideoRenderer);
            }
            return errorNo;
        };
        RE_VideoRendererPool.prototype.addVideoRenderer = function (videoRenderer) {
            this._videoRendererList.push(videoRenderer);
        };
        RE_VideoRendererPool.prototype.reset = function () {
            var i = 0;
            for (i = 0; i < this._videoRendererList.length; i++) {
                this._videoRendererList[i].reset();
            }
        };
        RE_VideoRendererPool.prototype.copy = function (src) {
            if (src == null)
                return 1;
            return 0;
        };
        RE_VideoRendererPool.prototype.getVideoRendererList = function () {
            return this._videoRendererList;
        };
        RE_VideoRendererPool.prototype.getFreeVideoRenderer = function () {
            var freeRenderParams = null;
            var i = 0;
            for (i = 0; i < this._videoRendererList.length; i++) {
                if (this._videoRendererList[i] == null)
                    continue;
                if (!this._videoRendererList[i].isFree())
                    continue;
                if (!this._videoRendererList[i].setIsFree(false))
                    continue;
                freeRenderParams = this._videoRendererList[i];
                break;
            }
            return freeRenderParams;
        };
        RE_VideoRendererPool.prototype.releaseVideoRenderer = function (videoRenderer) {
            if (videoRenderer == null)
                return false;
            videoRenderer.setIsFree(false);
            return true;
        };
        return RE_VideoRendererPool;
    }(rmGeneralEntity.rm_general.R_Entity));
    rm_renderingservices.RE_VideoRendererPool = RE_VideoRendererPool;
})(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
//# sourceMappingURL=RE_VideoRendererPool.js.map