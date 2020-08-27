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
var rmGeneral = require("../../../../../app/ts/reusable/rm_general/r_service/R_Service");
var rmRenderingServices2 = require("../../../../../app/ts/reusable/rm_renderingservices/r_renderingservice/IImpl_RenderingService_R");
var rm_renderingservices;
(function (rm_renderingservices) {
    var R_RenderingService = (function (_super) {
        __extends(R_RenderingService, _super);
        function R_RenderingService(aFactoryDescription, aServiceContainer, aLogService, error) {
            var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
            _this._iRenderingService = new rmRenderingServices2.rm_renderingservices.IImpl_RenderingService_R(_this);
            return _this;
        }
        return R_RenderingService;
    }(rmGeneral.rm_general.R_Service));
    rm_renderingservices.R_RenderingService = R_RenderingService;
})(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
//# sourceMappingURL=R_RenderingService.js.map