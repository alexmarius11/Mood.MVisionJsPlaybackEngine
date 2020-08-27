import amRenderingServices = require("../../../../../app/ts/abstract/am_renderingservices/a_videostreamrenderer/I_VideoStreamRenderer");

import rmRenderingServices = require("../../../../../app/ts/reusable/rm_renderingservices/r_videostreamrenderer/R_VideoStreamRenderer");
                                                     
                                                     

export module rm_renderingservices
{
  export class IImpl_VideoStreamRenderer_R implements amRenderingServices.am_renderingservices.I_VideoStreamRenderer
  {
    _name: string;    

    //----------- owner
    _owner: rmRenderingServices.rm_renderingservices.R_VideoStreamRenderer;

    //----------- constructor 
    constructor(owner: rmRenderingServices.rm_renderingservices.R_VideoStreamRenderer)  
    {
      this._owner = owner;  
    }
  }
} 