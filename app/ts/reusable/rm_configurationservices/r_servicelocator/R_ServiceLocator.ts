declare function require(moduleNames: string[], onLoad: (...args: any[]) => void): void;

import amConfigurationServicesServiceLocator   = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");

import amGeneralError                          = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralFactoryDescription             = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amTransversalServicesLogService         = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import amConfigurationServices2 = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/I_ServiceLocator_FactorySetup");
import amConfigurationServices3 = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/I_ServiceLocator_EntityCreation");
import amConfigurationServices4 = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/I_ServiceLocator_ServiceCreation");

import amConfigurationServicesPlatformConfigurator  = require("../../../../../app/ts/abstract/am_configurationservices/a_platformconfigurator/A_PlatformConfigurator");

import amGeneralServiceFactories    = require("../../../../../app/ts/abstract/am_general/a_service/A_ServiceFactories");
import amGeneralEntityFactories     = require("../../../../../app/ts/abstract/am_general/a_entity/A_EntityFactories");

import amGeneralContext             = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralServiceFactory      = require("../../../../../app/ts/abstract/am_general/a_service/AFactory_Service");
import amGeneralEntityFactory       = require("../../../../../app/ts/abstract/am_general/a_entity/AFactory_Entity");
import amGeneralFactoryDescriptions = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescriptions");
import amGeneralService             = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");
import amGeneralEntity              = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneralProperties          = require("../../../../../app/ts/abstract/am_general/a_property/A_Properties");
import amGeneralProperty            = require("../../../../../app/ts/abstract/am_general/a_property/A_Property");
import amGeneralServices            = require("../../../../../app/ts/abstract/am_general/a_service/A_Services");
import amGeneralDateTime            = require("../../../../../app/ts/abstract/am_general/a_datetime/A_DateTime");
import amGeneralTimeZone            = require("../../../../../app/ts/abstract/am_general/a_timezone/A_TimeZone");
import amGeneralSoundProperties     = require("../../../../../app/ts/abstract/am_general/a_soundproperties/A_SoundProperties");
import amGeneralScreenProperties       = require("../../../../../app/ts/abstract/am_general/a_screenproperties/A_ScreenProperties");
import amGeneralAppServerProperties    = require("../../../../../app/ts/abstract/am_general/a_appserverproperties/A_AppServerProperties");
import amGeneralFileInfo               = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");
import amGeneralNetworkProperties      = require("../../../../../app/ts/abstract/am_general/a_networkproperties/A_NetworkProperties");
import amGeneralNetworkCardProperties  = require("../../../../../app/ts/abstract/am_general/a_networkproperties/A_NetworkCardProperties");
import amGeneralNetworkProxyProperties = require("../../../../../app/ts/abstract/am_general/a_networkproperties/A_NetworkProxyProperties");
import amGeneralWifiConnectionInfo     = require("../../../../../app/ts/abstract/am_general/a_networkproperties/A_WifiConnectionInfo");
import amGeneralFirmwareProperties    = require("../../../../../app/ts/abstract/am_general/a_firmwareproperties/A_FirmwareProperties");
import amGeneralBeaconInfo            = require("../../../../../app/ts/abstract/am_general/a_beaconinfo/A_BeaconInfo");
import amGeneralCaptureScreenInfo     = require("../../../../../app/ts/abstract/am_general/a_capturescreeninfo/A_CaptureScreenInfo");
import amGeneralEddystoneInfo         = require("../../../../../app/ts/abstract/am_general/a_eddystoneinfo/A_EddystoneInfo");
import amGeneralPlatformInfo          = require("../../../../../app/ts/abstract/am_general/a_platforminfo/A_PlatformInfo");
import amGeneralSystemUsageInfo       = require("../../../../../app/ts/abstract/am_general/a_systemusageinfo/A_SystemUsageInfo");
import amGeneralWifiSoftAppInfo       = require("../../../../../app/ts/abstract/am_general/a_wifisoftappinfo/A_WifiSoftAppInfo");
import amGeneralFailureModeInfo       = require("../../../../../app/ts/abstract/am_general/a_failuremodeinfo/A_FailureModeInfo");
import amGeneralPowerSaveModeInfo     = require("../../../../../app/ts/abstract/am_general/a_powersavemodeinfo/A_PowerSafeModeInfo");
import amGeneralTileInfo              = require("../../../../../app/ts/abstract/am_general/a_tileinfo/A_TileInfo");
import amGeneralSystemMonitorInfo     = require("../../../../../app/ts/abstract/am_general/a_systemmonitorinfo/A_SystemMonitorInfo");
import amGeneralUsageData             = require("../../../../../app/ts/abstract/am_general/a_usagedata/A_UsageData");
import amGeneralUsagePermissions      = require("../../../../../app/ts/abstract/am_general/a_usagepermissions/A_UsagePermissions");
import amGeneralDeviceTimerInfo       = require("../../../../../app/ts/abstract/am_general/a_devicetimerinfo/A_DeviceTimerInfo");
import amGeneralShaProperties         = require("../../../../../app/ts/abstract/am_general/a_shaproperties/A_ShaProperties");
import amGeneralXmlJsonObject         = require("../../../../../app/ts/abstract/am_general/a_xmljsonobject/A_XmlJsonObject");

import amGeneralXmlDocument           = require("../../../../../app/ts/abstract/am_general/ae_xmlobjects/AE_XmlDocument");
import amGeneralXmlNode               = require("../../../../../app/ts/abstract/am_general/ae_xmlobjects/AE_XmlNode");

import amGeneralQueue                 = require("../../../../../app/ts/abstract/am_general/ae_queue/AE_Queue");
import amGeneralEvent                 = require("../../../../../app/ts/abstract/am_general/ae_event/AE_Event");
import amGeneralRandom                = require("../../../../../app/ts/abstract/am_general/ae_random/AE_Random");
import amGeneralDiffusion             = require("../../../../../app/ts/abstract/am_general/ae_diffusion/AE_Diffusion");

import amPlaybackHardwareSettings     = require("../../../../../app/ts/abstract/am_playback/a_hardwaresettings/A_HardwareSettings");
import amPlaybackOpeningHours         = require("../../../../../app/ts/abstract/am_playback/a_openinghours/A_OpeningHours");
import amPlaybackDayOpeningHours      = require("../../../../../app/ts/abstract/am_playback/a_openinghours/A_DayOpeningHours");
import amPlaybackScreenSaverConfig    = require("../../../../../app/ts/abstract/am_playback/ae_screensaverconfig/AE_ScreenSaverConfig"); 
import amGeneralPlaybackGlobalConfig = require("../../../../../app/ts/abstract/am_playback/ae_playbackglobalconfig/AE_PlaybackGlobalConfig");

import amCoreServicesPlaylistController        = require("../../../../../app/ts/abstract/am_coreservices/a_playlistcontroller/A_PlaylistController");
import amCoreServicesPlaylistControllerConfig  = require("../../../../../app/ts/abstract/am_coreservices/a_playlistcontroller/AE_PlaylistControllerConfig");
import amCoreServicesRenderingController       = require("../../../../../app/ts/abstract/am_coreservices/a_renderingcontroller/A_RenderingController");
import amCoreServicesRenderingControllerConfig = require("../../../../../app/ts/abstract/am_coreservices/a_renderingcontroller/AE_RenderingControllerConfig");
//import amPlaylistControllerConfig             = require("../../../../../app/ts/abstract/am_coreservices/a_playlistcontroller/AE_PlaylistControllerConfig");
//import amRenderingControllerConfig            = require("../../../../../app/ts/abstract/am_coreservices/a_renderingcontroller/AE_RenderingControllerConfig");

import amCoreServicesMainPlaylist              = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_MainPlaylist");
import amCoreServicesTagManager                = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_TagManager");
import amCoreServicesPlaylistItem              = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem"); 
import amCoreServicesPlaylistItemContainer     = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_Container");
import amCoreServicesPlaylistItemDesign        = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_Design");
import amCoreServicesPlaylistItemDesignZone    = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_DesignZone");
import amCoreServicesPlaylistItemEvent         = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_Event");
import amCoreServicesPlaylistItemEvents        = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_Events");
import amCoreServicesPlaylistItemFillRect      = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_FillRect");
import amCoreServicesPlaylistItemFlash         = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_Flash");
import amCoreServicesPlaylistItemHtmlTemplate  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_HtmlTemplate");
import amCoreServicesPlaylistItemImage         = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_Image");
import amCoreServicesPlaylistItemPlaylist      = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_Playlist");
import amCoreServicesPlaylistItemPriorityPlaylist = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_PriorityPlaylist");
import amCoreServicesPlaylistItemStream        = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_Stream");
import amCoreServicesPlaylistItemScreenSaverImage  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_ScreenSaverImage");
import amCoreServicesPlaylistItemScreenSaverVideo  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_ScreenSaverVideo");
import amCoreServicesPlaylistItemTag           = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_Tag");
import amCoreServicesPlaylistItemRealTag       = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_RealTag");
import amCoreServicesPlaylistItemTVPassThrough = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_TVPassThrough");
import amCoreServicesPlaylistItemTVTunner      = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_TVTunner");
import amCoreServicesPlaylistItemVideo         = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_Video");
import amCoreServicesPlaylistItemVideoStream   = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_VideoStream");
import amCoreServicesPlaylistItemWebPage       = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_WebPage");

import amCoreServicesMainPlaylistLogic                = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_MainPlaylist_Logic");
import amCoreServicesTagManagerLogic                  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_TagManager_Logic");
import amCoreServicesPlaylistItemLogic                = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_Logic"); 
import amCoreServicesPlaylistItemContainerLogic       = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_ContainerLogic");
import amCoreServicesPlaylistItemDesignLogic          = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_DesignLogic");
import amCoreServicesPlaylistItemDesignZoneLogic      = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_DesignZoneLogic");
import amCoreServicesPlaylistItemDesignMainZoneLogic  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_DesignMainZoneLogic");
import amCoreServicesPlaylistItemEventLogic           = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_EventLogic");
import amCoreServicesPlaylistItemEventsLogic          = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_EventsLogic");
import amCoreServicesPlaylistItemFillRectLogic        = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_FillRectLogic");
import amCoreServicesPlaylistItemFlashLogic           = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_FlashLogic");
import amCoreServicesPlaylistItemHtmlTemplateLogic    = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_HtmlTemplateLogic");
import amCoreServicesPlaylistItemImageLogic           = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_ImageLogic");
import amCoreServicesPlaylistItemPlaylistLogic        = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_PlaylistLogic");
import amCoreServicesPlaylistItemPriorityPlaylistLogic = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_PriorityPlaylistLogic");
import amCoreServicesPlaylistItemStreamLogic          = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_StreamLogic");
import amCoreServicesPlaylistItemScreenSaverImageLogic = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_ScreenSaverImageLogic");
import amCoreServicesPlaylistItemScreenSaverVideoLogic = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_ScreenSaverVideoLogic");
import amCoreServicesPlaylistItemTagLogic             = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_TagLogic");
import amCoreServicesPlaylistItemRealTagLogic         = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_RealTagLogic");
import amCoreServicesPlaylistItemTVPassThroughLogic   = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_TVPassThroughLogic");
import amCoreServicesPlaylistItemTVTunnerLogic        = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_TVTunnerLogic");
import amCoreServicesPlaylistItemVideoLogic           = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_VideoLogic");
import amCoreServicesPlaylistItemVideoStreamLogic     = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_VideoStreamLogic");
import amCoreServicesPlaylistItemWebPageLogic         = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_WebPageLogic");

import amCoreServicesPlaylistItemStatus               = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_Status");
import amCoreServicesPlaylistItemStatusDisable        = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusDisable");
import amCoreServicesPlaylistItemStatusEnd            = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusEnd");
import amCoreServicesPlaylistItemStatusError          = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusError");
import amCoreServicesPlaylistItemStatusPlay           = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusPlay");
import amCoreServicesPlaylistItemStatusPlay_List      = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusPlay_List");
import amCoreServicesPlaylistItemStatusPlay_Media     = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusPlay_Media");
import amCoreServicesPlaylistItemStatusRequestToAbort = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToAbort");
import amCoreServicesPlaylistItemStatusRequestToAbort_List  = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToAbort_List");
import amCoreServicesPlaylistItemStatusRequestToAbort_Media = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToAbort_Media");
import amCoreServicesPlaylistItemStatusRequestToAbortOrEndBeforePlay = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay");
import amCoreServicesPlaylistItemStatusRequestToAbortOrEndBeforePlay_List  = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay_List");
import amCoreServicesPlaylistItemStatusRequestToAbortOrEndBeforePlay_Media = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay_Media");
import amCoreServicesPlaylistItemStatusRequestToEnd          = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToEnd");
import amCoreServicesPlaylistItemStatusRequestToEnd_List     = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToEnd_List");
import amCoreServicesPlaylistItemStatusRequestToEnd_Media    = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToEnd_Media");
import amCoreServicesPlaylistItemStatusRequestToPlay         = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToPlay");
import amCoreServicesPlaylistItemStatusRequestToPlay_List    = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToPlay_List");
import amCoreServicesPlaylistItemStatusRequestToPlay_Media   = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToPlay_Media");
import amCoreServicesPlaylistItemStatusRequestToResume       = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToResume");
import amCoreServicesPlaylistItemStatusRequestToResume_List  = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToResume_List");
import amCoreServicesPlaylistItemStatusRequestToResume_Media = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToResume_Media");
import amCoreServicesPlaylistItemStatusRequestToSuspend      = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToSuspend");
import amCoreServicesPlaylistItemStatusRequestToSuspend_List = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToSuspend_List");
import amCoreServicesPlaylistItemStatusRequestToSuspend_Media = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToSuspend_Media");
import amCoreServicesPlaylistItemStatusSelectNextChildToPlay = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusSelectNextChildToPlay");
import amCoreServicesPlaylistItemStatusSuspended             = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusSuspended");
import amCoreServicesPlaylistItemTransition                  = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_Transition");


import amRenderingServicesHtmlZone             = require("../../../../../app/ts/abstract/am_renderingservices/ae_htmlzone/AE_HtmlZone");
import amRenderingServicesHtmlZonePool         = require("../../../../../app/ts/abstract/am_renderingservices/ae_htmlzone/AE_HtmlZonePool");

import amRenderParametersAllParameters     = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_AllParameters");
import amRenderParametersIdentification = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_Identification");
import amRenderParametersItemPosAndSize = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_ItemPosAndSize");
import amRenderParametersContainerPosAndSize = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_ContainerPosAndSize");
import amRenderParametersDuration = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_Duration");
import amRenderParametersBackground = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_Background");
import amRenderParametersImage = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_Image");
import amRenderParametersWebImage = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_WebImage");
import amRenderParametersVideo    = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_Video");
import amRenderParametersVideoStream = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_VideoStream");
import amRenderParametersAudio    = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_Audio");
import amRenderParametersWebPage  = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_WebPage");
import amRenderParametersHtmlTemplate = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_HtmlTemplate");
import amRenderParametersFillRect = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_FillRect");

import amControlPrepareParams      = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Prepare");
import amControlPrepareParamsPool  = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_PreparePool");
import amControlRunParams          = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Run");
import amControlRunParamsPool      = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_RunPool");
import amControlStopParams         = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Stop");
import amControlStopParamsPool     = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_StopPool");
import amControlStatusParams       = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Status");
import amControlStatusParamsPool   = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_StatusPool");

import amRenderingServicesRenderingZone        = require("../../../../../app/ts/abstract/am_renderingservices/a_renderingzone/A_RenderingZone");
import amRenderingServicesRenderingZonePool    = require("../../../../../app/ts/abstract/am_renderingservices/a_renderingzone/AE_RenderingZonePool");
import amRenderingServicesImageRenderer        = require("../../../../../app/ts/abstract/am_renderingservices/a_imagerenderer/A_ImageRenderer");
import amRenderingServicesImageRendererPool    = require("../../../../../app/ts/abstract/am_renderingservices/a_imagerenderer/AE_ImageRendererPool");
import amRenderingServicesVideoRenderer        = require("../../../../../app/ts/abstract/am_renderingservices/a_videorenderer/A_VideoRenderer");
import amRenderingServicesVideoRendererPool    = require("../../../../../app/ts/abstract/am_renderingservices/a_videorenderer/AE_VideoRendererPool");
import amRenderingServicesVideoStreamRenderer     = require("../../../../../app/ts/abstract/am_renderingservices/a_videostreamrenderer/A_VideoStreamRenderer");
import amRenderingServicesVideoStreamRendererPool = require("../../../../../app/ts/abstract/am_renderingservices/a_videostreamrenderer/AE_VideoStreamRendererPool");
import amRenderingServicesHtmlRenderer         = require("../../../../../app/ts/abstract/am_renderingservices/a_htmlrenderer/A_HtmlRenderer");
import amRenderingServicesHtmlRendererPool     = require("../../../../../app/ts/abstract/am_renderingservices/a_htmlrenderer/AE_HtmlRendererPool");
import amRenderingServicesHtmlTemplateRenderer = require("../../../../../app/ts/abstract/am_renderingservices/a_htmltemplaterenderer/A_HtmlTemplateRenderer");
import amRenderingServicesHtmlTemplateRendererPool = require("../../../../../app/ts/abstract/am_renderingservices/a_htmltemplaterenderer/AE_HtmlTemplateRendererPool");
import amRenderingServicesFlashRenderer        = require("../../../../../app/ts/abstract/am_renderingservices/a_flashrenderer/A_FlashRenderer");
import amRenderingServicesFlashRendererPool    = require("../../../../../app/ts/abstract/am_renderingservices/a_flashrenderer/AE_FlashRendererPool");
import amRenderingServicesScreenSaverRenderer  = require("../../../../../app/ts/abstract/am_renderingservices/a_screensaverrenderer/A_ScreenSaverRenderer");
import amRenderingServicesScreenSaverRendererPool = require("../../../../../app/ts/abstract/am_renderingservices/a_screensaverrenderer/AE_ScreenSaverRendererPool");
import amRenderingServicesFillRectRenderer     = require("../../../../../app/ts/abstract/am_renderingservices/a_fillrectrenderer/A_FillRectRenderer");
import amRenderingServicesFillRectRendererPool = require("../../../../../app/ts/abstract/am_renderingservices/a_fillrectrenderer/AE_FillRectRendererPool");
import amRenderingServicesTvHdmiPassThroughSrv = require("../../../../../app/ts/abstract/am_renderingservices/a_tvhdmipassthroughsrv/A_TvHdmiPassThroughSrv");
import amRenderingServicesTvHdmiPassThroughSrvPool = require("../../../../../app/ts/abstract/am_renderingservices/a_tvhdmipassthroughsrv/AE_TvHdmiPassThroughSrvPool");
import amRenderingServicesBackgroundRenderer   = require("../../../../../app/ts/abstract/am_renderingservices/a_backgroundrenderer/A_BackgroundRenderer");
import amRenderingServicesBackgroundRendererPool = require("../../../../../app/ts/abstract/am_renderingservices/a_backgroundrenderer/AE_BackgroundRendererPool");

import rmRenderingServicesRenderingZone       = require("../../../../../app/ts/reusable/rm_renderingservices/r_renderingzone/R_RenderingZone");
import rmRenderingServicesRenderingZonePool   = require("../../../../../app/ts/reusable/rm_renderingservices/r_renderingzone/RE_RenderingZonePool");
import rmRenderingServicesImageRenderer       = require("../../../../../app/ts/reusable/rm_renderingservices/r_imagerenderer/R_ImageRenderer");
import rmRenderingServicesImageRendererPool   = require("../../../../../app/ts/reusable/rm_renderingservices/r_imagerenderer/RE_ImageRendererPool");
import rmRenderingServicesVideoRenderer       = require("../../../../../app/ts/reusable/rm_renderingservices/r_videorenderer/R_VideoRenderer");
import rmRenderingServicesVideoRendererPool   = require("../../../../../app/ts/reusable/rm_renderingservices/r_videorenderer/RE_VideoRendererPool");
import rmRenderingServicesVideoStreamRenderer     = require("../../../../../app/ts/reusable/rm_renderingservices/r_videostreamrenderer/R_VideoStreamRenderer");
import rmRenderingServicesVideoStreamRendererPool = require("../../../../../app/ts/reusable/rm_renderingservices/r_videostreamrenderer/RE_VideoStreamRendererPool");
import rmRenderingServicesHtmlRenderer        = require("../../../../../app/ts/reusable/rm_renderingservices/r_htmlrenderer/R_HtmlRenderer");
import rmRenderingServicesHtmlRendererPool    = require("../../../../../app/ts/reusable/rm_renderingservices/r_htmlrenderer/RE_HtmlRendererPool");
import rmRenderingServicesHtmlTemplateRenderer     = require("../../../../../app/ts/reusable/rm_renderingservices/r_htmltemplaterenderer/R_HtmlTemplateRenderer");
import rmRenderingServicesHtmlTemplateRendererPool = require("../../../../../app/ts/reusable/rm_renderingservices/r_htmltemplaterenderer/RE_HtmlTemplateRendererPool");
import rmRenderingServicesFlashRenderer       = require("../../../../../app/ts/reusable/rm_renderingservices/r_flashrenderer/R_FlashRenderer");
import rmRenderingServicesFlashRendererPool   = require("../../../../../app/ts/reusable/rm_renderingservices/r_flashrenderer/RE_FlashRendererPool");
import rmRenderingServicesScreenSaverRenderer = require("../../../../../app/ts/reusable/rm_renderingservices/r_screensaverrenderer/R_ScreenSaverRenderer");
import rmRenderingServicesScreenSaverRendererPool = require("../../../../../app/ts/reusable/rm_renderingservices/r_screensaverrenderer/RE_ScreenSaverRendererPool");
import rmRenderingServicesFillRectRenderer     = require("../../../../../app/ts/reusable/rm_renderingservices/r_fillrectrenderer/R_FillRectRenderer");
import rmRenderingServicesFillRectRendererPool = require("../../../../../app/ts/reusable/rm_renderingservices/r_fillrectrenderer/RE_FillRectRendererPool");
import rmRenderingServicesTvHdmiPassThroughSrv = require("../../../../../app/ts/reusable/rm_renderingservices/r_tvhdmipassthroughsrv/R_TvHdmiPassThroughSrv");
import rmRenderingServicesTvHdmiPassThroughSrvPool = require("../../../../../app/ts/reusable/rm_renderingservices/r_tvhdmipassthroughsrv/RE_TvHdmiPassThroughSrvPool");
import rmRenderingServicesBackgroundRenderer   = require("../../../../../app/ts/reusable/rm_renderingservices/r_backgroundrenderer/R_BackgroundRenderer");
import rmRenderingServicesBackgroundRendererPool = require("../../../../../app/ts/reusable/rm_renderingservices/r_backgroundrenderer/RE_BackgroundRendererPool");

import rmGeneralService             = require("../../../../../app/ts/reusable/rm_general/r_service/R_Service");
import rmGeneralError               = require("../../../../../app/ts/reusable/rm_general/r_error/R_Error");
import rmGeneralContext             = require("../../../../../app/ts/reusable/rm_general/r_context/R_Context");
import rmGeneralProperty            = require("../../../../../app/ts/reusable/rm_general/r_property/R_Property");
import rmGeneralProperties          = require("../../../../../app/ts/reusable/rm_general/r_property/R_Properties");
import rmGeneralFactoryDescription  = require("../../../../../app/ts/reusable/rm_general/r_factorydescription/R_FactoryDescription");
import rmGeneralFactoryDescriptions = require("../../../../../app/ts/reusable/rm_general/r_factorydescription/R_FactoryDescriptions");
import rmGeneralServices            = require("../../../../../app/ts/reusable/rm_general/r_service/R_Services");
import rmGeneralServiceFactories    = require("../../../../../app/ts/reusable/rm_general/r_service/R_ServiceFactories");
import rmGeneralEntityFactories     = require("../../../../../app/ts/reusable/rm_general/r_entity/R_EntityFactories");
import rmGeneralDateTime            = require("../../../../../app/ts/reusable/rm_general/r_datetime/R_DateTime");
import rmGeneralTimeZone            = require("../../../../../app/ts/reusable/rm_general/r_timezone/R_TimeZone");
import rmGeneralSoundProperties     = require("../../../../../app/ts/reusable/rm_general/r_soundproperties/R_SoundProperties");
import rmGeneralScreenProperties       = require("../../../../../app/ts/reusable/rm_general/r_screenproperties/R_ScreenProperties");
import rmGeneralAppServerProperties    = require("../../../../../app/ts/reusable/rm_general/r_appserverproperties/R_AppServerProperties");
import rmGeneralFileInfo               = require("../../../../../app/ts/reusable/rm_general/r_fileinfo/R_FileInfo");
import rmGeneralNetworkProperties      = require("../../../../../app/ts/reusable/rm_general/r_networkproperties/R_NetworkProperties");
import rmGeneralNetworkCardProperties  = require("../../../../../app/ts/reusable/rm_general/r_networkproperties/R_NetworkCardProperties");
import rmGeneralNetworkProxyProperties = require("../../../../../app/ts/reusable/rm_general/r_networkproperties/R_NetworkProxyProperties");
import rmGeneralWifiConnectionInfo    = require("../../../../../app/ts/reusable/rm_general/r_networkproperties/R_WifiConnectionInfo");
import rmGeneralFirmwareProperties    = require("../../../../../app/ts/reusable/rm_general/r_firmwareproperties/R_FirmwareProperties");
import rmGeneralBeaconInfo            = require("../../../../../app/ts/reusable/rm_general/r_beaconinfo/R_BeaconInfo");
import rmGeneralCaptureScreenInfo     = require("../../../../../app/ts/reusable/rm_general/r_capturescreeninfo/R_CaptureScreenInfo");
import rmGeneralEddystoneInfo         = require("../../../../../app/ts/reusable/rm_general/r_eddystoneinfo/R_EddystoneInfo");
import rmGeneralPlatformInfo          = require("../../../../../app/ts/reusable/rm_general/r_platforminfo/R_PlatformInfo");
import rmGeneralSystemUsageInfo       = require("../../../../../app/ts/reusable/rm_general/r_systemusageinfo/R_SystemUsageInfo");
import rmGeneralWifiSoftAppInfo       = require("../../../../../app/ts/reusable/rm_general/r_wifisoftappinfo/R_WifiSoftAppInfo");
import rmGeneralFailureModeInfo       = require("../../../../../app/ts/reusable/rm_general/r_failuremodeinfo/R_FailureModeInfo");
import rmGeneralPowerSaveModeInfo     = require("../../../../../app/ts/reusable/rm_general/r_powersavemodeinfo/R_PowerSaveModeInfo");
import rmGeneralTileInfo              = require("../../../../../app/ts/reusable/rm_general/r_tileinfo/R_TileInfo");
import rmGeneralSystemMonitorInfo     = require("../../../../../app/ts/reusable/rm_general/r_systemmonitorinfo/R_SystemMonitorInfo");
import rmGeneralUsageData             = require("../../../../../app/ts/reusable/rm_general/r_usagedata/R_UsageData");
import rmGeneralUsagePermissions      = require("../../../../../app/ts/reusable/rm_general/r_usagepermissions/R_UsagePermissions");
import rmGeneralDeviceTimerInfo       = require("../../../../../app/ts/reusable/rm_general/r_devicetimerinfo/R_DeviceTimerInfo");
import rmGeneralShaProperties         = require("../../../../../app/ts/reusable/rm_general/r_shaproperties/R_ShaProperties");
import rmGeneralXmlJsonObject         = require("../../../../../app/ts/reusable/rm_general/r_xmljsonobject/R_XmlJsonObject");

import rmGeneralXmlDocument           = require("../../../../../app/ts/reusable/rm_general/re_xmlobjects/RE_XmlDocument");
import rmGeneralXmlNode               = require("../../../../../app/ts/reusable/rm_general/re_xmlobjects/RE_XmlNode");

import rmGeneralQueue                 = require("../../../../../app/ts/reusable/rm_general/re_queue/RE_Queue");
import rmGeneralEvent                 = require("../../../../../app/ts/reusable/rm_general/re_event/RE_Event");
import rmGeneralRandom                = require("../../../../../app/ts/reusable/rm_general/re_random/RE_Random");
import rmGeneralDiffusion             = require("../../../../../app/ts/reusable/rm_general/re_diffusion/RE_Diffusion");

import rmPlaybackHardwareSettings     = require("../../../../../app/ts/reusable/rm_playback/r_hardwaresettings/R_HardwareSettings");
import rmPlaybackOpeningHours         = require("../../../../../app/ts/reusable/rm_playback/r_openinghours/R_OpeningHours");
import rmPlaybackDayOpeningHours      = require("../../../../../app/ts/reusable/rm_playback/r_openinghours/R_DayOpeningHours");
import rmPlaybackScreenSaverConfig    = require("../../../../../app/ts/reusable/rm_playback/re_screensaverconfig/RE_ScreenSaverConfig"); 
import rmGeneralPlaybackGlobalConfig  = require("../../../../../app/ts/reusable/rm_playback/re_playbackglobalconfig/RE_PlaybackGlobalConfig");

import rmCoreServicesMainPlaylist              = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_MainPlaylist");
import rmCoreServicesTagManager                = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_TagManager");
import rmCoreServicesPlaylistItem              = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem");
import rmCoreServicesPlaylistItemContainer     = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_Container");
import rmCoreServicesPlaylistItemDesign        = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_Design");
import rmCoreServicesPlaylistItemDesignZone    = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_DesignZone");
import rmCoreServicesPlaylistItemEvent         = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_Event");
import rmCoreServicesPlaylistItemEvents        = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_Events");
import rmCoreServicesPlaylistItemFillRect      = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_FillRect");
import rmCoreServicesPlaylistItemFlash         = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_Flash");
import rmCoreServicesPlaylistItemHtmlTemplate  = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_HtmlTemplate");
import rmCoreServicesPlaylistItemImage         = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_Image");
import rmCoreServicesPlaylistItemPlaylist      = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_Playlist");
import rmCoreServicesPlaylistItemPriorityPlaylist = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_PriorityPlaylist");
import rmCoreServicesPlaylistItemStream        = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_Stream");
import rmCoreServicesPlaylistItemScreenSaverImage  = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_ScreenSaverImage");
import rmCoreServicesPlaylistItemScreenSaverVideo  = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_ScreenSaverVideo");
import rmCoreServicesPlaylistItemTag           = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_Tag");
import rmCoreServicesPlaylistItemRealTag       = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_RealTag");
import rmCoreServicesPlaylistItemTVPassThrough = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_TVPassThrough");
import rmCoreServicesPlaylistItemTVTunner      = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_TVTunner");
import rmCoreServicesPlaylistItemVideo         = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_Video");
import rmCoreServicesPlaylistItemVideoStream   = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_VideoStream");
import rmCoreServicesPlaylistItemWebPage       = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_WebPage");

import rmCoreServicesMainPlaylistLogic              = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_MainPlaylist_Logic");
import rmCoreServicesTagManagerLogic                = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_TagManager_Logic");
import rmCoreServicesPlaylistItemLogic              = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_Logic");
import rmCoreServicesPlaylistItemContainerLogic     = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_ContainerLogic");
import rmCoreServicesPlaylistItemDesignLogic        = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_DesignLogic");
import rmCoreServicesPlaylistItemDesignZoneLogic    = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_DesignZoneLogic");
import rmCoreServicesPlaylistItemDesignMainZoneLogic = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_DesignMainZoneLogic");
import rmCoreServicesPlaylistItemEventLogic         = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_EventLogic");
import rmCoreServicesPlaylistItemEventsLogic        = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_EventsLogic");
import rmCoreServicesPlaylistItemFillRectLogic      = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_FillRectLogic");
import rmCoreServicesPlaylistItemFlashLogic         = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_FlashLogic");
import rmCoreServicesPlaylistItemHtmlTemplateLogic  = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_HtmlTemplateLogic");
import rmCoreServicesPlaylistItemImageLogic         = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_ImageLogic");
import rmCoreServicesPlaylistItemPlaylistLogic      = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_PlaylistLogic");
import rmCoreServicesPlaylistItemPriorityPlaylistLogic = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_PriorityPlaylistLogic");
import rmCoreServicesPlaylistItemStreamLogic        = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_StreamLogic");
import rmCoreServicesPlaylistItemScreenSaverImageLogic = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_ScreenSaverImageLogic");
import rmCoreServicesPlaylistItemScreenSaverVideoLogic = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_ScreenSaverVideoLogic");
import rmCoreServicesPlaylistItemTagLogic           = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_TagLogic");
import rmCoreServicesPlaylistItemRealTagLogic       = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_RealTagLogic");
import rmCoreServicesPlaylistItemTVPassThroughLogic = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_TVPassThroughLogic");
import rmCoreServicesPlaylistItemTVTunnerLogic      = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_TVTunnerLogic");
import rmCoreServicesPlaylistItemVideoLogic         = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_VideoLogic");
import rmCoreServicesPlaylistItemVideoStreamLogic   = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_VideoStreamLogic");
import rmCoreServicesPlaylistItemWebPageLogic       = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_WebPageLogic");

import rmCoreServicesPlaylistItemStatus               = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_Status");
import rmCoreServicesPlaylistItemStatusDisable        = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusDisable");
import rmCoreServicesPlaylistItemStatusEnd            = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusEnd");
import rmCoreServicesPlaylistItemStatusError          = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusError");
import rmCoreServicesPlaylistItemStatusPlay           = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusPlay");
import rmCoreServicesPlaylistItemStatusPlay_List      = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusPlay_List");
import rmCoreServicesPlaylistItemStatusPlay_Media     = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusPlay_Media");
import rmCoreServicesPlaylistItemStatusRequestToAbort = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToAbort");
import rmCoreServicesPlaylistItemStatusRequestToAbort_List  = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToAbort_List");
import rmCoreServicesPlaylistItemStatusRequestToAbort_Media = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToAbort_Media");
import rmCoreServicesPlaylistItemStatusRequestToAbortOrEndBeforePlay = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay");
import rmCoreServicesPlaylistItemStatusRequestToAbortOrEndBeforePlay_List  = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay_List");
import rmCoreServicesPlaylistItemStatusRequestToAbortOrEndBeforePlay_Media = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay_Media");
import rmCoreServicesPlaylistItemStatusRequestToEnd          = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToEnd");
import rmCoreServicesPlaylistItemStatusRequestToEnd_List     = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToEnd_List");
import rmCoreServicesPlaylistItemStatusRequestToEnd_Media    = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToEnd_Media");
import rmCoreServicesPlaylistItemStatusRequestToPlay         = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToPlay");
import rmCoreServicesPlaylistItemStatusRequestToPlay_List    = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToPlay_List");
import rmCoreServicesPlaylistItemStatusRequestToPlay_Media   = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToPlay_Media");
import rmCoreServicesPlaylistItemStatusRequestToResume       = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToResume");
import rmCoreServicesPlaylistItemStatusRequestToResume_List  = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToResume_List");
import rmCoreServicesPlaylistItemStatusRequestToResume_Media = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToResume_Media");
import rmCoreServicesPlaylistItemStatusRequestToSuspend      = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToSuspend");
import rmCoreServicesPlaylistItemStatusRequestToSuspend_List = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToSuspend_List");
import rmCoreServicesPlaylistItemStatusRequestToSuspend_Media = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToSuspend_Media");
import rmCoreServicesPlaylistItemStatusSelectNextChildToPlay = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusSelectNextChildToPlay");
import rmCoreServicesPlaylistItemStatusSuspended             = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusSuspended");
import rmCoreServicesPlaylistItemTransition                  = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_Transition");

import rmCoreServicesPlaylistController        = require("../../../../../app/ts/reusable/rm_coreservices/r_playlistcontroller/R_PlaylistController");
import rmCoreServicesPlaylistControllerConfig  = require("../../../../../app/ts/reusable/rm_coreservices/r_playlistcontroller/RE_PlaylistControllerConfig");
import rmCoreServicesRenderingController       = require("../../../../../app/ts/reusable/rm_coreservices/r_renderingcontroller/R_RenderingController");
import rmCoreServicesRenderingControllerConfig = require("../../../../../app/ts/reusable/rm_coreservices/r_renderingcontroller/RE_RenderingControllerConfig");

import rmRenderingServicesHtmlZone             = require("../../../../../app/ts/reusable/rm_renderingservices/re_htmlzone/RE_HtmlZone");
import rmRenderingServicesHtmlZonePool         = require("../../../../../app/ts/reusable/rm_renderingservices/re_htmlzone/RE_HtmlZonePool");

import rmRenderParametersAllParameters     = require("../../../../../app/ts/reusable/rm_renderingservices/re_renderparams/RE_RenderParams_AllParameters");
import rmRenderParametersIdentification = require("../../../../../app/ts/reusable/rm_renderingservices/re_renderparams/RE_RenderParams_Identification");
import rmRenderParametersItemPosAndSize = require("../../../../../app/ts/reusable/rm_renderingservices/re_renderparams/RE_RenderParams_ItemPosAndSize");
import rmRenderParametersContainerPosAndSize = require("../../../../../app/ts/reusable/rm_renderingservices/re_renderparams/RE_RenderParams_ContainerPosAndSize");
import rmRenderParametersDuration = require("../../../../../app/ts/reusable/rm_renderingservices/re_renderparams/RE_RenderParams_Duration");
import rmRenderParametersBackground = require("../../../../../app/ts/reusable/rm_renderingservices/re_renderparams/RE_RenderParams_Background");
import rmRenderParametersImage = require("../../../../../app/ts/reusable/rm_renderingservices/re_renderparams/RE_RenderParams_Image");
import rmRenderParametersWebImage = require("../../../../../app/ts/reusable/rm_renderingservices/re_renderparams/RE_RenderParams_WebImage");
import rmRenderParametersVideo    = require("../../../../../app/ts/reusable/rm_renderingservices/re_renderparams/RE_RenderParams_Video");
import rmRenderParametersVideoStream = require("../../../../../app/ts/reusable/rm_renderingservices/re_renderparams/RE_RenderParams_VideoStream");
import rmRenderParametersAudio    = require("../../../../../app/ts/reusable/rm_renderingservices/re_renderparams/RE_RenderParams_Audio");
import rmRenderParametersWebPage  = require("../../../../../app/ts/reusable/rm_renderingservices/re_renderparams/RE_RenderParams_WebPage");
import rmRenderParametersHtmlTemplate = require("../../../../../app/ts/reusable/rm_renderingservices/re_renderparams/RE_RenderParams_HtmlTemplate");
import rmRenderParametersFillRect = require("../../../../../app/ts/reusable/rm_renderingservices/re_renderparams/RE_RenderParams_FillRect");

import rmControlPrepareParams      = require("../../../../../app/ts/reusable/rm_renderingservices/re_controlparams/RE_ControlParams_Prepare");
import rmControlPrepareParamsPool  = require("../../../../../app/ts/reusable/rm_renderingservices/re_controlparams/RE_ControlParams_PreparePool");
import rmControlRunParams          = require("../../../../../app/ts/reusable/rm_renderingservices/re_controlparams/RE_ControlParams_Run");
import rmControlRunParamsPool      = require("../../../../../app/ts/reusable/rm_renderingservices/re_controlparams/RE_ControlParams_RunPool");
import rmControlStopParams         = require("../../../../../app/ts/reusable/rm_renderingservices/re_controlparams/RE_ControlParams_Stop");
import rmControlStopParamsPool     = require("../../../../../app/ts/reusable/rm_renderingservices/re_controlparams/RE_ControlParams_StopPool");
import rmControlStatusParams       = require("../../../../../app/ts/reusable/rm_renderingservices/re_controlparams/RE_ControlParams_Status");
import rmControlStatusParamsPool   = require("../../../../../app/ts/reusable/rm_renderingservices/re_controlparams/RE_ControlParams_StatusPool");

import rmPlaylistControllerConfig  = require("../../../../../app/ts/reusable/rm_coreservices/r_playlistcontroller/RE_PlaylistControllerConfig");
import rmRenderingControllerConfig = require("../../../../../app/ts/reusable/rm_coreservices/r_renderingcontroller/RE_RenderingControllerConfig");

import rmConfigurationServicesPlatformConfigurator  = require("../../../../../app/ts/reusable/rm_configurationservices/r_platformconfigurator/R_PlatformConfigurator");
import rmConfigurationServicesServiceLocator        = require("../../../../../app/ts/reusable/rm_configurationservices/r_servicelocator/R_ServiceLocator");
import rmConfigurationServicesServiceContainer      = require("../../../../../app/ts/reusable/rm_configurationservices/r_servicecontainer/R_ServiceContainer");

import rmConfigurationServices2 = require("../../../../../app/ts/reusable/rm_configurationservices/r_servicelocator/IImpl_ServiceLocator_FactorySetup_R");
import rmConfigurationServices3 = require("../../../../../app/ts/reusable/rm_configurationservices/r_servicelocator/IImpl_ServiceLocator_EntityCreation_R");
import rmConfigurationServices4 = require("../../../../../app/ts/reusable/rm_configurationservices/r_servicelocator/IImpl_ServiceLocator_ServiceCreation_R");

//import rmTransversalServices3 = require("../../../../../app/ts/reusable/rm_transversalservices/r_logservice/R_LogService");
//import mod2_NFactory_SDK_WebOS = require("../../../../../app/ts/native/nm_transversalservices/n_sdk_webos/NFactory_SDK_WebOS");
//import * as rmConfig                  from "../../../../../config/StartupConfig";
//------------------------------------------------------
import * as mod_NFactory_SDK_WebOS             from "../../../../../app/ts/native/nm_transversalservices/n_sdk_webos/NFactory_SDK_WebOS";
import * as mod_NFactory_VideoRenderer_WebOS   from "../../../../../app/ts/native/nm_renderingservices/n_videorenderer_webos/NFactory_VideoRenderer_WebOS";

import * as mod_NFactory_SDK_Tizen             from "../../../../../app/ts/native/nm_transversalservices/n_sdk_tizen/NFactory_SDK_Tizen";
import * as mod_NFactory_VideoRenderer_Tizen   from "../../../../../app/ts/native/nm_renderingservices/n_videorenderer_tizen/NFactory_VideoRenderer_Tizen";

import * as mod_NFactory_SDK_NodeJs            from "../../../../../app/ts/native/nm_transversalservices/n_sdk_nodejs/NFactory_SDK_NodeJs";
import * as mod_NFactory_SDK_StandaloneBrowser from "../../../../../app/ts/native/nm_transversalservices/n_sdk_standalonebrowser/NFactory_SDK_StandaloneBrowser";

import * as mod_RFactory_ImageRenderer         from "../../../../../app/ts/reusable/rm_renderingservices/r_imagerenderer/RFactory_ImageRenderer";
import * as mod_RFactory_BackgroundRenderer    from "../../../../../app/ts/reusable/rm_renderingservices/r_backgroundrenderer/RFactory_BackgroundRenderer";
import * as mod_RFactory_FillRectRenderer      from "../../../../../app/ts/reusable/rm_renderingservices/r_fillrectrenderer/RFactory_FillRectRenderer";
import * as mod_RFactory_FlashRenderer         from "../../../../../app/ts/reusable/rm_renderingservices/r_flashrenderer/RFactory_FlashRenderer";
import * as mod_RFactory_HtmlRenderer          from "../../../../../app/ts/reusable/rm_renderingservices/r_htmlrenderer/RFactory_HtmlRenderer";
import * as mod_RFactory_RenderingZone         from "../../../../../app/ts/reusable/rm_renderingservices/r_renderingzone/RFactory_RenderingZone";
import * as mod_RFactory_ScreenSaverRenderer   from "../../../../../app/ts/reusable/rm_renderingservices/r_screensaverrenderer/RFactory_ScreenSaverRenderer";
import * as mod_RFactory_TvHdmiPassThroughSrv  from "../../../../../app/ts/reusable/rm_renderingservices/r_tvhdmipassthroughsrv/RFactory_TvHdmiPassThroughSrv";
import * as mod_RFactory_VideoRenderer         from "../../../../../app/ts/reusable/rm_renderingservices/r_videorenderer/RFactory_VideoRenderer";

import * as mod_RFactory_LogService            from "../../../../../app/ts/reusable/rm_transversalservices/r_logservice/RFactory_LogService";
import * as mod_RFactory_UtilsService          from "../../../../../app/ts/reusable/rm_transversalservices/r_utilsservice/RFactory_UtilsService";
import * as mod_RFactory_XmlConfigurator       from "../../../../../app/ts/reusable/rm_transversalservices/r_xmlconfigurator/RFactory_XmlConfigurator";

import * as mod_RFactory_ChronService          from "../../../../../app/ts/reusable/rm_nonrenderingservices/r_chronservice/RFactory_ChronService";
import * as mod_RFactory_DiagnosticsService    from "../../../../../app/ts/reusable/rm_nonrenderingservices/r_diagnosticsservice/RFactory_DiagnosticsService";
import * as mod_RFactory_EnvUpdaterService     from "../../../../../app/ts/reusable/rm_nonrenderingservices/r_envupdaterservice/RFactory_EnvUpdaterService";
import * as mod_RFactory_LiveCommandsService   from "../../../../../app/ts/reusable/rm_nonrenderingservices/r_livecommandsservice/RFactory_LiveCommandsService";
import * as mod_RFactory_MonitoringService     from "../../../../../app/ts/reusable/rm_nonrenderingservices/r_monitoringservice/RFactory_MonitoringService";
import * as mod_RFactory_PlayerFilesUpdater    from "../../../../../app/ts/reusable/rm_nonrenderingservices/r_playerfilesupdater/RFactory_PlayerFilesUpdater";
import * as mod_RFactory_PurgeService          from "../../../../../app/ts/reusable/rm_nonrenderingservices/r_purgeservice/RFactory_PurgeService";
import * as mod_RFactory_SendLogService        from "../../../../../app/ts/reusable/rm_nonrenderingservices/r_sendlogservice/RFactory_SendLogService";
import * as mod_RFactory_StatisticsService     from "../../../../../app/ts/reusable/rm_nonrenderingservices/r_statisticsservice/RFactory_StatisticsService";
import * as mod_RFactory_WatchDogService       from "../../../../../app/ts/reusable/rm_nonrenderingservices/r_watchdogservice/RFactory_WatchDogService";

import * as mod_RFactory_PlaylistWatcher       from "../../../../../app/ts/reusable/rm_coreservices/r_playlistwatcher/RFactory_PlaylistWatcher";
import * as mod_RFactory_PlaylistDownloader    from "../../../../../app/ts/reusable/rm_coreservices/r_playlistdownloader/RFactory_PlaylistDownloader";
import * as mod_RFactory_PlaylistController    from "../../../../../app/ts/reusable/rm_coreservices/r_playlistcontroller/RFactory_PlaylistController";
import * as mod_RFactory_RenderingController   from "../../../../../app/ts/reusable/rm_coreservices/r_renderingcontroller/RFactory_RenderingController";


import * as mod_REFactory_PlaylistItem         from "../../../../../app/ts/reusable/rm_coreservices/re_playlist/REFactory_PlaylistItem";

//-------------------------------------------------------

export module rm_configurationservices
{
  export class R_ServiceLocator extends rmGeneralService.rm_general.R_Service 
                                implements amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator
  {

    //--- data members
    _srvFactories: amGeneralServiceFactories.am_general.A_ServiceFactories;  //Array<amGeneralFactoryService.am_general.AFactory_Service>;
    _entFactories: amGeneralEntityFactories.am_general.A_EntityFactories;   //Array<amGeneralFactoryEntity.am_general.AFactory_Entity>;

    //---------- interfaces
    _iFactorySetup    : amConfigurationServices2.am_configurationservices.I_ServiceLocator_FactorySetup ;
    _iEntityCreation  : amConfigurationServices3.am_configurationservices.I_ServiceLocator_EntityCreation ;    
    _iServiceCreation : amConfigurationServices4.am_configurationservices.I_ServiceLocator_ServiceCreation ;    

    //----------- composants 
    
    //----------- constructor 
    constructor( aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription, 
                 aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                 aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                 error              : amGeneralError.am_general.A_Error)  
    {      
      super(aFactoryDescription, aServiceContainer, aLogService, error);

      this._iFactorySetup    = new rmConfigurationServices2.rm_configurationservices.IImpl_ServiceLocator_FactorySetup_R(this) ;
      this._iEntityCreation  = new rmConfigurationServices3.rm_configurationservices.IImpl_ServiceLocator_EntityCreation_R(this) ;
      this._iServiceCreation = new rmConfigurationServices4.rm_configurationservices.IImpl_ServiceLocator_ServiceCreation_R(this) ;      

      this._srvFactories = this.createDefaultServiceFactories(error); //new Array<amGeneralFactoryService.am_general.AFactory_Service>(); //temporary
      this._entFactories = this.createDefaultEntityFactories(error);  //new Array<amGeneralFactoryEntity.am_general.AFactory_Entity>();

    }

    //----------------------------------
    public injectDependencies( aServiceContainer : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer, 
                               aServiceLocator   : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator, 
                               aLogService       : amTransversalServicesLogService.am_transversalservices.A_LogService, 
                               error : amGeneralError.am_general.A_Error) : number     
    {
      return 0;
    }

    //------------------
    public addServiceFactory(aServiceFactory: amGeneralServiceFactory.am_general.AFactory_Service, error: amGeneralError.am_general.A_Error):  void
    {
      return this._srvFactories.addServiceFactory(aServiceFactory, error);
    }
    
    //------------------
    public addEntityFactory(aEntityFactory: amGeneralEntityFactory.am_general.AFactory_Entity, error: amGeneralError.am_general.A_Error):  void
    {
      return this._entFactories.addEntityFactory(aEntityFactory, error);
    }

    //----------------------
    public createAllStartupServices( error: amGeneralError.am_general.A_Error) : void
    {
      var listSrvFactories = this._srvFactories.getServiceFactories(error);
      var idx = 0;
      for (let aServiceFactory of listSrvFactories) 
      {
        //aServiceFactory.createService(aServiceFactory.get...);
        //idx++;
        //document.getElementById("maindiv").innerHTML += "<h3>" + idx + ". " + aServiceFactory.getFactoryName() + "</h3>";
        //alert(aServiceFactory.getFactoryName());
      }
    }

    //-------------------
    public addCreatedServiceFactory( aServiceFactory     : amGeneralServiceFactory.am_general.AFactory_Service,
                                     idxFactory          : number,
                                     nbExpectedFactories : number,
                                     error: amGeneralError.am_general.A_Error,
                                     bTimeOut: boolean) : void
    {
      document.getElementById("maindiv").innerHTML += "<p>" + idxFactory + ". " + aServiceFactory.getFactoryName() + "</p>";      
      this._iFactorySetup.addServiceFactory(aServiceFactory, error);
    }

    //-------------- setup Service Factories;
    public setupServiceFactories(factoryDescriptions: amGeneralFactoryDescriptions.am_general.A_FactoryDescriptions, error: amGeneralError.am_general.A_Error):  void
    {
      var listSrvFactoryDescriptions = factoryDescriptions.getFactoryDescriptions(error);
      var promises = new Array();
      var aSrvLocator = this;
      var idxFactory: number = 0;
      var nbExpectedFactories = listSrvFactoryDescriptions.length;
      for (let aServiceFactoryDesc of listSrvFactoryDescriptions) 
      {
        //----------------------------------------------------------------
        if (aServiceFactoryDesc._factoryName == "NFactory_SDK_WebOS")
        {
              try{
                 require(["../../../../../app/ts/native/nm_transversalservices/n_sdk_webos/NFactory_SDK_WebOS"], (dynNFactorySDKWebOS: typeof mod_NFactory_SDK_WebOS) => {
                    var aServiceFactory : amGeneralServiceFactory.am_general.AFactory_Service 
                          = new dynNFactorySDKWebOS.nm_transversalservices.NFactory_SDK_WebOS(aServiceFactoryDesc, error);
                    aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                  });
              }catch(e){
              }
        }
        //----------------------------------------------------------------
        if (aServiceFactoryDesc._factoryName == "NFactory_SDK_Tizen")
        {
              try{
                 require(["../../../../../app/ts/native/nm_transversalservices/n_sdk_tizen/NFactory_SDK_Tizen"], (dynNFactorySDKTizen: typeof mod_NFactory_SDK_Tizen) => {
                    var aServiceFactory : amGeneralServiceFactory.am_general.AFactory_Service 
                          = new dynNFactorySDKTizen.nm_transversalservices.NFactory_SDK_Tizen(aServiceFactoryDesc, error);
                    aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                  });
              }catch(e){
              }
        }
        //----------------------------------------------------------------
        if (aServiceFactoryDesc._factoryName == "NFactory_SDK_NodeJs")
        {
              try{
                 require(["../../../../../app/ts/native/nm_transversalservices/n_sdk_nodejs/NFactory_SDK_NodeJs"], (dynNFactory_SDK_NodeJs: typeof mod_NFactory_SDK_NodeJs) => {
                    var aServiceFactory : amGeneralServiceFactory.am_general.AFactory_Service 
                          = new dynNFactory_SDK_NodeJs.nm_transversalservices.NFactory_SDK_NodeJs(aServiceFactoryDesc, error);
                    aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                  });
              }catch(e){
              }
        }
        //----------------------------------------------------------------
        if (aServiceFactoryDesc._factoryName == "NFactory_SDK_StandaloneBrowser")
        {
              try{
                 require(["../../../../../app/ts/native/nm_transversalservices/n_sdk_standalonebrowser/NFactory_SDK_StandaloneBrowser"], 
                  (dynNFactory_SDK_StandaloneBrowser: typeof mod_NFactory_SDK_StandaloneBrowser) => {
                    var aServiceFactory : amGeneralServiceFactory.am_general.AFactory_Service 
                          = new dynNFactory_SDK_StandaloneBrowser.nm_transversalservices.NFactory_SDK_StandaloneBrowser(aServiceFactoryDesc, error);
                    aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                  });
              }catch(e){
              }
        }
        //----------------------------------------------------------------
        if (aServiceFactoryDesc._factoryName == "NFactory_VideoRenderer_WebOS")
        {
              try{
                  require(["../../../../../app/ts/native/nm_renderingservices/n_videorenderer_webos/NFactory_VideoRenderer_WebOS"], (dynNFactory_VideoRenderer_WebOS: typeof mod_NFactory_VideoRenderer_WebOS) => {
                    var aServiceFactory : amGeneralServiceFactory.am_general.AFactory_Service 
                          = new dynNFactory_VideoRenderer_WebOS.nm_renderingservices.NFactory_VideoRenderer_WebOS(aServiceFactoryDesc, error);
                      aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                  });
              }catch(e){
              }
        }
        //----------------------------------------------------------------
        if (aServiceFactoryDesc._factoryName == "NFactory_VideoRenderer_Tizen")
        {
              try{
                  require(["../../../../../app/ts/native/nm_renderingservices/n_videorenderer_tizen/NFactory_VideoRenderer_Tizen"], 
                   (dynNFactory_VideoRenderer_Tizen: typeof mod_NFactory_VideoRenderer_Tizen) => {
                     var aServiceFactory : amGeneralServiceFactory.am_general.AFactory_Service 
                          = new dynNFactory_VideoRenderer_Tizen.nm_renderingservices.NFactory_VideoRenderer_Tizen(aServiceFactoryDesc, error);
                          aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                  });
              }catch(e){
              }
        }
        //----------------------------------------------------------------
        if (aServiceFactoryDesc._factoryName == "RFactory_ImageRenderer")
        {
              try{
                  require(["../../../../../app/ts/reusable/rm_renderingservices/r_imagerenderer/RFactory_ImageRenderer"], 
                   (dynRFactory_ImageRenderer: typeof mod_RFactory_ImageRenderer) => {
                    var aServiceFactory : amGeneralServiceFactory.am_general.AFactory_Service 
                          = new dynRFactory_ImageRenderer.rm_renderingservices.RFactory_ImageRenderer(aServiceFactoryDesc, error);
                    aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                  });
              }catch(e){
              }
        } 
        //----------------------------------------------------------------
        if (aServiceFactoryDesc._factoryName == "RFactory_BackgroundRenderer")
        {
              try{
                  require(["../../../../../app/ts/reusable/rm_renderingservices/r_backgroundrenderer/RFactory_BackgroundRenderer"], 
                   (dynRFactory_BackgroundRenderer: typeof mod_RFactory_BackgroundRenderer) => {
                    var aServiceFactory : amGeneralServiceFactory.am_general.AFactory_Service 
                          = new dynRFactory_BackgroundRenderer.rm_renderingservices.RFactory_BackgroundRenderer(aServiceFactoryDesc, error);
                     aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                  });
              }catch(e){
              }
        } 
        //----------------------------------------------------------------
        if (aServiceFactoryDesc._factoryName == "RFactory_FillRectRenderer")
        {
              try{
                  require(["../../../../../app/ts/reusable/rm_renderingservices/r_fillrectrenderer/RFactory_FillRectRenderer"], 
                   (dynRFactory_FillRectRenderer: typeof mod_RFactory_FillRectRenderer) => {
                    var aServiceFactory : amGeneralServiceFactory.am_general.AFactory_Service 
                          = new dynRFactory_FillRectRenderer.rm_renderingservices.RFactory_FillRectRenderer(aServiceFactoryDesc, error);
                      aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                  });
              }catch(e){
              }
        } 
        //----------------------------------------------------------------
        if (aServiceFactoryDesc._factoryName == "RFactory_FlashRenderer")
        {
              try{
                  require(["../../../../../app/ts/reusable/rm_renderingservices/r_flashrenderer/RFactory_FlashRenderer"], 
                   (dynRFactory_FlashRenderer: typeof mod_RFactory_FlashRenderer) => {
                    var aServiceFactory : amGeneralServiceFactory.am_general.AFactory_Service 
                          = new dynRFactory_FlashRenderer.rm_renderingservices.RFactory_FlashRenderer(aServiceFactoryDesc, error);
                    aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                  });
              }catch(e){
              }
        } 
        //----------------------------------------------------------------
        if (aServiceFactoryDesc._factoryName == "RFactory_HtmlRenderer")
        {
              try{
                  require(["../../../../../app/ts/reusable/rm_renderingservices/r_htmlrenderer/RFactory_HtmlRenderer"], 
                   (dynRFactory_HtmlRenderer: typeof mod_RFactory_HtmlRenderer) => {
                    var aServiceFactory : amGeneralServiceFactory.am_general.AFactory_Service 
                          = new dynRFactory_HtmlRenderer.rm_renderingservices.RFactory_HtmlRenderer(aServiceFactoryDesc, error);
                          aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                    });
              }catch(e){
              }
        } 
        //----------------------------------------------------------------
        if (aServiceFactoryDesc._factoryName == "RFactory_RenderingZone")
        {
              try{
                  require(["../../../../../app/ts/reusable/rm_renderingservices/r_renderingzone/RFactory_RenderingZone"], 
                   (dynRFactory_RenderingZone: typeof mod_RFactory_RenderingZone) => {
                    var aServiceFactory : amGeneralServiceFactory.am_general.AFactory_Service 
                          = new dynRFactory_RenderingZone.rm_renderingservices.RFactory_RenderingZone(aServiceFactoryDesc, error);
                          aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                  });
              }catch(e){
              }
        } 
        //----------------------------------------------------------------
        if (aServiceFactoryDesc._factoryName == "RFactory_ScreenSaverRenderer")
        {
              try{
                  require(["../../../../../app/ts/reusable/rm_renderingservices/r_screensaverrenderer/RFactory_ScreenSaverRenderer"], 
                   (dynRFactory_ScreenSaverRenderer: typeof mod_RFactory_ScreenSaverRenderer) => {
                    var aServiceFactory : amGeneralServiceFactory.am_general.AFactory_Service 
                          = new dynRFactory_ScreenSaverRenderer.rm_renderingservices.RFactory_ScreenSaverRenderer(aServiceFactoryDesc, error);
                          aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
              }catch(e){
              }
        } 
        //----------------------------------------------------------------
        if (aServiceFactoryDesc._factoryName == "RFactory_TvHdmiPassThroughSrv")
        {
              try{
                  require(["../../../../../app/ts/reusable/rm_renderingservices/r_tvhdmipassthroughsrv/RFactory_TvHdmiPassThroughSrv"], 
                   (dynRFactory_TvHdmiPassThroughSrv: typeof mod_RFactory_TvHdmiPassThroughSrv) => {
                    var aServiceFactory : amGeneralServiceFactory.am_general.AFactory_Service 
                          = new dynRFactory_TvHdmiPassThroughSrv.rm_renderingservices.RFactory_TvHdmiPassThroughSrv(aServiceFactoryDesc, error);
                    aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                  });
              }catch(e){
              }
        } 
        //----------------------------------------------------------------
        if (aServiceFactoryDesc._factoryName == "RFactory_VideoRenderer")
        {
              try{
                  require(["../../../../../app/ts/reusable/rm_renderingservices/r_videorenderer/RFactory_VideoRenderer"], 
                   (dynRFactory_VideoRenderer: typeof mod_RFactory_VideoRenderer) => {
                    var aServiceFactory : amGeneralServiceFactory.am_general.AFactory_Service 
                          = new dynRFactory_VideoRenderer.rm_renderingservices.RFactory_VideoRenderer(aServiceFactoryDesc, error);
                    aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                  });
              }catch(e){
              }
        } 
        //----------------------------------------------------------------
        if (aServiceFactoryDesc._factoryName == "RFactory_LogService")
        {
              try{
                  require(["../../../../../app/ts/reusable/rm_transversalservices/r_logservice/RFactory_LogService"], 
                   (dynRFactory_LogService: typeof mod_RFactory_LogService) => {
                    var aServiceFactory : amGeneralServiceFactory.am_general.AFactory_Service 
                          = new dynRFactory_LogService.rm_transversalservices.RFactory_LogService(aServiceFactoryDesc, error);
                    aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                  });
              }catch(e){
              }
        } 
        //----------------------------------------------------------------
        if (aServiceFactoryDesc._factoryName == "RFactory_UtilsService")
        {
              try{
                  require(["../../../../../app/ts/reusable/rm_transversalservices/r_utilsservice/RFactory_UtilsService"], 
                   (dynRFactory_UtilsService: typeof mod_RFactory_UtilsService) => {
                    var aServiceFactory : amGeneralServiceFactory.am_general.AFactory_Service 
                          = new dynRFactory_UtilsService.rm_transversalservices.RFactory_UtilsService(aServiceFactoryDesc, error);
                    aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                  });
              }catch(e){
              }
        } 
        //----------------------------------------------------------------
        if (aServiceFactoryDesc._factoryName == "RFactory_XmlConfigurator")
        {
              try{
                  require(["../../../../../app/ts/reusable/rm_transversalservices/r_xmlconfigurator/RFactory_XmlConfigurator"], 
                   (dynRFactory_XMLConfigurator: typeof mod_RFactory_XmlConfigurator) => {
                    var aServiceFactory : amGeneralServiceFactory.am_general.AFactory_Service 
                          = new dynRFactory_XMLConfigurator.rm_transversalservices.RFactory_XmlConfigurator(aServiceFactoryDesc, error);
                    aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                });
              }catch(e){
              }
        } 
        //----------------------------------------------------------------
        if (aServiceFactoryDesc._factoryName == "RFactory_ChronService")
        {
              try{
                  require(["../../../../../app/ts/reusable/rm_nonrenderingservices/r_chronservice/RFactory_ChronService"], 
                   (dynRFactory_ChronService: typeof mod_RFactory_ChronService) => {
                    var aServiceFactory : amGeneralServiceFactory.am_general.AFactory_Service 
                          = new dynRFactory_ChronService.rm_nonrenderingservices.RFactory_ChronService(aServiceFactoryDesc, error);
                    aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                  });
              }catch(e){
              }
        } 
        //----------------------------------------------------------------
        if (aServiceFactoryDesc._factoryName == "RFactory_DiagnosticsService")
        {
              try{
                  require(["../../../../../app/ts/reusable/rm_nonrenderingservices/r_diagnosticsservice/RFactory_DiagnosticsService"], 
                   (dynRFactory_DiagnosticsService: typeof mod_RFactory_DiagnosticsService) => {
                    var aServiceFactory : amGeneralServiceFactory.am_general.AFactory_Service 
                          = new dynRFactory_DiagnosticsService.rm_nonrenderingservices.RFactory_DiagnosticsService(aServiceFactoryDesc, error);
                          aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
              }catch(e){
              }
        } 
        //----------------------------------------------------------------
        if (aServiceFactoryDesc._factoryName == "RFactory_EnvUpdaterService")
        {
              try{
                  require(["../../../../../app/ts/reusable/rm_nonrenderingservices/r_envupdaterservice/RFactory_EnvUpdaterService"], 
                   (dynRFactory_EnvUpdaterService: typeof mod_RFactory_EnvUpdaterService) => {
                    var aServiceFactory : amGeneralServiceFactory.am_general.AFactory_Service 
                          = new dynRFactory_EnvUpdaterService.rm_nonrenderingservices.RFactory_EnvUpdaterService(aServiceFactoryDesc, error);
                      aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                  });
              }catch(e){
              }
        } 
        //----------------------------------------------------------------
        if (aServiceFactoryDesc._factoryName == "RFactory_LiveCommandsService")
        {
              try{
                  require(["../../../../../app/ts/reusable/rm_nonrenderingservices/r_livecommandsservice/RFactory_LiveCommandsService"], 
                   (dynRFactory_LiveCommandsService: typeof mod_RFactory_LiveCommandsService) => {
                    var aServiceFactory : amGeneralServiceFactory.am_general.AFactory_Service 
                          = new dynRFactory_LiveCommandsService.rm_nonrenderingservices.RFactory_LiveCommandsService(aServiceFactoryDesc, error);
                    aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                  });
              }catch(e){
              }
        } 
        //----------------------------------------------------------------
        if (aServiceFactoryDesc._factoryName == "RFactory_MonitoringService")
        {
              try{
                  require(["../../../../../app/ts/reusable/rm_nonrenderingservices/r_monitoringservice/RFactory_MonitoringService"], 
                   (dynRFactory_MonitoringService: typeof mod_RFactory_MonitoringService) => {
                    var aServiceFactory : amGeneralServiceFactory.am_general.AFactory_Service 
                          = new dynRFactory_MonitoringService.rm_nonrenderingservices.RFactory_MonitoringService(aServiceFactoryDesc, error);
                          aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
              }catch(e){
              }
        } 
        //----------------------------------------------------------------
        if (aServiceFactoryDesc._factoryName == "RFactory_PlayerFilesUpdater")
        {
              try{
                  require(["../../../../../app/ts/reusable/rm_nonrenderingservices/r_playerfilesupdater/RFactory_PlayerFilesUpdater"], 
                   (dynRFactory_PlayerFilesUpdater: typeof mod_RFactory_PlayerFilesUpdater) => {
                    var aServiceFactory : amGeneralServiceFactory.am_general.AFactory_Service 
                          = new dynRFactory_PlayerFilesUpdater.rm_nonrenderingservices.RFactory_PlayerFilesUpdater(aServiceFactoryDesc, error);
                    aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                  });
              }catch(e){
              }
        }         
        //----------------------------------------------------------------
        if (aServiceFactoryDesc._factoryName == "RFactory_PurgeService")
        {
              try{
                  require(["../../../../../app/ts/reusable/rm_nonrenderingservices/r_purgeservice/RFactory_PurgeService"], 
                   (dynRFactory_PurgeService: typeof mod_RFactory_PurgeService) => {
                    var aServiceFactory : amGeneralServiceFactory.am_general.AFactory_Service 
                          = new dynRFactory_PurgeService.rm_nonrenderingservices.RFactory_PurgeService(aServiceFactoryDesc, error);
                    aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                  });
              }catch(e){
              }
        } 
        //----------------------------------------------------------------
        if (aServiceFactoryDesc._factoryName == "RFactory_SendLogService")
        {
              try{
                  require(["../../../../../app/ts/reusable/rm_nonrenderingservices/r_sendlogservice/RFactory_SendLogService"], 
                   (dynRFactory_SendLogService: typeof mod_RFactory_SendLogService) => {
                    var aServiceFactory2 : amGeneralServiceFactory.am_general.AFactory_Service 
                          = new dynRFactory_SendLogService.rm_nonrenderingservices.RFactory_SendLogService(aServiceFactoryDesc, error);
                    aSrvLocator.addCreatedServiceFactory(aServiceFactory2, ++idxFactory, nbExpectedFactories, error, false);
                  });
              }catch(e){
              }
        } 
        //----------------------------------------------------------------
        if (aServiceFactoryDesc._factoryName == "RFactory_StatisticsService")
        {
              try{
                  require(["../../../../../app/ts/reusable/rm_nonrenderingservices/r_statisticsservice/RFactory_StatisticsService"], 
                   (dynRFactory_StatisticsService: typeof mod_RFactory_StatisticsService) => {
                    var aServiceFactory : amGeneralServiceFactory.am_general.AFactory_Service 
                          = new dynRFactory_StatisticsService.rm_nonrenderingservices.RFactory_StatisticsService(aServiceFactoryDesc, error);
                    aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                  });
              }catch(e){
              }
        } 
        //----------------------------------------------------------------
        if (aServiceFactoryDesc._factoryName == "RFactory_WatchDogService")
        {
              try{
                  require(["../../../../../app/ts/reusable/rm_nonrenderingservices/r_watchdogservice/RFactory_WatchDogService"], 
                   (dynRFactory_WatchDogService: typeof mod_RFactory_WatchDogService) => {
                    var aServiceFactory : amGeneralServiceFactory.am_general.AFactory_Service 
                          = new dynRFactory_WatchDogService.rm_nonrenderingservices.RFactory_WatchDogService(aServiceFactoryDesc, error);
                    aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                  });
              }catch(e){
              }
        } 
        //----------------------------------------------------------------
        if (aServiceFactoryDesc._factoryName == "RFactory_PlaylistWatcher")
        {
              try{
                  require(["../../../../../app/ts/reusable/rm_coreservices/r_playlistwatcher/RFactory_PlaylistWatcher"], 
                   (dynRFactory_PlaylistWatcher: typeof mod_RFactory_PlaylistWatcher) => {
                    var aServiceFactory : amGeneralServiceFactory.am_general.AFactory_Service 
                          = new dynRFactory_PlaylistWatcher.rm_coreservices.RFactory_PlaylistWatcher(aServiceFactoryDesc, error);
                    aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                  });
              }catch(e){
              }
        } 
        //----------------------------------------------------------------
        if (aServiceFactoryDesc._factoryName == "RFactory_PlaylistDownloader")
        {
              try{
                  require(["../../../../../app/ts/reusable/rm_coreservices/r_playlistdownloader/RFactory_PlaylistDownloader"], 
                   (dynRFactory_PlaylistDownloader: typeof mod_RFactory_PlaylistDownloader) => {
                    var aServiceFactory : amGeneralServiceFactory.am_general.AFactory_Service 
                          = new dynRFactory_PlaylistDownloader.rm_coreservices.RFactory_PlaylistDownloader(aServiceFactoryDesc, error);
                    aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                  });
              }catch(e){
              }
        } 
        //----------------------------------------------------------------
        if (aServiceFactoryDesc._factoryName == "RFactory_PlaylistController")
        {
              try{
                  require(["../../../../../app/ts/reusable/rm_coreservices/r_playlistcontroller/RFactory_PlaylistController"], 
                   (dynRFactory_PlaylistController: typeof mod_RFactory_PlaylistController) => {
                    var aServiceFactory : amGeneralServiceFactory.am_general.AFactory_Service 
                          = new dynRFactory_PlaylistController.rm_coreservices.RFactory_PlaylistController(aServiceFactoryDesc, error);
                    aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                  });
              }catch(e){
              }
        } 
        //----------------------------------------------------------------
        if (aServiceFactoryDesc._factoryName == "RFactory_RenderingController")
        {
              try{
                  require(["../../../../../app/ts/reusable/rm_coreservices/r_renderingcontroller/RFactory_RenderingController"], 
                   (dynRFactory_RenderingController: typeof mod_RFactory_RenderingController) => {
                    var aServiceFactory : amGeneralServiceFactory.am_general.AFactory_Service 
                          = new dynRFactory_RenderingController.rm_coreservices.RFactory_RenderingController(aServiceFactoryDesc, error);
                    aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                  });
              }catch(e){
              }
        }
                                      
        
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
    }  
    
    //-------------- setup Entity Factories;
    public setupEntityFactories(factoryDescriptions: amGeneralFactoryDescriptions.am_general.A_FactoryDescriptions, error: amGeneralError.am_general.A_Error):  void
    {
      var listEntFactoryDescriptions = factoryDescriptions.getFactoryDescriptions(error);
      listEntFactoryDescriptions.forEach( (crtEntFactory, index) => {
        // to do: with conditional import  create each related entity-factory
      });  
    }  


    //----------------------------------
    //  Entity Creation 
    //----------------------------------

    //-------------- create Entity
    public createEntity(entityName: string, error:  amGeneralError.am_general.A_Error): amGeneralEntity.am_general.A_Entity
    {
      this._entFactories.getEntityFactories(error).forEach( (crtEntFactory, index) => {
        // to do: with conditional import  call crtEntFactory.createEntity till one creation will succeed
     });  
     return null;
    }

    //----------- create a default Error object
    public createDefaultError() : amGeneralError.am_general.A_Error
    {
      return new rmGeneralError.rm_general.R_Error(); 
    }

    //----------- create a default Error object
    public static startupCreateDefaultError() : amGeneralError.am_general.A_Error
    {
      return new rmGeneralError.rm_general.R_Error(); 
    }

    //----------- create a default Error object
    public createDefaultContext() : amGeneralContext.am_general.A_Context
    {
      return new rmGeneralContext.rm_general.R_Context(); 
    }

    //----------- create a default Context object
    public static startupCreateDefaultContext() : amGeneralContext.am_general.A_Context
    {
      return new rmGeneralContext.rm_general.R_Context(); 
    }
    
    //----------- create a default Property object
    public createDefaultProperty(error : amGeneralError.am_general.A_Error) : amGeneralProperty.am_general.A_Property
    {
      return new rmGeneralProperty.rm_general.R_Property(); 
    }
   
    //----------- create a default list of Properties
    public createDefaultProperties(error : amGeneralError.am_general.A_Error)  : amGeneralProperties.am_general.A_Properties
    {
      return new rmGeneralProperties.rm_general.R_Properties(); 
    }
       
   
    //----------- create a default list of Factory Descriptions
    public createDefaultFactoryDescriptions(error : amGeneralError.am_general.A_Error)  : amGeneralFactoryDescriptions.am_general.A_FactoryDescriptions
    {
      return new rmGeneralFactoryDescriptions.rm_general.R_FactoryDescriptions(); 
    }

    //----------- create a default Factory Description
    public createDefaultFactoryDescription(error : amGeneralError.am_general.A_Error) : amGeneralFactoryDescription.am_general.A_FactoryDescription
    {
      return new rmGeneralFactoryDescription.rm_general.R_FactoryDescription(); 
    }

    //----------- create a default Factory Description
    public static startupCreateDefaultFactoryDescription(error : amGeneralError.am_general.A_Error) : amGeneralFactoryDescription.am_general.A_FactoryDescription
    {
      return new rmGeneralFactoryDescription.rm_general.R_FactoryDescription(); 
    }

    //----------- create a default list of Service factories
    public createDefaultServiceFactories(error : amGeneralError.am_general.A_Error)  : amGeneralServiceFactories.am_general.A_ServiceFactories
    {
      return new rmGeneralServiceFactories.rm_general.R_ServiceFactories(); 
    }

    //----------- create a default list of Service factories
    public createDefaultEntityFactories(error : amGeneralError.am_general.A_Error)  : amGeneralEntityFactories.am_general.A_EntityFactories
    {
      return new rmGeneralEntityFactories.rm_general.R_EntityFactories(); 
    }

    //----------- create a default date-time object
    public createDefaultDateTime(error : amGeneralError.am_general.A_Error)  : amGeneralDateTime.am_general.A_DateTime
    {
      return new rmGeneralDateTime.rm_general.R_DateTime(); 
    }

    //----------- create a default time-zone object
    public createDefaultTimeZone(error : amGeneralError.am_general.A_Error)  : amGeneralTimeZone.am_general.A_TimeZone
    {
      return new rmGeneralTimeZone.rm_general.R_TimeZone(); 
    }

    //----------- create a default audio-properties object
    public createDefaultSoundProperties(error : amGeneralError.am_general.A_Error)  : amGeneralSoundProperties.am_general.A_SoundProperties
    {
      return new rmGeneralSoundProperties.rm_general.R_SoundProperties(); 
    }
    
    //----------- create a default screen-properties object
    public createDefaultScreenProperties(error : amGeneralError.am_general.A_Error)  : amGeneralScreenProperties.am_general.A_ScreenProperties
    {
      return new rmGeneralScreenProperties.rm_general.R_ScreenProperties(); 
    }

    //----------- create a default appserver-properties object
    public createDefaultAppServerProperties(error : amGeneralError.am_general.A_Error)  : amGeneralAppServerProperties.am_general.A_AppServerProperties
    {
      return new rmGeneralAppServerProperties.rm_general.R_AppServerProperties(); 
    }

    //----------- create a default appserver-properties object
    public createDefaultFileInfo(error : amGeneralError.am_general.A_Error)  : amGeneralFileInfo.am_general.A_FileInfo
    {
      return new rmGeneralFileInfo.rm_general.R_FileInfo(); 
    }

    //----------- create a default network-properties object
    public createDefaultNetworkProperties(error : amGeneralError.am_general.A_Error)  : amGeneralNetworkProperties.am_general.A_NetworkProperties
    {
      return new rmGeneralNetworkProperties.rm_general.R_NetworkProperties(); 
    }

    //----------- create a default network-card-properties object
    public createDefaultNetworkCardProperties(error : amGeneralError.am_general.A_Error)  : amGeneralNetworkCardProperties.am_general.A_NetworkCardProperties
    {
      return new rmGeneralNetworkCardProperties.rm_general.R_NetworkCardProperties(); 
    }

    //----------- create a default network-proxy-properties object
    public createDefaultNetworkProxyProperties(error : amGeneralError.am_general.A_Error)  : amGeneralNetworkProxyProperties.am_general.A_NetworkProxyProperties
    {
      return new rmGeneralNetworkProxyProperties.rm_general.R_NetworkProxyProperties(); 
    }

    //----------- create a default wifi-connection-info object
    public createDefaultWifiConnectionInfo(error : amGeneralError.am_general.A_Error)  : amGeneralWifiConnectionInfo.am_general.A_WifiConnectionInfo
    {
      return new rmGeneralWifiConnectionInfo.rm_general.R_WifiConnectionInfo(); 
    }


    //----------- create a default appserver-properties object
    public createDefaultFirmwareProperties(error : amGeneralError.am_general.A_Error)  : amGeneralFirmwareProperties.am_general.A_FirmwareProperties
    {
      return new rmGeneralFirmwareProperties.rm_general.R_FirmwareProperties(); 
    }    

    //----------- create a default beacon-info object
    public createDefaultBeaconInfo(error : amGeneralError.am_general.A_Error)  : amGeneralBeaconInfo.am_general.A_BeaconInfo
    {
      return new rmGeneralBeaconInfo.rm_general.R_BeaconInfo(); 
    }    

        //----------- create a default eddystone-info object
    public createDefaultEddystoneInfo(error : amGeneralError.am_general.A_Error)  : amGeneralEddystoneInfo.am_general.A_EddystoneInfo
    {
      return new rmGeneralEddystoneInfo.rm_general.R_EddystoneInfo(); 
    }    

    //----------- create a default capture-screen-info object
    public createDefaultCaptureScreenInfo(error : amGeneralError.am_general.A_Error)  : amGeneralCaptureScreenInfo.am_general.A_CaptureScreenInfo
    {
      return new rmGeneralCaptureScreenInfo.rm_general.R_CaptureScreenInfo(); 
    }    

    //----------- create a default platform-info object
    public createDefaultPlatformInfo(error : amGeneralError.am_general.A_Error)  : amGeneralPlatformInfo.am_general.A_PlatformInfo
    {
      return new rmGeneralPlatformInfo.rm_general.R_PlatformInfo(); 
    }    

    //----------- create a default system-usage-info object
    public createDefaultSystemUsageInfo(error : amGeneralError.am_general.A_Error)  : amGeneralSystemUsageInfo.am_general.A_SystemUsageInfo
    {
      return new rmGeneralSystemUsageInfo.rm_general.R_SystemUsageInfo(); 
    }    

    //----------- create a default system-usage-info object
    public createDefaultWifiSoftAppInfo(error : amGeneralError.am_general.A_Error)  : amGeneralWifiSoftAppInfo.am_general.A_WifiSoftAppInfo
    {
      return new rmGeneralWifiSoftAppInfo.rm_general.R_WifiSoftAppInfo(); 
    }    

    //----------- create a default failure-mode-info object
    public createDefaultFailureModeInfo(error : amGeneralError.am_general.A_Error)  : amGeneralFailureModeInfo.am_general.A_FailureModeInfo
    {
      return new rmGeneralFailureModeInfo.rm_general.R_FailureModeInfo(); 
    }    

    //----------- create a default power-save-mode-info object
    public createDefaultPowerSaveModeInfo(error : amGeneralError.am_general.A_Error)  : amGeneralPowerSaveModeInfo.am_general.A_PowerSafeModeInfo
    {
      return new rmGeneralPowerSaveModeInfo.rm_general.R_PowerSaveModeInfo(); 
    }    

    //----------- create a default tile-info object
    public createDefaultTileInfo(error : amGeneralError.am_general.A_Error)  : amGeneralTileInfo.am_general.A_TileInfo
    {
      return new rmGeneralTileInfo.rm_general.R_TileInfo(); 
    }    

    //----------- create a default system-monitor-info object
    public createDefaultSystemMonitorInfo(error : amGeneralError.am_general.A_Error)  : amGeneralSystemMonitorInfo.am_general.A_SystemMonitorInfo
    {
      return new rmGeneralSystemMonitorInfo.rm_general.R_SystemMonitorInfo(); 
    }    

    //----------- create a default usage-permissions object
    public createDefaultUsageData(error : amGeneralError.am_general.A_Error)  : amGeneralUsageData.am_general.A_UsageData
    {
      return new rmGeneralUsageData.rm_general.R_UsageData(); 
    }    

    //----------- create a default usage-permissions object
    public createDefaultUsagePermissions(error : amGeneralError.am_general.A_Error)  : amGeneralUsagePermissions.am_general.A_UsagePermissions
    {
      return new rmGeneralUsagePermissions.rm_general.R_UsagePermissions(); 
    }    

    //----------- create a default device-timer-info object
    public createDefaultDeviceTimerInfo(error : amGeneralError.am_general.A_Error)  : amGeneralDeviceTimerInfo.am_general.A_DeviceTimerInfo
    {
      return new rmGeneralDeviceTimerInfo.rm_general.R_DeviceTimerInfo(); 
    }    

    //----------- create a default sha-properties object
    public createDefaultShaProperties(error : amGeneralError.am_general.A_Error)  : amGeneralShaProperties.am_general.A_ShaProperties
    {
      return new rmGeneralShaProperties.rm_general.R_ShaProperties(); 
    }

    //----------- create a default xml json object
    public createDefaultXmlJsonObject(error : amGeneralError.am_general.A_Error)  : amGeneralXmlJsonObject.am_general.A_XmlJsonObject
    {
      return new rmGeneralXmlJsonObject.rm_general.R_XmlJsonObject(); 
    }

    //----------------------
    // xml  objects
    //----------------------

    //----------- create a default xml document
    public createDefaultXmlDocument(error : amGeneralError.am_general.A_Error)  : amGeneralXmlDocument.am_general.AE_XmlDocument
    {
      return new rmGeneralXmlDocument.rm_general.RE_XmlDocument(); 
    }

    //----------- create a default xml node
    public createDefaultXmlNode(error : amGeneralError.am_general.A_Error)  : amGeneralXmlNode.am_general.AE_XmlNode
    {
      return new rmGeneralXmlNode.rm_general.RE_XmlNode(); 
    }

    //----------------------
    //  queue + event + random + diffusion
    //----------------------

    //----------- create a default queue
    public createDefaultQueue(error : amGeneralError.am_general.A_Error)  : amGeneralQueue.am_general.AE_Queue
    {
      return new rmGeneralQueue.rm_general.RE_Queue(); 
    }

    //----------- create a default event
    public createDefaultEvent(error : amGeneralError.am_general.A_Error)  : amGeneralEvent.am_general.AE_Event
    {
      return new rmGeneralEvent.rm_general.RE_Event(); 
    }
    
    //----------- create a default random
    public createDefaultRandom(error : amGeneralError.am_general.A_Error)  : amGeneralRandom.am_general.AE_Random
    {
      return new rmGeneralRandom.rm_general.RE_Random(); 
    }

    //----------- create a default diffusion
    public createDefaultDiffusion(error : amGeneralError.am_general.A_Error)  : amGeneralDiffusion.am_general.AE_Diffusion
    {
      return new rmGeneralDiffusion.rm_general.RE_Diffusion(); 
    }

    //----------------------
    // playback config objects
    //----------------------

    //----------- create hardware settings 
    public createDefaultHardwareSettings(error : amGeneralError.am_general.A_Error)  : amPlaybackHardwareSettings.am_playback.A_HardwareSettings
    {
      return new rmPlaybackHardwareSettings.rm_playback.R_HardwareSettings(); 
    }

    //------------ 
    public createDefaultOpeningHours(error : amGeneralError.am_general.A_Error)  : amPlaybackOpeningHours.am_playback.A_OpeningHours
    {
      return new rmPlaybackOpeningHours.rm_playback.R_OpeningHours(); 
    }

    //------------ 
    public createDefaultDayOpeningHours(error : amGeneralError.am_general.A_Error)  : amPlaybackDayOpeningHours.am_playback.A_DayOpeningHours
    {
      return new rmPlaybackDayOpeningHours.rm_playback.R_DayOpeningHours(); 
    }

    //------------ 
    public createDefaultScreenSaverConfig(error : amGeneralError.am_general.A_Error)  : amPlaybackScreenSaverConfig.am_playback.AE_ScreenSaverConfig
    {
      return new rmPlaybackScreenSaverConfig.rm_playback.RE_ScreenSaverConfig(); 
    }
    
    //------------ 
    public createDefaultPlaybackGlobalConfig(error : amGeneralError.am_general.A_Error)  : amGeneralPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig
    {
      return new rmGeneralPlaybackGlobalConfig.rm_playback.RE_PlaybackGlobalConfig(); 
    }
     
    //----------------------------------------
    //    playlist items creators
    //----------------------------------------

    //------------ 
    public createDefaultPlaylistItem(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItem.am_coreservices.AE_PlaylistItem
    {
      return new rmCoreServicesPlaylistItem.rm_coreservices.RE_PlaylistItem(); 
    }

    //------------ 
    public createDefaultPlaylistItem_Container(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemContainer.am_coreservices.AE_PlaylistItem_Container
    {
      return new rmCoreServicesPlaylistItemContainer.rm_coreservices.RE_PlaylistItem_Container(); 
    }

    //------------ 
    public createDefaultPlaylistItem_Design(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemDesign.am_coreservices.AE_PlaylistItem_Design
    {
      return new rmCoreServicesPlaylistItemDesign.rm_coreservices.RE_PlaylistItem_Design(); 
    }

    //------------ 
    public createDefaultPlaylistItem_DesignZone(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemDesignZone.am_coreservices.AE_PlaylistItem_DesignZone
    {
      return new rmCoreServicesPlaylistItemDesignZone.rm_coreservices.RE_PlaylistItem_DesignZone(); 
    }

    //------------ 
    public createDefaultPlaylistItem_Event(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemEvent.am_coreservices.AE_PlaylistItem_Event
    {
      return new rmCoreServicesPlaylistItemEvent.rm_coreservices.RE_PlaylistItem_Event(); 
    }

    //------------ 
    public createDefaultPlaylistItem_Events(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemEvents.am_coreservices.AE_PlaylistItem_Events
    {
      return new rmCoreServicesPlaylistItemEvents.rm_coreservices.RE_PlaylistItem_Events(); 
    }

    //------------ 
    public createDefaultPlaylistItem_FillRect(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemFillRect.am_coreservices.AE_PlaylistItem_FillRect
    {
      return new rmCoreServicesPlaylistItemFillRect.rm_coreservices.RE_PlaylistItem_FillRect(); 
    }

    //------------ 
    public createDefaultPlaylistItem_Flash(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemFlash.am_coreservices.AE_PlaylistItem_Flash
    {
      return new rmCoreServicesPlaylistItemFlash.rm_coreservices.RE_PlaylistItem_Flash(); 
    }

    //------------ 
    public createDefaultPlaylistItem_HtmlTemplate(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemHtmlTemplate.am_coreservices.AE_PlaylistItem_HtmlTemplate
    {
      return new rmCoreServicesPlaylistItemHtmlTemplate.rm_coreservices.RE_PlaylistItem_HtmlTemplate(); 
    }

    //------------ 
    public createDefaultPlaylistItem_Image(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemImage.am_coreservices.AE_PlaylistItem_Image
    {
      return new rmCoreServicesPlaylistItemImage.rm_coreservices.RE_PlaylistItem_Image(); 
    }

    //------------ 
    public createDefaultPlaylistItem_Playlist(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemPlaylist.am_coreservices.AE_PlaylistItem_Playlist
    {
      return new rmCoreServicesPlaylistItemPlaylist.rm_coreservices.RE_PlaylistItem_Playlist(); 
    }

    //------------ 
    public createDefaultPlaylistItem_PriorityPlaylist(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemPriorityPlaylist.am_coreservices.AE_PlaylistItem_PriorityPlaylist
    {
      return new rmCoreServicesPlaylistItemPriorityPlaylist.rm_coreservices.RE_PlaylistItem_PriorityPlaylist(); 
    }

    //------------ 
    public createDefaultPlaylistItem_Stream(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStream.am_coreservices.AE_PlaylistItem_Stream
    {
      return new rmCoreServicesPlaylistItemStream.rm_coreservices.RE_PlaylistItem_Stream(); 
    }

    //------------ 
    public createDefaultPlaylistItem_ScreenSaverImage(error : amGeneralError.am_general.A_Error)  : 
                                                              amCoreServicesPlaylistItemScreenSaverImage.am_coreservices.AE_PlaylistItem_ScreenSaverImage
    {
      return new rmCoreServicesPlaylistItemScreenSaverImage.rm_coreservices.RE_PlaylistItem_ScreenSaverImage(); 
    }

    //------------ 
    public createDefaultPlaylistItem_ScreenSaverVideo(error : amGeneralError.am_general.A_Error)  : 
                                                              amCoreServicesPlaylistItemScreenSaverVideo.am_coreservices.AE_PlaylistItem_ScreenSaverVideo
    {
      return new rmCoreServicesPlaylistItemScreenSaverVideo.rm_coreservices.RE_PlaylistItem_ScreenSaverVideo(); 
    }

    //------------ 
    public createDefaultPlaylistItem_Tag(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemTag.am_coreservices.AE_PlaylistItem_Tag
    {
      return new rmCoreServicesPlaylistItemTag.rm_coreservices.RE_PlaylistItem_Tag(); 
    }

    //------------ 
    public createDefaultPlaylistItem_RealTag(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemRealTag.am_coreservices.AE_PlaylistItem_RealTag
    {
      return new rmCoreServicesPlaylistItemRealTag.rm_coreservices.RE_PlaylistItem_RealTag(); 
    }

    //------------ 
    public createDefaultPlaylistItem_TVPassThrough(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemTVPassThrough.am_coreservices.AE_PlaylistItem_TVPassThrough
    {
      return new rmCoreServicesPlaylistItemTVPassThrough.rm_coreservices.RE_PlaylistItem_TVPassThrough(); 
    }

    //------------ 
    public createDefaultPlaylistItem_TVTunner(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemTVTunner.am_coreservices.AE_PlaylistItem_TVTunner
    {
      return new rmCoreServicesPlaylistItemTVTunner.rm_coreservices.RE_PlaylistItem_TVTunner(); 
    }

    //------------ 
    public createDefaultPlaylistItem_Video(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemVideo.am_coreservices.AE_PlaylistItem_Video
    {
      return new rmCoreServicesPlaylistItemVideo.rm_coreservices.RE_PlaylistItem_Video(); 
    }

    //------------ 
    public createDefaultPlaylistItem_VideoStream(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemVideoStream.am_coreservices.AE_PlaylistItem_VideoStream
    {
      return new rmCoreServicesPlaylistItemVideoStream.rm_coreservices.RE_PlaylistItem_VideoStream(); 
    }

    //------------ 
    public createDefaultPlaylistItem_WebPage(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemWebPage.am_coreservices.AE_PlaylistItem_WebPage
    {
      return new rmCoreServicesPlaylistItemWebPage.rm_coreservices.RE_PlaylistItem_WebPage(); 
    }

    //------------ 
    public createDefaultMainPlaylist(error : amGeneralError.am_general.A_Error)  : amCoreServicesMainPlaylist.am_coreservices.AE_MainPlaylist
    {
      return new rmCoreServicesMainPlaylist.rm_coreservices.RE_MainPlaylist(); 
    }

    //------------ 
    public createDefaultTagManager(error : amGeneralError.am_general.A_Error)  : amCoreServicesTagManager.am_coreservices.AE_TagManager
    {
      return new rmCoreServicesTagManager.rm_coreservices.RE_TagManager(); 
    }

    //----------------------------------------
    //    playlist items logic creators
    //----------------------------------------
    
    //------------ 
    public createDefaultPlaylistItemLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemLogic.am_coreservices.AE_PlaylistItem_Logic
    {
      return new rmCoreServicesPlaylistItemLogic.rm_coreservices.RE_PlaylistItem_Logic(); 
    }

    //------------ 
    public createDefaultPlaylistItem_ContainerLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemContainerLogic.am_coreservices.AE_PlaylistItem_ContainerLogic
    {
      return new rmCoreServicesPlaylistItemContainerLogic.rm_coreservices.RE_PlaylistItem_ContainerLogic(); 
    }

    //------------ 
    public createDefaultPlaylistItem_DesignLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemDesignLogic.am_coreservices.AE_PlaylistItem_DesignLogic
    {
      return new rmCoreServicesPlaylistItemDesignLogic.rm_coreservices.RE_PlaylistItem_DesignLogic(); 
    }

    //------------ 
    public createDefaultPlaylistItem_DesignZoneLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemDesignZoneLogic.am_coreservices.AE_PlaylistItem_DesignZoneLogic
    {
      return new rmCoreServicesPlaylistItemDesignZoneLogic.rm_coreservices.RE_PlaylistItem_DesignZoneLogic(); 
    }

    //------------ 
    public createDefaultPlaylistItem_DesignMainZoneLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemDesignMainZoneLogic.am_coreservices.AE_PlaylistItem_DesignMainZoneLogic
    {
      return new rmCoreServicesPlaylistItemDesignMainZoneLogic.rm_coreservices.RE_PlaylistItem_DesignMainZoneLogic(); 
    }

    //------------ 
    public createDefaultPlaylistItem_EventLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemEventLogic.am_coreservices.AE_PlaylistItem_EventLogic
    {
      return new rmCoreServicesPlaylistItemEventLogic.rm_coreservices.RE_PlaylistItem_EventLogic(); 
    }

    //------------ 
    public createDefaultPlaylistItem_EventsLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemEventsLogic.am_coreservices.AE_PlaylistItem_EventsLogic
    {
      return new rmCoreServicesPlaylistItemEventsLogic.rm_coreservices.RE_PlaylistItem_EventsLogic(); 
    }

    //------------ 
    public createDefaultPlaylistItem_FillRectLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemFillRectLogic.am_coreservices.AE_PlaylistItem_FillRectLogic
    {
      return new rmCoreServicesPlaylistItemFillRectLogic.rm_coreservices.RE_PlaylistItem_FillRectLogic(); 
    }

    //------------ 
    public createDefaultPlaylistItem_FlashLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemFlashLogic.am_coreservices.AE_PlaylistItem_FlashLogic
    {
      return new rmCoreServicesPlaylistItemFlashLogic.rm_coreservices.RE_PlaylistItem_FlashLogic(); 
    }

    //------------ 
    public createDefaultPlaylistItem_HtmlTemplateLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemHtmlTemplateLogic.am_coreservices.AE_PlaylistItem_HtmlTemplateLogic
    {
      return new rmCoreServicesPlaylistItemHtmlTemplateLogic.rm_coreservices.RE_PlaylistItem_HtmlTemplateLogic(); 
    }

    //------------ 
    public createDefaultPlaylistItem_ImageLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemImageLogic.am_coreservices.AE_PlaylistItem_ImageLogic
    {
      return new rmCoreServicesPlaylistItemImageLogic.rm_coreservices.RE_PlaylistItem_ImageLogic(); 
    }

    //------------ 
    public createDefaultPlaylistItem_PlaylistLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemPlaylistLogic.am_coreservices.AE_PlaylistItem_PlaylistLogic
    {
      return new rmCoreServicesPlaylistItemPlaylistLogic.rm_coreservices.RE_PlaylistItem_PlaylistLogic(); 
    }

    //------------ 
    public createDefaultPlaylistItem_PriorityPlaylistLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemPriorityPlaylistLogic.am_coreservices.AE_PlaylistItem_PriorityPlaylistLogic
    {
      return new rmCoreServicesPlaylistItemPriorityPlaylistLogic.rm_coreservices.RE_PlaylistItem_PriorityPlaylistLogic(); 
    }

    //------------ 
    public createDefaultPlaylistItem_StreamLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStreamLogic.am_coreservices.AE_PlaylistItem_StreamLogic
    {
      return new rmCoreServicesPlaylistItemStreamLogic.rm_coreservices.RE_PlaylistItem_StreamLogic(); 
    }

    //------------ 
    public createDefaultPlaylistItem_ScreenSaverImageLogic(error : amGeneralError.am_general.A_Error)  : 
                                                                   amCoreServicesPlaylistItemScreenSaverImageLogic.am_coreservices.AE_PlaylistItem_ScreenSaverImageLogic
    {
      return new rmCoreServicesPlaylistItemScreenSaverImageLogic.rm_coreservices.RE_PlaylistItem_ScreenSaverImageLogic(); 
    }

    //------------ 
    public createDefaultPlaylistItem_ScreenSaverVideoLogic(error : amGeneralError.am_general.A_Error)  : 
                                                                    amCoreServicesPlaylistItemScreenSaverVideoLogic.am_coreservices.AE_PlaylistItem_ScreenSaverVideoLogic
    {
      return new rmCoreServicesPlaylistItemScreenSaverVideoLogic.rm_coreservices.RE_PlaylistItem_ScreenSaverVideoLogic(); 
    }

    //------------ 
    public createDefaultPlaylistItem_TagLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemTagLogic.am_coreservices.AE_PlaylistItem_TagLogic
    {
      return new rmCoreServicesPlaylistItemTagLogic.rm_coreservices.RE_PlaylistItem_TagLogic(); 
    }

    //------------ 
    public createDefaultPlaylistItem_RealTagLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemRealTagLogic.am_coreservices.AE_PlaylistItem_RealTagLogic
    {
      return new rmCoreServicesPlaylistItemRealTagLogic.rm_coreservices.RE_PlaylistItem_RealTagLogic(); 
    }

    //------------ 
    public createDefaultPlaylistItem_TVPassThroughLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemTVPassThroughLogic.am_coreservices.AE_PlaylistItem_TVPassThroughLogic
    {
      return new rmCoreServicesPlaylistItemTVPassThroughLogic.rm_coreservices.RE_PlaylistItem_TVPassThroughLogic(); 
    }

    //------------ 
    public createDefaultPlaylistItem_TVTunnerLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemTVTunnerLogic.am_coreservices.AE_PlaylistItem_TVTunnerLogic
    {
      return new rmCoreServicesPlaylistItemTVTunnerLogic.rm_coreservices.RE_PlaylistItem_TVTunnerLogic(); 
    }

    //------------ 
    public createDefaultPlaylistItem_VideoLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemVideoLogic.am_coreservices.AE_PlaylistItem_VideoLogic
    {
      return new rmCoreServicesPlaylistItemVideoLogic.rm_coreservices.RE_PlaylistItem_VideoLogic(); 
    }

    //------------ 
    public createDefaultPlaylistItem_VideoStreamLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemVideoStreamLogic.am_coreservices.AE_PlaylistItem_VideoStreamLogic
    {
      return new rmCoreServicesPlaylistItemVideoStreamLogic.rm_coreservices.RE_PlaylistItem_VideoStreamLogic(); 
    }

    //------------ 
    public createDefaultPlaylistItem_WebPageLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemWebPageLogic.am_coreservices.AE_PlaylistItem_WebPageLogic
    {
      return new rmCoreServicesPlaylistItemWebPageLogic.rm_coreservices.RE_PlaylistItem_WebPageLogic(); 
    }

    //------------ 
    public createDefaultMainPlaylistLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesMainPlaylistLogic.am_coreservices.AE_MainPlaylist_Logic
    {
      return new rmCoreServicesMainPlaylistLogic.rm_coreservices.RE_MainPlaylist_Logic(); 
    }

    //------------ 
    public createDefaultTagManagerLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesTagManagerLogic.am_coreservices.AE_TagManager_Logic
    {
      return new rmCoreServicesTagManagerLogic.rm_coreservices.RE_TagManager_Logic(); 
    }


    //----------------------------------------
    //    create playlist item status
    //----------------------------------------
    //------------ 
    public createDefaultPlaylistItemStatus(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatus.am_coreservices.AE_PlaylistItem_Status
    {
      return new rmCoreServicesPlaylistItemStatus.rm_coreservices.RE_PlaylistItem_Status(); 
    }

    //------------ 
    public createDefaultPlaylistItemStatusDisable(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusDisable.am_coreservices.AE_PlaylistItem_StatusDisable
    {
      return new rmCoreServicesPlaylistItemStatusDisable.rm_coreservices.RE_PlaylistItem_StatusDisable(); 
    }

    //------------ 
    public createDefaultPlaylistItemStatusEnd(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusEnd.am_coreservices.AE_PlaylistItem_StatusEnd
    {
      return new rmCoreServicesPlaylistItemStatusEnd.rm_coreservices.RE_PlaylistItem_StatusEnd(); 
    }

    //------------ 
    public createDefaultPlaylistItemStatusError(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusError.am_coreservices.AE_PlaylistItem_StatusError
    {
      return new rmCoreServicesPlaylistItemStatusError.rm_coreservices.RE_PlaylistItem_StatusError(); 
    }

    public createDefaultPlaylistItemStatusPlay(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusPlay.am_coreservices.AE_PlaylistItem_StatusPlay
    {
      return new rmCoreServicesPlaylistItemStatusPlay.rm_coreservices.RE_PlaylistItem_StatusPlay(); 
    }

    public createDefaultPlaylistItemStatusPlay_List(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusPlay_List.am_coreservices.AE_PlaylistItem_StatusPlay_List
    {
      return new rmCoreServicesPlaylistItemStatusPlay_List.rm_coreservices.RE_PlaylistItem_StatusPlay_List(); 
    }

    public createDefaultPlaylistItemStatusPlay_Media(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusPlay_Media.am_coreservices.AE_PlaylistItem_StatusPlay_Media
    {
      return new rmCoreServicesPlaylistItemStatusPlay_Media.rm_coreservices.RE_PlaylistItem_StatusPlay_Media(); 
    }

    public createDefaultPlaylistItemStatusRequestToAbort(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusRequestToAbort.am_coreservices.AE_PlaylistItem_StatusRequestToAbort
    {
      return new rmCoreServicesPlaylistItemStatusRequestToAbort.rm_coreservices.RE_PlaylistItem_StatusRequestToAbort(); 
    }

    public createDefaultPlaylistItemStatusRequestToAbort_List(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusRequestToAbort_List.am_coreservices.AE_PlaylistItem_StatusRequestToAbort_List
    {
      return new rmCoreServicesPlaylistItemStatusRequestToAbort_List.rm_coreservices.RE_PlaylistItem_StatusRequestToAbort_List(); 
    }

    public createDefaultPlaylistItemStatusRequestToAbort_Media(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusRequestToAbort_Media.am_coreservices.AE_PlaylistItem_StatusRequestToAbort_Media
    {
      return new rmCoreServicesPlaylistItemStatusRequestToAbort_Media.rm_coreservices.RE_PlaylistItem_StatusRequestToAbort_Media(); 
    }

    public createDefaultPlaylistItemStatusRequestToAbortOrEndBeforePlay(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusRequestToAbortOrEndBeforePlay.am_coreservices.AE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay
    {
      return new rmCoreServicesPlaylistItemStatusRequestToAbortOrEndBeforePlay.rm_coreservices.RE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay(); 
    }

    public createDefaultPlaylistItemStatusRequestToAbortOrEndBeforePlay_List(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusRequestToAbortOrEndBeforePlay_List.am_coreservices.AE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay_List
    {
      return new rmCoreServicesPlaylistItemStatusRequestToAbortOrEndBeforePlay_List.rm_coreservices.RE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay_List(); 
    }

    public createDefaultPlaylistItemStatusRequestToAbortOrEndBeforePlay_Media(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusRequestToAbortOrEndBeforePlay_Media.am_coreservices.AE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay_Media
    {
      return new rmCoreServicesPlaylistItemStatusRequestToAbortOrEndBeforePlay_Media.rm_coreservices.RE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay_Media(); 
    }

    public createDefaultPlaylistItemStatusRequestToEnd(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusRequestToEnd.am_coreservices.AE_PlaylistItem_StatusRequestToEnd
    {
      return new rmCoreServicesPlaylistItemStatusRequestToEnd.rm_coreservices.RE_PlaylistItem_StatusRequestToEnd(); 
    }

    public createDefaultPlaylistItemStatusRequestToEnd_List(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusRequestToEnd_List.am_coreservices.AE_PlaylistItem_StatusRequestToEnd_List
    {
      return new rmCoreServicesPlaylistItemStatusRequestToEnd_List.rm_coreservices.RE_PlaylistItem_StatusRequestToEnd_List(); 
    }

    public createDefaultPlaylistItemStatusRequestToEnd_Media(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusRequestToEnd_Media.am_coreservices.AE_PlaylistItem_StatusRequestToEnd_Media
    {
      return new rmCoreServicesPlaylistItemStatusRequestToEnd_Media.rm_coreservices.RE_PlaylistItem_StatusRequestToEnd_Media(); 
    }

    public createDefaultPlaylistItemStatusRequestToPlay(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusRequestToPlay.am_coreservices.AE_PlaylistItem_StatusRequestToPlay
    {
      return new rmCoreServicesPlaylistItemStatusRequestToPlay.rm_coreservices.RE_PlaylistItem_StatusRequestToPlay(); 
    }

    public createDefaultPlaylistItemStatusRequestToPlay_List(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusRequestToPlay_List.am_coreservices.AE_PlaylistItem_StatusRequestToPlay_List
    {
      return new rmCoreServicesPlaylistItemStatusRequestToPlay_List.rm_coreservices.RE_PlaylistItem_StatusRequestToPlay_List(); 
    }

    public createDefaultPlaylistItemStatusRequestToPlay_Media(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusRequestToPlay_Media.am_coreservices.AE_PlaylistItem_StatusRequestToPlay_Media
    {
      return new rmCoreServicesPlaylistItemStatusRequestToPlay_Media.rm_coreservices.RE_PlaylistItem_StatusRequestToPlay_Media(); 
    }

    public createDefaultPlaylistItemStatusRequestToResume(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusRequestToResume.am_coreservices.AE_PlaylistItem_StatusRequestToResume
    {
      return new rmCoreServicesPlaylistItemStatusRequestToResume.rm_coreservices.RE_PlaylistItem_StatusRequestToResume(); 
    }

    public createDefaultPlaylistItemStatusRequestToResume_List(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusRequestToResume_List.am_coreservices.AE_PlaylistItem_StatusRequestToResume_List
    {
      return new rmCoreServicesPlaylistItemStatusRequestToResume_List.rm_coreservices.RE_PlaylistItem_StatusRequestToResume_List(); 
    }

    public createDefaultPlaylistItemStatusRequestToResume_Media(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusRequestToResume_Media.am_coreservices.AE_PlaylistItem_StatusRequestToResume_Media
    {
      return new rmCoreServicesPlaylistItemStatusRequestToResume_Media.rm_coreservices.RE_PlaylistItem_StatusRequestToResume_Media(); 
    }

    public createDefaultPlaylistItemStatusRequestToSuspend(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusRequestToSuspend.am_coreservices.AE_PlaylistItem_StatusRequestToSuspend
    {
      return new rmCoreServicesPlaylistItemStatusRequestToSuspend.rm_coreservices.RE_PlaylistItem_StatusRequestToSuspend(); 
    }

    public createDefaultPlaylistItemStatusRequestToSuspend_List(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusRequestToSuspend_List.am_coreservices.AE_PlaylistItem_StatusRequestToSuspend_List
    {
      return new rmCoreServicesPlaylistItemStatusRequestToSuspend_List.rm_coreservices.RE_PlaylistItem_StatusRequestToSuspend_List(); 
    }

    public createDefaultPlaylistItemStatusRequestToSuspend_Media(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusRequestToSuspend_Media.am_coreservices.AE_PlaylistItem_StatusRequestToSuspend_Media
    {
      return new rmCoreServicesPlaylistItemStatusRequestToSuspend_Media.rm_coreservices.RE_PlaylistItem_StatusRequestToSuspend_Media(); 
    }

    public createDefaultPlaylistItemStatusSelectNextChildToPlay(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusSelectNextChildToPlay.am_coreservices.AE_PlaylistItem_StatusSelectNextChildToPlay
    {
      return new rmCoreServicesPlaylistItemStatusSelectNextChildToPlay.rm_coreservices.RE_PlaylistItem_StatusSelectNextChildToPlay(); 
    }

    public createDefaultPlaylistItemStatusSuspended(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusSuspended.am_coreservices.AE_PlaylistItem_StatusSuspended
    {
      return new rmCoreServicesPlaylistItemStatusSuspended.rm_coreservices.RE_PlaylistItem_StatusSuspended(); 
    }

    public createDefaultPlaylistItemTransition(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemTransition.am_coreservices.AE_PlaylistItem_Transition
    {
      return new rmCoreServicesPlaylistItemTransition.rm_coreservices.RE_PlaylistItem_Transition(); 
    }

    //----------------------------------------
    //    html zone creators
    //----------------------------------------

    //------------ 
    public createDefaultHtmlZone(error : amGeneralError.am_general.A_Error)  : amRenderingServicesHtmlZone.am_renderingservices.AE_HtmlZone
    {
      return new rmRenderingServicesHtmlZone.rm_renderingservices.RE_HtmlZone(); 
    }

    //------------ 
    public createDefaultHtmlZonePool(error : amGeneralError.am_general.A_Error)  : amRenderingServicesHtmlZonePool.am_renderingservices.AE_HtmlZonePool
    {
      return new rmRenderingServicesHtmlZonePool.rm_renderingservices.RE_HtmlZonePool(); 
    }

    //----------------------------------
    //     render params
    //----------------------------------
    
    //------------ 
    public createDefaultRenderParamsAllParameters(error : amGeneralError.am_general.A_Error)  : amRenderParametersAllParameters.am_renderingservices.AE_RenderParams_AllParameters
    {
      return new rmRenderParametersAllParameters.rm_renderingservices.RE_RenderParams_AllParameters(); 
    }

    //------------ 
    public createDefaultRenderParamsIdentification(error : amGeneralError.am_general.A_Error)  : amRenderParametersIdentification.am_renderingservices.AE_RenderParams_Identification
    {
      return new rmRenderParametersIdentification.rm_renderingservices.RE_RenderParams_Identification(); 
    }
    
    //------------ 
    public createDefaultRenderParamsItemPosAndSize(error : amGeneralError.am_general.A_Error)  : amRenderParametersItemPosAndSize.am_renderingservices.AE_RenderParams_ItemPosAndSize
    {
      return new rmRenderParametersItemPosAndSize.rm_renderingservices.RE_RenderParams_ItemPosAndSize(); 
    }

    //------------ 
    public createDefaultRenderParamsContainerPosAndSize(error : amGeneralError.am_general.A_Error)  : amRenderParametersContainerPosAndSize.am_renderingservices.AE_RenderParams_ContainerPosAndSize
    {
      return new rmRenderParametersContainerPosAndSize.rm_renderingservices.RE_RenderParams_ContainerPosAndSize(); 
    }

    //------------ 
    public createDefaultRenderParamsDuration(error : amGeneralError.am_general.A_Error)  : amRenderParametersDuration.am_renderingservices.AE_RenderParams_Duration
    {
      return new rmRenderParametersDuration.rm_renderingservices.RE_RenderParams_Duration(); 
    }

    //------------ 
    public createDefaultRenderParamsBackground(error : amGeneralError.am_general.A_Error)  : amRenderParametersBackground.am_renderingservices.AE_RenderParams_Background
    {
      return new rmRenderParametersBackground.rm_renderingservices.RE_RenderParams_Background(); 
    }

    //------------ 
    public createDefaultRenderParamsImage(error : amGeneralError.am_general.A_Error)  : amRenderParametersImage.am_renderingservices.AE_RenderParams_Image
    {
      return new rmRenderParametersImage.rm_renderingservices.RE_RenderParams_Image(); 
    }

    //------------ 
    public createDefaultRenderParamsWebImage(error : amGeneralError.am_general.A_Error)  : amRenderParametersWebImage.am_renderingservices.AE_RenderParams_WebImage
    {
      return new rmRenderParametersWebImage.rm_renderingservices.RE_RenderParams_WebImage(); 
    }

    //------------ 
    public createDefaultRenderParamsVideo(error : amGeneralError.am_general.A_Error)  : amRenderParametersVideo.am_renderingservices.AE_RenderParams_Video
    {
      return new rmRenderParametersVideo.rm_renderingservices.RE_RenderParams_Video(); 
    }

    //------------ 
    public createDefaultRenderParamsVideoStream(error : amGeneralError.am_general.A_Error)  : amRenderParametersVideoStream.am_renderingservices.AE_RenderParams_VideoStream
    {
      return new rmRenderParametersVideoStream.rm_renderingservices.RE_RenderParams_VideoStream(); 
    }

    //------------ 
    public createDefaultRenderParamsAudio(error : amGeneralError.am_general.A_Error)  : amRenderParametersAudio.am_renderingservices.AE_RenderParams_Audio
    {
      return new rmRenderParametersAudio.rm_renderingservices.RE_RenderParams_Audio(); 
    }

    //------------ 
    public createDefaultRenderParamsWebPage(error : amGeneralError.am_general.A_Error)  : amRenderParametersWebPage.am_renderingservices.AE_RenderParams_WebPage
    {
      return new rmRenderParametersWebPage.rm_renderingservices.RE_RenderParams_WebPage(); 
    }

    //------------ 
    public createDefaultRenderParamsHtmlTemplate(error : amGeneralError.am_general.A_Error)  : amRenderParametersHtmlTemplate.am_renderingservices.AE_RenderParams_HtmlTemplate
    {
      return new rmRenderParametersHtmlTemplate.rm_renderingservices.RE_RenderParams_HtmlTemplate(); 
    }

    //------------ 
    public createDefaultRenderParamsFillRect(error : amGeneralError.am_general.A_Error)  : amRenderParametersFillRect.am_renderingservices.AE_RenderParams_FillRect
    {
      return new rmRenderParametersFillRect.rm_renderingservices.RE_RenderParams_FillRect(); 
    }

    //----------------------------------
    //     control params
    //----------------------------------
            
    //------------ 
    public createDefaultControlPrepareParams(error : amGeneralError.am_general.A_Error)  : amControlPrepareParams.am_renderingservices.AE_ControlParams_Prepare
    {
      return new rmControlPrepareParams.rm_renderingservices.RE_ControlParams_Prepare();                     
    }

    //------------ 
    public createDefaultControlPrepareParamsPool(error : amGeneralError.am_general.A_Error)  : amControlPrepareParamsPool.am_renderingservices.AE_ControlParams_PreparePool
    {
      return new rmControlPrepareParamsPool.rm_renderingservices.RE_ControlParams_PreparePool();                     
    }

    //------------ 
    public createDefaultControlRunParams(error : amGeneralError.am_general.A_Error)  : amControlRunParams.am_renderingservices.AE_ControlParams_Run
    {
      return new rmControlRunParams.rm_renderingservices.RE_ControlParams_Run();                     
    }

    //------------ 
    public createDefaultControlRunParamsPool(error : amGeneralError.am_general.A_Error)  : amControlRunParamsPool.am_renderingservices.AE_ControlParams_RunPool
    {
      return new rmControlRunParamsPool.rm_renderingservices.RE_ControlParams_RunPool();                     
    }

    //------------ 
    public createDefaultControlStopParams(error : amGeneralError.am_general.A_Error)  : amControlStopParams.am_renderingservices.AE_ControlParams_Stop
    {
      return new rmControlStopParams.rm_renderingservices.RE_ControlParams_Stop();                     
    }

    //------------ 
    public createDefaultControlStopParamsPool(error : amGeneralError.am_general.A_Error)  : amControlStopParamsPool.am_renderingservices.AE_ControlParams_StopPool
    {
      return new rmControlStopParamsPool.rm_renderingservices.RE_ControlParams_StopPool();                     
    }

    //------------ 
    public createDefaultControlStatusParams(error : amGeneralError.am_general.A_Error)  : amControlStatusParams.am_renderingservices.AE_ControlParams_Status
    {
      return new rmControlStatusParams.rm_renderingservices.RE_ControlParams_Status();                     
    }

    //------------ 
    public createDefaultControlStatusParamsPool(error : amGeneralError.am_general.A_Error)  : amControlStatusParamsPool.am_renderingservices.AE_ControlParams_StatusPool
    {
      return new rmControlStatusParamsPool.rm_renderingservices.RE_ControlParams_StatusPool();                     
    }


    //----------------------------------
    //  Services Creation 
    //----------------------------------

    //--------------- create service 
    public createService( aFactoryDescription : amGeneralFactoryDescription.am_general.A_FactoryDescription, 
                          aServiceContainer   : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer, 
                          serviceProperties   : amGeneralProperties.am_general.A_Properties, 
                          aLogService         : amTransversalServicesLogService.am_transversalservices.A_LogService,
                          error:  amGeneralError.am_general.A_Error): amGeneralService.am_general.A_Service
    {
      this._srvFactories.getServiceFactories(error).forEach( (crtSrvFactory, index) => {
            // to do: with conditional import  call crtSrvFactory.createService  till one creation will succeed
      });  
      return null;
    }

    //--------------------------- create a default service list
    public createDefaultServices(error: amGeneralError.am_general.A_Error) : amGeneralServices.am_general.A_Services
    {
      return new rmGeneralServices.rm_general.R_Services();
    }
    
    //--------------------------- create a default service list
    public static startupCreateDefaultServices(error: amGeneralError.am_general.A_Error) : amGeneralServices.am_general.A_Services
    {
      return new rmGeneralServices.rm_general.R_Services();
    }
    
    //----------- create the default service container
    public static startupCreateDefaultServiceContainer(error : amGeneralError.am_general.A_Error)  : 
                                                           amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer
    {
      var aNewServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer;
      var aServiceContainer     : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer;

      var aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription;
      aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
      aFactoryDescription.setNames("AFactory_ServiceContainer", "R_ServiceContainer", "A_ServiceContainer", "R_ServiceContainer_1");

      var aLogService  : amTransversalServicesLogService.am_transversalservices.A_LogService = null; //not created yet

      aServiceContainer = null; //not created yet, it will become the new one

      aNewServiceContainer = new rmConfigurationServicesServiceContainer.rm_configurationservices.R_ServiceContainer
                                              (aFactoryDescription, aServiceContainer, aLogService, error);
      //aServiceContainer._iServiceManager.addService(aServiceContainer); //outside
      return aNewServiceContainer; 
    }


    //----------- create the default service container
    public static startupCreateDefaultPlatformConfigurator(
                                      aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                                      error : amGeneralError.am_general.A_Error)  
                                                : amConfigurationServicesPlatformConfigurator.am_configurationservices.A_PlatformConfigurator
    {
      var aNewPlatformConfigurator  : amConfigurationServicesPlatformConfigurator.am_configurationservices.A_PlatformConfigurator;

      var aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription;
      aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
      aFactoryDescription.setNames("AFactory_PlatformConfigurator", "R_PlatformConfigurator", "A_PlatformConfigurator", "R_PlatformConfigurator_1");

      var aLogService  : amTransversalServicesLogService.am_transversalservices.A_LogService = null; //not created yet

      aNewPlatformConfigurator = new rmConfigurationServicesPlatformConfigurator.rm_configurationservices.R_PlatformConfigurator
                                              (aFactoryDescription, aServiceContainer, aLogService, error);
      //aServiceContainer._iServiceManager.addService(aServiceContainer);
      return aNewPlatformConfigurator; 
    }

    
    //----------- create the default Service Locator
    public static startupCreateDefaultServiceLocator(
                  aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                  error : amGeneralError.am_general.A_Error)  
                    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator
    {
      var aNewServiceLocator  : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator;

      var aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription;
      aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
      aFactoryDescription.setNames("AFactory_ServiceLocator", "R_ServiceLocator", "A_ServiceLocator", "R_ServiceLocator_1");

      var aLogService  : amTransversalServicesLogService.am_transversalservices.A_LogService = null; //not created yet

      aNewServiceLocator = new rmConfigurationServicesServiceLocator.rm_configurationservices.R_ServiceLocator
                                         (aFactoryDescription, aServiceContainer, aLogService, error);
      //aServiceContainer._iServiceManager.addService(aServiceContainer);
      return aNewServiceLocator; 
    }


    //--------------------------------------
    // create Rendering Services
    //---------------------------------------
    
    //----------- create default Rendering Zone
    public createDefaultService_RenderingZone(
                                 aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                                 aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
                                 aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                                 id                 : number,
                                 error : amGeneralError.am_general.A_Error)  
                                        : amRenderingServicesRenderingZone.am_renderingservices.A_RenderingZone
    {
      var aNewRenderingZone  : amRenderingServicesRenderingZone.am_renderingservices.A_RenderingZone;

      var aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription;
      aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
      aFactoryDescription.setNames("AFactory_RenderingZone", "R_RenderingZone", "A_RenderingZone", "" + id);

      var aLogService  : amTransversalServicesLogService.am_transversalservices.A_LogService = null; //not created yet

      aNewRenderingZone = new rmRenderingServicesRenderingZone.rm_renderingservices.R_RenderingZone(aFactoryDescription, aServiceContainer, aLogService, error);
      //aServiceContainer._iServiceManager.addService(aServiceContainer);
      return aNewRenderingZone; 
    }
    
    //----------- create default Video Renderer
    public createDefaultService_VideoRenderer(
                      aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                      aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
                      aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                      id                 : number,
                      error : amGeneralError.am_general.A_Error)  
                                 : amRenderingServicesVideoRenderer.am_renderingservices.A_VideoRenderer
    {
      var aNewVideoRenderer  : amRenderingServicesVideoRenderer.am_renderingservices.A_VideoRenderer;

      var aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription;
      aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
      aFactoryDescription.setNames("AFactory_VideoRenderer", "R_VideoRenderer", "AVideoRenderer", "" + id);

      var aLogService  : amTransversalServicesLogService.am_transversalservices.A_LogService = null; //not created yet

      aNewVideoRenderer = new rmRenderingServicesVideoRenderer.rm_renderingservices.R_VideoRenderer(aFactoryDescription, aServiceContainer, aLogService, error);
      aNewVideoRenderer._iService.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
      //aServiceContainer._iServiceManager.addService(aServiceContainer);
      return aNewVideoRenderer; 
    }

    //----------- create default VideoStream Renderer
    public createDefaultService_VideoStreamRenderer(
          aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
          aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
          aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
          id                 : number,
          error : amGeneralError.am_general.A_Error)  
                     : amRenderingServicesVideoStreamRenderer.am_renderingservices.A_VideoStreamRenderer
    {
      var aNewVideoStreamRenderer  : amRenderingServicesVideoStreamRenderer.am_renderingservices.A_VideoStreamRenderer;

      var aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription;
      aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
      aFactoryDescription.setNames("AFactory_VideoStreamRenderer", "R_VideoStreamRenderer", "AVideoStreamRenderer", "" + id);

      var aLogService  : amTransversalServicesLogService.am_transversalservices.A_LogService = null; //not created yet

      aNewVideoStreamRenderer = new rmRenderingServicesVideoStreamRenderer.rm_renderingservices.R_VideoStreamRenderer(aFactoryDescription, aServiceContainer, aLogService, error);
      aNewVideoStreamRenderer._iService.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
      //aServiceContainer._iServiceManager.addService(aServiceContainer);
      return aNewVideoStreamRenderer; 
   }

    //----------- create default Image Renderer
    public createDefaultService_ImageRenderer(
            aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
            aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
            aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
            id                 : number,
            error : amGeneralError.am_general.A_Error)  
                      : amRenderingServicesImageRenderer.am_renderingservices.A_ImageRenderer
    {
      var aNewImageRenderer  : amRenderingServicesImageRenderer.am_renderingservices.A_ImageRenderer;

      var aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription;
      aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
      aFactoryDescription.setNames("AFactory_ImageRenderer", "R_ImageRenderer", "AImageRenderer", "" + id);

      var aLogService  : amTransversalServicesLogService.am_transversalservices.A_LogService = null; //not created yet

      aNewImageRenderer = new rmRenderingServicesImageRenderer.rm_renderingservices.R_ImageRenderer(aFactoryDescription, aServiceContainer, aLogService, error);
      aNewImageRenderer._iService.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
      //aServiceContainer._iServiceManager.addService(aServiceContainer);
      return aNewImageRenderer; 
    }

    //----------- create default Html Renderer
    public createDefaultService_HtmlRenderer(
                    aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                    aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
                    aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                    id                 : number,
                    error : amGeneralError.am_general.A_Error)  
                                : amRenderingServicesHtmlRenderer.am_renderingservices.A_HtmlRenderer
    {
      var aNewHtmlRenderer  : amRenderingServicesHtmlRenderer.am_renderingservices.A_HtmlRenderer;

      var aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription;
      aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
      aFactoryDescription.setNames("AFactory_HtmlRenderer", "R_HtmlRenderer", "AHtmlRenderer", "" + id);

      var aLogService  : amTransversalServicesLogService.am_transversalservices.A_LogService = null; //not created yet

      aNewHtmlRenderer = new rmRenderingServicesHtmlRenderer.rm_renderingservices.R_HtmlRenderer(aFactoryDescription, aServiceContainer, aLogService, error);
      aNewHtmlRenderer._iService.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
      //aServiceContainer._iServiceManager.addService(aServiceContainer);
      return aNewHtmlRenderer; 
    }

    //----------- create default HtmlTemplate Renderer
    public createDefaultService_HtmlTemplateRenderer(
                aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
                aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                id                 : number,
                error : amGeneralError.am_general.A_Error)  
                          : amRenderingServicesHtmlTemplateRenderer.am_renderingservices.A_HtmlTemplateRenderer
    {
      var aNewHtmlTemplateRenderer  : amRenderingServicesHtmlTemplateRenderer.am_renderingservices.A_HtmlTemplateRenderer;

      var aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription;
      aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
      aFactoryDescription.setNames("AFactory_HtmlTemplateRenderer", "R_HtmlTemplateRenderer", "AHtmlTemplateRenderer", "" + id);

      var aLogService  : amTransversalServicesLogService.am_transversalservices.A_LogService = null; //not created yet

      aNewHtmlTemplateRenderer = new rmRenderingServicesHtmlTemplateRenderer.rm_renderingservices.R_HtmlTemplateRenderer(aFactoryDescription, aServiceContainer, aLogService, error);
      aNewHtmlTemplateRenderer._iService.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
      //aServiceContainer._iServiceManager.addService(aServiceContainer);
      return aNewHtmlTemplateRenderer; 
    }


    //----------- create default Flash Renderer
    public createDefaultService_FlashRenderer(
                  aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                  aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
                  aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                  id                 : number,
                  error : amGeneralError.am_general.A_Error)  
                              : amRenderingServicesFlashRenderer.am_renderingservices.A_FlashRenderer
    {
      var aNewFlashRenderer  : amRenderingServicesFlashRenderer.am_renderingservices.A_FlashRenderer;

      var aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription;
      aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
      aFactoryDescription.setNames("AFactory_FlashRenderer", "R_FlashRenderer", "AFlashRenderer", "" + id);

      var aLogService  : amTransversalServicesLogService.am_transversalservices.A_LogService = null; //not created yet

      aNewFlashRenderer = new rmRenderingServicesFlashRenderer.rm_renderingservices.R_FlashRenderer(aFactoryDescription, aServiceContainer, aLogService, error);
      aNewFlashRenderer._iService.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
      //aServiceContainer._iServiceManager.addService(aServiceContainer);
      return aNewFlashRenderer; 
      }


    //----------- create default FillRect Renderer
    public createDefaultService_FillRectRenderer(
                aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
                aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                id                 : number,
                error : amGeneralError.am_general.A_Error)  
                          : amRenderingServicesFillRectRenderer.am_renderingservices.A_FillRectRenderer
    {
      var aNewFillRectRenderer  : amRenderingServicesFillRectRenderer.am_renderingservices.A_FillRectRenderer;

      var aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription;
      aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
      aFactoryDescription.setNames("AFactory_FillRectRenderer", "R_FillRectRenderer", "AFillRectRenderer", "" + id);

      var aLogService  : amTransversalServicesLogService.am_transversalservices.A_LogService = null; //not created yet

      aNewFillRectRenderer = new rmRenderingServicesFillRectRenderer.rm_renderingservices.R_FillRectRenderer(aFactoryDescription, aServiceContainer, aLogService, error);
      aNewFillRectRenderer._iService.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
      //aServiceContainer._iServiceManager.addService(aServiceContainer);
      return aNewFillRectRenderer; 
    }

    //----------- create default ScreenSaver Renderer
    public createDefaultService_ScreenSaverRenderer(
                  aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                  aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
                  aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                  id                 : number,
                  error : amGeneralError.am_general.A_Error)  
                            : amRenderingServicesScreenSaverRenderer.am_renderingservices.A_ScreenSaverRenderer
    {
      var aNewScreenSaverRenderer  : amRenderingServicesScreenSaverRenderer.am_renderingservices.A_ScreenSaverRenderer;

      var aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription;
      aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
      aFactoryDescription.setNames("AFactory_ScreenSaverRenderer", "R_ScreenSaverRenderer", "AScreenSaverRenderer", "" + id);

      var aLogService  : amTransversalServicesLogService.am_transversalservices.A_LogService = null; //not created yet

      aNewScreenSaverRenderer = new rmRenderingServicesScreenSaverRenderer.rm_renderingservices.R_ScreenSaverRenderer(aFactoryDescription, aServiceContainer, aLogService, error);
      aNewScreenSaverRenderer._iService.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
      //aServiceContainer._iServiceManager.addService(aServiceContainer);
      return aNewScreenSaverRenderer; 
    }

    //----------- create default ScreenSaver Renderer
    public createDefaultService_TvHdmiPassThroughSrv(
                      aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                      aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
                      aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                      id                 : number,
                      error : amGeneralError.am_general.A_Error)  
                                  : amRenderingServicesTvHdmiPassThroughSrv.am_renderingservices.A_TvHdmiPassThroughSrv
    {
      var aNewTvHdmiPassThroughSrv  : amRenderingServicesTvHdmiPassThroughSrv.am_renderingservices.A_TvHdmiPassThroughSrv;

      var aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription;
      aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
      aFactoryDescription.setNames("AFactory_TvHdmiPassThroughSrv", "R_TvHdmiPassThroughSrv", "ATvHdmiPassThroughSrv", "" + id);

      var aLogService  : amTransversalServicesLogService.am_transversalservices.A_LogService = null; //not created yet

      aNewTvHdmiPassThroughSrv = new rmRenderingServicesTvHdmiPassThroughSrv.rm_renderingservices.R_TvHdmiPassThroughSrv(aFactoryDescription, aServiceContainer, aLogService, error);
      aNewTvHdmiPassThroughSrv._iService.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
      //aServiceContainer._iServiceManager.addService(aServiceContainer);
      return aNewTvHdmiPassThroughSrv; 
    }

    //----------- create default Background Renderer
    public createDefaultService_BackgroundRenderer(
              aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
              aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
              aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
              id                 : number,
              error : amGeneralError.am_general.A_Error)  
                          : amRenderingServicesBackgroundRenderer.am_renderingservices.A_BackgroundRenderer
    {
      var aNewBackgroundRenderer  : amRenderingServicesBackgroundRenderer.am_renderingservices.A_BackgroundRenderer;

      var aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription;
      aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
      aFactoryDescription.setNames("AFactory_BackgroundRenderer", "R_BackgroundRenderer", "ABackgroundRenderer", "" + id);

      var aLogService  : amTransversalServicesLogService.am_transversalservices.A_LogService = null; //not created yet

      aNewBackgroundRenderer = new rmRenderingServicesBackgroundRenderer.rm_renderingservices.R_BackgroundRenderer(aFactoryDescription, aServiceContainer, aLogService, error);
      aNewBackgroundRenderer._iService.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
      //aServiceContainer._iServiceManager.addService(aServiceContainer);
      return aNewBackgroundRenderer; 
    }


    //-------------------------
    //  playlist controller and rendering controller configuration
    //-------------------------

    //----------- create default PlaylistController
    public createDefaultService_PlaylistController(
          aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
          aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
          aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
          id                 : number,
          error : amGeneralError.am_general.A_Error)  
                      : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController
    {
      var aNewPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController;

      var aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription;
      aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
      aFactoryDescription.setNames("AFactory_PlaylistController", "R_PlaylistController", "APlaylistController", "" + id);

      var aLogService  : amTransversalServicesLogService.am_transversalservices.A_LogService = null; //not created yet

      aNewPlaylistController = new rmCoreServicesPlaylistController.rm_coreservices.R_PlaylistController(aFactoryDescription, aServiceContainer, aLogService, error);
      aNewPlaylistController._iService.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
      //aServiceContainer._iServiceManager.addService(aServiceContainer);
      return aNewPlaylistController; 
    }


    //----------- create default RenderingController
    public createDefaultService_RenderingController(
          aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
          aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
          aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
          id                 : number,
          error : amGeneralError.am_general.A_Error)  
                      : amCoreServicesRenderingController.am_coreservices.A_RenderingController
    {
      var aNewRenderingController  : amCoreServicesRenderingController.am_coreservices.A_RenderingController;

      var aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription;
      aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
      aFactoryDescription.setNames("AFactory_RenderingController", "R_RenderingController", "ARenderingController", "" + id);

      var aLogService  : amTransversalServicesLogService.am_transversalservices.A_LogService = null; //not created yet

      aNewRenderingController = new rmCoreServicesRenderingController.rm_coreservices.R_RenderingController(aFactoryDescription, aServiceContainer, aLogService, error);
      aNewRenderingController._iService.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
      //aServiceContainer._iServiceManager.addService(aServiceContainer);
      return aNewRenderingController; 
    }


  //----------------------------------
  //     configuration entities
  //----------------------------------

    //------------ 
    public createDefaultPlaylisControllerConfig(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistControllerConfig.am_coreservices.AE_PlaylistControllerConfig
    {
      return new rmPlaylistControllerConfig.rm_coreservices.RE_PlaylistControllerConfig();                     
    }
    
    //------------ 
    public createDefaultRenderingControllerConfig(error : amGeneralError.am_general.A_Error)  : amCoreServicesRenderingControllerConfig.am_coreservices.AE_RenderingControllerConfig
    {
      return new rmRenderingControllerConfig.rm_coreservices.RE_RenderingControllerConfig();                     
    }

    //----------- create default Rendering Zone Pool
    public createDefaultRenderingZonePool(error : amGeneralError.am_general.A_Error)  : amRenderingServicesRenderingZonePool.am_renderingservices.AE_RenderingZonePool
    {
       return new rmRenderingServicesRenderingZonePool.rm_renderingservices.RE_RenderingZonePool();
    }
    
    //----------- create default Video Renderer Pool
    public createDefaultVideoRendererPool( error : amGeneralError.am_general.A_Error) : amRenderingServicesVideoRendererPool.am_renderingservices.AE_VideoRendererPool
    {
      return new rmRenderingServicesVideoRendererPool.rm_renderingservices.RE_VideoRendererPool();
    }


    //----------- create default VideoStream Renderer Pool
    public createDefaultVideoStreamRendererPool( error : amGeneralError.am_general.A_Error) : amRenderingServicesVideoStreamRendererPool.am_renderingservices.AE_VideoStreamRendererPool
    {
      return new rmRenderingServicesVideoStreamRendererPool.rm_renderingservices.RE_VideoStreamRendererPool();
    }

  //----------- create default Image Renderer Pool
  public createDefaultImageRendererPool( error : amGeneralError.am_general.A_Error) : amRenderingServicesImageRendererPool.am_renderingservices.AE_ImageRendererPool
  {
    return new rmRenderingServicesImageRendererPool.rm_renderingservices.RE_ImageRendererPool();
  }

  //----------- create default Html Renderer Pool
  public createDefaultHtmlRendererPool( error : amGeneralError.am_general.A_Error) : amRenderingServicesHtmlRendererPool.am_renderingservices.AE_HtmlRendererPool
  {
    return new rmRenderingServicesHtmlRendererPool.rm_renderingservices.RE_HtmlRendererPool();
  }

  //----------- create default HtmlTemplate Renderer Pool
  public createDefaultHtmlTemplateRendererPool( error : amGeneralError.am_general.A_Error) : amRenderingServicesHtmlTemplateRendererPool.am_renderingservices.AE_HtmlTemplateRendererPool
  {
    return new rmRenderingServicesHtmlTemplateRendererPool.rm_renderingservices.RE_HtmlTemplateRendererPool();
  }

  //----------- create default Flash Renderer Pool
  public createDefaultFlashRendererPool( error : amGeneralError.am_general.A_Error) : amRenderingServicesFlashRendererPool.am_renderingservices.AE_FlashRendererPool
  {
    return new rmRenderingServicesFlashRendererPool.rm_renderingservices.RE_FlashRendererPool();
  }

  //----------- create default FillRect Renderer Pool
  public createDefaultFillRectRendererPool( error : amGeneralError.am_general.A_Error) : amRenderingServicesFillRectRendererPool.am_renderingservices.AE_FillRectRendererPool
  {
    return new rmRenderingServicesFillRectRendererPool.rm_renderingservices.RE_FillRectRendererPool();
  }

  //----------- create default ScreenSaver Renderer Pool
  public createDefaultScreenSaverRendererPool( error : amGeneralError.am_general.A_Error) : amRenderingServicesScreenSaverRendererPool.am_renderingservices.AE_ScreenSaverRendererPool
  {
    return new rmRenderingServicesScreenSaverRendererPool.rm_renderingservices.RE_ScreenSaverRendererPool();
  }

  //----------- create default ScreenSaver Renderer Pool
  public createDefaultTvHdmiPassThroughSrvPool( error : amGeneralError.am_general.A_Error) : amRenderingServicesTvHdmiPassThroughSrvPool.am_renderingservices.AE_TvHdmiPassThroughSrvPool
  {
    return new rmRenderingServicesTvHdmiPassThroughSrvPool.rm_renderingservices.RE_TvHdmiPassThroughSrvPool();
  }


  //----------- create default Background Renderer Pool
  public createDefaultBackgroundRendererPool( error : amGeneralError.am_general.A_Error) : amRenderingServicesBackgroundRendererPool.am_renderingservices.AE_BackgroundRendererPool
  {
    return new rmRenderingServicesBackgroundRendererPool.rm_renderingservices.RE_BackgroundRendererPool();
  }    

  
  //----------- create default PlaylistControllerConfig
  /*
    public createDefaultPlaylistControllerConfig(
        aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
        aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
        aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
        id                 : number,
        error : amGeneralError.am_general.A_Error)
                  : amCoreServicesPlaylistControllerConfig.am_coreservices.AE_PlaylistControllerConfig
  {
      var aNewPlaylistControllerConfig  : amCoreServicesPlaylistControllerConfig.am_coreservices.AE_PlaylistControllerConfig;

      var aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription;
      aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
      aFactoryDescription.setNames("AEFactory_PlaylistControllerConfig", "RE_PlaylistControllerConfig", "AE_PlaylistControllerConfig", "" + id);

      var aLogService  : amTransversalServicesLogService.am_transversalservices.A_LogService = null; //not created yet

      aNewPlaylistControllerConfig = new rmCoreServicesPlaylistControllerConfig.rm_coreservices.RE_PlaylistControllerConfig();
      aNewPlaylistControllerConfig.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
      //aServiceContainer._iServiceManager.addService(aNewRenderingZonePool);
      return aNewPlaylistControllerConfig; 
    }*/

    //----------- create default RenderingControllerConfig
    /*
    public createDefaultRenderingControllerConfig(
        aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
        aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
        aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
        id                 : number,
        error : amGeneralError.am_general.A_Error)
                  : amCoreServicesRenderingControllerConfig.am_coreservices.AE_RenderingControllerConfig
    {
      var aNewRenderingControllerConfig  : amCoreServicesRenderingControllerConfig.am_coreservices.AE_RenderingControllerConfig;

      var aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription;
      aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
      aFactoryDescription.setNames("AEFactory_RenderingControllerConfig", "RE_RenderingControllerConfig", "AE_RenderingControllerConfig", "" + id);

      var aLogService  : amTransversalServicesLogService.am_transversalservices.A_LogService = null; //not created yet

      aNewRenderingControllerConfig = new rmCoreServicesRenderingControllerConfig.rm_coreservices.RE_RenderingControllerConfig();
      aNewRenderingControllerConfig.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
      //aServiceContainer._iServiceManager.addService(aNewRenderingZonePool);
      return aNewRenderingControllerConfig; 
    }
    */


    //--------------------------------------
    // create Rendering Service Pools
    //---------------------------------------
    /*
    //----------- create default Rendering Zone Pool
    public createDefaultRenderingZonePool(
          aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
          aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
          aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
          id                 : number,
          error : amGeneralError.am_general.A_Error)  
                 : amRenderingServicesRenderingZonePool.am_renderingservices.AE_RenderingZonePool
    {
       var aNewRenderingZonePool  : amRenderingServicesRenderingZonePool.am_renderingservices.AE_RenderingZonePool;

       var aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription;
       aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
       aFactoryDescription.setNames("AEFactory_RenderingZonePool", "RE_RenderingZonePool", "AE_RenderingZonePool", "" + id);

       var aLogService  : amTransversalServicesLogService.am_transversalservices.A_LogService = null; //not created yet

       aNewRenderingZonePool = new rmRenderingServicesRenderingZonePool.rm_renderingservices.RE_RenderingZonePool();
       aNewRenderingZonePool.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
       //aServiceContainer._iServiceManager.addService(aNewRenderingZonePool);
       return aNewRenderingZonePool; 
    }

    
   //----------- create default Video Renderer Pool
   public createDefaultVideoRendererPool(
                     aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                     aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
                     aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                     id                 : number,
                     error : amGeneralError.am_general.A_Error)
                               : amRenderingServicesVideoRendererPool.am_renderingservices.AE_VideoRendererPool
   {
      var aNewVideoRendererPool  : amRenderingServicesVideoRendererPool.am_renderingservices.AE_VideoRendererPool;

      var aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription;
      aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
      aFactoryDescription.setNames("AEFactory_VideoRendererPool", "RE_VideoRendererPool", "AE_VideoRendererPool", "" + id);

      var aLogService  : amTransversalServicesLogService.am_transversalservices.A_LogService = null; //not created yet

      aNewVideoRendererPool = new rmRenderingServicesVideoRendererPool.rm_renderingservices.RE_VideoRendererPool();
      aNewVideoRendererPool.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
      //aServiceContainer._iServiceManager.addService(aNewRenderingZonePool);
      return aNewVideoRendererPool; 
    }


    //----------- create default VideoStream Renderer Pool
    public createDefaultVideoStreamRendererPool(
            aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
            aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
            aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
            id                 : number,
            error : amGeneralError.am_general.A_Error)
                      : amRenderingServicesVideoStreamRendererPool.am_renderingservices.AE_VideoStreamRendererPool
    {
      var aNewVideoStreamRendererPool  : amRenderingServicesVideoStreamRendererPool.am_renderingservices.AE_VideoStreamRendererPool;

      var aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription;
      aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
      aFactoryDescription.setNames("AEFactory_VideoStreamRendererPool", "RE_VideoStreamRendererPool", "AE_VideoStreamRendererPool", "" + id);

      var aLogService  : amTransversalServicesLogService.am_transversalservices.A_LogService = null; //not created yet

      aNewVideoStreamRendererPool = new rmRenderingServicesVideoStreamRendererPool.rm_renderingservices.RE_VideoStreamRendererPool();
      aNewVideoStreamRendererPool.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
      //aServiceContainer._iServiceManager.addService(aNewRenderingZonePool);
      return aNewVideoStreamRendererPool; 
    }

  //----------- create default Image Renderer Pool
  public createDefaultImageRendererPool(
          aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
          aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
          aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
          id                 : number,
          error : amGeneralError.am_general.A_Error)
                    : amRenderingServicesImageRendererPool.am_renderingservices.AE_ImageRendererPool
  {
    var aNewImageRendererPool  : amRenderingServicesImageRendererPool.am_renderingservices.AE_ImageRendererPool;

    var aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription;
    aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
    aFactoryDescription.setNames("AEFactory_ImageRendererPool", "RE_ImageRendererPool", "AE_ImageRendererPool", "" + id);

    var aLogService  : amTransversalServicesLogService.am_transversalservices.A_LogService = null; //not created yet

    aNewImageRendererPool = new rmRenderingServicesImageRendererPool.rm_renderingservices.RE_ImageRendererPool();
    aNewImageRendererPool.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
    //aServiceContainer._iServiceManager.addService(aNewRenderingZonePool);
    return aNewImageRendererPool; 
  }

  //----------- create default Html Renderer Pool
  public createDefaultHtmlRendererPool(
                aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
                aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                id                 : number,
                error : amGeneralError.am_general.A_Error)
                          : amRenderingServicesHtmlRendererPool.am_renderingservices.AE_HtmlRendererPool
  {
    var aNewHtmlRendererPool  : amRenderingServicesHtmlRendererPool.am_renderingservices.AE_HtmlRendererPool;

    var aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription;
    aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
    aFactoryDescription.setNames("AEFactory_HtmlRendererPool", "RE_HtmlRendererPool", "AE_HtmlRendererPool", "" + id);

    var aLogService  : amTransversalServicesLogService.am_transversalservices.A_LogService = null; //not created yet

    aNewHtmlRendererPool = new rmRenderingServicesHtmlRendererPool.rm_renderingservices.RE_HtmlRendererPool();
    aNewHtmlRendererPool.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
    //aServiceContainer._iServiceManager.addService(aNewRenderingZonePool);
    return aNewHtmlRendererPool; 
  }

  //----------- create default HtmlTemplate Renderer Pool
  public createDefaultHtmlTemplateRendererPool(
      aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
      aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
      aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
      id                 : number,
      error : amGeneralError.am_general.A_Error)
                : amRenderingServicesHtmlTemplateRendererPool.am_renderingservices.AE_HtmlTemplateRendererPool
  {
    var aNewHtmlTemplateRendererPool  : amRenderingServicesHtmlTemplateRendererPool.am_renderingservices.AE_HtmlTemplateRendererPool;

    var aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription;
    aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
    aFactoryDescription.setNames("AEFactory_HtmlTemplateRendererPool", "RE_HtmlTemplateRendererPool", "AE_HtmlTemplateRendererPool", "" + id);

    var aLogService  : amTransversalServicesLogService.am_transversalservices.A_LogService = null; //not created yet

    aNewHtmlTemplateRendererPool = new rmRenderingServicesHtmlTemplateRendererPool.rm_renderingservices.RE_HtmlTemplateRendererPool();
    aNewHtmlTemplateRendererPool.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
    //aServiceContainer._iServiceManager.addService(aNewRenderingZonePool);
    return aNewHtmlTemplateRendererPool; 
  }


  //----------- create default Flash Renderer Pool
  public createDefaultFlashRendererPool(
                aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
                aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                id                 : number,
                error : amGeneralError.am_general.A_Error)
                          : amRenderingServicesFlashRendererPool.am_renderingservices.AE_FlashRendererPool
  {
    var aNewFlashRendererPool  : amRenderingServicesFlashRendererPool.am_renderingservices.AE_FlashRendererPool;

    var aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription;
    aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
    aFactoryDescription.setNames("AEFactory_FlashRendererPool", "RE_FlashRendererPool", "AE_FlashRendererPool", "" + id);

    var aLogService  : amTransversalServicesLogService.am_transversalservices.A_LogService = null; //not created yet

    aNewFlashRendererPool = new rmRenderingServicesFlashRendererPool.rm_renderingservices.RE_FlashRendererPool();
    aNewFlashRendererPool.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
    //aServiceContainer._iServiceManager.addService(aNewRenderingZonePool);
    return aNewFlashRendererPool; 
  }

  //----------- create default FillRect Renderer Pool
  public createDefaultFillRectRendererPool(
            aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
            aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
            aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
            id                 : number,
            error : amGeneralError.am_general.A_Error)
                      : amRenderingServicesFillRectRendererPool.am_renderingservices.AE_FillRectRendererPool
  {
    var aNewFillRectRendererPool  : amRenderingServicesFillRectRendererPool.am_renderingservices.AE_FillRectRendererPool;

    var aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription;
    aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
    aFactoryDescription.setNames("AEFactory_FillRectRendererPool", "RE_FillRectRendererPool", "AE_FillRectRendererPool", "" + id);

    var aLogService  : amTransversalServicesLogService.am_transversalservices.A_LogService = null; //not created yet

    aNewFillRectRendererPool = new rmRenderingServicesFillRectRendererPool.rm_renderingservices.RE_FillRectRendererPool();
    aNewFillRectRendererPool.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
    //aServiceContainer._iServiceManager.addService(aNewRenderingZonePool);
    return aNewFillRectRendererPool; 
  }


  //----------- create default ScreenSaver Renderer Pool
  public createDefaultScreenSaverRendererPool(
                aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
                aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                id                 : number,
                error : amGeneralError.am_general.A_Error)
                          : amRenderingServicesScreenSaverRendererPool.am_renderingservices.AE_ScreenSaverRendererPool
  {
    var aNewScreenSaverRendererPool  : amRenderingServicesScreenSaverRendererPool.am_renderingservices.AE_ScreenSaverRendererPool;

    var aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription;
    aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
    aFactoryDescription.setNames("AEFactory_ScreenSaverRendererPool", "RE_ScreenSaverRendererPool", "AE_ScreenSaverRendererPool", "" + id);

    var aLogService  : amTransversalServicesLogService.am_transversalservices.A_LogService = null; //not created yet

    aNewScreenSaverRendererPool = new rmRenderingServicesScreenSaverRendererPool.rm_renderingservices.RE_ScreenSaverRendererPool();
    aNewScreenSaverRendererPool.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
    //aServiceContainer._iServiceManager.addService(aNewRenderingZonePool);
    return aNewScreenSaverRendererPool; 
  }

  //----------- create default ScreenSaver Renderer Pool
  public createDefaultTvHdmiPassThroughSrvPool(
                    aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                    aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
                    aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                    id                 : number,
                    error : amGeneralError.am_general.A_Error)
                              : amRenderingServicesTvHdmiPassThroughSrvPool.am_renderingservices.AE_TvHdmiPassThroughSrvPool
  {
    var aNewTvHdmiPassThroughSrvPool  : amRenderingServicesTvHdmiPassThroughSrvPool.am_renderingservices.AE_TvHdmiPassThroughSrvPool;

    var aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription;
    aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
    aFactoryDescription.setNames("AEFactory_TvHdmiPassThroughSrvPool", "RE_TvHdmiPassThroughSrvPool", "AE_TvHdmiPassThroughSrvPool", "" + id);

    var aLogService  : amTransversalServicesLogService.am_transversalservices.A_LogService = null; //not created yet

    aNewTvHdmiPassThroughSrvPool = new rmRenderingServicesTvHdmiPassThroughSrvPool.rm_renderingservices.RE_TvHdmiPassThroughSrvPool();
    aNewTvHdmiPassThroughSrvPool.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
    //aServiceContainer._iServiceManager.addService(aNewRenderingZonePool);
    return aNewTvHdmiPassThroughSrvPool; 
  }


   //----------- create default Background Renderer Pool
  public createDefaultBackgroundRendererPool(
              aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
              aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
              aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
              id                 : number,
              error : amGeneralError.am_general.A_Error)
                        : amRenderingServicesBackgroundRendererPool.am_renderingservices.AE_BackgroundRendererPool
  {
    var aNewBackgroundRendererPool  : amRenderingServicesBackgroundRendererPool.am_renderingservices.AE_BackgroundRendererPool;

    var aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription;
    aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
    aFactoryDescription.setNames("AEFactory_BackgroundRendererPool", "RE_BackgroundRendererPool", "AE_BackgroundRendererPool", "" + id);

    var aLogService  : amTransversalServicesLogService.am_transversalservices.A_LogService = null; //not created yet

    aNewBackgroundRendererPool = new rmRenderingServicesBackgroundRendererPool.rm_renderingservices.RE_BackgroundRendererPool();
    aNewBackgroundRendererPool.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
    //aServiceContainer._iServiceManager.addService(aNewRenderingZonePool);
    return aNewBackgroundRendererPool; 
  }
  */



  }
} 