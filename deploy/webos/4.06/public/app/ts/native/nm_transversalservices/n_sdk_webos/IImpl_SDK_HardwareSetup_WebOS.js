define(["require", "exports", "./cordova/cordova.webos", "./cordova/storage", "./cordova/deviceInfo"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var nm_transversalservices;
    (function (nm_transversalservices) {
        var IImpl_SDK_HardwareSetup_WebOS = /** @class */ (function () {
            //----------- constructor 
            function IImpl_SDK_HardwareSetup_WebOS(owner) {
                this._owner = owner;
            }
            IImpl_SDK_HardwareSetup_WebOS.prototype.startWps = function (error, context, callback) {
                function successCb() {
                    console.log("successCb");
                    callback("startWps success");
                }
                function failureCb(cbObject) {
                    var errorCode = cbObject.errorCode;
                    var errorText = cbObject.errorText;
                    console.log("Error Code [" + errorCode + "]: " + errorText);
                    callback(cbObject);
                }
                var deviceInfo = new DeviceInfo();
                var options = {
                    method: "PBC"
                };
                deviceInfo.startWps(successCb, failureCb, options);
            };
            IImpl_SDK_HardwareSetup_WebOS.prototype.promise_startWps = function (error, context, callback) {
            };
            IImpl_SDK_HardwareSetup_WebOS.prototype.stopWps = function (error, context, callback) {
            };
            IImpl_SDK_HardwareSetup_WebOS.prototype.promise_stopWps = function (error, context, callback) {
                function successCb() {
                    console.log("successCb");
                    callback("stopWps success");
                }
                function failureCb(cbObject) {
                    var errorCode = cbObject.errorCode;
                    var errorText = cbObject.errorText;
                    console.log("Error Code [" + errorCode + "]: " + errorText);
                    callback(cbObject);
                }
                var deviceInfo = new DeviceInfo();
                deviceInfo.stopWps(successCb, failureCb);
            };
            IImpl_SDK_HardwareSetup_WebOS.prototype.getWifiList = function (error, context, callback) {
                function successCb(cbObject) {
                    console.log("cbObject : " + JSON.stringify(cbObject));
                    for (var i = 0; i < cbObject.networkInfo.length; i++) {
                        console.log("network info : ssid " + cbObject.networkInfo[i].ssid);
                        console.log("network info : signalLevel " + cbObject.networkInfo[i].signalLevel);
                    }
                    callback(cbObject);
                }
                function failureCb(cbObject) {
                    var errorCode = cbObject.errorCode;
                    var errorText = cbObject.errorText;
                    console.log("Error Code [" + errorCode + "]: " + errorText);
                    callback(cbObject);
                }
                var deviceInfo = new DeviceInfo();
                deviceInfo.getWifiList(successCb, failureCb);
                //return wifiList: Array<amGeneralWifiConnectionInfo.am_general.A_WifiConnectionInfo>, 
            };
            IImpl_SDK_HardwareSetup_WebOS.prototype.promise_getWifiList = function (error, context, callback) {
                //return wifiList: Array<amGeneralWifiConnectionInfo.am_general.A_WifiConnectionInfo>,   
            };
            IImpl_SDK_HardwareSetup_WebOS.prototype.connectWifi = function (wifiConnectionInfo, error, context, callback) {
            };
            IImpl_SDK_HardwareSetup_WebOS.prototype.promise_connectWifi = function (wifiConnectionInfo, error, context, callback) {
                function successCb() {
                    console.log("successCb");
                    callback("connectWifi success");
                }
                function failureCb(cbObject) {
                    var errorCode = cbObject.errorCode;
                    var errorText = cbObject.errorText;
                    console.log("Error Code [" + errorCode + "]: " + errorText);
                    callback(cbObject);
                }
                var deviceInfo = new DeviceInfo();
                var options = {
                    ssid: "AP_NAME",
                    password: "12341234"
                };
                deviceInfo.connectWifi(successCb, failureCb, options);
            };
            IImpl_SDK_HardwareSetup_WebOS.prototype.setNewtworkInfo = function (networkProperties, error, context, callback) {
                function successCb() {
                    console.log("successCb");
                    callback("setNetworkInfo success");
                }
                function failureCb(cbObject) {
                    var errorCode = cbObject.errorCode;
                    var errorText = cbObject.errorText;
                    console.log("Error Code [" + errorCode + "]: " + errorText);
                    callback(cbObject);
                }
                var deviceInfo = new DeviceInfo();
                var wired = {
                    enabled: true,
                    method: "manual",
                    ipAddress: "192.168.0.2",
                    netmask: "255.255.255.0",
                    gateway: "192.168.0.1",
                    dns1: "156.147.135.180",
                    dns2: "156.147.135.181"
                };
                var wifi = {
                    enabled: true,
                    method: "manual",
                    ipAddress: "192.168.0.2",
                    netmask: "255.255.255.0",
                    gateway: "192.168.0.1",
                    dns1: "156.147.135.180",
                    dns2: "156.147.135.181"
                };
                var options = {
                    wired: wired,
                    wifi: wifi
                };
                deviceInfo.setNetworkInfo(successCb, failureCb, options);
            };
            IImpl_SDK_HardwareSetup_WebOS.prototype.promise_setNewtworkInfo = function (networkProperties, error, context, callback) {
            };
            IImpl_SDK_HardwareSetup_WebOS.prototype.getNewtworkInfo = function (error, context, callback) {
                function successCb(cbObject) {
                    console.log("cbObject : " + JSON.stringify(cbObject));
                    console.log("isInternetConnectionAvailable : " + cbObject.isInternetConnectionAvailable);
                    console.log("wired.state : " + cbObject.wired.state);
                    console.log("wired.method : " + cbObject.wired.method);
                    console.log("wired.ipAddress : " + cbObject.wired.ipAddress);
                    console.log("wired.netmask : " + cbObject.wired.netmask);
                    console.log("wired.dns1 : " + cbObject.wired.dns1);
                    console.log("wired.dns2 : " + cbObject.wired.dns2);
                    console.log("wifi.state : " + cbObject.wifi.state);
                    console.log("wifi.method : " + cbObject.wifi.method);
                    console.log("wifi.ipAddress : " + cbObject.wifi.ipAddress);
                    console.log("wifi.netmask : " + cbObject.wifi.netmask);
                    console.log("wifi.dns1 : " + cbObject.wifi.dns1);
                    console.log("wifi.dns2 : " + cbObject.wifi.dns2);
                    callback(cbObject);
                }
                function failureCb(cbObject) {
                    var errorCode = cbObject.errorCode;
                    var errorText = cbObject.errorText;
                    console.log("Error Code [" + errorCode + "]: " + errorText);
                    callback(cbObject);
                }
                new DeviceInfo().getNetworkInfo(successCb, failureCb);
            };
            IImpl_SDK_HardwareSetup_WebOS.prototype.promise_getNewtworkInfo = function (error, context, callback) {
            };
            IImpl_SDK_HardwareSetup_WebOS.prototype.setNewtworkProxyInfo = function (networkProperties, error, context, callback) {
            };
            IImpl_SDK_HardwareSetup_WebOS.prototype.promise_setNewtworkProxyInfo = function (networkProperties, error, context, callback) {
            };
            IImpl_SDK_HardwareSetup_WebOS.prototype.getNewtworkProxyInfo = function (error, context, callback) {
            };
            IImpl_SDK_HardwareSetup_WebOS.prototype.promise_getNewtworkProxyInfo = function (error, context, callback) {
            };
            IImpl_SDK_HardwareSetup_WebOS.prototype.getMacAddress = function (error, context, callback) {
                function successCb(cbObject) {
                    console.log("cbObject : " + JSON.stringify(cbObject));
                    console.log("wiredInfo.macAddress : " + cbObject.wiredInfo.macAddress);
                    callback(cbObject);
                }
                function failureCb(cbObject) {
                    var errorCode = cbObject.errorCode;
                    var errorText = cbObject.errorText;
                    console.log("Error Code [" + errorCode + "]: " + errorText);
                    callback(cbObject);
                }
                new DeviceInfo().getNetworkMacInfo(successCb, failureCb);
            };
            IImpl_SDK_HardwareSetup_WebOS.prototype.promise_getMacAddress = function (error, context, callback) {
            };
            IImpl_SDK_HardwareSetup_WebOS.prototype.getPlatformInfo = function (error, context, callback) {
                function successCb(cbObject) {
                    console.log("cbObject : " + JSON.stringify(cbObject));
                    console.log("hardwareVersion : " + cbObject.hardwareVersion);
                    console.log("modelName : " + cbObject.modelName);
                    console.log("osdResolution : " + cbObject.osdResolution);
                    console.log("platformName : " + cbObject.platformName);
                    console.log("sdkVersion : " + cbObject.sdkVersion);
                    console.log("serialNumber : " + cbObject.serialNumber);
                    console.log("firmwareVersion : " + cbObject.firmwareVersion);
                    callback(cbObject);
                }
                function failureCb(cbObject) {
                    var errorCode = cbObject.errorCode;
                    var errorText = cbObject.errorText;
                    console.log("Error Code [" + errorCode + "]: " + errorText);
                    callback(cbObject);
                }
                new DeviceInfo().getPlatformInfo(successCb, failureCb);
            };
            IImpl_SDK_HardwareSetup_WebOS.prototype.promise_getPlatformInfo = function (error, context, callback) {
            };
            IImpl_SDK_HardwareSetup_WebOS.prototype.getSystemUsageInfo = function (error, context, callback) {
                function successCb(cbObject) {
                    console.log("cbObject : " + JSON.stringify(cbObject));
                    console.log("memory.total : " + cbObject.memory.total);
                    console.log("memory.free : " + cbObject.memory.free);
                    for (var i in cbObject.cpus) {
                        console.log("cpu.model " + cbObject.cpus[i].model);
                        console.log("cpu.times.user " + cbObject.cpus[i].times.user);
                        console.log("cpu.times.nice " + cbObject.cpus[i].times.nice);
                        console.log("cpu.times.sys " + cbObject.cpus[i].times.sys);
                        console.log("cpu.times.idle " + cbObject.cpus[i].times.idle);
                        console.log("cpu.times.irq " + cbObject.cpus[i].times.irq);
                    }
                    callback(cbObject);
                }
                function failureCb(cbObject) {
                    var errorCode = cbObject.errorCode;
                    var errorText = cbObject.errorText;
                    console.log("Error Code [" + errorCode + "]: " + errorText);
                    callback(cbObject);
                }
                var deviceInfo = new DeviceInfo();
                var options = { cpus: true, memory: true };
                deviceInfo.getSystemUsageInfo(successCb, failureCb, options);
            };
            IImpl_SDK_HardwareSetup_WebOS.prototype.promise_getSystemUsageInfo = function (error, context, callback) {
            };
            IImpl_SDK_HardwareSetup_WebOS.prototype.setBeaconInfo = function (beaconInfo, error, context, callback) {
                function successCb() {
                    console.log("successCb");
                    callback("setiBeaconInfo success");
                }
                function failureCb(cbObject) {
                    var errorCode = cbObject.errorCode;
                    var errorText = cbObject.errorText;
                    console.log("Error Code [" + errorCode + "]: " + errorText);
                    callback(cbObject);
                }
                var deviceInfo = new DeviceInfo();
                var options = {
                    enabled: true,
                    uuid: "f7826da64fa24e988024bc5b71e0893e",
                    major: 5000,
                    minor: 3000
                };
                deviceInfo.setiBeaconInfo(successCb, failureCb, options);
            };
            IImpl_SDK_HardwareSetup_WebOS.prototype.promise_setBeaconInfo = function (beaconInfo, error, context, callback) {
            };
            IImpl_SDK_HardwareSetup_WebOS.prototype.getBeaconInfo = function (error, context, callback) {
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
                new DeviceInfo().getiBeaconInfo(successCb, failureCb);
            };
            IImpl_SDK_HardwareSetup_WebOS.prototype.promise_getBeaconInfo = function (error, context, callback) {
            };
            IImpl_SDK_HardwareSetup_WebOS.prototype.setEddystoneInfo = function (eddystoneInfo, error, context, callback) {
                function successCb() {
                    console.log("successCb");
                    callback("setEddystoneInfo success");
                }
                function failureCb(cbObject) {
                    var errorCode = cbObject.errorCode;
                    var errorText = cbObject.errorText;
                    console.log("Error Code [" + errorCode + "]: " + errorText);
                    callback(cbObject);
                }
                var deviceInfo = new DeviceInfo();
                var options = {
                    enabled: true,
                    frame: DeviceInfo.EddystoneFrame.URL,
                    frameData: "http://www.lge.com"
                };
                deviceInfo.setEddystoneInfo(successCb, failureCb, options);
            };
            IImpl_SDK_HardwareSetup_WebOS.prototype.promise_setEddystoneInfo = function (eddystoneInfo, error, context, callback) {
            };
            IImpl_SDK_HardwareSetup_WebOS.prototype.getEddystoneInfo = function (error, context, callback) {
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
                new DeviceInfo().getEddystoneInfo(successCb, failureCb);
            };
            IImpl_SDK_HardwareSetup_WebOS.prototype.promise_getEddystoneInfo = function (error, context, callback) {
            };
            IImpl_SDK_HardwareSetup_WebOS.prototype.setWifiSoftAppInfo = function (wifiSoftAppInfo, error, context, callback) {
                function successCb() {
                    console.log("successCb");
                    callback("setNetworkInfo success");
                }
                function failureCb(cbObject) {
                    var errorCode = cbObject.errorCode;
                    var errorText = cbObject.errorText;
                    console.log("Error Code [" + errorCode + "]: " + errorText);
                    callback(cbObject);
                }
                var deviceInfo = new DeviceInfo();
                var options = {
                    enabled: true,
                    ssid: "1A2B3C4D5E1A2B3C4D5E1A2B3C4D5EFF",
                    securityKey: "123456"
                };
                deviceInfo.setSoftApInfo(successCb, failureCb, options);
            };
            IImpl_SDK_HardwareSetup_WebOS.prototype.promise_getWifiSoftApp = function (wifiSoftAppInfo, error, context, callback) {
            };
            IImpl_SDK_HardwareSetup_WebOS.prototype.getWifiSoftAppInfo = function (error, context, callback) {
                function successCb(cbObject) {
                    console.log("cbObject : " + JSON.stringify(cbObject));
                    console.log("enabled : " + cbObject.enabled);
                    console.log("ssid : " + cbObject.ssid);
                    console.log("securityKey : " + cbObject.securityKey);
                    callback(cbObject);
                }
                function failureCb(cbObject) {
                    var errorCode = cbObject.errorCode;
                    var errorText = cbObject.errorText;
                    console.log("Error Code [" + errorCode + "]: " + errorText);
                    callback(cbObject);
                }
                var deviceInfo = new DeviceInfo();
                deviceInfo.getSoftApInfo(successCb, failureCb);
            };
            IImpl_SDK_HardwareSetup_WebOS.prototype.promise_getWifiSoftAppInfo = function (error, context, callback) {
            };
            return IImpl_SDK_HardwareSetup_WebOS;
        }()); //--- end class
        nm_transversalservices.IImpl_SDK_HardwareSetup_WebOS = IImpl_SDK_HardwareSetup_WebOS;
    })(nm_transversalservices = exports.nm_transversalservices || (exports.nm_transversalservices = {}));
});
//# sourceMappingURL=IImpl_SDK_HardwareSetup_WebOS.js.map