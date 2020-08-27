import amIVideoStreamRendererConfig = require("../../../../../app/ts/abstract/am_renderingservices/a_videostreamrenderer/I_VideoStreamRenderer_Config");

import rmRenderingServices = require("../../../../../app/ts/reusable/rm_renderingservices/r_videostreamrenderer/R_VideoStreamRenderer");
                                                     
                                                     

export module rm_renderingservices
{
  export class IImpl_VideoStreamRenderer_Config implements amIVideoStreamRendererConfig.am_renderingservices.I_VideoStreamRenderer_Config
  {
    _name: string;    

    //----------- owner
    _owner: rmRenderingServices.rm_renderingservices.R_VideoStreamRenderer;

    //----------- constructor 
    constructor(owner: rmRenderingServices.rm_renderingservices.R_VideoStreamRenderer)  
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
    public setHtmlVideoStream(htmlVideoStream : HTMLVideoElement)
    {
      return this._owner.setHtmlVideoStream(htmlVideoStream);
    }

    //------------------------------
    public getHtmlVideoStream() : HTMLVideoElement
    {
      return this._owner.getHtmlVideoStream();
    }


  }
} 