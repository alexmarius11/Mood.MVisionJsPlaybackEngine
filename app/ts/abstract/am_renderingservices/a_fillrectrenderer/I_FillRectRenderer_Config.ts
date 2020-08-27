import amGeneral = require("../../../../../app/ts/abstract/am_general/i_interface/I_Interface");


export module am_renderingservices
{
  export interface I_FillRectRenderer_Config extends amGeneral.am_general.I_Interface
  {
    _name: string; 

    setHtmlZoneDiv(htmlZoneDiv : HTMLDivElement);
    getHtmlZoneDiv() : HTMLDivElement;

    setHtmlRectDiv(htmlRectDiv : HTMLDivElement);
    getHtmlRectDiv() : HTMLDivElement;

    setRGBA(R: number, G: number, B: number, A: number ) : number;
  }
} 