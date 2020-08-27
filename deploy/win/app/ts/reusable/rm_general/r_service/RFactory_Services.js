"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rmGeneral = require("../../../../../app/ts/reusable/rm_general/r_service/R_Services");
var rm_general;
(function (rm_general) {
    var RFactory_Properties = (function () {
        function RFactory_Properties() {
        }
        RFactory_Properties.prototype.createEntity = function (entityName, error) {
            return new rmGeneral.rm_general.R_Services();
        };
        return RFactory_Properties;
    }());
    rm_general.RFactory_Properties = RFactory_Properties;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=RFactory_Services.js.map