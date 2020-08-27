import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amRenderingZone = require("../../../../../app/ts/abstract/am_renderingservices/a_renderingzone/A_RenderingZone");
import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import amGeneralConfig  = require("../../../../../app/ts/abstract/am_general/ae_config/AE_Config");

import amServiceLocator    = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");
import amServiceContainer  = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amPlaybackScreenSaverConfig = require("../../../../../app/ts/abstract/am_playback/ae_screensaverconfig/AE_ScreenSaverConfig");

export module am_renderingservices
{
  export interface AE_RenderingZonePool extends amGeneral.am_general.A_Entity
  {

    initPool( nbPrepareParams : number, error    : amGeneralError.am_general.A_Error) : number;
  
    addRenderingZone(RenderingZone : amRenderingZone.am_renderingservices.A_RenderingZone) : void ;

    reset() : void;
    copy(src : AE_RenderingZonePool) : number;

    getRenderingZoneList() : Array<amRenderingZone.am_renderingservices.A_RenderingZone> ;
    
    getRenderingZoneByZoneId(zoneId: number) : amRenderingZone.am_renderingservices.A_RenderingZone;

    getFreeRenderingZone() : amRenderingZone.am_renderingservices.A_RenderingZone;
    releaseRenderingZone(renderingZone : amRenderingZone.am_renderingservices.A_RenderingZone) : boolean;

    //---------
    setScreenSaverConfig(aScreenSaverConfig: amPlaybackScreenSaverConfig.am_playback.AE_ScreenSaverConfig);
    getScreenSaverConfig() : amPlaybackScreenSaverConfig.am_playback.AE_ScreenSaverConfig;

  }
} 