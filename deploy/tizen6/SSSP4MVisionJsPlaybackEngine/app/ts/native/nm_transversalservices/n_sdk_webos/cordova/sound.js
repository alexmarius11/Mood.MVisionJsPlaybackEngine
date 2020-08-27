cordova.define("cordova/plugin/sound", function (e, c, f) { function g(h) { } var a; if (window.PalmSystem) {
    g("Window.PalmSystem Available");
    a = e("cordova/plugin/webos/service");
}
else {
    a = { Request: function (h, i) { g(h + " invoked. But I am a dummy because PalmSystem is not available"); if (typeof i.onFailure === "function") {
            i.onFailure({ returnValue: false, errorText: "PalmSystem Not Available. Cordova is not installed?" });
        } } };
} var d = function () { }; function b(i, j, h) { if (i.errorCode === undefined || i.errorCode === null) {
    i.errorCode = j;
} if (i.errorText === undefined || i.errorText === null) {
    i.errorText = h;
} } d.SoundMode = { Standard: "standard", Cinema: "movie", ClearVoice: "news", Sports: "sports", Music: "music", Game: "game" }; d.SpeakerType = { SignageSpeaker: "tv_speaker", LGSoundSync: "bt_soundbar" }; d.prototype.getSoundStatus = function (h, i) { g("getSoundStatus: "); a.Request("luna://com.webos.service.commercial.scapadapter/sound", { method: "getSoundStatus", onSuccess: function (j) { if (j.returnValue === true) {
        delete j.returnValue;
        h(j);
    } }, onFailure: function (j) { delete j.returnValue; if (typeof i === "function") {
        b(j, "SGSS", "Sound.getSoundStatus returns failure.");
        i(j);
    } } }); g("Sound.getSoundStatus Done"); }; d.prototype.setVolumeLevel = function (h, i, j) { g("setVolumeLevel: " + JSON.stringify(j)); a.Request("luna://com.webos.service.commercial.scapadapter/sound", { method: "setVolumeLevel", parameters: { level: j.level, volOsdEnabled: j.volOsdEnabled }, onSuccess: function (k) { g("setVolumeLevel: On Success"); delete k.returnValue; if (typeof h === "function") {
        h();
    } }, onFailure: function (k) { g("setVolumeLevel: On Failure"); delete k.returnValue; if (typeof i === "function") {
        b(k, "SSVL", "Sound.setVolumeLevel returns failure.");
        i(k);
    } } }); g("Sound.setVolumeLevel Done"); }; d.prototype.setExternalSpeaker = function (h, i, j) { a.Request("luna://com.webos.service.commercial.scapadapter/sound", { method: "setExternalSpeaker", parameters: j, onSuccess: function (k) { g("setExternalSpeaker: On Success"); delete k.returnValue; if (typeof h === "function") {
        h();
    } }, onFailure: function (k) { g("setExternalSpeaker: On Failure"); delete k.returnValue; if (typeof i === "function") {
        b(k, "SSES", "Sound.setExternalSpeaker returns failure.");
        i(k);
    } } }); }; d.prototype.setMuted = function (h, i, j) { a.Request("luna://com.webos.service.commercial.scapadapter/sound", { method: "setMuted", parameters: { muted: j.muted }, onSuccess: function (k) { g("setMuted: On Success"); if (k.returnValue === true) {
        if (typeof h === "function") {
            h();
        }
    } }, onFailure: function (k) { g("setMuted: On Failure"); delete k.returnValue; if (typeof i === "function") {
        b(k, "SSM", "Sound.setMuted returns failure.");
        i(k);
    } } }); }; d.prototype.setSoundMode = function (h, i, j) { a.Request("luna://com.webos.service.commercial.scapadapter/sound", { method: "setSoundMode", parameters: j, onSuccess: function (k) { g("setSoundMode: On Success"); delete k.returnValue; if (typeof h === "function") {
        h();
    } }, onFailure: function (k) { g("setSoundMode: On Failure"); delete k.returnValue; if (typeof i === "function") {
        b(k, "SSSM", "Sound.setSoundMode returns failure.");
        i(k);
    } } }); }; d.prototype.getSoundMode = function (h, i) { a.Request("luna://com.webos.service.commercial.scapadapter/sound", { method: "getSoundMode", onSuccess: function (j) { if (j.returnValue === true) {
        delete j.returnValue;
        h(j);
    } }, onFailure: function (j) { delete j.returnValue; if (typeof i === "function") {
        b(j, "SGSM", "Sound.getSoundMode returns failure.");
        i(j);
    } } }); }; d.prototype.setSoundOut = function (h, i, j) { a.Request("luna://com.webos.service.commercial.scapadapter/sound", { method: "setSoundOut", parameters: j, onSuccess: function (k) { g("setSoundOut: On Success"); delete k.returnValue; if (typeof h === "function") {
        h();
    } }, onFailure: function (k) { g("setSoundOut: On Failure"); delete k.returnValue; if (typeof i === "function") {
        b(k, "SSSO", "Sound.setSoundOut returns failure.");
        i(k);
    } } }); }; d.prototype.getSoundOut = function (h, i) { a.Request("luna://com.webos.service.commercial.scapadapter/sound", { method: "getSoundOut", onSuccess: function (j) { if (j.returnValue === true) {
        delete j.returnValue;
        h(j);
    } }, onFailure: function (j) { delete j.returnValue; if (typeof i === "function") {
        b(j, "SGSO", "Sound.getSoundOut returns failure.");
        i(j);
    } } }); }; f.exports = d; });
Sound = cordova.require("cordova/plugin/sound");
//# sourceMappingURL=sound.js.map