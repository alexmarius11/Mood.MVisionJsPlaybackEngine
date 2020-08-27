import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amImageRenderer = require("../../../../../app/ts/abstract/am_renderingservices/a_imagerenderer/A_ImageRenderer");
import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import amGeneralConfig  = require("../../../../../app/ts/abstract/am_general/ae_config/AE_Config");

import amServiceLocator    = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");
import amServiceContainer  = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");


export module am_renderingservices
{
  export interface AE_ImageRendererPool extends amGeneral.am_general.A_Entity
  {

    initPool( nbImageRenders : number, error    : amGeneralError.am_general.A_Error) : number;
  
    addImageRenderer(ImageRenderer : amImageRenderer.am_renderingservices.A_ImageRenderer) : void ;

    reset() : void;
    copy(src : AE_ImageRendererPool) : number;

    getImageRendererList() : Array<amImageRenderer.am_renderingservices.A_ImageRenderer> ;
    
    getFreeImageRenderer() : amImageRenderer.am_renderingservices.A_ImageRenderer;
    releaseImageRenderer(imageRender : amImageRenderer.am_renderingservices.A_ImageRenderer) : boolean;
  }
} 