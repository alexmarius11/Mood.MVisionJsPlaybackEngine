import amGeneral = require("../../../../../app/ts/abstract/am_general/i_interface/I_Interface");

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

export module am_renderingservices
{
  export interface I_RenderingZone_Config extends amGeneral.am_general.I_Interface
  {
    _name: string;    

    setZoneId(zoneId: number) : void;
    getZoneId() : number;

    setHtmlZoneId(htmlZoneId: number) : void;
    getHtmlZoneId() : number;

    setHtmlZone(htmlZone : amRenderingServicesHtmlZone.am_renderingservices.AE_HtmlZone);
    getHtmlZone() : amRenderingServicesHtmlZone.am_renderingservices.AE_HtmlZone;

    setImageRenderer(idx: number, imageRenderer : amRenderingServicesImageRenderer.am_renderingservices.A_ImageRenderer);
    getImageRenderer(idx: number) : amRenderingServicesImageRenderer.am_renderingservices.A_ImageRenderer;

    setVideoRenderer(idx: number, videoRenderer : amRenderingServicesVideoRenderer.am_renderingservices.A_VideoRenderer);
    getVideoRenderer(idx: number) : amRenderingServicesVideoRenderer.am_renderingservices.A_VideoRenderer;

    setVideoStreamRenderer(idx: number, videoStreamRenderer : amRenderingServicesVideoStreamRenderer.am_renderingservices.A_VideoStreamRenderer);
    getVideoStreamRenderer(idx: number) : amRenderingServicesVideoStreamRenderer.am_renderingservices.A_VideoStreamRenderer;    
    
    setHtmlPageRenderer(idx: number, htmlPageRenderer : amRenderingServicesHtmlRenderer.am_renderingservices.A_HtmlRenderer);
    getHtmlPageRenderer(idx: number) : amRenderingServicesHtmlRenderer.am_renderingservices.A_HtmlRenderer;

    setHtmlTemplateRenderer(idx: number, htmlTemplateRenderer : amRenderingServicesHtmlTemplateRenderer.am_renderingservices.A_HtmlTemplateRenderer);
    getHtmlTemplateRenderer(idx: number) : amRenderingServicesHtmlTemplateRenderer.am_renderingservices.A_HtmlTemplateRenderer;

    setFillRectRenderer(idx: number, fillRectRenderer : amRenderingServicesFillRectRenderer.am_renderingservices.A_FillRectRenderer);
    getFillRectRenderer(idx: number) : amRenderingServicesFillRectRenderer.am_renderingservices.A_FillRectRenderer;

    setFlashRenderer(idx: number, fillRectRenderer : amRenderingServicesFlashRenderer.am_renderingservices.A_FlashRenderer)
    getFlashRenderer(idx: number) : amRenderingServicesFlashRenderer.am_renderingservices.A_FlashRenderer

    setScreenSaverRenderer(idx: number, screenSaverRenderer : amRenderingServicesScreenSaverRenderer.am_renderingservices.A_ScreenSaverRenderer);
    getScreenSaverRenderer(idx: number) : amRenderingServicesScreenSaverRenderer.am_renderingservices.A_ScreenSaverRenderer;
    
    setTvHdmiPassThroughSrv(idx: number, tvHdmiPassThroughSrv : amRenderingServicesTvHdmiPassThroughSrv.am_renderingservices.A_TvHdmiPassThroughSrv);
    getTvHdmiPassThroughSrv(idx: number) : amRenderingServicesTvHdmiPassThroughSrv.am_renderingservices.A_TvHdmiPassThroughSrv;
    
    setScreenSaverConfig(aScreenSaverConfig : amPlaybackScreenSaverConfig.am_playback.AE_ScreenSaverConfig);
    getScreenSaverConfig() : amPlaybackScreenSaverConfig.am_playback.AE_ScreenSaverConfig;

  }
} 