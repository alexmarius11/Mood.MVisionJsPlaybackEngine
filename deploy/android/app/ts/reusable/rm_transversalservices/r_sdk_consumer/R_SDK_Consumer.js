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
var rmTransversalServicesNotifyJsTV = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_consumer/IImpl_SDK_notifyJsTV_SDKConsumer");
var rmTransversalServicesNotifyFileSystem = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_consumer/IImpl_SDK_notifyFileSystem_SDKConsumer");
var rmTransversalServicesNotifyApplicationSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_consumer/IImpl_SDK_notifyApplicationSetup_SDKConsumer");
var rmTransversalServicesNotifyAudioSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_consumer/IImpl_SDK_notifyAudioSetup_SDKConsumer");
var rmTransversalServicesNotifyFirmwareSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_consumer/IImpl_SDK_notifyFirmwareSetup_SDKConsumer");
var rmTransversalServicesNotifyGeneralConfiguration = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_consumer/IImpl_SDK_notifyGeneralConfiguration_SDKConsumer");
var rmTransversalServicesNotifyInputSourceSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_consumer/IImpl_SDK_notifyInputSourceSetup_SDKConsumer");
var rmTransversalServicesNotifyPowerSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_consumer/IImpl_SDK_notifyPowerSetup_SDKConsumer");
var rmTransversalServicesNotifyTimeSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_consumer//IImpl_SDK_notifyTimeSetup_SDKConsumer");
var rmTransversalServicesNotifyTvSignageSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_consumer/IImpl_SDK_notifyTvSignageSetup_SDKConsumer");
var rmTransversalServicesNotifyHardwareSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_consumer/IImpl_SDK_notifyHardwareSetup_SDKConsumer");
var rm_transversalservices;
(function (rm_transversalservices) {
    var R_SDK_Consumer = (function (_super) {
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
        }
        R_SDK_Consumer.prototype.setTargetService = function (aTargetService) {
            this._aTargetService = aTargetService;
            this._aSDKJsTV = aTargetService;
        };
        R_SDK_Consumer.prototype.setConsumerService = function (aConsumerService) {
            this._aConsumerService = aConsumerService;
        };
        return R_SDK_Consumer;
    }(rmGeneralService.rm_general.R_Service));
    rm_transversalservices.R_SDK_Consumer = R_SDK_Consumer;
})(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
//# sourceMappingURL=R_SDK_Consumer.js.map