"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./cordova/cordova.webos");
require("./cordova/storage");
require("./cordova/configuration");
var nm_transversalservices;
(function (nm_transversalservices) {
    var IImpl_SDK_ApplicationSetup_WebOS = (function () {
        function IImpl_SDK_ApplicationSetup_WebOS(owner) {
            this._owner = owner;
        }
        IImpl_SDK_ApplicationSetup_WebOS.prototype.getAppServerProperties = function (appServerProperties, error, context, callback) {
        };
        IImpl_SDK_ApplicationSetup_WebOS.prototype.promise_getAppServerProperties = function (appServerProperties, error, context, callback) {
        };
        IImpl_SDK_ApplicationSetup_WebOS.prototype.setAppServerProperties = function (appServerProperties, error, context, callback) {
        };
        IImpl_SDK_ApplicationSetup_WebOS.prototype.promise_setAppServerProperties = function (appServerProperties, error, context, callback) {
        };
        IImpl_SDK_ApplicationSetup_WebOS.prototype.upgradeApplication = function (appServerProperties, error, context, callback) {
        };
        IImpl_SDK_ApplicationSetup_WebOS.prototype.promise_upgradeApplication = function (appServerProperties, error, context, callback) {
        };
        IImpl_SDK_ApplicationSetup_WebOS.prototype.api_setAppServerProperty = function (callback) {
            var appMode = Configuration.AppMode.LOCAL;
            var options = {
                serverIp: "192.168.0.2",
                serverPort: 80,
                secureConnection: false,
                appLaunchMode: appMode,
                fqdnMode: false,
                fqdnAddr: "http://signage.domain.com/index.html"
            };
            function successCb() {
                callback("setPictureProperty success");
            }
            function failureCb(cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log("Error Code [" + errorCode + "]: " + errorText);
                callback(cbObject);
            }
            new Configuration().setServerProperty(successCb, failureCb, options);
        };
        IImpl_SDK_ApplicationSetup_WebOS.prototype.api_getAppServerProperty = function (callback) {
            function successCb(cbObject) {
                console.log("cbObject : " + JSON.stringify(cbObject));
                console.log("server IP : " + cbObject.serverIp);
                console.log("server Port : " + cbObject.serverPort);
                console.log("secure Connection : " + cbObject.secureConnection);
                console.log("applicationLaunchMode : " + cbObject.appLaunchMode);
                console.log("fully Qualified Domain Name Mode : " + cbObject.fqdnMode);
                console.log("fully Qualified Domain Name Address: " + cbObject.fqdnAddr);
                callback(cbObject);
            }
            function failureCb(cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log("Error Code [" + errorCode + "]: " + errorText);
                callback(cbObject);
            }
            new Configuration().getServerProperty(successCb, failureCb);
        };
        IImpl_SDK_ApplicationSetup_WebOS.prototype.api_UpgradeApplication = function (callback) {
            var successCb = function () {
                console.log("Upgrading local application done.");
                callback("Upgrading local application done.");
            };
            var failureCb = function (cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log(" Error Code [" + errorCode + "]: " + errorText);
                callback(cbObject);
            };
            var storage = new Storage();
            var options = {
                to: Storage.AppMode.LOCAL,
                recovery: false
            };
            storage.upgradeApplication(successCb, failureCb, options);
        };
        return IImpl_SDK_ApplicationSetup_WebOS;
    }());
    nm_transversalservices.IImpl_SDK_ApplicationSetup_WebOS = IImpl_SDK_ApplicationSetup_WebOS;
})(nm_transversalservices = exports.nm_transversalservices || (exports.nm_transversalservices = {}));
//# sourceMappingURL=IImpl_SDK_ApplicationSetup_WebOS.js.map