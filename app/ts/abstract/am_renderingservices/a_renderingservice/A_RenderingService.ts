
import amGeneral = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");

import amIRenderingService        = require("../../../../../app/ts/abstract/am_renderingservices/a_renderingservice/I_RenderingService");
import amIRenderingServiceControl = require("../../../../../app/ts/abstract/am_renderingservices/a_renderingservice/I_RenderingService_Control");
import amIRenderingServiceConfig  = require("../../../../../app/ts/abstract/am_renderingservices/a_renderingservice/I_RenderingService_Config");

export module am_renderingservices
{
  export interface A_RenderingService extends amGeneral.am_general.A_Service
  {
    _iRenderingService         : amIRenderingService.am_renderingservices.I_RenderingService ;
    _iRenderingServiceControl : amIRenderingServiceControl.am_renderingservices.I_RenderingService_Control ;
    _iRenderingServiceConfig : amIRenderingServiceConfig.am_renderingservices.I_RenderingService_Config ;

    isFree() : boolean ;
    setIsFree(isFree: boolean) ;

    reset() : void ;

  }
} 