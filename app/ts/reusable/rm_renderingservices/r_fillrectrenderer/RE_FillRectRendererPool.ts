import amConfigurationServicesServiceLocator    = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");

import amFillRectRenderer     = require("../../../../../app/ts/abstract/am_renderingservices/a_fillrectrenderer/A_FillRectRenderer");
import amFillRectRendererPool     = require("../../../../../app/ts/abstract/am_renderingservices/a_fillrectrenderer/AE_FillRectRendererPool");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_renderingservices
{
  export class RE_FillRectRendererPool  extends rmGeneralEntity.rm_general.R_Entity
                                implements amFillRectRendererPool.am_renderingservices.AE_FillRectRendererPool
                                            
  {
    _fillrectRendererList    : Array<amFillRectRenderer.am_renderingservices.A_FillRectRenderer>;   

    //---------------------------
    constructor()
    {
      super();

      this._fillrectRendererList   = new Array<amFillRectRenderer.am_renderingservices.A_FillRectRenderer>();   
    }

    //--------------------------------------------
    public initPool(nbFillRectRenderers: number, error: amGeneralError.am_general.A_Error) : number
    {
      var i = 0;     
      var newFillRectRenderer: amFillRectRenderer.am_renderingservices.A_FillRectRenderer = null;
      var errorNo = 1;
      for (i = 0; i < nbFillRectRenderers; i++)
      {
        newFillRectRenderer = this._aSrvLocator._iServiceCreation.createDefaultService_FillRectRenderer(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, i, error);
        if (error.isError())
        {
          errorNo =1;
          break;
        }
        newFillRectRenderer._iService.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);
        this.addFillRectRenderer(newFillRectRenderer);
      }
      return errorNo ;
    }

    //--------------------------
    public addFillRectRenderer(fillrectRenderer : amFillRectRenderer.am_renderingservices.A_FillRectRenderer) : void 
    {
      this._fillrectRendererList.push(fillrectRenderer);
    }

    //--------------------------
    public reset() : void
    {
      var i = 0;           
      for (i = 0; i < this._fillrectRendererList.length; i++)
      {
        this._fillrectRendererList[i].reset();
      }
    }    


    //------------
    public copy(src : amFillRectRendererPool.am_renderingservices.AE_FillRectRendererPool) : number
    {
      if (src == null)
        return 1;
      return 0;
    }

    //-----------------------------
    public getFillRectRendererList() : Array<amFillRectRenderer.am_renderingservices.A_FillRectRenderer>
    {
      return this._fillrectRendererList;
    }
  
  
    //--------------------------
  public getFreeFillRectRenderer() : amFillRectRenderer.am_renderingservices.A_FillRectRenderer
  {
    var freeRenderParams: amFillRectRenderer.am_renderingservices.A_FillRectRenderer = null;
    var i = 0;     
    for (i = 0; i < this._fillrectRendererList.length; i++)
    {
      if (this._fillrectRendererList[i] == null)
        continue;
      if (! this._fillrectRendererList[i].isFree())
        continue;
      if (! this._fillrectRendererList[i].setIsFree(false))  
        continue;
      freeRenderParams = this._fillrectRendererList[i];
      break; 
    }
    return freeRenderParams;
  }
  
  //--------------------------
  public releaseFillRectRenderer(fillrectRenderer : amFillRectRenderer.am_renderingservices.A_FillRectRenderer) : boolean
  {
    if (fillrectRenderer == null)
      return false;
    fillrectRenderer.setIsFree(false);
    return true;
  }

  }
} 

