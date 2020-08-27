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
        var RE_FillRectRendererPool = /** @class */ (function (_super) {
            __extends(RE_FillRectRendererPool, _super);
            //---------------------------
            function RE_FillRectRendererPool() {
                var _this = _super.call(this) || this;
                _this._fillrectRendererList = new Array();
                return _this;
            }
            //--------------------------------------------
            RE_FillRectRendererPool.prototype.initPool = function (nbFillRectRenderers, error) {
                var i = 0;
                var newFillRectRenderer = null;
                var errorNo = 1;
                for (i = 0; i < nbFillRectRenderers; i++) {
                    newFillRectRenderer = this._aSrvLocator._iServiceCreation.createDefaultService_FillRectRenderer(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, i, error);
                    if (error.isError()) {
                        errorNo = 1;
                        break;
                    }
                    newFillRectRenderer._iService.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);
                    this.addFillRectRenderer(newFillRectRenderer);
                }
                return errorNo;
            };
            //--------------------------
            RE_FillRectRendererPool.prototype.addFillRectRenderer = function (fillrectRenderer) {
                this._fillrectRendererList.push(fillrectRenderer);
            };
            //--------------------------
            RE_FillRectRendererPool.prototype.reset = function () {
                var i = 0;
                for (i = 0; i < this._fillrectRendererList.length; i++) {
                    this._fillrectRendererList[i].reset();
                }
            };
            //------------
            RE_FillRectRendererPool.prototype.copy = function (src) {
                if (src == null)
                    return 1;
                return 0;
            };
            //-----------------------------
            RE_FillRectRendererPool.prototype.getFillRectRendererList = function () {
                return this._fillrectRendererList;
            };
            //--------------------------
            RE_FillRectRendererPool.prototype.getFreeFillRectRenderer = function () {
                var freeRenderParams = null;
                var i = 0;
                for (i = 0; i < this._fillrectRendererList.length; i++) {
                    if (this._fillrectRendererList[i] == null)
                        continue;
                    if (!this._fillrectRendererList[i].isFree())
                        continue;
                    if (!this._fillrectRendererList[i].setIsFree(false))
                        continue;
                    freeRenderParams = this._fillrectRendererList[i];
                    break;
                }
                return freeRenderParams;
            };
            //--------------------------
            RE_FillRectRendererPool.prototype.releaseFillRectRenderer = function (fillrectRenderer) {
                if (fillrectRenderer == null)
                    return false;
                fillrectRenderer.setIsFree(false);
                return true;
            };
            return RE_FillRectRendererPool;
        }(rmGeneralEntity.rm_general.R_Entity));
        rm_renderingservices.RE_FillRectRendererPool = RE_FillRectRendererPool;
    })(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
});
//# sourceMappingURL=RE_FillRectRendererPool.js.map