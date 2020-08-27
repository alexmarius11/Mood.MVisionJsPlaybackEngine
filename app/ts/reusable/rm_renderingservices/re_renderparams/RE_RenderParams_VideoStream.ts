import amRenderParameters     = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_VideoStream");

import rmRenderingServicesWebPage = require("../../../../../app/ts/reusable/rm_renderingservices/re_renderparams/RE_RenderParams_Video");

export module rm_renderingservices
{
  export class RE_RenderParams_VideoStream extends rmRenderingServicesWebPage.rm_renderingservices.RE_RenderParams_Video
                                           implements amRenderParameters.am_renderingservices.AE_RenderParams_VideoStream
                                            
  {
    //-----------------
  
    //---------------------------
    constructor()
    {
      super();
    }
    
    //--------------------------
    public reset() : void
    {
      return super.reset();
    }    

    

    //------------
    public copy(src : amRenderParameters.am_renderingservices.AE_RenderParams_VideoStream) : number
    {
      if (src == null)
        return 1;
      //return super.copy(src);
    }
  
  }
} 