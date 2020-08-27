
import amGeneral  = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneralFactoryPlatformInfo  = require("../../../../../app/ts/abstract/am_general/a_tileinfo/AFactory_TileInfo");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import rmGeneralTileInfo    = require("../../../../../app/ts/reusable/rm_general/r_tileinfo/R_TileInfo");
import rmGeneralEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_general
{
  export class RFactory_TileInfo   extends    rmGeneralEntityFactory.rm_general.RFactory_Entity
                                     implements amGeneralFactoryPlatformInfo.am_general.AFactory_TileInfo
  {
    createEntity(entityName : string, error: amGeneralError.am_general.A_Error): amGeneral.am_general.A_Entity
    {
      return new rmGeneralTileInfo.rm_general.R_TileInfo();
    }
  }
} 


