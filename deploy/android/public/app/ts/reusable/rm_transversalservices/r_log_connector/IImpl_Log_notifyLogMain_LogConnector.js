define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_transversalservices;
    (function (rm_transversalservices) {
        var IImpl_Log_notifyLogMain_LogConnector = /** @class */ (function () {
            //----------- constructor 
            function IImpl_Log_notifyLogMain_LogConnector(owner) {
                this._owner = owner;
            }
            //-----------------------------
            IImpl_Log_notifyLogMain_LogConnector.prototype.notify_log = function (logMsgLevel, logMsg, error, context, callback) {
                this._owner._aTargetLogConsumer._iNotifyLogMain.notify_log(logMsgLevel, logMsg, error, context, callback);
            };
            return IImpl_Log_notifyLogMain_LogConnector;
        }());
        rm_transversalservices.IImpl_Log_notifyLogMain_LogConnector = IImpl_Log_notifyLogMain_LogConnector;
    })(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
});
//# sourceMappingURL=IImpl_Log_notifyLogMain_LogConnector.js.map