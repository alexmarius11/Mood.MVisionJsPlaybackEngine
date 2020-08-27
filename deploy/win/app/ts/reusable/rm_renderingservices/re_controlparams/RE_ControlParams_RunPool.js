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
    var RE_ControlParams_RunPool = (function (_super) {
        __extends(RE_ControlParams_RunPool, _super);
        function RE_ControlParams_RunPool() {
            var _this = _super.call(this) || this;
            _this._runParamsList = new Array();
            return _this;
        }
        RE_ControlParams_RunPool.prototype.initPool = function (nbControlRunParams, error) {
            var i = 0;
            var newRunParams = null;
            var errorNo = 1;
            for (i = 0; i < nbControlRunParams; i++) {
                newRunParams = this._aSrvLocator._iEntityCreation.createDefaultControlRunParams(error);
                if (error.isError()) {
                    errorNo = 1;
                    break;
                }
                newRunParams.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);
                this.addRunParams(newRunParams);
            }
            return errorNo;
        };
        RE_ControlParams_RunPool.prototype.addRunParams = function (runParams) {
            this._runParamsList.push(runParams);
            return 0;
        };
        RE_ControlParams_RunPool.prototype.reset = function () {
            var i = 0;
            for (i = 0; i < this._runParamsList.length; i++) {
                this._runParamsList[i].reset();
            }
        };
        RE_ControlParams_RunPool.prototype.copy = function (src) {
            if (src == null)
                return 1;
            return 0;
        };
        RE_ControlParams_RunPool.prototype.getRunParamsList = function () {
            return this._runParamsList;
        };
        RE_ControlParams_RunPool.prototype.getFreeRunParams = function () {
            var freeRunParams = null;
            var i = 0;
            for (i = 0; i < this._runParamsList.length; i++) {
                if (this._runParamsList[i] == null)
                    continue;
                if (!this._runParamsList[i].isFree())
                    continue;
                if (!this._runParamsList[i].setIsFree(false))
                    continue;
                freeRunParams = this._runParamsList[i];
                break;
            }
            return freeRunParams;
        };
        RE_ControlParams_RunPool.prototype.releaseRunParams = function (runParams) {
            if (runParams == null)
                return false;
            runParams.setIsFree(false);
            return true;
        };
        return RE_ControlParams_RunPool;
    }(rmGeneralEntity.rm_general.R_Entity));
    rm_renderingservices.RE_ControlParams_RunPool = RE_ControlParams_RunPool;
})(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
//# sourceMappingURL=RE_ControlParams_RunPool.js.map