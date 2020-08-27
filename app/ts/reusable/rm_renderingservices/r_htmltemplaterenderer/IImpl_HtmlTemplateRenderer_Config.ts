import amHtmlTemplateRendererConfig = require("../../../../../app/ts/abstract/am_renderingservices/a_htmltemplaterenderer/I_HtmlTemplateRenderer_Config");

import amGeneralError                          = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralFactoryDescription             = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amTransversalServicesLogService         = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import rmRenderingServices = require("../../../../../app/ts/reusable/rm_renderingservices/r_htmltemplaterenderer/R_HtmlTemplateRenderer");
                                                     
                                                     

export module rm_renderingservices
{
  export class IImpl_HtmlTemplateRenderer_Config implements amHtmlTemplateRendererConfig.am_renderingservices.I_HtmlTemplateRenderer_Config
  {
    _name: string;    

    //----------- owner
    _owner: rmRenderingServices.rm_renderingservices.R_HtmlTemplateRenderer;

    //----------- constructor 
    constructor(owner: rmRenderingServices.rm_renderingservices.R_HtmlTemplateRenderer)  
    {
      this._owner = owner;  
    }

    //---------------------------------
    public setHtmlZoneDiv(htmlZoneDiv : HTMLDivElement)
    {
      return this._owner.setHtmlZoneDiv(htmlZoneDiv);
    }

    //-------------------------------
    public getHtmlZoneDiv() : HTMLDivElement
    {
      return this._owner.getHtmlZoneDiv();
    }

    
    //-------------------------------
    public setHtmlIFrame(htmlIFrame : HTMLIFrameElement)
    {
      return this._owner.setHtmlIFrame(htmlIFrame);
    }

    //------------------------------
    public getHtmlIFrame() : HTMLIFrameElement
    {
      return this._owner.getHtmlIFrame();
    }

  }
} 