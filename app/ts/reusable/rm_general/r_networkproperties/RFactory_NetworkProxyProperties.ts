
import amGeneralEntity    = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneralError     = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralNetworkProxyProperties  = require("../../../../../app/ts/abstract/am_general/a_networkproperties/A_NetworkProxyProperties");

import amGeneralFactoryNetworkProxyProperties = require("../../../../../app/ts/abstract/am_general/a_networkproperties/AFactory_NetworkProxyProperties");

import rmGeneralNetworkProxyProperties        = require("../../../../../app/ts/reusable/rm_general/r_networkproperties/R_NetworkProxyProperties");
import rmGeneralEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_general
{
  export class RFactory_NetworkProxyProperties extends  rmGeneralEntityFactory.rm_general.RFactory_Entity
                                                   implements amGeneralFactoryNetworkProxyProperties.am_general.AFactory_NetworkProxyProperties
  {
    createEntity(entityName : string, error: amGeneralError.am_general.A_Error): amGeneralEntity.am_general.A_Entity
    {
      return new rmGeneralNetworkProxyProperties.rm_general.R_NetworkProxyProperties();
    }
  }
} 


