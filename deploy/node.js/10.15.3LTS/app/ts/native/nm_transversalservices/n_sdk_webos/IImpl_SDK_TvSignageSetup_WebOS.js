"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./cordova/cordova.webos");
require("./cordova/signage");
var nm_transversalservices;
(function (nm_transversalservices) {
    var IImpl_SDK_TvSignageSetup_WebOS = (function () {
        function IImpl_SDK_TvSignageSetup_WebOS(owner) {
            this._owner = owner;
        }
        IImpl_SDK_TvSignageSetup_WebOS.prototype.api_writeFile_binary = function (buffer, bufLength, fileName, callback) {
            var successCb = function (cbObject) {
                console.log("Successfully writen " + cbObject.written + " bytes");
                document.getElementById("testreadfile").innerHTML += "<h3>FILE SAVED: " + fileName + " Size: " + bufLength + "</h3>";
            };
            var failureCb = function (cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log(" Error Code [" + errorCode + "]: " + errorText);
                document.getElementById("testreadfile").innerHTML += "<h3>file NOT saved: " + fileName + " Error: " + errorText + "</h3>";
            };
            var options = {
                data: buffer,
                path: fileName,
                mode: "truncate",
                position: 0,
                flag: 'w',
                offset: 0,
                length: bufLength,
                encoding: 'base64'
            };
            var storage = new Storage();
            var max_size = 10240;
            var sizeToWrite = bufLength;
            var pos = 0;
            var length = 0;
            while (sizeToWrite > 0) {
                if (sizeToWrite > max_size)
                    length = max_size;
                else
                    length = sizeToWrite;
                var buffToWrite = buffer.substring(pos, pos + length);
                options.length = length;
                options.position = pos;
                options.mode = "truncate";
                if (pos > 0)
                    options.mode = "append";
                options.data = buffToWrite;
                storage.writeFile(successCb, failureCb, options);
                pos += length;
                sizeToWrite -= length;
            }
        };
        IImpl_SDK_TvSignageSetup_WebOS.prototype.captureScreen = function (captureScreenInfo, error, context, callback) {
            var successCb = function (cbObject) {
                context.setBoolResult(true);
                context.setError(error);
                console.log("Captured screen image stored at : " + cbObject.imagePath + " " + JSON.stringify(cbObject));
                var htmlImg = document.getElementById("testimg");
                htmlImg.src = "data:image/jpeg;base64," + cbObject.data;
                var pathSave = captureScreenInfo.getImageSystemPath();
                this.api_writeFile_binary(cbObject.data, cbObject.size, pathSave, null);
                if (callback != null)
                    callback(context);
            };
            var failureCb = function (cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log(" Error Code [" + errorCode + "]: " + errorText);
                if (error != null)
                    error.setError(errorCode, errorText);
                context.setError(error);
                if (callback != null)
                    callback(context);
            };
            var signage = new Signage();
            var options = {
                save: false
            };
            signage.captureScreen(successCb, failureCb, options);
        };
        IImpl_SDK_TvSignageSetup_WebOS.prototype.captureScreen_old = function (captureScreenInfo, error, context, callback) {
            var successCb = function (cbObject) {
                context.setBoolResult(true);
                context.setError(error);
                console.log("Captured screen image stored at : " + cbObject.imagePath + " " + JSON.stringify(cbObject));
                var htmlImg = document.getElementById("testimg");
                htmlImg.src = "data:image/jpeg;base64," + cbObject.data;
                if (callback != null)
                    callback(context);
            };
            var failureCb = function (cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log(" Error Code [" + errorCode + "]: " + errorText);
                if (error != null)
                    error.setError(errorCode, errorText);
                context.setError(error);
                if (callback != null)
                    callback(context);
            };
            var signage = new Signage();
            var options = {
                save: false
            };
            signage.captureScreen(successCb, failureCb, options);
        };
        IImpl_SDK_TvSignageSetup_WebOS.prototype.promise_captureScreen = function (soundProperties, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_WebOS.prototype.enableCheckScreen = function (enabledCheckScreen, error, context, callback) {
            var successCb = function () {
                console.log("enableCheckScreen successful");
                context.setBoolResult(true);
                context.setError(error);
                if (callback != null)
                    callback(context);
            };
            var failureCb = function (cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log(" Error Code [" + errorCode + "]: " + errorText);
                if (error != null)
                    error.setError(errorCode, errorText);
                context.setError(error);
                if (callback != null)
                    callback(context);
            };
            var options = {
                checkScreen: true
            };
            var signage = new Signage();
            signage.enableCheckScreen(successCb, failureCb, options);
        };
        IImpl_SDK_TvSignageSetup_WebOS.prototype.promise_enableCheckScreen = function (enabledCheckScreen, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_WebOS.prototype.setFailureMode = function (failureModeInfo, error, context, callback) {
            var successCb = function () {
                console.log("Set Failover mode successful");
                context.setBoolResult(true);
                context.setError(error);
                if (callback != null)
                    callback(context);
            };
            var failureCb = function (cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log(" Error Code [" + errorCode + "]: " + errorText);
                if (error != null)
                    error.setError(errorCode, errorText);
                context.setError(error);
                if (callback != null)
                    callback(context);
            };
            var failureMode = Signage.FailoverMode.MANUAL;
            if (failureModeInfo.getMode() == "manual")
                failureMode = Signage.FailoverMode.MANUAL;
            else if (failureModeInfo.getMode() == "auto")
                failureMode = Signage.FailoverMode.AUTO;
            var priorities = new Array();
            var inputSrcList = failureModeInfo.getInputPriorities();
            for (var i = 0; i < inputSrcList.length; ++i) {
                if (inputSrcList[i] == "hdmi:1")
                    priorities.push("ext://hdmi:1");
                else if (inputSrcList[i] == "hdmi:2")
                    priorities.push("ext://hdmi:2");
                else if (inputSrcList[i] == "hdmi:3")
                    priorities.push("ext://hdmi:3");
                else if (inputSrcList[i] == "hdmi:4")
                    priorities.push("ext://hdmi:4");
                else if (inputSrcList[i] == "dp:1")
                    priorities.push("ext://dp:1");
                else if (inputSrcList[i] == "dp:2")
                    priorities.push("ext://dp:2");
                else if (inputSrcList[i] == "dp:3")
                    priorities.push("ext://dp:3");
                else if (inputSrcList[i] == "dp:4")
                    priorities.push("ext://dp:4");
                else if (inputSrcList[i] == "internal_memory")
                    priorities.push("ext://internal_memory");
                else
                    priorities.push(inputSrcList[i]);
                console.log('Priority' + i + " : " + inputSrcList[i]);
            }
            var options = {
                failoverMode: {
                    mode: failureMode,
                    priority: priorities
                }
            };
            var signage = new Signage();
            signage.setFailoverMode(successCb, failureCb, options);
        };
        IImpl_SDK_TvSignageSetup_WebOS.prototype.promise_setFailureMode = function (failureModeInfo, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_WebOS.prototype.getFailureMode = function (error, context, callback) {
            var successCb = function (cbObject) {
                var failureModeInfo = context.getObjectResult();
                var mode = cbObject.mode;
                if (mode == Signage.FailoverMode.MANUAL)
                    failureModeInfo.setMode("manual");
                else if (mode == Signage.FailoverMode.AUTO)
                    failureModeInfo.setMode("auto");
                var priority = cbObject.priority;
                console.log('Failover Mode : ' + mode);
                for (var i = 0; i < priority.length; ++i) {
                    console.log('Priority' + i + " : " + priority[i]);
                    if (priority[i] == "ext://hdmi:1")
                        failureModeInfo.getInputPriorities().push("hdmi:1");
                    else if (priority[i] == "ext://hdmi:2")
                        failureModeInfo.getInputPriorities().push("hdmi:2");
                    else if (priority[i] == "ext://hdmi:3")
                        failureModeInfo.getInputPriorities().push("hdmi:3");
                    else if (priority[i] == "ext://hdmi:4")
                        failureModeInfo.getInputPriorities().push("hdmi:4");
                    else if (priority[i] == "ext://dp:1")
                        failureModeInfo.getInputPriorities().push("dp:1");
                    else if (priority[i] == "ext://dp:2")
                        failureModeInfo.getInputPriorities().push("dp:2");
                    else if (priority[i] == "ext://dp:3")
                        failureModeInfo.getInputPriorities().push("dp:3");
                    else if (priority[i] == "ext://dp:4")
                        failureModeInfo.getInputPriorities().push("dp:4");
                    else if (priority[i] == "ext://internal_memory")
                        failureModeInfo.getInputPriorities().push("internal_memory");
                    else
                        failureModeInfo.getInputPriorities().push(priority[i]);
                }
                if (callback != null)
                    callback(context);
            };
            var failureCb = function (cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log(" Error Code [" + errorCode + "]: " + errorText);
                if (error != null)
                    error.setError(errorCode, errorText);
                context.setError(error);
                if (callback != null)
                    callback(context);
            };
            var signage = new Signage();
            signage.getFailoverMode(successCb, failureCb);
        };
        IImpl_SDK_TvSignageSetup_WebOS.prototype.promise_getFailureMode = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_WebOS.prototype.setIntelligentAuto = function (enabledIntelligentAuto, error, context, callback) {
            var successCb = function () {
                console.log("setIntelligentAuto success");
                context.setBoolResult(true);
                context.setError(error);
                if (callback != null)
                    callback(context);
            };
            var failureCb = function (cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log(" Error Code [" + errorCode + "]: " + errorText);
                if (error != null)
                    error.setError(errorCode, errorText);
                context.setError(error);
                if (callback != null)
                    callback(context);
            };
            var options = {
                enabled: enabledIntelligentAuto
            };
            var signage = new Signage();
            signage.setIntelligentAuto(successCb, failureCb, options);
        };
        IImpl_SDK_TvSignageSetup_WebOS.prototype.promise_setIntelligentAuto = function (enabledIntelligentAuto, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_WebOS.prototype.getIntelligentAuto = function (error, context, callback) {
            function successCb(cbObject) {
                console.log("getIntelligentAuto success");
                console.log("cbObject : " + JSON.stringify(cbObject));
                context.setBoolResult(cbObject.enabled);
                context.setError(error);
                if (callback != null)
                    callback(context);
            }
            function failureCb(cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log(" Error Code [" + errorCode + "]: " + errorText);
                if (error != null)
                    error.setError(errorCode, errorText);
                context.setError(error);
                if (callback != null)
                    callback(context);
            }
            var signage = new Signage();
            signage.getIntelligentAuto(successCb, failureCb);
        };
        IImpl_SDK_TvSignageSetup_WebOS.prototype.promise_getIntelligentAuto = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_WebOS.prototype.getStandradPotraitMode = function (webosPortraitMode) {
            return webosPortraitMode;
        };
        IImpl_SDK_TvSignageSetup_WebOS.prototype.getStandardISMMethod = function (webosISMMethod) {
            return webosISMMethod;
        };
        IImpl_SDK_TvSignageSetup_WebOS.prototype.getStandardDigitalAudioInputMode = function (webosDigitalAudioInputMode) {
            return webosDigitalAudioInputMode;
        };
        IImpl_SDK_TvSignageSetup_WebOS.prototype.getStandardCheckScreen = function (webosCheckScreen) {
            return webosCheckScreen;
        };
        IImpl_SDK_TvSignageSetup_WebOS.prototype.getSignageInfo = function (error, context, callback) {
            var successCb = function (cbObject) {
                var signageInfo = context.getObjectResult();
                var portraitMode = cbObject.portraitMode;
                signageInfo.setPortraitMode(this.getStandardPortraitMode(portraitMode));
                var ismMethod = cbObject.ismMethod;
                signageInfo.setISMMethod(this.getStandardISMMethod(ismMethod));
                var digitalAudioInputMode = cbObject.digitalAudioInputMode;
                signageInfo.setDigitalAudioInputMode(this.getStandardDigitalAudioInoutMode(digitalAudioInputMode));
                signageInfo.setDigitalAudioInputMode(this.getStandardDigitalAudioInoutMode(digitalAudioInputMode));
                console.log("portraitMode: " + portraitMode);
                console.log("ismMethod: " + ismMethod);
                console.log("digitalAudioInputMode: " + digitalAudioInputMode);
                console.log("checkScreen: " + cbObject.checkScreen);
                console.log("getIntelligentAuto success");
                console.log("cbObject : " + JSON.stringify(cbObject));
                context.setError(error);
                if (callback != null)
                    callback(context);
            };
            var failureCb = function (cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log(" Error Code [" + errorCode + "]: " + errorText);
                if (error != null)
                    error.setError(errorCode, errorText);
                context.setError(error);
                if (callback != null)
                    callback(context);
            };
            var signage = new Signage();
            signage.getSignageInfo(successCb, failureCb);
        };
        IImpl_SDK_TvSignageSetup_WebOS.prototype.promise_getSignageInfo = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_WebOS.prototype.setPortraitMode = function (portraitMode, error, context, callback) {
            var successCb = function () {
                console.log("successfully Set");
                context.setBoolResult(true);
                context.setError(error);
                if (callback != null)
                    callback(context);
            };
            var failureCb = function (cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log(" Error Code [" + errorCode + "]: " + errorText);
                if (error != null)
                    error.setError(errorCode, errorText);
                context.setError(error);
                if (callback != null)
                    callback(context);
            };
            var options = {
                portraitMode: Signage.OsdPortraitMode.OFF
            };
            if (portraitMode == "ON")
                options.portraitMode = Signage.OsdPortraitMode.ON;
            var signage = new Signage();
            signage.setPortraitMode(successCb, failureCb, options);
        };
        IImpl_SDK_TvSignageSetup_WebOS.prototype.promise_setPortraitMode = function (portraitMode, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_WebOS.prototype.getPortraitMode = function (error, context, callback) {
            var successCb = function (cbObject) {
                console.log("successfully Set");
                var portraitMode = "OFF";
                context.setBoolResult(false);
                if (cbObject.portraitMode == Signage.OsdPortraitMode.ON) {
                    portraitMode = "ON";
                    context.setBoolResult(true);
                }
                context.setResult(portraitMode);
                context.setError(error);
                if (callback != null)
                    callback(context);
            };
            var failureCb = function (cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log(" Error Code [" + errorCode + "]: " + errorText);
                if (error != null)
                    error.setError(errorCode, errorText);
                context.setError(error);
                if (callback != null)
                    callback(context);
            };
            var signage = new Signage();
            signage.getPortraitMode(successCb, failureCb);
        };
        IImpl_SDK_TvSignageSetup_WebOS.prototype.promise_getPortraitMode = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_WebOS.prototype.setStudioMode = function (studioMode, error, context, callback) {
            var successCb = function () {
                context.setBoolResult(true);
                context.setError(error);
                if (callback != null)
                    callback(context);
            };
            var failureCb = function (cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log(" Error Code [" + errorCode + "]: " + errorText);
                if (error != null)
                    error.setError(errorCode, errorText);
                context.setError(error);
                if (callback != null)
                    callback(context);
            };
            var options = {
                enabled: true
            };
            if (studioMode == "OFF")
                options.enabled = false;
            var signage = new Signage();
            signage.setStudioMode(successCb, failureCb, options);
        };
        IImpl_SDK_TvSignageSetup_WebOS.prototype.promise_setStudioMode = function (studioMode, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_WebOS.prototype.getStudioMode = function (error, context, callback) {
            function successCb(cbObject) {
                console.log("cbObject : " + JSON.stringify(cbObject));
                var studioMode = "OFF";
                context.setBoolResult(false);
                if (cbObject.enabled == true) {
                    studioMode = "ON";
                    context.setBoolResult(true);
                }
                context.setResult(studioMode);
                context.setError(error);
                if (callback != null)
                    callback(context);
            }
            function failureCb(cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log("Error Code [" + errorCode + "]: " + errorText);
                if (error != null)
                    error.setError(errorCode, errorText);
                context.setError(error);
                if (callback != null)
                    callback(context);
            }
            var signage = new Signage();
            signage.getStudioMode(successCb, failureCb);
        };
        IImpl_SDK_TvSignageSetup_WebOS.prototype.promise_getStudioMode = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_WebOS.prototype.setISMMethod = function (ismMethod, error, context, callback) {
            var successCb = function () {
                console.log("successfully Set");
                context.setBoolResult(true);
                context.setError(error);
                if (callback != null)
                    callback(context);
            };
            var failureCb = function (cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log(" Error Code [" + errorCode + "]: " + errorText);
                if (error != null)
                    error.setError(errorCode, errorText);
                context.setError(error);
                if (callback != null)
                    callback(context);
            };
            var options = {
                ismMethod: Signage.IsmMethod.COLORWASH
            };
            if (ismMethod == "COLORWASH")
                options.ismMethod = Signage.IsmMethod.COLORWASH;
            var signage = new Signage();
            signage.setIsmMethod(successCb, failureCb, options);
        };
        IImpl_SDK_TvSignageSetup_WebOS.prototype.promise_setISMMethod = function (ismMethod, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_WebOS.prototype.getISMMethod = function (error, context, callback) {
            function successCb(cbObject) {
                console.log("cbObject : " + JSON.stringify(cbObject));
                var ismMethod = "";
                if (cbObject.ismMethod == Signage.IsmMethod.COLORWASH)
                    ismMethod = "COLORWASH";
                context.setResult(ismMethod);
                context.setBoolResult(true);
                context.setError(error);
                if (callback != null)
                    callback(context);
            }
            function failureCb(cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log("Error Code [" + errorCode + "]: " + errorText);
                if (error != null)
                    error.setError(errorCode, errorText);
                context.setError(error);
                if (callback != null)
                    callback(context);
            }
            var signage = new Signage();
            signage.getIsmMethod(successCb, failureCb);
        };
        IImpl_SDK_TvSignageSetup_WebOS.prototype.promise_getISMMethod = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_WebOS.prototype.setTileInfo = function (tileInfo, error, context, callback) {
            var successCb = function () {
                console.log("successfully Set");
                context.setBoolResult(true);
                context.setError(error);
                if (callback != null)
                    callback(context);
            };
            var failureCb = function (cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log(" Error Code [" + errorCode + "]: " + errorText);
                if (error != null)
                    error.setError(errorCode, errorText);
                context.setError(error);
                if (callback != null)
                    callback(context);
            };
            var options = {
                tileInfo: {
                    enabled: true,
                    row: 2,
                    column: 2,
                    tileId: 2,
                    naturalMode: true
                }
            };
            options.tileInfo.enabled = tileInfo.isEnabled();
            options.tileInfo.row = tileInfo.getRow();
            options.tileInfo.column = tileInfo.getColumn();
            options.tileInfo.tileId = tileInfo.getTileId();
            options.tileInfo.naturalMode = tileInfo.getNaturalMode();
            var signage = new Signage();
            signage.setTileInfo(successCb, failureCb, options);
        };
        IImpl_SDK_TvSignageSetup_WebOS.prototype.promise_setTileInfo = function (tileInfo, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_WebOS.prototype.getTileInfo = function (error, context, callback) {
            var successCb = function (cbObject) {
                var tileInfo = context.getObjectResult();
                var enabled = cbObject.enabled;
                tileInfo.setEnabled(enabled);
                var row = cbObject.row;
                tileInfo.setRow(row);
                var column = cbObject.column;
                tileInfo.setColumn(column);
                var tileId = cbObject.tileId;
                tileInfo.setTileId(tileId);
                var naturalMode = cbObject.naturalMode;
                tileInfo.setNaturalMode(naturalMode);
                console.log("enable: " + enabled);
                console.log("row: " + row);
                console.log("column: " + column);
                console.log("tileId: " + tileId);
                console.log("naturalMode: " + naturalMode);
                context.setBoolResult(true);
                context.setError(error);
                if (callback != null)
                    callback(context);
            };
            var failureCb = function (cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log(" Error Code [" + errorCode + "]: " + errorText);
                if (error != null)
                    error.setError(errorCode, errorText);
                context.setError(error);
                if (callback != null)
                    callback(context);
            };
            var signage = new Signage();
            signage.getTileInfo(successCb, failureCb);
        };
        IImpl_SDK_TvSignageSetup_WebOS.prototype.promise_getTileInfo = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_WebOS.prototype.registerSystemMonitorInfo = function (systemMonitoringInfo, error, context, callback) {
            var successCb = function () {
                console.log("successfully Set");
                context.setBoolResult(true);
                context.setError(error);
                if (callback != null)
                    callback(context);
            };
            var failureCb = function (cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log(" Error Code [" + errorCode + "]: " + errorText);
                if (error != null)
                    error.setError(errorCode, errorText);
                context.setError(error);
                if (callback != null)
                    callback(context);
            };
            var eventHandlercb = function (event) {
                console.log("Received Event from : " + event.source);
                console.log("Event Type is : " + event.type);
                console.log("Additional Info : " + event.data);
            };
            var options = {
                monitorConfiguration: {
                    fan: true,
                    signal: true,
                    lamp: true,
                    screen: true,
                    temperature: true
                },
                eventHandler: eventHandlercb
            };
            options.monitorConfiguration.fan = systemMonitoringInfo.isFanMonitored();
            options.monitorConfiguration.signal = systemMonitoringInfo.isSignalMonitored();
            options.monitorConfiguration.lamp = systemMonitoringInfo.isLampMonitored();
            options.monitorConfiguration.screen = systemMonitoringInfo.isScreenMonitored();
            options.monitorConfiguration.temperature = systemMonitoringInfo.isTemperatureMonitored();
            var signage = new Signage();
            signage.registerSystemMonitor(successCb, failureCb, options);
        };
        IImpl_SDK_TvSignageSetup_WebOS.prototype.promise_registerSystemMonitorInfo = function (systemMonitoringInfo, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_WebOS.prototype.unregisterSystemMonitorInfo = function (error, context, callback) {
            var successCb = function () {
                console.log("successfully unregister");
                context.setBoolResult(true);
                context.setError(error);
                if (callback != null)
                    callback(context);
            };
            var failureCb = function (cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log(" Error Code [" + errorCode + "]: " + errorText);
                if (error != null)
                    error.setError(errorCode, errorText);
                context.setError(error);
                if (callback != null)
                    callback(context);
            };
            var signage = new Signage();
            signage.unregisterSystemMonitor(successCb, failureCb);
        };
        IImpl_SDK_TvSignageSetup_WebOS.prototype.promise_unregisterSystemMonitorInfo = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_WebOS.prototype.getSystemMonitorInfo = function (error, context, callback) {
            var successCb = function (cbObject) {
                var systemMonitoringInfo = context.getObjectResult();
                var fan = cbObject.fan;
                systemMonitoringInfo.setFanMonitor(fan);
                var signal = cbObject.signal;
                systemMonitoringInfo.setSignalMonitor(signal);
                var lamp = cbObject.lamp;
                systemMonitoringInfo.setLampMonitor(lamp);
                var screen = cbObject.screen;
                systemMonitoringInfo.setScreenMonitor(screen);
                var temperature = cbObject.temperature;
                systemMonitoringInfo.setTemperatureMonitor(temperature);
                console.log("Monitor Fan: " + fan);
                console.log("Monitor signal: " + signal);
                console.log("Monitor lamp: " + lamp);
                console.log("Monitor screen: " + screen);
                console.log("Monitor temperature: " + temperature);
                context.setBoolResult(true);
                context.setError(error);
                if (callback != null)
                    callback(context);
            };
            var failureCb = function (cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log(" Error Code [" + errorCode + "]: " + errorText);
                if (error != null)
                    error.setError(errorCode, errorText);
                context.setError(error);
                if (callback != null)
                    callback(context);
            };
            var signage = new Signage();
            signage.getSystemMonitoringInfo(successCb, failureCb);
        };
        IImpl_SDK_TvSignageSetup_WebOS.prototype.promise_getSystemMonitorInfo = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_WebOS.prototype.getUsageData = function (error, context, callback) {
            var successCb = function (cbObject) {
                var uptime = cbObject.uptime;
                var totalUsed = cbObject.totalUsed;
                console.log("Uptime: " + uptime);
                console.log("Total Used: " + totalUsed);
                context.setBoolResult(true);
                context.setError(error);
                if (callback != null)
                    callback(context);
            };
            var failureCb = function (cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log(" Error Code [" + errorCode + "]: " + errorText);
                if (error != null)
                    error.setError(errorCode, errorText);
                context.setError(error);
                if (callback != null)
                    callback(context);
            };
            var signage = new Signage();
            signage.getUsageData(successCb, failureCb);
        };
        IImpl_SDK_TvSignageSetup_WebOS.prototype.promise_getUsageData = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_WebOS.prototype.setUsagePermissions = function (usagePermissions, error, context, callback) {
            var successCb = function () {
                console.log("successfully Set");
                context.setBoolResult(true);
                context.setError(error);
                if (callback != null)
                    callback(context);
            };
            var failureCb = function (cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log(" Error Code [" + errorCode + "]: " + errorText);
                if (error != null)
                    error.setError(errorCode, errorText);
                context.setError(error);
                if (callback != null)
                    callback(context);
            };
            var options = {
                policy: {
                    remoteKeyOperationMode: Signage.KeyOperationMode.POWER_ONLY,
                    localKeyOperationMode: Signage.KeyOperationMode.POWER_ONLY,
                }
            };
            if (usagePermissions.getRemoteKeyOperationMode() == "POWER_ONLY")
                options.policy.remoteKeyOperationMode = Signage.KeyOperationMode.POWER_ONLY;
            if (usagePermissions.getLocalKeyOperationMode() == "POWER_ONLY")
                options.policy.localKeyOperationMode = Signage.KeyOperationMode.POWER_ONLY;
            var signage = new Signage();
            signage.setUsagePermission(successCb, failureCb, options);
        };
        IImpl_SDK_TvSignageSetup_WebOS.prototype.promise_setUsagePermissions = function (usagePermissions, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_WebOS.prototype.getUsagePermissions = function (error, context, callback) {
            var successCb = function (cbObject) {
                var usagePermissions = context.getObjectResult();
                var remoteKeyOperationMode = cbObject.remoteKeyOperationMode;
                if (remoteKeyOperationMode == Signage.KeyOperationMode.POWER_ONLY)
                    usagePermissions.setRemoteKeyOperationMode("POWER_ONLY");
                var localKeyOperationMod = cbObject.localKeyOperationMod;
                if (localKeyOperationMod == Signage.KeyOperationMode.POWER_ONLY)
                    usagePermissions.setLocalKeyOperationMode("POWER_ONLY");
                console.log("remoteKeyOperationMode: " + remoteKeyOperationMode);
                console.log("localKeyOperationMode: " + localKeyOperationMod);
                context.setBoolResult(true);
                context.setError(error);
                if (callback != null)
                    callback(context);
            };
            var failureCb = function (cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log(" Error Code [" + errorCode + "]: " + errorText);
                if (error != null)
                    error.setError(errorCode, errorText);
                context.setError(error);
                if (callback != null)
                    callback(context);
            };
            var signage = new Signage();
            signage.getUsagePermission(successCb, failureCb);
        };
        IImpl_SDK_TvSignageSetup_WebOS.prototype.promise_getUsagePermissions = function (error, context, callback) {
        };
        return IImpl_SDK_TvSignageSetup_WebOS;
    }());
    nm_transversalservices.IImpl_SDK_TvSignageSetup_WebOS = IImpl_SDK_TvSignageSetup_WebOS;
})(nm_transversalservices = exports.nm_transversalservices || (exports.nm_transversalservices = {}));
//# sourceMappingURL=IImpl_SDK_TvSignageSetup_WebOS.js.map