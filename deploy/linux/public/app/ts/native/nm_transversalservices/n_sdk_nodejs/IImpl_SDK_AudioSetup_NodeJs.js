define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var nm_transversalservices;
    (function (nm_transversalservices) {
        var IImpl_SDK_AudioSetup_NodeJs = /** @class */ (function () {
            //----------- constructor 
            function IImpl_SDK_AudioSetup_NodeJs(owner) {
                this._owner = owner;
            }
            //-----------------------------
            //  set/get Volume Level
            //-----------------------------
            //----------------
            IImpl_SDK_AudioSetup_NodeJs.prototype.setVolumeLevel = function (audioProperties, error, context, callback) {
                var loudness = require('loudness');
                var volumeLevel = audioProperties.getVolumeLevel();
                loudness.setVolume(volumeLevel, function (err) {
                    if (err) {
                        console.log('Error setting audio volume level to: ' + volumeLevel + ' :' + JSON.stringify(err));
                        context.setError(error);
                        if (context.getError() != null)
                            context.getError().setError(9010, 'Error setting audio volume level to: ' + volumeLevel + ' :' + JSON.stringify(err));
                        if (callback != null)
                            callback(context);
                        return;
                    }
                    // Done
                    console.log('sdk:set-volume-level ok. Volume level set to: ' + volumeLevel);
                    context.setResult('sdk:set-volume-level ok. Volume level set to: ' + volumeLevel);
                    context.setBoolResult(true);
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                });
            };
            //-----------------------------
            IImpl_SDK_AudioSetup_NodeJs.prototype.promise_setVolumeLevel = function (soundProperties, error, context, callback) {
            };
            //-----------------------------
            IImpl_SDK_AudioSetup_NodeJs.prototype.getVolumeLevel = function (error, context, callback) {
                var loudness = require('loudness');
                loudness.getVolume(function (err, vol) {
                    if (err) {
                        console.log("sdk:get-volume-level error. Error setting audio volume level to: " + vol + ' :' + JSON.stringify(err));
                        context.setError(error);
                        if (context.getError() != null)
                            context.getError().setError(9011, "sdk:get-volume-level error. Error setting audio volume level to: " + vol + ' :' + JSON.stringify(err));
                        if (callback != null)
                            callback(context);
                        return;
                    }
                    // Done
                    var audioProperties;
                    audioProperties.setVolumeLevel(vol);
                    console.log('sdk:get-volume-level ok. Current Volume level is: ' + vol);
                    context.setResult('sdk:get-volume-level ok. Current Volume level is: ' + vol);
                    context.setBoolResult(true);
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                });
            };
            //-----------------------------
            IImpl_SDK_AudioSetup_NodeJs.prototype.promise_getVolumeLevel = function (error, context, callback) {
            };
            //-----------------------------
            //  set/get Mute
            //-----------------------------
            //-----------------------------
            IImpl_SDK_AudioSetup_NodeJs.prototype.setMute = function (soundProperties, error, context, callback) {
                var loudness = require('loudness');
                var mute = soundProperties.isMute();
                loudness.setMuted(mute, function (err) {
                    if (err) {
                        console.log('Error setting audio to mute: ' + mute + ' :' + JSON.stringify(err));
                        context.setError(error);
                        if (context.getError() != null)
                            context.getError().setError(9010, 'Error setting audio to mute: ' + mute + ' :' + JSON.stringify(err));
                        if (callback != null)
                            callback(context);
                        return;
                    }
                    // Done
                    console.log('sdk:set-mute ok. Audio set to mute: ' + mute);
                    context.setResult('sdk:set-mute ok. Audio set to mute: ' + mute);
                    context.setBoolResult(true);
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                });
            };
            //-----------------------------
            IImpl_SDK_AudioSetup_NodeJs.prototype.promise_setMute = function (soundProperties, error, context, callback) {
            };
            //-----------------------------
            IImpl_SDK_AudioSetup_NodeJs.prototype.getMute = function (audioProperties, error, context, callback) {
                var loudness = require('loudness');
                var owner = this._owner;
                loudness.getMuted(function (err, mute) {
                    if (err) {
                        console.log("sdk:get-volume-level error. Error setting audio volume level to: " + mute + ' :' + JSON.stringify(err));
                        context.setError(error);
                        if (context.getError() != null)
                            context.getError().setError(9011, "sdk:get-volume-level error. Error setting audio volume level to: " + mute + ' :' + JSON.stringify(err));
                        if (callback != null)
                            callback(context);
                        return;
                    }
                    // Done
                    var audioProperties = owner._aServiceLocator._iEntityCreation.createDefaultSoundProperties(error);
                    audioProperties.setVolumeLevel(mute);
                    console.log('sdk:get-mute ok. Current mute value is: ' + mute);
                    context.setResult('sdk:get-mute ok. Current mutelevel is: ' + mute);
                    context.setObjectResult(audioProperties);
                    context.setBoolResult(true);
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                });
            };
            //--------------------------------
            IImpl_SDK_AudioSetup_NodeJs.prototype.promise_getMute = function (soundProperties, error, context, callback) {
            };
            //-----------------------------
            //  set/get Sound Mode
            //-----------------------------
            //--------------------------------
            IImpl_SDK_AudioSetup_NodeJs.prototype.setSoundMode = function (soundProperties, error, context, callback) {
            };
            //--------------------------------
            IImpl_SDK_AudioSetup_NodeJs.prototype.promise_setSoundMode = function (soundProperties, error, context, callback) {
            };
            //--------------------------------
            IImpl_SDK_AudioSetup_NodeJs.prototype.getSoundMode = function (soundProperties, error, context, callback) {
            };
            //--------------------------------
            IImpl_SDK_AudioSetup_NodeJs.prototype.promise_getSoundMode = function (soundProperties, error, context, callback) {
            };
            //-----------------------------
            //  set/get Output Speaker 
            //-----------------------------
            //--------------------------------
            IImpl_SDK_AudioSetup_NodeJs.prototype.setSoundSpeaker = function (soundProperties, error, context, callback) {
            };
            //---------------------------------
            IImpl_SDK_AudioSetup_NodeJs.prototype.promise_setSoundSpeaker = function (soundProperties, error, context, callback) {
            };
            //--------------------------------
            IImpl_SDK_AudioSetup_NodeJs.prototype.getSoundSpeaker = function (soundProperties, error, context, callback) {
            };
            //--------------------------------
            IImpl_SDK_AudioSetup_NodeJs.prototype.promise_getSoundSpeaker = function (soundProperties, error, context, callback) {
            };
            //-----------------------------
            //  get/set Digital Audio Input Mode
            //-----------------------------
            //-------------------------------
            IImpl_SDK_AudioSetup_NodeJs.prototype.setDigitalAudioInputMode = function (inputSourceList, error, context, callback) {
            };
            //---------------------------------
            IImpl_SDK_AudioSetup_NodeJs.prototype.promise_setDigitalAudioInputModes = function (inputSourceList, error, context, callback) {
            };
            //-------------------------------
            IImpl_SDK_AudioSetup_NodeJs.prototype.getDigitalAudioInputMode = function (error, context, callback) {
            };
            //---------------------------------
            IImpl_SDK_AudioSetup_NodeJs.prototype.promise_getDigitalAudioInputModes = function (error, context, callback) {
            };
            return IImpl_SDK_AudioSetup_NodeJs;
        }());
        nm_transversalservices.IImpl_SDK_AudioSetup_NodeJs = IImpl_SDK_AudioSetup_NodeJs;
    })(nm_transversalservices = exports.nm_transversalservices || (exports.nm_transversalservices = {}));
});
//# sourceMappingURL=IImpl_SDK_AudioSetup_NodeJs.js.map