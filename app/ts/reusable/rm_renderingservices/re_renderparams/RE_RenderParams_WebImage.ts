import amRenderParameters     = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_WebImage");

import rmRenderingServicesWebPage = require("../../../../../app/ts/reusable/rm_renderingservices/re_renderparams/RE_RenderParams_Image");

export module rm_renderingservices
{
  export class RE_RenderParams_WebImage extends rmRenderingServicesWebPage.rm_renderingservices.RE_RenderParams_Image
                                        implements amRenderParameters.am_renderingservices.AE_RenderParams_WebImage
                                            
  {
    //-----------------  
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
    public copy(src : amRenderParameters.am_renderingservices.AE_RenderParams_WebImage) : number
    {
      if (src == null)
        return 1;
      //return super.copy(src);
    }
  
  }
} 