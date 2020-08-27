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
var rmGeneralService = require("../../../../../app/ts/reusable/rm_general/r_service/R_Service");
var rmGeneralError = require("../../../../../app/ts/reusable/rm_general/r_error/R_Error");
var rmGeneralContext = require("../../../../../app/ts/reusable/rm_general/r_context/R_Context");
var rmGeneralProperty = require("../../../../../app/ts/reusable/rm_general/r_property/R_Property");
var rmGeneralProperties = require("../../../../../app/ts/reusable/rm_general/r_property/R_Properties");
var rmGeneralFactoryDescription = require("../../../../../app/ts/reusable/rm_general/r_factorydescription/R_FactoryDescription");
var rmGeneralFactoryDescriptions = require("../../../../../app/ts/reusable/rm_general/r_factorydescription/R_FactoryDescriptions");
var rmGeneralServices = require("../../../../../app/ts/reusable/rm_general/r_service/R_Services");
var rmGeneralServiceFactories = require("../../../../../app/ts/reusable/rm_general/r_service/R_ServiceFactories");
var rmGeneralEntityFactories = require("../../../../../app/ts/reusable/rm_general/r_entity/R_EntityFactories");
var rmGeneralDateTime = require("../../../../../app/ts/reusable/rm_general/r_datetime/R_DateTime");
var rmGeneralTimeZone = require("../../../../../app/ts/reusable/rm_general/r_timezone/R_TimeZone");
var rmGeneralSoundProperties = require("../../../../../app/ts/reusable/rm_general/r_soundproperties/R_SoundProperties");
var rmGeneralScreenProperties = require("../../../../../app/ts/reusable/rm_general/r_screenproperties/R_ScreenProperties");
var rmGeneralAppServerProperties = require("../../../../../app/ts/reusable/rm_general/r_appserverproperties/R_AppServerProperties");
var rmGeneralFileInfo = require("../../../../../app/ts/reusable/rm_general/r_fileinfo/R_FileInfo");
var rmGeneralNetworkProperties = require("../../../../../app/ts/reusable/rm_general/r_networkproperties/R_NetworkProperties");
var rmGeneralNetworkCardProperties = require("../../../../../app/ts/reusable/rm_general/r_networkproperties/R_NetworkCardProperties");
var rmGeneralNetworkProxyProperties = require("../../../../../app/ts/reusable/rm_general/r_networkproperties/R_NetworkProxyProperties");
var rmGeneralWifiConnectionInfo = require("../../../../../app/ts/reusable/rm_general/r_networkproperties/R_WifiConnectionInfo");
var rmGeneralFirmwareProperties = require("../../../../../app/ts/reusable/rm_general/r_firmwareproperties/R_FirmwareProperties");
var rmGeneralBeaconInfo = require("../../../../../app/ts/reusable/rm_general/r_beaconinfo/R_BeaconInfo");
var rmGeneralCaptureScreenInfo = require("../../../../../app/ts/reusable/rm_general/r_capturescreeninfo/R_CaptureScreenInfo");
var rmGeneralEddystoneInfo = require("../../../../../app/ts/reusable/rm_general/r_eddystoneinfo/R_EddystoneInfo");
var rmGeneralPlatformInfo = require("../../../../../app/ts/reusable/rm_general/r_platforminfo/R_PlatformInfo");
var rmGeneralSystemUsageInfo = require("../../../../../app/ts/reusable/rm_general/r_systemusageinfo/R_SystemUsageInfo");
var rmGeneralWifiSoftAppInfo = require("../../../../../app/ts/reusable/rm_general/r_wifisoftappinfo/R_WifiSoftAppInfo");
var rmGeneralFailureModeInfo = require("../../../../../app/ts/reusable/rm_general/r_failuremodeinfo/R_FailureModeInfo");
var rmGeneralPowerSaveModeInfo = require("../../../../../app/ts/reusable/rm_general/r_powersavemodeinfo/R_PowerSaveModeInfo");
var rmGeneralTileInfo = require("../../../../../app/ts/reusable/rm_general/r_tileinfo/R_TileInfo");
var rmGeneralSystemMonitorInfo = require("../../../../../app/ts/reusable/rm_general/r_systemmonitorinfo/R_SystemMonitorInfo");
var rmGeneralUsageData = require("../../../../../app/ts/reusable/rm_general/r_usagedata/R_UsageData");
var rmGeneralUsagePermissions = require("../../../../../app/ts/reusable/rm_general/r_usagepermissions/R_UsagePermissions");
var rmGeneralDeviceTimerInfo = require("../../../../../app/ts/reusable/rm_general/r_devicetimerinfo/R_DeviceTimerInfo");
var rmGeneralShaProperties = require("../../../../../app/ts/reusable/rm_general/r_shaproperties/R_ShaProperties");
var rmGeneralXmlJsonObject = require("../../../../../app/ts/reusable/rm_general/r_xmljsonobject/R_XmlJsonObject");
var rmPlaybackHardwareSettings = require("../../../../../app/ts/reusable/rm_playback/r_hardwaresettings/R_HardwareSettings");
var rmPlaybackOpeningHours = require("../../../../../app/ts/reusable/rm_playback/r_openinghours/R_OpeningHours");
var rmPlaybackDayOpeningHours = require("../../../../../app/ts/reusable/rm_playback/r_openinghours/R_DayOpeningHours");
var rmConfigurationServicesPlatformConfigurator = require("../../../../../app/ts/reusable/rm_configurationservices/r_platformconfigurator/R_PlatformConfigurator");
var rmConfigurationServicesServiceLocator = require("../../../../../app/ts/reusable/rm_configurationservices/r_servicelocator/R_ServiceLocator");
var rmConfigurationServicesServiceContainer = require("../../../../../app/ts/reusable/rm_configurationservices/r_servicecontainer/R_ServiceContainer");
var rmConfigurationServices2 = require("../../../../../app/ts/reusable/rm_configurationservices/r_servicelocator/IImpl_ServiceLocator_FactorySetup_R");
var rmConfigurationServices3 = require("../../../../../app/ts/reusable/rm_configurationservices/r_servicelocator/IImpl_ServiceLocator_EntityCreation_R");
var rmConfigurationServices4 = require("../../../../../app/ts/reusable/rm_configurationservices/r_servicelocator/IImpl_ServiceLocator_ServiceCreation_R");
var rm_configurationservices;
(function (rm_configurationservices) {
    var R_ServiceLocator = (function (_super) {
        __extends(R_ServiceLocator, _super);
        function R_ServiceLocator(aFactoryDescription, aServiceContainer, aLogService, error) {
            var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
            _this._iFactorySetup = new rmConfigurationServices2.rm_configurationservices.IImpl_ServiceLocator_FactorySetup_R(_this);
            _this._iEntityCreation = new rmConfigurationServices3.rm_configurationservices.IImpl_ServiceLocator_EntityCreation_R(_this);
            _this._iServiceCreation = new rmConfigurationServices4.rm_configurationservices.IImpl_ServiceLocator_ServiceCreation_R(_this);
            _this._srvFactories = _this.createDefaultServiceFactories(error);
            _this._entFactories = _this.createDefaultEntityFactories(error);
            return _this;
        }
        R_ServiceLocator.prototype.injectDependencies = function (error) {
        };
        R_ServiceLocator.prototype.addServiceFactory = function (aServiceFactory, error) {
            return this._srvFactories.addServiceFactory(aServiceFactory, error);
        };
        R_ServiceLocator.prototype.addEntityFactory = function (aEntityFactory, error) {
            return this._entFactories.addEntityFactory(aEntityFactory, error);
        };
        R_ServiceLocator.prototype.createAllStartupServices = function (error) {
            var listSrvFactories = this._srvFactories.getServiceFactories(error);
            var idx = 0;
            for (var _i = 0, listSrvFactories_1 = listSrvFactories; _i < listSrvFactories_1.length; _i++) {
                var aServiceFactory = listSrvFactories_1[_i];
            }
        };
        R_ServiceLocator.prototype.addCreatedServiceFactory = function (aServiceFactory, idxFactory, nbExpectedFactories, error, bTimeOut) {
            document.getElementById("maindiv").innerHTML += "<p>" + idxFactory + ". " + aServiceFactory.getFactoryName() + "</p>";
            this._iFactorySetup.addServiceFactory(aServiceFactory, error);
        };
        R_ServiceLocator.prototype.setupServiceFactories = function (factoryDescriptions, error) {
            var listSrvFactoryDescriptions = factoryDescriptions.getFactoryDescriptions(error);
            var promises = new Array();
            var aSrvLocator = this;
            var idxFactory = 0;
            var nbExpectedFactories = listSrvFactoryDescriptions.length;
            var _loop_1 = function (aServiceFactoryDesc) {
                if (aServiceFactoryDesc._factoryName == "NFactory_SDK_WebOS") {
                    try {
                        require(["../../../../../app/ts/native/nm_transversalservices/n_sdk_webos/NFactory_SDK_WebOS"], function (dynNFactorySDKWebOS) {
                            var aServiceFactory = new dynNFactorySDKWebOS.nm_transversalservices.NFactory_SDK_WebOS(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "NFactory_SDK_Tizen") {
                    try {
                        require(["../../../../../app/ts/native/nm_transversalservices/n_sdk_tizen/NFactory_SDK_Tizen"], function (dynNFactorySDKTizen) {
                            var aServiceFactory = new dynNFactorySDKTizen.nm_transversalservices.NFactory_SDK_Tizen(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "NFactory_SDK_NodeJs") {
                    try {
                        require(["../../../../../app/ts/native/nm_transversalservices/n_sdk_nodejs/NFactory_SDK_NodeJs"], function (dynNFactory_SDK_NodeJs) {
                            var aServiceFactory = new dynNFactory_SDK_NodeJs.nm_transversalservices.NFactory_SDK_NodeJs(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "NFactory_SDK_StandaloneBrowser") {
                    try {
                        require(["../../../../../app/ts/native/nm_transversalservices/n_sdk_standalonebrowser/NFactory_SDK_StandaloneBrowser"], function (dynNFactory_SDK_StandaloneBrowser) {
                            var aServiceFactory = new dynNFactory_SDK_StandaloneBrowser.nm_transversalservices.NFactory_SDK_StandaloneBrowser(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "NFactory_VideoRenderer_WebOS") {
                    try {
                        require(["../../../../../app/ts/native/nm_renderingservices/n_videorenderer_webos/NFactory_VideoRenderer_WebOS"], function (dynNFactory_VideoRenderer_WebOS) {
                            var aServiceFactory = new dynNFactory_VideoRenderer_WebOS.nm_renderingservices.NFactory_VideoRenderer_WebOS(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "NFactory_VideoRenderer_Tizen") {
                    try {
                        require(["../../../../../app/ts/native/nm_renderingservices/n_videorenderer_tizen/NFactory_VideoRenderer_Tizen"], function (dynNFactory_VideoRenderer_Tizen) {
                            var aServiceFactory = new dynNFactory_VideoRenderer_Tizen.nm_renderingservices.NFactory_VideoRenderer_Tizen(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "RFactory_ImageRenderer") {
                    try {
                        require(["../../../../../app/ts/reusable/rm_renderingservices/r_imagerenderer/RFactory_ImageRenderer"], function (dynRFactory_ImageRenderer) {
                            var aServiceFactory = new dynRFactory_ImageRenderer.rm_renderingservices.RFactory_ImageRenderer(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "RFactory_BackgroundRenderer") {
                    try {
                        require(["../../../../../app/ts/reusable/rm_renderingservices/r_backgroundrenderer/RFactory_BackgroundRenderer"], function (dynRFactory_BackgroundRenderer) {
                            var aServiceFactory = new dynRFactory_BackgroundRenderer.rm_renderingservices.RFactory_BackgroundRenderer(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "RFactory_FillRectRenderer") {
                    try {
                        require(["../../../../../app/ts/reusable/rm_renderingservices/r_fillrectrenderer/RFactory_FillRectRenderer"], function (dynRFactory_FillRectRenderer) {
                            var aServiceFactory = new dynRFactory_FillRectRenderer.rm_renderingservices.RFactory_FillRectRenderer(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "RFactory_FlashRenderer") {
                    try {
                        require(["../../../../../app/ts/reusable/rm_renderingservices/r_flashrenderer/RFactory_FlashRenderer"], function (dynRFactory_FlashRenderer) {
                            var aServiceFactory = new dynRFactory_FlashRenderer.rm_renderingservices.RFactory_FlashRenderer(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "RFactory_HtmlRenderer") {
                    try {
                        require(["../../../../../app/ts/reusable/rm_renderingservices/r_htmlrenderer/RFactory_HtmlRenderer"], function (dynRFactory_HtmlRenderer) {
                            var aServiceFactory = new dynRFactory_HtmlRenderer.rm_renderingservices.RFactory_HtmlRenderer(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "RFactory_RenderingZone") {
                    try {
                        require(["../../../../../app/ts/reusable/rm_renderingservices/r_renderingzone/RFactory_RenderingZone"], function (dynRFactory_RenderingZone) {
                            var aServiceFactory = new dynRFactory_RenderingZone.rm_renderingservices.RFactory_RenderingZone(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "RFactory_ScreenSaverRenderer") {
                    try {
                        require(["../../../../../app/ts/reusable/rm_renderingservices/r_screensaverrenderer/RFactory_ScreenSaverRenderer"], function (dynRFactory_ScreenSaverRenderer) {
                            var aServiceFactory = new dynRFactory_ScreenSaverRenderer.rm_renderingservices.RFactory_ScreenSaverRenderer(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "RFactory_TvHdmiPassThroughSrv") {
                    try {
                        require(["../../../../../app/ts/reusable/rm_renderingservices/r_tvhdmipassthroughsrv/RFactory_TvHdmiPassThroughSrv"], function (dynRFactory_TvHdmiPassThroughSrv) {
                            var aServiceFactory = new dynRFactory_TvHdmiPassThroughSrv.rm_renderingservices.RFactory_TvHdmiPassThroughSrv(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "RFactory_VideoRenderer") {
                    try {
                        require(["../../../../../app/ts/reusable/rm_renderingservices/r_videorenderer/RFactory_VideoRenderer"], function (dynRFactory_VideoRenderer) {
                            var aServiceFactory = new dynRFactory_VideoRenderer.rm_renderingservices.RFactory_VideoRenderer(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "RFactory_LogService") {
                    try {
                        require(["../../../../../app/ts/reusable/rm_transversalservices/r_logservice/RFactory_LogService"], function (dynRFactory_LogService) {
                            var aServiceFactory = new dynRFactory_LogService.rm_transversalservices.RFactory_LogService(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "RFactory_UtilsService") {
                    try {
                        require(["../../../../../app/ts/reusable/rm_transversalservices/r_utilsservice/RFactory_UtilsService"], function (dynRFactory_UtilsService) {
                            var aServiceFactory = new dynRFactory_UtilsService.rm_transversalservices.RFactory_UtilsService(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "RFactory_XmlConfigurator") {
                    try {
                        require(["../../../../../app/ts/reusable/rm_transversalservices/r_xmlconfigurator/RFactory_XmlConfigurator"], function (dynRFactory_XMLConfigurator) {
                            var aServiceFactory = new dynRFactory_XMLConfigurator.rm_transversalservices.RFactory_XmlConfigurator(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "RFactory_ChronService") {
                    try {
                        require(["../../../../../app/ts/reusable/rm_nonrenderingservices/r_chronservice/RFactory_ChronService"], function (dynRFactory_ChronService) {
                            var aServiceFactory = new dynRFactory_ChronService.rm_nonrenderingservices.RFactory_ChronService(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "RFactory_DiagnosticsService") {
                    try {
                        require(["../../../../../app/ts/reusable/rm_nonrenderingservices/r_diagnosticsservice/RFactory_DiagnosticsService"], function (dynRFactory_DiagnosticsService) {
                            var aServiceFactory = new dynRFactory_DiagnosticsService.rm_nonrenderingservices.RFactory_DiagnosticsService(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "RFactory_EnvUpdaterService") {
                    try {
                        require(["../../../../../app/ts/reusable/rm_nonrenderingservices/r_envupdaterservice/RFactory_EnvUpdaterService"], function (dynRFactory_EnvUpdaterService) {
                            var aServiceFactory = new dynRFactory_EnvUpdaterService.rm_nonrenderingservices.RFactory_EnvUpdaterService(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "RFactory_LiveCommandsService") {
                    try {
                        require(["../../../../../app/ts/reusable/rm_nonrenderingservices/r_livecommandsservice/RFactory_LiveCommandsService"], function (dynRFactory_LiveCommandsService) {
                            var aServiceFactory = new dynRFactory_LiveCommandsService.rm_nonrenderingservices.RFactory_LiveCommandsService(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "RFactory_MonitoringService") {
                    try {
                        require(["../../../../../app/ts/reusable/rm_nonrenderingservices/r_monitoringservice/RFactory_MonitoringService"], function (dynRFactory_MonitoringService) {
                            var aServiceFactory = new dynRFactory_MonitoringService.rm_nonrenderingservices.RFactory_MonitoringService(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "RFactory_PlayerFilesUpdater") {
                    try {
                        require(["../../../../../app/ts/reusable/rm_nonrenderingservices/r_playerfilesupdater/RFactory_PlayerFilesUpdater"], function (dynRFactory_PlayerFilesUpdater) {
                            var aServiceFactory = new dynRFactory_PlayerFilesUpdater.rm_nonrenderingservices.RFactory_PlayerFilesUpdater(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "RFactory_PurgeService") {
                    try {
                        require(["../../../../../app/ts/reusable/rm_nonrenderingservices/r_purgeservice/RFactory_PurgeService"], function (dynRFactory_PurgeService) {
                            var aServiceFactory = new dynRFactory_PurgeService.rm_nonrenderingservices.RFactory_PurgeService(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "RFactory_SendLogService") {
                    try {
                        require(["../../../../../app/ts/reusable/rm_nonrenderingservices/r_sendlogservice/RFactory_SendLogService"], function (dynRFactory_SendLogService) {
                            var aServiceFactory2 = new dynRFactory_SendLogService.rm_nonrenderingservices.RFactory_SendLogService(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory2, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "RFactory_StatisticsService") {
                    try {
                        require(["../../../../../app/ts/reusable/rm_nonrenderingservices/r_statisticsservice/RFactory_StatisticsService"], function (dynRFactory_StatisticsService) {
                            var aServiceFactory = new dynRFactory_StatisticsService.rm_nonrenderingservices.RFactory_StatisticsService(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "RFactory_WatchDogService") {
                    try {
                        require(["../../../../../app/ts/reusable/rm_nonrenderingservices/r_watchdogservice/RFactory_WatchDogService"], function (dynRFactory_WatchDogService) {
                            var aServiceFactory = new dynRFactory_WatchDogService.rm_nonrenderingservices.RFactory_WatchDogService(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "RFactory_PlaylistWatcher") {
                    try {
                        require(["../../../../../app/ts/reusable/rm_coreservices/r_playlistwatcher/RFactory_PlaylistWatcher"], function (dynRFactory_PlaylistWatcher) {
                            var aServiceFactory = new dynRFactory_PlaylistWatcher.rm_coreservices.RFactory_PlaylistWatcher(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "RFactory_PlaylistDownloader") {
                    try {
                        require(["../../../../../app/ts/reusable/rm_coreservices/r_playlistdownloader/RFactory_PlaylistDownloader"], function (dynRFactory_PlaylistDownloader) {
                            var aServiceFactory = new dynRFactory_PlaylistDownloader.rm_coreservices.RFactory_PlaylistDownloader(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "RFactory_PlaylistController") {
                    try {
                        require(["../../../../../app/ts/reusable/rm_coreservices/r_playlistcontroller/RFactory_PlaylistController"], function (dynRFactory_PlaylistController) {
                            var aServiceFactory = new dynRFactory_PlaylistController.rm_coreservices.RFactory_PlaylistController(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "RFactory_RenderingController") {
                    try {
                        require(["../../../../../app/ts/reusable/rm_coreservices/r_renderingcontroller/RFactory_RenderingController"], function (dynRFactory_RenderingController) {
                            var aServiceFactory = new dynRFactory_RenderingController.rm_coreservices.RFactory_RenderingController(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
            };
            for (var _i = 0, listSrvFactoryDescriptions_1 = listSrvFactoryDescriptions; _i < listSrvFactoryDescriptions_1.length; _i++) {
                var aServiceFactoryDesc = listSrvFactoryDescriptions_1[_i];
                _loop_1(aServiceFactoryDesc);
            }
        };
        R_ServiceLocator.prototype.setupEntityFactories = function (factoryDescriptions, error) {
            var listEntFactoryDescriptions = factoryDescriptions.getFactoryDescriptions(error);
            listEntFactoryDescriptions.forEach(function (crtEntFactory, index) {
            });
        };
        R_ServiceLocator.prototype.createEntity = function (entityName, error) {
            this._entFactories.getEntityFactories(error).forEach(function (crtEntFactory, index) {
            });
            return null;
        };
        R_ServiceLocator.prototype.createDefaultError = function () {
            return new rmGeneralError.rm_general.R_Error();
        };
        R_ServiceLocator.startupCreateDefaultError = function () {
            return new rmGeneralError.rm_general.R_Error();
        };
        R_ServiceLocator.prototype.createDefaultContext = function () {
            return new rmGeneralContext.rm_general.R_Context();
        };
        R_ServiceLocator.startupCreateDefaultContext = function () {
            return new rmGeneralContext.rm_general.R_Context();
        };
        R_ServiceLocator.prototype.createDefaultProperty = function (error) {
            return new rmGeneralProperty.rm_general.R_Property();
        };
        R_ServiceLocator.prototype.createDefaultProperties = function (error) {
            return new rmGeneralProperties.rm_general.R_Properties();
        };
        R_ServiceLocator.prototype.createDefaultFactoryDescriptions = function (error) {
            return new rmGeneralFactoryDescriptions.rm_general.R_FactoryDescriptions();
        };
        R_ServiceLocator.prototype.createDefaultFactoryDescription = function (error) {
            return new rmGeneralFactoryDescription.rm_general.R_FactoryDescription();
        };
        R_ServiceLocator.startupCreateDefaultFactoryDescription = function (error) {
            return new rmGeneralFactoryDescription.rm_general.R_FactoryDescription();
        };
        R_ServiceLocator.prototype.createDefaultServiceFactories = function (error) {
            return new rmGeneralServiceFactories.rm_general.R_ServiceFactories();
        };
        R_ServiceLocator.prototype.createDefaultEntityFactories = function (error) {
            return new rmGeneralEntityFactories.rm_general.R_EntityFactories();
        };
        R_ServiceLocator.prototype.createDefaultDateTime = function (error) {
            return new rmGeneralDateTime.rm_general.R_DateTime();
        };
        R_ServiceLocator.prototype.createDefaultTimeZone = function (error) {
            return new rmGeneralTimeZone.rm_general.R_TimeZone();
        };
        R_ServiceLocator.prototype.createDefaultSoundProperties = function (error) {
            return new rmGeneralSoundProperties.rm_general.R_SoundProperties();
        };
        R_ServiceLocator.prototype.createDefaultScreenProperties = function (error) {
            return new rmGeneralScreenProperties.rm_general.R_ScreenProperties();
        };
        R_ServiceLocator.prototype.createDefaultAppServerProperties = function (error) {
            return new rmGeneralAppServerProperties.rm_general.R_AppServerProperties();
        };
        R_ServiceLocator.prototype.createDefaultFileInfo = function (error) {
            return new rmGeneralFileInfo.rm_general.R_FileInfo();
        };
        R_ServiceLocator.prototype.createDefaultNetworkProperties = function (error) {
            return new rmGeneralNetworkProperties.rm_general.R_NetworkProperties();
        };
        R_ServiceLocator.prototype.createDefaultNetworkCardProperties = function (error) {
            return new rmGeneralNetworkCardProperties.rm_general.R_NetworkCardProperties();
        };
        R_ServiceLocator.prototype.createDefaultNetworkProxyProperties = function (error) {
            return new rmGeneralNetworkProxyProperties.rm_general.R_NetworkProxyProperties();
        };
        R_ServiceLocator.prototype.createDefaultWifiConnectionInfo = function (error) {
            return new rmGeneralWifiConnectionInfo.rm_general.R_WifiConnectionInfo();
        };
        R_ServiceLocator.prototype.createDefaultFirmwareProperties = function (error) {
            return new rmGeneralFirmwareProperties.rm_general.R_FirmwareProperties();
        };
        R_ServiceLocator.prototype.createDefaultBeaconInfo = function (error) {
            return new rmGeneralBeaconInfo.rm_general.R_BeaconInfo();
        };
        R_ServiceLocator.prototype.createDefaultEddystoneInfo = function (error) {
            return new rmGeneralEddystoneInfo.rm_general.R_EddystoneInfo();
        };
        R_ServiceLocator.prototype.createDefaultCaptureScreenInfo = function (error) {
            return new rmGeneralCaptureScreenInfo.rm_general.R_CaptureScreenInfo();
        };
        R_ServiceLocator.prototype.createDefaultPlatformInfo = function (error) {
            return new rmGeneralPlatformInfo.rm_general.R_PlatformInfo();
        };
        R_ServiceLocator.prototype.createDefaultSystemUsageInfo = function (error) {
            return new rmGeneralSystemUsageInfo.rm_general.R_SystemUsageInfo();
        };
        R_ServiceLocator.prototype.createDefaultWifiSoftAppInfo = function (error) {
            return new rmGeneralWifiSoftAppInfo.rm_general.R_WifiSoftAppInfo();
        };
        R_ServiceLocator.prototype.createDefaultFailureModeInfo = function (error) {
            return new rmGeneralFailureModeInfo.rm_general.R_FailureModeInfo();
        };
        R_ServiceLocator.prototype.createDefaultPowerSaveModeInfo = function (error) {
            return new rmGeneralPowerSaveModeInfo.rm_general.R_PowerSaveModeInfo();
        };
        R_ServiceLocator.prototype.createDefaultTileInfo = function (error) {
            return new rmGeneralTileInfo.rm_general.R_TileInfo();
        };
        R_ServiceLocator.prototype.createDefaultSystemMonitorInfo = function (error) {
            return new rmGeneralSystemMonitorInfo.rm_general.R_SystemMonitorInfo();
        };
        R_ServiceLocator.prototype.createDefaultUsageData = function (error) {
            return new rmGeneralUsageData.rm_general.R_UsageData();
        };
        R_ServiceLocator.prototype.createDefaultUsagePermissions = function (error) {
            return new rmGeneralUsagePermissions.rm_general.R_UsagePermissions();
        };
        R_ServiceLocator.prototype.createDefaultDeviceTimerInfo = function (error) {
            return new rmGeneralDeviceTimerInfo.rm_general.R_DeviceTimerInfo();
        };
        R_ServiceLocator.prototype.createDefaultShaProperties = function (error) {
            return new rmGeneralShaProperties.rm_general.R_ShaProperties();
        };
        R_ServiceLocator.prototype.createDefaultXmlJsonObject = function (error) {
            return new rmGeneralXmlJsonObject.rm_general.R_XmlJsonObject();
        };
        R_ServiceLocator.prototype.createDefaultHardwareSettings = function (error) {
            return new rmPlaybackHardwareSettings.rm_playback.R_HardwareSettings();
        };
        R_ServiceLocator.prototype.createDefaultOpeningHours = function (error) {
            return new rmPlaybackOpeningHours.rm_playback.R_OpeningHours();
        };
        R_ServiceLocator.prototype.createDefaultDayOpeningHours = function (error) {
            return new rmPlaybackDayOpeningHours.rm_playback.R_DayOpeningHours();
        };
        R_ServiceLocator.prototype.createService = function (aFactoryDescription, aServiceContainer, serviceProperties, aLogService, error) {
            this._srvFactories.getServiceFactories(error).forEach(function (crtSrvFactory, index) {
            });
            return null;
        };
        R_ServiceLocator.prototype.createDefaultServices = function (error) {
            return new rmGeneralServices.rm_general.R_Services();
        };
        R_ServiceLocator.startupCreateDefaultServices = function (error) {
            return new rmGeneralServices.rm_general.R_Services();
        };
        R_ServiceLocator.startupCreateDefaultServiceContainer = function (error) {
            var aNewServiceContainer;
            var aServiceContainer;
            var aFactoryDescription;
            aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
            aFactoryDescription.setNames("AFactory_ServiceContainer", "R_ServiceContainer", "A_ServiceContainer", "R_ServiceContainer_1");
            var aLogService = null;
            aServiceContainer = null;
            aNewServiceContainer = new rmConfigurationServicesServiceContainer.rm_configurationservices.R_ServiceContainer(aFactoryDescription, aServiceContainer, aLogService, error);
            return aNewServiceContainer;
        };
        R_ServiceLocator.startupCreateDefaultPlatformConfigurator = function (aServiceContainer, error) {
            var aNewPlatformConfigurator;
            var aFactoryDescription;
            aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
            aFactoryDescription.setNames("AFactory_PlatformConfigurator", "R_PlatformConfigurator", "A_PlatformConfigurator", "R_PlatformConfigurator_1");
            var aLogService = null;
            aNewPlatformConfigurator = new rmConfigurationServicesPlatformConfigurator.rm_configurationservices.R_PlatformConfigurator(aFactoryDescription, aServiceContainer, aLogService, error);
            return aNewPlatformConfigurator;
        };
        R_ServiceLocator.startupCreateDefaultServiceLocator = function (aServiceContainer, error) {
            var aNewServiceLocator;
            var aFactoryDescription;
            aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
            aFactoryDescription.setNames("AFactory_ServiceLocator", "R_ServiceLocator", "A_ServiceLocator", "R_ServiceLocator_1");
            var aLogService = null;
            aNewServiceLocator = new rmConfigurationServicesServiceLocator.rm_configurationservices.R_ServiceLocator(aFactoryDescription, aServiceContainer, aLogService, error);
            return aNewServiceLocator;
        };
        return R_ServiceLocator;
    }(rmGeneralService.rm_general.R_Service));
    rm_configurationservices.R_ServiceLocator = R_ServiceLocator;
})(rm_configurationservices = exports.rm_configurationservices || (exports.rm_configurationservices = {}));
//# sourceMappingURL=R_ServiceLocator.js.map