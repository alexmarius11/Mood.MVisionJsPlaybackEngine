define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var nm_transversalservices;
    (function (nm_transversalservices) {
        var IImpl_SDK_PowerSetup_Tizen = /** @class */ (function () {
            //----------- constructor 
            function IImpl_SDK_PowerSetup_Tizen(owner) {
                this._owner = owner;
            }
            //---------------------
            // Power Save Mode Info mode parameters.
            //  powerSaveModeInfo:
            //     ses: Enable/disable Smart Energy Saving mode
            //     dpmMode: Set Display Power Managerment mode. Refer to Signage.DpmMode for more information.
            //     automaticStandby: Set Automatic Standby mode. Refer to Signage.AutomaticStandbyMode for more information.
            //     do15MinOff: Enable/disable 15 Minute Off feature.	
            //-----------------------
            //----------------------------
            IImpl_SDK_PowerSetup_Tizen.prototype.setPowerSaveMode = function (powerSaveMode, error, context, callback) {
            };
            //----------------------------
            IImpl_SDK_PowerSetup_Tizen.prototype.promise_setPowerSaveMode = function (failureModeInfo, error, context, callback) {
            };
            //----------------------------
            IImpl_SDK_PowerSetup_Tizen.prototype.getPowerSaveMode = function (error, context, callback) {
            };
            //----------------------------
            IImpl_SDK_PowerSetup_Tizen.prototype.promise_getPowerSaveMode = function (error, context, callback) {
            };
            //-----------------------------
            // Execute Power command
            //-----------------------------
            IImpl_SDK_PowerSetup_Tizen.prototype.executePowerCommand = function (powerProperties, error, context, callback) {
            };
            IImpl_SDK_PowerSetup_Tizen.prototype.promise_executePowerCommand = function (powerProperties, error, context, callback) {
            };
            //-----------------------------
            // get/set Power Mng Mode
            //-----------------------------
            IImpl_SDK_PowerSetup_Tizen.prototype.setPowerMngMode = function (powerProperties, error, context, callback) {
            };
            IImpl_SDK_PowerSetup_Tizen.prototype.promise_setPowerMngMode = function (powerProperties, error, context, callback) {
            };
            IImpl_SDK_PowerSetup_Tizen.prototype.getPowerMngMode = function (error, context, callback) {
            };
            IImpl_SDK_PowerSetup_Tizen.prototype.promise_getPowerMngMode = function (error, context, callback) {
            };
            //-----------------------------
            // get/set Power OnDelay
            //-----------------------------
            IImpl_SDK_PowerSetup_Tizen.prototype.setPowerOnDelayTime = function (powerProperties, error, context, callback) {
            };
            IImpl_SDK_PowerSetup_Tizen.prototype.promise_setPowerOnDelayTime = function (powerProperties, error, context, callback) {
            };
            IImpl_SDK_PowerSetup_Tizen.prototype.getPowerOnDelayTime = function (error, context, callback) {
            };
            IImpl_SDK_PowerSetup_Tizen.prototype.promise_getPowerOnDelayTime = function (error, context, callback) {
            };
            //-----------------------------
            // get/set Display Power Mng Mode and WakeUp Signal
            //-----------------------------
            IImpl_SDK_PowerSetup_Tizen.prototype.setDisplayPowerMngMode = function (powerProperties, error, context, callback) {
            };
            IImpl_SDK_PowerSetup_Tizen.prototype.promise_setDisplayPowerMngMode = function (powerProperties, error, context, callback) {
            };
            IImpl_SDK_PowerSetup_Tizen.prototype.getDisplayPowerMngMode = function (error, context, callback) {
            };
            IImpl_SDK_PowerSetup_Tizen.prototype.promise_getDisplayPowerMngMode = function (error, context, callback) {
            };
            IImpl_SDK_PowerSetup_Tizen.prototype.setDisplayPowerMngWakeupSignal = function (powerProperties, error, context, callback) {
            };
            IImpl_SDK_PowerSetup_Tizen.prototype.promise_setDisplayPowerMngWakeupSignal = function (powerProperties, error, context, callback) {
            };
            IImpl_SDK_PowerSetup_Tizen.prototype.getDisplayPowerMngWakeupSignal = function (error, context, callback) {
            };
            IImpl_SDK_PowerSetup_Tizen.prototype.promise_getDisplayPowerMngWakeupSignal = function (error, context, callback) {
            };
            //-----------------------------
            // get/set Wake On Lan 
            //-----------------------------
            IImpl_SDK_PowerSetup_Tizen.prototype.setWakeOnLan = function (powerProperties, error, context, callback) {
            };
            IImpl_SDK_PowerSetup_Tizen.prototype.promise_setWakeOnLan = function (powerProperties, error, context, callback) {
            };
            IImpl_SDK_PowerSetup_Tizen.prototype.getWakeOnLan = function (error, context, callback) {
            };
            IImpl_SDK_PowerSetup_Tizen.prototype.promise_getWakeOnLan = function (error, context, callback) {
            };
            //-----------------------------
            // Device Timer management 
            //-----------------------------
            IImpl_SDK_PowerSetup_Tizen.prototype.addOffDeviceTimer = function (deviceTimerInfo, error, context, callback) {
            };
            IImpl_SDK_PowerSetup_Tizen.prototype.promise_addOffDeviceTimer = function (deviceTimerInfo, error, context, callback) {
            };
            IImpl_SDK_PowerSetup_Tizen.prototype.addOnDeviceTimer = function (deviceTimerInfo, error, context, callback) {
            };
            IImpl_SDK_PowerSetup_Tizen.prototype.promise_addOnDeviceTimer = function (deviceTimerInfo, error, context, callback) {
            };
            IImpl_SDK_PowerSetup_Tizen.prototype.deleteOffDeviceTimer = function (deviceTimerInfo, error, context, callback) {
            };
            IImpl_SDK_PowerSetup_Tizen.prototype.promise_deleteOffDeviceTimer = function (deviceTimerInfo, error, context, callback) {
            };
            IImpl_SDK_PowerSetup_Tizen.prototype.deleteOnDeviceTimer = function (deviceTimerInfo, error, context, callback) {
            };
            IImpl_SDK_PowerSetup_Tizen.prototype.promise_deleteOnDeviceTimer = function (deviceTimerInfo, error, context, callback) {
            };
            IImpl_SDK_PowerSetup_Tizen.prototype.getOffDeviceTimerList = function (error, context, callback) {
            };
            IImpl_SDK_PowerSetup_Tizen.prototype.promise_getOffDeviceTimerList = function (error, context, callback) {
            };
            IImpl_SDK_PowerSetup_Tizen.prototype.getOnDeviceTimerList = function (error, context, callback) {
            };
            IImpl_SDK_PowerSetup_Tizen.prototype.promise_getOnDeviceTimerList = function (error, context, callback) {
            };
            IImpl_SDK_PowerSetup_Tizen.prototype.enableAllOffDeviceTimers = function (enable, error, context, callback) {
            };
            IImpl_SDK_PowerSetup_Tizen.prototype.promise_enableAllOffDeviceTimers = function (enable, error, context, callback) {
            };
            IImpl_SDK_PowerSetup_Tizen.prototype.enableAllOnDeviceTimers = function (enable, error, context, callback) {
            };
            IImpl_SDK_PowerSetup_Tizen.prototype.promise_enableAllOnDeviceTimers = function (enable, error, context, callback) {
            };
            return IImpl_SDK_PowerSetup_Tizen;
        }());
        nm_transversalservices.IImpl_SDK_PowerSetup_Tizen = IImpl_SDK_PowerSetup_Tizen;
    })(nm_transversalservices = exports.nm_transversalservices || (exports.nm_transversalservices = {}));
});
//# sourceMappingURL=IImpl_SDK_PowerSetup_Tizen.js.map