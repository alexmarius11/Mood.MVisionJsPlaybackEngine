import amConfigurationServicesServiceLocator    = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");

import amHtmlTemplateRenderer     = require("../../../../../app/ts/abstract/am_renderingservices/a_htmltemplaterenderer/A_HtmlTemplateRenderer");
import amHtmlTemplateRendererPool     = require("../../../../../app/ts/abstract/am_renderingservices/a_htmltemplaterenderer/AE_HtmlTemplateRendererPool");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_renderingservices
{
  export class RE_HtmlTemplateRendererPool  extends rmGeneralEntity.rm_general.R_Entity
                                implements amHtmlTemplateRendererPool.am_renderingservices.AE_HtmlTemplateRendererPool
                                            
  {
    _htmlRendererList    : Array<amHtmlTemplateRenderer.am_renderingservices.A_HtmlTemplateRenderer>;   

    //---------------------------
    constructor()
    {
      super();

      this._htmlRendererList   = new Array<amHtmlTemplateRenderer.am_renderingservices.A_HtmlTemplateRenderer>();   
    }

    //--------------------------------------------
    public initPool(nbHtmlTemplateRenderers: number, error: amGeneralError.am_general.A_Error) : number
    {
      var i = 0;     
      var newHtmlTemplateRenderer: amHtmlTemplateRenderer.am_renderingservices.A_HtmlTemplateRenderer = null;
      var errorNo = 1;
      for (i = 0; i < nbHtmlTemplateRenderers; i++)
      {
        newHtmlTemplateRenderer = this._aSrvLocator._iServiceCreation.createDefaultService_HtmlTemplateRenderer(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, i, error);
        if (error.isError())
        {
          errorNo =1;
          break;
        }
        newHtmlTemplateRenderer._iService.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);
        this.addHtmlTemplateRenderer(newHtmlTemplateRenderer);
      }
      return errorNo ;
    }

    //--------------------------
    public addHtmlTemplateRenderer(htmlRenderer : amHtmlTemplateRenderer.am_renderingservices.A_HtmlTemplateRenderer) : void 
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
    public copy(src : amHtmlTemplateRendererPool.am_renderingservices.AE_HtmlTemplateRendererPool) : number
    {
      if (src == null)
        return 1;
      return 0;
    }

    //-----------------------------
    public getHtmlTemplateRendererList() : Array<amHtmlTemplateRenderer.am_renderingservices.A_HtmlTemplateRenderer>
    {
      return this._htmlRendererList;
    }
  
  
    //--------------------------
  public getFreeHtmlTemplateRenderer() : amHtmlTemplateRenderer.am_renderingservices.A_HtmlTemplateRenderer
  {
    var freeRenderParams: amHtmlTemplateRenderer.am_renderingservices.A_HtmlTemplateRenderer = null;
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
  public releaseHtmlTemplateRenderer(htmlRenderer : amHtmlTemplateRenderer.am_renderingservices.A_HtmlTemplateRenderer) : boolean
  {
    if (htmlRenderer == null)
      return false;
    htmlRenderer.setIsFree(false);
    return true;
  }

  }
} 

