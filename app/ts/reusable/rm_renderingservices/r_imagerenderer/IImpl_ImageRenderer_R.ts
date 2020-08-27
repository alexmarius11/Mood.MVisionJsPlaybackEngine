import amRenderingServices = require("../../../../../app/ts/abstract/am_renderingservices/a_imagerenderer/I_ImageRenderer");

import rmRenderingServices = require("../../../../../app/ts/reusable/rm_renderingservices/r_imagerenderer/R_ImageRenderer");
                                                     
                                                     

export module rm_renderingservices
{
  export class IImpl_ImageRenderer_R implements amRenderingServices.am_renderingservices.I_ImageRenderer
  {
    _name: string;    

    //----------- owner
    _owner: rmRenderingServices.rm_renderingservices.R_ImageRenderer;

    //----------- constructor 
    constructor(owner: rmRenderingServices.rm_renderingservices.R_ImageRenderer)  
    {
      this._owner = owner;  
    }
  }
} 