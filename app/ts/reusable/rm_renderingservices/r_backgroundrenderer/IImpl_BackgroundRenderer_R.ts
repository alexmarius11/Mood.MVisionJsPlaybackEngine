import amRenderingServices = require("../../../../../app/ts/abstract/am_renderingservices/a_backgroundrenderer/I_BackgroundRenderer");

import rmRenderingServices = require("../../../../../app/ts/reusable/rm_renderingservices/r_backgroundrenderer/R_BackgroundRenderer");
                                                     
                                                     
export module rm_renderingservices
{
  export class IImpl_BackgroundRenderer_R implements amRenderingServices.am_renderingservices.I_BackgroundRenderer
  {
    _name: string;    

    //----------- owner
    _owner: rmRenderingServices.rm_renderingservices.R_BackgroundRenderer;

    //----------- constructor 
    constructor(owner: rmRenderingServices.rm_renderingservices.R_BackgroundRenderer)  
    {
      this._owner = owner;  
    }
  }
} 