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
var rmTransversalServicesJsTV = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_connector/IImpl_SDK_JsTV_SDKConnector");
var rmTransversalServicesFileSystem = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_connector/IImpl_SDK_FileSystem_SDKConnector");
var rmTransversalServicesApplicationSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_connector/IImpl_SDK_ApplicationSetup_SDKConnector");
var rmTransversalServicesAudioSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_connector/IImpl_SDK_AudioSetup_SDKConnector");
var rmTransversalServicesFirmwareSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_connector/IImpl_SDK_FirmwareSetup_SDKConnector");
var rmTransversalServicesGeneralConfiguration = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_connector/IImpl_SDK_GeneralConfiguration_SDKConnector");
var rmTransversalServicesInputSourceSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_connector/IImpl_SDK_InputSourceSetup_SDKConnector");
var rmTransversalServicesPowerSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_connector/IImpl_SDK_PowerSetup_SDKConnector");
var rmTransversalServicesTimeSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_connector/IImpl_SDK_TimeSetup_SDKConnector");
var rmTransversalServicesTvSignageSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_connector/IImpl_SDK_TvSignageSetup_SDKConnector");
var rmTransversalServicesHardwareSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_connector/IImpl_SDK_HardwareSetup_SDKConnector");
var rmTransversalServicesNotifyJsTV = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_connector/IImpl_SDK_notifyJsTV_SDKConnector");
var rmTransversalServicesNotifyFileSystem = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_connector/IImpl_SDK_notifyFileSystem_SDKConnector");
var rmTransversalServicesNotifyApplicationSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_connector/IImpl_SDK_notifyApplicationSetup_SDKConnector");
var rmTransversalServicesNotifyAudioSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_connector/IImpl_SDK_notifyAudioSetup_SDKConnector");
var rmTransversalServicesNotifyFirmwareSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_connector/IImpl_SDK_notifyFirmwareSetup_SDKConnector");
var rmTransversalServicesNotifyGeneralConfiguration = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_connector/IImpl_SDK_notifyGeneralConfiguration_SDKConnector");
var rmTransversalServicesNotifyInputSourceSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_connector/IImpl_SDK_notifyInputSourceSetup_SDKConnector");
var rmTransversalServicesNotifyPowerSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_connector/IImpl_SDK_notifyPowerSetup_SDKConnector");
var rmTransversalServicesNotifyTimeSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_connector//IImpl_SDK_notifyTimeSetup_SDKConnector");
var rmTransversalServicesNotifyTvSignageSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_connector/IImpl_SDK_notifyTvSignageSetup_SDKConnector");
var rmTransversalServicesNotifyHardwareSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_connector/IImpl_SDK_notifyHardwareSetup_SDKConnector");
var rm_transversalservices;
(function (rm_transversalservices) {
    var R_SDK_Connector = (function (_super) {
        __extends(R_SDK_Connector, _super);
        function R_SDK_Connector(aFactoryDescription, aServiceContainer, aLogService, error) {
            var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
            _this._aSDKJsTV = null;
            _this._aSDKConsumer = null;
            _this._iSDKJsTV = new rmTransversalServicesJsTV.rm_transversalservices.IImpl_SDK_JsTV_SDKConnector(_this);
            _this._iSDKFileSystem = new rmTransversalServicesFileSystem.rm_transversalservices.IImpl_SDK_FileSystem_SDKConnector(_this);
            _this._iSDKApplicationSetup = new rmTransversalServicesApplicationSetup.rm_transversalservices.IImpl_SDK_ApplicationSetup_SDKConnector(_this);
            _this._iSDKAudioSetup = new rmTransversalServicesAudioSetup.rm_transversalservices.IImpl_SDK_AudioSetup_SDKConnector(_this);
            _this._iSDKFirmwareSetup = new rmTransversalServicesFirmwareSetup.rm_transversalservices.IImpl_SDK_FirmwareSetup_SDKConnector(_this);
            _this._iSDKGeneralConfiguration = new rmTransversalServicesGeneralConfiguration.rm_transversalservices.IImpl_SDK_GeneralConfiguration_SDKConnector(_this);
            _this._iSDKInputSourceSetup = new rmTransversalServicesInputSourceSetup.rm_transversalservices.IImpl_SDK_InputSourceSetup_SDKConnector(_this);
            _this._iSDKPowerSetup = new rmTransversalServicesPowerSetup.rm_transversalservices.IImpl_SDK_PowerSetup_SDKConnector(_this);
            _this._iSDKTimeSetup = new rmTransversalServicesTimeSetup.rm_transversalservices.IImpl_SDK_TimeSetup_SDKConnector(_this);
            _this._iSDKTvSignageSetup = new rmTransversalServicesTvSignageSetup.rm_transversalservices.IImpl_SDK_TvSignageSetup_SDKConnector(_this);
            _this._iSDKHardwareSetup = new rmTransversalServicesHardwareSetup.rm_transversalservices.IImpl_SDK_HardwareSetup_SDKConnector(_this);
            _this._iNotify_SDKJsTV = new rmTransversalServicesNotifyJsTV.rm_transversalservices.IImpl_SDK_notifyJsTV_SDKConnector(_this);
            _this._iNotify_SDKFileSystem = new rmTransversalServicesNotifyFileSystem.rm_transversalservices.IImpl_SDK_notifyFileSystem_SDKConnector(_this);
            _this._iNotify_SDKApplicationSetup = new rmTransversalServicesNotifyApplicationSetup.rm_transversalservices.IImpl_SDK_notifyApplicationSetup_SDKConnector(_this);
            _this._iNotify_SDKAudioSetup = new rmTransversalServicesNotifyAudioSetup.rm_transversalservices.IImpl_SDK_notifyAudioSetup_SDKConnector(_this);
            _this._iNotify_SDKFirmwareSetup = new rmTransversalServicesNotifyFirmwareSetup.rm_transversalservices.IImpl_SDK_notifyFirmwareSetup_SDKConnector(_this);
            _this._iNotify_SDKGeneralConfiguration = new rmTransversalServicesNotifyGeneralConfiguration.rm_transversalservices.IImpl_SDK_notifyGeneralConfiguration_SDKConnector(_this);
            _this._iNotify_SDKInputSourceSetup = new rmTransversalServicesNotifyInputSourceSetup.rm_transversalservices.IImpl_SDK_notifyInputSourceSetup_SDKConnector(_this);
            _this._iNotify_SDKPowerSetup = new rmTransversalServicesNotifyPowerSetup.rm_transversalservices.IImpl_SDK_notifyPowerSetup_SDKConnector(_this);
            _this._iNotify_SDKTimeSetup = new rmTransversalServicesNotifyTimeSetup.rm_transversalservices.IImpl_SDK_notifyTimeSetup_SDKConnector(_this);
            _this._iNotify_SDKTvSignageSetup = new rmTransversalServicesNotifyTvSignageSetup.rm_transversalservices.IImpl_SDK_notifyTvSignageSetup_SDKConnector(_this);
            _this._iNotify_SDKHardwareSetup = new rmTransversalServicesNotifyHardwareSetup.rm_transversalservices.IImpl_SDK_notifyHardwareSetup_SDKConnector(_this);
            return _this;
        }
        R_SDK_Connector.prototype.setTargetService = function (targetService) {
            this._aSDKJsTV = targetService;
        };
        R_SDK_Connector.prototype.setConsumerService = function (consumerService) {
            this._aSDKConsumer = consumerService;
        };
        return R_SDK_Connector;
    }(rmGeneralService.rm_general.R_Service));
    rm_transversalservices.R_SDK_Connector = R_SDK_Connector;
})(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
//# sourceMappingURL=R_SDK_Connector.js.map