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
define(["require", "exports", "../../../../../app/ts/reusable/rm_general/r_failuremodeinfo/R_FailureModeInfo", "../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity"], function (require, exports, rmGeneralFailureModeInfo, rmGeneralEntityFactory) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_general;
    (function (rm_general) {
        var RFactory_FailureModeInfo = /** @class */ (function (_super) {
            __extends(RFactory_FailureModeInfo, _super);
            function RFactory_FailureModeInfo() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            RFactory_FailureModeInfo.prototype.createEntity = function (entityName, error) {
                return new rmGeneralFailureModeInfo.rm_general.R_FailureModeInfo();
            };
            return RFactory_FailureModeInfo;
        }(rmGeneralEntityFactory.rm_general.RFactory_Entity));
        rm_general.RFactory_FailureModeInfo = RFactory_FailureModeInfo;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=RFactory_FailureModeInfo.js.map