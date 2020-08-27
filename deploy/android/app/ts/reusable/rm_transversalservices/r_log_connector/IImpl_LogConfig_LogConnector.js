"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_transversalservices;
(function (rm_transversalservices) {
    var IImpl_LogConfig_LogConnector = (function () {
        function IImpl_LogConfig_LogConnector(owner) {
            this._owner = owner;
        }
        IImpl_LogConfig_LogConnector.prototype.setFileInfo = function (fileInfo, fileUrlInfo, error, context, callback) {
            var owner = this._owner;
            var callback2 = function (ctx) {
                owner._iNotifyLogConfig.notify_setFileInfo(fileInfo, fileUrlInfo, error, context, callback);
            };
            owner._aTargetLogService._iLogConfig.setFileInfo(fileInfo, fileUrlInfo, error, context, callback2);
        };
        return IImpl_LogConfig_LogConnector;
    }());
    rm_transversalservices.IImpl_LogConfig_LogConnector = IImpl_LogConfig_LogConnector;
})(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
//# sourceMappingURL=IImpl_LogConfig_LogConnector.js.map