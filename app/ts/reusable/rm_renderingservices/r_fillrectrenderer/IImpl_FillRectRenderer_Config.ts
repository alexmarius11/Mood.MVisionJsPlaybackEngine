import amIFillRectRendererConfig = require("../../../../../app/ts/abstract/am_renderingservices/a_fillrectrenderer/I_FillRectRenderer_Config");

import rmRenderingServices = require("../../../../../app/ts/reusable/rm_renderingservices/r_fillrectrenderer/R_FillRectRenderer");
                                                     
                                                     

export module rm_renderingservices
{
  export class IImpl_FillRectRenderer_Config implements amIFillRectRendererConfig.am_renderingservices.I_FillRectRenderer_Config
  {
    _name: string;    

    //----------- owner
    _owner: rmRenderingServices.rm_renderingservices.R_FillRectRenderer;

    //----------- constructor 
    constructor(owner: rmRenderingServices.rm_renderingservices.R_FillRectRenderer)  
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
    public setHtmlRectDiv(htmlRectDiv : HTMLDivElement)
    {
      return this._owner.setHtmlRectDiv(htmlRectDiv);
    }
    
    //------------------------------
    public getHtmlRectDiv() : HTMLDivElement
    {
      return this._owner.getHtmlRectDiv();
    }

    //------------------------------
    public setRGBA(R: number, G: number, B: number, A: number ) : number
    {
      return this._owner.setRGBA(R,G,B,A);
    }
  }
} 