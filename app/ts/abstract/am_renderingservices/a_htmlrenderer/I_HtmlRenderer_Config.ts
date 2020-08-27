import amGeneral = require("../../../../../app/ts/abstract/am_general/i_interface/I_Interface");

export module am_renderingservices
{
  export interface I_HtmlRenderer_Config extends amGeneral.am_general.I_Interface
  {
    _name: string;    

    setHtmlZoneDiv(htmlZoneDiv : HTMLDivElement);
    getHtmlZoneDiv() : HTMLDivElement;

    setHtmlIFrame(htmlIFrame : HTMLIFrameElement);
    getHtmlIFrame() : HTMLIFrameElement;

  }
} 