"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var rmGeneral = require("../../../../../app/ts/reusable/rm_general/r_service/R_Service");
var rmGeneralError = require("../../../../../app/ts/reusable/rm_general/r_error/R_Error");
var rmConfigurationServicesServiceLocator = require("../../../../../app/ts/reusable/rm_configurationservices/r_servicelocator/R_ServiceLocator");
var rmConfigurationServices2 = require("./IImpl_ServiceContainer_ServiceManager_R");
var rm_configurationservices;
(function (rm_configurationservices) {
    var R_ServiceContainer = (function (_super) {
        __extends(R_ServiceContainer, _super);
        function R_ServiceContainer(aFactoryDescription, aServiceContainer, aLogService, error) {
            var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
            if (_this._aServiceContainer == null)
                _this._aServiceContainer = _this;
            _this._iServiceManager = new rmConfigurationServices2.rm_configurationservices.IImpl_ServiceContainer_ServiceManager_R(_this);
            _this._services = rmConfigurationServicesServiceLocator.rm_configurationservices.R_ServiceLocator.startupCreateDefaultServices(error);
            return _this;
        }
        R_ServiceContainer.prototype.injectDependencies = function (error) {
            if (this._aServiceContainer == null) {
                error.setError(201, "Fatal error: R_ServiceContainer.injectDependencies - A_ServiceContainer not set");
                return;
            }
            this._aServiceLocator = this._aServiceContainer._iServiceManager.getServiceByAbstractName("A_ServiceLocator", null, error);
            if (this._aServiceLocator == null) {
                error.setError(202, "Fatal error: R_ServiceContainer.injectDependencies - Cannot inject A_ServiceLocator.  A_ServiceLocator not found");
                return;
            }
        };
        R_ServiceContainer.startup = function () {
            var error;
            var aServiceContainer;
            var aServiceLocator;
            var aPlatformConfigurator;
            error = new rmGeneralError.rm_general.R_Error();
            aServiceContainer = rmConfigurationServicesServiceLocator.rm_configurationservices.R_ServiceLocator.startupCreateDefaultServiceContainer(error);
            if (error.isError()) {
                alert("Fatal Error: R_ServiceContainer.startup cannot create the default Service Container");
                return error;
            }
            aServiceLocator = rmConfigurationServicesServiceLocator.rm_configurationservices.R_ServiceLocator.startupCreateDefaultServiceLocator(aServiceContainer, error);
            if (error.isError()) {
                alert("Fatal Error: R_ServiceContainer.startup cannot create the default Service Locator");
                return error;
            }
            aPlatformConfigurator = rmConfigurationServicesServiceLocator.rm_configurationservices.R_ServiceLocator.startupCreateDefaultPlatformConfigurator(aServiceContainer, error);
            if (error.isError()) {
                alert("Fatal Error: R_ServiceContainer.startup cannot create the default Service Configurator");
                return error;
            }
            aServiceContainer._iServiceManager.addService(aServiceContainer, error);
            if (error.isError())
                return;
            aServiceContainer._iServiceManager.addService(aServiceLocator, error);
            if (error.isError())
                return;
            aServiceContainer._iServiceManager.addService(aPlatformConfigurator, error);
            if (error.isError())
                return;
            aServiceContainer._iServiceManager.injectDependenciesForAllServices(error);
            if (error.isError()) {
                alert("Fatal Error: R_ServiceContainer.startup cannot inject dependencies" + error.getErrMsg());
                return;
            }
            aPlatformConfigurator._iLoadConfigurations.loadConfigurationFiles(error);
            if (error.isError()) {
                alert("Fatal Error: R_ServiceContainer.startup cannot load Configuration Files in PlatformConfigurator._iLoadConfigurations.loadConfigurationFiles");
                return error;
            }
            return error;
        };
        R_ServiceContainer.prototype.getServiceByAbstractName = function (abstractName, properties, error) {
            if (this._services == null) {
                error.setError(210, "R_ServiceContainer.getServiceByAbstractName this._services is null");
                return;
            }
            return this._services.getServiceByAbstractName(abstractName, properties, error);
        };
        R_ServiceContainer.prototype.addService = function (aService, error) {
            this._services.addService(aService, error);
        };
        R_ServiceContainer.prototype.injectDependenciesForAllServices = function (error) {
            var listService = this._services.getServices(error);
            for (var _i = 0, listService_1 = listService; _i < listService_1.length; _i++) {
                var crtService = listService_1[_i];
                crtService._iService.injectDependencies(error);
                if (error.isError())
                    return;
            }
        };
        return R_ServiceContainer;
    }(rmGeneral.rm_general.R_Service));
    rm_configurationservices.R_ServiceContainer = R_ServiceContainer;
})(rm_configurationservices = exports.rm_configurationservices || (exports.rm_configurationservices = {}));
//# sourceMappingURL=R_ServiceContainer.js.map