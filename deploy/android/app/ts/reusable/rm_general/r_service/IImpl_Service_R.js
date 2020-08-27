"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_general;
(function (rm_general) {
    var IImpl_Service_R = (function () {
        function IImpl_Service_R(owner) {
            this._owner = owner;
        }
        IImpl_Service_R.prototype.getInstanceName = function () {
            return this._owner.getInstanceName();
        };
        IImpl_Service_R.prototype.getAbstractName = function () {
            return this._owner.getAbstractName();
        };
        IImpl_Service_R.prototype.getServiceName = function () {
            return this._owner.getServiceName();
        };
        IImpl_Service_R.prototype.getFactoryName = function () {
            return this._owner.getFactoryName();
        };
        IImpl_Service_R.prototype.injectDependencies = function (aServiceContainer, aServiceLocator, aLogService, error) {
            return this._owner.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
        };
        IImpl_Service_R.prototype.setServiceLocator = function (aServiceLocator) {
            return this._owner.setServiceLocator(aServiceLocator);
        };
        IImpl_Service_R.prototype.setTargetService = function (aTargetService) {
            return this._owner.setTargetService(aTargetService);
        };
        IImpl_Service_R.prototype.setConsumerService = function (aConsumerService) {
            return this._owner.setConsumerService(aConsumerService);
        };
        IImpl_Service_R.prototype.setOwnerService = function (aOwnerService) {
            return this._owner.setOwnerService(aOwnerService);
        };
        IImpl_Service_R.prototype.setUtilsService = function (aUtilsService) {
            return this._owner.setUtilsService(aUtilsService);
        };
        IImpl_Service_R.prototype.setSDKService = function (aSDKService) {
            return this._owner.setSDKService(aSDKService);
        };
        IImpl_Service_R.prototype.addCallback = function (context, callback) {
            return this._owner.addCallback(context, callback);
        };
        IImpl_Service_R.prototype.runCallback = function (context) {
            return this._owner.runCallback(context);
        };
        IImpl_Service_R.prototype.getCallback = function (callId) {
            return this._owner.getCallback(callId);
        };
        return IImpl_Service_R;
    }());
    rm_general.IImpl_Service_R = IImpl_Service_R;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=IImpl_Service_R.js.map