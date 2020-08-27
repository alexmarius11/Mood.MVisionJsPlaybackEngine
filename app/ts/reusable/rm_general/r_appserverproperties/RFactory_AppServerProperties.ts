
import amGeneralEntity    = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneralError     = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
//import amGeneralAppServerProperties  = require("../../../../../app/ts/abstract/am_general/a_appserverproperties/A_AppServerProperties");

import amGeneralFactoryAppServerProperties = require("../../../../../app/ts/abstract/am_general/a_appserverproperties/AFactory_AppServerProperties");

import rmGeneralPowerProperties        = require("../../../../../app/ts/reusable/rm_general/r_appserverproperties/R_AppServerProperties");
import rmGeneralEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_general
{
  export class RFactory_PowerProperties extends  rmGeneralEntityFactory.rm_general.RFactory_Entity
                                                 implements amGeneralFactoryAppServerProperties.am_general.AFactory_AppServerProperties
  {
    createEntity(entityName : string, error: amGeneralError.am_general.A_Error): amGeneralEntity.am_general.A_Entity
    {
      return new rmGeneralPowerProperties.rm_general.R_AppServerProperties();
    }
  }
} 


