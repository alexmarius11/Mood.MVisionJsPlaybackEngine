
import amGeneralEntity    = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneralError     = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralNetworkProperties  = require("../../../../../app/ts/abstract/am_general/a_networkproperties/A_NetworkProperties");

import amGeneralFactoryNetworkProperties = require("../../../../../app/ts/abstract/am_general/a_networkproperties/AFactory_NetworkProperties");

import rmGeneralNetworkProperties        = require("../../../../../app/ts/reusable/rm_general/r_networkproperties/R_NetworkProperties");
import rmGeneralEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_general
{
  export class RFactory_NetworkProperties extends  rmGeneralEntityFactory.rm_general.RFactory_Entity
                                                   implements amGeneralFactoryNetworkProperties.am_general.AFactory_NetworkProperties
  {
    createEntity(entityName : string, error: amGeneralError.am_general.A_Error): amGeneralEntity.am_general.A_Entity
    {
      return new rmGeneralNetworkProperties.rm_general.R_NetworkProperties();
    }
  }
} 


