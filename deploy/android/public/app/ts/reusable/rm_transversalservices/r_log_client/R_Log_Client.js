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
define(["require", "exports", "../../../../../app/ts/reusable/rm_general/r_service/R_Service", "../../../../../app/ts/reusable/rm_transversalservices/r_log_client/IImpl_LogMain_LogClient", "../../../../../app/ts/reusable/rm_transversalservices/r_log_client/IImpl_LogConfig_LogClient", "../../../../../app/ts/reusable/rm_transversalservices/r_log_client/IImpl_RemoteService_LogClient"], function (require, exports, rmGeneralService, rmTransversalServicesILogMain, rmTransversalServicesILogConfig, rmTransversalServicesRemoteService) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_transversalservices;
    (function (rm_transversalservices) {
        var R_Log_Client = /** @class */ (function (_super) {
            __extends(R_Log_Client, _super);
            //------------------------------------------------------
            function R_Log_Client(aFactoryDescription, aServiceContainer, aLogService, error) {
                var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
                //---------------- constant 
                _this.LOGMSG_FATALERROR = 1;
                _this.LOGMSG_ERROR = 2;
                _this.LOGMSG_WARNING = 3;
                _this.LOGMSG_INFO = 4;
                _this.LOGMSG_TRACELEVEL1 = 5;
                _this.LOGMSG_TRACELEVEL2 = 6;
                _this.LOGMSG_TRACELEVEL3 = 7;
                _this._callbackArray = new Array();
                _this._callbackId = 0;
                _this._isRemoteCallback = true;
                _this._socket = null;
                _this._remoteServerUrl = "";
                _this._iRemoteService = new rmTransversalServicesRemoteService.rm_transversalservices.IImpl_RemoteService_LogClient(_this);
                _this._iLogMain = new rmTransversalServicesILogMain.rm_transversalservices.IImpl_LogMain_LogClient(_this);
                _this._iLogConfig = new rmTransversalServicesILogConfig.rm_transversalservices.IImpl_LogConfig_LogClient(_this);
                //this._aLogService = aLogService;
                _this._aLogConsumer = null;
                return _this;
            }
            //-----------------------------------
            R_Log_Client.prototype.startup_withConnectClient = function (remoteServerUrl) {
                this._remoteServerUrl = remoteServerUrl;
                this._socket = io(this._remoteServerUrl); ///"http://localhost:3000");
                this._iRemoteService.receive(this._socket, null);
            };
            //-----------------------------------
            R_Log_Client.prototype.startup = function (socket) {
                this._socket = socket;
                this._iRemoteService.receive(this._socket, null);
            };
            //------------------------------------------
            R_Log_Client.prototype.setTargetService = function (aTargetService) {
                this._aTargetService = aTargetService;
            };
            //-------------------------------------------
            R_Log_Client.prototype.setConsumerService = function (aConsumerService) {
                this._aConsumerService = aConsumerService;
                this._aLogConsumer = aConsumerService;
            };
            return R_Log_Client;
        }(rmGeneralService.rm_general.R_Service));
        rm_transversalservices.R_Log_Client = R_Log_Client;
    })(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
});
//# sourceMappingURL=R_Log_Client.js.map