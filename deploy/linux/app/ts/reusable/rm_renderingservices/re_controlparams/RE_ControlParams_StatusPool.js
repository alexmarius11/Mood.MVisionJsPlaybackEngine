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
    var RE_ControlParams_StatusPool = (function (_super) {
        __extends(RE_ControlParams_StatusPool, _super);
        function RE_ControlParams_StatusPool() {
            var _this = _super.call(this) || this;
            _this._statusParamsList = new Array();
            return _this;
        }
        RE_ControlParams_StatusPool.prototype.initPool = function (nbControlStatusParams, error) {
            var i = 0;
            var newStatusParams = null;
            var errorNo = 1;
            for (i = 0; i < nbControlStatusParams; i++) {
                newStatusParams = this._aSrvLocator._iEntityCreation.createDefaultControlStatusParams(error);
                if (error.isError()) {
                    errorNo = 1;
                    break;
                }
                newStatusParams.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);
                this.addStatusParams(newStatusParams);
            }
            return errorNo;
        };
        RE_ControlParams_StatusPool.prototype.addStatusParams = function (statusParams) {
            this._statusParamsList.push(statusParams);
            return 0;
        };
        RE_ControlParams_StatusPool.prototype.reset = function () {
            var i = 0;
            for (i = 0; i < this._statusParamsList.length; i++) {
                this._statusParamsList[i].reset();
            }
        };
        RE_ControlParams_StatusPool.prototype.copy = function (src) {
            if (src == null)
                return 1;
            return 0;
        };
        RE_ControlParams_StatusPool.prototype.getStatusParamsList = function () {
            return this._statusParamsList;
        };
        RE_ControlParams_StatusPool.prototype.getFreeStatusParams = function () {
            var freeStatusParams = null;
            var i = 0;
            for (i = 0; i < this._statusParamsList.length; i++) {
                if (this._statusParamsList[i] == null)
                    continue;
                if (!this._statusParamsList[i].isFree())
                    continue;
                if (!this._statusParamsList[i].setIsFree(false))
                    continue;
                freeStatusParams = this._statusParamsList[i];
                break;
            }
            return freeStatusParams;
        };
        RE_ControlParams_StatusPool.prototype.releaseStatusParams = function (statusParams) {
            if (statusParams == null)
                return false;
            statusParams.setIsFree(false);
            return true;
        };
        return RE_ControlParams_StatusPool;
    }(rmGeneralEntity.rm_general.R_Entity));
    rm_renderingservices.RE_ControlParams_StatusPool = RE_ControlParams_StatusPool;
})(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
//# sourceMappingURL=RE_ControlParams_StatusPool.js.map