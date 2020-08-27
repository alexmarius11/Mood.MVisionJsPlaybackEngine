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
define(["require", "exports", "../../../../../app/ts/reusable/rm_nonrenderingservices/r_nonrenderingservice/R_NonRenderingService", "../../../../../app/ts/reusable/rm_nonrenderingservices/r_watchdogservice/IImpl_WatchDogService_R"], function (require, exports, rmNonRenderingServices, rmNonRenderingServices2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_nonrenderingservices;
    (function (rm_nonrenderingservices) {
        var R_WatchDogService = /** @class */ (function (_super) {
            __extends(R_WatchDogService, _super);
            //----------- constructor 
            function R_WatchDogService(aFactoryDescription, aServiceContainer, aLogService, error) {
                var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
                _this._iWatchDogService = new rmNonRenderingServices2.rm_nonrenderingservices.IImpl_WatchDogService_R(_this);
                _this._aLogService = aLogService;
                return _this;
            }
            return R_WatchDogService;
        }(rmNonRenderingServices.rm_nonrenderingservices.R_NonRenderingService));
        rm_nonrenderingservices.R_WatchDogService = R_WatchDogService;
    })(rm_nonrenderingservices = exports.rm_nonrenderingservices || (exports.rm_nonrenderingservices = {}));
});
//# sourceMappingURL=R_WatchDogService.js.map