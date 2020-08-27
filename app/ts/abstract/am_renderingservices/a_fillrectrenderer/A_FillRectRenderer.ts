import amRenderingServices = require("../../../../../app/ts/abstract/am_renderingservices/a_renderingservice/A_RenderingService");

import amIFillRectRenderer       = require("../../../../../app/ts/abstract/am_renderingservices/a_fillrectrenderer/I_FillRectRenderer");
import amIFillRectRendererConfig = require("../../../../../app/ts/abstract/am_renderingservices/a_fillrectrenderer/I_FillRectRenderer_Config");

export module am_renderingservices
{
  export interface A_FillRectRenderer extends amRenderingServices.am_renderingservices.A_RenderingService
  {
    _iFillRectRenderer       : amIFillRectRenderer.am_renderingservices.I_FillRectRenderer ;
    _iFillRectRendererConfig : amIFillRectRendererConfig.am_renderingservices.I_FillRectRenderer_Config ;
  }
} 