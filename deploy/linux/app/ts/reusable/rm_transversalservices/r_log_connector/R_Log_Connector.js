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
var rmTransversalServicesILogMain = require("../../../../../app/ts/reusable/rm_transversalservices/r_log_connector/IImpl_LogMain_LogConnector");
var rmTransversalServicesILogConfig = require("../../../../../app/ts/reusable/rm_transversalservices/r_log_connector/IImpl_LogConfig_LogConnector");
var rmTransversalServicesINotifyLogMain = require("../../../../../app/ts/reusable/rm_transversalservices/r_log_connector/IImpl_Log_notifyLogMain_LogConnector");
var rmTransversalServicesINotifyLogConfig = require("../../../../../app/ts/reusable/rm_transversalservices/r_log_connector/IImpl_Log_notifyLogConfig_LogConnector");
var rm_transversalservices;
(function (rm_transversalservices) {
    var R_Log_Connector = (function (_super) {
        __extends(R_Log_Connector, _super);
        function R_Log_Connector(aFactoryDescription, aServiceContainer, aLogService, error) {
            var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
            _this.LOGMSG_FATALERROR = 1;
            _this.LOGMSG_ERROR = 2;
            _this.LOGMSG_WARNING = 3;
            _this.LOGMSG_INFO = 4;
            _this.LOGMSG_TRACELEVEL1 = 5;
            _this.LOGMSG_TRACELEVEL2 = 6;
            _this.LOGMSG_TRACELEVEL3 = 7;
            _this._aTargetLogService = null;
            _this._aTargetLogConsumer = null;
            _this._iLogMain = new rmTransversalServicesILogMain.rm_transversalservices.IImpl_LogMain_LogConnector(_this);
            _this._iLogConfig = new rmTransversalServicesILogConfig.rm_transversalservices.IImpl_LogConfig_LogConnector(_this);
            _this._iNotifyLogMain = new rmTransversalServicesINotifyLogMain.rm_transversalservices.IImpl_Log_notifyLogMain_LogConnector(_this);
            _this._iNotifyLogConfig = new rmTransversalServicesINotifyLogConfig.rm_transversalservices.IImpl_Log_notifyLogConfig_LogConnector(_this);
            return _this;
        }
        R_Log_Connector.prototype.setTargetService = function (targetService) {
            this._aTargetLogService = targetService;
        };
        R_Log_Connector.prototype.setConsumerService = function (consumerService) {
            this._aTargetLogConsumer = consumerService;
        };
        return R_Log_Connector;
    }(rmGeneralService.rm_general.R_Service));
    rm_transversalservices.R_Log_Connector = R_Log_Connector;
})(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
//# sourceMappingURL=R_Log_Connector.js.map