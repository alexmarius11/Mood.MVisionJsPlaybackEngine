
import amGeneral = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");


import amRenderingServicesIHtmlZonePoolControl = require("../../../../../app/ts/abstract/am_renderingservices/as_htmlzonepool/I_HtmlZonePool_Control");
import amRenderingServicesIHtmlZonePoolConfig  = require("../../../../../app/ts/abstract/am_renderingservices/as_htmlzonepool/I_HtmlZonePool_Config");

export module am_renderingservices
{
  export interface AS_HtmlZonePool extends amGeneral.am_general.A_Service
  {
    _iHtmlZonePool_Config  : amRenderingServicesIHtmlZonePoolConfig.am_renderingservices.I_HtmlZonePool_Config ;
    _iHtmlZonePool_Control : amRenderingServicesIHtmlZonePoolControl.am_renderingservices.I_HtmlZonePool_Control;
  }
} 