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
define(["require", "exports", "../../../../../app/ts/reusable/rm_general/r_service/R_Service", "../../../../../app/ts/native/nm_transversalservices/n_sdk_webos/IImpl_SDK_JsTV_WebOS", "../../../../../app/ts/native/nm_transversalservices/n_sdk_webos/IImpl_SDK_FileSystem_WebOS", "../../../../../app/ts/native/nm_transversalservices/n_sdk_webos/IImpl_SDK_ApplicationSetup_WebOS", "../../../../../app/ts/native/nm_transversalservices/n_sdk_webos/IImpl_SDK_AudioSetup_WebOS", "../../../../../app/ts/native/nm_transversalservices/n_sdk_webos/IImpl_SDK_FirmwareSetup_WebOS", "../../../../../app/ts/native/nm_transversalservices/n_sdk_webos/IImpl_SDK_GeneralConfiguration_WebOS", "../../../../../app/ts/native/nm_transversalservices/n_sdk_webos/IImpl_SDK_InputSourceSetup_WebOS", "../../../../../app/ts/native/nm_transversalservices/n_sdk_webos/IImpl_SDK_PowerSetup_WebOS", "../../../../../app/ts/native/nm_transversalservices/n_sdk_webos/IImpl_SDK_TimeSetup_WebOS", "../../../../../app/ts/native/nm_transversalservices/n_sdk_webos/IImpl_SDK_TvSignageSetup_WebOS", "../../../../../app/ts/native/nm_transversalservices/n_sdk_webos/IImpl_SDK_HardwareSetup_WebOS"], function (require, exports, rmGeneralService, nmTransversalServicesJsTV, nmTransversalServicesFileSystem, nmTransversalServicesApplicationSetup, nmTransversalServicesAudioSetup, nmTransversalServicesFirmwareSetup, nmTransversalServicesGeneralConfiguration, nmTransversalServicesInputSourceSetup, nmTransversalServicesPowerSetup, nmTransversalServicesTimeSetup, nmTransversalServicesTvSignageSetup, nmTransversalServicesHardwareSetup) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var nm_transversalservices;
    (function (nm_transversalservices) {
        var N_SDK_WebOS = /** @class */ (function (_super) {
            __extends(N_SDK_WebOS, _super);
            function N_SDK_WebOS(aFactoryDescription, aServiceContainer, aLogService, error) {
                var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
                _this._iSDKJsTV = new nmTransversalServicesJsTV.nm_transversalservices.IImpl_SDK_JsTV_WebOS(_this);
                _this._iSDKFileSystem = new nmTransversalServicesFileSystem.nm_transversalservices.IImpl_SDK_FileSystem_WebOS(_this);
                _this._iSDKApplicationSetup = new nmTransversalServicesApplicationSetup.nm_transversalservices.IImpl_SDK_ApplicationSetup_WebOS(_this);
                _this._iSDKAudioSetup = new nmTransversalServicesAudioSetup.nm_transversalservices.IImpl_SDK_AudioSetup_WebOS(_this);
                _this._iSDKFirmwareSetup = new nmTransversalServicesFirmwareSetup.nm_transversalservices.IImpl_SDK_FirmwareSetup_WebOS(_this);
                _this._iSDKGeneralConfiguration = new nmTransversalServicesGeneralConfiguration.nm_transversalservices.IImpl_SDK_GeneralConfiguration_WebOS(_this);
                _this._iSDKInputSourceSetup = new nmTransversalServicesInputSourceSetup.nm_transversalservices.IImpl_SDK_InputSourceSetup_WebOS(_this);
                _this._iSDKPowerSetup = new nmTransversalServicesPowerSetup.nm_transversalservices.IImpl_SDK_PowerSetup_WebOS(_this);
                _this._iSDKTimeSetup = new nmTransversalServicesTimeSetup.nm_transversalservices.IImpl_SDK_TimeSetup_WebOS(_this);
                _this._iSDKTvSignageSetup = new nmTransversalServicesTvSignageSetup.nm_transversalservices.IImpl_SDK_TvSignageSetup_WebOS(_this);
                _this._iSDKHardwareSetup = new nmTransversalServicesHardwareSetup.nm_transversalservices.IImpl_SDK_HardwareSetup_WebOS(_this);
                return _this;
                //this._aLogService = aLogService;
            }
            return N_SDK_WebOS;
        }(rmGeneralService.rm_general.R_Service));
        nm_transversalservices.N_SDK_WebOS = N_SDK_WebOS;
    })(nm_transversalservices = exports.nm_transversalservices || (exports.nm_transversalservices = {}));
});
//# sourceMappingURL=N_SDK_WebOS.js.map