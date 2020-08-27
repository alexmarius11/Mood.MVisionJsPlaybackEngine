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
define(["require", "exports", "../../../../../app/ts/reusable/rm_general/r_capturescreeninfo/R_CaptureScreenInfo", "../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity"], function (require, exports, rmGeneralCaptureScreenInfo, rmGeneralEntityFactory) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_general;
    (function (rm_general) {
        var RFactory_CaptureScreenInfo = /** @class */ (function (_super) {
            __extends(RFactory_CaptureScreenInfo, _super);
            function RFactory_CaptureScreenInfo() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            RFactory_CaptureScreenInfo.prototype.createEntity = function (entityName, error) {
                return new rmGeneralCaptureScreenInfo.rm_general.R_CaptureScreenInfo();
            };
            return RFactory_CaptureScreenInfo;
        }(rmGeneralEntityFactory.rm_general.RFactory_Entity));
        rm_general.RFactory_CaptureScreenInfo = RFactory_CaptureScreenInfo;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=RFactory_CaptureScreenInfo.js.map