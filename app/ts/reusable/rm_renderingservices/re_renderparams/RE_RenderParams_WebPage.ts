import amRenderParameters     = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_WebPage");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_renderingservices
{
  export class RE_RenderParams_WebPage extends rmGeneralEntity.rm_general.R_Entity
                                     implements amRenderParameters.am_renderingservices.AE_RenderParams_WebPage
                                            
  {
    //-----------------
    _url : string;

    _scrollTop  : number;
    _scrollLeft : number;

    //---------------------------
    constructor()
    {
      super();
      
      this._url = "";
      this._scrollTop  = -1;
      this._scrollLeft = -1;
  
    }
    
    //--------------------------
    public reset() : void
    {
      this._url = "";
      this._scrollTop  = -1;
      this._scrollLeft = -1;
    }    

    //---------------
    public setUrl(url : string) : void
    {
      this._url = url;
    }
    
    //---------------
    public getUrl() : string
    {
      return this._url;
    }
    
    //------------
    public copy(src : amRenderParameters.am_renderingservices.AE_RenderParams_WebPage) : number
    {
      if (src == null)
        return 1;
      this._url        = src.getUrl();
      this._scrollLeft = src.getScrollLeft();
      this._scrollTop  = src.getScrollTop();
      return 0;
    }

    //---------------
    public setScrollTop(scrollTop : number) : void
    {
      this._scrollTop = scrollTop;
    }
    //---------------
    public getScrollTop() : number
    {
      return this._scrollTop;
    }
  
    //---------------
    public setScrollLeft(scrollLeft : number) : void
    {
      this._scrollLeft = scrollLeft;
    }
    //---------------
    public getScrollLeft() : number
    {
      return this._scrollLeft;
    }

  }
} 