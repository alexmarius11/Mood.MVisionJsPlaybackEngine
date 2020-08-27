"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_transversalservices;
(function (rm_transversalservices) {
    var IImpl_XmlConfigurator_Setup_R = (function () {
        function IImpl_XmlConfigurator_Setup_R(owner) {
            this._owner = owner;
        }
        IImpl_XmlConfigurator_Setup_R.prototype.loadXMLFiles = function (fileInfoList, error, context, callback) {
            return this._owner.loadXMLFiles(fileInfoList, error, context, callback);
        };
        return IImpl_XmlConfigurator_Setup_R;
    }());
    rm_transversalservices.IImpl_XmlConfigurator_Setup_R = IImpl_XmlConfigurator_Setup_R;
})(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
//# sourceMappingURL=IImpl_XmlConfigurator_Setup_R.js.map