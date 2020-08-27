define(["require", "exports", "./cordova/cordova.webos", "./cordova/storage"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var nm_transversalservices;
    (function (nm_transversalservices) {
        var IImpl_SDK_FirmwareSetup_WebOS = /** @class */ (function () {
            //----------- constructor 
            function IImpl_SDK_FirmwareSetup_WebOS(owner) {
                this._owner = owner;
            }
            //-------------------------------------
            //   download Firmware
            //-------------------------------------   
            //-------------------------------------   
            IImpl_SDK_FirmwareSetup_WebOS.prototype.downloadFirmware = function (firmwareProperties, error, context, callback) {
                // Callback for a successful execution.
                // This callback will be called without any parameter.  
                var successCb = function () {
                    console.log("download firmware is done.");
                    callback("download firmware is done.");
                };
                // Callback for a failed execution.
                // Failure callback will be invoked with the error code and the error text.
                var failureCb = function (cbObject) {
                    var errorCode = cbObject.errorCode;
                    var errorText = cbObject.errorText;
                    console.log(" Error Code [" + errorCode + "]: " + errorText);
                    callback(cbObject);
                };
                // Create storage object and invoke the API.    
                var storage = new Storage();
                var options = {
                    uri: firmwareProperties.getFirmwareUrl() //"http://example.org/myModel-secured_usb_V3_SECURED.epk" 
                };
                storage.downloadFirmware(successCb, failureCb, options);
            };
            //-------------------------------------   
            IImpl_SDK_FirmwareSetup_WebOS.prototype.promise_downloadFirmware = function (firmwareProperties, error, context, callback) {
            };
            //-------------------------------------
            //   upgrade Firmware
            //-------------------------------------   
            //-------------------------------------   
            IImpl_SDK_FirmwareSetup_WebOS.prototype.upgradeFirmware = function (firmwareProperties, error, context, callback) {
                // Callback for a successful execution.
                // This callback will be called without any parameter.  
                var successCb = function () {
                    console.log("upgradeFirmware is done.");
                    callback("upgradeFirmwareis done.");
                };
                // Callback for a failed execution.
                // Failure callback will be invoked with the error code and the error text.
                var failureCb = function (cbObject) {
                    var errorCode = cbObject.errorCode;
                    var errorText = cbObject.errorText;
                    console.log(" Error Code [" + errorCode + "]: " + errorText);
                    callback(cbObject);
                };
                // Create storage object and invoke the API.    
                var storage = new Storage();
                storage.upgradeFirmware(successCb, failureCb);
            };
            //-------------------------------------   
            IImpl_SDK_FirmwareSetup_WebOS.prototype.promise_upgradeFirmware = function (firmwareProperties, error, context, callback) {
            };
            //-------------------------------------   
            IImpl_SDK_FirmwareSetup_WebOS.prototype.getFirmwareUpgradeStatus = function (firmwareProperties, error, context, callback) {
                // Callback for a successful execution.
                // This callback will be called without any parameter.  
                var successCb = function (result) {
                    console.log("getFirmwareUpgradeStatus is done." + JSON.stringify(result));
                    callback("getFirmwareUpgradeStatus is done." + JSON.stringify(result));
                };
                // Callback for a failed execution.
                // Failure callback will be invoked with the error code and the error text.
                var failureCb = function (cbObject) {
                    var errorCode = cbObject.errorCode;
                    var errorText = cbObject.errorText;
                    console.log(" Error Code [" + errorCode + "]: " + errorText);
                    callback(cbObject);
                };
                // Create storage object and invoke the API.    
                var storage = new Storage();
                storage.getFirmwareUpgradeStatus(successCb, failureCb);
            };
            //-------------------------------------   
            IImpl_SDK_FirmwareSetup_WebOS.prototype.promise_getFirmwareUpgradeStatus = function (firmwareProperties, error, context, callback) {
            };
            return IImpl_SDK_FirmwareSetup_WebOS;
        }()); //--- end class
        nm_transversalservices.IImpl_SDK_FirmwareSetup_WebOS = IImpl_SDK_FirmwareSetup_WebOS;
    })(nm_transversalservices = exports.nm_transversalservices || (exports.nm_transversalservices = {}));
});
//# sourceMappingURL=IImpl_SDK_FirmwareSetup_WebOS.js.map