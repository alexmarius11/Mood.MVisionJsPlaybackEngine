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
var rm_general;
(function (rm_general) {
    var R_Error = (function (_super) {
        __extends(R_Error, _super);
        function R_Error() {
            var _this = _super.call(this) || this;
            _this._id = 0;
            _this._msg = "";
            return _this;
        }
        R_Error.prototype.isError = function () {
            if (this._id == 0)
                return false;
            return true;
        };
        R_Error.prototype.setError = function (errId, errMsg) {
            this._id = errId;
            this._msg = errMsg;
        };
        R_Error.prototype.getErrId = function () {
            return this._id;
        };
        R_Error.prototype.getErrMsg = function () {
            return this._msg;
        };
        R_Error.prototype.setErrId = function (errId) {
            this._id = errId;
        };
        R_Error.prototype.setErrMsg = function (errMsg) {
            this._msg = errMsg;
        };
        return R_Error;
    }(rmGeneralEntity.rm_general.R_Entity));
    rm_general.R_Error = R_Error;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=R_Error.js.map