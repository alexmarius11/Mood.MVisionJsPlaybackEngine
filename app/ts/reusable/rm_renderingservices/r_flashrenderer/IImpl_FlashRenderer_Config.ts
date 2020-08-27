import amIFlashRendererConfig = require("../../../../../app/ts/abstract/am_renderingservices/a_flashrenderer/I_FlashRenderer_Config");

import rmRenderingServices = require("../../../../../app/ts/reusable/rm_renderingservices/r_flashrenderer/R_FlashRenderer");
                                                     
                                                     

export module rm_renderingservices
{
  export class IImpl_FlashRenderer_Config implements amIFlashRendererConfig.am_renderingservices.I_FlashRenderer_Config
  {
    _name: string;    

    //----------- owner
    _owner: rmRenderingServices.rm_renderingservices.R_FlashRenderer;

    //----------- constructor 
    constructor(owner: rmRenderingServices.rm_renderingservices.R_FlashRenderer)  
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
    public setHtmlObject(htmlObject : HTMLObjectElement)
    {
      return this._owner.setHtmlObject(htmlObject);
    }

    //------------------------------
    public getHtmlObject() : HTMLObjectElement
    {
      return this._owner.getHtmlObject();
    }

  }
} 