"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_configurationservices;
(function (rm_configurationservices) {
    var IImpl_PlatformConfigurator_PlatformConfiguration_R = (function () {
        function IImpl_PlatformConfigurator_PlatformConfiguration_R(owner) {
            this._owner = owner;
        }
        IImpl_PlatformConfigurator_PlatformConfiguration_R.prototype.getServiceFactoryDescriptions = function (error) {
            return this._owner.getServiceFactoryDescriptions(error);
        };
        IImpl_PlatformConfigurator_PlatformConfiguration_R.prototype.getServiceFactoryDescription = function (factoryName, error) {
            return this._owner.getServiceFactoryDescription(factoryName, error);
        };
        IImpl_PlatformConfigurator_PlatformConfiguration_R.prototype.getEntityFactoryDescriptions = function (error) {
            return this._owner.getEntityFactoryDescriptions(error);
        };
        IImpl_PlatformConfigurator_PlatformConfiguration_R.prototype.getEntityFactoryDescription = function (factoryName, error) {
            return this._owner.getEntityFactoryDescription(factoryName, error);
        };
        return IImpl_PlatformConfigurator_PlatformConfiguration_R;
    }());
    rm_configurationservices.IImpl_PlatformConfigurator_PlatformConfiguration_R = IImpl_PlatformConfigurator_PlatformConfiguration_R;
})(rm_configurationservices = exports.rm_configurationservices || (exports.rm_configurationservices = {}));
//# sourceMappingURL=IImpl_PlatformConfigurator_PlatformConfiguration_R.js.map