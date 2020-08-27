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
define(["require", "exports", "../../../../../app/ts/reusable/rm_general/re_diffusion/RE_Diffusion", "../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity"], function (require, exports, rmGeneralDiffusion, rmGeneralEntityFactory) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_general;
    (function (rm_general) {
        var REFactory_Diffusion = /** @class */ (function (_super) {
            __extends(REFactory_Diffusion, _super);
            function REFactory_Diffusion() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            REFactory_Diffusion.prototype.createEntity = function (entityName, error) {
                return new rmGeneralDiffusion.rm_general.RE_Diffusion();
            };
            return REFactory_Diffusion;
        }(rmGeneralEntityFactory.rm_general.RFactory_Entity));
        rm_general.REFactory_Diffusion = REFactory_Diffusion;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=REFactory_Diffusion.js.map