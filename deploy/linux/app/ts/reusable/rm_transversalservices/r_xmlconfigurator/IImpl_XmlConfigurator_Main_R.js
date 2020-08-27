"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_transversalservices;
(function (rm_transversalservices) {
    var IImpl_XmlConfigurator_Main_R = (function () {
        function IImpl_XmlConfigurator_Main_R(owner) {
            this._owner = owner;
        }
        IImpl_XmlConfigurator_Main_R.prototype.getXmlJsonObject = function (fileStorage, fileFolder, fileName, error, context, callback) {
            return this._owner.getXmlJsonObject(fileStorage, fileFolder, fileName, error, context, callback);
        };
        return IImpl_XmlConfigurator_Main_R;
    }());
    rm_transversalservices.IImpl_XmlConfigurator_Main_R = IImpl_XmlConfigurator_Main_R;
})(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
//# sourceMappingURL=IImpl_XmlConfigurator_Main_R.js.map