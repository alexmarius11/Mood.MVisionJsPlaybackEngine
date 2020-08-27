import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amRenderParametersHtmlZone = require("../../../../../app/ts/abstract/am_renderingservices/ae_htmlzone/AE_HtmlZone");
import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import amGeneralConfig  = require("../../../../../app/ts/abstract/am_general/ae_config/AE_Config");

export module am_renderingservices
{
  export interface AE_HtmlZonePool extends amGeneral.am_general.A_Entity
  {

    initPool( nbPrepareParams : number, error    : amGeneralError.am_general.A_Error) : number;

    addHtmlZone(htmlZone : amRenderParametersHtmlZone.am_renderingservices.AE_HtmlZone) : void ;

    reset() : void;
    copy(src : AE_HtmlZonePool) : number;

    getHtmlZoneList() : Array<amRenderParametersHtmlZone.am_renderingservices.AE_HtmlZone> ;
    
    getFreeHtmlZone() : amRenderParametersHtmlZone.am_renderingservices.AE_HtmlZone;
    releaseHtmlZone(htmlZone : amRenderParametersHtmlZone.am_renderingservices.AE_HtmlZone) : boolean;
  }
} 