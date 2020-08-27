import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amVideoStreamRenderer = require("../../../../../app/ts/abstract/am_renderingservices/a_videostreamrenderer/A_VideoStreamRenderer");
import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import amGeneralConfig  = require("../../../../../app/ts/abstract/am_general/ae_config/AE_Config");

import amServiceLocator    = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");
import amServiceContainer  = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");


export module am_renderingservices
{
  export interface AE_VideoStreamRendererPool extends amGeneral.am_general.A_Entity
  {

    initPool( nbVideoStreamRenderers : number, error    : amGeneralError.am_general.A_Error) : number;
  
    addVideoStreamRenderer(videoStreamRenderer : amVideoStreamRenderer.am_renderingservices.A_VideoStreamRenderer) : void ;

    reset() : void;
    copy(src : AE_VideoStreamRendererPool) : number;

    getVideoStreamRendererList() : Array<amVideoStreamRenderer.am_renderingservices.A_VideoStreamRenderer> ;
    
    getFreeVideoStreamRenderer() : amVideoStreamRenderer.am_renderingservices.A_VideoStreamRenderer;
    releaseVideoStreamRenderer(videoStreamRenderer : amVideoStreamRenderer.am_renderingservices.A_VideoStreamRenderer) : boolean;
  }
} 