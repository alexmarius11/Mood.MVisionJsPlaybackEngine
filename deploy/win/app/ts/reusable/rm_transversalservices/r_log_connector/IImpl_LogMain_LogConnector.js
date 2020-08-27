"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_transversalservices;
(function (rm_transversalservices) {
    var IImpl_LogMain_LogConnector = (function () {
        function IImpl_LogMain_LogConnector(owner) {
            this._owner = owner;
        }
        IImpl_LogMain_LogConnector.prototype.log = function (logMsgLevel, logMsg, error, context, callback) {
            var owner = this._owner;
            var callback2 = function (ctx) {
                owner._iNotifyLogMain.notify_log(logMsgLevel, logMsg, error, ctx, callback);
            };
            owner._aTargetLogService._iLogMain.log(logMsgLevel, logMsg, error, context, callback2);
        };
        return IImpl_LogMain_LogConnector;
    }());
    rm_transversalservices.IImpl_LogMain_LogConnector = IImpl_LogMain_LogConnector;
})(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
//# sourceMappingURL=IImpl_LogMain_LogConnector.js.map