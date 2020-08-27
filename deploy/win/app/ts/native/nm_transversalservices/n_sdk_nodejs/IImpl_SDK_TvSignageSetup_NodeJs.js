"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nm_transversalservices;
(function (nm_transversalservices) {
    var IImpl_SDK_TvSignageSetup_NodeJs = (function () {
        function IImpl_SDK_TvSignageSetup_NodeJs(owner) {
            this._owner = owner;
        }
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.captureScreen = function (captureScreenInfo, error, context, callback) {
            var screenshot = require('desktop-screenshot');
            screenshot("screenshot.jpg", { width: 400, height: 300, quality: 60 }, function (err, complete) {
                if (err) {
                    console.log('sdk:capture-screen error. Error capturing screen :' + JSON.stringify(err));
                    context.setError(error);
                    if (context.getError() != null)
                        context.getError().setError(8011, "'sdk:capture-screen error. Error capturing screen :' + JSON.stringify(err)");
                    if (callback != null)
                        callback(context);
                    return;
                }
                console.log('sdk:capture-screen ok.');
                context.setResult('sdk:capture-screen ok.');
                context.setObjectResult(captureScreenInfo);
                context.setBoolResult(true);
                context.setError(error);
                if (callback != null)
                    callback(context);
            });
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.promise_captureScreen = function (soundProperties, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.enableCheckScreen = function (enabledCheckScreen, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.promise_enableCheckScreen = function (enabledCheckScreen, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.setFailureMode = function (failureModeInfo, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.promise_setFailureMode = function (failureModeInfo, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.getFailureMode = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.promise_getFailureMode = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.setIntelligentAuto = function (enabledIntelligentAuto, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.promise_setIntelligentAuto = function (enabledIntelligentAuto, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.getIntelligentAuto = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.promise_getIntelligentAuto = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.getSignageInfo = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.promise_getSignageInfo = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.setPortraitMode = function (portraitMode, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.promise_setPortraitMode = function (portraitMode, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.getPortraitMode = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.promise_getPortraitMode = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.setStudioMode = function (studioMode, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.promise_setStudioMode = function (studioMode, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.getStudioMode = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.promise_getStudioMode = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.setISMMethod = function (ismMethod, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.promise_setISMMethod = function (ismMethod, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.getISMMethod = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.promise_getISMMethod = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.setTileInfo = function (tileInfo, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.promise_setTileInfo = function (tileInfo, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.getTileInfo = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.promise_getTileInfo = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.registerSystemMonitorInfo = function (systemMonitoringInfo, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.promise_registerSystemMonitorInfo = function (systemMonitoringInfo, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.unregisterSystemMonitorInfo = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.promise_unregisterSystemMonitorInfo = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.getSystemMonitorInfo = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.promise_getSystemMonitorInfo = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.getUsageData = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.promise_getUsageData = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.setUsagePermissions = function (usagePermissions, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.promise_setUsagePermissions = function (usagePermissions, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.getUsagePermissions = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.promise_getUsagePermissions = function (error, context, callback) {
        };
        return IImpl_SDK_TvSignageSetup_NodeJs;
    }());
    nm_transversalservices.IImpl_SDK_TvSignageSetup_NodeJs = IImpl_SDK_TvSignageSetup_NodeJs;
})(nm_transversalservices = exports.nm_transversalservices || (exports.nm_transversalservices = {}));
//# sourceMappingURL=IImpl_SDK_TvSignageSetup_NodeJs.js.map