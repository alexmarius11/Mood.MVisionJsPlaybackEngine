import amRenderingServices = require("../../../../../app/ts/abstract/am_renderingservices/a_fillrectrenderer/I_FillRectRenderer");

import rmRenderingServices = require("../../../../../app/ts/reusable/rm_renderingservices/r_fillrectrenderer/R_FillRectRenderer");
                                                     
                                                     

export module rm_renderingservices
{
  export class IImpl_FillRectRenderer_R implements amRenderingServices.am_renderingservices.I_FillRectRenderer
  {
    _name: string;    

    //----------- owner
    _owner: rmRenderingServices.rm_renderingservices.R_FillRectRenderer;

    //----------- constructor 
    constructor(owner: rmRenderingServices.rm_renderingservices.R_FillRectRenderer)  
    {
      this._owner = owner;  
    }
  }
} 