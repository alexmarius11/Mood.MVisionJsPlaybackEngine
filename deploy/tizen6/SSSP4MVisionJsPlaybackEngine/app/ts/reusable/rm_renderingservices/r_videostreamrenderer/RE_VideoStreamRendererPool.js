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
        var RE_VideoStreamRendererPool = /** @class */ (function (_super) {
            __extends(RE_VideoStreamRendererPool, _super);
            //---------------------------
            function RE_VideoStreamRendererPool() {
                var _this = _super.call(this) || this;
                _this._videoStreamRendererList = new Array();
                return _this;
            }
            //--------------------------------------------
            RE_VideoStreamRendererPool.prototype.initPool = function (nbVideoStreamRenderers, error) {
                var i = 0;
                var newVideoStreamRenderer = null;
                var errorNo = 1;
                for (i = 0; i < nbVideoStreamRenderers; i++) {
                    newVideoStreamRenderer = this._aSrvLocator._iServiceCreation.createDefaultService_VideoStreamRenderer(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, i, error);
                    if (error.isError()) {
                        errorNo = 1;
                        break;
                    }
                    newVideoStreamRenderer._iService.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);
                    this.addVideoStreamRenderer(newVideoStreamRenderer);
                }
                return errorNo;
            };
            //--------------------------
            RE_VideoStreamRendererPool.prototype.addVideoStreamRenderer = function (videoStreamRenderer) {
                this._videoStreamRendererList.push(videoStreamRenderer);
            };
            //--------------------------
            RE_VideoStreamRendererPool.prototype.reset = function () {
                var i = 0;
                for (i = 0; i < this._videoStreamRendererList.length; i++) {
                    this._videoStreamRendererList[i].reset();
                }
            };
            //------------
            RE_VideoStreamRendererPool.prototype.copy = function (src) {
                if (src == null)
                    return 1;
                return 0;
            };
            //-----------------------------
            RE_VideoStreamRendererPool.prototype.getVideoStreamRendererList = function () {
                return this._videoStreamRendererList;
            };
            //--------------------------
            RE_VideoStreamRendererPool.prototype.getFreeVideoStreamRenderer = function () {
                var freeRenderParams = null;
                var i = 0;
                for (i = 0; i < this._videoStreamRendererList.length; i++) {
                    if (this._videoStreamRendererList[i] == null)
                        continue;
                    if (!this._videoStreamRendererList[i].isFree())
                        continue;
                    if (!this._videoStreamRendererList[i].setIsFree(false))
                        continue;
                    freeRenderParams = this._videoStreamRendererList[i];
                    break;
                }
                return freeRenderParams;
            };
            //--------------------------
            RE_VideoStreamRendererPool.prototype.releaseVideoStreamRenderer = function (videoStreamRenderer) {
                if (videoStreamRenderer == null)
                    return false;
                videoStreamRenderer.setIsFree(false);
                return true;
            };
            return RE_VideoStreamRendererPool;
        }(rmGeneralEntity.rm_general.R_Entity));
        rm_renderingservices.RE_VideoStreamRendererPool = RE_VideoStreamRendererPool;
    })(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
});
//# sourceMappingURL=RE_VideoStreamRendererPool.js.map