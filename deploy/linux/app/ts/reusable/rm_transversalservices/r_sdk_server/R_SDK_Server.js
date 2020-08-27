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
var rmTransversalServicesJsTV = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_server/IImpl_SDK_JsTV_SDKServer");
var rmTransversalServicesFileSystem = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_server/IImpl_SDK_FileSystem_SDKServer");
var rmTransversalServicesApplicationSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_server/IImpl_SDK_ApplicationSetup_SDKServer");
var rmTransversalServicesAudioSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_server/IImpl_SDK_AudioSetup_SDKServer");
var rmTransversalServicesFirmwareSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_server/IImpl_SDK_FirmwareSetup_SDKServer");
var rmTransversalServicesGeneralConfiguration = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_server/IImpl_SDK_GeneralConfiguration_SDKServer");
var rmTransversalServicesInputSourceSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_server/IImpl_SDK_InputSourceSetup_SDKServer");
var rmTransversalServicesPowerSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_server/IImpl_SDK_PowerSetup_SDKServer");
var rmTransversalServicesTimeSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_server/IImpl_SDK_TimeSetup_SDKServer");
var rmTransversalServicesTvSignageSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_server/IImpl_SDK_TvSignageSetup_SDKServer");
var rmTransversalServicesHardwareSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_server/IImpl_SDK_HardwareSetup_SDKServer");
var rmTransversalServicesRemoteService = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_server/IImpl_RemoteService_SDKServer");
var rm_transversalservices;
(function (rm_transversalservices) {
    var R_SDK_Server = (function (_super) {
        __extends(R_SDK_Server, _super);
        function R_SDK_Server(aFactoryDescription, aServiceContainer, aLogService, error) {
            var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
            _this._iRemoteService = new rmTransversalServicesRemoteService.rm_transversalservices.IImpl_RemoteService_SDKServer(_this);
            _this._iSDKJsTV = new rmTransversalServicesJsTV.rm_transversalservices.IImpl_SDK_JsTV_SDKServer(_this);
            _this._iSDKFileSystem = new rmTransversalServicesFileSystem.rm_transversalservices.IImpl_SDK_FileSystem_SDKServer(_this);
            _this._iSDKApplicationSetup = new rmTransversalServicesApplicationSetup.rm_transversalservices.IImpl_SDK_ApplicationSetup_SDKServer(_this);
            _this._iSDKAudioSetup = new rmTransversalServicesAudioSetup.rm_transversalservices.IImpl_SDK_AudioSetup_SDKServer(_this);
            _this._iSDKFirmwareSetup = new rmTransversalServicesFirmwareSetup.rm_transversalservices.IImpl_SDK_FirmwareSetup_SDKServer(_this);
            _this._iSDKGeneralConfiguration = new rmTransversalServicesGeneralConfiguration.rm_transversalservices.IImpl_SDK_GeneralConfiguration_SDKServer(_this);
            _this._iSDKInputSourceSetup = new rmTransversalServicesInputSourceSetup.rm_transversalservices.IImpl_SDK_InputSourceSetup_SDKServer(_this);
            _this._iSDKPowerSetup = new rmTransversalServicesPowerSetup.rm_transversalservices.IImpl_SDK_PowerSetup_SDKServer(_this);
            _this._iSDKTimeSetup = new rmTransversalServicesTimeSetup.rm_transversalservices.IImpl_SDK_TimeSetup_SDKServer(_this);
            _this._iSDKTvSignageSetup = new rmTransversalServicesTvSignageSetup.rm_transversalservices.IImpl_SDK_TvSignageSetup_SDKServer(_this);
            _this._iSDKHardwareSetup = new rmTransversalServicesHardwareSetup.rm_transversalservices.IImpl_SDK_HardwareSetup_SDKServer(_this);
            return _this;
        }
        R_SDK_Server.prototype.setTargetService = function (targetService) {
            this._aTargetSDK = targetService;
        };
        return R_SDK_Server;
    }(rmGeneralService.rm_general.R_Service));
    rm_transversalservices.R_SDK_Server = R_SDK_Server;
})(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
//# sourceMappingURL=R_SDK_Server.js.map