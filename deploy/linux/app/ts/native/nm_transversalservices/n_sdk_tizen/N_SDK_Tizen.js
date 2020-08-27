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
var rmGeneralService = require("../../../../../app/ts/reusable/rm_general/r_service/R_Service");
var nmTransversalServicesJsTV = require("../../../../../app/ts/native/nm_transversalservices/n_sdk_tizen/IImpl_SDK_JsTV_Tizen");
var nmTransversalServicesFileSystem = require("../../../../../app/ts/native/nm_transversalservices/n_sdk_tizen/IImpl_SDK_FileSystem_Tizen");
var nmTransversalServicesApplicationSetup = require("../../../../../app/ts/native/nm_transversalservices/n_sdk_tizen/IImpl_SDK_ApplicationSetup_Tizen");
var nmTransversalServicesAudioSetup = require("../../../../../app/ts/native/nm_transversalservices/n_sdk_tizen/IImpl_SDK_AudioSetup_Tizen");
var nmTransversalServicesFirmwareSetup = require("../../../../../app/ts/native/nm_transversalservices/n_sdk_tizen/IImpl_SDK_FirmwareSetup_Tizen");
var nmTransversalServicesGeneralConfiguration = require("../../../../../app/ts/native/nm_transversalservices/n_sdk_tizen/IImpl_SDK_GeneralConfiguration_Tizen");
var nmTransversalServicesInputSourceSetup = require("../../../../../app/ts/native/nm_transversalservices/n_sdk_tizen/IImpl_SDK_InputSourceSetup_Tizen");
var nmTransversalServicesPowerSetup = require("../../../../../app/ts/native/nm_transversalservices/n_sdk_tizen/IImpl_SDK_PowerSetup_Tizen");
var nmTransversalServicesTimeSetup = require("../../../../../app/ts/native/nm_transversalservices/n_sdk_tizen/IImpl_SDK_TimeSetup_Tizen");
var nmTransversalServicesTvSignageSetup = require("../../../../../app/ts/native/nm_transversalservices/n_sdk_tizen/IImpl_SDK_TvSignageSetup_Tizen");
var nmTransversalServicesHardwareSetup = require("../../../../../app/ts/native/nm_transversalservices/n_sdk_tizen/IImpl_SDK_HardwareSetup_Tizen");
var nm_transversalservices;
(function (nm_transversalservices) {
    var N_SDK_Tizen = (function (_super) {
        __extends(N_SDK_Tizen, _super);
        function N_SDK_Tizen(aFactoryDescription, aServiceContainer, aLogService, error) {
            var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
            _this._iSDKJsTV = new nmTransversalServicesJsTV.nm_transversalservices.IImpl_SDK_JsTV_Tizen(_this);
            _this._iSDKFileSystem = new nmTransversalServicesFileSystem.nm_transversalservices.IImpl_SDK_FileSystem_Tizen(_this);
            _this._iSDKApplicationSetup = new nmTransversalServicesApplicationSetup.nm_transversalservices.IImpl_SDK_ApplicationSetup_Tizen(_this);
            _this._iSDKAudioSetup = new nmTransversalServicesAudioSetup.nm_transversalservices.IImpl_SDK_AudioSetup_Tizen(_this);
            _this._iSDKFirmwareSetup = new nmTransversalServicesFirmwareSetup.nm_transversalservices.IImpl_SDK_FirmwareSetup_Tizen(_this);
            _this._iSDKGeneralConfiguration = new nmTransversalServicesGeneralConfiguration.nm_transversalservices.IImpl_SDK_GeneralConfiguration_Tizen(_this);
            _this._iSDKInputSourceSetup = new nmTransversalServicesInputSourceSetup.nm_transversalservices.IImpl_SDK_InputSourceSetup_Tizen(_this);
            _this._iSDKPowerSetup = new nmTransversalServicesPowerSetup.nm_transversalservices.IImpl_SDK_PowerSetup_Tizen(_this);
            _this._iSDKTimeSetup = new nmTransversalServicesTimeSetup.nm_transversalservices.IImpl_SDK_TimeSetup_Tizen(_this);
            _this._iSDKTvSignageSetup = new nmTransversalServicesTvSignageSetup.nm_transversalservices.IImpl_SDK_TvSignageSetup_Tizen(_this);
            _this._iSDKHardwareSetup = new nmTransversalServicesHardwareSetup.nm_transversalservices.IImpl_SDK_HardwareSetup_Tizen(_this);
            return _this;
        }
        return N_SDK_Tizen;
    }(rmGeneralService.rm_general.R_Service));
    nm_transversalservices.N_SDK_Tizen = N_SDK_Tizen;
})(nm_transversalservices = exports.nm_transversalservices || (exports.nm_transversalservices = {}));
//# sourceMappingURL=N_SDK_Tizen.js.map