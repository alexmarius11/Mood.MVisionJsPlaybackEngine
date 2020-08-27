define(["require", "exports", "../../../../../app/ts/reusable/rm_general/r_service/R_Services"], function (require, exports, rmGeneral) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_general;
    (function (rm_general) {
        var RFactory_Properties = /** @class */ (function () {
            function RFactory_Properties() {
            }
            RFactory_Properties.prototype.createEntity = function (entityName, error) {
                return new rmGeneral.rm_general.R_Services();
            };
            return RFactory_Properties;
        }());
        rm_general.RFactory_Properties = RFactory_Properties;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=RFactory_Services.js.map