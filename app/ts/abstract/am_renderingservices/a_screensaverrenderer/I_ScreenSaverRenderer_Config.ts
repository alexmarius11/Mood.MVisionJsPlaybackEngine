import amGeneral = require("../../../../../app/ts/abstract/am_general/i_interface/I_Interface");

import amPlaybackScreenSaverConfig = require("../../../../../app/ts/abstract/am_playback/ae_screensaverconfig/AE_ScreenSaverConfig");

export module am_renderingservices
{
  export interface I_ScreenSaverRenderer_Config extends amGeneral.am_general.I_Interface
  {
    _name: string;    

    setScreenSaverConfig(aScreenSaverConfig : amPlaybackScreenSaverConfig.am_playback.AE_ScreenSaverConfig);
    getScreenSaverConfig() : amPlaybackScreenSaverConfig.am_playback.AE_ScreenSaverConfig;

    setHtmlZoneDiv(htmlZoneDiv : HTMLDivElement);
    getHtmlZoneDiv() : HTMLDivElement;

    setHtmlImage(htmlImage : HTMLImageElement);
    getHtmlImage() : HTMLImageElement;

    setHtmlVideo(htmlImage : HTMLVideoElement);
    getHtmlVideo() : HTMLVideoElement;

  }
} 