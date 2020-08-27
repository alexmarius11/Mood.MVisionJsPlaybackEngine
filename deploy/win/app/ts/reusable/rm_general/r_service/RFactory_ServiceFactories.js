"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rmGeneralServiceFactories = require("../../../../../app/ts/reusable/rm_general/r_service/R_ServiceFactories");
var rm_general;
(function (rm_general) {
    var RFactory_ServiceFactories = (function () {
        function RFactory_ServiceFactories() {
        }
        RFactory_ServiceFactories.prototype.createEntity = function (entityName, error) {
            return new rmGeneralServiceFactories.rm_general.R_ServiceFactories();
        };
        return RFactory_ServiceFactories;
    }());
    rm_general.RFactory_ServiceFactories = RFactory_ServiceFactories;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=RFactory_ServiceFactories.js.map