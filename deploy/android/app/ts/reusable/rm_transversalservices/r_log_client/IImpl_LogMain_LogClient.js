"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_transversalservices;
(function (rm_transversalservices) {
    var IImpl_LogMain_LogClient = (function () {
        function IImpl_LogMain_LogClient(owner) {
            this._owner = owner;
        }
        IImpl_LogMain_LogClient.prototype.log = function (logMsgLevel, logMsg, error, context, callback) {
            var callId = this._owner.addCallback(context, callback);
            var params = {
                "logMsgLevel": logMsgLevel,
                "logMsg": logMsg,
                "callId": callId,
            };
            this._owner._socket.emit('log.logmain.log', params);
        };
        return IImpl_LogMain_LogClient;
    }());
    rm_transversalservices.IImpl_LogMain_LogClient = IImpl_LogMain_LogClient;
})(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
//# sourceMappingURL=IImpl_LogMain_LogClient.js.map