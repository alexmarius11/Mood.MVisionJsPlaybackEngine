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
var rmNonRenderingServices = require("../../../../../app/ts/reusable/rm_nonrenderingservices/r_nonrenderingservice/R_NonRenderingService");
var rmNonRenderingServices2 = require("../../../../../app/ts/reusable/rm_nonrenderingservices/r_monitoringservice/IImpl_MonitoringService_R");
var rm_nonrenderingservices;
(function (rm_nonrenderingservices) {
    var R_MonitoringService = (function (_super) {
        __extends(R_MonitoringService, _super);
        function R_MonitoringService(aFactoryDescription, aServiceContainer, aLogService, error) {
            var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
            _this._iMonitoringService = new rmNonRenderingServices2.rm_nonrenderingservices.IImpl_MonitoringService_R(_this);
            _this._aLogService = aLogService;
            return _this;
        }
        return R_MonitoringService;
    }(rmNonRenderingServices.rm_nonrenderingservices.R_NonRenderingService));
    rm_nonrenderingservices.R_MonitoringService = R_MonitoringService;
})(rm_nonrenderingservices = exports.rm_nonrenderingservices || (exports.rm_nonrenderingservices = {}));
//# sourceMappingURL=R_MonitoringService.js.map