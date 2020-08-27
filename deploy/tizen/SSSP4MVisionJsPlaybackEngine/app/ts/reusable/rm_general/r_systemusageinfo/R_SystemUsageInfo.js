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
        var R_SystemUsageInfo = /** @class */ (function (_super) {
            __extends(R_SystemUsageInfo, _super);
            //--- properties
            //----------- constructor 
            function R_SystemUsageInfo() {
                return _super.call(this) || this;
            }
            return R_SystemUsageInfo;
        }(rmGeneralEntity.rm_general.R_Entity));
        rm_general.R_SystemUsageInfo = R_SystemUsageInfo;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=R_SystemUsageInfo.js.map