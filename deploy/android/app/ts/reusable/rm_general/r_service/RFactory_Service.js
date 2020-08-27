"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_general;
(function (rm_general) {
    var RFactory_Service = (function () {
        function RFactory_Service(aFactoryDescription, aError) {
            this._aFactoryDescription = aFactoryDescription;
        }
        RFactory_Service.prototype.getFactoryName = function () {
            return this._aFactoryDescription._factoryName;
        };
        RFactory_Service.prototype.createService = function (aFactoryDescription, aServiceContainer, serviceProperties, aLogService, error) {
            return null;
        };
        return RFactory_Service;
    }());
    rm_general.RFactory_Service = RFactory_Service;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=RFactory_Service.js.map