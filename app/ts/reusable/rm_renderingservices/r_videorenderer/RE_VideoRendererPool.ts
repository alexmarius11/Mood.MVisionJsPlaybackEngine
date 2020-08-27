import amConfigurationServicesServiceLocator    = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");

import amVideoRenderer     = require("../../../../../app/ts/abstract/am_renderingservices/a_videorenderer/A_VideoRenderer");
import amVideoRendererPool     = require("../../../../../app/ts/abstract/am_renderingservices/a_videorenderer/AE_VideoRendererPool");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_renderingservices
{
  export class RE_VideoRendererPool  extends rmGeneralEntity.rm_general.R_Entity
                                implements amVideoRendererPool.am_renderingservices.AE_VideoRendererPool
                                            
  {
    _videoRendererList    : Array<amVideoRenderer.am_renderingservices.A_VideoRenderer>;   

    //---------------------------
    constructor()
    {
      super();

      this._videoRendererList   = new Array<amVideoRenderer.am_renderingservices.A_VideoRenderer>();   
    }

    //--------------------------------------------
    public initPool(nbVideoRenderers: number, error: amGeneralError.am_general.A_Error) : number
    {
      var i = 0;     
      var newVideoRenderer: amVideoRenderer.am_renderingservices.A_VideoRenderer = null;
      var errorNo = 1;
      for (i = 0; i < nbVideoRenderers; i++)
      {
        newVideoRenderer = this._aSrvLocator._iServiceCreation.createDefaultService_VideoRenderer(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, i, error);
        if (error.isError())
        {
          errorNo =1;
          break;
        }
        newVideoRenderer._iService.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);
        this.addVideoRenderer(newVideoRenderer);
      }
      return errorNo ;
    }

    //--------------------------
    public addVideoRenderer(videoRenderer : amVideoRenderer.am_renderingservices.A_VideoRenderer) : void 
    {
      this._videoRendererList.push(videoRenderer);
    }

    //--------------------------
    public reset() : void
    {
      var i = 0;           
      for (i = 0; i < this._videoRendererList.length; i++)
      {
        this._videoRendererList[i].reset();
      }
    }    


    //------------
    public copy(src : amVideoRendererPool.am_renderingservices.AE_VideoRendererPool) : number
    {
      if (src == null)
        return 1;
      return 0;
    }

    //-----------------------------
    public getVideoRendererList() : Array<amVideoRenderer.am_renderingservices.A_VideoRenderer>
    {
      return this._videoRendererList;
    }
  
  
    //--------------------------
  public getFreeVideoRenderer() : amVideoRenderer.am_renderingservices.A_VideoRenderer
  {
    var freeRenderParams: amVideoRenderer.am_renderingservices.A_VideoRenderer = null;
    var i = 0;     
    for (i = 0; i < this._videoRendererList.length; i++)
    {
      if (this._videoRendererList[i] == null)
        continue;
      if (! this._videoRendererList[i].isFree())
        continue;
      if (! this._videoRendererList[i].setIsFree(false))  
        continue;
      freeRenderParams = this._videoRendererList[i];
      break; 
    }
    return freeRenderParams;
  }
  
  //--------------------------
  public releaseVideoRenderer(videoRenderer : amVideoRenderer.am_renderingservices.A_VideoRenderer) : boolean
  {
    if (videoRenderer == null)
      return false;
    videoRenderer.setIsFree(false);
    return true;
  }

  }
} 

