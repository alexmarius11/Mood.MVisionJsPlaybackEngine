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
define(["require", "exports", "../../../../../app/ts/reusable/rm_renderingservices/re_renderparams/RE_RenderParams_Video", "../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity"], function (require, exports, rmRenderParametersVideo, rmGeneralEntityFactory) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_renderingservices;
    (function (rm_renderingservices) {
        var RFactory_RenderParameters_Video = /** @class */ (function (_super) {
            __extends(RFactory_RenderParameters_Video, _super);
            function RFactory_RenderParameters_Video() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            RFactory_RenderParameters_Video.prototype.createEntity = function (entityName, error) {
                return new rmRenderParametersVideo.rm_renderingservices.RE_RenderParams_Video();
            };
            return RFactory_RenderParameters_Video;
        }(rmGeneralEntityFactory.rm_general.RFactory_Entity));
        rm_renderingservices.RFactory_RenderParameters_Video = RFactory_RenderParameters_Video;
    })(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
});
//# sourceMappingURL=REFactory_RenderParams_Video.js.map