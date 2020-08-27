
import amGeneral  = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneral2  = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import amGeneral3 = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AEFactory_PlaylistItem_TVTunner");

import rmCoreServices         = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_TVTunner");
import rmGeneralEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_coreservices
{
  export class REFactory_PlaylistItem_TVTunner   extends    rmGeneralEntityFactory.rm_general.RFactory_Entity
                                                implements amGeneral3.am_coreservices.AEFactory_PlaylistItem_TVTunner
  {
    createEntity(entityName : string, error: amGeneral2.am_general.A_Error): amGeneral.am_general.A_Entity
    {
      return new rmCoreServices.rm_coreservices.RE_PlaylistItem_TVTunner();
    }
  }
} 


