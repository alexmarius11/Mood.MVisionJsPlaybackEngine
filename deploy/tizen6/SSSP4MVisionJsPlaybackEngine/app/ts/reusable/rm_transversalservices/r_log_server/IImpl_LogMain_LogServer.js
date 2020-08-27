define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_transversalservices;
    (function (rm_transversalservices) {
        var IImpl_LogMain_LogServer = /** @class */ (function () {
            //----------- constructor 
            function IImpl_LogMain_LogServer(owner) {
                this._owner = owner;
            }
            //----------------------
            IImpl_LogMain_LogServer.prototype.log = function (logMsgLevel, logMsg, error, context, callback) {
                this._owner._aTargetLog._iLogMain.log(logMsgLevel, logMsg, error, context, callback);
            };
            return IImpl_LogMain_LogServer;
        }());
        rm_transversalservices.IImpl_LogMain_LogServer = IImpl_LogMain_LogServer;
    })(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
});
//# sourceMappingURL=IImpl_LogMain_LogServer.js.map