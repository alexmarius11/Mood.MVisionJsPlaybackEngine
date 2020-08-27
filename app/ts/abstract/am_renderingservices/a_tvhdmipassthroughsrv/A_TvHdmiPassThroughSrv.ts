import amRenderingServices = require("../../../../../app/ts/abstract/am_renderingservices/a_renderingservice/A_RenderingService");

import amRenderingServices2 = require("../../../../../app/ts/abstract/am_renderingservices/a_tvhdmipassthroughsrv/I_TvHdmiPassThroughSrv");

export module am_renderingservices
{
  export interface A_TvHdmiPassThroughSrv extends amRenderingServices.am_renderingservices.A_RenderingService
  {
    _iTvHdmiPassThroughSrv : amRenderingServices2.am_renderingservices.I_TvHdmiPassThroughSrv ;
  }
} 