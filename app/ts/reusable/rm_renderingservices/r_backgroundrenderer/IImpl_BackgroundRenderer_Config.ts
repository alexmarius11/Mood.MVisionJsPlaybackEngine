import amIBackgroundRendererConfig = require("../../../../../app/ts/abstract/am_renderingservices/a_backgroundrenderer/I_BackgroundRenderer_Config");

import rmRenderingServices = require("../../../../../app/ts/reusable/rm_renderingservices/r_backgroundrenderer/R_BackgroundRenderer");
                                                     
                                                     
export module rm_renderingservices
{
  export class IImpl_BackgroundRenderer_Config implements amIBackgroundRendererConfig.am_renderingservices.I_BackgroundRenderer_Config
  {
    _name: string;    

    //----------- owner
    _owner: rmRenderingServices.rm_renderingservices.R_BackgroundRenderer;

    //----------- constructor 
    constructor(owner: rmRenderingServices.rm_renderingservices.R_BackgroundRenderer)  
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

  }
} 