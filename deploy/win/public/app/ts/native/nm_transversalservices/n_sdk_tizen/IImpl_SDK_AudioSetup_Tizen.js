define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var nm_transversalservices;
    (function (nm_transversalservices) {
        var IImpl_SDK_AudioSetup_Tizen = /** @class */ (function () {
            //----------- constructor 
            function IImpl_SDK_AudioSetup_Tizen(owner) {
                this._owner = owner;
            }
            //-----------------------------
            //  set/get Volume Level
            //-----------------------------
            //----------------
            IImpl_SDK_AudioSetup_Tizen.prototype.setVolumeLevel = function (audioProperties, error, context, callback) {
                tizen.tvaudiocontrol.setVolume(audioProperties.getVolumeLevel());
            };
            //-----------------------------
            IImpl_SDK_AudioSetup_Tizen.prototype.promise_setVolumeLevel = function (soundProperties, error, context, callback) {
            };
            //-----------------------------
            IImpl_SDK_AudioSetup_Tizen.prototype.getVolumeLevel = function (error, context, callback) {
                var volumeLevel = tizen.tvaudiocontrol.getVolume();
                context.setResult(volumeLevel);
                if (callback != null)
                    callback(context);
            };
            //-----------------------------
            IImpl_SDK_AudioSetup_Tizen.prototype.promise_getVolumeLevel = function (error, context, callback) {
            };
            //-----------------------------
            //  set/get Mute
            //-----------------------------
            //-----------------------------
            IImpl_SDK_AudioSetup_Tizen.prototype.setMute = function (soundProperties, error, context, callback) {
                tizen.tvaudiocontrol.setMute(true);
            };
            //-----------------------------
            IImpl_SDK_AudioSetup_Tizen.prototype.promise_setMute = function (soundProperties, error, context, callback) {
            };
            //-----------------------------
            IImpl_SDK_AudioSetup_Tizen.prototype.getMute = function (audioProperties, error, context, callback) {
                var isMute = tizen.tvaudiocontrol.isMute();
                context.setResult(isMute);
                if (callback != null)
                    callback(context);
            };
            //--------------------------------
            IImpl_SDK_AudioSetup_Tizen.prototype.promise_getMute = function (soundProperties, error, context, callback) {
            };
            //-----------------------------
            //  set/get Sound Mode
            //-----------------------------
            //--------------------------------
            IImpl_SDK_AudioSetup_Tizen.prototype.setSoundMode = function (soundProperties, error, context, callback) {
            };
            //--------------------------------
            IImpl_SDK_AudioSetup_Tizen.prototype.promise_setSoundMode = function (soundProperties, error, context, callback) {
            };
            //--------------------------------
            IImpl_SDK_AudioSetup_Tizen.prototype.getSoundMode = function (soundProperties, error, context, callback) {
            };
            //--------------------------------
            IImpl_SDK_AudioSetup_Tizen.prototype.promise_getSoundMode = function (soundProperties, error, context, callback) {
            };
            //-----------------------------
            //  set/get Output Speaker 
            //-----------------------------
            //--------------------------------
            IImpl_SDK_AudioSetup_Tizen.prototype.setSoundSpeaker = function (soundProperties, error, context, callback) {
            };
            //---------------------------------
            IImpl_SDK_AudioSetup_Tizen.prototype.promise_setSoundSpeaker = function (soundProperties, error, context, callback) {
            };
            //--------------------------------
            IImpl_SDK_AudioSetup_Tizen.prototype.getSoundSpeaker = function (soundProperties, error, context, callback) {
            };
            //--------------------------------
            IImpl_SDK_AudioSetup_Tizen.prototype.promise_getSoundSpeaker = function (soundProperties, error, context, callback) {
            };
            //-----------------------------
            //  get/set Digital Audio Input Mode
            //-----------------------------
            //-------------------------------
            IImpl_SDK_AudioSetup_Tizen.prototype.setDigitalAudioInputMode = function (inputSourceList, error, context, callback) {
            };
            //---------------------------------
            IImpl_SDK_AudioSetup_Tizen.prototype.promise_setDigitalAudioInputModes = function (inputSourceList, error, context, callback) {
            };
            //-------------------------------
            IImpl_SDK_AudioSetup_Tizen.prototype.getDigitalAudioInputMode = function (error, context, callback) {
            };
            //---------------------------------
            IImpl_SDK_AudioSetup_Tizen.prototype.promise_getDigitalAudioInputModes = function (error, context, callback) {
            };
            return IImpl_SDK_AudioSetup_Tizen;
        }());
        nm_transversalservices.IImpl_SDK_AudioSetup_Tizen = IImpl_SDK_AudioSetup_Tizen;
    })(nm_transversalservices = exports.nm_transversalservices || (exports.nm_transversalservices = {}));
});
//# sourceMappingURL=IImpl_SDK_AudioSetup_Tizen.js.map