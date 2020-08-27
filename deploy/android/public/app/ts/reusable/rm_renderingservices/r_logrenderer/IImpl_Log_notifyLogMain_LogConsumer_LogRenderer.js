define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_transversalservices;
    (function (rm_transversalservices) {
        var IImpl_Log_notifyLogMain_LogConsumer_LogRenderer = /** @class */ (function () {
            //----------- constructor 
            function IImpl_Log_notifyLogMain_LogConsumer_LogRenderer(owner) {
                this._owner = owner;
            }
            //-----------------------------
            IImpl_Log_notifyLogMain_LogConsumer_LogRenderer.prototype.notify_log = function (logMsgLevel, logMsg, error, context, callback) {
                this._owner._aLogRenderer._iLogMainRenderer.render_notify_log(context);
            };
            return IImpl_Log_notifyLogMain_LogConsumer_LogRenderer;
        }());
        rm_transversalservices.IImpl_Log_notifyLogMain_LogConsumer_LogRenderer = IImpl_Log_notifyLogMain_LogConsumer_LogRenderer;
    })(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
});
//# sourceMappingURL=IImpl_Log_notifyLogMain_LogConsumer_LogRenderer.js.map