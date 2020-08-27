"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var rmGeneral = require("../../../../../app/ts/reusable/rm_general/r_service/R_Service");
var rmIImplPlaylistController = require("../../../../../app/ts/reusable/rm_coreservices/r_playlistcontroller/IImpl_PlaylistController_R");
var rmIImplPlaylistControllerConfig = require("../../../../../app/ts/reusable/rm_coreservices/r_playlistcontroller/IImpl_PlaylistController_Config");
var rmIImplPlaylistControllerRun = require("../../../../../app/ts/reusable/rm_coreservices/r_playlistcontroller/IImpl_PlaylistController_Run");
var rmIImplPlaylistControllerCommands = require("../../../../../app/ts/reusable/rm_coreservices/r_playlistcontroller/IImpl_PlaylistController_Commands");
var rmIImplPlaylistControllerPlaylistMoodv5 = require("../../../../../app/ts/reusable/rm_coreservices/r_playlistcontroller/IImpl_PlaylistController_Playlist_Mood_v5");
var rmIImplPlaylistControllerPlaylistCustomv1 = require("../../../../../app/ts/reusable/rm_coreservices/r_playlistcontroller/IImpl_PlaylistController_Playlist_Custom_v1");
var amPlaylistItemEventType = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItemEventType");
var rm_coreservices;
(function (rm_coreservices) {
    var R_PlaylistController = (function (_super) {
        __extends(R_PlaylistController, _super);
        function R_PlaylistController(aFactoryDescription, aServiceContainer, aLogService, error) {
            var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
            _this._aPlaylist = null;
            _this._iPlaylistController = new rmIImplPlaylistController.rm_coreservices.IImpl_PlaylistController_R(_this);
            _this._iPlaylistControllerConfig = new rmIImplPlaylistControllerConfig.rm_coreservices.IImpl_PlaylistController_Config(_this);
            _this._iPlaylistControllerRun = new rmIImplPlaylistControllerRun.rm_coreservices.IImpl_PlaylistController_Run(_this);
            _this._iPlaylistControllerCommands = new rmIImplPlaylistControllerCommands.rm_coreservices.IImpl_PlaylistController_Commands(_this);
            _this._iPlaylistControllerPlaylistMoodv5 = new rmIImplPlaylistControllerPlaylistMoodv5.rm_coreservices.IImpl_PlaylistController_Playlist_Mood_v5(_this);
            _this._iPlaylistControllerPlaylistCustomv1 = new rmIImplPlaylistControllerPlaylistCustomv1.rm_coreservices.IImpl_PlaylistController_Playlist_Custom_v1(_this);
            _this._playlistControllerConfig = null;
            _this._aLogService = aLogService;
            _this._nextZoneId = 0;
            _this._aPrepareParamPool = null;
            _this._aRunParamPool = null;
            _this._aStopParamPool = null;
            _this._aStatusParamPool = null;
            _this._evtQueue = null;
            _this._evtMainQueue = null;
            _this._aScreenProperties = null;
            _this._aPlaybackGlobalConfig = null;
            return _this;
        }
        R_PlaylistController.prototype.injectDependencies = function (aServiceContainer, aServiceLocator, aLogService, error) {
            this._aServiceLocator = aServiceLocator;
            this._nextZoneId = 0;
            this._aPrepareParamPool = this._aServiceLocator._iEntityCreation.createDefaultControlPrepareParamsPool(error);
            this._aPrepareParamPool.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
            this._aRunParamPool = this._aServiceLocator._iEntityCreation.createDefaultControlRunParamsPool(error);
            this._aRunParamPool.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
            this._aStopParamPool = this._aServiceLocator._iEntityCreation.createDefaultControlStopParamsPool(error);
            this._aStopParamPool.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
            this._aStatusParamPool = this._aServiceLocator._iEntityCreation.createDefaultControlStatusParamsPool(error);
            this._aStatusParamPool.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
            this._evtQueue = this._aServiceLocator._iEntityCreation.createDefaultQueue(error);
            this._evtMainQueue = this._aServiceLocator._iEntityCreation.createDefaultQueue(error);
            this._aScreenProperties = this._aServiceLocator._iEntityCreation.createDefaultScreenProperties(error);
            return 0;
        };
        R_PlaylistController.prototype.setPlaybackGlobalConfig = function (aPlaybackGlobalConfig) {
            this._aPlaybackGlobalConfig = aPlaybackGlobalConfig;
        };
        R_PlaylistController.prototype.getPlaybackGlobalConfig = function () {
            return this._aPlaybackGlobalConfig;
        };
        R_PlaylistController.prototype.setScreenProperties = function (aScreenProperties) {
            this._aScreenProperties = aScreenProperties;
        };
        R_PlaylistController.prototype.getScreenProperties = function () {
            return this._aScreenProperties;
        };
        R_PlaylistController.prototype.setTargetService = function (targetService) {
            this._aRenderingController = targetService;
        };
        R_PlaylistController.prototype.setRenderingControllerService = function (targetService) {
            this._aRenderingController = targetService;
        };
        R_PlaylistController.prototype.init = function (aConfig, error, context, callback) {
            this._playlistControllerConfig = aConfig;
            this._aPrepareParamPool.initPool(this._playlistControllerConfig.getInitialPoolNb_OfPrepareParams(), error);
            this._aRunParamPool.initPool(this._playlistControllerConfig.getInitialPoolNb_OfRunParams(), error);
            this._aStopParamPool.initPool(this._playlistControllerConfig.getInitialPoolNb_OfStopParams(), error);
            this._aStatusParamPool.initPool(this._playlistControllerConfig.getInitialPoolNb_OfStatusParams(), error);
            if (callback != null) {
                callback(context);
                return;
            }
            return;
        };
        R_PlaylistController.prototype.cmd_getNewZoneId = function () {
            return ++this._nextZoneId;
        };
        R_PlaylistController.prototype.cmd_getNewPreparedParam = function (error, context, callback) {
            return this._aPrepareParamPool.getFreePrepareParams();
        };
        R_PlaylistController.prototype.cmd_freeNewPreparedParam = function (prepareParams, error, context, callback) {
            this._aPrepareParamPool.releasePrepareParams(prepareParams);
        };
        R_PlaylistController.prototype.cmd_createZone = function (zoneId, prepareParams, error, context, callback) {
            return this._aRenderingController._iRenderingControllerControl.createZone(zoneId, prepareParams, error, context, callback);
        };
        R_PlaylistController.prototype.cmd_destroyZone = function (zoneId, stopParams, error, context, callback) {
            return this._aRenderingController._iRenderingControllerControl.destroyZone(zoneId, stopParams, error, context, callback);
        };
        R_PlaylistController.prototype.cmd_stopZone = function (zoneId, stopParams, error, context, callback) {
            return this._aRenderingController._iRenderingControllerControl.stopZone(zoneId, stopParams, error, context, callback);
        };
        R_PlaylistController.prototype.cmd_prepareNextMediaItem = function (zoneId, prepareParams, error, context, callback) {
            return this._aRenderingController._iRenderingControllerControl.prepareNextMediaItem(zoneId, prepareParams, error, context, callback);
        };
        R_PlaylistController.prototype.cmd_playNextMediaItem = function (zoneId, runParams, error, context, callback) {
            return this._aRenderingController._iRenderingControllerControl.playNextMediaItem(zoneId, runParams, error, context, callback);
        };
        R_PlaylistController.prototype.cmd_prepareAndPlayNextMediaItem = function (zoneId, prepareParams, stopParams, runParams, error, context, callback) {
            return this._aRenderingController._iRenderingControllerControl.prepareAndPlayNextMediaItem(zoneId, prepareParams, stopParams, runParams, error, context, callback);
        };
        R_PlaylistController.prototype.cmd_changeDesign = function (iOldDesign, iNewDesign, designs, aFileStorage, aUrlStorage, error, context, callback) {
            var owner = this;
            var callbackStopDesign = function callbackChangeDesign() {
                var callbackDestroyDesign = function callbackDestroyDesign() {
                    var callbackStartDesign = function callbackStartDesign() {
                        if (error.isError()) {
                            context.setError(error);
                            if (callback != null)
                                callback(context);
                            return;
                        }
                        if (callback != null)
                            callback(context);
                        return;
                    };
                    owner.cmd_startDesign(iNewDesign, designs, aFileStorage, aUrlStorage, error, context, callbackStartDesign);
                };
                owner.cmd_destroyDesign(iOldDesign, designs, aFileStorage, aUrlStorage, error, context, callbackDestroyDesign);
            };
            owner.cmd_stopDesign(iOldDesign, designs, aFileStorage, aUrlStorage, error, context, callbackStopDesign);
            return;
        };
        R_PlaylistController.prototype.cmd_stopDesign = function (iOldDesign, designs, aFileStorage, aUrlStorage, error, context, callback) {
            if (iOldDesign == -1) {
                if (callback != null)
                    callback(context);
                return;
            }
            var nbDesignZones = designs[iOldDesign].zones.length;
            var crtZoneIdx = 0;
            var owner = this;
            var stopZone = function stopZone() {
                if (crtZoneIdx + 1 > nbDesignZones) {
                    context.setResult("Successfully start all zones");
                    console.log("Successfully start all zones");
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                    return;
                }
                var stopParams = null;
                return owner.cmd_stopZone(1 + crtZoneIdx++, stopParams, error, context, stopZone);
            };
            return stopZone();
        };
        R_PlaylistController.prototype.cmd_destroyDesign = function (iOldDesign, designs, aFileStorage, aUrlStorage, error, context, callback) {
            if (iOldDesign == -1) {
                if (callback != null)
                    callback(context);
                return;
            }
            var nbDesignZones = designs[iOldDesign].zones.length;
            var crtZoneIdx = 0;
            var owner = this;
            var destroyZone = function destroyZone() {
                if (crtZoneIdx + 1 > nbDesignZones) {
                    context.setResult("Successfully start all zones");
                    console.log("Successfully start all zones");
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                    return;
                }
                var stopParams = null;
                return owner.cmd_destroyZone(1 + crtZoneIdx++, stopParams, error, context, destroyZone);
            };
            return destroyZone();
        };
        R_PlaylistController.prototype.cmd_startDesign = function (iNewDesign, designs, aFileStorage, aUrlStorage, error, context, callback) {
            var nbDesignZones = designs[iNewDesign].zones.length;
            var crtZoneIdx = 0;
            var owner = this;
            var startZone = function callbackStartZone() {
                if (crtZoneIdx + 1 > nbDesignZones) {
                    context.setResult("Successfully start all zones");
                    console.log("Successfully start all zones");
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                    return;
                }
                return owner.prepareAndPlayMediaFile(iNewDesign, crtZoneIdx++, 0, designs, aFileStorage, aUrlStorage, error, context, startZone);
            };
            return startZone();
        };
        R_PlaylistController.prototype.prepareAndPlayMediaFile = function (iDesign, iZone, iMediaInZone, designs, aFileStorage, aUrlStorage, error, context, callback) {
            var owner = this;
            var targetZoneId = iZone + 1;
            var prepareParams = owner._iPlaylistControllerCommands.cmd_getNewPreparedParam(error, null, null);
            prepareParams.getRenderParams().getParamIdentification().setMediaType(designs[iDesign].zones[iZone].mediaitems[iMediaInZone].mediaType);
            var mediaStorage = designs[iDesign].zones[iZone].mediaitems[iMediaInZone].mediaStorage;
            if (mediaStorage == "defaultStorage")
                mediaStorage = aUrlStorage;
            prepareParams.getRenderParams().getParamFileInfo().setUrlStorage(mediaStorage);
            prepareParams.getRenderParams().getParamFileInfo().setUrlPath(designs[iDesign].zones[iZone].mediaitems[iMediaInZone].mediaPath);
            prepareParams.getRenderParams().getParamFileInfo().setUrlName(designs[iDesign].zones[iZone].mediaitems[iMediaInZone].mediaFile);
            var left;
            var top;
            var width;
            var height;
            var zOrder;
            try {
                left = parseInt(designs[iDesign].zones[iZone].zoneLeft);
                top = parseInt(designs[iDesign].zones[iZone].zoneTop);
                width = parseInt(designs[iDesign].zones[iZone].zoneWidth);
                height = parseInt(designs[iDesign].zones[iZone].zoneHeight);
                zOrder = parseInt(designs[iDesign].zones[iZone].zoneZOrder);
            }
            catch (e) { }
            prepareParams.getRenderParams().getParamContainerPosSize().setAllPosAndSizes(left, top, left + width, top + height, 0, 0, width, height);
            prepareParams.getRenderParams().getParamContainerPosSize().setContainerZOrder(zOrder);
            prepareParams.getRenderParams().getParamImage().setDisplayTypeAsString(designs[iDesign].zones[iZone].mediaitems[iMediaInZone].imageDisplayType);
            prepareParams.getRenderParams().getParamFillRect().setR(255);
            prepareParams.getRenderParams().getParamFillRect().setG(0);
            prepareParams.getRenderParams().getParamFillRect().setB(0);
            prepareParams.getRenderParams().getParamFillRect().setAlpha(1.0);
            var callbackPrepare = function callbackPrepare() {
                var callbackRun = function callbackRun() {
                    prepareParams.setIsFree(true);
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                    return;
                };
                owner._iPlaylistControllerCommands.cmd_playNextMediaItem(targetZoneId, prepareParams, error, context, callbackRun);
                return;
            };
            owner._iPlaylistControllerCommands.cmd_prepareNextMediaItem(targetZoneId, prepareParams, error, context, callbackPrepare);
        };
        R_PlaylistController.prototype.loadPlaylist = function (playlistType, aPlaylistFile, aMediaFilesFolder, bTestFileExists, error, context, callback) {
            var self = this;
            var bPlaylistFileExists = false;
            var callbackGetNbFiles2 = function callbackGetNbFiles2(ctx4) {
                var callbackFileExists2 = function callbackFileExists2(ctx5) {
                    var fileText = "";
                    if (bTestFileExists) {
                        if (!ctx5.isError())
                            bPlaylistFileExists = ctx5.getBoolResult();
                    }
                    var callbackReadTextFile2 = function callbackReadTextFile2(ctx3) {
                        try {
                            if ((!ctx4.isError()) && (ctx4.getIntResult() > 0) && bPlaylistFileExists) {
                                if (ctx3.isError()) {
                                    fileText = self._iPlaylistControllerConfig.getEmptyPlaylist(playlistType);
                                }
                                else {
                                    fileText = ctx3.getResult();
                                }
                            }
                            else {
                                fileText = self._iPlaylistControllerConfig.getEmptyPlaylist(playlistType);
                            }
                            var jsonPlaylist = JSON.parse(fileText);
                            var callbackCreatePlaylistItems = function callbackCreatePlaylistItems() {
                                if (callback != null) {
                                    context.setError(error);
                                    if (callback != null)
                                        callback(context);
                                }
                            };
                            return self.loadSpecificPlaylist(playlistType, jsonPlaylist, aPlaylistFile, null, error, context, callbackCreatePlaylistItems);
                        }
                        catch (err) {
                            if (error != null)
                                error.setError(2001, "Error Parsing Playlist : " + playlistUrl + " error: " + JSON.stringify(err));
                            if (callback != null) {
                                context.setError(error);
                                if (callback != null)
                                    callback(context);
                            }
                        }
                    };
                    var errorReadTextFile2 = self._aServiceLocator._iEntityCreation.createDefaultError();
                    var contextReadTextFile2 = self._aServiceLocator._iEntityCreation.createDefaultContext();
                    if ((!ctx4.isError()) && (ctx4.getIntResult() > 0) && bPlaylistFileExists) {
                        var playlistUrl = aPlaylistFile.getFullUrlName();
                        context.setRemoteCallback(true);
                        contextReadTextFile2.setRemoteCallback(true);
                        self._aSDKService._iSDKFileSystem.readTextFile2(aPlaylistFile.getStorage(), aPlaylistFile.getPath(), aPlaylistFile.getName(), errorReadTextFile2, contextReadTextFile2, callbackReadTextFile2);
                    }
                    else {
                        callbackReadTextFile2(contextReadTextFile2);
                    }
                };
                if (bTestFileExists) {
                    var errorFileExists2 = self._aServiceLocator._iEntityCreation.createDefaultError();
                    var contextFileExists2 = self._aServiceLocator._iEntityCreation.createDefaultContext();
                    if ((!ctx4.isError()) && (ctx4.getIntResult() > 0)) {
                        contextFileExists2.setRemoteCallback(true);
                        self._aSDKService._iSDKFileSystem.fileExists2(aPlaylistFile.getStorage(), aPlaylistFile.getPath(), aPlaylistFile.getName(), errorFileExists2, contextFileExists2, callbackFileExists2);
                    }
                    else {
                        contextFileExists2.setBoolResult(true);
                        callbackFileExists2(contextFileExists2);
                    }
                }
                else {
                    contextFileExists2.setBoolResult(true);
                    callbackFileExists2(contextFileExists2);
                }
            };
            context.setRemoteCallback(true);
            var errorGetNbFiles2 = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextGetNbFiles2 = self._aServiceLocator._iEntityCreation.createDefaultContext();
            contextGetNbFiles2.setRemoteCallback(true);
            self._aSDKService._iSDKFileSystem.getNbFiles2(aMediaFilesFolder.getStorage(), aMediaFilesFolder.getPath(), errorGetNbFiles2, contextGetNbFiles2, callbackGetNbFiles2);
        };
        R_PlaylistController.prototype.loadPlaylist2 = function (playlistType, aPlaylistFile, error, context, callback) {
            var xmlhttp = new XMLHttpRequest();
            var owner = this;
            xmlhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    try {
                        alert("this.readyState == 4 && this.status == 200");
                        var jsonPlaylist = JSON.parse(this.responseText);
                        alert(jsonPlaylist);
                        var callbackCreatePlaylistItems = function callbackCreatePlaylistItems() {
                            if (callback != null) {
                                context.setError(error);
                                if (callback != null)
                                    callback(context);
                            }
                        };
                        return owner.loadSpecificPlaylist(playlistType, jsonPlaylist, aPlaylistFile, null, error, context, callbackCreatePlaylistItems);
                    }
                    catch (err) {
                        if (error != null)
                            error.setError(2001, "Error Parsing Playlist : " + playlistUrl + " error: " + JSON.stringify(err));
                        if (callback != null) {
                            context.setError(error);
                            if (callback != null)
                                callback(context);
                        }
                    }
                }
            };
            var playlistUrl = aPlaylistFile.getFullUrlName();
            alert(playlistUrl);
            xmlhttp.open("GET", playlistUrl, true);
            xmlhttp.send();
        };
        R_PlaylistController.prototype.getPlaylist = function () {
            return this._aPlaylist;
        };
        R_PlaylistController.prototype.loadSpecificPlaylist = function (playlistType, jsonObject, aPlaylistFile, aParent, error, context, callback) {
            if (playlistType == "mood_v5")
                return this._iPlaylistControllerPlaylistMoodv5.loadPlaylist(playlistType, jsonObject, aPlaylistFile, aParent, error, context, callback);
            if (playlistType == "custom_v1")
                return this._iPlaylistControllerPlaylistCustomv1.loadPlaylist(playlistType, jsonObject, aPlaylistFile, aParent, error, context, callback);
            if (callback != null) {
                context.setError(error);
                if (callback != null)
                    callback(context);
            }
        };
        R_PlaylistController.prototype.getEmptyPlaylist = function (aPlaylistType) {
            if (aPlaylistType == "mood_v5")
                return this._iPlaylistControllerPlaylistMoodv5.getEmptyPlaylist();
            if (aPlaylistType == "custom_v1")
                return this._iPlaylistControllerPlaylistCustomv1.getEmptyPlaylist();
        };
        R_PlaylistController.prototype.startMainLoop = function (error, context, callback) {
        };
        R_PlaylistController.prototype.endMainLoop = function (error, context, callback) {
        };
        R_PlaylistController.prototype.mainLoop = function (error, context, callback) {
            var aError = error;
            var aContext = context;
            if (aError == null)
                aError = this._aServiceLocator._iEntityCreation.createDefaultError();
            if (aContext == null)
                aContext = this._aServiceLocator._iEntityCreation.createDefaultContext();
            var event = this.createEvent(amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToPlay, this._aPlaylist.getLogic(), null, -1, error, context, callback);
            this.processMainEvent(event, aError, aContext, callback);
        };
        R_PlaylistController.prototype.processMainEvent = function (event, error, context, callback) {
            this._evtMainQueue.push(event);
            if (this._evtMainQueue.size() > 1)
                return;
            var self = this;
            var mainEvent = null;
            var isFirstTime = true;
            var processOneMainEvent = function processOneMainEvent() {
                if (!isFirstTime)
                    self._evtMainQueue.shift();
                if (isFirstTime)
                    isFirstTime = false;
                if (self._evtMainQueue.size() == 0) {
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                    return;
                }
                mainEvent = self._evtMainQueue.peek();
                self._evtQueue.push(mainEvent);
                self.processEvents(self._evtQueue, error, context, processOneMainEvent);
            };
            processOneMainEvent();
        };
        R_PlaylistController.prototype.createEvent = function (eventId, receiver, targetAddress, iCrtTargetIdx, error, context, callback) {
            var aEvent = this._aServiceLocator._iEntityCreation.createDefaultEvent(error);
            aEvent.setReceiver(receiver);
            aEvent.setEventId(eventId);
            aEvent.setTargetAddress(targetAddress);
            aEvent.setCrtTargetIdx(iCrtTargetIdx);
            return aEvent;
        };
        R_PlaylistController.prototype.processEvents = function (eventQueue, error, context, callback) {
            var self = this;
            var event = null;
            var processOneEvent = function processOneEvent() {
                if (eventQueue.size() == 0) {
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                    return;
                }
                event = eventQueue.shift();
                var retFunction = function retFunction() {
                    processOneEvent();
                };
                try {
                    event.getReceiver().receiveEvent(event, eventQueue, error, self, self._aRenderingController, context, processOneEvent);
                }
                catch (err) {
                    var a = 1;
                }
            };
            processOneEvent();
        };
        R_PlaylistController.prototype.receiveEvent = function (event, eventQueue, error, context, callback) {
            this.processMainEvent(event, error, context, callback);
            context.setError(error);
            if (callback != null)
                callback(context);
            return;
        };
        return R_PlaylistController;
    }(rmGeneral.rm_general.R_Service));
    rm_coreservices.R_PlaylistController = R_PlaylistController;
})(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
//# sourceMappingURL=R_PlaylistController.js.map