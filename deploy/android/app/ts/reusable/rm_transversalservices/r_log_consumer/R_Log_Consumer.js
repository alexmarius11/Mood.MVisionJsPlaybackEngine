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
var rmGeneralService = require("../../../../../app/ts/reusable/rm_general/r_service/R_Service");
var rmTransversalServicesINotifyLogMain = require("../../../../../app/ts/reusable/rm_transversalservices/r_log_consumer/IImpl_Log_notifyLogMain_LogConsumer");
var rmTransversalServicesINotifyLogConfig = require("../../../../../app/ts/reusable/rm_transversalservices/r_log_consumer/IImpl_Log_notifyLogConfig_LogConsumer");
var rm_transversalservices;
(function (rm_transversalservices) {
    var R_Log_Consumer = (function (_super) {
        __extends(R_Log_Consumer, _super);
        function R_Log_Consumer(aFactoryDescription, aServiceContainer, aLogService, error) {
            var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
            _this._aTargetLogService = null;
            _this._iNotifyLogMain = new rmTransversalServicesINotifyLogMain.rm_transversalservices.IImpl_Log_notifyLogMain_LogConsumer(_this);
            _this._iNotifyLogConfig = new rmTransversalServicesINotifyLogConfig.rm_transversalservices.IImpl_Log_notifyLogConfig_LogConsumer(_this);
            return _this;
        }
        R_Log_Consumer.prototype.setTargetService = function (aTargetService) {
            this._aTargetService = aTargetService;
            this._aTargetLogService = aTargetService;
        };
        R_Log_Consumer.prototype.setConsumerService = function (aConsumerService) {
            this._aConsumerService = aConsumerService;
        };
        return R_Log_Consumer;
    }(rmGeneralService.rm_general.R_Service));
    rm_transversalservices.R_Log_Consumer = R_Log_Consumer;
})(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
//# sourceMappingURL=R_Log_Consumer.js.map