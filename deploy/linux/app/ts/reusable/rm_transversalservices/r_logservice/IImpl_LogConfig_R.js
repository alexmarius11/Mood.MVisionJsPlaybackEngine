"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_transversalservices;
(function (rm_transversalservices) {
    var IImpl_LogConfig_R = (function () {
        function IImpl_LogConfig_R(owner) {
            this._owner = owner;
        }
        IImpl_LogConfig_R.prototype.setFileInfo = function (fileInfo, fileUrlInfo, error, context, callback) {
            this._owner.setFileInfo(fileInfo, fileUrlInfo, error, context, callback);
        };
        return IImpl_LogConfig_R;
    }());
    rm_transversalservices.IImpl_LogConfig_R = IImpl_LogConfig_R;
})(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
//# sourceMappingURL=IImpl_LogConfig_R.js.map