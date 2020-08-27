
import amIRenderingZoneConfig = require("../../../../../app/ts/abstract/am_renderingservices/a_renderingzone/I_RenderingZone_Config");

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

import amRenderingServicesHtmlZone             = require("../../../../../app/ts/abstract/am_renderingservices/ae_htmlzone/AE_HtmlZone");
import amRenderingServicesHtmlZonePool         = require("../../../../../app/ts/abstract/am_renderingservices/ae_htmlzone/AE_HtmlZonePool");

import amPlaybackScreenSaverConfig = require("../../../../../app/ts/abstract/am_playback/ae_screensaverconfig/AE_ScreenSaverConfig");

import rmRenderingServices = require("../../../../../app/ts/reusable/rm_renderingservices/r_renderingzone/R_RenderingZone");
                                                     
                                                     

export module rm_renderingservices
{
  export class IImpl_RenderingZone_Config implements amIRenderingZoneConfig.am_renderingservices.I_RenderingZone_Config
  {
    _name: string;    

    //----------- owner
    _owner: rmRenderingServices.rm_renderingservices.R_RenderingZone;

    //----------- constructor 
    constructor(owner: rmRenderingServices.rm_renderingservices.R_RenderingZone)  
    {
      this._owner = owner;  
    }

    //-----------------------------------------
    public setZoneId(zoneId: number) : void
    {
      return this._owner.setZoneId(zoneId);
    }

    //-----------------------------------------
    public getZoneId() : number
    {
      return this._owner.getZoneId();
    }

    //-----------------------------------------
    public setHtmlZoneId(htmlZoneId: number) : void
    {
      return this._owner.setHtmlZoneId(htmlZoneId);
    }

    //-----------------------------------------
    public getHtmlZoneId() : number
    {
      return this._owner.getHtmlZoneId();
    }

    //---------------------------------
    public setHtmlZone(htmlZone : amRenderingServicesHtmlZone.am_renderingservices.AE_HtmlZone)
    {
      return this._owner.setHtmlZone(htmlZone);
    }

    //---------------------------------
    public getHtmlZone() : amRenderingServicesHtmlZone.am_renderingservices.AE_HtmlZone
    {
      return this._owner.getHtmlZone();
    }


    //---------------------------------
    public setImageRenderer(idx: number, imageRenderer : amRenderingServicesImageRenderer.am_renderingservices.A_ImageRenderer)
    {
      return this._owner.setImageRenderer(idx, imageRenderer);
    }

    //---------------------------------
    public getImageRenderer(idx: number) : amRenderingServicesImageRenderer.am_renderingservices.A_ImageRenderer
    {
      return this._owner.getImageRenderer(idx);
    }


    //---------------------------------
    public setVideoRenderer(idx: number, videoRenderer : amRenderingServicesVideoRenderer.am_renderingservices.A_VideoRenderer)
    {
      return this._owner.setVideoRenderer(idx, videoRenderer);
    }

    //---------------------------------
    public getVideoRenderer(idx: number) : amRenderingServicesVideoRenderer.am_renderingservices.A_VideoRenderer
    {
      return this._owner.getVideoRenderer(idx);
    }


    //---------------------------------
    public setVideoStreamRenderer(idx: number, videoStreamRenderer : amRenderingServicesVideoStreamRenderer.am_renderingservices.A_VideoStreamRenderer)
    {
      return this._owner.setVideoStreamRenderer(idx, videoStreamRenderer);
    }

    //---------------------------------
    public getVideoStreamRenderer(idx: number) : amRenderingServicesVideoStreamRenderer.am_renderingservices.A_VideoStreamRenderer
    {
      return this._owner.getVideoStreamRenderer(idx);
    }


    //---------------------------------
    public setHtmlPageRenderer(idx: number, htmlPageRenderer : amRenderingServicesHtmlRenderer.am_renderingservices.A_HtmlRenderer)
    {
      return this._owner.setHtmlPageRenderer(idx, htmlPageRenderer);
    }

    //---------------------------------
    public getHtmlPageRenderer(idx: number) : amRenderingServicesHtmlRenderer.am_renderingservices.A_HtmlRenderer
    {
      return this._owner.getHtmlPageRenderer(idx);
    }


    //---------------------------------
    public setHtmlTemplateRenderer(idx: number, htmlTemplateRenderer : amRenderingServicesHtmlTemplateRenderer.am_renderingservices.A_HtmlTemplateRenderer)
    {
      return this._owner.setHtmlTemplateRenderer(idx, htmlTemplateRenderer);
    }

    //---------------------------------
    public getHtmlTemplateRenderer(idx: number) : amRenderingServicesHtmlTemplateRenderer.am_renderingservices.A_HtmlTemplateRenderer
    {
      return this._owner.getHtmlTemplateRenderer(idx);
    }


    //---------------------------------
    public setFillRectRenderer(idx: number, fillRectRenderer : amRenderingServicesFillRectRenderer.am_renderingservices.A_FillRectRenderer)
    {
      return this._owner.setFillRectRenderer(idx, fillRectRenderer);
    }

    //---------------------------------
    public getFillRectRenderer(idx: number) : amRenderingServicesFillRectRenderer.am_renderingservices.A_FillRectRenderer
    {
      return this._owner.getFillRectRenderer(idx);
    }


     //---------------------------------
     public setFlashRenderer(idx: number, fillRectRenderer : amRenderingServicesFlashRenderer.am_renderingservices.A_FlashRenderer)
     {
       return this._owner.setFlashRenderer(idx, fillRectRenderer);
     }
 
     //---------------------------------
     public getFlashRenderer(idx: number) : amRenderingServicesFlashRenderer.am_renderingservices.A_FlashRenderer
     {
       return this._owner.getFlashRenderer(idx);    
     }
    

     //---------------------------------
     public setScreenSaverRenderer(idx: number, screenSaverRenderer : amRenderingServicesScreenSaverRenderer.am_renderingservices.A_ScreenSaverRenderer)
     {
       return this._owner.setScreenSaverRenderer(idx, screenSaverRenderer);
     }
 
     //---------------------------------
     public getScreenSaverRenderer(idx: number) : amRenderingServicesScreenSaverRenderer.am_renderingservices.A_ScreenSaverRenderer
     {
       return this._owner.getScreenSaverRenderer(idx);    
     }


     //---------------------------------
     public setTvHdmiPassThroughSrv(idx: number, tvHdmiPassThroughSrv : amRenderingServicesTvHdmiPassThroughSrv.am_renderingservices.A_TvHdmiPassThroughSrv)
     {
       return this._owner.setTvHdmiPassThroughSrv(idx, tvHdmiPassThroughSrv);
     }
 
     //---------------------------------
     public getTvHdmiPassThroughSrv(idx: number) : amRenderingServicesTvHdmiPassThroughSrv.am_renderingservices.A_TvHdmiPassThroughSrv
     {
      return this._owner.getTvHdmiPassThroughSrv(idx);    
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