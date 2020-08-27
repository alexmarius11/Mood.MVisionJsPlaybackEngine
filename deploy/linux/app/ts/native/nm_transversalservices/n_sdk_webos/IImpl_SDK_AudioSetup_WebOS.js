"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./cordova/cordova.webos");
require("./cordova/sound");
var nm_transversalservices;
(function (nm_transversalservices) {
    var IImpl_SDK_AudioSetup_WebOS = (function () {
        function IImpl_SDK_AudioSetup_WebOS(owner) {
            this._owner = owner;
        }
        IImpl_SDK_AudioSetup_WebOS.prototype.setVolumeLevel = function (audioProperties, error, context, callback) {
            var options = {
                level: 15
            };
            options.level = 15;
            function successCb() {
                callback("setVolumeLevel success");
            }
            function failureCb(cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log("Error Code [" + errorCode + "]: " + errorText);
                callback(cbObject);
            }
            var sound = new Sound();
            sound.setVolumeLevel(successCb, failureCb, options);
        };
        IImpl_SDK_AudioSetup_WebOS.prototype.promise_setVolumeLevel = function (soundProperties, error, context, callback) {
        };
        IImpl_SDK_AudioSetup_WebOS.prototype.getVolumeLevel = function (error, context, callback) {
            function successCb(cbObject) {
                callback("setVolumeLevel success");
                var level = cbObject.level;
            }
            function failureCb(cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log("Error Code [" + errorCode + "]: " + errorText);
                callback(cbObject);
            }
            var sound = new Sound();
            sound.getVolumeLevel(successCb, failureCb);
        };
        IImpl_SDK_AudioSetup_WebOS.prototype.promise_getVolumeLevel = function (error, context, callback) {
        };
        IImpl_SDK_AudioSetup_WebOS.prototype.setMute = function (soundProperties, error, context, callback) {
            var options = {
                muted: true
            };
            options.muted = true;
            function successCb() {
                callback("setMuted success");
            }
            function failureCb(cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log("Error Code [" + errorCode + "]: " + errorText);
                callback(cbObject);
            }
            new Sound().setMuted(successCb, failureCb, options);
        };
        IImpl_SDK_AudioSetup_WebOS.prototype.promise_setMute = function (soundProperties, error, context, callback) {
        };
        IImpl_SDK_AudioSetup_WebOS.prototype.getMute = function (audioProperties, error, context, callback) {
            function successCb(cbObject) {
                callback("setMuted success");
                var muted = cbObject.muted;
            }
            function failureCb(cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log("Error Code [" + errorCode + "]: " + errorText);
                callback(cbObject);
            }
            new Sound().getMuted(successCb, failureCb);
        };
        IImpl_SDK_AudioSetup_WebOS.prototype.promise_getMute = function (soundProperties, error, context, callback) {
        };
        IImpl_SDK_AudioSetup_WebOS.prototype.setSoundMode = function (soundProperties, error, context, callback) {
            var options = {
                mode: Sound.SoundMode.Standard,
                balance: 20
            };
            function successCb() {
                callback("setSoundMode success");
            }
            function failureCb(cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log("Error Code [" + errorCode + "]: " + errorText);
                callback(cbObject);
            }
            new Sound().setSoundMode(successCb, failureCb, options);
        };
        IImpl_SDK_AudioSetup_WebOS.prototype.promise_setSoundMode = function (soundProperties, error, context, callback) {
        };
        IImpl_SDK_AudioSetup_WebOS.prototype.getSoundMode = function (soundProperties, error, context, callback) {
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
            new Sound().getSoundMode(successCb, failureCb);
        };
        IImpl_SDK_AudioSetup_WebOS.prototype.promise_getSoundMode = function (soundProperties, error, context, callback) {
        };
        IImpl_SDK_AudioSetup_WebOS.prototype.setSoundSpeaker = function (soundProperties, error, context, callback) {
        };
        IImpl_SDK_AudioSetup_WebOS.prototype.promise_setSoundSpeaker = function (soundProperties, error, context, callback) {
        };
        IImpl_SDK_AudioSetup_WebOS.prototype.getSoundSpeaker = function (soundProperties, error, context, callback) {
        };
        IImpl_SDK_AudioSetup_WebOS.prototype.promise_getSoundSpeaker = function (soundProperties, error, context, callback) {
        };
        IImpl_SDK_AudioSetup_WebOS.prototype.setDigitalAudioInputMode = function (inputSourceList, error, context, callback) {
        };
        IImpl_SDK_AudioSetup_WebOS.prototype.promise_setDigitalAudioInputModes = function (inputSourceList, error, context, callback) {
        };
        IImpl_SDK_AudioSetup_WebOS.prototype.getDigitalAudioInputMode = function (error, context, callback) {
        };
        IImpl_SDK_AudioSetup_WebOS.prototype.promise_getDigitalAudioInputModes = function (error, context, callback) {
        };
        return IImpl_SDK_AudioSetup_WebOS;
    }());
    nm_transversalservices.IImpl_SDK_AudioSetup_WebOS = IImpl_SDK_AudioSetup_WebOS;
})(nm_transversalservices = exports.nm_transversalservices || (exports.nm_transversalservices = {}));
//# sourceMappingURL=IImpl_SDK_AudioSetup_WebOS.js.map