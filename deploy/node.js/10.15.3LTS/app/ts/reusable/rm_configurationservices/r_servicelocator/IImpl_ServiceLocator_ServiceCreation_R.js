"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_configurationservices;
(function (rm_configurationservices) {
    var IImpl_ServiceLocator_ServiceCreation_R = (function () {
        function IImpl_ServiceLocator_ServiceCreation_R(owner) {
            this._owner = owner;
        }
        IImpl_ServiceLocator_ServiceCreation_R.prototype.createService = function (aFactoryDescription, aServiceContainer, serviceProperties, aLogService, error) {
            return this._owner.createService(aFactoryDescription, aServiceContainer, serviceProperties, aLogService, error);
        };
        IImpl_ServiceLocator_ServiceCreation_R.prototype.createDefaultServices = function (error) {
            return this._owner.createDefaultServices(error);
        };
        IImpl_ServiceLocator_ServiceCreation_R.prototype.createAllStartupServices = function (error) {
            return this._owner.createAllStartupServices(error);
        };
        return IImpl_ServiceLocator_ServiceCreation_R;
    }());
    rm_configurationservices.IImpl_ServiceLocator_ServiceCreation_R = IImpl_ServiceLocator_ServiceCreation_R;
})(rm_configurationservices = exports.rm_configurationservices || (exports.rm_configurationservices = {}));
//# sourceMappingURL=IImpl_ServiceLocator_ServiceCreation_R.js.map