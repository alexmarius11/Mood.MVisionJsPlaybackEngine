import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amFlashRenderer = require("../../../../../app/ts/abstract/am_renderingservices/a_flashrenderer/A_FlashRenderer");
import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import amGeneralConfig  = require("../../../../../app/ts/abstract/am_general/ae_config/AE_Config");

import amServiceLocator    = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");
import amServiceContainer  = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");


export module am_renderingservices
{
  export interface AE_FlashRendererPool extends amGeneral.am_general.A_Entity
  {

    initPool( nbFlashRenders : number, error    : amGeneralError.am_general.A_Error) : number;
  
    addFlashRenderer(FlashRenderer : amFlashRenderer.am_renderingservices.A_FlashRenderer) : void ;

    reset() : void;
    copy(src : AE_FlashRendererPool) : number;

    getFlashRendererList() : Array<amFlashRenderer.am_renderingservices.A_FlashRenderer> ;
    
    getFreeFlashRenderer() : amFlashRenderer.am_renderingservices.A_FlashRenderer;
    releaseFlashRenderer(flashRenderer : amFlashRenderer.am_renderingservices.A_FlashRenderer) : boolean;
  }
} 