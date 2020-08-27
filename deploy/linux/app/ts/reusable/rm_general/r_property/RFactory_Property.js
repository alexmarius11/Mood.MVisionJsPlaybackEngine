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
var rmGeneral4 = require("../../../../../app/ts/reusable/rm_general/r_property/R_Property");
var rmGeneralEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");
var rm_general;
(function (rm_general) {
    var RFactory_Property = (function (_super) {
        __extends(RFactory_Property, _super);
        function RFactory_Property() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RFactory_Property.prototype.createEntity = function (entityName, error) {
            return new rmGeneral4.rm_general.R_Property();
        };
        return RFactory_Property;
    }(rmGeneralEntityFactory.rm_general.RFactory_Entity));
    rm_general.RFactory_Property = RFactory_Property;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=RFactory_Property.js.map