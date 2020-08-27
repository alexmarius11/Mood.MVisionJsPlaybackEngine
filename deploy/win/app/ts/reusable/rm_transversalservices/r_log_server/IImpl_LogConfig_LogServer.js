"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_transversalservices;
(function (rm_transversalservices) {
    var IImpl_LogConfig_LogServer = (function () {
        function IImpl_LogConfig_LogServer(owner) {
            this._owner = owner;
        }
        IImpl_LogConfig_LogServer.prototype.setFileInfo = function (fileInfo, fileUrlInfo, error, context, callback) {
            this._owner._aTargetLog._iLogConfig.setFileInfo(fileInfo, fileUrlInfo, error, context, callback);
        };
        return IImpl_LogConfig_LogServer;
    }());
    rm_transversalservices.IImpl_LogConfig_LogServer = IImpl_LogConfig_LogServer;
})(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
//# sourceMappingURL=IImpl_LogConfig_LogServer.js.map