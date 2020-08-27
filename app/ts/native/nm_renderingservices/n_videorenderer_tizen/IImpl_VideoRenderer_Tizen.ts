import amRenderingServices = require("../../../../../app/ts/abstract/am_renderingservices/a_videorenderer/I_VideoRenderer");

import nmRenderingServices = require("../../../../../app/ts/native/nm_renderingservices/n_videorenderer_tizen/N_VideoRenderer_Tizen");
                                                     

export module nm_renderingservices
{
  export class IImpl_VideoRenderer_Tizen implements amRenderingServices.am_renderingservices.I_VideoRenderer
  {
    _name: string;    

    //----------- owner
    _owner: nmRenderingServices.nm_renderingservices.N_VideoRenderer_Tizen;

    //----------- constructor 
    constructor(owner: nmRenderingServices.nm_renderingservices.N_VideoRenderer_Tizen)  
    {
      this._owner = owner;  
    }
  }
} 