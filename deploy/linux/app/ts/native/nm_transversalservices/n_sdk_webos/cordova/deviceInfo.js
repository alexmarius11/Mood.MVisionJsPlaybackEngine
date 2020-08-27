DeviceInfo = (function () { var d, a; function c(e) { } if (typeof window === "object") {
    cordova.define("cordova/plugin/deviceInfo", function (f, e, g) { d = function () { }; if (window.PalmSystem) {
        c("Window.PalmSystem Available");
        a = f("cordova/plugin/webos/service");
    }
    else {
        a = { Request: function (h, i) { c(h + " invoked. But I am a dummy because PalmSystem is not available"); if (typeof i.onFailure === "function") {
                i.onFailure({ returnValue: false, errorText: "PalmSystem Not Available. Cordova is not installed?" });
            } } };
    } g.exports = d; });
    d = cordova.require("cordova/plugin/deviceInfo");
}
else {
    d = function (e) { a = e; a.Request = function (f, h) { var g = f + "/" + h.method; var i = {}; if (h.hasOwnProperty("parameters") === true) {
        i = h.parameters;
    } var j = {}; var k = function (l) { console.log("res : " + JSON.stringify(l)); if (l.payload.returnValue === true) {
        j = l.payload;
        h.onSuccess(j);
    }
    else {
        j.returnValue = false;
        j.errorCode = l.payload.errorCode;
        j.errorText = l.payload.errorText;
        h.onFailure(j);
    } }; if (a) {
        a.call(g, i, k);
    } }; };
    module.exports = d;
} function b(f, g, e) { if (f.errorCode === undefined || f.errorCode === null) {
    f.errorCode = g;
} if (f.errorText === undefined || f.errorText === null) {
    f.errorText = e;
} } d.EddystoneFrame = { UUID: "uid", URL: "url" }; d.prototype.getNetworkInfo = function (e, f) { c("getNetworkInfo: "); a.Request("luna://com.webos.service.commercial.scapadapter/network/", { method: "getNetworkInfo", parameters: {}, onSuccess: function (g) { if (typeof e === "function") {
        delete g.returnValue;
        e(g);
    } }, onFailure: function (g) { delete g.returnValue; if (typeof f === "function") {
        f(g);
    } } }); c("DeviceInfo.getNetworkInfo Done"); }; d.prototype.setNetworkInfo = function (e, f, g) { c("setNetworkInfo: "); a.Request("luna://com.webos.service.commercial.scapadapter/network/", { method: "setNetworkInfo", parameters: g, onSuccess: function (h) { c("setNetworkInfo: onSuccess"); if (typeof e === "function") {
        e();
    } }, onFailure: function (h) { c("setNetworkInfo: onFailure"); delete h.returnValue; if (typeof f === "function") {
        f(h);
    } } }); c("DeviceInfo.setNetworkInfo Done"); }; d.prototype.getBeaconInfo = function (e, f) { a.Request("luna://com.webos.service.commercial.scapadapter/network/", { method: "getBeaconInfo", parameters: {}, onSuccess: function (g) { c("getBeaconInfo: onSuccess"); delete g.returnValue; if (typeof e === "function") {
        e(g);
    } }, onFailure: function (g) { c("getBeaconInfo: onFailure"); delete g.returnValue; if (typeof f === "function") {
        f(g);
    } } }); }; d.prototype.setBeaconInfo = function (e, f, g) { a.Request("luna://com.webos.service.commercial.scapadapter/network/", { method: "setBeaconInfo", parameters: g, onSuccess: function (h) { c("setBeaconInfo: onSuccess"); if (typeof e === "function") {
        e();
    } }, onFailure: function (h) { c("setBeaconInfo: onFailure"); delete h.returnValue; if (typeof f === "function") {
        f(h);
    } } }); }; d.prototype.getSoftApInfo = function (e, f) { c("getSoftApInfo: "); a.Request("luna://com.webos.service.commercial.scapadapter/network/", { method: "getSoftApInfo", parameters: {}, onSuccess: function (g) { c("getSoftApInfo: onSuccess"); delete g.returnValue; if (typeof e === "function") {
        e(g);
    } }, onFailure: function (g) { c("getSoftApInfo: onFailure"); delete g.returnValue; if (typeof f === "function") {
        f(g);
    } } }); c("DeviceInfo.getSoftApInfo Done"); }; d.prototype.setSoftApInfo = function (f, g, h) { c("setSoftApInfo: "); if (h.enabled === true && ((h.ssid !== null && h.ssid.length > 32) || (h.securityKey !== null && h.securityKey.length !== 6))) {
    c("setSoftApInfo: options are invalid.");
    if (typeof g === "function") {
        var e = {};
        b(e, "DSSI", "DeviceInfo.setSoftApInfo. Invalid options.");
        g(e);
    }
    return;
} a.Request("luna://com.webos.service.commercial.scapadapter/network/", { method: "setSoftApInfo", parameters: h, onSuccess: function (i) { c("setSoftApInfo: onSuccess"); if (typeof f === "function") {
        f();
    } }, onFailure: function (i) { c("setSoftApInfo: onFailure"); delete i.returnValue; if (typeof g === "function") {
        g(i);
    } } }); c("DeviceInfo.setSoftApInfo Done"); }; d.prototype.getSoftApClientInfo = function (e, f) { c("getSoftApClientInfo: "); a.Request("luna://com.webos.service.commercial.scapadapter/deviceinfo/", { method: "getSoftApClientInfo", parameters: {}, onSuccess: function (g) { c("getSoftApClientInfo: onSuccess"); delete g.returnValue; if (typeof e === "function") {
        e(g);
    } }, onFailure: function (g) { c("getSoftApClientInfo: onFailure"); delete g.returnValue; if (typeof f === "function") {
        f(g);
    } } }); c("DeviceInfo.getSoftApClientInfo Done"); }; d.prototype.getWifiList = function (e, f) { c("getWifiList: "); a.Request("luna://com.webos.service.commercial.scapadapter/network/", { method: "getWifiList", parameters: {}, onSuccess: function (g) { c("getWifiList: onSuccess"); delete g.returnValue; if (typeof e === "function") {
        e(g);
    } }, onFailure: function (g) { c("getWifiList: onFailure"); delete g.returnValue; if (typeof f === "function") {
        f(g);
    } } }); c("DeviceInfo.getWifiList Done"); }; d.prototype.connectWifi = function (e, f, g) { c("connectWifi: "); a.Request("luna://com.webos.service.commercial.scapadapter/network/", { method: "connectWifi", parameters: g, onSuccess: function (h) { c("connectWifi: onSuccess"); if (typeof e === "function") {
        e();
    } }, onFailure: function (h) { c("connectWifi: onFailure"); delete h.returnValue; if (typeof f === "function") {
        f(h);
    } } }); c("DeviceInfo.connectWifi Done"); }; d.prototype.startWps = function (e, f, g) { c("startWps: "); a.Request("luna://com.webos.service.commercial.scapadapter/network/", { method: "startWps", parameters: g, onSuccess: function (h) { c("startWps: onSuccess"); delete h.returnValue; if (typeof e === "function") {
        e(h);
    } }, onFailure: function (h) { c("startWps: onFailure"); delete h.returnValue; if (typeof f === "function") {
        f(h);
    } } }); c("DeviceInfo.startWps Done"); }; d.prototype.stopWps = function (e, f) { c("stopWps: "); a.Request("luna://com.webos.service.commercial.scapadapter/network/", { method: "stopWps", parameters: {}, onSuccess: function (g) { c("stopWps: onSuccess"); if (typeof e === "function") {
        e();
    } }, onFailure: function (g) { c("stopWPS: onFailure"); delete g.returnValue; if (typeof f === "function") {
        f(g);
    } } }); c("DeviceInfo.stopWps Done"); }; d.prototype.getNetworkMacInfo = function (e, f) { c("getNetworkMacInfo"); a.Request("luna://com.webos.service.commercial.scapadapter/deviceinfo", { method: "getNetworkMacInfo", parameters: {}, onSuccess: function (g) { c("getNetworkMacInfo: onSuccess"); delete g.returnValue; if (typeof e === "function") {
        e(g);
    } }, onFailure: function (g) { c("getNetworkMacInfo: onFailure"); delete g.returnValue; if (typeof f === "function") {
        f(g);
    } } }); c("DeviceInfo.getNetworkMacInfo Done"); }; d.prototype.getPlatformInfo = function (e, f) { a.Request("luna://com.webos.service.commercial.scapadapter/deviceInfo/", { method: "getPlatformInfo", parameters: {}, onSuccess: function (g) { delete g.returnValue; if (typeof e === "function") {
        e(g);
    } }, onFailure: function (g) { delete g.returnValue; if (typeof f === "function") {
        b(g, "DGFI", "DeviceInfo.getPlatformInfo returns failure.");
        f(g);
    } } }); }; d.prototype.getSystemUsageInfo = function (e, f, g) { c("getSystemUsageInfo: "); a.Request("luna://com.webos.service.commercial.scapadapter", { method: "getSystemUsageInfo", parameters: { cpus: g.cpus, memory: g.memory }, onSuccess: function (h) { if (h.returnValue === true) {
        var i = {};
        if (typeof h.memory !== "undefined") {
            i.memory = h.memory;
        }
        if (typeof h.cpus !== "undefined") {
            i.cpus = h.cpus;
        }
        if (typeof e === "function") {
            e(i);
        }
    }
    else {
        if (typeof f === "function") {
            f({ errorCode: h.errorCode, errorText: h.errorText });
        }
    } }, onFailure: function (h) { if (typeof f === "function") {
        f({ errorCode: h.errorCode, errorText: h.errorText });
    } } }); c("DeviceInfo.getSystemUsageInfo Done"); }; d.prototype.setProxyInfo = function (e, f, g) { a.Request("luna://com.webos.service.commercial.scapadapter/deviceInfo/", { method: "setProxyInfo", parameters: g, onSuccess: function (h) { delete h.returnValue; if (typeof e === "function") {
        e();
    } }, onFailure: function (h) { delete h.returnValue; if (typeof f === "function") {
        b(h, "DSPI", "DeviceInfo.setProxyInfo returns failure.");
        f(h);
    } } }); }; d.prototype.getProxyInfo = function (e, f) { a.Request("luna://com.webos.service.commercial.scapadapter/deviceInfo/", { method: "getProxyInfo", parameters: {}, onSuccess: function (g) { delete g.returnValue; if (typeof e === "function") {
        e(g);
    } }, onFailure: function (g) { delete g.returnValue; if (typeof f === "function") {
        b(g, "DGPI", "DeviceInfo.getProxyInfo returns failure.");
        f(g);
    } } }); }; d.prototype.setiBeaconInfo = function (e, f, g) { a.Request("luna://com.webos.service.commercial.scapadapter/deviceInfo/", { method: "setiBeaconInfo", parameters: g, onSuccess: function (h) { delete h.returnValue; if (typeof e === "function") {
        e();
    } }, onFailure: function (h) { delete h.returnValue; if (typeof f === "function") {
        b(h, "DSIB", "DeviceInfo.setiBeaconInfo returns failure.");
        f(h);
    } } }); }; d.prototype.getiBeaconInfo = function (e, f) { a.Request("luna://com.webos.service.commercial.scapadapter/deviceInfo/", { method: "getiBeaconInfo", parameters: {}, onSuccess: function (g) { delete g.returnValue; if (typeof e === "function") {
        e(g);
    } }, onFailure: function (g) { delete g.returnValue; if (typeof f === "function") {
        b(g, "DGIB", "DeviceInfo.getiBeaconInfo returns failure.");
        f(g);
    } } }); }; d.prototype.setEddystoneInfo = function (e, f, g) { a.Request("luna://com.webos.service.commercial.scapadapter/deviceInfo/", { method: "setEddystoneInfo", parameters: g, onSuccess: function (h) { delete h.returnValue; if (typeof e === "function") {
        e();
    } }, onFailure: function (h) { delete h.returnValue; if (typeof f === "function") {
        b(h, "DSEI", "DeviceInfo.setEddystoneInfo returns failure.");
        f(h);
    } } }); }; d.prototype.getEddystoneInfo = function (e, f) { a.Request("luna://com.webos.service.commercial.scapadapter/deviceInfo/", { method: "getEddystoneInfo", parameters: {}, onSuccess: function (g) { delete g.returnValue; if (typeof e === "function") {
        e(g);
    } }, onFailure: function (g) { delete g.returnValue; if (typeof f === "function") {
        b(g, "DGEI", "DeviceInfo.getEddystoneInfo returns failure.");
        f(g);
    } } }); }; return d; }());
//# sourceMappingURL=deviceInfo.js.map