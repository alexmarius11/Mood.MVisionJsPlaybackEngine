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
define(["require", "exports", "../../../../../app/ts/reusable/rm_general/r_beaconinfo/R_BeaconInfo", "../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity"], function (require, exports, rmGeneralBeaconInfo, rmGeneralEntityFactory) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_general;
    (function (rm_general) {
        var RFactory_BeaconInfo = /** @class */ (function (_super) {
            __extends(RFactory_BeaconInfo, _super);
            function RFactory_BeaconInfo() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            RFactory_BeaconInfo.prototype.createEntity = function (entityName, error) {
                return new rmGeneralBeaconInfo.rm_general.R_BeaconInfo();
            };
            return RFactory_BeaconInfo;
        }(rmGeneralEntityFactory.rm_general.RFactory_Entity));
        rm_general.RFactory_BeaconInfo = RFactory_BeaconInfo;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=RFactory_BeaconInfo.js.map