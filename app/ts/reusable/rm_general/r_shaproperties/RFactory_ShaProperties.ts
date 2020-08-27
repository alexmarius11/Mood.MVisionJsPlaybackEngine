
import amGeneralEntity    = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneralError     = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
//import amGeneralShaProperties  = require("../../../../../app/ts/abstract/am_general/a_shaproperties/A_ShaProperties");

import amGeneralFactoryShaProperties = require("../../../../../app/ts/abstract/am_general/a_shaproperties/AFactory_ShaProperties");

import rmGeneralShaProperties        = require("../../../../../app/ts/reusable/rm_general/r_shaproperties/R_ShaProperties");
import rmGeneralEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_general
{
  export class RFactory_ShaProperties extends rmGeneralEntityFactory.rm_general.RFactory_Entity
                                                   implements amGeneralFactoryShaProperties.am_general.AFactory_ShaProperties
  {
    createEntity(entityName : string, error: amGeneralError.am_general.A_Error): amGeneralEntity.am_general.A_Entity
    {
      return new rmGeneralShaProperties.rm_general.R_ShaProperties();
    }
  }
} 


