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
define(["require", "exports", "../../../../../app/ts/reusable/rm_general/r_service/R_Service", "../../../../../app/ts/reusable/rm_transversalservices/r_sdk_jstv/IImpl_SDK_JsTV_R", "../../../../../app/ts/reusable/rm_transversalservices/r_sdk_jstv/IImpl_SDK_FileSystem_JsTV_R", "../../../../../app/ts/reusable/rm_transversalservices/r_sdk_jstv/IImpl_SDK_ApplicationSetup_JsTV_R", "../../../../../app/ts/reusable/rm_transversalservices/r_sdk_jstv/IImpl_SDK_AudioSetup_JsTV_R", "../../../../../app/ts/reusable/rm_transversalservices/r_sdk_jstv/IImpl_SDK_FirmwareSetup_JsTV_R", "../../../../../app/ts/reusable/rm_transversalservices/r_sdk_jstv/IImpl_SDK_GeneralConfiguration_JsTV_R", "../../../../../app/ts/reusable/rm_transversalservices/r_sdk_jstv/IImpl_SDK_InputSourceSetup_JsTV_R", "../../../../../app/ts/reusable/rm_transversalservices/r_sdk_jstv/IImpl_SDK_PowerSetup_JsTV_R", "../../../../../app/ts/reusable/rm_transversalservices/r_sdk_jstv/IImpl_SDK_TimeSetup_JsTV_R", "../../../../../app/ts/reusable/rm_transversalservices/r_sdk_jstv/IImpl_SDK_TvSignageSetup_JsTV_R", "../../../../../app/ts/reusable/rm_transversalservices/r_sdk_jstv/IImpl_SDK_HardwareSetup_JsTV_R"], function (require, exports, rmGeneralService, rmTransversalServicesJsTV, rmTransversalServicesFileSystem, rmTransversalServicesApplicationSetup, rmTransversalServicesAudioSetup, rmTransversalServicesFirmwareSetup, rmTransversalServicesGeneralConfiguration, rmTransversalServicesInputSourceSetup, rmTransversalServicesPowerSetup, rmTransversalServicesTimeSetup, rmTransversalServicesTvSignageSetup, rmTransversalServicesHardwareSetup) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_transversalservices;
    (function (rm_transversalservices) {
        var R_SDK_JsTV = /** @class */ (function (_super) {
            __extends(R_SDK_JsTV, _super);
            function R_SDK_JsTV(aFactoryDescription, aServiceContainer, aLogService, error) {
                var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
                _this._iSDKJsTV = new rmTransversalServicesJsTV.rm_transversalservices.IImpl_SDK_JsTV_R(_this);
                _this._iSDKFileSystem = new rmTransversalServicesFileSystem.rm_transversalservices.IImpl_SDK_FileSystem_JsTV_R(_this);
                _this._iSDKApplicationSetup = new rmTransversalServicesApplicationSetup.rm_transversalservices.IImpl_SDK_ApplicationSetup_JsTV_R(_this);
                _this._iSDKAudioSetup = new rmTransversalServicesAudioSetup.rm_transversalservices.IImpl_SDK_AudioSetup_JsTV_R(_this);
                _this._iSDKFirmwareSetup = new rmTransversalServicesFirmwareSetup.rm_transversalservices.IImpl_SDK_FirmwareSetup_JsTV_R(_this);
                _this._iSDKGeneralConfiguration = new rmTransversalServicesGeneralConfiguration.rm_transversalservices.IImpl_SDK_GeneralConfiguration_JsTV_R(_this);
                _this._iSDKInputSourceSetup = new rmTransversalServicesInputSourceSetup.rm_transversalservices.IImpl_SDK_InputSourceSetup_JsTV_R(_this);
                _this._iSDKPowerSetup = new rmTransversalServicesPowerSetup.rm_transversalservices.IImpl_SDK_PowerSetup_JsTV_R(_this);
                _this._iSDKTimeSetup = new rmTransversalServicesTimeSetup.rm_transversalservices.IImpl_SDK_TimeSetup_JsTV_R(_this);
                _this._iSDKTvSignageSetup = new rmTransversalServicesTvSignageSetup.rm_transversalservices.IImpl_SDK_TvSignageSetup_JsTV_R(_this);
                _this._iSDKHardwareSetup = new rmTransversalServicesHardwareSetup.rm_transversalservices.IImpl_SDK_HardwareSetup_JsTV_R(_this);
                return _this;
                //this._aLogService = aLogService;
            }
            return R_SDK_JsTV;
        }(rmGeneralService.rm_general.R_Service));
        rm_transversalservices.R_SDK_JsTV = R_SDK_JsTV;
    })(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
});
//# sourceMappingURL=R_SDK_JsTV.js.map