define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_configurationservices;
    (function (rm_configurationservices) {
        var IImpl_PlatformConfigurator_StartupConfiguration_R = /** @class */ (function () {
            //----------- constructor 
            function IImpl_PlatformConfigurator_StartupConfiguration_R(owner) {
                this._owner = owner;
            }
            //-----------------------------
            IImpl_PlatformConfigurator_StartupConfiguration_R.prototype.getProperties = function (error) {
                return this._owner.getProperties(error);
            };
            //-----------------------------
            IImpl_PlatformConfigurator_StartupConfiguration_R.prototype.getProperty = function (propertyName, error) {
                return this._owner.getProperty(propertyName, error);
            };
            //-------------------------------
            IImpl_PlatformConfigurator_StartupConfiguration_R.prototype.getOS = function () {
                return this._owner.getOS();
            };
            //----------------------------------
            IImpl_PlatformConfigurator_StartupConfiguration_R.prototype.getFirmwareVersion = function () {
                return this._owner.getFirmwareVersion();
            };
            //----------------------------------
            IImpl_PlatformConfigurator_StartupConfiguration_R.prototype.getCustomerId = function () {
                return this._owner.getCustomerId();
            };
            //------------------------------------
            IImpl_PlatformConfigurator_StartupConfiguration_R.prototype.getAppBasePath = function () {
                return this._owner.getAppBasePath();
            };
            //--------------------------------------
            IImpl_PlatformConfigurator_StartupConfiguration_R.prototype.getMediaFilesBasePath = function () {
                return this._owner.getMediaFilesBasePath();
            };
            return IImpl_PlatformConfigurator_StartupConfiguration_R;
        }());
        rm_configurationservices.IImpl_PlatformConfigurator_StartupConfiguration_R = IImpl_PlatformConfigurator_StartupConfiguration_R;
    })(rm_configurationservices = exports.rm_configurationservices || (exports.rm_configurationservices = {}));
});
//# sourceMappingURL=IImpl_PlatformConfigurator_StartupConfiguration_R.js.map