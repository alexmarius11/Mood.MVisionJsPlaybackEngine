"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nm_transversalservices;
(function (nm_transversalservices) {
    var IImpl_SDK_TvSignageSetup_Tizen = (function () {
        function IImpl_SDK_TvSignageSetup_Tizen(owner) {
            this._owner = owner;
        }
        IImpl_SDK_TvSignageSetup_Tizen.prototype.captureScreen = function (captureScreenInfo, error, context, callback) {
            function onSuccess(val) {
                console.log("[captureScreen] success : " + val);
            }
            function onError(error) {
                console.log("[captureScreen] code :" + error.code + " error name: " + error.name + "  message " + error.message);
                error.setError(error.code, error.message);
                context.setError(error);
                if (callback != null)
                    callback(context);
            }
            b2bapis.b2bcontrol.captureScreen(onSuccess, onError);
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_captureScreen = function (soundProperties, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.enableCheckScreen = function (enabledCheckScreen, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_enableCheckScreen = function (enabledCheckScreen, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.setFailureMode = function (failureModeInfo, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_setFailureMode = function (failureModeInfo, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.getFailureMode = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_getFailureMode = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.setIntelligentAuto = function (enabledIntelligentAuto, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_setIntelligentAuto = function (enabledIntelligentAuto, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.getIntelligentAuto = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_getIntelligentAuto = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.getSignageInfo = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_getSignageInfo = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.setPortraitMode = function (portraitMode, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_setPortraitMode = function (portraitMode, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.getPortraitMode = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_getPortraitMode = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.setStudioMode = function (studioMode, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_setStudioMode = function (studioMode, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.getStudioMode = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_getStudioMode = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.setISMMethod = function (ismMethod, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_setISMMethod = function (ismMethod, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.getISMMethod = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_getISMMethod = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.setTileInfo = function (tileInfo, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_setTileInfo = function (tileInfo, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.getTileInfo = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_getTileInfo = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.registerSystemMonitorInfo = function (systemMonitoringInfo, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_registerSystemMonitorInfo = function (systemMonitoringInfo, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.unregisterSystemMonitorInfo = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_unregisterSystemMonitorInfo = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.getSystemMonitorInfo = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_getSystemMonitorInfo = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.getUsageData = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_getUsageData = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.setUsagePermissions = function (usagePermissions, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_setUsagePermissions = function (usagePermissions, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.getUsagePermissions = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_getUsagePermissions = function (error, context, callback) {
        };
        return IImpl_SDK_TvSignageSetup_Tizen;
    }());
    nm_transversalservices.IImpl_SDK_TvSignageSetup_Tizen = IImpl_SDK_TvSignageSetup_Tizen;
})(nm_transversalservices = exports.nm_transversalservices || (exports.nm_transversalservices = {}));
//# sourceMappingURL=IImpl_SDK_TvSignageSetup_Tizen.js.map