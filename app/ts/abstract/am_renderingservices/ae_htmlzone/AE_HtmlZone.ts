import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

import amError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

export module am_renderingservices
{
  export interface AE_HtmlZone extends amGeneral.am_general.A_Entity
  {
    isFree() : boolean ;
    setIsFree(isFree: boolean) ;

    reset() : void ;

    initHtml(divId : string, error: amError.am_general.A_Error);

    setHtmlZoneDiv(htmlZoneDiv : HTMLDivElement);
    getHtmlZoneDiv() : HTMLDivElement;

    setHtmlImage(idx: number, htmlImage : HTMLImageElement);
    getHtmlImage(idx: number) : HTMLImageElement;

    setHtmlVideo(idx: number, htmlImage : HTMLVideoElement);
    getHtmlVideo(idx: number) : HTMLVideoElement;

    setHtmlVideoStream(idx: number, htmlVideoStream : HTMLVideoElement);
    getHtmlVideoStream(idx: number) : HTMLVideoElement;

    setHtmlRect(idx: number, htmlRect : HTMLDivElement);
    getHtmlRect(idx: number) : HTMLDivElement;
    
    setHtmlPage(idx: number, htmlPage : HTMLIFrameElement);
    getHtmlPage(idx: number) : HTMLIFrameElement;

  }

} 