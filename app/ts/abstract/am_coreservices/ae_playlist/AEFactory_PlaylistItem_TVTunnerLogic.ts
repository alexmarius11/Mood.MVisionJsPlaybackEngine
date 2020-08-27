import amGeneral  = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneral2  = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralEntityFactory = require("../../../../../app/ts/abstract/am_general/a_entity/AFactory_Entity");

export module am_coreservices
{
  export interface AEFactory_PlaylistItem_TVTunnerLogic extends amGeneralEntityFactory.am_general.AFactory_Entity
  {
    createEntity(entityName : string, error: amGeneral2.am_general.A_Error): amGeneral.am_general.A_Entity;
  }
}  


