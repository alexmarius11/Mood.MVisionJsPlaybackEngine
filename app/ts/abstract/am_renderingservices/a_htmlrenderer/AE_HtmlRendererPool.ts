import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amHtmlRenderer = require("../../../../../app/ts/abstract/am_renderingservices/a_htmlrenderer/A_HtmlRenderer");
import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import amGeneralConfig  = require("../../../../../app/ts/abstract/am_general/ae_config/AE_Config");

import amServiceLocator    = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");
import amServiceContainer  = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");


export module am_renderingservices
{
  export interface AE_HtmlRendererPool extends amGeneral.am_general.A_Entity
  {

    initPool( nbHtmlRenders : number, error    : amGeneralError.am_general.A_Error) : number;
  
    addHtmlRenderer(HtmlRenderer : amHtmlRenderer.am_renderingservices.A_HtmlRenderer) : void ;

    reset() : void;
    copy(src : AE_HtmlRendererPool) : number;

    getHtmlRendererList() : Array<amHtmlRenderer.am_renderingservices.A_HtmlRenderer> ;
    
    getFreeHtmlRenderer() : amHtmlRenderer.am_renderingservices.A_HtmlRenderer;
    releaseHtmlRenderer(htmlRenderer : amHtmlRenderer.am_renderingservices.A_HtmlRenderer) : boolean;
  }
} 