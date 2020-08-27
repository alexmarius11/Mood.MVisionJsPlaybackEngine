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
        var RE_ControlParams_StopPool = /** @class */ (function (_super) {
            __extends(RE_ControlParams_StopPool, _super);
            //---------------------------
            function RE_ControlParams_StopPool() {
                var _this = _super.call(this) || this;
                _this._stopParamsList = new Array();
                return _this;
            }
            //--------------------------------------------
            RE_ControlParams_StopPool.prototype.initPool = function (nbControlStopParams, error) {
                var i = 0;
                var newStopParams = null;
                var errorNo = 1;
                for (i = 0; i < nbControlStopParams; i++) {
                    newStopParams = this._aSrvLocator._iEntityCreation.createDefaultControlStopParams(error);
                    if (error.isError()) {
                        errorNo = 1;
                        break;
                    }
                    newStopParams.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);
                    this.addStopParams(newStopParams);
                }
                return errorNo;
            };
            //--------------------------
            RE_ControlParams_StopPool.prototype.addStopParams = function (stopParams) {
                this._stopParamsList.push(stopParams);
                return 0;
            };
            //--------------------------
            RE_ControlParams_StopPool.prototype.reset = function () {
                var i = 0;
                for (i = 0; i < this._stopParamsList.length; i++) {
                    this._stopParamsList[i].reset();
                }
            };
            //------------
            RE_ControlParams_StopPool.prototype.copy = function (src) {
                if (src == null)
                    return 1;
                return 0;
            };
            //-----------------------------
            RE_ControlParams_StopPool.prototype.getStopParamsList = function () {
                return this._stopParamsList;
            };
            //--------------------------
            RE_ControlParams_StopPool.prototype.getFreeStopParams = function () {
                var freeStopParams = null;
                var i = 0;
                for (i = 0; i < this._stopParamsList.length; i++) {
                    if (this._stopParamsList[i] == null)
                        continue;
                    if (!this._stopParamsList[i].isFree())
                        continue;
                    if (!this._stopParamsList[i].setIsFree(false))
                        continue;
                    freeStopParams = this._stopParamsList[i];
                    break;
                }
                return freeStopParams;
            };
            //--------------------------
            RE_ControlParams_StopPool.prototype.releaseStopParams = function (stopParams) {
                if (stopParams == null)
                    return false;
                stopParams.setIsFree(false);
                return true;
            };
            return RE_ControlParams_StopPool;
        }(rmGeneralEntity.rm_general.R_Entity));
        rm_renderingservices.RE_ControlParams_StopPool = RE_ControlParams_StopPool;
    })(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
});
//# sourceMappingURL=RE_ControlParams_StopPool.js.map