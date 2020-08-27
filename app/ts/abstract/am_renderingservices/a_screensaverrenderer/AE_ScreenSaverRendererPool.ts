import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amScreenSaverRenderer = require("../../../../../app/ts/abstract/am_renderingservices/a_screensaverrenderer/A_ScreenSaverRenderer");
import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import amGeneralConfig  = require("../../../../../app/ts/abstract/am_general/ae_config/AE_Config");

import amServiceLocator    = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");
import amServiceContainer  = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");

import amIScreenSaverRendererConfig = require("../../../../../app/ts/abstract/am_renderingservices/a_screensaverrenderer/I_ScreenSaverRenderer_Config");
import amPlaybackScreenSaverConfig = require("../../../../../app/ts/abstract/am_playback/ae_screensaverconfig/AE_ScreenSaverConfig");

export module am_renderingservices
{
  export interface AE_ScreenSaverRendererPool extends amGeneral.am_general.A_Entity
  {

    initPool( nbScreenSaverRenders : number, error    : amGeneralError.am_general.A_Error) : number;
  
    setScreenSaverConfig(aScreenSaverConfig : amPlaybackScreenSaverConfig.am_playback.AE_ScreenSaverConfig);
    getScreenSaverConfig() : amPlaybackScreenSaverConfig.am_playback.AE_ScreenSaverConfig;
    
    addScreenSaverRenderer(ScreenSaverRenderer : amScreenSaverRenderer.am_renderingservices.A_ScreenSaverRenderer) : void ;

    reset() : void;
    copy(src : AE_ScreenSaverRendererPool) : number;

    getScreenSaverRendererList() : Array<amScreenSaverRenderer.am_renderingservices.A_ScreenSaverRenderer> ;
    
    getFreeScreenSaverRenderer() : amScreenSaverRenderer.am_renderingservices.A_ScreenSaverRenderer;
    releaseScreenSaverRenderer(screenSaverRenderer : amScreenSaverRenderer.am_renderingservices.A_ScreenSaverRenderer) : boolean;
  }
} 