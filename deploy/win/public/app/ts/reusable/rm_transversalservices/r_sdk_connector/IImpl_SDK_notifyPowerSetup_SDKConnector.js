define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_transversalservices;
    (function (rm_transversalservices) {
        var IImpl_SDK_notifyPowerSetup_SDKConnector = /** @class */ (function () {
            //----------- constructor 
            function IImpl_SDK_notifyPowerSetup_SDKConnector(owner) {
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
            IImpl_SDK_notifyPowerSetup_SDKConnector.prototype.notify_setPowerSaveMode = function (powerSaveMode, error, context, callback) {
            };
            //----------------------------
            IImpl_SDK_notifyPowerSetup_SDKConnector.prototype.notify_promise_setPowerSaveMode = function (failureModeInfo, error, context, callback) {
            };
            //----------------------------
            IImpl_SDK_notifyPowerSetup_SDKConnector.prototype.notify_getPowerSaveMode = function (error, context, callback) {
            };
            //----------------------------
            IImpl_SDK_notifyPowerSetup_SDKConnector.prototype.notify_promise_getPowerSaveMode = function (error, context, callback) {
            };
            //-----------------------------
            // Execute Power command
            //-----------------------------
            IImpl_SDK_notifyPowerSetup_SDKConnector.prototype.notify_executePowerCommand = function (powerProperties, error, context, callback) {
            };
            IImpl_SDK_notifyPowerSetup_SDKConnector.prototype.notify_promise_executePowerCommand = function (powerProperties, error, context, callback) {
            };
            //-----------------------------
            // get/set Power Mng Mode
            //-----------------------------
            IImpl_SDK_notifyPowerSetup_SDKConnector.prototype.notify_setPowerMngMode = function (powerProperties, error, context, callback) {
            };
            IImpl_SDK_notifyPowerSetup_SDKConnector.prototype.notify_promise_setPowerMngMode = function (powerProperties, error, context, callback) {
            };
            IImpl_SDK_notifyPowerSetup_SDKConnector.prototype.notify_getPowerMngMode = function (error, context, callback) {
            };
            IImpl_SDK_notifyPowerSetup_SDKConnector.prototype.notify_promise_getPowerMngMode = function (error, context, callback) {
            };
            //-----------------------------
            // get/set Power OnDelay
            //-----------------------------
            IImpl_SDK_notifyPowerSetup_SDKConnector.prototype.notify_setPowerOnDelayTime = function (powerProperties, error, context, callback) {
            };
            IImpl_SDK_notifyPowerSetup_SDKConnector.prototype.notify_promise_setPowerOnDelayTime = function (powerProperties, error, context, callback) {
            };
            IImpl_SDK_notifyPowerSetup_SDKConnector.prototype.notify_getPowerOnDelayTime = function (error, context, callback) {
            };
            IImpl_SDK_notifyPowerSetup_SDKConnector.prototype.notify_promise_getPowerOnDelayTime = function (error, context, callback) {
            };
            //-----------------------------
            // get/set Display Power Mng Mode and WakeUp Signal
            //-----------------------------
            IImpl_SDK_notifyPowerSetup_SDKConnector.prototype.notify_setDisplayPowerMngMode = function (powerProperties, error, context, callback) {
            };
            IImpl_SDK_notifyPowerSetup_SDKConnector.prototype.notify_promise_setDisplayPowerMngMode = function (powerProperties, error, context, callback) {
            };
            IImpl_SDK_notifyPowerSetup_SDKConnector.prototype.notify_getDisplayPowerMngMode = function (error, context, callback) {
            };
            IImpl_SDK_notifyPowerSetup_SDKConnector.prototype.notify_promise_getDisplayPowerMngMode = function (error, context, callback) {
            };
            IImpl_SDK_notifyPowerSetup_SDKConnector.prototype.notify_setDisplayPowerMngWakeupSignal = function (powerProperties, error, context, callback) {
            };
            IImpl_SDK_notifyPowerSetup_SDKConnector.prototype.notify_promise_setDisplayPowerMngWakeupSignal = function (powerProperties, error, context, callback) {
            };
            IImpl_SDK_notifyPowerSetup_SDKConnector.prototype.notify_getDisplayPowerMngWakeupSignal = function (error, context, callback) {
            };
            IImpl_SDK_notifyPowerSetup_SDKConnector.prototype.notify_promise_getDisplayPowerMngWakeupSignal = function (error, context, callback) {
            };
            //-----------------------------
            // get/set Wake On Lan 
            //-----------------------------
            IImpl_SDK_notifyPowerSetup_SDKConnector.prototype.notify_setWakeOnLan = function (powerProperties, error, context, callback) {
            };
            IImpl_SDK_notifyPowerSetup_SDKConnector.prototype.notify_promise_setWakeOnLan = function (powerProperties, error, context, callback) {
            };
            IImpl_SDK_notifyPowerSetup_SDKConnector.prototype.notify_getWakeOnLan = function (error, context, callback) {
            };
            IImpl_SDK_notifyPowerSetup_SDKConnector.prototype.notify_promise_getWakeOnLan = function (error, context, callback) {
            };
            //-----------------------------
            // Device Timer management 
            //-----------------------------
            IImpl_SDK_notifyPowerSetup_SDKConnector.prototype.notify_addOffDeviceTimer = function (deviceTimerInfo, error, context, callback) {
            };
            IImpl_SDK_notifyPowerSetup_SDKConnector.prototype.notify_promise_addOffDeviceTimer = function (deviceTimerInfo, error, context, callback) {
            };
            IImpl_SDK_notifyPowerSetup_SDKConnector.prototype.notify_addOnDeviceTimer = function (deviceTimerInfo, error, context, callback) {
            };
            IImpl_SDK_notifyPowerSetup_SDKConnector.prototype.notify_promise_addOnDeviceTimer = function (deviceTimerInfo, error, context, callback) {
            };
            IImpl_SDK_notifyPowerSetup_SDKConnector.prototype.notify_deleteOffDeviceTimer = function (deviceTimerInfo, error, context, callback) {
            };
            IImpl_SDK_notifyPowerSetup_SDKConnector.prototype.notify_promise_deleteOffDeviceTimer = function (deviceTimerInfo, error, context, callback) {
            };
            IImpl_SDK_notifyPowerSetup_SDKConnector.prototype.notify_deleteOnDeviceTimer = function (deviceTimerInfo, error, context, callback) {
            };
            IImpl_SDK_notifyPowerSetup_SDKConnector.prototype.notify_promise_deleteOnDeviceTimer = function (deviceTimerInfo, error, context, callback) {
            };
            IImpl_SDK_notifyPowerSetup_SDKConnector.prototype.notify_getOffDeviceTimerList = function (error, context, callback) {
            };
            IImpl_SDK_notifyPowerSetup_SDKConnector.prototype.notify_promise_getOffDeviceTimerList = function (error, context, callback) {
            };
            IImpl_SDK_notifyPowerSetup_SDKConnector.prototype.notify_getOnDeviceTimerList = function (error, context, callback) {
            };
            IImpl_SDK_notifyPowerSetup_SDKConnector.prototype.notify_promise_getOnDeviceTimerList = function (error, context, callback) {
            };
            IImpl_SDK_notifyPowerSetup_SDKConnector.prototype.notify_enableAllOffDeviceTimers = function (enable, error, context, callback) {
            };
            IImpl_SDK_notifyPowerSetup_SDKConnector.prototype.notify_promise_enableAllOffDeviceTimers = function (enable, error, context, callback) {
            };
            IImpl_SDK_notifyPowerSetup_SDKConnector.prototype.notify_enableAllOnDeviceTimers = function (enable, error, context, callback) {
            };
            IImpl_SDK_notifyPowerSetup_SDKConnector.prototype.notify_promise_enableAllOnDeviceTimers = function (enable, error, context, callback) {
            };
            return IImpl_SDK_notifyPowerSetup_SDKConnector;
        }());
        rm_transversalservices.IImpl_SDK_notifyPowerSetup_SDKConnector = IImpl_SDK_notifyPowerSetup_SDKConnector;
    })(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
});
//# sourceMappingURL=IImpl_SDK_notifyPowerSetup_SDKConnector.js.map