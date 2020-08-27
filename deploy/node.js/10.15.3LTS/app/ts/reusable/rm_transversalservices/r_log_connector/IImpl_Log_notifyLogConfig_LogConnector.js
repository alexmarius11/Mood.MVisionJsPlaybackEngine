"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_transversalservices;
(function (rm_transversalservices) {
    var IImpl_Log_notifyLogConfig_LogConnector = (function () {
        function IImpl_Log_notifyLogConfig_LogConnector(owner) {
            this._owner = owner;
        }
        IImpl_Log_notifyLogConfig_LogConnector.prototype.notify_setFileInfo = function (fileInfo, fileUrlInfo, error, context, callback) {
            this._owner._aTargetLogConsumer._iNotifyLogConfig.notify_setFileInfo(fileInfo, fileUrlInfo, error, context, callback);
        };
        return IImpl_Log_notifyLogConfig_LogConnector;
    }());
    rm_transversalservices.IImpl_Log_notifyLogConfig_LogConnector = IImpl_Log_notifyLogConfig_LogConnector;
})(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
//# sourceMappingURL=IImpl_Log_notifyLogConfig_LogConnector.js.map