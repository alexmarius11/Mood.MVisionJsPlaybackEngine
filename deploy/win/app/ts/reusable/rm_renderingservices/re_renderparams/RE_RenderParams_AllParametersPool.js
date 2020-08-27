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
    var RE_RenderParams_AllParametersPool = (function (_super) {
        __extends(RE_RenderParams_AllParametersPool, _super);
        function RE_RenderParams_AllParametersPool() {
            var _this = _super.call(this) || this;
            _this._renderParamsList = new Array();
            return _this;
        }
        RE_RenderParams_AllParametersPool.prototype.initPool = function (nbRenderParams, error) {
            var i = 0;
            var newRenderParams = null;
            var errorNo = 1;
            for (i = 0; i < this._renderParamsList.length; i++) {
                newRenderParams = this._aSrvLocator._iEntityCreation.createDefaultRenderParamsAllParameters(error);
                if (error.isError()) {
                    errorNo = 1;
                    break;
                }
                newRenderParams.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);
                this.addRenderParams(newRenderParams);
            }
            return errorNo;
        };
        RE_RenderParams_AllParametersPool.prototype.addRenderParams = function (renderParams) {
            this._renderParamsList.push(renderParams);
        };
        RE_RenderParams_AllParametersPool.prototype.reset = function () {
            var i = 0;
            for (i = 0; i < this._renderParamsList.length; i++) {
                this._renderParamsList[i].reset();
            }
        };
        RE_RenderParams_AllParametersPool.prototype.copy = function (src) {
            if (src == null)
                return 1;
            return 0;
        };
        RE_RenderParams_AllParametersPool.prototype.getAllParametersList = function () {
            return this._renderParamsList;
        };
        RE_RenderParams_AllParametersPool.prototype.getFreeRenderParams = function () {
            var freeRenderParams = null;
            var i = 0;
            for (i = 0; i < this._renderParamsList.length; i++) {
                if (this._renderParamsList[i] == null)
                    continue;
                if (!this._renderParamsList[i].isFree())
                    continue;
                if (!this._renderParamsList[i].setIsFree(false))
                    continue;
                freeRenderParams = this._renderParamsList[i];
                break;
            }
            return freeRenderParams;
        };
        RE_RenderParams_AllParametersPool.prototype.releaseRenderParams = function (renderParams) {
            if (renderParams == null)
                return false;
            renderParams.setIsFree(false);
            return true;
        };
        return RE_RenderParams_AllParametersPool;
    }(rmGeneralEntity.rm_general.R_Entity));
    rm_renderingservices.RE_RenderParams_AllParametersPool = RE_RenderParams_AllParametersPool;
})(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
//# sourceMappingURL=RE_RenderParams_AllParametersPool.js.map