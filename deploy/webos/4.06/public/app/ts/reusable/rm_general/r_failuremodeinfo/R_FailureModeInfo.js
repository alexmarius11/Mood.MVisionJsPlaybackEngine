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
    var rm_general;
    (function (rm_general) {
        var R_FailureModeInfo = /** @class */ (function (_super) {
            __extends(R_FailureModeInfo, _super);
            //----------- constructor 
            function R_FailureModeInfo() {
                var _this = _super.call(this) || this;
                _this._mode = "manual"; //"manual" "automatic"
                _this._arrInpuPriorities = new Array();
                return _this;
            }
            //-----------------------------
            R_FailureModeInfo.prototype.getMode = function () {
                return this._mode;
            };
            //-----------------------------
            R_FailureModeInfo.prototype.setMode = function (mode) {
                this._mode = mode;
            };
            //-----------------------------
            R_FailureModeInfo.prototype.setInputPriorities = function (arrInpuPriorities) {
                this._arrInpuPriorities = arrInpuPriorities;
            };
            //-----------------------------
            R_FailureModeInfo.prototype.getInputPriorities = function () {
                return this._arrInpuPriorities;
            };
            return R_FailureModeInfo;
        }(rmGeneralEntity.rm_general.R_Entity));
        rm_general.R_FailureModeInfo = R_FailureModeInfo;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=R_FailureModeInfo.js.map