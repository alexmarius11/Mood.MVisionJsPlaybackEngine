"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_transversalservices;
(function (rm_transversalservices) {
    var IImpl_Utils_Strings_R = (function () {
        function IImpl_Utils_Strings_R(owner) {
            this._owner = owner;
        }
        IImpl_Utils_Strings_R.prototype.getPrevContent = function (input, marker) {
            if (input === null)
                return null;
            var idx = input.indexOf(marker);
            if (idx == -1)
                return "";
            var res = input.substr(0, idx);
            return res;
        };
        IImpl_Utils_Strings_R.prototype.getNextContent = function (input, marker) {
            if (input === null)
                return null;
            var idx = input.indexOf(marker);
            if (idx == -1)
                return "";
            if (idx + 1 == input.length)
                return "";
            var res = input.substr(idx + 1, input.length);
            return res;
        };
        return IImpl_Utils_Strings_R;
    }());
    rm_transversalservices.IImpl_Utils_Strings_R = IImpl_Utils_Strings_R;
})(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
//# sourceMappingURL=IImpl_Utils_Strings_R.js.map