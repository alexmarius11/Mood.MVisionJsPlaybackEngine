import amRenderingServices = require("../../../../../app/ts/abstract/am_renderingservices/a_renderingservice/A_RenderingService");

import amIVideoStreamRenderer = require("../../../../../app/ts/abstract/am_renderingservices/a_videostreamrenderer/I_VideoStreamRenderer");
import amIVideoStreamRendererConfig = require("../../../../../app/ts/abstract/am_renderingservices/a_videostreamrenderer/I_VideoStreamRenderer_Config");

export module am_renderingservices
{
  export interface A_VideoStreamRenderer extends amRenderingServices.am_renderingservices.A_RenderingService
  {
    _iVideoStreamRenderer : amIVideoStreamRenderer.am_renderingservices.I_VideoStreamRenderer ;
    _iVideoStreamRendererConfig : amIVideoStreamRendererConfig.am_renderingservices.I_VideoStreamRenderer_Config ;
  }
} 