cordova.define("cordova/plugin/signage", function (k, B, c) { var C; function i(D) { } if (window.PalmSystem) {
    i("Window.PalmSystem Available");
    C = k("cordova/plugin/webos/service");
}
else {
    i("Window.PalmSystem is NOT Available");
    C = { Request: function (D, E) { i(D + " invoked. But I am a dummy because PalmSystem is not available"); if (typeof E.onFailure === "function") {
            E.onFailure({ returnValue: false, errorCode: "CORDOVA_ERR", errorText: "PalmSystem Not Available. Cordova is not installed?" });
        } } };
} var x = function (D) { var E = n[D]; i(JSON.stringify(E, null, 3)); if (E && E.getEvent === true) {
    if (n[D].listenerObj) {
        n[D].getEvent = false;
        n[D].listenerObj = null;
    }
} }; var p = function (E, D) { var F = n[E]; if (F && typeof F.createListener === "function") {
    F.listenerObj = F.createListener(D);
    F.getEvent = true;
} }; function d(E) { if (E.substring(0, "ext://".length) !== "ext://") {
    i("Bad prefix: " + E);
    return false;
} var D = E.substring("ext://".length); i("body is: " + D); var F = D.split(":"); if (F.length === 2) {
    return F[0] + F[1];
}
else {
    if (F.length === 1) {
        return F[0];
    }
    else {
        i("Bad Syntax: " + E);
        return false;
    }
} } function v(D, F) { for (var E in D) {
    if (D[E] === F) {
        return true;
    }
} return false; } var s = { FAILOVER_MODE: "failover", FAILOVER_BACKUPVIASTORAGE_MODE: "backupViaStorage", FAILOVER_PRIORITY: "failoverPriority", IR_OPERATION_MODE: "enableIrRemote", LOCALKEY_OPERATION_MODE: "enableLocalKey", OSD_PORTRAIT_MODE: "osdPortraitMode", TILE_MODE: "tileMode", TILE_ID: "tileId", TILE_ROW: "tileRow", TILE_COLUME: "tileCol", TILE_NATURALMODE: "naturalMode", DPM_MODE: "dpmMode", AUTOMATIC_STANDBY_MODE: "autoSB", ISM_METHOD: "ismmethod", SES_MODE: "smartEnergy", DO_15OFF_MODE: "15off", MONITOR_FAN: "monitorFan", MONITOR_SIGNAL: "monitorSignal", MONITOR_LAMP: "monitorLamp", MONITOR_SCREEN: "monitorScreen", MONITOR_AUDIO: "monitorAudio", AUDIO_SOURCE_HDMI1: "audioSourceHdmi1", AUDIO_SOURCE_HDMI2: "audioSourceHdmi2", AUDIO_SOURCE_DP: "audioSourceDp" }; var t = function (D) { i("Create Listener for monitorTemperature"); var E = C.Request("luna://com.webos.service.commercial.scapadapter", { method: "systemMonitor/getTemperature", parameters: { subscribe: true }, onSuccess: function (F) { i("temperature : " + JSON.stringify(F, null, 3)); if (F.returnValue === true) {
        var G = { source: a.MonitoringSource.THERMOMETER, type: a.EventType.CURRENT_TEMPERATURE, data: { temperature: F.temperature } };
        if (typeof D === "function") {
            D(G);
        }
    } }, onFailure: function (F) { i("monitor_temperature : FAIL " + JSON.stringify(F, null, 3)); } }); return E; }; var g = function (D) { i("Create Listener for monitorFan"); var E = C.Request("luna://com.webos.service.commercial.scapadapter", { method: "systemMonitor/getFanEvent", parameters: { subscribe: true }, onSuccess: function (F) { i("monitor_fan : " + JSON.stringify(F, null, 3)); if (F.returnValue === true) {
        var G = { source: a.MonitoringSource.FAN, type: a.EventType.FAN_STATUS, data: { status: F.fanFault } };
        if (typeof D === "function") {
            D(G);
        }
    } }, onFailure: function (F) { i("monitor_fan : FAIL " + JSON.stringify(F, null, 3)); } }); return E; }; var j = function (D) { i("Create Listener for monitorLamp"); var E = C.Request("luna://com.webos.service.commercial.scapadapter", { method: "systemMonitor/getLampEvent", parameters: { subscribe: true }, onSuccess: function (F) { i("monitor_lamp : " + JSON.stringify(F, null, 3)); if (F.returnValue === true) {
        var G = { source: a.MonitoringSource.LAMP, type: a.EventType.LAMP_STATUS, data: { status: F.lampFault } };
        if (typeof D === "function") {
            D(G);
        }
    } }, onFailure: function (F) { i("monitor_lamp : FAIL " + JSON.stringify(F, null, 3)); } }); return E; }; var r = function (D) { i("Create Listener for monitorSignal"); var E = C.Request("luna://com.webos.service.commercial.scapadapter", { method: "systemMonitor/getSignalEvent", parameters: { subscribe: true }, onSuccess: function (F) { i("monitor_signal : " + JSON.stringify(F, null, 3)); if (F.returnValue === true) {
        var G = { type: a.EventType.SIGNAL_STATUS, source: a.MonitoringSource.SIGNAL, data: {} };
        if (F.noSignal === true) {
            G.data.status = "no_signal";
        }
        else {
            G.data.status = "signal_available";
        }
        if (typeof D === "function") {
            D(G);
        }
    } }, onFailure: function (F) { i("monitor_signal : FAIL " + JSON.stringify(F, null, 3)); } }); return E; }; var y = function (D) { i("Create Listener for monitorScreen"); var E = C.Request("luna://com.webos.service.commercial.scapadapter", { method: "systemMonitor/getScreenEvent", parameters: { subscribe: true }, onSuccess: function (F) { i("monitor_screen : " + JSON.stringify(F, null, 3)); if (F.returnValue === true) {
        var G = { source: a.MonitoringSource.SCREEN, type: a.EventType.SCREEN_STATUS, data: { status: F.screen } };
        if (typeof D === "function") {
            D(G);
        }
    } }, onFailure: function (F) { i("monitor_screen FAIL : " + JSON.stringify(F, null, 3)); } }); return E; }; function A(E, F, D) { if (l.hasOwnProperty(E) === false) {
    l[E] = {};
    l[E].instanceOfSubscription = F;
    l[E].eventListener = D;
}
else {
    l[E].instanceOfSubscription = F;
    l[E].eventListener = D;
} return true; } function h(D) { if (l.hasOwnProperty(D) === false) {
    return false;
}
else {
    if (l[D].instanceOfSubscription === null) {
        return false;
    }
    else {
        l[D].instanceOfSubscription.cancel();
        l[D].instanceOfSubscription = null;
        l[D].eventListener = null;
        return true;
    }
} } function m(D) { if (l.hasOwnProperty(D) === false) {
    return false;
}
else {
    return l[D];
} } var e = function (D, F, E) { i("Create Listener for monitorRS232C"); var G = C.Request("luna://com.webos.service.commercial.scapadapter", { method: "systemMonitor/startMonitorRS232C", parameters: { subscribe: true }, onSuccess: function (H) { i("monitorRS232C success : " + JSON.stringify(H, null, 3)); if (H.returnValue === true) {
        if (Object.keys(H).length === 1) {
            A("RS232C", G, E);
            D();
        }
        else {
            if (H.hasOwnProperty("data") === true) {
                var I = m("RS232C");
                if (I === false) {
                    F({ errorCode: "INTERNAL_ERROR", errorText: "There is not subscriptionEventInfo" });
                }
                else {
                    if (typeof I.eventListener === "function") {
                        I.eventListener({ data: H.data });
                    }
                }
            }
            else {
                F({ errorCode: "INTERNAL_ERROR", errorText: "Unknown return value" });
            }
        }
        return;
    } }, onFailure: function (H) { i("monitorRS232C fail : " + JSON.stringify(H, null, 3)); F({ errorCode: "LUNA_ERROR", errorText: "Failed to request getRS232CEvent to system" }); } }); }; var n = { fan: { getEvent: false, listenerObj: null, createListener: g }, screen: { getEvent: false, listenerObj: null, createListener: y }, temperature: { getEvent: false, listenerObj: null, createListener: t }, signal: { getEvent: false, listenerObj: null, createListener: r }, lamp: { getEvent: false, listenerObj: null, createListener: j } }; var l = { RS232C: { instanceOfSubscription: null, eventListener: null } }; var u = { row: 0, col: 0 }; var a = function () { }; a.UNDEFINED = "___undefined___"; a.OsdPortraitMode = { ON: "90", OFF: "off" }; a.ImgResolution = { HD: "HD", FHD: "FHD", }; a.AutomaticStandbyMode = { OFF: "off", STANDBY_4HOURS: "4hours" }; a.IsmMethod = { NORMAL: "NORMAL", ORBITER: "ORBITER", INVERSION: "INVERSION", COLORWASH: "COLORWASH", WHITEWASH: "WHITEWASH", WASHING_BAR: "WASHINGBAR", USER_IMAGE: "USERIMAGE", USER_VIDEO: "USERVIDEO" }; a.FailoverMode = { OFF: "off", AUTO: "auto", MANUAL: "manual" }; a.DigitalAudioInput = { HDMI_DP: "hdmi", AUDIO_IN: "audioIn" }; a.DpmMode = { OFF: "off", POWER_OFF_5SECOND: "5sec", POWER_OFF_10SECOND: "10sec", POWER_OFF_15SECOND: "15sec", POWER_OFF_1MINUTE: "1min", POWER_OFF_3MINUTE: "3min", POWER_OFF_5MINUTE: "5min", POWER_OFF_10MINUTE: "10min" }; a.KeyOperationMode = { ALLOW_ALL: "normal", POWER_ONLY: "usePwrOnly", BLOCK_ALL: "blockAll" }; a.EventType = { CURRENT_TEMPERATURE: "CURRENT_TEMPERATURE", FAN_STATUS: "FAN_STATUS", LAMP_STATUS: "LAMP_STATUS", SCREEN_STATUS: "SCREEN_STATUS", SIGNAL_STATUS: "SIGNAL_STATUS" }; a.MonitoringSource = { FAN: "FAN", LAMP: "LAMP", SIGNAL: "SIGNAL", SCREEN: "SCREEN", THERMOMETER: "THERMOMETER" }; a.KeyCode = { DISC_POWER_OFF: 706, DISC_POWER_ON: 705, ENERGY_SAVING: 709, INPUT: 712, LG_3D: 737, NUM_0: 48, NUM_1: 49, NUM_2: 50, NUM_3: 51, NUM_4: 52, NUM_5: 53, NUM_6: 54, NUM_7: 55, NUM_8: 56, NUM_9: 57, OPT_1aA: 1103, CLEAR: 8, POWER: 409, VOL_UP: 447, VOL_DOWN: 448, MUTE: 449, RATIO: 722, AUTO: 1102, BRIGHTNESS_UP: 1100, BRIGHTNESS_DOWN: 1101, PSM: 1108, SMART_HOME: 734, WBAL: 1105, MENU: 627, SMENU: 1106, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, ENTER: 10, BACK: 608, EXIT: 601, SIMPLINK: 724, TILE: 1107, STOP: 413, REWIND: 412, PLAY: 415, PAUSE: 19, FAST_FORWARD: 417, RED: 403, GREEN: 404, YELLOW: 405, BLUE: 406, INFO: 1109 }; function o(E, F, D) { if (E.errorCode === undefined || E.errorCode === null) {
    E.errorCode = F;
} if (E.errorText === undefined || E.errorText === null) {
    E.errorText = D;
} } function w(G, F, H, D, E) { var I = { category: G, keys: F }; C.Request("luna://com.webos.service.commercial.scapadapter/settings/", { method: "get", parameters: I, onSuccess: function (J) { i("On Success"); if (J.returnValue === true) {
        var K = H(J.settings);
        if (K === false) {
            if (typeof E === "function") {
                E({ errorText: "Invalid DB value", errorCode: "DB_ERROR" });
            }
        }
        else {
            if (typeof D === "function") {
                i("successCallback");
                D(K);
            }
            else {
                i("successCallback not registered or is not a function: " + D);
            }
        }
    }
    else {
        i("Settings Failed:  " + JSON.stringify(J, null, 3));
        if (typeof E === "function") {
            E({ errorText: "Invalid DB value : " + J.errorText, errorCode: "DB_ERROR" });
        }
    } }, onFailure: function (J) { i("On Failure"); delete J.returnValue; if (J.settings) {
        i("settings = " + JSON.stringify(J.settings, null, 3));
        var L = H(J.settings);
        i("errorKey = " + JSON.stringify(J.errorKey, null, 3));
        for (var K = 0; K < J.errorKey.length; ++K) {
            L[J.errorKey[K]] = a.UNDEFINED;
        }
        i("cbObj = " + JSON.stringify(L, null, 3));
        if (typeof D === "function") {
            i("successCallback");
            D(L);
        }
    }
    else {
        if (typeof E === "function") {
            E({ errorText: ((typeof J.errorText === "undefined") ? "DB Failure" : J.errorText), errorCode: "DB_ERROR" });
        }
    } } }); i("Requested Service: luna://com.webos.service.commercial.scapadapter/settings/"); i("params : " + JSON.stringify(I)); } function f(I, H, D, E) { var J = { category: I, settings: H }; i("settings : " + JSON.stringify(H, null, 3)); var F = false; for (var G in H) {
    if (G) {
        i("has key : " + G);
        F = true;
        break;
    }
} if (F === false) {
    i("Nothing to set");
    D();
    return;
} C.Request("luna://com.webos.service.commercial.scapadapter/settings/", { method: "set", parameters: J, onSuccess: function () { i("On Success"); if (typeof D === "function") {
        i("SUCCEES CALLBACK");
        D();
    } }, onFailure: function (K) { i("On Failure"); delete K.returnValue; if (typeof E === "function") {
        i("ERROR CALLBACK");
        E(K);
    } } }); i("Requested Service: luna://com.webos.service.commercial.scapadapter/settings/"); i("params : " + JSON.stringify(J)); } a.prototype.setPortraitMode = function (D, F, I) { var J = {}; var H; function G(K) { if (K.portraitMode) {
    for (var L in a.OsdPortraitMode) {
        if (K.portraitMode === a.OsdPortraitMode[L]) {
            return true;
        }
    }
    H = "Signage.setPortraitMode: Unrecognized OsdPortraintMode : " + K.portraitMode;
    return false;
}
else {
    H = "Signage.setPortraitMode: portraitMode does not exist.";
    return false;
} } if (G(I)) {
    var E = I.portraitMode;
    J[s.OSD_PORTRAIT_MODE] = E;
    C.Request("luna://com.webos.service.commercial.scapadapter", { method: "setOsdPortraitMode", parameters: { osdPortraitMode: I.portraitMode }, onSuccess: function (K) { D(); }, onFailure: function (K) { if (K.errorText.indexOf("Unknown method") !== -1) {
            f("commercial", J, D, F);
        }
        else {
            F({ errorCode: K.errorCode, errorText: K.errorText });
        } } });
    i("setPortraitMode Done");
}
else {
    F({ errorCode: "BAD_PARAMETER", errorText: H });
} }; a.prototype.setFailoverMode = function (D, E, F) { C.Request("luna://com.webos.service.commercial.scapadapter/signage", { method: "setFailoverMode", parameters: F, onSuccess: function (G) { i("onSuccess"); delete G.returnValue; D(); }, onFailure: function (G) { i("onFailure"); delete G.returnValue; E(G); } }); }; a.prototype.getFailoverMode = function (D, E) { C.Request("luna://com.webos.service.commercial.scapadapter/signage", { method: "getFailoverMode", parameters: {}, onSuccess: function (F) { delete F.returnValue; D({ priority: F.priority, mode: F.mode }); }, onFailure: function (F) { delete F.returnValue; E(F); } }); }; a.prototype.setTileInfo = function (D, E, F) { C.Request("luna://com.webos.service.commercial.scapadapter/signage", { method: "setTileInfo", parameters: F, onSuccess: function (G) { i("onSuccess"); delete G.returnValue; D(); }, onFailure: function (G) { i("onFailure"); delete G.returnValue; E(G); } }); }; function q(D) { if (D === "on") {
    return true;
}
else {
    return false;
} } a.prototype.getTileInfo = function (D, E) { C.Request("luna://com.webos.service.commercial.scapadapter/signage", { method: "getTileInfo", parameters: {}, onSuccess: function (F) { if (typeof D === "function") {
        delete F.returnValue;
        D(F);
    } }, onFailure: function (F) { delete F.returnValue; if (typeof E === "function") {
        E(F);
    } } }); }; a.prototype.getSignageInfo = function (D, E) { C.Request("luna://com.webos.service.commercial.scapadapter/", { method: "getSignageInformation", parameters: {}, onSuccess: function (G) { if (typeof D === "function") {
        i(G.signageInfo);
        if (typeof G.signageInfo.digitalAudioInputMode !== "undefined") {
            var F = a.DigitalAudioInput.HDMI_DP;
            if (G.signageInfo.digitalAudioInputMode.hasOwnProperty("ext://HDMI:1")) {
                F = G.signageInfo.digitalAudioInputMode["ext://HDMI:1"];
            }
            else {
                if (G.signageInfo.digitalAudioInputMode.hasOwnProperty("ext://hdmi:1")) {
                    F = G.signageInfo.digitalAudioInputMode["ext://hdmi:1"];
                }
            }
            G.signageInfo.digitalAudioInputMode = F;
        }
        D(G.signageInfo);
    } }, onFailure: function (F) { delete F.returnValue; if (typeof E === "function") {
        E(F);
    } } }); }; a.prototype.enableCheckScreen = function (D, E, H) { var G; var F = function (J) { if (typeof J.checkScreen !== "undefined" || J.checkScreen !== null) {
    return true;
}
else {
    G = "need options.checkScreen.";
    return false;
} }; if (F(H)) {
    C.Request("luna://com.webos.service.commercial.scapadapter", { method: "signage/enableCheckScreen", parameters: H, onSuccess: function (J) { if (typeof D === "function") {
            D();
        } }, onFailure: function (J) { delete J.returnValue; if (typeof E === "function") {
            E(J);
        } } });
    i("enableCheckScreen Done");
}
else {
    var I = { errorCode: "BAD_PARAMETER", errorText: G };
    E(I);
} }; a.prototype.setIsmMethod = function (D, E, F) { C.Request("luna://com.webos.service.commercial.scapadapter/signage/", { method: "setIsmMethod", parameters: F, onSuccess: function (G) { i("setIsmMethod: On Success"); if (typeof D === "function") {
        D();
    } }, onFailure: function (G) { i("setIsmMethod: On Failure"); delete G.returnValue; if (typeof E === "function") {
        o(G, "CSIM", "Configuration.setIsmMethod returns failure.");
        E(G);
    } } }); }; a.prototype.setDigitalAudioInputMode = function (D, E, H) { var G; function F(J) { if (J.hasOwnProperty("digitalAudioInputList")) {
    return false;
}
else {
    if (J.hasOwnProperty("digitalAudioInput")) {
        return true;
    }
    else {
        G = "digitalAudioInputList  does not exist.";
        return false;
    }
} } if (F(H)) {
    C.Request("luna://com.webos.service.commercial.scapadapter/", { method: "setDigitalAudioInputList", parameters: { digitalAudioInputList: { "ext://hdmi:1": H.digitalAudioInput } }, onSuccess: function () { if (typeof D === "function") {
            D();
        } }, onFailure: function (J) { delete J.returnValue; if (typeof E === "function") {
            E(J);
        } } });
}
else {
    var I = { errorCode: "BAD_PARAMETER", errorText: G };
    E(I);
} }; var z = false; a.prototype.registerSystemMonitor = function (E, I, M) { var L = ["fan", "signal", "lamp", "screen", "temperature"]; var J; var K = "BAD_PARAMETER"; i("Listeners are: " + JSON.stringify(n, null, 3)); function D(N) { if (z === true) {
    J = "Not ready to register monitor now.";
    K = "SYSTEM_ERROR";
    return false;
} i("options are: " + JSON.stringify(N, null, 3)); if (typeof N.eventHandler !== "function") {
    J = "No event handler was given or event hadnler is not a function";
    return false;
} if (N.monitorConfiguration) {
    for (var P in N.monitorConfiguration) {
        if (P) {
            var R = false;
            for (var O = 0; O < L.length; ++O) {
                if (P === L[O]) {
                    i("Found key: " + L[O]);
                    R = true;
                }
            }
            if (!R) {
                J = "Invalid Monitoring source  : " + P;
                return false;
            }
            var Q = N.monitorConfiguration[P];
            i("value: " + Q);
            if (typeof Q !== "boolean") {
                J = "Invalid value  : " + Q;
                return false;
            }
        }
    }
    return true;
}
else {
    J = "monitorConfiguration  does not exist.";
    return false;
} } if (D(M)) {
    var G = function () { i("Canceled all previous message subscriptions"); var O = M.eventHandler; for (var N in M.monitorConfiguration) {
        if (N) {
            var P = M.monitorConfiguration[N];
            if (P === true) {
                i("Add listener for : " + N);
                p(N, O);
            }
        }
    } i("Monitoring Setup : " + JSON.stringify(n, null, 3)); i("Start Polling : "); C.Request("luna://com.webos.service.commercial.scapadapter", { method: "systemMonitor/startMonitor", parameters: {}, onSuccess: function (Q) { i("On Success"); if (Q.returnValue === true) {
            if (typeof E === "function") {
                E();
            }
        }
        else {
            if (typeof I === "function") {
                I(Q);
            }
        } z = false; }, onFailure: function (Q) { i("On Failure"); delete Q.returnValue; if (typeof I === "function") {
            I(Q);
        } z = false; } }); };
    var F = function (N) { I(N); };
    i("Cancel all previous message subscriptions");
    z = true;
    b(G, F);
}
else {
    var H = { errorCode: K, errorText: J };
    I(H);
} }; a.prototype.unregisterSystemMonitor = function (D, E) { b(D, E); i("After unregister, _gSystemMonitoringSetup are: " + JSON.stringify(n, null, 3)); }; function b(D, E) { i("cancelAllSubscription> setup are: " + JSON.stringify(n, null, 3)); for (var F in n) {
    if (F) {
        x(F);
    }
} i("Stop Polling"); C.Request("luna://com.webos.service.commercial.scapadapter", { method: "systemMonitor/stopMonitor", parameters: {}, onSuccess: function (G) { i("On Success"); if (G.returnValue === true) {
        if (typeof D === "function") {
            D();
        }
    }
    else {
        if (typeof E === "function") {
            E(G);
        }
    } }, onFailure: function (G) { i("On Failure"); delete G.returnValue; if (typeof E === "function") {
        E(G);
    } } }); } a.prototype.getSystemMonitoringInfo = function (D, E) { if (n) {
    D({ fan: n.fan.getEvent, signal: n.signal.getEvent, lamp: n.lamp.getEvent, screen: n.screen.getEvent, temperature: n.temperature.getEvent });
}
else {
    var F = { errorCode: "ERROR", errorText: "Failed to get system monitoring setup" };
    E(F);
} }; a.prototype.setPowerSaveMode = function (D, E, H) { var G; function F(J) { if (J.powerSaveMode) {
    for (var K in J.powerSaveMode) {
        if (K) {
            var L = J.powerSaveMode[K];
            if (K === "ses" || K === "do15MinOff") {
                if (typeof L !== "boolean") {
                    G = "Invalid value  : " + L;
                    return false;
                }
            }
            else {
                if (K === "automaticStandby") {
                    if (!v(a.AutomaticStandbyMode, L)) {
                        G = "Invalid automaticStandby value  : " + L;
                        return false;
                    }
                }
                else {
                    if (K === "dpmMode") {
                        if (!v(a.DpmMode, L)) {
                            G = "Invalid dpmMode value  : " + L;
                            return false;
                        }
                    }
                    else {
                        G = "Unknown value  : " + K;
                        return false;
                    }
                }
            }
        }
    }
    return true;
}
else {
    G = "powerSaveMode  does not exist.";
    return false;
} } if (F(H)) {
    i(H.powerSaveMode);
    C.Request("luna://com.webos.service.commercial.scapadapter", { method: "setPowerSaveMode", parameters: { mode: H.powerSaveMode }, onSuccess: function (J) { i("onSuccess"); if (J.returnValue) {
            D(J.mode);
        }
        else {
            i("FAILED: " + J.errorText);
            E({ errorCode: J.errorCode, errorText: J.errorText });
        } }, onFailure: function (J) { i("onFailure"); i("FAILED: " + J.errorText); E({ errorCode: J.errorCode, errorText: J.errorText }); } });
}
else {
    var I = { errorCode: "BAD_PARAMETER", errorText: G };
    E(I);
} }; a.prototype.getPowerSaveMode = function (D, E) { C.Request("luna://com.webos.service.commercial.scapadapter", { method: "getPowerSaveMode", parameters: {}, onSuccess: function (F) { i("onSuccess"); if (F.returnValue) {
        D(F.mode);
    }
    else {
        i("FAILED: " + F.errorText);
        E({ errorCode: F.errorCode, errorText: F.errorText });
    } }, onFailure: function (F) { i("onFailure"); i("FAILED: " + F.errorText); E({ errorCode: F.errorCode, errorText: F.errorText }); } }); }; a.prototype.setUsagePermission = function (D, E, F) { C.Request("luna://com.webos.service.commercial.scapadapter/signage/", { method: "setUsagePermission", parameters: F, onSuccess: function (G) { delete G.returnValue; if (typeof D === "function") {
        D();
    } }, onFailure: function (G) { delete G.returnValue; if (typeof E === "function") {
        o(G, "SSUP", "Signage.setUsagePermission returns failure.");
        E(G);
    } } }); }; a.prototype.getUsagePermission = function (D, E) { C.Request("luna://com.webos.service.commercial.scapadapter/signage/", { method: "getUsagePermission", parameters: {}, onSuccess: function (F) { delete F.returnValue; if (typeof D === "function") {
        D(F);
    } }, onFailure: function (F) { delete F.returnValue; if (typeof E === "function") {
        o(F, "SGUP", "Signage.getUsagePermission returns failure.");
        E(F);
    } } }); }; a.prototype.getUsageData = function (D, E) { C.Request("luna://com.webos.service.commercial.scapadapter/signage", { method: "getUsageData", parameters: {}, onSuccess: function (F) { console.log("On getUsageData Success"); delete F.returnValue; D(F); }, onFailure: function (F) { console.log("On getUsageData Failure"); delete F.returnValue; E(F); } }); }; a.prototype.captureScreen = function (D, E, F) { var G = { save: (F === undefined || F === null || F.save === undefined ? false : F.save) }; if (F !== undefined && F !== null && F.thumbnail !== undefined && F.thumbnail === true) {
    G.width = 128;
    G.height = 72;
}
else {
    if (F.imgResolution === a.ImgResolution.FHD) {
        G.width = 1920;
        G.height = 1080;
    }
    else {
        G.width = 1280;
        G.height = 720;
    }
} C.Request("luna://com.webos.service.commercial.scapadapter", { method: "captureScreen", parameters: G, onSuccess: function (H) { i("On Success"); if (H.returnValue === true) {
        D({ data: H.data, size: H.size, encoding: H.encoding });
    }
    else {
        E({ errorCode: H.errorCode, errorText: H.errorText });
    } }, onFailure: function (H) { i("On Failure"); E({ errorCode: H.errorCode, errorText: H.errorText }); } }); }; a.prototype.setIntelligentAuto = function (D, E, F) { C.Request("luna://com.webos.service.commercial.scapadapter/signage/", { method: "setIntelligentAuto", parameters: { enabled: F.enabled }, onSuccess: function (G) { i("setIntelligentAuto: On Success"); delete G.returnValue; if (typeof D === "function") {
        D();
    } }, onFailure: function (G) { i("setIntelligentAuto: On Failure"); delete G.returnValue; if (typeof E === "function") {
        o(G, "SSIA", "Signage.setIntelligentAuto returns failure.");
        E(G);
    } } }); }; a.prototype.getIntelligentAuto = function (D, E) { C.Request("luna://com.webos.service.commercial.scapadapter/signage/", { method: "getIntelligentAuto", parameters: {}, onSuccess: function (F) { i("getIntelligentAuto: On Success"); delete F.returnValue; if (typeof D === "function") {
        D();
    } }, onFailure: function (F) { i("getIntelligentAuto: On Failure"); delete F.returnValue; if (typeof E === "function") {
        o(F, "SGIA", "Signage.getIntelligentAuto returns failure.");
        E(F);
    } } }); }; a.prototype.setStudioMode = function (D, E, G) { var F = {}; o(F, "DEPRECATED_API", "This function is deprecated."); E(F); }; a.prototype.getStudioMode = function (D, E) { var F = {}; o(F, "DEPRECATED_API", "This function is deprecated."); E(F); }; a.prototype.setLanDaisyChain = function (D, E, F) { C.Request("luna://com.webos.service.commercial.scapadapter/signage/", { method: "setLanDaisyChain", parameters: F, onSuccess: function (G) { i("setLanDaisyChain: On Success"); delete G.returnValue; if (typeof D === "function") {
        D();
    } }, onFailure: function (G) { i("setLanDaisyChain: On Failure"); delete G.returnValue; if (typeof E === "function") {
        o(G, "SSLD", "Signage.setLanDaisyChain returns failure.");
        E(G);
    } } }); }; a.prototype.getLanDaisyChain = function (D, E) { C.Request("luna://com.webos.service.commercial.scapadapter/signage/", { method: "getLanDaisyChain", parameters: {}, onSuccess: function (F) { i("getLanDaisyChain: On Success"); delete F.returnValue; if (typeof D === "function") {
        D();
    } }, onFailure: function (F) { i("getLanDaisyChain: On Failure"); delete F.returnValue; if (typeof E === "function") {
        o(F, "SGLD", "Signage.getLanDaisyChain returns failure.");
        E(F);
    } } }); }; a.prototype.registerRS232CEventListener = function (D, E, F) { if (typeof F.eventListener !== "function") {
    var G = { errorCode: "BAD_PARAMETER", errorText: "No event listener was given or event listener is not a function" };
    E(G);
    return false;
} e(D, E, F.eventListener); }; a.prototype.unregisterRS232CEventListener = function (D, E) { if (h("RS232C") === false) {
    if (typeof E === "function") {
        E({ errorCode: "BAD_PARAMETER", errorText: "Failed to remove event listener" });
    }
    return;
}
else {
    C.Request("luna://com.webos.service.commercial.scapadapter", { method: "systemMonitor/stopMonitorRS232C", parameters: {}, onSuccess: function (F) { i("On Success"); if (F.returnValue === true) {
            if (typeof D === "function") {
                D();
            }
        }
        else {
            if (typeof E === "function") {
                E(F);
            }
        } }, onFailure: function (F) { i("On Failure"); delete F.returnValue; if (typeof E === "function") {
            E(F);
        } } });
} }; a.prototype.addEventListener = p; a.prototype.removeEventListener = x; c.exports = a; });
Signage = cordova.require("cordova/plugin/signage");
//# sourceMappingURL=signage.js.map