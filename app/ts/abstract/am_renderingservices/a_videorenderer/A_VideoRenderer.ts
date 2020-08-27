import amRenderingServices = require("../../../../../app/ts/abstract/am_renderingservices/a_renderingservice/A_RenderingService");

import amIVideoRenderer       = require("../../../../../app/ts/abstract/am_renderingservices/a_videorenderer/I_VideoRenderer");
import amIVideoRendererConfig = require("../../../../../app/ts/abstract/am_renderingservices/a_videorenderer/I_VideoRenderer_Config");

export module am_renderingservices
{
  export interface A_VideoRenderer extends amRenderingServices.am_renderingservices.A_RenderingService
  {
    _iVideoRenderer       : amIVideoRenderer.am_renderingservices.I_VideoRenderer ;
    _iVideoRendererConfig : amIVideoRendererConfig.am_renderingservices.I_VideoRenderer_Config ;
  }
} 