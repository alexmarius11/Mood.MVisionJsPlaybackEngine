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
define(["require", "exports", "../../../../../app/ts/reusable/rm_general/r_service/R_Service", "../../../../../app/ts/reusable/rm_transversalservices/r_sdk_consumer/IImpl_SDK_notifyJsTV_SDKConsumer", "../../../../../app/ts/reusable/rm_transversalservices/r_sdk_consumer/IImpl_SDK_notifyFileSystem_SDKConsumer", "../../../../../app/ts/reusable/rm_transversalservices/r_sdk_consumer/IImpl_SDK_notifyApplicationSetup_SDKConsumer", "../../../../../app/ts/reusable/rm_transversalservices/r_sdk_consumer/IImpl_SDK_notifyAudioSetup_SDKConsumer", "../../../../../app/ts/reusable/rm_transversalservices/r_sdk_consumer/IImpl_SDK_notifyFirmwareSetup_SDKConsumer", "../../../../../app/ts/reusable/rm_transversalservices/r_sdk_consumer/IImpl_SDK_notifyGeneralConfiguration_SDKConsumer", "../../../../../app/ts/reusable/rm_transversalservices/r_sdk_consumer/IImpl_SDK_notifyInputSourceSetup_SDKConsumer", "../../../../../app/ts/reusable/rm_transversalservices/r_sdk_consumer/IImpl_SDK_notifyPowerSetup_SDKConsumer", "../../../../../app/ts/reusable/rm_transversalservices/r_sdk_consumer//IImpl_SDK_notifyTimeSetup_SDKConsumer", "../../../../../app/ts/reusable/rm_transversalservices/r_sdk_consumer/IImpl_SDK_notifyTvSignageSetup_SDKConsumer", "../../../../../app/ts/reusable/rm_transversalservices/r_sdk_consumer/IImpl_SDK_notifyHardwareSetup_SDKConsumer"], function (require, exports, rmGeneralService, rmTransversalServicesNotifyJsTV, rmTransversalServicesNotifyFileSystem, rmTransversalServicesNotifyApplicationSetup, rmTransversalServicesNotifyAudioSetup, rmTransversalServicesNotifyFirmwareSetup, rmTransversalServicesNotifyGeneralConfiguration, rmTransversalServicesNotifyInputSourceSetup, rmTransversalServicesNotifyPowerSetup, rmTransversalServicesNotifyTimeSetup, rmTransversalServicesNotifyTvSignageSetup, rmTransversalServicesNotifyHardwareSetup) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_transversalservices;
    (function (rm_transversalservices) {
        var R_SDK_Consumer = /** @class */ (function (_super) {
            __extends(R_SDK_Consumer, _super);
            function R_SDK_Consumer(aFactoryDescription, aServiceContainer, aLogService, error) {
                var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
                _this._aSDKJsTV = null;
                _this._iNotify_SDKJsTV = new rmTransversalServicesNotifyJsTV.rm_transversalservices.IImpl_SDK_notifyJsTV_SDKConsumer(_this);
                _this._iNotify_SDKFileSystem = new rmTransversalServicesNotifyFileSystem.rm_transversalservices.IImpl_SDK_notifyFileSystem_SDKConsumer(_this);
                _this._iNotify_SDKApplicationSetup = new rmTransversalServicesNotifyApplicationSetup.rm_transversalservices.IImpl_SDK_notifyApplicationSetup_SDKConsumer(_this);
                _this._iNotify_SDKAudioSetup = new rmTransversalServicesNotifyAudioSetup.rm_transversalservices.IImpl_SDK_notifyAudioSetup_SDKConsumer(_this);
                _this._iNotify_SDKFirmwareSetup = new rmTransversalServicesNotifyFirmwareSetup.rm_transversalservices.IImpl_SDK_notifyFirmwareSetup_SDKConsumer(_this);
                _this._iNotify_SDKGeneralConfiguration = new rmTransversalServicesNotifyGeneralConfiguration.rm_transversalservices.IImpl_SDK_notifyGeneralConfiguration_SDKConsumer(_this);
                _this._iNotify_SDKInputSourceSetup = new rmTransversalServicesNotifyInputSourceSetup.rm_transversalservices.IImpl_SDK_notifyInputSourceSetup_SDKConsumer(_this);
                _this._iNotify_SDKPowerSetup = new rmTransversalServicesNotifyPowerSetup.rm_transversalservices.IImpl_SDK_notifyPowerSetup_SDKConsumer(_this);
                _this._iNotify_SDKTimeSetup = new rmTransversalServicesNotifyTimeSetup.rm_transversalservices.IImpl_SDK_notifyTimeSetup_SDKConsumer(_this);
                _this._iNotify_SDKTvSignageSetup = new rmTransversalServicesNotifyTvSignageSetup.rm_transversalservices.IImpl_SDK_notifyTvSignageSetup_SDKConsumer(_this);
                _this._iNotify_SDKHardwareSetup = new rmTransversalServicesNotifyHardwareSetup.rm_transversalservices.IImpl_SDK_notifyHardwareSetup_SDKConsumer(_this);
                return _this;
                //this._aLogService = aLogService;
            }
            //-----------------------------------------
            R_SDK_Consumer.prototype.setTargetService = function (aTargetService) {
                this._aTargetService = aTargetService;
                this._aSDKJsTV = aTargetService;
            };
            //-----------------------------------------
            R_SDK_Consumer.prototype.setConsumerService = function (aConsumerService) {
                this._aConsumerService = aConsumerService;
            };
            return R_SDK_Consumer;
        }(rmGeneralService.rm_general.R_Service));
        rm_transversalservices.R_SDK_Consumer = R_SDK_Consumer;
    })(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
});
//# sourceMappingURL=R_SDK_Consumer.js.map