import amRenderParameters     = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_HtmlTemplate");

import rmRenderingServicesWebPage = require("../../../../../app/ts/reusable/rm_renderingservices/re_renderparams/RE_RenderParams_WebPage");

export module rm_renderingservices
{
  export class RE_RenderParams_HtmlTemplate extends rmRenderingServicesWebPage.rm_renderingservices.RE_RenderParams_WebPage
                                            implements amRenderParameters.am_renderingservices.AE_RenderParams_HtmlTemplate
                                            
  {
  
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
    public copy(src : amRenderParameters.am_renderingservices.AE_RenderParams_HtmlTemplate) : number
    {
      if (src == null)
        return 1;
      return super.copy(src);
    }
  
  }
} 