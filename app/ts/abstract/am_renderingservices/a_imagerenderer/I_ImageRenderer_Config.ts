import amGeneral = require("../../../../../app/ts/abstract/am_general/i_interface/I_Interface");

export module am_renderingservices
{
  export interface I_ImageRenderer_Config extends amGeneral.am_general.I_Interface
  {
    _name: string;    

    setHtmlZoneDiv(htmlZoneDiv : HTMLDivElement);
    getHtmlZoneDiv() : HTMLDivElement;
    
    setHtmlImage(htmlImage : HTMLImageElement);
    getHtmlImage() : HTMLImageElement;

  }
} 