import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amFillRectRenderer = require("../../../../../app/ts/abstract/am_renderingservices/a_fillrectrenderer/A_FillRectRenderer");
import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import amGeneralConfig  = require("../../../../../app/ts/abstract/am_general/ae_config/AE_Config");

import amServiceLocator    = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");
import amServiceContainer  = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");


export module am_renderingservices
{
  export interface AE_FillRectRendererPool extends amGeneral.am_general.A_Entity
  {

    initPool( nbFillRectRenders : number, error    : amGeneralError.am_general.A_Error) : number;
  
    addFillRectRenderer(FillRectRenderer : amFillRectRenderer.am_renderingservices.A_FillRectRenderer) : void ;

    reset() : void;
    copy(src : AE_FillRectRendererPool) : number;

    getFillRectRendererList() : Array<amFillRectRenderer.am_renderingservices.A_FillRectRenderer> ;
    
    getFreeFillRectRenderer() : amFillRectRenderer.am_renderingservices.A_FillRectRenderer;
    releaseFillRectRenderer(fillRectRenderer : amFillRectRenderer.am_renderingservices.A_FillRectRenderer) : boolean;
  }
} 