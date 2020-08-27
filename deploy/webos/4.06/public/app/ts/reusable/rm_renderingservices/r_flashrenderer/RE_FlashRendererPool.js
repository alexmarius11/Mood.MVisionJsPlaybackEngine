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
        var RE_FlashRendererPool = /** @class */ (function (_super) {
            __extends(RE_FlashRendererPool, _super);
            //---------------------------
            function RE_FlashRendererPool() {
                var _this = _super.call(this) || this;
                _this._flashRendererList = new Array();
                return _this;
            }
            //--------------------------------------------
            RE_FlashRendererPool.prototype.initPool = function (nbFlashRenderers, error) {
                var i = 0;
                var newFlashRenderer = null;
                var errorNo = 1;
                for (i = 0; i < nbFlashRenderers; i++) {
                    newFlashRenderer = this._aSrvLocator._iServiceCreation.createDefaultService_FlashRenderer(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, i, error);
                    if (error.isError()) {
                        errorNo = 1;
                        break;
                    }
                    newFlashRenderer._iService.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);
                    this.addFlashRenderer(newFlashRenderer);
                }
                return errorNo;
            };
            //--------------------------
            RE_FlashRendererPool.prototype.addFlashRenderer = function (flashRenderer) {
                this._flashRendererList.push(flashRenderer);
            };
            //--------------------------
            RE_FlashRendererPool.prototype.reset = function () {
                var i = 0;
                for (i = 0; i < this._flashRendererList.length; i++) {
                    this._flashRendererList[i].reset();
                }
            };
            //------------
            RE_FlashRendererPool.prototype.copy = function (src) {
                if (src == null)
                    return 1;
                return 0;
            };
            //-----------------------------
            RE_FlashRendererPool.prototype.getFlashRendererList = function () {
                return this._flashRendererList;
            };
            //--------------------------
            RE_FlashRendererPool.prototype.getFreeFlashRenderer = function () {
                var freeRenderParams = null;
                var i = 0;
                for (i = 0; i < this._flashRendererList.length; i++) {
                    if (this._flashRendererList[i] == null)
                        continue;
                    if (!this._flashRendererList[i].isFree())
                        continue;
                    if (!this._flashRendererList[i].setIsFree(false))
                        continue;
                    freeRenderParams = this._flashRendererList[i];
                    break;
                }
                return freeRenderParams;
            };
            //--------------------------
            RE_FlashRendererPool.prototype.releaseFlashRenderer = function (flashRenderer) {
                if (flashRenderer == null)
                    return false;
                flashRenderer.setIsFree(false);
                return true;
            };
            return RE_FlashRendererPool;
        }(rmGeneralEntity.rm_general.R_Entity));
        rm_renderingservices.RE_FlashRendererPool = RE_FlashRendererPool;
    })(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
});
//# sourceMappingURL=RE_FlashRendererPool.js.map