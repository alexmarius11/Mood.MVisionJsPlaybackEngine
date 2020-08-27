
import amEntity = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amError  = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import amHtmlZonePool = require("../../../../../app/ts/abstract/am_renderingservices/ae_htmlzone/AEFactory_HtmlZonePool");

import rmHtmlZone = require("../../../../../app/ts/reusable/rm_renderingservices/re_htmlzone/RE_HtmlZone");
import rmGeneralEntityFactory          = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_renderingservices
{
  export class REFactory_HtmlZonePool   extends    rmGeneralEntityFactory.rm_general.RFactory_Entity
                                        implements amHtmlZonePool.am_renderingservices.AEFactory_HtmlZonePool
  {
    createEntity(entityName : string, error: amError.am_general.A_Error): amEntity.am_general.A_Entity
    {
      return new rmHtmlZone.rm_renderingservices.RE_HtmlZone();
    }
  }
} 


