import amRenderingServices = require("../../../../../app/ts/abstract/am_renderingservices/a_screensaverrenderer/I_ScreenSaverRenderer");

import rmRenderingServices = require("../../../../../app/ts/reusable/rm_renderingservices/r_screensaverrenderer/R_ScreenSaverRenderer");
                                                     
                                                     

export module rm_renderingservices
{
  export class IImpl_ScreenSaverRenderer_R implements amRenderingServices.am_renderingservices.I_ScreenSaverRenderer
  {
    _name: string;    

    //----------- owner
    _owner: rmRenderingServices.rm_renderingservices.R_ScreenSaverRenderer;

    //----------- constructor 
    constructor(owner: rmRenderingServices.rm_renderingservices.R_ScreenSaverRenderer)  
    {
      this._owner = owner;  
    }
  }
} 