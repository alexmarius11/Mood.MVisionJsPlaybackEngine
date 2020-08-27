import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

export module am_renderingservices
{
  export interface AE_RenderParams_WebPage extends amGeneral.am_general.A_Entity
  {
    reset() : void;

    setUrl(url : string) : void;
    getUrl() : string;
        
    setScrollLeft(scrollLeft : number) : void;
    getScrollLeft() : number;
    setScrollTop(scrollTop : number) : void;
    getScrollTop() : number;

    copy(src : AE_RenderParams_WebPage) : number;

  }

} 