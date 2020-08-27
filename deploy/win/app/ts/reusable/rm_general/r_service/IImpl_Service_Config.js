"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_general;
(function (rm_general) {
    var IImpl_Service_Config = (function () {
        function IImpl_Service_Config(owner) {
            this._owner = owner;
        }
        IImpl_Service_Config.prototype.init = function (aConfig, error, context, callback) {
            return this._owner.init(aConfig, error, context, callback);
        };
        return IImpl_Service_Config;
    }());
    rm_general.IImpl_Service_Config = IImpl_Service_Config;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=IImpl_Service_Config.js.map