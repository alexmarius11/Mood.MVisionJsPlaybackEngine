import amRenderParametersImage  = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_Image");

export module am_renderingservices
{
  export interface AE_RenderParams_WebImage extends amRenderParametersImage.am_renderingservices.AE_RenderParams_Image
  {
        
    copy(src : AE_RenderParams_WebImage) : number;

  }

} 