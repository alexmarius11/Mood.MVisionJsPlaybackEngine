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
define(["require", "exports", "../../../../../app/ts/reusable/rm_general/r_firmwareproperties/R_FirmwareProperties", "../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity"], function (require, exports, rmGeneralFirmwareProperties, rmGeneralEntityFactory) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_general;
    (function (rm_general) {
        var RFactory_FirmwareProperties = /** @class */ (function (_super) {
            __extends(RFactory_FirmwareProperties, _super);
            function RFactory_FirmwareProperties() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            RFactory_FirmwareProperties.prototype.createEntity = function (entityName, error) {
                return new rmGeneralFirmwareProperties.rm_general.R_FirmwareProperties();
            };
            return RFactory_FirmwareProperties;
        }(rmGeneralEntityFactory.rm_general.RFactory_Entity));
        rm_general.RFactory_FirmwareProperties = RFactory_FirmwareProperties;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=RFactory_FirmwareProperties.js.map