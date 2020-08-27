import amRenderingServices = require("../../../../../app/ts/abstract/am_renderingservices/a_renderingservice/A_RenderingService");

import amIHtmlRenderer       = require("../../../../../app/ts/abstract/am_renderingservices/a_htmlrenderer/I_HtmlRenderer");
import amIHtmlRendererConfig = require("../../../../../app/ts/abstract/am_renderingservices/a_htmlrenderer/I_HtmlRenderer_Config");

export module am_renderingservices
{
  export interface A_HtmlRenderer extends amRenderingServices.am_renderingservices.A_RenderingService
  {
    _iHtmlRenderer       : amIHtmlRenderer.am_renderingservices.I_HtmlRenderer ;
    _iHtmlRendererConfig : amIHtmlRendererConfig.am_renderingservices.I_HtmlRenderer_Config ;
  }
} 