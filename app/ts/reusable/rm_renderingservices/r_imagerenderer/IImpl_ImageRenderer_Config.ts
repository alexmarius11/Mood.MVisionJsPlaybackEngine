import amIImageRendererConfig = require("../../../../../app/ts/abstract/am_renderingservices/a_imagerenderer/I_ImageRenderer_Config");

import rmRenderingServices = require("../../../../../app/ts/reusable/rm_renderingservices/r_imagerenderer/R_ImageRenderer");
                                                     
                                                     

export module rm_renderingservices
{
  export class IImpl_ImageRenderer_Config implements amIImageRendererConfig.am_renderingservices.I_ImageRenderer_Config
  {
    _name: string;    

    //----------- owner
    _owner: rmRenderingServices.rm_renderingservices.R_ImageRenderer;

    //----------- constructor 
    constructor(owner: rmRenderingServices.rm_renderingservices.R_ImageRenderer)  
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
    public setHtmlImage(htmlImage : HTMLImageElement)
    {
      return this._owner.setHtmlImage(htmlImage);
    }

    //------------------------------
    public getHtmlImage() : HTMLImageElement
    {
      return this._owner.getHtmlImage();
    }

  }
} 