import amGeneralEntity  = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneralError  = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralEntityFactory = require("../../../../../app/ts/abstract/am_general/a_entity/AFactory_Entity");
import amPlaylistItemContainer = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_Container");
export module am_coreservices
{
  export interface AEFactory_PlaylistItem_Stream extends amGeneralEntityFactory.am_general.AFactory_Entity
  {
    createEntity(entityName : string, error: amGeneralError.am_general.A_Error): amGeneralEntity.am_general.A_Entity;
  }
}  


