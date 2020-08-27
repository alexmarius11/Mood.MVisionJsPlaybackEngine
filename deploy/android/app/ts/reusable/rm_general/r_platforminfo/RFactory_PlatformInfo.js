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
var rmGeneralPlatformInfo = require("../../../../../app/ts/reusable/rm_general/r_platforminfo/R_PlatformInfo");
var rmGeneralEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");
var rm_general;
(function (rm_general) {
    var RFactory_PlatformInfo = (function (_super) {
        __extends(RFactory_PlatformInfo, _super);
        function RFactory_PlatformInfo() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RFactory_PlatformInfo.prototype.createEntity = function (entityName, error) {
            return new rmGeneralPlatformInfo.rm_general.R_PlatformInfo();
        };
        return RFactory_PlatformInfo;
    }(rmGeneralEntityFactory.rm_general.RFactory_Entity));
    rm_general.RFactory_PlatformInfo = RFactory_PlatformInfo;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=RFactory_PlatformInfo.js.map