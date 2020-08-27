define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_configurationservices;
    (function (rm_configurationservices) {
        var IImpl_ServiceLocator_FactorySetup_R = /** @class */ (function () {
            //----------- constructor 
            function IImpl_ServiceLocator_FactorySetup_R(owner) {
                this._owner = owner;
            }
            //------------------
            IImpl_ServiceLocator_FactorySetup_R.prototype.setupServiceFactories = function (factoryDescriptions, error) {
                return this._owner.setupServiceFactories(factoryDescriptions, error);
            };
            //------------------
            IImpl_ServiceLocator_FactorySetup_R.prototype.setupEntityFactories = function (factoryDescriptions, error) {
                return this._owner.setupEntityFactories(factoryDescriptions, error);
            };
            //------------------
            IImpl_ServiceLocator_FactorySetup_R.prototype.addServiceFactory = function (aServiceFactory, error) {
                return this._owner.addServiceFactory(aServiceFactory, error);
            };
            //------------------
            IImpl_ServiceLocator_FactorySetup_R.prototype.addEntityFactory = function (aEntityFactory, error) {
                return this._owner.addEntityFactory(aEntityFactory, error);
            };
            return IImpl_ServiceLocator_FactorySetup_R;
        }());
        rm_configurationservices.IImpl_ServiceLocator_FactorySetup_R = IImpl_ServiceLocator_FactorySetup_R;
    })(rm_configurationservices = exports.rm_configurationservices || (exports.rm_configurationservices = {}));
});
//# sourceMappingURL=IImpl_ServiceLocator_FactorySetup_R.js.map