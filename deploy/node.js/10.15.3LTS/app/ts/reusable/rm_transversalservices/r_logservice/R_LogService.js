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
var rmTransversalServicesILogMain = require("../../../../../app/ts/reusable/rm_transversalservices/r_logservice/IImpl_LogMain_R");
var rmTransversalServicesILogConfig = require("../../../../../app/ts/reusable/rm_transversalservices/r_logservice/IImpl_LogConfig_R");
var rm_transversalservices;
(function (rm_transversalservices) {
    var R_LogService = (function (_super) {
        __extends(R_LogService, _super);
        function R_LogService(aFactoryDescription, aServiceContainer, aLogService, error) {
            var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
            _this.LOGMSG_FATALERROR = 1;
            _this.LOGMSG_ERROR = 2;
            _this.LOGMSG_WARNING = 3;
            _this.LOGMSG_INFO = 4;
            _this.LOGMSG_TRACELEVEL1 = 5;
            _this.LOGMSG_TRACELEVEL2 = 6;
            _this.LOGMSG_TRACELEVEL3 = 7;
            _this._fileInfo = null;
            _this._fileUrlInfo = null;
            _this._aTargetSDK = null;
            _this._aUtilsService = null;
            _this._iLogMain = new rmTransversalServicesILogMain.rm_transversalservices.IImpl_LogMain_R(_this);
            _this._iLogConfig = new rmTransversalServicesILogConfig.rm_transversalservices.IImpl_LogConfig_R(_this);
            _this._aLogService = _this;
            return _this;
        }
        R_LogService.prototype.log = function (logMsgLevel, logMsg, error, context, callback) {
            var msgLevel = "";
            if (logMsgLevel == 1)
                msgLevel = "F-ERROR";
            else if (logMsgLevel == 2)
                msgLevel = "ERROR";
            else if (logMsgLevel == 3)
                msgLevel = "WARNING";
            else if (logMsgLevel == 4)
                msgLevel = "INFO";
            else if (logMsgLevel == 5)
                msgLevel = "TRACE L1";
            else if (logMsgLevel == 6)
                msgLevel = "TRACE L2";
            else if (logMsgLevel == 7)
                msgLevel = "TRACE L3";
            var format = "dd/LL/yyyy HH:mm:ss";
            var locale = "default";
            var strCrtDateTime = this._aUtilsService._iUtilsDateTime.getCrtDateTimeAsString("mm/dd/yyyy", "hh:mm:ss");
            var message = strCrtDateTime + "\t\t" + msgLevel + "\t\t" + logMsg + "\r\n";
            var callback2 = function callback2(ctx) {
                ctx.setResult(message);
                if (callback != null)
                    callback(ctx);
            };
            this._aTargetSDK._iSDKFileSystem.appendTextToFile(this._fileInfo.getStorage(), this._fileInfo.getPath(), this._fileInfo.getName(), message, error, context, callback2);
        };
        R_LogService.prototype.setFileInfo = function (fileInfo, fileUrlInfo, error, context, callback) {
            if ((fileInfo === null) && (fileUrlInfo === null)) {
                context.setError(error);
                if (context.getError() != null)
                    context.getError().setError(1501, "r_logservice:logconfig error 1501. setFileInfo is null");
                if (callback != null)
                    callback(context);
            }
            this._fileInfo = fileInfo;
            this._fileUrlInfo = fileUrlInfo;
            var callback2 = function callback2(ctx) {
                if (callback != null)
                    callback(ctx);
            };
            console.log(this._fileInfo.getStorage() + " " + this._fileInfo.getPath());
            this._aTargetSDK._iSDKFileSystem.createFolder2(this._fileInfo.getStorage(), this._fileInfo.getPath(), error, context, callback2);
        };
        R_LogService.prototype.setTargetService = function (targetService) {
            this._aTargetSDK = targetService;
        };
        return R_LogService;
    }(rmGeneral.rm_general.R_Service));
    rm_transversalservices.R_LogService = R_LogService;
})(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
//# sourceMappingURL=R_LogService.js.map