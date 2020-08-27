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
define(["require", "exports", "../../../../../app/ts/reusable/rm_general/r_service/R_Service", "../../../../../app/ts/reusable/rm_transversalservices/r_log_server/IImpl_RemoteService_LogServer", "../../../../../app/ts/reusable/rm_transversalservices/r_log_server/IImpl_LogMain_LogServer", "../../../../../app/ts/reusable/rm_transversalservices/r_log_server/IImpl_LogConfig_LogServer"], function (require, exports, rmGeneralService, rmTransversalServicesRemoteService, rmTransversalServicesILogMain, rmTransversalServicesILogConfig) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_transversalservices;
    (function (rm_transversalservices) {
        var R_Log_Server = /** @class */ (function (_super) {
            __extends(R_Log_Server, _super);
            function R_Log_Server(aFactoryDescription, aServiceContainer, aLogService, error) {
                var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
                //---------------- constants 
                _this.LOGMSG_FATALERROR = 1;
                _this.LOGMSG_ERROR = 2;
                _this.LOGMSG_WARNING = 3;
                _this.LOGMSG_INFO = 4;
                _this.LOGMSG_TRACELEVEL1 = 5;
                _this.LOGMSG_TRACELEVEL2 = 6;
                _this.LOGMSG_TRACELEVEL3 = 7;
                _this._iRemoteService = new rmTransversalServicesRemoteService.rm_transversalservices.IImpl_RemoteService_LogServer(_this);
                _this._iLogMain = new rmTransversalServicesILogMain.rm_transversalservices.IImpl_LogMain_LogServer(_this);
                _this._iLogConfig = new rmTransversalServicesILogConfig.rm_transversalservices.IImpl_LogConfig_LogServer(_this);
                return _this;
                //this._aLogService = aLogService;
            }
            //-----------------------------------------
            R_Log_Server.prototype.setTargetService = function (targetService) {
                this._aTargetLog = targetService;
            };
            return R_Log_Server;
        }(rmGeneralService.rm_general.R_Service));
        rm_transversalservices.R_Log_Server = R_Log_Server;
    })(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
});
//# sourceMappingURL=R_Log_Server.js.map