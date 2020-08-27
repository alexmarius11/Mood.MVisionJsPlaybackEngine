define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_transversalservices;
    (function (rm_transversalservices) {
        var IImpl_Utils_Strings_R = /** @class */ (function () {
            //----------- constructor 
            function IImpl_Utils_Strings_R(owner) {
                this._owner = owner;
            }
            //---------------------------------
            IImpl_Utils_Strings_R.prototype.getPrevContent = function (input, marker) {
                if (input == null)
                    return null;
                var idx = input.indexOf(marker);
                if (idx == -1)
                    return "";
                var res = input.substr(0, idx);
                return res;
            };
            //---------------------------------
            IImpl_Utils_Strings_R.prototype.getNextContent = function (input, marker) {
                if (input == null)
                    return null;
                var idx = input.indexOf(marker);
                if (idx == -1)
                    return "";
                if (idx + 1 == input.length)
                    return "";
                var res = input.substr(idx + 1, input.length);
                return res;
            };
            //---------------------------------
            IImpl_Utils_Strings_R.prototype.getFieldValue = function (input, startmarker, endmarker) {
                if (input == null)
                    return "";
                if (startmarker == null)
                    return "";
                //--  
                var idx1 = input.indexOf(startmarker);
                if (idx1 == -1)
                    return "";
                if (idx1 + startmarker.length >= input.length)
                    return "";
                //--  
                var idx2 = input.indexOf(endmarker);
                if (idx2 == -1)
                    return "";
                if (idx2 + 1 == input.length)
                    return "";
                //--  
                if (idx1 + startmarker.length >= idx2)
                    return "";
                //--  
                var res = input.substr(idx1 + startmarker.length, idx2 - idx1 - startmarker.length);
                return res;
            };
            return IImpl_Utils_Strings_R;
        }());
        rm_transversalservices.IImpl_Utils_Strings_R = IImpl_Utils_Strings_R;
    })(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
});
//# sourceMappingURL=IImpl_Utils_Strings_R.js.map