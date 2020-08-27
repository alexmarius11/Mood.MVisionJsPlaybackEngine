import amRenderingServices = require("../../../../../app/ts/abstract/am_renderingservices/a_renderingservice/A_RenderingService");

import amIFlashRenderer = require("../../../../../app/ts/abstract/am_renderingservices/a_flashrenderer/I_FlashRenderer");
import amIFlashRendererConfig = require("../../../../../app/ts/abstract/am_renderingservices/a_flashrenderer/I_FlashRenderer_Config");

export module am_renderingservices
{
  export interface A_FlashRenderer  extends amRenderingServices.am_renderingservices.A_RenderingService
  {
    _iFlashRenderer       : amIFlashRenderer.am_renderingservices.I_FlashRenderer ;
    _iFlashRendererConfig : amIFlashRendererConfig.am_renderingservices.I_FlashRenderer_Config ;
  }
} 