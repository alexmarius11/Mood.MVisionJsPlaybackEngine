import amIVideoRendererConfig = require("../../../../../app/ts/abstract/am_renderingservices/a_videorenderer/I_VideoRenderer_Config");

import rmRenderingServices = require("../../../../../app/ts/reusable/rm_renderingservices/r_videorenderer/R_VideoRenderer");
                                                     
                                                     

export module rm_renderingservices
{
  export class IImpl_VideoRenderer_Config implements amIVideoRendererConfig.am_renderingservices.I_VideoRenderer_Config
  {
    _name: string;    

    //----------- owner
    _owner: rmRenderingServices.rm_renderingservices.R_VideoRenderer;

    //----------- constructor 
    constructor(owner: rmRenderingServices.rm_renderingservices.R_VideoRenderer)  
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
    public setHtmlVideo(htmlVideo : HTMLVideoElement)
    {
      return this._owner.setHtmlVideo(htmlVideo);
    }

    //------------------------------
    public getHtmlVideo() : HTMLVideoElement
    {
      return this._owner.getHtmlVideo();
    }

  }
} 