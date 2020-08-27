import amConfigurationServicesServiceLocator    = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");

import amVideoStreamRenderer     = require("../../../../../app/ts/abstract/am_renderingservices/a_videostreamrenderer/A_VideoStreamRenderer");
import amVideoStreamRendererPool     = require("../../../../../app/ts/abstract/am_renderingservices/a_videostreamrenderer/AE_VideoStreamRendererPool");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_renderingservices
{
  export class RE_VideoStreamRendererPool  extends rmGeneralEntity.rm_general.R_Entity
                                implements amVideoStreamRendererPool.am_renderingservices.AE_VideoStreamRendererPool
                                            
  {
    _videoStreamRendererList    : Array<amVideoStreamRenderer.am_renderingservices.A_VideoStreamRenderer>;   

    //---------------------------
    constructor()
    {
      super();

      this._videoStreamRendererList   = new Array<amVideoStreamRenderer.am_renderingservices.A_VideoStreamRenderer>();   
    }

    //--------------------------------------------
    public initPool(nbVideoStreamRenderers: number, error: amGeneralError.am_general.A_Error) : number
    {
      var i = 0;     
      var newVideoStreamRenderer: amVideoStreamRenderer.am_renderingservices.A_VideoStreamRenderer = null;
      var errorNo = 1;
      for (i = 0; i < nbVideoStreamRenderers; i++)
      {
        newVideoStreamRenderer = this._aSrvLocator._iServiceCreation.createDefaultService_VideoStreamRenderer(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, i, error);
        if (error.isError())
        {
          errorNo =1;
          break;
        }
        newVideoStreamRenderer._iService.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);
        this.addVideoStreamRenderer(newVideoStreamRenderer);
      }
      return errorNo ;
    }

    //--------------------------
    public addVideoStreamRenderer(videoStreamRenderer : amVideoStreamRenderer.am_renderingservices.A_VideoStreamRenderer) : void 
    {
      this._videoStreamRendererList.push(videoStreamRenderer);
    }

    //--------------------------
    public reset() : void
    {
      var i = 0;           
      for (i = 0; i < this._videoStreamRendererList.length; i++)
      {
        this._videoStreamRendererList[i].reset();
      }
    }    


    //------------
    public copy(src : amVideoStreamRendererPool.am_renderingservices.AE_VideoStreamRendererPool) : number
    {
      if (src == null)
        return 1;
      return 0;
    }

    //-----------------------------
    public getVideoStreamRendererList() : Array<amVideoStreamRenderer.am_renderingservices.A_VideoStreamRenderer>
    {
      return this._videoStreamRendererList;
    }
  
  
    //--------------------------
  public getFreeVideoStreamRenderer() : amVideoStreamRenderer.am_renderingservices.A_VideoStreamRenderer
  {
    var freeRenderParams: amVideoStreamRenderer.am_renderingservices.A_VideoStreamRenderer = null;
    var i = 0;     
    for (i = 0; i < this._videoStreamRendererList.length; i++)
    {
      if (this._videoStreamRendererList[i] == null)
        continue;
      if (! this._videoStreamRendererList[i].isFree())
        continue;
      if (! this._videoStreamRendererList[i].setIsFree(false))  
        continue;
      freeRenderParams = this._videoStreamRendererList[i];
      break; 
    }
    return freeRenderParams;
  }
  
  //--------------------------
  public releaseVideoStreamRenderer(videoStreamRenderer : amVideoStreamRenderer.am_renderingservices.A_VideoStreamRenderer) : boolean
  {
    if (videoStreamRenderer == null)
      return false;
    videoStreamRenderer.setIsFree(false);
    return true;
  }

  }
} 

