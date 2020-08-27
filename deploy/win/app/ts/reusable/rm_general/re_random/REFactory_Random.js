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
var rmGeneralRandom = require("../../../../../app/ts/reusable/rm_general/re_random/RE_Random");
var rmGeneralEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");
var rm_general;
(function (rm_general) {
    var REFactory_Random = (function (_super) {
        __extends(REFactory_Random, _super);
        function REFactory_Random() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        REFactory_Random.prototype.createEntity = function (entityName, error) {
            return new rmGeneralRandom.rm_general.RE_Random();
        };
        return REFactory_Random;
    }(rmGeneralEntityFactory.rm_general.RFactory_Entity));
    rm_general.REFactory_Random = REFactory_Random;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=REFactory_Random.js.map