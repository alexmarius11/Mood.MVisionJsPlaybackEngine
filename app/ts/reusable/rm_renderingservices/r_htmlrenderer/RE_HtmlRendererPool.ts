import amConfigurationServicesServiceLocator    = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");

import amHtmlRenderer     = require("../../../../../app/ts/abstract/am_renderingservices/a_htmlrenderer/A_HtmlRenderer");
import amHtmlRendererPool     = require("../../../../../app/ts/abstract/am_renderingservices/a_htmlrenderer/AE_HtmlRendererPool");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_renderingservices
{
  export class RE_HtmlRendererPool  extends rmGeneralEntity.rm_general.R_Entity
                                implements amHtmlRendererPool.am_renderingservices.AE_HtmlRendererPool
                                            
  {
    _htmlRendererList    : Array<amHtmlRenderer.am_renderingservices.A_HtmlRenderer>;   

    //---------------------------
    constructor()
    {
      super();

      this._htmlRendererList   = new Array<amHtmlRenderer.am_renderingservices.A_HtmlRenderer>();   
    }

    //--------------------------------------------
    public initPool(nbHtmlRenderers: number, error: amGeneralError.am_general.A_Error) : number
    {
      var i = 0;     
      var newHtmlRenderer: amHtmlRenderer.am_renderingservices.A_HtmlRenderer = null;
      var errorNo = 1;
      for (i = 0; i < nbHtmlRenderers; i++)
      {
        newHtmlRenderer = this._aSrvLocator._iServiceCreation.createDefaultService_HtmlRenderer(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, i, error);
        if (error.isError())
        {
          errorNo =1;
          break;
        }
        newHtmlRenderer._iService.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);
        this.addHtmlRenderer(newHtmlRenderer);
      }
      return errorNo ;
    }

    //--------------------------
    public addHtmlRenderer(htmlRenderer : amHtmlRenderer.am_renderingservices.A_HtmlRenderer) : void 
    {
      this._htmlRendererList.push(htmlRenderer);
    }

    //--------------------------
    public reset() : void
    {
      var i = 0;           
      for (i = 0; i < this._htmlRendererList.length; i++)
      {
        this._htmlRendererList[i].reset();
      }
    }    


    //------------
    public copy(src : amHtmlRendererPool.am_renderingservices.AE_HtmlRendererPool) : number
    {
      if (src == null)
        return 1;
      return 0;
    }

    //-----------------------------
    public getHtmlRendererList() : Array<amHtmlRenderer.am_renderingservices.A_HtmlRenderer>
    {
      return this._htmlRendererList;
    }
  
  
    //--------------------------
  public getFreeHtmlRenderer() : amHtmlRenderer.am_renderingservices.A_HtmlRenderer
  {
    var freeRenderParams: amHtmlRenderer.am_renderingservices.A_HtmlRenderer = null;
    var i = 0;     
    for (i = 0; i < this._htmlRendererList.length; i++)
    {
      if (this._htmlRendererList[i] == null)
        continue;
      if (! this._htmlRendererList[i].isFree())
        continue;
      if (! this._htmlRendererList[i].setIsFree(false))  
        continue;
      freeRenderParams = this._htmlRendererList[i];
      break; 
    }
    return freeRenderParams;
  }
  
  //--------------------------
  public releaseHtmlRenderer(htmlRenderer : amHtmlRenderer.am_renderingservices.A_HtmlRenderer) : boolean
  {
    if (htmlRenderer == null)
      return false;
    htmlRenderer.setIsFree(false);
    return true;
  }

  }
} 

