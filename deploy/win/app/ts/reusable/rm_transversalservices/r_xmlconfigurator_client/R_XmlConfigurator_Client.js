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
var rmTransversalServicesIXmlConfiguratorMain = require("../../../../../app/ts/reusable/rm_transversalservices/r_xmlconfigurator_client/IImpl_XmlConfiguratorMain_Client");
var rmTransversalServicesIXmlConfiguratorSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_xmlconfigurator_client/IImpl_XmlConfiguratorSetup_Client");
var rmTransversalServicesRemoteService = require("../../../../../app/ts/reusable/rm_transversalservices/r_xmlconfigurator_client/IImpl_XmlConfiguratorRemoteService_Client");
var rm_transversalservices;
(function (rm_transversalservices) {
    var R_XmlConfigurator_Client = (function (_super) {
        __extends(R_XmlConfigurator_Client, _super);
        function R_XmlConfigurator_Client(aFactoryDescription, aServiceContainer, aLogService, error) {
            var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
            _this._callbackArray = new Array();
            _this._callbackId = 0;
            _this._isRemoteCallback = true;
            _this._socket = null;
            _this._remoteServerUrl = "";
            _this._iRemoteService = new rmTransversalServicesRemoteService.rm_transversalservices.IImpl_XmlConfiguratorRemoteService_Client(_this);
            _this._iXmlConfiguratorMain = new rmTransversalServicesIXmlConfiguratorMain.rm_transversalservices.IImpl_XmlConfiguratorMain_Client(_this);
            _this._iXmlConfiguratorSetup = new rmTransversalServicesIXmlConfiguratorSetup.rm_transversalservices.IImpl_XmlConfiguratorSetup_Client(_this);
            return _this;
        }
        R_XmlConfigurator_Client.prototype.startup_withConnectClient = function (remoteServerUrl) {
            this._remoteServerUrl = remoteServerUrl;
            this._socket = io(this._remoteServerUrl);
            this._iRemoteService.receive(this._socket, null);
        };
        R_XmlConfigurator_Client.prototype.startup = function (socket) {
            this._socket = socket;
            this._iRemoteService.receive(this._socket, null);
        };
        R_XmlConfigurator_Client.prototype.setTargetService = function (aTargetService) {
            this._aTargetService = aTargetService;
        };
        R_XmlConfigurator_Client.prototype.setConsumerService = function (aConsumerService) {
            this._aConsumerService = aConsumerService;
        };
        return R_XmlConfigurator_Client;
    }(rmGeneralService.rm_general.R_Service));
    rm_transversalservices.R_XmlConfigurator_Client = R_XmlConfigurator_Client;
})(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
//# sourceMappingURL=R_XmlConfigurator_Client.js.map