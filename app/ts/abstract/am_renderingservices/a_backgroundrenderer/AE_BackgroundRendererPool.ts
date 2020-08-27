import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amBackgroundRenderer = require("../../../../../app/ts/abstract/am_renderingservices/a_backgroundrenderer/A_BackgroundRenderer");
import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import amGeneralConfig  = require("../../../../../app/ts/abstract/am_general/ae_config/AE_Config");

import amServiceLocator    = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");
import amServiceContainer  = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");


export module am_renderingservices
{
  export interface AE_BackgroundRendererPool extends amGeneral.am_general.A_Entity
  {

    initPool( nbBackgroundRenders : number, error    : amGeneralError.am_general.A_Error) : number;
  
    addBackgroundRenderer(BackgroundRenderer : amBackgroundRenderer.am_renderingservices.A_BackgroundRenderer) : void ;

    reset() : void;
    copy(src : AE_BackgroundRendererPool) : number;

    getBackgroundRendererList() : Array<amBackgroundRenderer.am_renderingservices.A_BackgroundRenderer> ;
    
    getFreeBackgroundRenderer() : amBackgroundRenderer.am_renderingservices.A_BackgroundRenderer;
    releaseBackgroundRenderer(backgroundRenderer : amBackgroundRenderer.am_renderingservices.A_BackgroundRenderer) : boolean;
  }
} 