"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_transversalservices;
(function (rm_transversalservices) {
    var IImpl_LogMain_R = (function () {
        function IImpl_LogMain_R(owner) {
            this._owner = owner;
        }
        IImpl_LogMain_R.prototype.log = function (logMsgLevel, logMsg, error, context, callback) {
            this._owner.log(logMsgLevel, logMsg, error, context, callback);
        };
        return IImpl_LogMain_R;
    }());
    rm_transversalservices.IImpl_LogMain_R = IImpl_LogMain_R;
})(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
//# sourceMappingURL=IImpl_LogMain_R.js.map