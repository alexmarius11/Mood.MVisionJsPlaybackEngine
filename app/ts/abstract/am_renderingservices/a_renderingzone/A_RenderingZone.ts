
import amRenderingServices = require("../../../../../app/ts/abstract/am_renderingservices/a_renderingservice/A_RenderingService");

import amIRenderingZone       = require("../../../../../app/ts/abstract/am_renderingservices/a_renderingzone/I_RenderingZone");
import amIRenderingZoneConfig = require("../../../../../app/ts/abstract/am_renderingservices/a_renderingzone/I_RenderingZone_Config");

export module am_renderingservices
{
  export interface A_RenderingZone extends amRenderingServices.am_renderingservices.A_RenderingService
  {
    _iRenderingZone       : amIRenderingZone.am_renderingservices.I_RenderingZone ;
    _iRenderingZoneConfig : amIRenderingZoneConfig.am_renderingservices.I_RenderingZone_Config ;
  }
} 