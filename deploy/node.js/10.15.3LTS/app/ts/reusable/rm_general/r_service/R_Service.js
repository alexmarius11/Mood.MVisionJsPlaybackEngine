"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rmGeneralIService = require("../../../../../app/ts/reusable/rm_general/r_service/IImpl_Service_R");
var rmGeneralIRemoteService = require("../../../../../app/ts/reusable/rm_general/r_service/IImpl_RemoteService_R");
var rm_general;
(function (rm_general) {
    var R_Service = (function () {
        function R_Service(aFactoryDescription, aServiceContainer, aLogService, aError) {
            this._aFactoryDescription = aFactoryDescription;
            this._aServiceContainer = aServiceContainer;
            this._aLogService = aLogService;
            this._iService = new rmGeneralIService.rm_general.IImpl_Service_R(this);
            this._iRemoteService = new rmGeneralIRemoteService.rm_general.IImpl_RemoteService_R(this);
            this._aTargetService = null;
            this._aConsumerService = null;
            this._aOwnerService = null;
            this._callbackArray = null;
            this._callbackId = 0;
            this._isRemoteCallback = false;
            this._aUtilsService = null;
            this._aSDKService = null;
        }
        R_Service.prototype.getInstanceName = function () {
            return this._aFactoryDescription._instanceName;
            ;
        };
        R_Service.prototype.getAbstractName = function () {
            return this._aFactoryDescription._abstractName;
        };
        R_Service.prototype.getServiceName = function () {
            return this._aFactoryDescription._serviceName;
        };
        R_Service.prototype.getFactoryName = function () {
            return this._aFactoryDescription._factoryName;
        };
        R_Service.prototype.injectDependencies = function (error) {
        };
        R_Service.prototype.setServiceLocator = function (aServiceLocator) {
            this._aServiceLocator = aServiceLocator;
        };
        R_Service.prototype.setTargetService = function (aTargetService) {
            this._aTargetService = aTargetService;
        };
        R_Service.prototype.setConsumerService = function (aConsumerService) {
            this._aConsumerService = aConsumerService;
        };
        R_Service.prototype.setOwnerService = function (aOwnerService) {
            this._aOwnerService = aOwnerService;
        };
        R_Service.prototype.setUtilsService = function (aUtilsService) {
            this._aUtilsService = aUtilsService;
        };
        R_Service.prototype.setSDKService = function (aSDKService) {
            this._aSDKService = aSDKService;
        };
        R_Service.prototype.addCallback = function (context, callback) {
            if ((context !== null) && (callback !== null) && this._isRemoteCallback) {
                if (this._callbackArray === null)
                    this._callbackArray = new Array();
                var callId = ++this._callbackId;
                var remotecallback = {
                    "_callId": callId,
                    "_callback": callback,
                };
                this._callbackArray.push(remotecallback);
                return callId;
            }
            return 0;
        };
        R_Service.prototype.runCallback = function (context) {
            if (context === null)
                return false;
            if (context._callId === null)
                return false;
            var callback = this.getCallback(context._callId);
            if (callback != null) {
                callback(context);
                return true;
            }
            return false;
        };
        R_Service.prototype.getCallback = function (callId) {
            if (callId === null)
                return null;
            var targetCallback = null;
            for (var i = 0; i < this._callbackArray.length; i++) {
                if (this._callbackArray[i]._callId == callId) {
                    targetCallback = this._callbackArray[i]._callback;
                    this._callbackArray.splice(i, 1);
                    break;
                }
            }
            return targetCallback;
        };
        return R_Service;
    }());
    rm_general.R_Service = R_Service;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=R_Service.js.map