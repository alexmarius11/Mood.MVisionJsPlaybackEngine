import amRenderingServices = require("../../../../../app/ts/abstract/am_renderingservices/a_renderingservice/A_RenderingService");

import amIScreenSaverRenderer = require("../../../../../app/ts/abstract/am_renderingservices/a_screensaverrenderer/I_ScreenSaverRenderer");
import amIScreenSaverRendererConfig = require("../../../../../app/ts/abstract/am_renderingservices/a_screensaverrenderer/I_ScreenSaverRenderer_Config");

export module am_renderingservices
{
  export interface A_ScreenSaverRenderer extends amRenderingServices.am_renderingservices.A_RenderingService
  {
    _iScreenSaverRenderer       : amIScreenSaverRenderer.am_renderingservices.I_ScreenSaverRenderer ;
    _iScreenSaverRendererConfig : amIScreenSaverRendererConfig.am_renderingservices.I_ScreenSaverRenderer_Config ;
  }
} 