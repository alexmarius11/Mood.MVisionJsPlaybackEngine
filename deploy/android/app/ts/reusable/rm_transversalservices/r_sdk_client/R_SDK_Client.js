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
var rmTransversalServicesJsTV = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_client/IImpl_SDK_JsTV_SDKClient");
var rmTransversalServicesFileSystem = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_client/IImpl_SDK_FileSystem_SDKClient");
var rmTransversalServicesApplicationSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_client/IImpl_SDK_ApplicationSetup_SDKClient");
var rmTransversalServicesAudioSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_client/IImpl_SDK_AudioSetup_SDKClient");
var rmTransversalServicesFirmwareSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_client/IImpl_SDK_FirmwareSetup_SDKClient");
var rmTransversalServicesGeneralConfiguration = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_client/IImpl_SDK_GeneralConfiguration_SDKClient");
var rmTransversalServicesInputSourceSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_client/IImpl_SDK_InputSourceSetup_SDKClient");
var rmTransversalServicesPowerSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_client/IImpl_SDK_PowerSetup_SDKClient");
var rmTransversalServicesTimeSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_client//IImpl_SDK_TimeSetup_SDKClient");
var rmTransversalServicesTvSignageSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_client/IImpl_SDK_TvSignageSetup_SDKClient");
var rmTransversalServicesHardwareSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_client/IImpl_SDK_HardwareSetup_SDKClient");
var rmTransversalServicesRemoteService = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_client/IImpl_RemoteService_SDKClient");
var rm_transversalservices;
(function (rm_transversalservices) {
    var R_SDK_Client = (function (_super) {
        __extends(R_SDK_Client, _super);
        function R_SDK_Client(aFactoryDescription, aServiceContainer, aLogService, error) {
            var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
            _this._socket = null;
            _this._remoteServerUrl = "";
            _this._iRemoteService = new rmTransversalServicesRemoteService.rm_transversalservices.IImpl_RemoteService_SDKClient(_this);
            _this._iSDKJsTV = new rmTransversalServicesJsTV.rm_transversalservices.IImpl_SDK_JsTV_SDKClient(_this);
            _this._iSDKFileSystem = new rmTransversalServicesFileSystem.rm_transversalservices.IImpl_SDK_FileSystem_SDKClient(_this);
            _this._iSDKApplicationSetup = new rmTransversalServicesApplicationSetup.rm_transversalservices.IImpl_SDK_ApplicationSetup_SDKClient(_this);
            _this._iSDKAudioSetup = new rmTransversalServicesAudioSetup.rm_transversalservices.IImpl_SDK_AudioSetup_SDKClient(_this);
            _this._iSDKFirmwareSetup = new rmTransversalServicesFirmwareSetup.rm_transversalservices.IImpl_SDK_FirmwareSetup_SDKClient(_this);
            _this._iSDKGeneralConfiguration = new rmTransversalServicesGeneralConfiguration.rm_transversalservices.IImpl_SDK_GeneralConfiguration_SDKClient(_this);
            _this._iSDKInputSourceSetup = new rmTransversalServicesInputSourceSetup.rm_transversalservices.IImpl_SDK_InputSourceSetup_SDKClient(_this);
            _this._iSDKPowerSetup = new rmTransversalServicesPowerSetup.rm_transversalservices.IImpl_SDK_PowerSetup_SDKClient(_this);
            _this._iSDKTimeSetup = new rmTransversalServicesTimeSetup.rm_transversalservices.IImpl_SDK_TimeSetup_SDKClient(_this);
            _this._iSDKTvSignageSetup = new rmTransversalServicesTvSignageSetup.rm_transversalservices.IImpl_SDK_TvSignageSetup_SDKClient(_this);
            _this._iSDKHardwareSetup = new rmTransversalServicesHardwareSetup.rm_transversalservices.IImpl_SDK_HardwareSetup_SDKClient(_this);
            _this._aSDKConsumer = null;
            return _this;
        }
        R_SDK_Client.prototype.startup_withConnectClient = function (remoteServerUrl) {
            this._remoteServerUrl = remoteServerUrl;
            this._socket = io(this._remoteServerUrl);
            this._iRemoteService.receive(this._socket, null);
        };
        R_SDK_Client.prototype.startup = function (socket) {
            this._socket = socket;
            this._iRemoteService.receive(this._socket, null);
        };
        R_SDK_Client.prototype.setTargetService = function (aTargetService) {
            this._aTargetService = aTargetService;
        };
        R_SDK_Client.prototype.setConsumerService = function (aConsumerService) {
            this._aConsumerService = aConsumerService;
            this._aSDKConsumer = aConsumerService;
        };
        return R_SDK_Client;
    }(rmGeneralService.rm_general.R_Service));
    rm_transversalservices.R_SDK_Client = R_SDK_Client;
})(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
//# sourceMappingURL=R_SDK_Client.js.map