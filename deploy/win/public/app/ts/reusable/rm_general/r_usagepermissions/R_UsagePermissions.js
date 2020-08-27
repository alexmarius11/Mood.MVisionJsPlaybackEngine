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
        var R_UsagePermissions = /** @class */ (function (_super) {
            __extends(R_UsagePermissions, _super);
            //----------- constructor 
            function R_UsagePermissions() {
                var _this = _super.call(this) || this;
                _this._strRemoteKeyOperationMode = "";
                _this._strLocalKeyOperationMode = "";
                return _this;
            }
            //--------------------------------
            R_UsagePermissions.prototype.getRemoteKeyOperationMode = function () {
                return this._strRemoteKeyOperationMode;
            };
            //--------------------------------
            R_UsagePermissions.prototype.setRemoteKeyOperationMode = function (strRemoteKeyOperationMode) {
                this._strRemoteKeyOperationMode = strRemoteKeyOperationMode;
            };
            //--------------------------------
            R_UsagePermissions.prototype.getLocalKeyOperationMode = function () {
                return this._strLocalKeyOperationMode;
            };
            //--------------------------------
            R_UsagePermissions.prototype.setLocalKeyOperationMode = function (strLocalKeyOperationMode) {
                this._strLocalKeyOperationMode = strLocalKeyOperationMode;
            };
            return R_UsagePermissions;
        }(rmGeneralEntity.rm_general.R_Entity));
        rm_general.R_UsagePermissions = R_UsagePermissions;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=R_UsagePermissions.js.map