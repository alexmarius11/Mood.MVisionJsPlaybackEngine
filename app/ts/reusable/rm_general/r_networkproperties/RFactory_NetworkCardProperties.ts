
import amGeneralEntity    = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneralError     = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralNetworkCardProperties  = require("../../../../../app/ts/abstract/am_general/a_networkproperties/A_NetworkCardProperties");

import amGeneralFactoryNetworkCardProperties = require("../../../../../app/ts/abstract/am_general/a_networkproperties/AFactory_NetworkCardProperties");

import rmGeneralNetworkCardProperties        = require("../../../../../app/ts/reusable/rm_general/r_networkproperties/R_NetworkCardProperties");
import rmGeneralEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_general
{
  export class RFactory_NetworkCardProperties extends  rmGeneralEntityFactory.rm_general.RFactory_Entity
                                                   implements amGeneralFactoryNetworkCardProperties.am_general.AFactory_NetworkCardProperties
  {
    createEntity(entityName : string, error: amGeneralError.am_general.A_Error): amGeneralEntity.am_general.A_Entity
    {
      return new rmGeneralNetworkCardProperties.rm_general.R_NetworkCardProperties();
    }
  }
} 


