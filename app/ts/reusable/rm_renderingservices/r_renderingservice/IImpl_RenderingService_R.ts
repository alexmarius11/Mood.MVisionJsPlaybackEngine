import amRenderingServices = require("../../../../../app/ts/abstract/am_renderingservices/a_renderingservice/I_RenderingService");

import rmRenderingServices = require("../../../../../app/ts/reusable/rm_renderingservices/r_renderingservice/R_RenderingService");
                                                     

export module rm_renderingservices
{
  export class IImpl_RenderingService_R implements amRenderingServices.am_renderingservices.I_RenderingService
  {
    _name: string;    

    //----------- owner
    _owner: rmRenderingServices.rm_renderingservices.R_RenderingService;

    //----------- constructor 
    constructor(owner: rmRenderingServices.rm_renderingservices.R_RenderingService)  
    {
      this._owner = owner;  
    }
  }
} 