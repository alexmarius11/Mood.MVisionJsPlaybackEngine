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
var rmTransversalServicesNotifyJsTV = require("../../../../../app/ts/reusable/rm_renderingservices/r_sdkrenderer/IImpl_SDK_notifyJsTV_SDKConsumer_SDKRenderer");
var rmTransversalServicesNotifyFileSystem = require("../../../../../app/ts/reusable/rm_renderingservices/r_sdkrenderer/IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer");
var rmTransversalServicesNotifyApplicationSetup = require("../../../../../app/ts/reusable/rm_renderingservices/r_sdkrenderer/IImpl_SDK_notifyApplicationSetup_SDKConsumer_SDKRenderer");
var rmTransversalServicesNotifyAudioSetup = require("../../../../../app/ts/reusable/rm_renderingservices/r_sdkrenderer/IImpl_SDK_notifyAudioSetup_SDKConsumer_SDKRenderer");
var rmTransversalServicesNotifyFirmwareSetup = require("../../../../../app/ts/reusable/rm_renderingservices/r_sdkrenderer/IImpl_SDK_notifyFirmwareSetup_SDKConsumer_SDKRenderer");
var rmTransversalServicesNotifyGeneralConfiguration = require("../../../../../app/ts/reusable/rm_renderingservices/r_sdkrenderer/IImpl_SDK_notifyGeneralConfiguration_SDKConsumer_SDKRenderer");
var rmTransversalServicesNotifyInputSourceSetup = require("../../../../../app/ts/reusable/rm_renderingservices/r_sdkrenderer/IImpl_SDK_notifyInputSourceSetup_SDKConsumer_SDKRenderer");
var rmTransversalServicesNotifyPowerSetup = require("../../../../../app/ts/reusable/rm_renderingservices/r_sdkrenderer/IImpl_SDK_notifyPowerSetup_SDKConsumer_SDKRenderer");
var rmTransversalServicesNotifyTimeSetup = require("../../../../../app/ts/reusable/rm_renderingservices/r_sdkrenderer//IImpl_SDK_notifyTimeSetup_SDKConsumer_SDKRenderer");
var rmTransversalServicesNotifyTvSignageSetup = require("../../../../../app/ts/reusable/rm_renderingservices/r_sdkrenderer/IImpl_SDK_notifyTvSignageSetup_SDKConsumer_SDKRenderer");
var rmTransversalServicesNotifyHardwareSetup = require("../../../../../app/ts/reusable/rm_renderingservices/r_sdkrenderer/IImpl_SDK_notifyHardwareSetup_SDKConsumer_SDKRenderer");
var rmGeneralService = require("../../../../../app/ts/reusable/rm_general/r_service/R_Service");
var rm_renderingservices;
(function (rm_renderingservices) {
    var R_SDKConsumer_SDKRenderer = (function (_super) {
        __extends(R_SDKConsumer_SDKRenderer, _super);
        function R_SDKConsumer_SDKRenderer(aFactoryDescription, aServiceContainer, aLogService, error) {
            var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
            _this._aLogService = aLogService;
            _this._aSDKRenderer = null;
            _this._iNotify_SDKJsTV = new rmTransversalServicesNotifyJsTV.rm_transversalservices.IImpl_SDK_notifyJsTV_SDKConsumer_SDKRenderer(_this);
            _this._iNotify_SDKFileSystem = new rmTransversalServicesNotifyFileSystem.rm_transversalservices.IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer(_this);
            _this._iNotify_SDKApplicationSetup = new rmTransversalServicesNotifyApplicationSetup.rm_transversalservices.IImpl_SDK_notifyApplicationSetup_SDKConsumer_SDKRenderer(_this);
            _this._iNotify_SDKAudioSetup = new rmTransversalServicesNotifyAudioSetup.rm_transversalservices.IImpl_SDK_notifyAudioSetup_SDKConsumer_SDKRenderer(_this);
            _this._iNotify_SDKFirmwareSetup = new rmTransversalServicesNotifyFirmwareSetup.rm_transversalservices.IImpl_SDK_notifyFirmwareSetup_SDKConsumer_SDKRenderer(_this);
            _this._iNotify_SDKGeneralConfiguration = new rmTransversalServicesNotifyGeneralConfiguration.rm_transversalservices.IImpl_SDK_notifyGeneralConfiguration_SDKConsumer_SDKRenderer(_this);
            _this._iNotify_SDKInputSourceSetup = new rmTransversalServicesNotifyInputSourceSetup.rm_transversalservices.IImpl_SDK_notifyInputSourceSetup_SDKConsumer_SDKRenderer(_this);
            _this._iNotify_SDKPowerSetup = new rmTransversalServicesNotifyPowerSetup.rm_transversalservices.IImpl_SDK_notifyPowerSetup_SDKConsumer_SDKRenderer(_this);
            _this._iNotify_SDKTimeSetup = new rmTransversalServicesNotifyTimeSetup.rm_transversalservices.IImpl_SDK_notifyTimeSetup_SDKConsumer_SDKRenderer(_this);
            _this._iNotify_SDKTvSignageSetup = new rmTransversalServicesNotifyTvSignageSetup.rm_transversalservices.IImpl_SDK_notifyTvSignageSetup_SDKConsumer_SDKRenderer(_this);
            _this._iNotify_SDKHardwareSetup = new rmTransversalServicesNotifyHardwareSetup.rm_transversalservices.IImpl_SDK_notifyHardwareSetup_SDKConsumer_SDKRenderer(_this);
            return _this;
        }
        R_SDKConsumer_SDKRenderer.prototype.setOwnerService = function (aOwnerService) {
            this._aOwnerService = aOwnerService;
            this._aSDKRenderer = aOwnerService;
        };
        return R_SDKConsumer_SDKRenderer;
    }(rmGeneralService.rm_general.R_Service));
    rm_renderingservices.R_SDKConsumer_SDKRenderer = R_SDKConsumer_SDKRenderer;
})(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
//# sourceMappingURL=R_SDKConsumer_SDKRenderer.js.map