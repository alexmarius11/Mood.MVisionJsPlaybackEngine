import amGeneral = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");

import amIRenderingController        = require("../../../../../app/ts/abstract/am_coreservices/a_renderingcontroller/I_RenderingController");
import amIRenderingControllerConfig  = require("../../../../../app/ts/abstract/am_coreservices/a_renderingcontroller/I_RenderingController_Config");
import amIRenderingControllerControl = require("../../../../../app/ts/abstract/am_coreservices/a_renderingcontroller/I_RenderingController_Control");

export module am_coreservices
{
  export interface A_RenderingController extends amGeneral.am_general.A_Service 
  {
    _iRenderingController        : amIRenderingController.am_coreservices.I_RenderingController ;
    _iRenderingControllerConfig  : amIRenderingControllerConfig.am_coreservices.I_RenderingController_Config ;
    _iRenderingControllerControl : amIRenderingControllerControl.am_coreservices.I_RenderingController_Control ;
  }
} 