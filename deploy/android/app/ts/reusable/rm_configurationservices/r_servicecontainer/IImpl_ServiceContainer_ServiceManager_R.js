"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_configurationservices;
(function (rm_configurationservices) {
    var IImpl_ServiceContainer_ServiceManager_R = (function () {
        function IImpl_ServiceContainer_ServiceManager_R(owner) {
            this._owner = owner;
        }
        IImpl_ServiceContainer_ServiceManager_R.prototype.getServiceByAbstractName = function (abstractName, properties, error) {
            return this._owner.getServiceByAbstractName(abstractName, properties, error);
        };
        IImpl_ServiceContainer_ServiceManager_R.prototype.addService = function (aService, error) {
            this._owner.addService(aService, error);
        };
        IImpl_ServiceContainer_ServiceManager_R.prototype.injectDependenciesForAllServices = function (aServiceContainer, aServiceLocator, aLogService, error) {
            this._owner.injectDependenciesForAllServices(aServiceContainer, aServiceLocator, aLogService, error);
        };
        return IImpl_ServiceContainer_ServiceManager_R;
    }());
    rm_configurationservices.IImpl_ServiceContainer_ServiceManager_R = IImpl_ServiceContainer_ServiceManager_R;
})(rm_configurationservices = exports.rm_configurationservices || (exports.rm_configurationservices = {}));
//# sourceMappingURL=IImpl_ServiceContainer_ServiceManager_R.js.map