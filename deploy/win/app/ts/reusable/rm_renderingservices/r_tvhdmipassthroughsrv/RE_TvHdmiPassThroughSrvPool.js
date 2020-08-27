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
    var RE_TvHdmiPassThroughSrvPool = (function (_super) {
        __extends(RE_TvHdmiPassThroughSrvPool, _super);
        function RE_TvHdmiPassThroughSrvPool() {
            var _this = _super.call(this) || this;
            _this._tvHdmiPassThroughSrvList = new Array();
            return _this;
        }
        RE_TvHdmiPassThroughSrvPool.prototype.initPool = function (nbTvHdmiPassThroughSrv, error) {
            var i = 0;
            var newTvHdmiPassThroughSrv = null;
            var errorNo = 1;
            for (i = 0; i < nbTvHdmiPassThroughSrv; i++) {
                newTvHdmiPassThroughSrv = this._aSrvLocator._iServiceCreation.createDefaultService_TvHdmiPassThroughSrv(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, i, error);
                if (error.isError()) {
                    errorNo = 1;
                    break;
                }
                newTvHdmiPassThroughSrv._iService.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);
                this.addTvHdmiPassThroughSrv(newTvHdmiPassThroughSrv);
            }
            return errorNo;
        };
        RE_TvHdmiPassThroughSrvPool.prototype.addTvHdmiPassThroughSrv = function (tvHdmiPassThroughSrv) {
            this._tvHdmiPassThroughSrvList.push(tvHdmiPassThroughSrv);
        };
        RE_TvHdmiPassThroughSrvPool.prototype.reset = function () {
            var i = 0;
            for (i = 0; i < this._tvHdmiPassThroughSrvList.length; i++) {
                this._tvHdmiPassThroughSrvList[i].reset();
            }
        };
        RE_TvHdmiPassThroughSrvPool.prototype.copy = function (src) {
            if (src == null)
                return 1;
            return 0;
        };
        RE_TvHdmiPassThroughSrvPool.prototype.getTvHdmiPassThroughSrvList = function () {
            return this._tvHdmiPassThroughSrvList;
        };
        RE_TvHdmiPassThroughSrvPool.prototype.getFreeTvHdmiPassThroughSrv = function () {
            var freeRenderParams = null;
            var i = 0;
            for (i = 0; i < this._tvHdmiPassThroughSrvList.length; i++) {
                if (this._tvHdmiPassThroughSrvList[i] == null)
                    continue;
                if (!this._tvHdmiPassThroughSrvList[i].isFree())
                    continue;
                if (!this._tvHdmiPassThroughSrvList[i].setIsFree(false))
                    continue;
                freeRenderParams = this._tvHdmiPassThroughSrvList[i];
                break;
            }
            return freeRenderParams;
        };
        RE_TvHdmiPassThroughSrvPool.prototype.releaseTvHdmiPassThroughSrv = function (tvHdmiPassThroughSrv) {
            if (tvHdmiPassThroughSrv == null)
                return false;
            tvHdmiPassThroughSrv.setIsFree(false);
            return true;
        };
        return RE_TvHdmiPassThroughSrvPool;
    }(rmGeneralEntity.rm_general.R_Entity));
    rm_renderingservices.RE_TvHdmiPassThroughSrvPool = RE_TvHdmiPassThroughSrvPool;
})(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
//# sourceMappingURL=RE_TvHdmiPassThroughSrvPool.js.map