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
define(["require", "exports", "../../../../../app/ts/reusable/rm_renderingservices/r_logrenderer/IImpl_Log_notifyLogMain_LogConsumer_LogRenderer", "../../../../../app/ts/reusable/rm_renderingservices/r_logrenderer/IImpl_Log_notifyLogConfig_LogConsumer_LogRenderer", "../../../../../app/ts/reusable/rm_general/r_service/R_Service"], function (require, exports, rmTransversalServicesINotifyLogMain, rmTransversalServicesINotifyLogConfig, rmGeneralService) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_renderingservices;
    (function (rm_renderingservices) {
        var R_LogConsumer_LogRenderer = /** @class */ (function (_super) {
            __extends(R_LogConsumer_LogRenderer, _super);
            //----------- constructor 
            function R_LogConsumer_LogRenderer(aFactoryDescription, aServiceContainer, aLogService, error) {
                var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
                _this._aLogService = aLogService;
                _this._aLogRenderer = null;
                _this._iNotifyLogMain = new rmTransversalServicesINotifyLogMain.rm_transversalservices.IImpl_Log_notifyLogMain_LogConsumer_LogRenderer(_this);
                _this._iNotifyLogConfig = new rmTransversalServicesINotifyLogConfig.rm_transversalservices.IImpl_Log_notifyLogConfig_LogConsumer_LogRenderer(_this);
                return _this;
            }
            //--------------------------------------------
            R_LogConsumer_LogRenderer.prototype.setOwnerService = function (aOwnerService) {
                this._aOwnerService = aOwnerService;
                this._aLogRenderer = aOwnerService;
            };
            return R_LogConsumer_LogRenderer;
        }(rmGeneralService.rm_general.R_Service
        //extends  rmTransversalServicesLogConsumer.rm_transversalservices.R_Log_Consumer 
        ));
        rm_renderingservices.R_LogConsumer_LogRenderer = R_LogConsumer_LogRenderer;
    })(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
});
//# sourceMappingURL=R_LogConsumer_LogRenderer.js.map