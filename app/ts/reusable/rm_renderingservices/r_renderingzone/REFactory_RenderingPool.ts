
import amEntity = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amError  = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import amRenderingZonePool = require("../../../../../app/ts/abstract/am_renderingservices/a_renderingzone/AEFactory_RenderingZonePool");

import rmRenderingZonePool = require("../../../../../app/ts/reusable/rm_renderingservices/r_renderingzone/RE_RenderingZonePool");
import rmGeneralEntityFactory          = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_renderingservices
{
  export class REFactory_RenderingZonePool   extends    rmGeneralEntityFactory.rm_general.RFactory_Entity
                                             implements amRenderingZonePool.am_renderingservices.AEFactory_RenderingZonePool
  {
    createEntity(entityName : string, error: amError.am_general.A_Error): amEntity.am_general.A_Entity
    {
      return new rmRenderingZonePool.rm_renderingservices.RE_RenderingZonePool();
    }
  }
} 


