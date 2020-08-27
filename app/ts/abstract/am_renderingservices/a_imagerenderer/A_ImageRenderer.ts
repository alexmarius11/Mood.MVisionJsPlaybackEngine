import amRenderingServices = require("../../../../../app/ts/abstract/am_renderingservices/a_renderingservice/A_RenderingService");

import amIImageRenderer = require("../../../../../app/ts/abstract/am_renderingservices/a_imagerenderer/I_ImageRenderer");
import amIImageRendererConfig = require("../../../../../app/ts/abstract/am_renderingservices/a_imagerenderer/I_ImageRenderer_Config");

export module am_renderingservices
{
  export interface A_ImageRenderer extends amRenderingServices.am_renderingservices.A_RenderingService
  {
    _iImageRenderer       : amIImageRenderer.am_renderingservices.I_ImageRenderer ;
    _iImageRendererConfig : amIImageRendererConfig.am_renderingservices.I_ImageRenderer_Config ;
  }
} 