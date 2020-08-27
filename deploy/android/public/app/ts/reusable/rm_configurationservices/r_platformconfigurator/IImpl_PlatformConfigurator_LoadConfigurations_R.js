define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_configurationservices;
    (function (rm_configurationservices) {
        var IImpl_PlatformConfigurator_LoadConfigurations_R = /** @class */ (function () {
            //----------- constructor 
            function IImpl_PlatformConfigurator_LoadConfigurations_R(owner) {
                this._owner = owner;
            }
            //------------
            IImpl_PlatformConfigurator_LoadConfigurations_R.prototype.loadConfigurationFiles = function (error) {
                return this._owner.loadConfigurationFiles(error);
            };
            return IImpl_PlatformConfigurator_LoadConfigurations_R;
        }());
        rm_configurationservices.IImpl_PlatformConfigurator_LoadConfigurations_R = IImpl_PlatformConfigurator_LoadConfigurations_R;
    })(rm_configurationservices = exports.rm_configurationservices || (exports.rm_configurationservices = {}));
});
//# sourceMappingURL=IImpl_PlatformConfigurator_LoadConfigurations_R.js.map