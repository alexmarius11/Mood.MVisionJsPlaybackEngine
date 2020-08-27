
import amGeneral  = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneralFactoryWifiSoftAppInfo  = require("../../../../../app/ts/abstract/am_general/a_wifisoftappinfo/AFactory_WifiSoftAppInfo");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import rmGeneralWifiSoftAppInfo    = require("../../../../../app/ts/reusable/rm_general/r_wifisoftappinfo/R_WifiSoftAppInfo");
import rmGeneralEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_general
{
  export class RFactory_WifiSoftAppInfo   extends    rmGeneralEntityFactory.rm_general.RFactory_Entity
                                     implements amGeneralFactoryWifiSoftAppInfo.am_general.AFactory_WifiSoftAppInfo
  {
    createEntity(entityName : string, error: amGeneralError.am_general.A_Error): amGeneral.am_general.A_Entity
    {
      return new rmGeneralWifiSoftAppInfo.rm_general.R_WifiSoftAppInfo();
    }
  }
} 


