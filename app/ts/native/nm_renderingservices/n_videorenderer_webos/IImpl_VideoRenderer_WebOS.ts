import amRenderingServices = require("../../../../../app/ts/abstract/am_renderingservices/a_videorenderer/I_VideoRenderer");

import nmRenderingServices = require("../../../../../app/ts/native/nm_renderingservices/n_videorenderer_webos/N_VideoRenderer_WebOS");
                                                     

export module nm_renderingservices
{
  export class IImpl_VideoRenderer_WebOS implements amRenderingServices.am_renderingservices.I_VideoRenderer
  {
    _name: string;    

    //----------- owner
    _owner: nmRenderingServices.nm_renderingservices.N_VideoRenderer_WebOS;

    //----------- constructor 
    constructor(owner: nmRenderingServices.nm_renderingservices.N_VideoRenderer_WebOS)  
    {
      this._owner = owner;  
    }
  }
} 