import amConfigurationServicesServiceLocator    = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");

import amBackgroundRenderer     = require("../../../../../app/ts/abstract/am_renderingservices/a_backgroundrenderer/A_BackgroundRenderer");
import amBackgroundRendererPool     = require("../../../../../app/ts/abstract/am_renderingservices/a_backgroundrenderer/AE_BackgroundRendererPool");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_renderingservices
{
  export class RE_BackgroundRendererPool  extends rmGeneralEntity.rm_general.R_Entity
                                implements amBackgroundRendererPool.am_renderingservices.AE_BackgroundRendererPool
                                            
  {
    _backgroundRendererList    : Array<amBackgroundRenderer.am_renderingservices.A_BackgroundRenderer>;   

    //---------------------------
    constructor()
    {
      super();

      this._backgroundRendererList   = new Array<amBackgroundRenderer.am_renderingservices.A_BackgroundRenderer>();   
    }

    //--------------------------------------------
    public initPool(nbBackgroundRenderers: number, error: amGeneralError.am_general.A_Error) : number
    {
      var i = 0;     
      var newBackgroundRenderer: amBackgroundRenderer.am_renderingservices.A_BackgroundRenderer = null;
      var errorNo = 1;
      for (i = 0; i < nbBackgroundRenderers; i++)
      {
        newBackgroundRenderer = this._aSrvLocator._iServiceCreation.createDefaultService_BackgroundRenderer(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, i, error);
        if (error.isError())
        {
          errorNo =1;
          break;
        }
        newBackgroundRenderer._iService.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);
        this.addBackgroundRenderer(newBackgroundRenderer);
      }
      return errorNo ;
    }

    //--------------------------
    public addBackgroundRenderer(backgroundRenderer : amBackgroundRenderer.am_renderingservices.A_BackgroundRenderer) : void 
    {
      this._backgroundRendererList.push(backgroundRenderer);
    }

    //--------------------------
    public reset() : void
    {
      var i = 0;           
      for (i = 0; i < this._backgroundRendererList.length; i++)
      {
        this._backgroundRendererList[i].reset();
      }
    }    


    //------------
    public copy(src : amBackgroundRendererPool.am_renderingservices.AE_BackgroundRendererPool) : number
    {
      if (src == null)
        return 1;
      return 0;
    }

    //-----------------------------
    public getBackgroundRendererList() : Array<amBackgroundRenderer.am_renderingservices.A_BackgroundRenderer>
    {
      return this._backgroundRendererList;
    }
  
  
    //--------------------------
  public getFreeBackgroundRenderer() : amBackgroundRenderer.am_renderingservices.A_BackgroundRenderer
  {
    var freeRenderParams: amBackgroundRenderer.am_renderingservices.A_BackgroundRenderer = null;
    var i = 0;     
    for (i = 0; i < this._backgroundRendererList.length; i++)
    {
      if (this._backgroundRendererList[i] == null)
        continue;
      if (! this._backgroundRendererList[i].isFree())
        continue;
      if (! this._backgroundRendererList[i].setIsFree(false))  
        continue;
      freeRenderParams = this._backgroundRendererList[i];
      break; 
    }
    return freeRenderParams;
  }
  
  //--------------------------
  public releaseBackgroundRenderer(backgroundRenderer : amBackgroundRenderer.am_renderingservices.A_BackgroundRenderer) : boolean
  {
    if (backgroundRenderer == null)
      return false;
    backgroundRenderer.setIsFree(false);
    return true;
  }

  }
} 

