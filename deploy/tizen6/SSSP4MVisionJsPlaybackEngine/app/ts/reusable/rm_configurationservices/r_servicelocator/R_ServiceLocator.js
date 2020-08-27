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
define(["require", "exports", "../../../../../app/ts/reusable/rm_renderingservices/r_renderingzone/R_RenderingZone", "../../../../../app/ts/reusable/rm_renderingservices/r_renderingzone/RE_RenderingZonePool", "../../../../../app/ts/reusable/rm_renderingservices/r_imagerenderer/R_ImageRenderer", "../../../../../app/ts/reusable/rm_renderingservices/r_imagerenderer/RE_ImageRendererPool", "../../../../../app/ts/reusable/rm_renderingservices/r_videorenderer/R_VideoRenderer", "../../../../../app/ts/reusable/rm_renderingservices/r_videorenderer/RE_VideoRendererPool", "../../../../../app/ts/reusable/rm_renderingservices/r_videostreamrenderer/R_VideoStreamRenderer", "../../../../../app/ts/reusable/rm_renderingservices/r_videostreamrenderer/RE_VideoStreamRendererPool", "../../../../../app/ts/reusable/rm_renderingservices/r_htmlrenderer/R_HtmlRenderer", "../../../../../app/ts/reusable/rm_renderingservices/r_htmlrenderer/RE_HtmlRendererPool", "../../../../../app/ts/reusable/rm_renderingservices/r_htmltemplaterenderer/R_HtmlTemplateRenderer", "../../../../../app/ts/reusable/rm_renderingservices/r_htmltemplaterenderer/RE_HtmlTemplateRendererPool", "../../../../../app/ts/reusable/rm_renderingservices/r_flashrenderer/R_FlashRenderer", "../../../../../app/ts/reusable/rm_renderingservices/r_flashrenderer/RE_FlashRendererPool", "../../../../../app/ts/reusable/rm_renderingservices/r_screensaverrenderer/R_ScreenSaverRenderer", "../../../../../app/ts/reusable/rm_renderingservices/r_screensaverrenderer/RE_ScreenSaverRendererPool", "../../../../../app/ts/reusable/rm_renderingservices/r_fillrectrenderer/R_FillRectRenderer", "../../../../../app/ts/reusable/rm_renderingservices/r_fillrectrenderer/RE_FillRectRendererPool", "../../../../../app/ts/reusable/rm_renderingservices/r_tvhdmipassthroughsrv/R_TvHdmiPassThroughSrv", "../../../../../app/ts/reusable/rm_renderingservices/r_tvhdmipassthroughsrv/RE_TvHdmiPassThroughSrvPool", "../../../../../app/ts/reusable/rm_renderingservices/r_backgroundrenderer/R_BackgroundRenderer", "../../../../../app/ts/reusable/rm_renderingservices/r_backgroundrenderer/RE_BackgroundRendererPool", "../../../../../app/ts/reusable/rm_general/r_service/R_Service", "../../../../../app/ts/reusable/rm_general/r_error/R_Error", "../../../../../app/ts/reusable/rm_general/r_context/R_Context", "../../../../../app/ts/reusable/rm_general/r_property/R_Property", "../../../../../app/ts/reusable/rm_general/r_property/R_Properties", "../../../../../app/ts/reusable/rm_general/r_factorydescription/R_FactoryDescription", "../../../../../app/ts/reusable/rm_general/r_factorydescription/R_FactoryDescriptions", "../../../../../app/ts/reusable/rm_general/r_service/R_Services", "../../../../../app/ts/reusable/rm_general/r_service/R_ServiceFactories", "../../../../../app/ts/reusable/rm_general/r_entity/R_EntityFactories", "../../../../../app/ts/reusable/rm_general/r_datetime/R_DateTime", "../../../../../app/ts/reusable/rm_general/r_timezone/R_TimeZone", "../../../../../app/ts/reusable/rm_general/r_soundproperties/R_SoundProperties", "../../../../../app/ts/reusable/rm_general/r_screenproperties/R_ScreenProperties", "../../../../../app/ts/reusable/rm_general/r_appserverproperties/R_AppServerProperties", "../../../../../app/ts/reusable/rm_general/r_fileinfo/R_FileInfo", "../../../../../app/ts/reusable/rm_general/r_networkproperties/R_NetworkProperties", "../../../../../app/ts/reusable/rm_general/r_networkproperties/R_NetworkCardProperties", "../../../../../app/ts/reusable/rm_general/r_networkproperties/R_NetworkProxyProperties", "../../../../../app/ts/reusable/rm_general/r_networkproperties/R_WifiConnectionInfo", "../../../../../app/ts/reusable/rm_general/r_firmwareproperties/R_FirmwareProperties", "../../../../../app/ts/reusable/rm_general/r_beaconinfo/R_BeaconInfo", "../../../../../app/ts/reusable/rm_general/r_capturescreeninfo/R_CaptureScreenInfo", "../../../../../app/ts/reusable/rm_general/r_eddystoneinfo/R_EddystoneInfo", "../../../../../app/ts/reusable/rm_general/r_platforminfo/R_PlatformInfo", "../../../../../app/ts/reusable/rm_general/r_systemusageinfo/R_SystemUsageInfo", "../../../../../app/ts/reusable/rm_general/r_wifisoftappinfo/R_WifiSoftAppInfo", "../../../../../app/ts/reusable/rm_general/r_failuremodeinfo/R_FailureModeInfo", "../../../../../app/ts/reusable/rm_general/r_powersavemodeinfo/R_PowerSaveModeInfo", "../../../../../app/ts/reusable/rm_general/r_tileinfo/R_TileInfo", "../../../../../app/ts/reusable/rm_general/r_systemmonitorinfo/R_SystemMonitorInfo", "../../../../../app/ts/reusable/rm_general/r_usagedata/R_UsageData", "../../../../../app/ts/reusable/rm_general/r_usagepermissions/R_UsagePermissions", "../../../../../app/ts/reusable/rm_general/r_devicetimerinfo/R_DeviceTimerInfo", "../../../../../app/ts/reusable/rm_general/r_shaproperties/R_ShaProperties", "../../../../../app/ts/reusable/rm_general/r_xmljsonobject/R_XmlJsonObject", "../../../../../app/ts/reusable/rm_general/re_xmlobjects/RE_XmlDocument", "../../../../../app/ts/reusable/rm_general/re_xmlobjects/RE_XmlNode", "../../../../../app/ts/reusable/rm_general/re_queue/RE_Queue", "../../../../../app/ts/reusable/rm_general/re_event/RE_Event", "../../../../../app/ts/reusable/rm_general/re_random/RE_Random", "../../../../../app/ts/reusable/rm_general/re_diffusion/RE_Diffusion", "../../../../../app/ts/reusable/rm_playback/r_hardwaresettings/R_HardwareSettings", "../../../../../app/ts/reusable/rm_playback/r_openinghours/R_OpeningHours", "../../../../../app/ts/reusable/rm_playback/r_openinghours/R_DayOpeningHours", "../../../../../app/ts/reusable/rm_playback/re_screensaverconfig/RE_ScreenSaverConfig", "../../../../../app/ts/reusable/rm_playback/re_playbackglobalconfig/RE_PlaybackGlobalConfig", "../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_MainPlaylist", "../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_TagManager", "../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem", "../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_Container", "../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_Design", "../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_DesignZone", "../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_Event", "../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_Events", "../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_FillRect", "../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_Flash", "../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_HtmlTemplate", "../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_Image", "../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_Playlist", "../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_PriorityPlaylist", "../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_Stream", "../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_ScreenSaverImage", "../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_ScreenSaverVideo", "../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_Tag", "../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_RealTag", "../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_TVPassThrough", "../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_TVTunner", "../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_Video", "../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_VideoStream", "../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_WebPage", "../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_MainPlaylist_Logic", "../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_TagManager_Logic", "../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_Logic", "../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_ContainerLogic", "../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_DesignLogic", "../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_DesignZoneLogic", "../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_DesignMainZoneLogic", "../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_EventLogic", "../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_EventsLogic", "../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_FillRectLogic", "../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_FlashLogic", "../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_HtmlTemplateLogic", "../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_ImageLogic", "../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_PlaylistLogic", "../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_PriorityPlaylistLogic", "../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_StreamLogic", "../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_ScreenSaverImageLogic", "../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_ScreenSaverVideoLogic", "../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_TagLogic", "../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_RealTagLogic", "../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_TVPassThroughLogic", "../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_TVTunnerLogic", "../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_VideoLogic", "../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_VideoStreamLogic", "../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_WebPageLogic", "../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_Status", "../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusDisable", "../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusEnd", "../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusError", "../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusPlay", "../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusPlay_List", "../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusPlay_Media", "../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToAbort", "../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToAbort_List", "../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToAbort_Media", "../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay", "../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay_List", "../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay_Media", "../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToEnd", "../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToEnd_List", "../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToEnd_Media", "../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToPlay", "../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToPlay_List", "../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToPlay_Media", "../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToResume", "../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToResume_List", "../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToResume_Media", "../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToSuspend", "../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToSuspend_List", "../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToSuspend_Media", "../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusSelectNextChildToPlay", "../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusSuspended", "../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_Transition", "../../../../../app/ts/reusable/rm_coreservices/r_playlistcontroller/R_PlaylistController", "../../../../../app/ts/reusable/rm_coreservices/r_renderingcontroller/R_RenderingController", "../../../../../app/ts/reusable/rm_renderingservices/re_htmlzone/RE_HtmlZone", "../../../../../app/ts/reusable/rm_renderingservices/re_htmlzone/RE_HtmlZonePool", "../../../../../app/ts/reusable/rm_renderingservices/re_renderparams/RE_RenderParams_AllParameters", "../../../../../app/ts/reusable/rm_renderingservices/re_renderparams/RE_RenderParams_Identification", "../../../../../app/ts/reusable/rm_renderingservices/re_renderparams/RE_RenderParams_ItemPosAndSize", "../../../../../app/ts/reusable/rm_renderingservices/re_renderparams/RE_RenderParams_ContainerPosAndSize", "../../../../../app/ts/reusable/rm_renderingservices/re_renderparams/RE_RenderParams_Duration", "../../../../../app/ts/reusable/rm_renderingservices/re_renderparams/RE_RenderParams_Background", "../../../../../app/ts/reusable/rm_renderingservices/re_renderparams/RE_RenderParams_Image", "../../../../../app/ts/reusable/rm_renderingservices/re_renderparams/RE_RenderParams_WebImage", "../../../../../app/ts/reusable/rm_renderingservices/re_renderparams/RE_RenderParams_Video", "../../../../../app/ts/reusable/rm_renderingservices/re_renderparams/RE_RenderParams_VideoStream", "../../../../../app/ts/reusable/rm_renderingservices/re_renderparams/RE_RenderParams_Audio", "../../../../../app/ts/reusable/rm_renderingservices/re_renderparams/RE_RenderParams_WebPage", "../../../../../app/ts/reusable/rm_renderingservices/re_renderparams/RE_RenderParams_HtmlTemplate", "../../../../../app/ts/reusable/rm_renderingservices/re_renderparams/RE_RenderParams_FillRect", "../../../../../app/ts/reusable/rm_renderingservices/re_controlparams/RE_ControlParams_Prepare", "../../../../../app/ts/reusable/rm_renderingservices/re_controlparams/RE_ControlParams_PreparePool", "../../../../../app/ts/reusable/rm_renderingservices/re_controlparams/RE_ControlParams_Run", "../../../../../app/ts/reusable/rm_renderingservices/re_controlparams/RE_ControlParams_RunPool", "../../../../../app/ts/reusable/rm_renderingservices/re_controlparams/RE_ControlParams_Stop", "../../../../../app/ts/reusable/rm_renderingservices/re_controlparams/RE_ControlParams_StopPool", "../../../../../app/ts/reusable/rm_renderingservices/re_controlparams/RE_ControlParams_Status", "../../../../../app/ts/reusable/rm_renderingservices/re_controlparams/RE_ControlParams_StatusPool", "../../../../../app/ts/reusable/rm_coreservices/r_playlistcontroller/RE_PlaylistControllerConfig", "../../../../../app/ts/reusable/rm_coreservices/r_renderingcontroller/RE_RenderingControllerConfig", "../../../../../app/ts/reusable/rm_configurationservices/r_platformconfigurator/R_PlatformConfigurator", "../../../../../app/ts/reusable/rm_configurationservices/r_servicelocator/R_ServiceLocator", "../../../../../app/ts/reusable/rm_configurationservices/r_servicecontainer/R_ServiceContainer", "../../../../../app/ts/reusable/rm_configurationservices/r_servicelocator/IImpl_ServiceLocator_FactorySetup_R", "../../../../../app/ts/reusable/rm_configurationservices/r_servicelocator/IImpl_ServiceLocator_EntityCreation_R", "../../../../../app/ts/reusable/rm_configurationservices/r_servicelocator/IImpl_ServiceLocator_ServiceCreation_R"], function (require, exports, rmRenderingServicesRenderingZone, rmRenderingServicesRenderingZonePool, rmRenderingServicesImageRenderer, rmRenderingServicesImageRendererPool, rmRenderingServicesVideoRenderer, rmRenderingServicesVideoRendererPool, rmRenderingServicesVideoStreamRenderer, rmRenderingServicesVideoStreamRendererPool, rmRenderingServicesHtmlRenderer, rmRenderingServicesHtmlRendererPool, rmRenderingServicesHtmlTemplateRenderer, rmRenderingServicesHtmlTemplateRendererPool, rmRenderingServicesFlashRenderer, rmRenderingServicesFlashRendererPool, rmRenderingServicesScreenSaverRenderer, rmRenderingServicesScreenSaverRendererPool, rmRenderingServicesFillRectRenderer, rmRenderingServicesFillRectRendererPool, rmRenderingServicesTvHdmiPassThroughSrv, rmRenderingServicesTvHdmiPassThroughSrvPool, rmRenderingServicesBackgroundRenderer, rmRenderingServicesBackgroundRendererPool, rmGeneralService, rmGeneralError, rmGeneralContext, rmGeneralProperty, rmGeneralProperties, rmGeneralFactoryDescription, rmGeneralFactoryDescriptions, rmGeneralServices, rmGeneralServiceFactories, rmGeneralEntityFactories, rmGeneralDateTime, rmGeneralTimeZone, rmGeneralSoundProperties, rmGeneralScreenProperties, rmGeneralAppServerProperties, rmGeneralFileInfo, rmGeneralNetworkProperties, rmGeneralNetworkCardProperties, rmGeneralNetworkProxyProperties, rmGeneralWifiConnectionInfo, rmGeneralFirmwareProperties, rmGeneralBeaconInfo, rmGeneralCaptureScreenInfo, rmGeneralEddystoneInfo, rmGeneralPlatformInfo, rmGeneralSystemUsageInfo, rmGeneralWifiSoftAppInfo, rmGeneralFailureModeInfo, rmGeneralPowerSaveModeInfo, rmGeneralTileInfo, rmGeneralSystemMonitorInfo, rmGeneralUsageData, rmGeneralUsagePermissions, rmGeneralDeviceTimerInfo, rmGeneralShaProperties, rmGeneralXmlJsonObject, rmGeneralXmlDocument, rmGeneralXmlNode, rmGeneralQueue, rmGeneralEvent, rmGeneralRandom, rmGeneralDiffusion, rmPlaybackHardwareSettings, rmPlaybackOpeningHours, rmPlaybackDayOpeningHours, rmPlaybackScreenSaverConfig, rmGeneralPlaybackGlobalConfig, rmCoreServicesMainPlaylist, rmCoreServicesTagManager, rmCoreServicesPlaylistItem, rmCoreServicesPlaylistItemContainer, rmCoreServicesPlaylistItemDesign, rmCoreServicesPlaylistItemDesignZone, rmCoreServicesPlaylistItemEvent, rmCoreServicesPlaylistItemEvents, rmCoreServicesPlaylistItemFillRect, rmCoreServicesPlaylistItemFlash, rmCoreServicesPlaylistItemHtmlTemplate, rmCoreServicesPlaylistItemImage, rmCoreServicesPlaylistItemPlaylist, rmCoreServicesPlaylistItemPriorityPlaylist, rmCoreServicesPlaylistItemStream, rmCoreServicesPlaylistItemScreenSaverImage, rmCoreServicesPlaylistItemScreenSaverVideo, rmCoreServicesPlaylistItemTag, rmCoreServicesPlaylistItemRealTag, rmCoreServicesPlaylistItemTVPassThrough, rmCoreServicesPlaylistItemTVTunner, rmCoreServicesPlaylistItemVideo, rmCoreServicesPlaylistItemVideoStream, rmCoreServicesPlaylistItemWebPage, rmCoreServicesMainPlaylistLogic, rmCoreServicesTagManagerLogic, rmCoreServicesPlaylistItemLogic, rmCoreServicesPlaylistItemContainerLogic, rmCoreServicesPlaylistItemDesignLogic, rmCoreServicesPlaylistItemDesignZoneLogic, rmCoreServicesPlaylistItemDesignMainZoneLogic, rmCoreServicesPlaylistItemEventLogic, rmCoreServicesPlaylistItemEventsLogic, rmCoreServicesPlaylistItemFillRectLogic, rmCoreServicesPlaylistItemFlashLogic, rmCoreServicesPlaylistItemHtmlTemplateLogic, rmCoreServicesPlaylistItemImageLogic, rmCoreServicesPlaylistItemPlaylistLogic, rmCoreServicesPlaylistItemPriorityPlaylistLogic, rmCoreServicesPlaylistItemStreamLogic, rmCoreServicesPlaylistItemScreenSaverImageLogic, rmCoreServicesPlaylistItemScreenSaverVideoLogic, rmCoreServicesPlaylistItemTagLogic, rmCoreServicesPlaylistItemRealTagLogic, rmCoreServicesPlaylistItemTVPassThroughLogic, rmCoreServicesPlaylistItemTVTunnerLogic, rmCoreServicesPlaylistItemVideoLogic, rmCoreServicesPlaylistItemVideoStreamLogic, rmCoreServicesPlaylistItemWebPageLogic, rmCoreServicesPlaylistItemStatus, rmCoreServicesPlaylistItemStatusDisable, rmCoreServicesPlaylistItemStatusEnd, rmCoreServicesPlaylistItemStatusError, rmCoreServicesPlaylistItemStatusPlay, rmCoreServicesPlaylistItemStatusPlay_List, rmCoreServicesPlaylistItemStatusPlay_Media, rmCoreServicesPlaylistItemStatusRequestToAbort, rmCoreServicesPlaylistItemStatusRequestToAbort_List, rmCoreServicesPlaylistItemStatusRequestToAbort_Media, rmCoreServicesPlaylistItemStatusRequestToAbortOrEndBeforePlay, rmCoreServicesPlaylistItemStatusRequestToAbortOrEndBeforePlay_List, rmCoreServicesPlaylistItemStatusRequestToAbortOrEndBeforePlay_Media, rmCoreServicesPlaylistItemStatusRequestToEnd, rmCoreServicesPlaylistItemStatusRequestToEnd_List, rmCoreServicesPlaylistItemStatusRequestToEnd_Media, rmCoreServicesPlaylistItemStatusRequestToPlay, rmCoreServicesPlaylistItemStatusRequestToPlay_List, rmCoreServicesPlaylistItemStatusRequestToPlay_Media, rmCoreServicesPlaylistItemStatusRequestToResume, rmCoreServicesPlaylistItemStatusRequestToResume_List, rmCoreServicesPlaylistItemStatusRequestToResume_Media, rmCoreServicesPlaylistItemStatusRequestToSuspend, rmCoreServicesPlaylistItemStatusRequestToSuspend_List, rmCoreServicesPlaylistItemStatusRequestToSuspend_Media, rmCoreServicesPlaylistItemStatusSelectNextChildToPlay, rmCoreServicesPlaylistItemStatusSuspended, rmCoreServicesPlaylistItemTransition, rmCoreServicesPlaylistController, rmCoreServicesRenderingController, rmRenderingServicesHtmlZone, rmRenderingServicesHtmlZonePool, rmRenderParametersAllParameters, rmRenderParametersIdentification, rmRenderParametersItemPosAndSize, rmRenderParametersContainerPosAndSize, rmRenderParametersDuration, rmRenderParametersBackground, rmRenderParametersImage, rmRenderParametersWebImage, rmRenderParametersVideo, rmRenderParametersVideoStream, rmRenderParametersAudio, rmRenderParametersWebPage, rmRenderParametersHtmlTemplate, rmRenderParametersFillRect, rmControlPrepareParams, rmControlPrepareParamsPool, rmControlRunParams, rmControlRunParamsPool, rmControlStopParams, rmControlStopParamsPool, rmControlStatusParams, rmControlStatusParamsPool, rmPlaylistControllerConfig, rmRenderingControllerConfig, rmConfigurationServicesPlatformConfigurator, rmConfigurationServicesServiceLocator, rmConfigurationServicesServiceContainer, rmConfigurationServices2, rmConfigurationServices3, rmConfigurationServices4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    //-------------------------------------------------------
    var rm_configurationservices;
    (function (rm_configurationservices) {
        var R_ServiceLocator = /** @class */ (function (_super) {
            __extends(R_ServiceLocator, _super);
            //----------- composants 
            //----------- constructor 
            function R_ServiceLocator(aFactoryDescription, aServiceContainer, aLogService, error) {
                var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
                _this._iFactorySetup = new rmConfigurationServices2.rm_configurationservices.IImpl_ServiceLocator_FactorySetup_R(_this);
                _this._iEntityCreation = new rmConfigurationServices3.rm_configurationservices.IImpl_ServiceLocator_EntityCreation_R(_this);
                _this._iServiceCreation = new rmConfigurationServices4.rm_configurationservices.IImpl_ServiceLocator_ServiceCreation_R(_this);
                _this._srvFactories = _this.createDefaultServiceFactories(error); //new Array<amGeneralFactoryService.am_general.AFactory_Service>(); //temporary
                _this._entFactories = _this.createDefaultEntityFactories(error); //new Array<amGeneralFactoryEntity.am_general.AFactory_Entity>();
                return _this;
            }
            //----------------------------------
            R_ServiceLocator.prototype.injectDependencies = function (aServiceContainer, aServiceLocator, aLogService, error) {
                return 0;
            };
            //------------------
            R_ServiceLocator.prototype.addServiceFactory = function (aServiceFactory, error) {
                return this._srvFactories.addServiceFactory(aServiceFactory, error);
            };
            //------------------
            R_ServiceLocator.prototype.addEntityFactory = function (aEntityFactory, error) {
                return this._entFactories.addEntityFactory(aEntityFactory, error);
            };
            //----------------------
            R_ServiceLocator.prototype.createAllStartupServices = function (error) {
                var listSrvFactories = this._srvFactories.getServiceFactories(error);
                var idx = 0;
                for (var _i = 0, listSrvFactories_1 = listSrvFactories; _i < listSrvFactories_1.length; _i++) {
                    var aServiceFactory = listSrvFactories_1[_i];
                    //aServiceFactory.createService(aServiceFactory.get...);
                    //idx++;
                    //document.getElementById("maindiv").innerHTML += "<h3>" + idx + ". " + aServiceFactory.getFactoryName() + "</h3>";
                    //alert(aServiceFactory.getFactoryName());
                }
            };
            //-------------------
            R_ServiceLocator.prototype.addCreatedServiceFactory = function (aServiceFactory, idxFactory, nbExpectedFactories, error, bTimeOut) {
                document.getElementById("maindiv").innerHTML += "<p>" + idxFactory + ". " + aServiceFactory.getFactoryName() + "</p>";
                this._iFactorySetup.addServiceFactory(aServiceFactory, error);
            };
            //-------------- setup Service Factories;
            R_ServiceLocator.prototype.setupServiceFactories = function (factoryDescriptions, error) {
                var listSrvFactoryDescriptions = factoryDescriptions.getFactoryDescriptions(error);
                var promises = new Array();
                var aSrvLocator = this;
                var idxFactory = 0;
                var nbExpectedFactories = listSrvFactoryDescriptions.length;
                var _loop_1 = function (aServiceFactoryDesc) {
                    //----------------------------------------------------------------
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
                    //----------------------------------------------------------------
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
                    //----------------------------------------------------------------
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
                    //----------------------------------------------------------------
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
                    //----------------------------------------------------------------
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
                    //----------------------------------------------------------------
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
                    //----------------------------------------------------------------
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
                    //----------------------------------------------------------------
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
                    //----------------------------------------------------------------
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
                    //----------------------------------------------------------------
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
                    //----------------------------------------------------------------
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
                    //----------------------------------------------------------------
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
                    //----------------------------------------------------------------
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
                    //----------------------------------------------------------------
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
                    //----------------------------------------------------------------
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
                    //----------------------------------------------------------------
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
                    //----------------------------------------------------------------
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
                    //----------------------------------------------------------------
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
                    //----------------------------------------------------------------
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
                    //----------------------------------------------------------------
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
                    //----------------------------------------------------------------
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
                    //----------------------------------------------------------------
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
                    //----------------------------------------------------------------
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
                    //----------------------------------------------------------------
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
                    //----------------------------------------------------------------
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
                    //----------------------------------------------------------------
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
                    //----------------------------------------------------------------
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
                    //----------------------------------------------------------------
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
                    //----------------------------------------------------------------
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
                    //----------------------------------------------------------------
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
                    //----------------------------------------------------------------
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
                    //----------------------------------------------------------------
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
                //-------------------------------
                /*
                Promise.all(promises).then(values => {
                  //console.log(values);
                  //----------------------------
                  this._iServiceCreation.createAllStartupServices(error);
                  if (error.isError())
                  {
                    alert("Fatal Error: R_ServiceContainer.startup cannot create all startup services in aServiceLocator._iServiceCreation.createAllStartupServices");
                    return ;
                  }
                }).catch(){
                  alert("Fatal Error: promise.all.catch R_ServiceContainer.startup cannot create all startup services in aServiceLocator._iServiceCreation.createAllStartupServices");
                };*/
                //listSrvFactoryDescriptions.forEach( (crtEntFactory, index) => {
                // to do: with conditional import  create each related service-factory
                //});  
            };
            //-------------- setup Entity Factories;
            R_ServiceLocator.prototype.setupEntityFactories = function (factoryDescriptions, error) {
                var listEntFactoryDescriptions = factoryDescriptions.getFactoryDescriptions(error);
                listEntFactoryDescriptions.forEach(function (crtEntFactory, index) {
                    // to do: with conditional import  create each related entity-factory
                });
            };
            //----------------------------------
            //  Entity Creation 
            //----------------------------------
            //-------------- create Entity
            R_ServiceLocator.prototype.createEntity = function (entityName, error) {
                this._entFactories.getEntityFactories(error).forEach(function (crtEntFactory, index) {
                    // to do: with conditional import  call crtEntFactory.createEntity till one creation will succeed
                });
                return null;
            };
            //----------- create a default Error object
            R_ServiceLocator.prototype.createDefaultError = function () {
                return new rmGeneralError.rm_general.R_Error();
            };
            //----------- create a default Error object
            R_ServiceLocator.startupCreateDefaultError = function () {
                return new rmGeneralError.rm_general.R_Error();
            };
            //----------- create a default Error object
            R_ServiceLocator.prototype.createDefaultContext = function () {
                return new rmGeneralContext.rm_general.R_Context();
            };
            //----------- create a default Context object
            R_ServiceLocator.startupCreateDefaultContext = function () {
                return new rmGeneralContext.rm_general.R_Context();
            };
            //----------- create a default Property object
            R_ServiceLocator.prototype.createDefaultProperty = function (error) {
                return new rmGeneralProperty.rm_general.R_Property();
            };
            //----------- create a default list of Properties
            R_ServiceLocator.prototype.createDefaultProperties = function (error) {
                return new rmGeneralProperties.rm_general.R_Properties();
            };
            //----------- create a default list of Factory Descriptions
            R_ServiceLocator.prototype.createDefaultFactoryDescriptions = function (error) {
                return new rmGeneralFactoryDescriptions.rm_general.R_FactoryDescriptions();
            };
            //----------- create a default Factory Description
            R_ServiceLocator.prototype.createDefaultFactoryDescription = function (error) {
                return new rmGeneralFactoryDescription.rm_general.R_FactoryDescription();
            };
            //----------- create a default Factory Description
            R_ServiceLocator.startupCreateDefaultFactoryDescription = function (error) {
                return new rmGeneralFactoryDescription.rm_general.R_FactoryDescription();
            };
            //----------- create a default list of Service factories
            R_ServiceLocator.prototype.createDefaultServiceFactories = function (error) {
                return new rmGeneralServiceFactories.rm_general.R_ServiceFactories();
            };
            //----------- create a default list of Service factories
            R_ServiceLocator.prototype.createDefaultEntityFactories = function (error) {
                return new rmGeneralEntityFactories.rm_general.R_EntityFactories();
            };
            //----------- create a default date-time object
            R_ServiceLocator.prototype.createDefaultDateTime = function (error) {
                return new rmGeneralDateTime.rm_general.R_DateTime();
            };
            //----------- create a default time-zone object
            R_ServiceLocator.prototype.createDefaultTimeZone = function (error) {
                return new rmGeneralTimeZone.rm_general.R_TimeZone();
            };
            //----------- create a default audio-properties object
            R_ServiceLocator.prototype.createDefaultSoundProperties = function (error) {
                return new rmGeneralSoundProperties.rm_general.R_SoundProperties();
            };
            //----------- create a default screen-properties object
            R_ServiceLocator.prototype.createDefaultScreenProperties = function (error) {
                return new rmGeneralScreenProperties.rm_general.R_ScreenProperties();
            };
            //----------- create a default appserver-properties object
            R_ServiceLocator.prototype.createDefaultAppServerProperties = function (error) {
                return new rmGeneralAppServerProperties.rm_general.R_AppServerProperties();
            };
            //----------- create a default appserver-properties object
            R_ServiceLocator.prototype.createDefaultFileInfo = function (error) {
                return new rmGeneralFileInfo.rm_general.R_FileInfo();
            };
            //----------- create a default network-properties object
            R_ServiceLocator.prototype.createDefaultNetworkProperties = function (error) {
                return new rmGeneralNetworkProperties.rm_general.R_NetworkProperties();
            };
            //----------- create a default network-card-properties object
            R_ServiceLocator.prototype.createDefaultNetworkCardProperties = function (error) {
                return new rmGeneralNetworkCardProperties.rm_general.R_NetworkCardProperties();
            };
            //----------- create a default network-proxy-properties object
            R_ServiceLocator.prototype.createDefaultNetworkProxyProperties = function (error) {
                return new rmGeneralNetworkProxyProperties.rm_general.R_NetworkProxyProperties();
            };
            //----------- create a default wifi-connection-info object
            R_ServiceLocator.prototype.createDefaultWifiConnectionInfo = function (error) {
                return new rmGeneralWifiConnectionInfo.rm_general.R_WifiConnectionInfo();
            };
            //----------- create a default appserver-properties object
            R_ServiceLocator.prototype.createDefaultFirmwareProperties = function (error) {
                return new rmGeneralFirmwareProperties.rm_general.R_FirmwareProperties();
            };
            //----------- create a default beacon-info object
            R_ServiceLocator.prototype.createDefaultBeaconInfo = function (error) {
                return new rmGeneralBeaconInfo.rm_general.R_BeaconInfo();
            };
            //----------- create a default eddystone-info object
            R_ServiceLocator.prototype.createDefaultEddystoneInfo = function (error) {
                return new rmGeneralEddystoneInfo.rm_general.R_EddystoneInfo();
            };
            //----------- create a default capture-screen-info object
            R_ServiceLocator.prototype.createDefaultCaptureScreenInfo = function (error) {
                return new rmGeneralCaptureScreenInfo.rm_general.R_CaptureScreenInfo();
            };
            //----------- create a default platform-info object
            R_ServiceLocator.prototype.createDefaultPlatformInfo = function (error) {
                return new rmGeneralPlatformInfo.rm_general.R_PlatformInfo();
            };
            //----------- create a default system-usage-info object
            R_ServiceLocator.prototype.createDefaultSystemUsageInfo = function (error) {
                return new rmGeneralSystemUsageInfo.rm_general.R_SystemUsageInfo();
            };
            //----------- create a default system-usage-info object
            R_ServiceLocator.prototype.createDefaultWifiSoftAppInfo = function (error) {
                return new rmGeneralWifiSoftAppInfo.rm_general.R_WifiSoftAppInfo();
            };
            //----------- create a default failure-mode-info object
            R_ServiceLocator.prototype.createDefaultFailureModeInfo = function (error) {
                return new rmGeneralFailureModeInfo.rm_general.R_FailureModeInfo();
            };
            //----------- create a default power-save-mode-info object
            R_ServiceLocator.prototype.createDefaultPowerSaveModeInfo = function (error) {
                return new rmGeneralPowerSaveModeInfo.rm_general.R_PowerSaveModeInfo();
            };
            //----------- create a default tile-info object
            R_ServiceLocator.prototype.createDefaultTileInfo = function (error) {
                return new rmGeneralTileInfo.rm_general.R_TileInfo();
            };
            //----------- create a default system-monitor-info object
            R_ServiceLocator.prototype.createDefaultSystemMonitorInfo = function (error) {
                return new rmGeneralSystemMonitorInfo.rm_general.R_SystemMonitorInfo();
            };
            //----------- create a default usage-permissions object
            R_ServiceLocator.prototype.createDefaultUsageData = function (error) {
                return new rmGeneralUsageData.rm_general.R_UsageData();
            };
            //----------- create a default usage-permissions object
            R_ServiceLocator.prototype.createDefaultUsagePermissions = function (error) {
                return new rmGeneralUsagePermissions.rm_general.R_UsagePermissions();
            };
            //----------- create a default device-timer-info object
            R_ServiceLocator.prototype.createDefaultDeviceTimerInfo = function (error) {
                return new rmGeneralDeviceTimerInfo.rm_general.R_DeviceTimerInfo();
            };
            //----------- create a default sha-properties object
            R_ServiceLocator.prototype.createDefaultShaProperties = function (error) {
                return new rmGeneralShaProperties.rm_general.R_ShaProperties();
            };
            //----------- create a default xml json object
            R_ServiceLocator.prototype.createDefaultXmlJsonObject = function (error) {
                return new rmGeneralXmlJsonObject.rm_general.R_XmlJsonObject();
            };
            //----------------------
            // xml  objects
            //----------------------
            //----------- create a default xml document
            R_ServiceLocator.prototype.createDefaultXmlDocument = function (error) {
                return new rmGeneralXmlDocument.rm_general.RE_XmlDocument();
            };
            //----------- create a default xml node
            R_ServiceLocator.prototype.createDefaultXmlNode = function (error) {
                return new rmGeneralXmlNode.rm_general.RE_XmlNode();
            };
            //----------------------
            //  queue + event + random + diffusion
            //----------------------
            //----------- create a default queue
            R_ServiceLocator.prototype.createDefaultQueue = function (error) {
                return new rmGeneralQueue.rm_general.RE_Queue();
            };
            //----------- create a default event
            R_ServiceLocator.prototype.createDefaultEvent = function (error) {
                return new rmGeneralEvent.rm_general.RE_Event();
            };
            //----------- create a default random
            R_ServiceLocator.prototype.createDefaultRandom = function (error) {
                return new rmGeneralRandom.rm_general.RE_Random();
            };
            //----------- create a default diffusion
            R_ServiceLocator.prototype.createDefaultDiffusion = function (error) {
                return new rmGeneralDiffusion.rm_general.RE_Diffusion();
            };
            //----------------------
            // playback config objects
            //----------------------
            //----------- create hardware settings 
            R_ServiceLocator.prototype.createDefaultHardwareSettings = function (error) {
                return new rmPlaybackHardwareSettings.rm_playback.R_HardwareSettings();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultOpeningHours = function (error) {
                return new rmPlaybackOpeningHours.rm_playback.R_OpeningHours();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultDayOpeningHours = function (error) {
                return new rmPlaybackDayOpeningHours.rm_playback.R_DayOpeningHours();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultScreenSaverConfig = function (error) {
                return new rmPlaybackScreenSaverConfig.rm_playback.RE_ScreenSaverConfig();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultPlaybackGlobalConfig = function (error) {
                return new rmGeneralPlaybackGlobalConfig.rm_playback.RE_PlaybackGlobalConfig();
            };
            //----------------------------------------
            //    playlist items creators
            //----------------------------------------
            //------------ 
            R_ServiceLocator.prototype.createDefaultPlaylistItem = function (error) {
                return new rmCoreServicesPlaylistItem.rm_coreservices.RE_PlaylistItem();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultPlaylistItem_Container = function (error) {
                return new rmCoreServicesPlaylistItemContainer.rm_coreservices.RE_PlaylistItem_Container();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultPlaylistItem_Design = function (error) {
                return new rmCoreServicesPlaylistItemDesign.rm_coreservices.RE_PlaylistItem_Design();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultPlaylistItem_DesignZone = function (error) {
                return new rmCoreServicesPlaylistItemDesignZone.rm_coreservices.RE_PlaylistItem_DesignZone();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultPlaylistItem_Event = function (error) {
                return new rmCoreServicesPlaylistItemEvent.rm_coreservices.RE_PlaylistItem_Event();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultPlaylistItem_Events = function (error) {
                return new rmCoreServicesPlaylistItemEvents.rm_coreservices.RE_PlaylistItem_Events();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultPlaylistItem_FillRect = function (error) {
                return new rmCoreServicesPlaylistItemFillRect.rm_coreservices.RE_PlaylistItem_FillRect();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultPlaylistItem_Flash = function (error) {
                return new rmCoreServicesPlaylistItemFlash.rm_coreservices.RE_PlaylistItem_Flash();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultPlaylistItem_HtmlTemplate = function (error) {
                return new rmCoreServicesPlaylistItemHtmlTemplate.rm_coreservices.RE_PlaylistItem_HtmlTemplate();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultPlaylistItem_Image = function (error) {
                return new rmCoreServicesPlaylistItemImage.rm_coreservices.RE_PlaylistItem_Image();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultPlaylistItem_Playlist = function (error) {
                return new rmCoreServicesPlaylistItemPlaylist.rm_coreservices.RE_PlaylistItem_Playlist();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultPlaylistItem_PriorityPlaylist = function (error) {
                return new rmCoreServicesPlaylistItemPriorityPlaylist.rm_coreservices.RE_PlaylistItem_PriorityPlaylist();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultPlaylistItem_Stream = function (error) {
                return new rmCoreServicesPlaylistItemStream.rm_coreservices.RE_PlaylistItem_Stream();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultPlaylistItem_ScreenSaverImage = function (error) {
                return new rmCoreServicesPlaylistItemScreenSaverImage.rm_coreservices.RE_PlaylistItem_ScreenSaverImage();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultPlaylistItem_ScreenSaverVideo = function (error) {
                return new rmCoreServicesPlaylistItemScreenSaverVideo.rm_coreservices.RE_PlaylistItem_ScreenSaverVideo();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultPlaylistItem_Tag = function (error) {
                return new rmCoreServicesPlaylistItemTag.rm_coreservices.RE_PlaylistItem_Tag();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultPlaylistItem_RealTag = function (error) {
                return new rmCoreServicesPlaylistItemRealTag.rm_coreservices.RE_PlaylistItem_RealTag();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultPlaylistItem_TVPassThrough = function (error) {
                return new rmCoreServicesPlaylistItemTVPassThrough.rm_coreservices.RE_PlaylistItem_TVPassThrough();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultPlaylistItem_TVTunner = function (error) {
                return new rmCoreServicesPlaylistItemTVTunner.rm_coreservices.RE_PlaylistItem_TVTunner();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultPlaylistItem_Video = function (error) {
                return new rmCoreServicesPlaylistItemVideo.rm_coreservices.RE_PlaylistItem_Video();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultPlaylistItem_VideoStream = function (error) {
                return new rmCoreServicesPlaylistItemVideoStream.rm_coreservices.RE_PlaylistItem_VideoStream();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultPlaylistItem_WebPage = function (error) {
                return new rmCoreServicesPlaylistItemWebPage.rm_coreservices.RE_PlaylistItem_WebPage();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultMainPlaylist = function (error) {
                return new rmCoreServicesMainPlaylist.rm_coreservices.RE_MainPlaylist();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultTagManager = function (error) {
                return new rmCoreServicesTagManager.rm_coreservices.RE_TagManager();
            };
            //----------------------------------------
            //    playlist items logic creators
            //----------------------------------------
            //------------ 
            R_ServiceLocator.prototype.createDefaultPlaylistItemLogic = function (error) {
                return new rmCoreServicesPlaylistItemLogic.rm_coreservices.RE_PlaylistItem_Logic();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultPlaylistItem_ContainerLogic = function (error) {
                return new rmCoreServicesPlaylistItemContainerLogic.rm_coreservices.RE_PlaylistItem_ContainerLogic();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultPlaylistItem_DesignLogic = function (error) {
                return new rmCoreServicesPlaylistItemDesignLogic.rm_coreservices.RE_PlaylistItem_DesignLogic();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultPlaylistItem_DesignZoneLogic = function (error) {
                return new rmCoreServicesPlaylistItemDesignZoneLogic.rm_coreservices.RE_PlaylistItem_DesignZoneLogic();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultPlaylistItem_DesignMainZoneLogic = function (error) {
                return new rmCoreServicesPlaylistItemDesignMainZoneLogic.rm_coreservices.RE_PlaylistItem_DesignMainZoneLogic();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultPlaylistItem_EventLogic = function (error) {
                return new rmCoreServicesPlaylistItemEventLogic.rm_coreservices.RE_PlaylistItem_EventLogic();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultPlaylistItem_EventsLogic = function (error) {
                return new rmCoreServicesPlaylistItemEventsLogic.rm_coreservices.RE_PlaylistItem_EventsLogic();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultPlaylistItem_FillRectLogic = function (error) {
                return new rmCoreServicesPlaylistItemFillRectLogic.rm_coreservices.RE_PlaylistItem_FillRectLogic();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultPlaylistItem_FlashLogic = function (error) {
                return new rmCoreServicesPlaylistItemFlashLogic.rm_coreservices.RE_PlaylistItem_FlashLogic();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultPlaylistItem_HtmlTemplateLogic = function (error) {
                return new rmCoreServicesPlaylistItemHtmlTemplateLogic.rm_coreservices.RE_PlaylistItem_HtmlTemplateLogic();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultPlaylistItem_ImageLogic = function (error) {
                return new rmCoreServicesPlaylistItemImageLogic.rm_coreservices.RE_PlaylistItem_ImageLogic();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultPlaylistItem_PlaylistLogic = function (error) {
                return new rmCoreServicesPlaylistItemPlaylistLogic.rm_coreservices.RE_PlaylistItem_PlaylistLogic();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultPlaylistItem_PriorityPlaylistLogic = function (error) {
                return new rmCoreServicesPlaylistItemPriorityPlaylistLogic.rm_coreservices.RE_PlaylistItem_PriorityPlaylistLogic();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultPlaylistItem_StreamLogic = function (error) {
                return new rmCoreServicesPlaylistItemStreamLogic.rm_coreservices.RE_PlaylistItem_StreamLogic();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultPlaylistItem_ScreenSaverImageLogic = function (error) {
                return new rmCoreServicesPlaylistItemScreenSaverImageLogic.rm_coreservices.RE_PlaylistItem_ScreenSaverImageLogic();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultPlaylistItem_ScreenSaverVideoLogic = function (error) {
                return new rmCoreServicesPlaylistItemScreenSaverVideoLogic.rm_coreservices.RE_PlaylistItem_ScreenSaverVideoLogic();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultPlaylistItem_TagLogic = function (error) {
                return new rmCoreServicesPlaylistItemTagLogic.rm_coreservices.RE_PlaylistItem_TagLogic();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultPlaylistItem_RealTagLogic = function (error) {
                return new rmCoreServicesPlaylistItemRealTagLogic.rm_coreservices.RE_PlaylistItem_RealTagLogic();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultPlaylistItem_TVPassThroughLogic = function (error) {
                return new rmCoreServicesPlaylistItemTVPassThroughLogic.rm_coreservices.RE_PlaylistItem_TVPassThroughLogic();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultPlaylistItem_TVTunnerLogic = function (error) {
                return new rmCoreServicesPlaylistItemTVTunnerLogic.rm_coreservices.RE_PlaylistItem_TVTunnerLogic();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultPlaylistItem_VideoLogic = function (error) {
                return new rmCoreServicesPlaylistItemVideoLogic.rm_coreservices.RE_PlaylistItem_VideoLogic();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultPlaylistItem_VideoStreamLogic = function (error) {
                return new rmCoreServicesPlaylistItemVideoStreamLogic.rm_coreservices.RE_PlaylistItem_VideoStreamLogic();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultPlaylistItem_WebPageLogic = function (error) {
                return new rmCoreServicesPlaylistItemWebPageLogic.rm_coreservices.RE_PlaylistItem_WebPageLogic();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultMainPlaylistLogic = function (error) {
                return new rmCoreServicesMainPlaylistLogic.rm_coreservices.RE_MainPlaylist_Logic();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultTagManagerLogic = function (error) {
                return new rmCoreServicesTagManagerLogic.rm_coreservices.RE_TagManager_Logic();
            };
            //----------------------------------------
            //    create playlist item status
            //----------------------------------------
            //------------ 
            R_ServiceLocator.prototype.createDefaultPlaylistItemStatus = function (error) {
                return new rmCoreServicesPlaylistItemStatus.rm_coreservices.RE_PlaylistItem_Status();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultPlaylistItemStatusDisable = function (error) {
                return new rmCoreServicesPlaylistItemStatusDisable.rm_coreservices.RE_PlaylistItem_StatusDisable();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultPlaylistItemStatusEnd = function (error) {
                return new rmCoreServicesPlaylistItemStatusEnd.rm_coreservices.RE_PlaylistItem_StatusEnd();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultPlaylistItemStatusError = function (error) {
                return new rmCoreServicesPlaylistItemStatusError.rm_coreservices.RE_PlaylistItem_StatusError();
            };
            R_ServiceLocator.prototype.createDefaultPlaylistItemStatusPlay = function (error) {
                return new rmCoreServicesPlaylistItemStatusPlay.rm_coreservices.RE_PlaylistItem_StatusPlay();
            };
            R_ServiceLocator.prototype.createDefaultPlaylistItemStatusPlay_List = function (error) {
                return new rmCoreServicesPlaylistItemStatusPlay_List.rm_coreservices.RE_PlaylistItem_StatusPlay_List();
            };
            R_ServiceLocator.prototype.createDefaultPlaylistItemStatusPlay_Media = function (error) {
                return new rmCoreServicesPlaylistItemStatusPlay_Media.rm_coreservices.RE_PlaylistItem_StatusPlay_Media();
            };
            R_ServiceLocator.prototype.createDefaultPlaylistItemStatusRequestToAbort = function (error) {
                return new rmCoreServicesPlaylistItemStatusRequestToAbort.rm_coreservices.RE_PlaylistItem_StatusRequestToAbort();
            };
            R_ServiceLocator.prototype.createDefaultPlaylistItemStatusRequestToAbort_List = function (error) {
                return new rmCoreServicesPlaylistItemStatusRequestToAbort_List.rm_coreservices.RE_PlaylistItem_StatusRequestToAbort_List();
            };
            R_ServiceLocator.prototype.createDefaultPlaylistItemStatusRequestToAbort_Media = function (error) {
                return new rmCoreServicesPlaylistItemStatusRequestToAbort_Media.rm_coreservices.RE_PlaylistItem_StatusRequestToAbort_Media();
            };
            R_ServiceLocator.prototype.createDefaultPlaylistItemStatusRequestToAbortOrEndBeforePlay = function (error) {
                return new rmCoreServicesPlaylistItemStatusRequestToAbortOrEndBeforePlay.rm_coreservices.RE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay();
            };
            R_ServiceLocator.prototype.createDefaultPlaylistItemStatusRequestToAbortOrEndBeforePlay_List = function (error) {
                return new rmCoreServicesPlaylistItemStatusRequestToAbortOrEndBeforePlay_List.rm_coreservices.RE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay_List();
            };
            R_ServiceLocator.prototype.createDefaultPlaylistItemStatusRequestToAbortOrEndBeforePlay_Media = function (error) {
                return new rmCoreServicesPlaylistItemStatusRequestToAbortOrEndBeforePlay_Media.rm_coreservices.RE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay_Media();
            };
            R_ServiceLocator.prototype.createDefaultPlaylistItemStatusRequestToEnd = function (error) {
                return new rmCoreServicesPlaylistItemStatusRequestToEnd.rm_coreservices.RE_PlaylistItem_StatusRequestToEnd();
            };
            R_ServiceLocator.prototype.createDefaultPlaylistItemStatusRequestToEnd_List = function (error) {
                return new rmCoreServicesPlaylistItemStatusRequestToEnd_List.rm_coreservices.RE_PlaylistItem_StatusRequestToEnd_List();
            };
            R_ServiceLocator.prototype.createDefaultPlaylistItemStatusRequestToEnd_Media = function (error) {
                return new rmCoreServicesPlaylistItemStatusRequestToEnd_Media.rm_coreservices.RE_PlaylistItem_StatusRequestToEnd_Media();
            };
            R_ServiceLocator.prototype.createDefaultPlaylistItemStatusRequestToPlay = function (error) {
                return new rmCoreServicesPlaylistItemStatusRequestToPlay.rm_coreservices.RE_PlaylistItem_StatusRequestToPlay();
            };
            R_ServiceLocator.prototype.createDefaultPlaylistItemStatusRequestToPlay_List = function (error) {
                return new rmCoreServicesPlaylistItemStatusRequestToPlay_List.rm_coreservices.RE_PlaylistItem_StatusRequestToPlay_List();
            };
            R_ServiceLocator.prototype.createDefaultPlaylistItemStatusRequestToPlay_Media = function (error) {
                return new rmCoreServicesPlaylistItemStatusRequestToPlay_Media.rm_coreservices.RE_PlaylistItem_StatusRequestToPlay_Media();
            };
            R_ServiceLocator.prototype.createDefaultPlaylistItemStatusRequestToResume = function (error) {
                return new rmCoreServicesPlaylistItemStatusRequestToResume.rm_coreservices.RE_PlaylistItem_StatusRequestToResume();
            };
            R_ServiceLocator.prototype.createDefaultPlaylistItemStatusRequestToResume_List = function (error) {
                return new rmCoreServicesPlaylistItemStatusRequestToResume_List.rm_coreservices.RE_PlaylistItem_StatusRequestToResume_List();
            };
            R_ServiceLocator.prototype.createDefaultPlaylistItemStatusRequestToResume_Media = function (error) {
                return new rmCoreServicesPlaylistItemStatusRequestToResume_Media.rm_coreservices.RE_PlaylistItem_StatusRequestToResume_Media();
            };
            R_ServiceLocator.prototype.createDefaultPlaylistItemStatusRequestToSuspend = function (error) {
                return new rmCoreServicesPlaylistItemStatusRequestToSuspend.rm_coreservices.RE_PlaylistItem_StatusRequestToSuspend();
            };
            R_ServiceLocator.prototype.createDefaultPlaylistItemStatusRequestToSuspend_List = function (error) {
                return new rmCoreServicesPlaylistItemStatusRequestToSuspend_List.rm_coreservices.RE_PlaylistItem_StatusRequestToSuspend_List();
            };
            R_ServiceLocator.prototype.createDefaultPlaylistItemStatusRequestToSuspend_Media = function (error) {
                return new rmCoreServicesPlaylistItemStatusRequestToSuspend_Media.rm_coreservices.RE_PlaylistItem_StatusRequestToSuspend_Media();
            };
            R_ServiceLocator.prototype.createDefaultPlaylistItemStatusSelectNextChildToPlay = function (error) {
                return new rmCoreServicesPlaylistItemStatusSelectNextChildToPlay.rm_coreservices.RE_PlaylistItem_StatusSelectNextChildToPlay();
            };
            R_ServiceLocator.prototype.createDefaultPlaylistItemStatusSuspended = function (error) {
                return new rmCoreServicesPlaylistItemStatusSuspended.rm_coreservices.RE_PlaylistItem_StatusSuspended();
            };
            R_ServiceLocator.prototype.createDefaultPlaylistItemTransition = function (error) {
                return new rmCoreServicesPlaylistItemTransition.rm_coreservices.RE_PlaylistItem_Transition();
            };
            //----------------------------------------
            //    html zone creators
            //----------------------------------------
            //------------ 
            R_ServiceLocator.prototype.createDefaultHtmlZone = function (error) {
                return new rmRenderingServicesHtmlZone.rm_renderingservices.RE_HtmlZone();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultHtmlZonePool = function (error) {
                return new rmRenderingServicesHtmlZonePool.rm_renderingservices.RE_HtmlZonePool();
            };
            //----------------------------------
            //     render params
            //----------------------------------
            //------------ 
            R_ServiceLocator.prototype.createDefaultRenderParamsAllParameters = function (error) {
                return new rmRenderParametersAllParameters.rm_renderingservices.RE_RenderParams_AllParameters();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultRenderParamsIdentification = function (error) {
                return new rmRenderParametersIdentification.rm_renderingservices.RE_RenderParams_Identification();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultRenderParamsItemPosAndSize = function (error) {
                return new rmRenderParametersItemPosAndSize.rm_renderingservices.RE_RenderParams_ItemPosAndSize();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultRenderParamsContainerPosAndSize = function (error) {
                return new rmRenderParametersContainerPosAndSize.rm_renderingservices.RE_RenderParams_ContainerPosAndSize();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultRenderParamsDuration = function (error) {
                return new rmRenderParametersDuration.rm_renderingservices.RE_RenderParams_Duration();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultRenderParamsBackground = function (error) {
                return new rmRenderParametersBackground.rm_renderingservices.RE_RenderParams_Background();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultRenderParamsImage = function (error) {
                return new rmRenderParametersImage.rm_renderingservices.RE_RenderParams_Image();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultRenderParamsWebImage = function (error) {
                return new rmRenderParametersWebImage.rm_renderingservices.RE_RenderParams_WebImage();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultRenderParamsVideo = function (error) {
                return new rmRenderParametersVideo.rm_renderingservices.RE_RenderParams_Video();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultRenderParamsVideoStream = function (error) {
                return new rmRenderParametersVideoStream.rm_renderingservices.RE_RenderParams_VideoStream();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultRenderParamsAudio = function (error) {
                return new rmRenderParametersAudio.rm_renderingservices.RE_RenderParams_Audio();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultRenderParamsWebPage = function (error) {
                return new rmRenderParametersWebPage.rm_renderingservices.RE_RenderParams_WebPage();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultRenderParamsHtmlTemplate = function (error) {
                return new rmRenderParametersHtmlTemplate.rm_renderingservices.RE_RenderParams_HtmlTemplate();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultRenderParamsFillRect = function (error) {
                return new rmRenderParametersFillRect.rm_renderingservices.RE_RenderParams_FillRect();
            };
            //----------------------------------
            //     control params
            //----------------------------------
            //------------ 
            R_ServiceLocator.prototype.createDefaultControlPrepareParams = function (error) {
                return new rmControlPrepareParams.rm_renderingservices.RE_ControlParams_Prepare();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultControlPrepareParamsPool = function (error) {
                return new rmControlPrepareParamsPool.rm_renderingservices.RE_ControlParams_PreparePool();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultControlRunParams = function (error) {
                return new rmControlRunParams.rm_renderingservices.RE_ControlParams_Run();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultControlRunParamsPool = function (error) {
                return new rmControlRunParamsPool.rm_renderingservices.RE_ControlParams_RunPool();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultControlStopParams = function (error) {
                return new rmControlStopParams.rm_renderingservices.RE_ControlParams_Stop();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultControlStopParamsPool = function (error) {
                return new rmControlStopParamsPool.rm_renderingservices.RE_ControlParams_StopPool();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultControlStatusParams = function (error) {
                return new rmControlStatusParams.rm_renderingservices.RE_ControlParams_Status();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultControlStatusParamsPool = function (error) {
                return new rmControlStatusParamsPool.rm_renderingservices.RE_ControlParams_StatusPool();
            };
            //----------------------------------
            //  Services Creation 
            //----------------------------------
            //--------------- create service 
            R_ServiceLocator.prototype.createService = function (aFactoryDescription, aServiceContainer, serviceProperties, aLogService, error) {
                this._srvFactories.getServiceFactories(error).forEach(function (crtSrvFactory, index) {
                    // to do: with conditional import  call crtSrvFactory.createService  till one creation will succeed
                });
                return null;
            };
            //--------------------------- create a default service list
            R_ServiceLocator.prototype.createDefaultServices = function (error) {
                return new rmGeneralServices.rm_general.R_Services();
            };
            //--------------------------- create a default service list
            R_ServiceLocator.startupCreateDefaultServices = function (error) {
                return new rmGeneralServices.rm_general.R_Services();
            };
            //----------- create the default service container
            R_ServiceLocator.startupCreateDefaultServiceContainer = function (error) {
                var aNewServiceContainer;
                var aServiceContainer;
                var aFactoryDescription;
                aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
                aFactoryDescription.setNames("AFactory_ServiceContainer", "R_ServiceContainer", "A_ServiceContainer", "R_ServiceContainer_1");
                var aLogService = null; //not created yet
                aServiceContainer = null; //not created yet, it will become the new one
                aNewServiceContainer = new rmConfigurationServicesServiceContainer.rm_configurationservices.R_ServiceContainer(aFactoryDescription, aServiceContainer, aLogService, error);
                //aServiceContainer._iServiceManager.addService(aServiceContainer); //outside
                return aNewServiceContainer;
            };
            //----------- create the default service container
            R_ServiceLocator.startupCreateDefaultPlatformConfigurator = function (aServiceContainer, error) {
                var aNewPlatformConfigurator;
                var aFactoryDescription;
                aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
                aFactoryDescription.setNames("AFactory_PlatformConfigurator", "R_PlatformConfigurator", "A_PlatformConfigurator", "R_PlatformConfigurator_1");
                var aLogService = null; //not created yet
                aNewPlatformConfigurator = new rmConfigurationServicesPlatformConfigurator.rm_configurationservices.R_PlatformConfigurator(aFactoryDescription, aServiceContainer, aLogService, error);
                //aServiceContainer._iServiceManager.addService(aServiceContainer);
                return aNewPlatformConfigurator;
            };
            //----------- create the default Service Locator
            R_ServiceLocator.startupCreateDefaultServiceLocator = function (aServiceContainer, error) {
                var aNewServiceLocator;
                var aFactoryDescription;
                aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
                aFactoryDescription.setNames("AFactory_ServiceLocator", "R_ServiceLocator", "A_ServiceLocator", "R_ServiceLocator_1");
                var aLogService = null; //not created yet
                aNewServiceLocator = new rmConfigurationServicesServiceLocator.rm_configurationservices.R_ServiceLocator(aFactoryDescription, aServiceContainer, aLogService, error);
                //aServiceContainer._iServiceManager.addService(aServiceContainer);
                return aNewServiceLocator;
            };
            //--------------------------------------
            // create Rendering Services
            //---------------------------------------
            //----------- create default Rendering Zone
            R_ServiceLocator.prototype.createDefaultService_RenderingZone = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
                var aNewRenderingZone;
                var aFactoryDescription;
                aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
                aFactoryDescription.setNames("AFactory_RenderingZone", "R_RenderingZone", "A_RenderingZone", "" + id);
                var aLogService = null; //not created yet
                aNewRenderingZone = new rmRenderingServicesRenderingZone.rm_renderingservices.R_RenderingZone(aFactoryDescription, aServiceContainer, aLogService, error);
                //aServiceContainer._iServiceManager.addService(aServiceContainer);
                return aNewRenderingZone;
            };
            //----------- create default Video Renderer
            R_ServiceLocator.prototype.createDefaultService_VideoRenderer = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
                var aNewVideoRenderer;
                var aFactoryDescription;
                aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
                aFactoryDescription.setNames("AFactory_VideoRenderer", "R_VideoRenderer", "AVideoRenderer", "" + id);
                var aLogService = null; //not created yet
                aNewVideoRenderer = new rmRenderingServicesVideoRenderer.rm_renderingservices.R_VideoRenderer(aFactoryDescription, aServiceContainer, aLogService, error);
                aNewVideoRenderer._iService.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
                //aServiceContainer._iServiceManager.addService(aServiceContainer);
                return aNewVideoRenderer;
            };
            //----------- create default VideoStream Renderer
            R_ServiceLocator.prototype.createDefaultService_VideoStreamRenderer = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
                var aNewVideoStreamRenderer;
                var aFactoryDescription;
                aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
                aFactoryDescription.setNames("AFactory_VideoStreamRenderer", "R_VideoStreamRenderer", "AVideoStreamRenderer", "" + id);
                var aLogService = null; //not created yet
                aNewVideoStreamRenderer = new rmRenderingServicesVideoStreamRenderer.rm_renderingservices.R_VideoStreamRenderer(aFactoryDescription, aServiceContainer, aLogService, error);
                aNewVideoStreamRenderer._iService.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
                //aServiceContainer._iServiceManager.addService(aServiceContainer);
                return aNewVideoStreamRenderer;
            };
            //----------- create default Image Renderer
            R_ServiceLocator.prototype.createDefaultService_ImageRenderer = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
                var aNewImageRenderer;
                var aFactoryDescription;
                aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
                aFactoryDescription.setNames("AFactory_ImageRenderer", "R_ImageRenderer", "AImageRenderer", "" + id);
                var aLogService = null; //not created yet
                aNewImageRenderer = new rmRenderingServicesImageRenderer.rm_renderingservices.R_ImageRenderer(aFactoryDescription, aServiceContainer, aLogService, error);
                aNewImageRenderer._iService.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
                //aServiceContainer._iServiceManager.addService(aServiceContainer);
                return aNewImageRenderer;
            };
            //----------- create default Html Renderer
            R_ServiceLocator.prototype.createDefaultService_HtmlRenderer = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
                var aNewHtmlRenderer;
                var aFactoryDescription;
                aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
                aFactoryDescription.setNames("AFactory_HtmlRenderer", "R_HtmlRenderer", "AHtmlRenderer", "" + id);
                var aLogService = null; //not created yet
                aNewHtmlRenderer = new rmRenderingServicesHtmlRenderer.rm_renderingservices.R_HtmlRenderer(aFactoryDescription, aServiceContainer, aLogService, error);
                aNewHtmlRenderer._iService.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
                //aServiceContainer._iServiceManager.addService(aServiceContainer);
                return aNewHtmlRenderer;
            };
            //----------- create default HtmlTemplate Renderer
            R_ServiceLocator.prototype.createDefaultService_HtmlTemplateRenderer = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
                var aNewHtmlTemplateRenderer;
                var aFactoryDescription;
                aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
                aFactoryDescription.setNames("AFactory_HtmlTemplateRenderer", "R_HtmlTemplateRenderer", "AHtmlTemplateRenderer", "" + id);
                var aLogService = null; //not created yet
                aNewHtmlTemplateRenderer = new rmRenderingServicesHtmlTemplateRenderer.rm_renderingservices.R_HtmlTemplateRenderer(aFactoryDescription, aServiceContainer, aLogService, error);
                aNewHtmlTemplateRenderer._iService.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
                //aServiceContainer._iServiceManager.addService(aServiceContainer);
                return aNewHtmlTemplateRenderer;
            };
            //----------- create default Flash Renderer
            R_ServiceLocator.prototype.createDefaultService_FlashRenderer = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
                var aNewFlashRenderer;
                var aFactoryDescription;
                aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
                aFactoryDescription.setNames("AFactory_FlashRenderer", "R_FlashRenderer", "AFlashRenderer", "" + id);
                var aLogService = null; //not created yet
                aNewFlashRenderer = new rmRenderingServicesFlashRenderer.rm_renderingservices.R_FlashRenderer(aFactoryDescription, aServiceContainer, aLogService, error);
                aNewFlashRenderer._iService.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
                //aServiceContainer._iServiceManager.addService(aServiceContainer);
                return aNewFlashRenderer;
            };
            //----------- create default FillRect Renderer
            R_ServiceLocator.prototype.createDefaultService_FillRectRenderer = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
                var aNewFillRectRenderer;
                var aFactoryDescription;
                aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
                aFactoryDescription.setNames("AFactory_FillRectRenderer", "R_FillRectRenderer", "AFillRectRenderer", "" + id);
                var aLogService = null; //not created yet
                aNewFillRectRenderer = new rmRenderingServicesFillRectRenderer.rm_renderingservices.R_FillRectRenderer(aFactoryDescription, aServiceContainer, aLogService, error);
                aNewFillRectRenderer._iService.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
                //aServiceContainer._iServiceManager.addService(aServiceContainer);
                return aNewFillRectRenderer;
            };
            //----------- create default ScreenSaver Renderer
            R_ServiceLocator.prototype.createDefaultService_ScreenSaverRenderer = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
                var aNewScreenSaverRenderer;
                var aFactoryDescription;
                aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
                aFactoryDescription.setNames("AFactory_ScreenSaverRenderer", "R_ScreenSaverRenderer", "AScreenSaverRenderer", "" + id);
                var aLogService = null; //not created yet
                aNewScreenSaverRenderer = new rmRenderingServicesScreenSaverRenderer.rm_renderingservices.R_ScreenSaverRenderer(aFactoryDescription, aServiceContainer, aLogService, error);
                aNewScreenSaverRenderer._iService.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
                //aServiceContainer._iServiceManager.addService(aServiceContainer);
                return aNewScreenSaverRenderer;
            };
            //----------- create default ScreenSaver Renderer
            R_ServiceLocator.prototype.createDefaultService_TvHdmiPassThroughSrv = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
                var aNewTvHdmiPassThroughSrv;
                var aFactoryDescription;
                aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
                aFactoryDescription.setNames("AFactory_TvHdmiPassThroughSrv", "R_TvHdmiPassThroughSrv", "ATvHdmiPassThroughSrv", "" + id);
                var aLogService = null; //not created yet
                aNewTvHdmiPassThroughSrv = new rmRenderingServicesTvHdmiPassThroughSrv.rm_renderingservices.R_TvHdmiPassThroughSrv(aFactoryDescription, aServiceContainer, aLogService, error);
                aNewTvHdmiPassThroughSrv._iService.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
                //aServiceContainer._iServiceManager.addService(aServiceContainer);
                return aNewTvHdmiPassThroughSrv;
            };
            //----------- create default Background Renderer
            R_ServiceLocator.prototype.createDefaultService_BackgroundRenderer = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
                var aNewBackgroundRenderer;
                var aFactoryDescription;
                aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
                aFactoryDescription.setNames("AFactory_BackgroundRenderer", "R_BackgroundRenderer", "ABackgroundRenderer", "" + id);
                var aLogService = null; //not created yet
                aNewBackgroundRenderer = new rmRenderingServicesBackgroundRenderer.rm_renderingservices.R_BackgroundRenderer(aFactoryDescription, aServiceContainer, aLogService, error);
                aNewBackgroundRenderer._iService.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
                //aServiceContainer._iServiceManager.addService(aServiceContainer);
                return aNewBackgroundRenderer;
            };
            //-------------------------
            //  playlist controller and rendering controller configuration
            //-------------------------
            //----------- create default PlaylistController
            R_ServiceLocator.prototype.createDefaultService_PlaylistController = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
                var aNewPlaylistController;
                var aFactoryDescription;
                aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
                aFactoryDescription.setNames("AFactory_PlaylistController", "R_PlaylistController", "APlaylistController", "" + id);
                var aLogService = null; //not created yet
                aNewPlaylistController = new rmCoreServicesPlaylistController.rm_coreservices.R_PlaylistController(aFactoryDescription, aServiceContainer, aLogService, error);
                aNewPlaylistController._iService.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
                //aServiceContainer._iServiceManager.addService(aServiceContainer);
                return aNewPlaylistController;
            };
            //----------- create default RenderingController
            R_ServiceLocator.prototype.createDefaultService_RenderingController = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
                var aNewRenderingController;
                var aFactoryDescription;
                aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
                aFactoryDescription.setNames("AFactory_RenderingController", "R_RenderingController", "ARenderingController", "" + id);
                var aLogService = null; //not created yet
                aNewRenderingController = new rmCoreServicesRenderingController.rm_coreservices.R_RenderingController(aFactoryDescription, aServiceContainer, aLogService, error);
                aNewRenderingController._iService.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
                //aServiceContainer._iServiceManager.addService(aServiceContainer);
                return aNewRenderingController;
            };
            //----------------------------------
            //     configuration entities
            //----------------------------------
            //------------ 
            R_ServiceLocator.prototype.createDefaultPlaylisControllerConfig = function (error) {
                return new rmPlaylistControllerConfig.rm_coreservices.RE_PlaylistControllerConfig();
            };
            //------------ 
            R_ServiceLocator.prototype.createDefaultRenderingControllerConfig = function (error) {
                return new rmRenderingControllerConfig.rm_coreservices.RE_RenderingControllerConfig();
            };
            //----------- create default Rendering Zone Pool
            R_ServiceLocator.prototype.createDefaultRenderingZonePool = function (error) {
                return new rmRenderingServicesRenderingZonePool.rm_renderingservices.RE_RenderingZonePool();
            };
            //----------- create default Video Renderer Pool
            R_ServiceLocator.prototype.createDefaultVideoRendererPool = function (error) {
                return new rmRenderingServicesVideoRendererPool.rm_renderingservices.RE_VideoRendererPool();
            };
            //----------- create default VideoStream Renderer Pool
            R_ServiceLocator.prototype.createDefaultVideoStreamRendererPool = function (error) {
                return new rmRenderingServicesVideoStreamRendererPool.rm_renderingservices.RE_VideoStreamRendererPool();
            };
            //----------- create default Image Renderer Pool
            R_ServiceLocator.prototype.createDefaultImageRendererPool = function (error) {
                return new rmRenderingServicesImageRendererPool.rm_renderingservices.RE_ImageRendererPool();
            };
            //----------- create default Html Renderer Pool
            R_ServiceLocator.prototype.createDefaultHtmlRendererPool = function (error) {
                return new rmRenderingServicesHtmlRendererPool.rm_renderingservices.RE_HtmlRendererPool();
            };
            //----------- create default HtmlTemplate Renderer Pool
            R_ServiceLocator.prototype.createDefaultHtmlTemplateRendererPool = function (error) {
                return new rmRenderingServicesHtmlTemplateRendererPool.rm_renderingservices.RE_HtmlTemplateRendererPool();
            };
            //----------- create default Flash Renderer Pool
            R_ServiceLocator.prototype.createDefaultFlashRendererPool = function (error) {
                return new rmRenderingServicesFlashRendererPool.rm_renderingservices.RE_FlashRendererPool();
            };
            //----------- create default FillRect Renderer Pool
            R_ServiceLocator.prototype.createDefaultFillRectRendererPool = function (error) {
                return new rmRenderingServicesFillRectRendererPool.rm_renderingservices.RE_FillRectRendererPool();
            };
            //----------- create default ScreenSaver Renderer Pool
            R_ServiceLocator.prototype.createDefaultScreenSaverRendererPool = function (error) {
                return new rmRenderingServicesScreenSaverRendererPool.rm_renderingservices.RE_ScreenSaverRendererPool();
            };
            //----------- create default ScreenSaver Renderer Pool
            R_ServiceLocator.prototype.createDefaultTvHdmiPassThroughSrvPool = function (error) {
                return new rmRenderingServicesTvHdmiPassThroughSrvPool.rm_renderingservices.RE_TvHdmiPassThroughSrvPool();
            };
            //----------- create default Background Renderer Pool
            R_ServiceLocator.prototype.createDefaultBackgroundRendererPool = function (error) {
                return new rmRenderingServicesBackgroundRendererPool.rm_renderingservices.RE_BackgroundRendererPool();
            };
            return R_ServiceLocator;
        }(rmGeneralService.rm_general.R_Service));
        rm_configurationservices.R_ServiceLocator = R_ServiceLocator;
    })(rm_configurationservices = exports.rm_configurationservices || (exports.rm_configurationservices = {}));
});
//# sourceMappingURL=R_ServiceLocator.js.map