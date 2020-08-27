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
var rmNonRenderingServices2 = require("../../../../../app/ts/reusable/rm_nonrenderingservices/r_nonrenderingservice/IImpl_NonRenderingService_R");
var rm_nonrenderingservices;
(function (rm_nonrenderingservices) {
    var R_NonRenderingService = (function (_super) {
        __extends(R_NonRenderingService, _super);
        function R_NonRenderingService(aFactoryDescription, aServiceContainer, aLogService, error) {
            var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
            _this._iNonRenderingService = new rmNonRenderingServices2.rm_nonrenderingservices.IImpl_NonRenderingService_R(_this);
            _this._aLogService = aLogService;
            return _this;
        }
        return R_NonRenderingService;
    }(rmGeneral.rm_general.R_Service));
    rm_nonrenderingservices.R_NonRenderingService = R_NonRenderingService;
})(rm_nonrenderingservices = exports.rm_nonrenderingservices || (exports.rm_nonrenderingservices = {}));
//# sourceMappingURL=R_NonRenderingService.js.map