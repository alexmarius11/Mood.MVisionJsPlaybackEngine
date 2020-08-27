import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amVideoRenderer = require("../../../../../app/ts/abstract/am_renderingservices/a_videorenderer/A_VideoRenderer");
import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import amGeneralConfig  = require("../../../../../app/ts/abstract/am_general/ae_config/AE_Config");

import amServiceLocator    = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");
import amServiceContainer  = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");


export module am_renderingservices
{
  export interface AE_VideoRendererPool extends amGeneral.am_general.A_Entity
  {

    initPool( nbVideoRenders : number, error    : amGeneralError.am_general.A_Error) : number;
  
    addVideoRenderer(VideoRenderer : amVideoRenderer.am_renderingservices.A_VideoRenderer) : void ;

    reset() : void;
    copy(src : AE_VideoRendererPool) : number;

    getVideoRendererList() : Array<amVideoRenderer.am_renderingservices.A_VideoRenderer> ;
    
    getFreeVideoRenderer() : amVideoRenderer.am_renderingservices.A_VideoRenderer;
    releaseVideoRenderer(videoRenderer : amVideoRenderer.am_renderingservices.A_VideoRenderer) : boolean;
  }
} 