
import amGeneral  = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneral2  = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import amGeneral3 = require("../../../../../app/ts/abstract/am_renderingservices/ae_htmlzone/AEFactory_HtmlZone");

import rmRenderingServicesHtmlZone      = require("../../../../../app/ts/reusable/rm_renderingservices/re_htmlzone/RE_HtmlZone");
import rmGeneralEntityFactory          = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_renderingservices
{
  export class REFactory_HtmlZone   extends    rmGeneralEntityFactory.rm_general.RFactory_Entity
                                    implements amGeneral3.am_renderingservices.AEFactory_HtmlZone
  {
    createEntity(entityName : string, error: amGeneral2.am_general.A_Error): amGeneral.am_general.A_Entity
    {
      return new rmRenderingServicesHtmlZone.rm_renderingservices.RE_HtmlZone();
    }
  }
} 


