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
var rmHtmlZone = require("../../../../../app/ts/reusable/rm_renderingservices/re_htmlzone/RE_HtmlZone");
var rmGeneralEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");
var rm_renderingservices;
(function (rm_renderingservices) {
    var REFactory_HtmlZonePool = (function (_super) {
        __extends(REFactory_HtmlZonePool, _super);
        function REFactory_HtmlZonePool() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        REFactory_HtmlZonePool.prototype.createEntity = function (entityName, error) {
            return new rmHtmlZone.rm_renderingservices.RE_HtmlZone();
        };
        return REFactory_HtmlZonePool;
    }(rmGeneralEntityFactory.rm_general.RFactory_Entity));
    rm_renderingservices.REFactory_HtmlZonePool = REFactory_HtmlZonePool;
})(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
//# sourceMappingURL=REFactory_HtmlZonePool.js.map