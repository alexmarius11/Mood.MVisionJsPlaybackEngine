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
define(["require", "exports", "../../../../../app/ts/reusable/rm_renderingservices/re_htmlzone/RE_HtmlZone", "../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity"], function (require, exports, rmRenderingServicesHtmlZone, rmGeneralEntityFactory) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_renderingservices;
    (function (rm_renderingservices) {
        var REFactory_HtmlZone = /** @class */ (function (_super) {
            __extends(REFactory_HtmlZone, _super);
            function REFactory_HtmlZone() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            REFactory_HtmlZone.prototype.createEntity = function (entityName, error) {
                return new rmRenderingServicesHtmlZone.rm_renderingservices.RE_HtmlZone();
            };
            return REFactory_HtmlZone;
        }(rmGeneralEntityFactory.rm_general.RFactory_Entity));
        rm_renderingservices.REFactory_HtmlZone = REFactory_HtmlZone;
    })(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
});
//# sourceMappingURL=REFactory_HtmlZone.js.map