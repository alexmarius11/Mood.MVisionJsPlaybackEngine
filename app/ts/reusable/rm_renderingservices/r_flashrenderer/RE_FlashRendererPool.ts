import amConfigurationServicesServiceLocator    = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");

import amFlashRenderer     = require("../../../../../app/ts/abstract/am_renderingservices/a_Flashrenderer/A_FlashRenderer");
import amFlashRendererPool     = require("../../../../../app/ts/abstract/am_renderingservices/a_Flashrenderer/AE_FlashRendererPool");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_renderingservices
{
  export class RE_FlashRendererPool  extends rmGeneralEntity.rm_general.R_Entity
                                implements amFlashRendererPool.am_renderingservices.AE_FlashRendererPool
                                            
  {
    _flashRendererList    : Array<amFlashRenderer.am_renderingservices.A_FlashRenderer>;   

    //---------------------------
    constructor()
    {
      super();
    
      this._flashRendererList   = new Array<amFlashRenderer.am_renderingservices.A_FlashRenderer>();   
    }

    //--------------------------------------------
    public initPool(nbFlashRenderers: number, error: amGeneralError.am_general.A_Error) : number
    {
      var i = 0;     
      var newFlashRenderer: amFlashRenderer.am_renderingservices.A_FlashRenderer = null;
      var errorNo = 1;
      for (i = 0; i < nbFlashRenderers; i++)
      {
        newFlashRenderer = this._aSrvLocator._iServiceCreation.createDefaultService_FlashRenderer(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, i, error);
        if (error.isError())
        {
          errorNo =1;
          break;
        }
        newFlashRenderer._iService.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);
        this.addFlashRenderer(newFlashRenderer);
      }
      return errorNo ;
    }

    //--------------------------
    public addFlashRenderer(flashRenderer : amFlashRenderer.am_renderingservices.A_FlashRenderer) : void 
    {
      this._flashRendererList.push(flashRenderer);
    }

    //--------------------------
    public reset() : void
    {
      var i = 0;           
      for (i = 0; i < this._flashRendererList.length; i++)
      {
        this._flashRendererList[i].reset();
      }
    }    


    //------------
    public copy(src : amFlashRendererPool.am_renderingservices.AE_FlashRendererPool) : number
    {
      if (src == null)
        return 1;
      return 0;
    }

    //-----------------------------
    public getFlashRendererList() : Array<amFlashRenderer.am_renderingservices.A_FlashRenderer>
    {
      return this._flashRendererList;
    }
  
  
  //--------------------------
  public getFreeFlashRenderer() : amFlashRenderer.am_renderingservices.A_FlashRenderer
  {
    var freeRenderParams: amFlashRenderer.am_renderingservices.A_FlashRenderer = null;
    var i = 0;     
    for (i = 0; i < this._flashRendererList.length; i++)
    {
      if (this._flashRendererList[i] == null)
        continue;
      if (! this._flashRendererList[i].isFree())
        continue;
      if (! this._flashRendererList[i].setIsFree(false))  
        continue;
      freeRenderParams = this._flashRendererList[i];
      break; 
    }
    return freeRenderParams;
  }
  
  //--------------------------
  public releaseFlashRenderer(flashRenderer : amFlashRenderer.am_renderingservices.A_FlashRenderer) : boolean
  {
    if (flashRenderer == null)
      return false;
    flashRenderer.setIsFree(false);
    return true;
  }

  }
} 

