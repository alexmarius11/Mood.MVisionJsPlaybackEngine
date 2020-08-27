define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_transversalservices;
    (function (rm_transversalservices) {
        var IImpl_LogConfig_LogClient = /** @class */ (function () {
            //----------- constructor 
            function IImpl_LogConfig_LogClient(owner) {
                this._owner = owner;
            }
            //--------------------------
            IImpl_LogConfig_LogClient.prototype.setFileInfo = function (fileInfo, fileUrlInfo, error, context, callback) {
                var callId = this._owner.addCallback(context, callback);
                var params = {
                    "logStorage": fileInfo.getStorage(),
                    "logFolder": fileInfo.getPath(),
                    "logFile": fileInfo.getName(),
                    "logUrlStorage": fileUrlInfo.getStorage(),
                    "logUrlFolder": fileUrlInfo.getPath(),
                    "logUrlFile": fileUrlInfo.getName(),
                    "callId": callId,
                };
                this._owner._socket.emit('log.logconfig.setfileinfo', params);
            };
            return IImpl_LogConfig_LogClient;
        }());
        rm_transversalservices.IImpl_LogConfig_LogClient = IImpl_LogConfig_LogClient;
    })(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
});
//# sourceMappingURL=IImpl_LogConfig_LogClient.js.map