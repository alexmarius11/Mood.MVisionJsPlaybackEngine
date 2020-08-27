
import amIScreenSaverRendererConfig = require("../../../../../app/ts/abstract/am_renderingservices/a_screensaverrenderer/I_ScreenSaverRenderer_Config");

import amPlaybackScreenSaverConfig = require("../../../../../app/ts/abstract/am_playback/ae_screensaverconfig/AE_ScreenSaverConfig");

import rmRenderingServices = require("../../../../../app/ts/reusable/rm_renderingservices/r_screensaverrenderer/R_ScreenSaverRenderer");
                                                     
                                                     

export module rm_renderingservices
{
  export class IImpl_ScreenSaverRenderer_Config implements amIScreenSaverRendererConfig.am_renderingservices.I_ScreenSaverRenderer_Config
  {
    _name: string;    

    //----------- owner
    _owner: rmRenderingServices.rm_renderingservices.R_ScreenSaverRenderer;

    //----------- constructor 
    constructor(owner: rmRenderingServices.rm_renderingservices.R_ScreenSaverRenderer)  
    {
      this._owner = owner;  
    }

    
    //---------------------------------
    public setHtmlZoneDiv(htmlZoneDiv : HTMLDivElement)
    {
      return this._owner.setHtmlZoneDiv(htmlZoneDiv);
    }

    //-------------------------------
    public getHtmlZoneDiv() : HTMLDivElement
    {
      return this._owner.getHtmlZoneDiv();
    }


    //-------------------------------
    public setHtmlImage(htmlImage : HTMLImageElement)
    {
      return this._owner.setHtmlImage(htmlImage);
    }

    //------------------------------
    public getHtmlImage() : HTMLImageElement
    {
      return this._owner.getHtmlImage();
    }


    //-------------------------------
    public setHtmlVideo(htmlVideo : HTMLVideoElement)
    {
      return this._owner.setHtmlVideo(htmlVideo);
    }

    //------------------------------
    public getHtmlVideo() : HTMLVideoElement
    {
      return this._owner.getHtmlVideo();
    }


    //----------------------------------
    public setScreenSaverConfig(aScreenSaverConfig : amPlaybackScreenSaverConfig.am_playback.AE_ScreenSaverConfig)
    {
      return this._owner.setScreenSaverConfig(aScreenSaverConfig);
    }

    //-----------------------------
    public getScreenSaverConfig() : amPlaybackScreenSaverConfig.am_playback.AE_ScreenSaverConfig
    {
      return this._owner.getScreenSaverConfig();
    }
  }
} 