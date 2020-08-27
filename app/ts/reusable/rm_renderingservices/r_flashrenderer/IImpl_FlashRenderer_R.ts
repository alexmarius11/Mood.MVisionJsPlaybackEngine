import amRenderingServices = require("../../../../../app/ts/abstract/am_renderingservices/a_flashrenderer/I_FlashRenderer");

import rmRenderingServices = require("../../../../../app/ts/reusable/rm_renderingservices/r_flashrenderer/R_FlashRenderer");
                                                     
                                                     

export module rm_renderingservices
{
  export class IImpl_FlashRenderer_R implements amRenderingServices.am_renderingservices.I_FlashRenderer
  {
    _name: string;    

    //----------- owner
    _owner: rmRenderingServices.rm_renderingservices.R_FlashRenderer;

    //----------- constructor 
    constructor(owner: rmRenderingServices.rm_renderingservices.R_FlashRenderer)  
    {
      this._owner = owner;  
    }
  }
} 