import amRenderingServices = require("../../../../../app/ts/abstract/am_renderingservices/a_renderingservice/A_RenderingService");

import amIBackgroundRenderer = require("../../../../../app/ts/abstract/am_renderingservices/a_backgroundrenderer/I_BackgroundRenderer");
import amIBackgroundRendererConfig = require("../../../../../app/ts/abstract/am_renderingservices/a_backgroundrenderer/I_BackgroundRenderer_Config");
import amIBackgroundRendererControl = require("../../../../../app/ts/abstract/am_renderingservices/a_backgroundrenderer/I_BackgroundRenderer_Control");

export module am_renderingservices
{
  export interface A_BackgroundRenderer extends amRenderingServices.am_renderingservices.A_RenderingService
  {
    _iBackgroundRenderer        : amIBackgroundRenderer.am_renderingservices.I_BackgroundRenderer ;
    _iBackgroundRendererConfig  : amIBackgroundRendererConfig.am_renderingservices.I_BackgroundRenderer_Config ;
    //_iBackgroundRendererControl : amIBackgroundRendererConfig.am_renderingservices.I_BackgroundRenderer_Control ;
  }
} 