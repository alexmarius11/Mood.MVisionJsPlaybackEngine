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
        var RE_ControlParams_Stop = /** @class */ (function (_super) {
            __extends(RE_ControlParams_Stop, _super);
            //-----------
            function RE_ControlParams_Stop() {
                var _this = _super.call(this) || this;
                _this._isFree = true;
                return _this;
            }
            //-----------------------
            RE_ControlParams_Stop.prototype.reset = function () {
                this._isFree = true;
            };
            //-----------------
            RE_ControlParams_Stop.prototype.isFree = function () {
                return this._isFree;
            };
            //-----------------------
            RE_ControlParams_Stop.prototype.setIsFree = function (isFree) {
                this._isFree = isFree;
                return true;
            };
            //-----------------------------------------------
            RE_ControlParams_Stop.prototype.copy = function (src) {
                return 0;
            };
            //------------------------------
            RE_ControlParams_Stop.prototype.injectDependencies = function (aSrvContainer, aSrvLocator, aSrvLog, error) {
                _super.prototype.injectDependencies.call(this, aSrvContainer, aSrvLocator, aSrvLog, error);
                return 0;
            };
            return RE_ControlParams_Stop;
        }(rmGeneralEntity.rm_general.R_Entity));
        rm_renderingservices.RE_ControlParams_Stop = RE_ControlParams_Stop;
    })(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
});
//# sourceMappingURL=RE_ControlParams_Stop.js.map