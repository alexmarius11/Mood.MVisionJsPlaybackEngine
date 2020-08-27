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
    var R_FactoryDescription = (function (_super) {
        __extends(R_FactoryDescription, _super);
        function R_FactoryDescription() {
            var _this = _super.call(this) || this;
            _this._factoryName = "";
            _this._serviceName = "";
            _this._abstractName = "";
            _this._instanceName = "";
            return _this;
        }
        R_FactoryDescription.prototype.setNames = function (factoryName, serviceName, abstractName, instanceName) {
            this._factoryName = factoryName;
            this._serviceName = serviceName;
            this._abstractName = abstractName;
            this._instanceName = instanceName;
        };
        return R_FactoryDescription;
    }(rmGeneralEntity.rm_general.R_Entity));
    rm_general.R_FactoryDescription = R_FactoryDescription;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=R_FactoryDescription.js.map