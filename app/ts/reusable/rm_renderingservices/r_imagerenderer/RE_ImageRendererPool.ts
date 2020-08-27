import amConfigurationServicesServiceLocator    = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");

import amImageRenderer     = require("../../../../../app/ts/abstract/am_renderingservices/a_imagerenderer/A_ImageRenderer");
import amImageRendererPool     = require("../../../../../app/ts/abstract/am_renderingservices/a_imagerenderer/AE_ImageRendererPool");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_renderingservices
{
  export class RE_ImageRendererPool  extends rmGeneralEntity.rm_general.R_Entity
                                implements amImageRendererPool.am_renderingservices.AE_ImageRendererPool
                                            
  {
    _imageRendererList    : Array<amImageRenderer.am_renderingservices.A_ImageRenderer>;   

    //---------------------------
    constructor()
    {
      super();

      this._imageRendererList   = new Array<amImageRenderer.am_renderingservices.A_ImageRenderer>();   
    }

    //--------------------------------------------
    public initPool(nbImageRenderers: number, error: amGeneralError.am_general.A_Error) : number
    {
      var i = 0;     
      var newImageRenderer: amImageRenderer.am_renderingservices.A_ImageRenderer = null;
      var errorNo = 1;
      for (i = 0; i < nbImageRenderers; i++)
      {
        newImageRenderer = this._aSrvLocator._iServiceCreation.createDefaultService_ImageRenderer(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, i, error);
        if (error.isError())
        {
          errorNo =1;
          break;
        }
        newImageRenderer._iService.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);
        this.addImageRenderer(newImageRenderer);
      }
      return errorNo ;
    }

    //--------------------------
    public addImageRenderer(imageRenderer : amImageRenderer.am_renderingservices.A_ImageRenderer) : void 
    {
      this._imageRendererList.push(imageRenderer);
    }

    //--------------------------
    public reset() : void
    {
      var i = 0;           
      for (i = 0; i < this._imageRendererList.length; i++)
      {
        this._imageRendererList[i].reset();
      }
    }    


    //------------
    public copy(src : amImageRendererPool.am_renderingservices.AE_ImageRendererPool) : number
    {
      if (src == null)
        return 1;
      return 0;
    }

    //-----------------------------
    public getImageRendererList() : Array<amImageRenderer.am_renderingservices.A_ImageRenderer>
    {
      return this._imageRendererList;
    }
  
  
    //--------------------------
  public getFreeImageRenderer() : amImageRenderer.am_renderingservices.A_ImageRenderer
  {
    var freeRenderParams: amImageRenderer.am_renderingservices.A_ImageRenderer = null;
    var i = 0;     
    for (i = 0; i < this._imageRendererList.length; i++)
    {
      if (this._imageRendererList[i] == null)
        continue;
      if (! this._imageRendererList[i].isFree())
        continue;
      if (! this._imageRendererList[i].setIsFree(false))  
        continue;
      freeRenderParams = this._imageRendererList[i];
      break; 
    }
    return freeRenderParams;
  }
  
  //--------------------------
  public releaseImageRenderer(imageRenderer : amImageRenderer.am_renderingservices.A_ImageRenderer) : boolean
  {
    if (imageRenderer == null)
      return false;
    imageRenderer.setIsFree(false);
    return true;
  }

  }
} 

