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
var rmGeneralEntity = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");
var rm_general;
(function (rm_general) {
    var R_Property = (function (_super) {
        __extends(R_Property, _super);
        function R_Property() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        R_Property.prototype.getName = function () {
            return this._name;
        };
        R_Property.prototype.getValue = function () {
            return this._value;
        };
        R_Property.prototype.setNameAndValue = function (name, value) {
            this._name = name;
            this._value = value;
        };
        R_Property.prototype.setName = function (name) {
            this._name = name;
        };
        R_Property.prototype.setValue = function (value) {
            this._value = value;
        };
        return R_Property;
    }(rmGeneralEntity.rm_general.R_Entity));
    rm_general.R_Property = R_Property;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=R_Property.js.map