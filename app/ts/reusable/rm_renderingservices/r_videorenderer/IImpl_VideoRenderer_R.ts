import amRenderingServices = require("../../../../../app/ts/abstract/am_renderingservices/a_videorenderer/I_VideoRenderer");

import rmRenderingServices = require("../../../../../app/ts/reusable/rm_renderingservices/r_videorenderer/R_VideoRenderer");
                                                     
                                                     

export module rm_renderingservices
{
  export class IImpl_VideoRenderer_R implements amRenderingServices.am_renderingservices.I_VideoRenderer
  {
    _name: string;    

    //----------- owner
    _owner: rmRenderingServices.rm_renderingservices.R_VideoRenderer;

    //----------- constructor 
    constructor(owner: rmRenderingServices.rm_renderingservices.R_VideoRenderer)  
    {
      this._owner = owner;  
    }
  }
} 