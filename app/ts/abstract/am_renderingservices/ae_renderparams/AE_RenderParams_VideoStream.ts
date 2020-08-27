import amRenderParametersVideo  = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_Video");

export module am_renderingservices
{
  export interface AE_RenderParams_VideoStream extends amRenderParametersVideo.am_renderingservices.AE_RenderParams_Video
  {
        
    copy(src : AE_RenderParams_VideoStream) : number;

  }

} 