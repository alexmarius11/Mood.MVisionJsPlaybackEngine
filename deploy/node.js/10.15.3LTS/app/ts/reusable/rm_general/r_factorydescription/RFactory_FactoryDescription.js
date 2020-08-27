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
var rmGeneral4 = require("../../../../../app/ts/reusable/rm_general/r_factorydescription/R_FactoryDescription");
var rmGeneralEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");
var rm_general;
(function (rm_general) {
    var RFactory_FactoryDescription = (function (_super) {
        __extends(RFactory_FactoryDescription, _super);
        function RFactory_FactoryDescription() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RFactory_FactoryDescription.prototype.createEntity = function (entityName, error) {
            return new rmGeneral4.rm_general.R_FactoryDescription();
        };
        return RFactory_FactoryDescription;
    }(rmGeneralEntityFactory.rm_general.RFactory_Entity));
    rm_general.RFactory_FactoryDescription = RFactory_FactoryDescription;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=RFactory_FactoryDescription.js.map