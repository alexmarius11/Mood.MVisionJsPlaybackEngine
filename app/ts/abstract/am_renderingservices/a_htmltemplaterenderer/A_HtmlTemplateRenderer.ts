import amRenderingServices = require("../../../../../app/ts/abstract/am_renderingservices/a_renderingservice/A_RenderingService");

import amIHtmlTemplateRenderer       = require("../../../../../app/ts/abstract/am_renderingservices/a_htmltemplaterenderer/I_HtmlTemplateRenderer");
import amIHtmlTemplateRendererConfig = require("../../../../../app/ts/abstract/am_renderingservices/a_htmltemplaterenderer/I_HtmlTemplateRenderer_Config");

export module am_renderingservices
{
  export interface A_HtmlTemplateRenderer extends amRenderingServices.am_renderingservices.A_RenderingService
  {
    _iHtmlTemplateRenderer       : amIHtmlTemplateRenderer.am_renderingservices.I_HtmlTemplateRenderer ;
    _iHtmlTemplateRendererConfig : amIHtmlTemplateRendererConfig.am_renderingservices.I_HtmlTemplateRenderer_Config ;
  }
} 