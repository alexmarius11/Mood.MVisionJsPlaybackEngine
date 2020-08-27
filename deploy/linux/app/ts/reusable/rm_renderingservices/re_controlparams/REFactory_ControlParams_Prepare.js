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
var rmControlParamsPrepare = require("../../../../../app/ts/reusable/rm_renderingservices/re_controlparams/RE_ControlParams_Prepare");
var rmGeneralEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");
var rm_renderingservices;
(function (rm_renderingservices) {
    var RFactory_ControlParams_Prepare = (function (_super) {
        __extends(RFactory_ControlParams_Prepare, _super);
        function RFactory_ControlParams_Prepare() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RFactory_ControlParams_Prepare.prototype.createEntity = function (entityName, error) {
            return new rmControlParamsPrepare.rm_renderingservices.RE_ControlParams_Prepare();
        };
        return RFactory_ControlParams_Prepare;
    }(rmGeneralEntityFactory.rm_general.RFactory_Entity));
    rm_renderingservices.RFactory_ControlParams_Prepare = RFactory_ControlParams_Prepare;
})(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
//# sourceMappingURL=REFactory_ControlParams_Prepare.js.map