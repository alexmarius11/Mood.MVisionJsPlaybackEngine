define(["require", "exports", "./cordova/cordova.webos", "./cordova/configuration"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var nm_transversalservices;
    (function (nm_transversalservices) {
        var IImpl_SDK_GeneralConfiguration_WebOS = /** @class */ (function () {
            //----------- constructor 
            function IImpl_SDK_GeneralConfiguration_WebOS(owner) {
                this._owner = owner;
            }
            IImpl_SDK_GeneralConfiguration_WebOS.prototype.api_clearCache = function (callback) {
                function successCb() {
                    callback("clearCache success");
                }
                function failureCb(cbObject) {
                    var errorCode = cbObject.errorCode;
                    var errorText = cbObject.errorText;
                    console.log("Error Code [" + errorCode + "]: " + errorText);
                    callback(cbObject);
                }
                var conf = new Configuration();
                conf.clearCache(successCb, failureCb);
            };
            //-------------------------------------
            //     clear Cache 
            //-------------------------------------
            IImpl_SDK_GeneralConfiguration_WebOS.prototype.clearChache = function (error, context, callback) {
                function successCb() {
                    callback("clearCache success");
                }
                function failureCb(cbObject) {
                    var errorCode = cbObject.errorCode;
                    var errorText = cbObject.errorText;
                    console.log("Error Code [" + errorCode + "]: " + errorText);
                    callback(cbObject);
                }
                var conf = new Configuration();
                conf.clearCache(successCb, failureCb);
            };
            IImpl_SDK_GeneralConfiguration_WebOS.prototype.promise_clearCache = function (error, context, callback) {
            };
            //-------------------------------------
            //     get/set Screen Properties
            //-------------------------------------
            IImpl_SDK_GeneralConfiguration_WebOS.prototype.setScreenProperties = function (newScreenProperties, error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_WebOS.prototype.promise_setScreenProperties = function (newScreenProperties, error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_WebOS.prototype.getScreenProperties = function (error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_WebOS.prototype.promise_getScreenProperties = function (error, context, callback) {
            };
            //-------------------------------------
            //     get/set Screen Mode
            //-------------------------------------
            IImpl_SDK_GeneralConfiguration_WebOS.prototype.setScreenMode = function (newScreenProperties, error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_WebOS.prototype.promise_setScreenMode = function (newScreenProperties, error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_WebOS.prototype.getScreenMode = function (error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_WebOS.prototype.promise_getScreenMode = function (error, context, callback) {
            };
            //-------------------------------------
            //     get/set OSD Languages
            //-------------------------------------
            IImpl_SDK_GeneralConfiguration_WebOS.prototype.setOSDLanguages = function (osdLanguages, error, context, callback) {
                var options = {
                    specifier: "ko-KR"
                };
                function successCb() {
                    callback("setOSDLanguage success");
                }
                function failureCb(cbObject) {
                    var errorCode = cbObject.errorCode;
                    var errorText = cbObject.errorText;
                    console.log("Error Code [" + errorCode + "]: " + errorText);
                    callback(cbObject);
                }
                new Configuration().setOSDLanguage(successCb, failureCb, options);
            };
            IImpl_SDK_GeneralConfiguration_WebOS.prototype.promise_setOsdLanguages = function (crtDateTime, error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_WebOS.prototype.getOSDLanguages = function (error, context, callback) {
                function successCb(cbObject) {
                    console.log("cbObject : " + JSON.stringify(cbObject));
                    callback(cbObject);
                }
                function failureCb(cbObject) {
                    var errorCode = cbObject.errorCode;
                    var errorText = cbObject.errorText;
                    console.log("Error Code [" + errorCode + "]: " + errorText);
                    callback(cbObject);
                }
                var conf = new Configuration();
                conf.getOSDLanguage(successCb, failureCb);
            };
            IImpl_SDK_GeneralConfiguration_WebOS.prototype.promise_getOsdLanguages = function (error, context, callback) {
            };
            //-------------------------------------
            //     get/set OSD Lock
            //-------------------------------------
            IImpl_SDK_GeneralConfiguration_WebOS.prototype.setOSDLock = function (osdLock, error, context, callback) {
                var options = {
                    enabled: true
                };
                function successCb() {
                    callback("setOSDLock success");
                }
                function failureCb(cbObject) {
                    var errorCode = cbObject.errorCode;
                    var errorText = cbObject.errorText;
                    console.log("Error Code [" + errorCode + "]: " + errorText);
                    callback(cbObject);
                }
                new Configuration().setOSDLock(successCb, failureCb, options);
            };
            IImpl_SDK_GeneralConfiguration_WebOS.prototype.promise_setOsdLock = function (osdLock, error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_WebOS.prototype.getOSDLock = function (error, context, callback) {
                function successCb(cbObject) {
                    console.log("cbObject : " + JSON.stringify(cbObject));
                    callback(cbObject);
                }
                function failureCb(cbObject) {
                    var errorCode = cbObject.errorCode;
                    var errorText = cbObject.errorText;
                    console.log("Error Code [" + errorCode + "]: " + errorText);
                    callback(cbObject);
                }
                var conf = new Configuration();
                conf.getOSDLock(successCb, failureCb);
            };
            IImpl_SDK_GeneralConfiguration_WebOS.prototype.promise_getOSDLock = function (error, context, callback) {
            };
            //-------------------------------------
            //     get/set VirtualKeybordLanguages
            //-------------------------------------
            IImpl_SDK_GeneralConfiguration_WebOS.prototype.setVirtualKeybordLanguages = function (virtKeyboardLanguages, error, context, callback) {
                var options = {
                    languageCodeList: ["fr", "es", "ko"]
                };
                function successCb() {
                    callback("setVirtualKeyboardLanguage success");
                }
                function failureCb(cbObject) {
                    var errorCode = cbObject.errorCode;
                    var errorText = cbObject.errorText;
                    console.log("Error Code [" + errorCode + "]: " + errorText);
                    callback(cbObject);
                }
                new Configuration().setVirtualKeyboardLanguage(successCb, failureCb, options);
            };
            IImpl_SDK_GeneralConfiguration_WebOS.prototype.promise_setVirtualKeyboardLanguages = function (virtKeyboardLanguages, error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_WebOS.prototype.getVirtualKeyboardLanguages = function (error, context, callback) {
                function successCb(cbObject) {
                    console.log("cbObject : " + JSON.stringify(cbObject));
                    callback(cbObject);
                }
                function failureCb(cbObject) {
                    var errorCode = cbObject.errorCode;
                    var errorText = cbObject.errorText;
                    console.log("Error Code [" + errorCode + "]: " + errorText);
                    callback(cbObject);
                }
                var conf = new Configuration();
                conf.getVirtualKeyboardLanguage(successCb, failureCb);
            };
            IImpl_SDK_GeneralConfiguration_WebOS.prototype.promise_getVirtualKeyboardLanguages = function (error, context, callback) {
            };
            //--------------------------------
            //     get/set USB Lock
            //--------------------------------
            IImpl_SDK_GeneralConfiguration_WebOS.prototype.setUSBLock = function (lockUsb, error, context, callback) {
                var options = {
                    enabled: true
                };
                function successCb() {
                    callback("setUSBLock success");
                }
                function failureCb(cbObject) {
                    var errorCode = cbObject.errorCode;
                    var errorText = cbObject.errorText;
                    console.log("Error Code [" + errorCode + "]: " + errorText);
                    callback(cbObject);
                }
                new Configuration().setUSBLock(successCb, failureCb, options);
            };
            IImpl_SDK_GeneralConfiguration_WebOS.prototype.promise_getUSB = function (lockUsb, error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_WebOS.prototype.getUSBLock = function (error, context, callback) {
                function successCb(cbObject) {
                    console.log("cbObject : " + JSON.stringify(cbObject));
                    callback(cbObject);
                }
                function failureCb(cbObject) {
                    var errorCode = cbObject.errorCode;
                    var errorText = cbObject.errorText;
                    console.log("Error Code [" + errorCode + "]: " + errorText);
                    callback(cbObject);
                }
                var conf = new Configuration();
                conf.getUSBLock(successCb, failureCb);
            };
            IImpl_SDK_GeneralConfiguration_WebOS.prototype.promise_setUSBLock = function (error, context, callback) {
            };
            //--------------------------------
            //     get/set General Property
            //--------------------------------
            IImpl_SDK_GeneralConfiguration_WebOS.prototype.setGeneralProperty = function (property, error, context, callback) {
                var options = '{"alias":"display_1"}';
                function successCb() {
                    callback("setPictureProperty success");
                }
                function failureCb(cbObject) {
                    var errorCode = cbObject.errorCode;
                    var errorText = cbObject.errorText;
                    console.log("Error Code [" + errorCode + "]: " + errorText);
                    callback(cbObject);
                }
                new Configuration().setProperty(successCb, failureCb, options);
            };
            IImpl_SDK_GeneralConfiguration_WebOS.prototype.promise_setGeneralProperty = function (property, error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_WebOS.prototype.getGeneralProperty = function (error, context, callback) {
                function successCb(cbObject) {
                    console.log("cbObject : " + JSON.stringify(cbObject));
                    callback(cbObject);
                }
                function failureCb(cbObject) {
                    var errorCode = cbObject.errorCode;
                    var errorText = cbObject.errorText;
                    console.log("Error Code [" + errorCode + "]: " + errorText);
                    callback(cbObject);
                }
                var options = '{"keys":["alias"]}';
                new Configuration().getProperty(successCb, failureCb, options);
            };
            IImpl_SDK_GeneralConfiguration_WebOS.prototype.promise_getGeneralProperty = function (error, context, callback) {
            };
            return IImpl_SDK_GeneralConfiguration_WebOS;
        }()); //--- end class
        nm_transversalservices.IImpl_SDK_GeneralConfiguration_WebOS = IImpl_SDK_GeneralConfiguration_WebOS;
    })(nm_transversalservices = exports.nm_transversalservices || (exports.nm_transversalservices = {}));
});
//# sourceMappingURL=IImpl_SDK_GeneralConfiguration_WebOS.js.map