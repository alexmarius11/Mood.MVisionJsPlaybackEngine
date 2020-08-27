import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amHtmlTemplateRenderer = require("../../../../../app/ts/abstract/am_renderingservices/a_htmltemplaterenderer/A_HtmlTemplateRenderer");
import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import amGeneralConfig  = require("../../../../../app/ts/abstract/am_general/ae_config/AE_Config");

import amServiceLocator    = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");
import amServiceContainer  = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");


export module am_renderingservices
{
  export interface AE_HtmlTemplateRendererPool extends amGeneral.am_general.A_Entity
  {

    initPool( nbHtmlTemplatesRenderers : number, error    : amGeneralError.am_general.A_Error) : number;
  
    addHtmlTemplateRenderer(HtmlRenderer : amHtmlTemplateRenderer.am_renderingservices.A_HtmlTemplateRenderer) : void ;

    reset() : void;
    copy(src : AE_HtmlTemplateRendererPool) : number;

    getHtmlTemplateRendererList() : Array<amHtmlTemplateRenderer.am_renderingservices.A_HtmlTemplateRenderer> ;
    
    getFreeHtmlTemplateRenderer() : amHtmlTemplateRenderer.am_renderingservices.A_HtmlTemplateRenderer;
    releaseHtmlTemplateRenderer(htmlTemplateRenderer : amHtmlTemplateRenderer.am_renderingservices.A_HtmlTemplateRenderer) : boolean;
  }
} 