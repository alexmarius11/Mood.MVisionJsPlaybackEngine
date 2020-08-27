"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./cordova/cordova.webos");
require("./cordova/storage");
var nm_transversalservices;
(function (nm_transversalservices) {
    var IImpl_SDK_FirmwareSetup_WebOS = (function () {
        function IImpl_SDK_FirmwareSetup_WebOS(owner) {
            this._owner = owner;
        }
        IImpl_SDK_FirmwareSetup_WebOS.prototype.downloadFirmware = function (firmwareProperties, error, context, callback) {
            var successCb = function () {
                console.log("download firmware is done.");
                callback("download firmware is done.");
            };
            var failureCb = function (cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log(" Error Code [" + errorCode + "]: " + errorText);
                callback(cbObject);
            };
            var storage = new Storage();
            var options = {
                uri: firmwareProperties.getFirmwareUrl()
            };
            storage.downloadFirmware(successCb, failureCb, options);
        };
        IImpl_SDK_FirmwareSetup_WebOS.prototype.promise_downloadFirmware = function (firmwareProperties, error, context, callback) {
        };
        IImpl_SDK_FirmwareSetup_WebOS.prototype.upgradeFirmware = function (firmwareProperties, error, context, callback) {
            var successCb = function () {
                console.log("upgradeFirmware is done.");
                callback("upgradeFirmwareis done.");
            };
            var failureCb = function (cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log(" Error Code [" + errorCode + "]: " + errorText);
                callback(cbObject);
            };
            var storage = new Storage();
            storage.upgradeFirmware(successCb, failureCb);
        };
        IImpl_SDK_FirmwareSetup_WebOS.prototype.promise_upgradeFirmware = function (firmwareProperties, error, context, callback) {
        };
        IImpl_SDK_FirmwareSetup_WebOS.prototype.getFirmwareUpgradeStatus = function (firmwareProperties, error, context, callback) {
            var successCb = function (result) {
                console.log("getFirmwareUpgradeStatus is done." + JSON.stringify(result));
                callback("getFirmwareUpgradeStatus is done." + JSON.stringify(result));
            };
            var failureCb = function (cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log(" Error Code [" + errorCode + "]: " + errorText);
                callback(cbObject);
            };
            var storage = new Storage();
            storage.getFirmwareUpgradeStatus(successCb, failureCb);
        };
        IImpl_SDK_FirmwareSetup_WebOS.prototype.promise_getFirmwareUpgradeStatus = function (firmwareProperties, error, context, callback) {
        };
        return IImpl_SDK_FirmwareSetup_WebOS;
    }());
    nm_transversalservices.IImpl_SDK_FirmwareSetup_WebOS = IImpl_SDK_FirmwareSetup_WebOS;
})(nm_transversalservices = exports.nm_transversalservices || (exports.nm_transversalservices = {}));
//# sourceMappingURL=IImpl_SDK_FirmwareSetup_WebOS.js.map