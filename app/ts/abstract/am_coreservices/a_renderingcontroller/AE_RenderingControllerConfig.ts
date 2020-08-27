import amConfig = require("../../../../../app/ts/abstract/am_general/ae_config/AE_Config");
import amPlaybackScreenSaverConfig = require("../../../../../app/ts/abstract/am_playback/ae_screensaverconfig/AE_ScreenSaverConfig");

export module am_coreservices
{
  export interface AE_RenderingControllerConfig extends amConfig.am_general.AE_Config
  {
    getInitialPoolNb_OfRenderingZones() : number;
    setInitialPoolNb_OfRenderingZones(nbPrepareParams : number) : void;

    getInitialPoolNb_OfImageRenderers() : number;
    setInitialPoolNb_OfImageRenderers(nbImageRenderers : number) : void;

    getInitialPoolNb_OfVideoRenderers() : number;
    setInitialPoolNb_OfVideoRenderers(nbImageRenderers : number) : void;

    getInitialPoolNb_OfVideoStreamRenderers() : number;
    setInitialPoolNb_OfVideoStreamRenderers(nbImageRenderers : number) : void;

    getInitialPoolNb_OfHtmlRenderers() : number;
    setInitialPoolNb_OfHtmlRenderers(nbHtmlRenderers : number) : void;

    getInitialPoolNb_OfHtmlTemplateRenderers() : number;
    setInitialPoolNb_OfHtmlTemplateRenderers(nbHtmlTemplateRenderers : number) : void;

    getInitialPoolNb_OfScreenSaverRenderers() : number;
    setInitialPoolNb_OfScreenSaverRenderers(nbScreenSaverRenderers : number) : void;

    getInitialPoolNb_OfFillRectRenderers() : number;
    setInitialPoolNb_OfFillRectRenderers(nbFillRectRenderers : number) : void;

    getInitialPoolNb_OfBackgroundRenderers() : number;
    setInitialPoolNb_OfBackgroundRenderers(nbBackgroundRenderers : number) : void;
    
    getInitialPoolNb_OfFlashRenderers() : number;
    setInitialPoolNb_OfFlashRenderers(nbBackgroundRenderers : number) : void;
 
    getInitialPoolNb_OfTvHdmiPassThroughSrv() : number;
    setInitialPoolNb_OfTvHdmiPassThroughSrv(nbTvHdmiPassThroughSrv : number) : void;
    
    //---------
    getInitialPoolNb_OfHtmlZones() : number;
    setInitialPoolNb_OfHtmlZones(nbPrepareParams : number) : void;

    //---------
    getRootDivId() : string;
    setRootDivId(rootDivId : string) : void;
 
    //---------
    setScreenSaverConfig(aScreenSaverConfig: amPlaybackScreenSaverConfig.am_playback.AE_ScreenSaverConfig);
    getScreenSaverConfig() : amPlaybackScreenSaverConfig.am_playback.AE_ScreenSaverConfig;

  }
} 