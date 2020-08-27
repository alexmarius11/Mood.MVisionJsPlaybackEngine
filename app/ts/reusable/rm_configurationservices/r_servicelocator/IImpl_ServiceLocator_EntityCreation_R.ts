import amConfigurationServices = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/I_ServiceLocator_EntityCreation");

import amConfigurationServicesServiceLocator   = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");

import amGeneralError                          = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralFactoryDescription             = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amTransversalServicesLogService         = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");


import amGeneral2 = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneral3 = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneral4 = require("../../../../../app/ts/abstract/am_general/a_property/A_Property");
import amGeneral5 = require("../../../../../app/ts/abstract/am_general/a_property/A_Properties");
import amGeneral6 = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");
import amGeneral7 = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescriptions");

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
import amGeneralFirmwareProperties     = require("../../../../../app/ts/abstract/am_general/a_firmwareproperties/A_FirmwareProperties");
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

import amCoreServicesPlaylistController        = require("../../../../../app/ts/abstract/am_coreservices/a_playlistcontroller/A_PlaylistController");
import amCoreServicesPlaylistControllerConfig  = require("../../../../../app/ts/abstract/am_coreservices/a_playlistcontroller/AE_PlaylistControllerConfig");
import amCoreServicesRenderingController       = require("../../../../../app/ts/abstract/am_coreservices/a_renderingcontroller/A_RenderingController");
import amCoreServicesRenderingControllerConfig = require("../../../../../app/ts/abstract/am_coreservices/a_renderingcontroller/AE_RenderingControllerConfig");

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
import amRenderParametersFillRect   = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_FillRect");

import amControlPrepareParams      = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Prepare");
import amControlPrepareParamsPool  = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_PreparePool");
import amControlRunParams          = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Run");
import amControlRunParamsPool      = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_RunPool");
import amControlStopParams         = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Stop");
import amControlStopParamsPool     = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_StopPool");
import amControlStatusParams       = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Status");
import amControlStatusParamsPool   = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_StatusPool");

import amRenderingServicesRenderingZonePool    = require("../../../../../app/ts/abstract/am_renderingservices/a_renderingzone/AE_RenderingZonePool");
import amRenderingServicesImageRendererPool    = require("../../../../../app/ts/abstract/am_renderingservices/a_imagerenderer/AE_ImageRendererPool");
import amRenderingServicesVideoRendererPool    = require("../../../../../app/ts/abstract/am_renderingservices/a_videorenderer/AE_VideoRendererPool");
import amRenderingServicesVideoStreamRendererPool = require("../../../../../app/ts/abstract/am_renderingservices/a_videostreamrenderer/AE_VideoStreamRendererPool");
import amRenderingServicesHtmlRendererPool     = require("../../../../../app/ts/abstract/am_renderingservices/a_htmlrenderer/AE_HtmlRendererPool");
import amRenderingServicesHtmlTemplateRendererPool = require("../../../../../app/ts/abstract/am_renderingservices/a_htmltemplaterenderer/AE_HtmlTemplateRendererPool");
import amRenderingServicesFlashRendererPool    = require("../../../../../app/ts/abstract/am_renderingservices/a_flashrenderer/AE_FlashRendererPool");
import amRenderingServicesScreenSaverRendererPool = require("../../../../../app/ts/abstract/am_renderingservices/a_screensaverrenderer/AE_ScreenSaverRendererPool");
import amRenderingServicesFillRectRendererPool = require("../../../../../app/ts/abstract/am_renderingservices/a_fillrectrenderer/AE_FillRectRendererPool");
import amRenderingServicesTvHdmiPassThroughSrvPool = require("../../../../../app/ts/abstract/am_renderingservices/a_tvhdmipassthroughsrv/AE_TvHdmiPassThroughSrvPool");
import amRenderingServicesBackgroundRendererPool    = require("../../../../../app/ts/abstract/am_renderingservices/a_backgroundrenderer/AE_BackgroundRendererPool");

import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import rmTransversalServices = require("../../../../../app/ts/reusable/rm_configurationservices/r_servicelocator/R_ServiceLocator");
                                                                                                        

export module rm_configurationservices
{
  export class IImpl_ServiceLocator_EntityCreation_R implements amConfigurationServices.am_configurationservices.I_ServiceLocator_EntityCreation
  {
    _name: string;    

    //----------- owner
    _owner: rmTransversalServices.rm_configurationservices.R_ServiceLocator;

    //----------- constructor 
    constructor(owner: rmTransversalServices.rm_configurationservices.R_ServiceLocator)  
    {
      this._owner = owner;  
    }

    //----------- create entity
    public createEntity(entityName: string, error:  amGeneral2.am_general.A_Error): amGeneral3.am_general.A_Entity
    {
      return this._owner.createEntity(entityName, error);
    }

    //----------- create a default Error object
    public createDefaultError() : amGeneral2.am_general.A_Error
    {
      return this._owner.createDefaultError(); 
    }

    //----------- create a default Context object
    public createDefaultContext() : amGeneralContext.am_general.A_Context
    {
      return this._owner.createDefaultContext(); 
    }

    //----------- create a default Property object
    public createDefaultProperty(error : amGeneral2.am_general.A_Error) : amGeneral4.am_general.A_Property
    {
      return this._owner.createDefaultProperty(error); 
    }

    //----------- create a default list of Properties
    public createDefaultProperties(error : amGeneral2.am_general.A_Error)  : amGeneral5.am_general.A_Properties
    {
      return this._owner.createDefaultProperties(error); 
    }
    
    //----------- create a default Property object
    public createDefaultFactoryDescription(error : amGeneral2.am_general.A_Error) : amGeneral6.am_general.A_FactoryDescription
    {
      return this._owner.createDefaultFactoryDescription(error); 
    }

    //----------- create a default list of Properties
    public createDefaultFactoryDescriptions(error : amGeneral2.am_general.A_Error)  : amGeneral7.am_general.A_FactoryDescriptions
    {
      return this._owner.createDefaultFactoryDescriptions(error); 
    }
    
    //----------- create a default date-time object
    public createDefaultDateTime(error : amGeneralError.am_general.A_Error)  : amGeneralDateTime.am_general.A_DateTime
    {
      return this._owner.createDefaultDateTime(error); 
    }

    //----------- create a default time-zone object
    public createDefaultTimeZone(error : amGeneralError.am_general.A_Error)  : amGeneralTimeZone.am_general.A_TimeZone
    {
      return this._owner.createDefaultTimeZone(error); 
    }

    //----------- create a default audio-properties object
    public createDefaultSoundProperties(error : amGeneralError.am_general.A_Error)  : amGeneralSoundProperties.am_general.A_SoundProperties
    {
      return this._owner.createDefaultSoundProperties(error); 
    }
    
    //----------- create a default screen-properties object
    public createDefaultScreenProperties(error : amGeneralError.am_general.A_Error)  : amGeneralScreenProperties.am_general.A_ScreenProperties
    {
      return this._owner.createDefaultScreenProperties(error); 
    }

    //----------- create a default appserver-properties object
    public createDefaultAppServerProperties(error : amGeneralError.am_general.A_Error)  : amGeneralAppServerProperties.am_general.A_AppServerProperties
    {
      return this._owner.createDefaultAppServerProperties(error); 
    }

    //----------- create a default appserver-properties object
    public createDefaultFileInfo(error : amGeneralError.am_general.A_Error)  : amGeneralFileInfo.am_general.A_FileInfo
    {
      return this._owner.createDefaultFileInfo(error); 
    }

    //----------- create a default network-properties object
    public createDefaultNetworkProperties(error : amGeneralError.am_general.A_Error)  : amGeneralNetworkProperties.am_general.A_NetworkProperties
    {
      return this._owner.createDefaultNetworkProperties(error); 
    }

    //----------- create a default network-card-properties object
    public createDefaultNetworkCardProperties(error : amGeneralError.am_general.A_Error)  : amGeneralNetworkCardProperties.am_general.A_NetworkCardProperties
    {
      return this._owner.createDefaultNetworkCardProperties(error); 
    }

    //----------- create a default network-proxy-properties object
    public createDefaultNetworkProxyProperties(error : amGeneralError.am_general.A_Error)  : amGeneralNetworkProxyProperties.am_general.A_NetworkProxyProperties
    {
      return this._owner.createDefaultNetworkProxyProperties(error); 
    }

    //----------- create a default wifi-connection-info object
    public createDefaultWifiConnectionInfo(error : amGeneralError.am_general.A_Error)  : amGeneralWifiConnectionInfo.am_general.A_WifiConnectionInfo
    {
      return this._owner.createDefaultWifiConnectionInfo(error); 
    }
    
    public createDefaultFirmwareProperties(error : amGeneralError.am_general.A_Error)  : amGeneralFirmwareProperties.am_general.A_FirmwareProperties
    {
      return this._owner.createDefaultFirmwareProperties(error); 
    }

    //----------- create a default beacon-info object
    public createDefaultBeaconInfo(error : amGeneralError.am_general.A_Error)  : amGeneralBeaconInfo.am_general.A_BeaconInfo
    {
      return this._owner.createDefaultBeaconInfo(error); 
    }    

        //----------- create a default eddystone-info object
    public createDefaultEddystoneInfo(error : amGeneralError.am_general.A_Error)  : amGeneralEddystoneInfo.am_general.A_EddystoneInfo
    {
      return this._owner.createDefaultEddystoneInfo(error); 
    }    

    //----------- create a default capture-screen-info object
    public createDefaultCaptureScreenInfo(error : amGeneralError.am_general.A_Error)  : amGeneralCaptureScreenInfo.am_general.A_CaptureScreenInfo
    {
      return this._owner.createDefaultCaptureScreenInfo(error); 
    }    

    //----------- create a default platform-info object
    public createDefaultPlatformInfo(error : amGeneralError.am_general.A_Error)  : amGeneralPlatformInfo.am_general.A_PlatformInfo
    {
      return this._owner.createDefaultPlatformInfo(error); 
    }    

    //----------- create a default system-usage-info object
    public createDefaultSystemUsageInfo(error : amGeneralError.am_general.A_Error)  : amGeneralSystemUsageInfo.am_general.A_SystemUsageInfo
    {
      return this._owner.createDefaultSystemUsageInfo(error); 
    }    

    //----------- create a default system-usage-info object
    public createDefaultWifiSoftAppInfo(error : amGeneralError.am_general.A_Error)  : amGeneralWifiSoftAppInfo.am_general.A_WifiSoftAppInfo
    {
      return this._owner.createDefaultWifiSoftAppInfo(error); 
    }    

    //----------- create a default failure-mode-info object
    public createDefaultFailureModeInfo(error : amGeneralError.am_general.A_Error)  : amGeneralFailureModeInfo.am_general.A_FailureModeInfo
    {
      return this._owner.createDefaultFailureModeInfo(error); 
    }    

    //----------- create a default power-save-mode-info object
    public createDefaultPowerSaveModeInfo(error : amGeneralError.am_general.A_Error)  : amGeneralPowerSaveModeInfo.am_general.A_PowerSafeModeInfo
    {
      return this._owner.createDefaultPowerSaveModeInfo(error); 
    }    

    //----------- create a default tile-info object
    public createDefaultTileInfo(error : amGeneralError.am_general.A_Error)  : amGeneralTileInfo.am_general.A_TileInfo
    {
      return this._owner.createDefaultTileInfo(error); 
    }    

    //----------- create a default system-monitor-info object
    public createDefaultSystemMonitorInfo(error : amGeneralError.am_general.A_Error)  : amGeneralSystemMonitorInfo.am_general.A_SystemMonitorInfo
    {
      return this._owner.createDefaultSystemMonitorInfo(error); 
    }    

    //----------- create a default usage-permissions object
    public createDefaultUsageData(error : amGeneralError.am_general.A_Error)  : amGeneralUsageData.am_general.A_UsageData
    {
      return this._owner.createDefaultUsageData(error); 
    }    

    //----------- create a default usage-permissions object
    public createDefaultUsagePermisssions(error : amGeneralError.am_general.A_Error)  : amGeneralUsagePermissions.am_general.A_UsagePermissions
    {
      return this._owner.createDefaultUsagePermissions(error); 
    }    

    //----------- create a default device-timer-info object
    public createDefaultDeviceTimerInfo(error : amGeneralError.am_general.A_Error)  : amGeneralDeviceTimerInfo.am_general.A_DeviceTimerInfo
    {
      return this._owner.createDefaultDeviceTimerInfo(error); 
    }    
    
    //----------- create a default sha-properties object
    public createDefaultShaProperties(error : amGeneralError.am_general.A_Error)  : amGeneralShaProperties.am_general.A_ShaProperties
    {
      return this._owner.createDefaultShaProperties(error); 
    }    

    //----------- create a default xml json object
    public createDefaultXmlJsonObject(error : amGeneralError.am_general.A_Error)  : amGeneralXmlJsonObject.am_general.A_XmlJsonObject
    {
      return this._owner.createDefaultXmlJsonObject(error); 
    }

    //----------------------------
    // xml objects
    //----------------------------

    //----------- create a default xml document
    public createDefaultXmlDocument(error : amGeneralError.am_general.A_Error)  : amGeneralXmlDocument.am_general.AE_XmlDocument
    {
      return this._owner.createDefaultXmlDocument(error); 
    }
    
    //----------- create a default xml document
    public createDefaultXmlNode(error : amGeneralError.am_general.A_Error)  : amGeneralXmlNode.am_general.AE_XmlNode
    {
      return this._owner.createDefaultXmlNode(error); 
    }
    //----------------------------
    // queue + event + random + diffusion
    //----------------------------
    //----------- create a default queue
    public createDefaultQueue(error : amGeneralError.am_general.A_Error)  : amGeneralQueue.am_general.AE_Queue
    {
      return this._owner.createDefaultQueue(error); 
    }

    //----------- create a default event
    public createDefaultEvent(error : amGeneralError.am_general.A_Error)  : amGeneralEvent.am_general.AE_Event
    {
      return this._owner.createDefaultEvent(error); 
    }

    //----------- create a default random
    public createDefaultRandom(error : amGeneralError.am_general.A_Error)  : amGeneralRandom.am_general.AE_Random
    {
      return this._owner.createDefaultRandom(error); 
    }

    //----------- create a default diffusion
    public createDefaultDiffusion(error : amGeneralError.am_general.A_Error)  : amGeneralDiffusion.am_general.AE_Diffusion
    {
      return this._owner.createDefaultDiffusion(error); 
    }

    //----------------------------
    // playback config classes
    //----------------------------

    //----------- create hardware settings 
    public createDefaultHardwareSettings(error : amGeneralError.am_general.A_Error)  : amPlaybackHardwareSettings.am_playback.A_HardwareSettings
    {
      return this._owner.createDefaultHardwareSettings(error); 
    }

    //------------ 
    public createDefaultOpeningHours(error : amGeneralError.am_general.A_Error)  : amPlaybackOpeningHours.am_playback.A_OpeningHours
    {
      return this._owner.createDefaultOpeningHours(error); 
    }

    //------------ 
    public createDefaultDayOpeningHours(error : amGeneralError.am_general.A_Error)  : amPlaybackDayOpeningHours.am_playback.A_DayOpeningHours
    {
      return this._owner.createDefaultDayOpeningHours(error); 
    }

    //--------------
    public createDefaultScreenSaverConfig(error : amGeneralError.am_general.A_Error)  : amPlaybackScreenSaverConfig.am_playback.AE_ScreenSaverConfig
    {
      return this._owner.createDefaultScreenSaverConfig(error); 
    }

    //--------------
    public createDefaultPlaybackGlobalConfig(error : amGeneralError.am_general.A_Error)  : amGeneralPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig
    {
      return this._owner.createDefaultPlaybackGlobalConfig(error); 
    }

    //----------------------------------------
    //    playlist items creators
    //----------------------------------------

    //------------ 
    public createDefaultPlaylistItem(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItem.am_coreservices.AE_PlaylistItem
    {
      return this._owner.createDefaultPlaylistItem(error); 
    }

    //------------ 
    public createDefaultPlaylistItem_Container(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemContainer.am_coreservices.AE_PlaylistItem_Container
    {
      return this._owner.createDefaultPlaylistItem_Container(error); 
    }

    //------------ 
    public createDefaultPlaylistItem_Design(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemDesign.am_coreservices.AE_PlaylistItem_Design
    {
      return this._owner.createDefaultPlaylistItem_Design(error); 
    }

    //------------ 
    public createDefaultPlaylistItem_DesignZone(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemDesignZone.am_coreservices.AE_PlaylistItem_DesignZone
    {
      return this._owner.createDefaultPlaylistItem_DesignZone(error); 
    }

    //------------ 
    public createDefaultPlaylistItem_Event(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemEvent.am_coreservices.AE_PlaylistItem_Event
    {      
      return this._owner.createDefaultPlaylistItem_Event(error);   
    }

    //------------ 
    public createDefaultPlaylistItem_Events(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemEvents.am_coreservices.AE_PlaylistItem_Events
    {      
      return this._owner.createDefaultPlaylistItem_Events(error);   
    }

    //------------ 
    public createDefaultPlaylistItem_FillRect(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemFillRect.am_coreservices.AE_PlaylistItem_FillRect
    {
      return this._owner.createDefaultPlaylistItem_FillRect(error);   
    }

    //------------ 
    public createDefaultPlaylistItem_Flash(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemFlash.am_coreservices.AE_PlaylistItem_Flash
    {
      return this._owner.createDefaultPlaylistItem_Flash(error);   
    }

    //------------ 
    public createDefaultPlaylistItem_HtmlTemplate(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemHtmlTemplate.am_coreservices.AE_PlaylistItem_HtmlTemplate
    {
      return this._owner.createDefaultPlaylistItem_HtmlTemplate(error);   
    }

    //------------ 
    public createDefaultPlaylistItem_Image(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemImage.am_coreservices.AE_PlaylistItem_Image
    {
      return this._owner.createDefaultPlaylistItem_Image(error);   
    }

    //------------ 
    public createDefaultPlaylistItem_Playlist(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemPlaylist.am_coreservices.AE_PlaylistItem_Playlist
    {
      return this._owner.createDefaultPlaylistItem_Playlist(error);   
    }

    //------------ 
    public createDefaultPlaylistItem_PriorityPlaylist(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemPriorityPlaylist.am_coreservices.AE_PlaylistItem_PriorityPlaylist
    {
      return this._owner.createDefaultPlaylistItem_PriorityPlaylist(error);   
    }

    //------------ 
    public createDefaultPlaylistItem_Stream(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStream.am_coreservices.AE_PlaylistItem_Stream
    {
      return this._owner.createDefaultPlaylistItem_Stream(error);   
    }

    //------------ 
    public createDefaultPlaylistItem_ScreenSaverImage(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemScreenSaverImage.am_coreservices.AE_PlaylistItem_ScreenSaverImage
    {
      return this._owner.createDefaultPlaylistItem_ScreenSaverImage(error);   
    }

    //------------ 
    public createDefaultPlaylistItem_ScreenSaverVideo(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemScreenSaverVideo.am_coreservices.AE_PlaylistItem_ScreenSaverVideo
    {
      return this._owner.createDefaultPlaylistItem_ScreenSaverVideo(error);   
    }

    //------------ 
    public createDefaultPlaylistItem_Tag(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemTag.am_coreservices.AE_PlaylistItem_Tag
    {
      return this._owner.createDefaultPlaylistItem_Tag(error);   
    }

   //------------ 
   public createDefaultPlaylistItem_RealTag(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemRealTag.am_coreservices.AE_PlaylistItem_RealTag
   {
     return this._owner.createDefaultPlaylistItem_RealTag(error);   
   }

   //------------ 
    public createDefaultPlaylistItem_TVPassThrough(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemTVPassThrough.am_coreservices.AE_PlaylistItem_TVPassThrough
    {
      return this._owner.createDefaultPlaylistItem_TVPassThrough(error);   
    }

   //------------ 
   public createDefaultPlaylistItem_TVTunner(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemTVTunner.am_coreservices.AE_PlaylistItem_TVTunner
   {
     return this._owner.createDefaultPlaylistItem_TVTunner(error);   
   }

   //------------ 
    public createDefaultPlaylistItem_Video(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemVideo.am_coreservices.AE_PlaylistItem_Video
    {
      return this._owner.createDefaultPlaylistItem_Video(error);   
    }

    //------------ 
    public createDefaultPlaylistItem_VideoStream(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemVideoStream.am_coreservices.AE_PlaylistItem_VideoStream
    {
      return this._owner.createDefaultPlaylistItem_VideoStream(error);   
    }

    //------------ 
    public createDefaultPlaylistItem_WebPage(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemWebPage.am_coreservices.AE_PlaylistItem_WebPage
    {
      return this._owner.createDefaultPlaylistItem_WebPage(error);   
    }

    //------------ 
    public createDefaultMainPlaylist(error : amGeneralError.am_general.A_Error)  : amCoreServicesMainPlaylist.am_coreservices.AE_MainPlaylist
    {
      return this._owner.createDefaultMainPlaylist(error);               
    }

    //------------ 
    public createDefaultTagManager(error : amGeneralError.am_general.A_Error)  : amCoreServicesTagManager.am_coreservices.AE_TagManager
    {
      return this._owner.createDefaultTagManager(error);               
    }
   
    //----------------------------------------
    //    playlist items logic creators
    //----------------------------------------

    //------------ 
    public createDefaultPlaylistItemLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemLogic.am_coreservices.AE_PlaylistItem_Logic
    {
      return this._owner.createDefaultPlaylistItemLogic(error); 
    }

    //------------ 
    public createDefaultPlaylistItem_ContainerLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemContainerLogic.am_coreservices.AE_PlaylistItem_ContainerLogic
    {
      return this._owner.createDefaultPlaylistItem_ContainerLogic(error); 
    }

    //------------ 
    public createDefaultPlaylistItem_DesignLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemDesignLogic.am_coreservices.AE_PlaylistItem_DesignLogic
    {
      return this._owner.createDefaultPlaylistItem_DesignLogic(error); 
    }

    //------------ 
    public createDefaultPlaylistItem_DesignZoneLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemDesignZoneLogic.am_coreservices.AE_PlaylistItem_DesignZoneLogic
    {
      return this._owner.createDefaultPlaylistItem_DesignZoneLogic(error); 
    }

    //------------ 
    public createDefaultPlaylistItem_DesignMainZoneLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemDesignMainZoneLogic.am_coreservices.AE_PlaylistItem_DesignMainZoneLogic
    {
      return this._owner.createDefaultPlaylistItem_DesignMainZoneLogic(error); 
    }

    //------------ 
    public createDefaultPlaylistItem_EventLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemEventLogic.am_coreservices.AE_PlaylistItem_EventLogic
    {      
      return this._owner.createDefaultPlaylistItem_EventLogic(error);   
    }

    //------------ 
    public createDefaultPlaylistItem_EventsLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemEventsLogic.am_coreservices.AE_PlaylistItem_EventsLogic
    {      
      return this._owner.createDefaultPlaylistItem_EventsLogic(error);   
    }

    //------------ 
    public createDefaultPlaylistItem_FillRectLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemFillRectLogic.am_coreservices.AE_PlaylistItem_FillRectLogic
    {
      return this._owner.createDefaultPlaylistItem_FillRectLogic(error);   
    }

    //------------ 
    public createDefaultPlaylistItem_FlashLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemFlashLogic.am_coreservices.AE_PlaylistItem_FlashLogic
    {
      return this._owner.createDefaultPlaylistItem_FlashLogic(error);   
    }

    //------------ 
    public createDefaultPlaylistItem_HtmlTemplateLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemHtmlTemplateLogic.am_coreservices.AE_PlaylistItem_HtmlTemplateLogic
    {
      return this._owner.createDefaultPlaylistItem_HtmlTemplateLogic(error);   
    }

    //------------ 
    public createDefaultPlaylistItem_ImageLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemImageLogic.am_coreservices.AE_PlaylistItem_ImageLogic
    {
      return this._owner.createDefaultPlaylistItem_ImageLogic(error);   
    }

    //------------ 
    public createDefaultPlaylistItem_PlaylistLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemPlaylistLogic.am_coreservices.AE_PlaylistItem_PlaylistLogic
    {
      return this._owner.createDefaultPlaylistItem_PlaylistLogic(error);   
    }

    //------------ 
    public createDefaultPlaylistItem_PriorityPlaylistLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemPriorityPlaylistLogic.am_coreservices.AE_PlaylistItem_PriorityPlaylistLogic
    {
      return this._owner.createDefaultPlaylistItem_PriorityPlaylistLogic(error);   
    }

    //------------ 
    public createDefaultPlaylistItem_StreamLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStreamLogic.am_coreservices.AE_PlaylistItem_StreamLogic
    {
      return this._owner.createDefaultPlaylistItem_StreamLogic(error);   
    }

    //------------ 
    public createDefaultPlaylistItem_ScreenSaverImageLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemScreenSaverImageLogic.am_coreservices.AE_PlaylistItem_ScreenSaverImageLogic
    {
      return this._owner.createDefaultPlaylistItem_ScreenSaverImageLogic(error);   
    }

    //------------ 
    public createDefaultPlaylistItem_ScreenSaverVideoLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemScreenSaverVideoLogic.am_coreservices.AE_PlaylistItem_ScreenSaverVideoLogic
    {
      return this._owner.createDefaultPlaylistItem_ScreenSaverVideoLogic(error);   
    }

    //------------ 
    public createDefaultPlaylistItem_TagLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemTagLogic.am_coreservices.AE_PlaylistItem_TagLogic
    {
      return this._owner.createDefaultPlaylistItem_TagLogic(error);   
    }

   //------------ 
   public createDefaultPlaylistItem_RealTagLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemRealTagLogic.am_coreservices.AE_PlaylistItem_RealTagLogic
   {
     return this._owner.createDefaultPlaylistItem_RealTagLogic(error);   
   }

   //------------ 
    public createDefaultPlaylistItem_TVPassThroughLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemTVPassThroughLogic.am_coreservices.AE_PlaylistItem_TVPassThroughLogic
    {
      return this._owner.createDefaultPlaylistItem_TVPassThroughLogic(error);   
    }

   //------------ 
   public createDefaultPlaylistItem_TVTunnerLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemTVTunnerLogic.am_coreservices.AE_PlaylistItem_TVTunnerLogic
   {
     return this._owner.createDefaultPlaylistItem_TVTunnerLogic(error);   
   }

   //------------ 
    public createDefaultPlaylistItem_VideoLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemVideoLogic.am_coreservices.AE_PlaylistItem_VideoLogic
    {
      return this._owner.createDefaultPlaylistItem_VideoLogic(error);   
    }

    //------------ 
    public createDefaultPlaylistItem_VideoStreamLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemVideoStreamLogic.am_coreservices.AE_PlaylistItem_VideoStreamLogic
    {
      return this._owner.createDefaultPlaylistItem_VideoStreamLogic(error);   
    }

    //------------ 
    public createDefaultPlaylistItem_WebPageLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemWebPageLogic.am_coreservices.AE_PlaylistItem_WebPageLogic
    {
      return this._owner.createDefaultPlaylistItem_WebPageLogic(error);   
    }

    //------------ 
    public createDefaultMainPlaylistLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesMainPlaylistLogic.am_coreservices.AE_MainPlaylist_Logic
    {
      return this._owner.createDefaultMainPlaylistLogic(error);               
    }

    //------------ 
    public createDefaultTagManagerLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesTagManagerLogic.am_coreservices.AE_TagManager_Logic
    {
      return this._owner.createDefaultTagManagerLogic(error);               
    }

    //----------------------------------------
    //    create playlist item status
    //----------------------------------------
    //------------ 
    public createDefaultPlaylistItemStatus(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatus.am_coreservices.AE_PlaylistItem_Status
    {
      return this._owner.createDefaultPlaylistItemStatus(error);               
    }

    //------------ 
    public createDefaultPlaylistItemStatusDisable(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusDisable.am_coreservices.AE_PlaylistItem_StatusDisable
    {
      return this._owner.createDefaultPlaylistItemStatusDisable(error);               
    }

    //------------ 
    public createDefaultPlaylistItemStatusEnd(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusEnd.am_coreservices.AE_PlaylistItem_StatusEnd
    {
      return this._owner.createDefaultPlaylistItemStatusEnd(error);               
    }

    //------------ 
    public createDefaultPlaylistItemStatusError(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusError.am_coreservices.AE_PlaylistItem_StatusError
    {
      return this._owner.createDefaultPlaylistItemStatusError(error);               
    }

    public createDefaultPlaylistItemStatusPlay(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusPlay.am_coreservices.AE_PlaylistItem_StatusPlay
    {
      return this._owner.createDefaultPlaylistItemStatusPlay(error);               
    }

    public createDefaultPlaylistItemStatusPlay_List(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusPlay_List.am_coreservices.AE_PlaylistItem_StatusPlay_List
    {
      return this._owner.createDefaultPlaylistItemStatusPlay_List(error);               
    }

    public createDefaultPlaylistItemStatusPlay_Media(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusPlay_Media.am_coreservices.AE_PlaylistItem_StatusPlay_Media
    {
      return this._owner.createDefaultPlaylistItemStatusPlay_Media(error);               
    }

    public createDefaultPlaylistItemStatusRequestToAbort(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusRequestToAbort.am_coreservices.AE_PlaylistItem_StatusRequestToAbort
    {
      return this._owner.createDefaultPlaylistItemStatusRequestToAbort(error);               
    }

    public createDefaultPlaylistItemStatusRequestToAbort_List(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusRequestToAbort_List.am_coreservices.AE_PlaylistItem_StatusRequestToAbort_List
    {
      return this._owner.createDefaultPlaylistItemStatusRequestToAbort_List(error);               
    }

    public createDefaultPlaylistItemStatusRequestToAbort_Media(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusRequestToAbort_Media.am_coreservices.AE_PlaylistItem_StatusRequestToAbort_Media
    {
      return this._owner.createDefaultPlaylistItemStatusRequestToAbort_Media(error);               
    }

    public createDefaultPlaylistItemStatusRequestToAbortOrEndBeforePlay(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusRequestToAbortOrEndBeforePlay.am_coreservices.AE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay
    {
      return this._owner.createDefaultPlaylistItemStatusRequestToAbortOrEndBeforePlay(error);               
    }

    public createDefaultPlaylistItemStatusRequestToAbortOrEndBeforePlay_List(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusRequestToAbortOrEndBeforePlay_List.am_coreservices.AE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay_List
    {
      return this._owner.createDefaultPlaylistItemStatusRequestToAbortOrEndBeforePlay_List(error);               
    }

    public createDefaultPlaylistItemStatusRequestToAbortOrEndBeforePlay_Media(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusRequestToAbortOrEndBeforePlay_Media.am_coreservices.AE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay_Media
    {
      return this._owner.createDefaultPlaylistItemStatusRequestToAbortOrEndBeforePlay_Media(error);               
    }

    public createDefaultPlaylistItemStatusRequestToEnd(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusRequestToEnd.am_coreservices.AE_PlaylistItem_StatusRequestToEnd
    {
      return this._owner.createDefaultPlaylistItemStatusRequestToEnd(error);               
    }

    public createDefaultPlaylistItemStatusRequestToEnd_List(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusRequestToEnd_List.am_coreservices.AE_PlaylistItem_StatusRequestToEnd_List
    {
      return this._owner.createDefaultPlaylistItemStatusRequestToEnd_List(error);               
    }

    public createDefaultPlaylistItemStatusRequestToEnd_Media(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusRequestToEnd_Media.am_coreservices.AE_PlaylistItem_StatusRequestToEnd_Media
    {
      return this._owner.createDefaultPlaylistItemStatusRequestToEnd_Media(error);               
    }

    public createDefaultPlaylistItemStatusRequestToPlay(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusRequestToPlay.am_coreservices.AE_PlaylistItem_StatusRequestToPlay
    {
      return this._owner.createDefaultPlaylistItemStatusRequestToPlay(error);               
    }

    public createDefaultPlaylistItemStatusRequestToPlay_List(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusRequestToPlay_List.am_coreservices.AE_PlaylistItem_StatusRequestToPlay_List
    {
      return this._owner.createDefaultPlaylistItemStatusRequestToPlay_List(error);               
    }

    public createDefaultPlaylistItemStatusRequestToPlay_Media(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusRequestToPlay_Media.am_coreservices.AE_PlaylistItem_StatusRequestToPlay_Media
    {
      return this._owner.createDefaultPlaylistItemStatusRequestToPlay_Media(error);               
    }

    public createDefaultPlaylistItemStatusRequestToResume(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusRequestToResume.am_coreservices.AE_PlaylistItem_StatusRequestToResume
    {
      return this._owner.createDefaultPlaylistItemStatusRequestToResume(error);               
    }

    public createDefaultPlaylistItemStatusRequestToResume_List(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusRequestToResume_List.am_coreservices.AE_PlaylistItem_StatusRequestToResume_List
    {
      return this._owner.createDefaultPlaylistItemStatusRequestToResume_List(error);               
    }

    public createDefaultPlaylistItemStatusRequestToResume_Media(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusRequestToResume_Media.am_coreservices.AE_PlaylistItem_StatusRequestToResume_Media
    {
      return this._owner.createDefaultPlaylistItemStatusRequestToResume_Media(error);               
    }

    public createDefaultPlaylistItemStatusRequestToSuspend(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusRequestToSuspend.am_coreservices.AE_PlaylistItem_StatusRequestToSuspend
    {
      return this._owner.createDefaultPlaylistItemStatusRequestToSuspend(error);               
    }

    public createDefaultPlaylistItemStatusRequestToSuspend_List(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusRequestToSuspend_List.am_coreservices.AE_PlaylistItem_StatusRequestToSuspend_List
    {
      return this._owner.createDefaultPlaylistItemStatusRequestToSuspend_List(error);               
    }

    public createDefaultPlaylistItemStatusRequestToSuspend_Media(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusRequestToSuspend_Media.am_coreservices.AE_PlaylistItem_StatusRequestToSuspend_Media
    {
      return this._owner.createDefaultPlaylistItemStatusRequestToSuspend_Media(error);               
    }

    public createDefaultPlaylistItemStatusSelectNextChildToPlay(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusSelectNextChildToPlay.am_coreservices.AE_PlaylistItem_StatusSelectNextChildToPlay
    {
      return this._owner.createDefaultPlaylistItemStatusSelectNextChildToPlay(error);               
    }

    public createDefaultPlaylistItemStatusSuspended(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusSuspended.am_coreservices.AE_PlaylistItem_StatusSuspended
    {
      return this._owner.createDefaultPlaylistItemStatusSuspended(error);               
    }

    public createDefaultPlaylistItemTransition(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemTransition.am_coreservices.AE_PlaylistItem_Transition
    {
      return this._owner.createDefaultPlaylistItemTransition(error);               
    }


    //----------------------------------------
    //    html zone creators
    //----------------------------------------

    //------------ 
    public createDefaultHtmlZone(error : amGeneralError.am_general.A_Error)  : amRenderingServicesHtmlZone.am_renderingservices.AE_HtmlZone
    {
      return this._owner.createDefaultHtmlZone(error);               
    }

    //------------ 
    public createDefaultHtmlZonePool(error : amGeneralError.am_general.A_Error)  : amRenderingServicesHtmlZonePool.am_renderingservices.AE_HtmlZonePool
    {
      return this._owner.createDefaultHtmlZonePool(error);               
    }

    //----------------------------------
    //     render params
    //----------------------------------
    
    //------------ 
    public createDefaultRenderParamsAllParameters(error : amGeneralError.am_general.A_Error)  : amRenderParametersAllParameters.am_renderingservices.AE_RenderParams_AllParameters
    {
      return this._owner.createDefaultRenderParamsAllParameters(error);                     
    }

    //------------ 
    public createDefaultRenderParamsIdentification(error : amGeneralError.am_general.A_Error)  : amRenderParametersIdentification.am_renderingservices.AE_RenderParams_Identification
    {
      return this._owner.createDefaultRenderParamsIdentification(error);                     
    }
    
    //------------ aici ------
    public createDefaultRenderParamsItemPosAndSize(error : amGeneralError.am_general.A_Error)  : amRenderParametersItemPosAndSize.am_renderingservices.AE_RenderParams_ItemPosAndSize
    {
      return this._owner.createDefaultRenderParamsItemPosAndSize(error);                     
    }

    //------------ 
    public createDefaultRenderParamsContainerPosAndSize(error : amGeneralError.am_general.A_Error)  : amRenderParametersContainerPosAndSize.am_renderingservices.AE_RenderParams_ContainerPosAndSize
    {
      return this._owner.createDefaultRenderParamsContainerPosAndSize(error);                     
    }

    //------------ 
    public createDefaultRenderParamsDuration(error : amGeneralError.am_general.A_Error)  : amRenderParametersDuration.am_renderingservices.AE_RenderParams_Duration
    {
      return this._owner.createDefaultRenderParamsDuration(error);                           
    }

    //------------ 
    public createDefaultRenderParamsBackground(error : amGeneralError.am_general.A_Error)  : amRenderParametersBackground.am_renderingservices.AE_RenderParams_Background
    {
      return this._owner.createDefaultRenderParamsBackground(error);                           
    }

    //------------ 
    public createDefaultRenderParamsImage(error : amGeneralError.am_general.A_Error)  : amRenderParametersImage.am_renderingservices.AE_RenderParams_Image
    {
      return this._owner.createDefaultRenderParamsImage(error);                                 
    }

    //------------ 
    public createDefaultRenderParamsWebImage(error : amGeneralError.am_general.A_Error)  : amRenderParametersWebImage.am_renderingservices.AE_RenderParams_WebImage
    {
      return this._owner.createDefaultRenderParamsWebImage(error);                                 
    }

    //------------ 
    public createDefaultRenderParamsVideo(error : amGeneralError.am_general.A_Error)  : amRenderParametersVideo.am_renderingservices.AE_RenderParams_Video
    {
      return this._owner.createDefaultRenderParamsVideo(error);                                 
    }

    //------------ 
    public createDefaultRenderParamsVideoStream(error : amGeneralError.am_general.A_Error)  : amRenderParametersVideoStream.am_renderingservices.AE_RenderParams_VideoStream
    {
      return this._owner.createDefaultRenderParamsVideoStream(error);                                       
    }

    //------------ 
    public createDefaultRenderParamsAudio(error : amGeneralError.am_general.A_Error)  : amRenderParametersAudio.am_renderingservices.AE_RenderParams_Audio
    {
      return this._owner.createDefaultRenderParamsAudio(error);                                 
    }


    //------------ 
    public createDefaultRenderParamsWebPage(error : amGeneralError.am_general.A_Error)  : amRenderParametersWebPage.am_renderingservices.AE_RenderParams_WebPage
    {
      return this._owner.createDefaultRenderParamsWebPage(error);                                       
    }

    //------------ 
    public createDefaultRenderParamsHtmlTemplate(error : amGeneralError.am_general.A_Error)  : amRenderParametersHtmlTemplate.am_renderingservices.AE_RenderParams_HtmlTemplate
    {
      return this._owner.createDefaultRenderParamsHtmlTemplate(error);                                       
    }

    //------------ 
    public createDefaultRenderParamsFillRect(error : amGeneralError.am_general.A_Error)  : amRenderParametersFillRect.am_renderingservices.AE_RenderParams_FillRect
    {
      return this._owner.createDefaultRenderParamsFillRect(error);    
    }

    //----------------------------------
    //     control params
    //----------------------------------
        
    //------------ 
    public createDefaultControlPrepareParams(error : amGeneralError.am_general.A_Error)  : amControlPrepareParams.am_renderingservices.AE_ControlParams_Prepare
    {
      return this._owner.createDefaultControlPrepareParams(error);                     
    }

    //------------ 
    public createDefaultControlPrepareParamsPool(error : amGeneralError.am_general.A_Error)  : amControlPrepareParamsPool.am_renderingservices.AE_ControlParams_PreparePool
    {
      return this._owner.createDefaultControlPrepareParamsPool(error);                     
    }

    //------------ 
    public createDefaultControlRunParams(error : amGeneralError.am_general.A_Error)  : amControlRunParams.am_renderingservices.AE_ControlParams_Run
    {
      return this._owner.createDefaultControlRunParams(error);                     
    }

    //------------ 
    public createDefaultControlRunParamsPool(error : amGeneralError.am_general.A_Error)  : amControlRunParamsPool.am_renderingservices.AE_ControlParams_RunPool
    {
      return this._owner.createDefaultControlRunParamsPool(error);                     
    }

    //------------ 
    public createDefaultControlStopParams(error : amGeneralError.am_general.A_Error)  : amControlStopParams.am_renderingservices.AE_ControlParams_Stop
    {
      return this._owner.createDefaultControlStopParams(error);                     
    }

    //------------ 
    public createDefaultControlStopParamsPool(error : amGeneralError.am_general.A_Error)  : amControlStopParamsPool.am_renderingservices.AE_ControlParams_StopPool
    {
      return this._owner.createDefaultControlStopParamsPool(error);                     
    }

    //------------ 
    public createDefaultControlStatusParams(error : amGeneralError.am_general.A_Error)  : amControlStatusParams.am_renderingservices.AE_ControlParams_Status
    {
      return this._owner.createDefaultControlStatusParams(error);                     
    }

    //------------ 
    public createDefaultControlStatusParamsPool(error : amGeneralError.am_general.A_Error)  : amControlStatusParamsPool.am_renderingservices.AE_ControlParams_StatusPool
    {
      return this._owner.createDefaultControlStatusParamsPool(error);                     
    }
    
    //-----------------------------------------
    // create default Rendering Service Pools
    //-----------------------------------------

    //----------- create default Rendering Zone Pool
    public createDefaultRenderingZonePool(  error : amGeneralError.am_general.A_Error)  : amRenderingServicesRenderingZonePool.am_renderingservices.AE_RenderingZonePool
    {
      return this._owner.createDefaultRenderingZonePool(error)  ;                           
    }    


    //----------- create default Video Renderer Pool
    public createDefaultVideoRendererPool( error : amGeneralError.am_general.A_Error) : amRenderingServicesVideoRendererPool.am_renderingservices.AE_VideoRendererPool
    {
      return this._owner.createDefaultVideoRendererPool(error)  ;                           
    }

    //----------- create default VideoStream Renderer Pool
    public createDefaultVideoStreamRendererPool(  error : amGeneralError.am_general.A_Error) : amRenderingServicesVideoStreamRendererPool.am_renderingservices.AE_VideoStreamRendererPool
    {
      return this._owner.createDefaultVideoStreamRendererPool(error)  ;                           
    }

    //----------- create default Image Renderer Pool
    public createDefaultImageRendererPool( error : amGeneralError.am_general.A_Error) : amRenderingServicesImageRendererPool.am_renderingservices.AE_ImageRendererPool
    {
      return this._owner.createDefaultImageRendererPool(error)  ;                           
    }

    //----------- create default Html Renderer Pool
    public createDefaultHtmlRendererPool( error : amGeneralError.am_general.A_Error) : amRenderingServicesHtmlRendererPool.am_renderingservices.AE_HtmlRendererPool
    {
      return this._owner.createDefaultHtmlRendererPool(error)  ;                           
    }


    //----------- create default HtmlTemplate Renderer Pool
    public createDefaultHtmlTemplateRendererPool( error : amGeneralError.am_general.A_Error) : amRenderingServicesHtmlTemplateRendererPool.am_renderingservices.AE_HtmlTemplateRendererPool
    {
      return this._owner.createDefaultHtmlTemplateRendererPool(error)  ;                           
    }

    //----------- create default Flash Renderer Pool
    public createDefaultFlashRendererPool( error : amGeneralError.am_general.A_Error) : amRenderingServicesFlashRendererPool.am_renderingservices.AE_FlashRendererPool
    {
      return this._owner.createDefaultFlashRendererPool(error)  ;                                 
    }

    //----------- create default FillRect Renderer Pool
    public createDefaultFillRectRendererPool( error : amGeneralError.am_general.A_Error) : amRenderingServicesFillRectRendererPool.am_renderingservices.AE_FillRectRendererPool
    {
      return this._owner.createDefaultFillRectRendererPool(error)  ;                                 
    }


    //----------- create default ScreenSaver Renderer Pool
    public createDefaultScreenSaverRendererPool( error : amGeneralError.am_general.A_Error) : amRenderingServicesScreenSaverRendererPool.am_renderingservices.AE_ScreenSaverRendererPool
    {
      return this._owner.createDefaultScreenSaverRendererPool(error)  ;                                 
    }

    //----------- create default ScreenSaver Renderer Pool
    public createDefaultTvHdmiPassThroughSrvPool( error : amGeneralError.am_general.A_Error) : amRenderingServicesTvHdmiPassThroughSrvPool.am_renderingservices.AE_TvHdmiPassThroughSrvPool
    {
      return this._owner.createDefaultTvHdmiPassThroughSrvPool(error)  ;                                       
    }


    //----------- create default Background Renderer Pool
    public createDefaultBackgroundRendererPool( error : amGeneralError.am_general.A_Error) : amRenderingServicesBackgroundRendererPool.am_renderingservices.AE_BackgroundRendererPool
    {
      return this._owner.createDefaultBackgroundRendererPool(error)  ;                                 
    }

    //-------------------
    //  configs 
    //--------------------
    //------------ 
    public createDefaultPlaylistControllerConfig(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistControllerConfig.am_coreservices.AE_PlaylistControllerConfig
    {
      return this._owner.createDefaultPlaylisControllerConfig(error)  ;                                       
    }
        
    //------------ 
    public createDefaultRenderingControllerConfig(error : amGeneralError.am_general.A_Error)  : amCoreServicesRenderingControllerConfig.am_coreservices.AE_RenderingControllerConfig
    {
      return this._owner.createDefaultRenderingControllerConfig(error)  ;                                       
    }
    

  }
} 