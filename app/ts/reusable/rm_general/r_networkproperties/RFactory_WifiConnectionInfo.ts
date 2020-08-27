
import amGeneralEntity    = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneralError     = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
//import amGeneralWifiConnectionInfo  = require("../../../../../app/ts/abstract/am_general/a_networkproperties/A_WifiConnectionInfo");

import amGeneralFactoryWifiConnectionInfo = require("../../../../../app/ts/abstract/am_general/a_networkproperties/AFactory_WifiConnectionInfo");

import rmGeneralWifiConnnectionInfo        = require("../../../../../app/ts/reusable/rm_general/r_networkproperties/R_WifiConnectionInfo");
import rmGeneralEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_general
{
  export class RFactory_WifiConnnectionInfo extends  rmGeneralEntityFactory.rm_general.RFactory_Entity
                                                   implements amGeneralFactoryWifiConnectionInfo.am_general.AFactory_WifiConnectionInfo
  {
    createEntity(entityName : string, error: amGeneralError.am_general.A_Error): amGeneralEntity.am_general.A_Entity
    {
      return new rmGeneralWifiConnnectionInfo.rm_general.R_WifiConnectionInfo();
    }
  }
} 


