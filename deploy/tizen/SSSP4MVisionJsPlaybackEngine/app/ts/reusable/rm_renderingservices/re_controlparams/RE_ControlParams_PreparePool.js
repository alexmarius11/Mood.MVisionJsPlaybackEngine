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
        var RE_ControlParams_PreparePool = /** @class */ (function (_super) {
            __extends(RE_ControlParams_PreparePool, _super);
            //---------------------------
            function RE_ControlParams_PreparePool() {
                var _this = _super.call(this) || this;
                _this._prepareParamsList = new Array();
                return _this;
            }
            //--------------------------------------------
            RE_ControlParams_PreparePool.prototype.initPool = function (nbControlPrepareParams, error) {
                var i = 0;
                var newPrepareParams = null;
                var errorNo = 1;
                for (i = 0; i < nbControlPrepareParams; i++) {
                    newPrepareParams = this._aSrvLocator._iEntityCreation.createDefaultControlPrepareParams(error);
                    if (error.isError()) {
                        errorNo = 1;
                        break;
                    }
                    newPrepareParams.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);
                    this.addPrepareParams(newPrepareParams);
                }
                return errorNo;
            };
            //--------------------------
            RE_ControlParams_PreparePool.prototype.addPrepareParams = function (prepareParams) {
                this._prepareParamsList.push(prepareParams);
                return 0;
            };
            //--------------------------
            RE_ControlParams_PreparePool.prototype.reset = function () {
                var i = 0;
                for (i = 0; i < this._prepareParamsList.length; i++) {
                    this._prepareParamsList[i].reset();
                }
            };
            //------------
            RE_ControlParams_PreparePool.prototype.copy = function (src) {
                if (src == null)
                    return 1;
                return 0;
            };
            //-----------------------------
            RE_ControlParams_PreparePool.prototype.getPrepareParamsList = function () {
                return this._prepareParamsList;
            };
            //--------------------------
            RE_ControlParams_PreparePool.prototype.getFreePrepareParams = function () {
                var freePrepareParams = null;
                var i = 0;
                for (i = 0; i < this._prepareParamsList.length; i++) {
                    if (this._prepareParamsList[i] == null)
                        continue;
                    if (!this._prepareParamsList[i].isFree())
                        continue;
                    if (!this._prepareParamsList[i].setIsFree(false))
                        continue;
                    freePrepareParams = this._prepareParamsList[i];
                    break;
                }
                return freePrepareParams;
            };
            //--------------------------
            RE_ControlParams_PreparePool.prototype.releasePrepareParams = function (prepareParams) {
                if (prepareParams == null)
                    return false;
                prepareParams.setIsFree(true);
                return true;
            };
            return RE_ControlParams_PreparePool;
        }(rmGeneralEntity.rm_general.R_Entity));
        rm_renderingservices.RE_ControlParams_PreparePool = RE_ControlParams_PreparePool;
    })(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
});
//# sourceMappingURL=RE_ControlParams_PreparePool.js.map