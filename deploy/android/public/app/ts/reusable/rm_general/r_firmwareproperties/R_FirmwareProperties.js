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
        var R_FirmwareProperties = /** @class */ (function (_super) {
            __extends(R_FirmwareProperties, _super);
            //----------- constructor 
            function R_FirmwareProperties() {
                return _super.call(this) || this;
            }
            //----------------------
            R_FirmwareProperties.prototype.getFirmwareUrl = function () {
                return this._firmwareUrl;
            };
            //-----------------------
            R_FirmwareProperties.prototype.setFirmwareUrl = function (firmwareUrl) {
                this._firmwareUrl = firmwareUrl;
            };
            return R_FirmwareProperties;
        }(rmGeneralEntity.rm_general.R_Entity));
        rm_general.R_FirmwareProperties = R_FirmwareProperties;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=R_FirmwareProperties.js.map