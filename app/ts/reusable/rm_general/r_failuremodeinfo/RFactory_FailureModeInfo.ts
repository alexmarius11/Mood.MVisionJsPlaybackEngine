
import amGeneral  = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneralFactoryFailureModeInfo  = require("../../../../../app/ts/abstract/am_general/a_failuremodeinfo/AFactory_FailureModeInfo");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import rmGeneralFailureModeInfo    = require("../../../../../app/ts/reusable/rm_general/r_failuremodeinfo/R_FailureModeInfo");
import rmGeneralEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_general
{
  export class RFactory_FailureModeInfo   extends    rmGeneralEntityFactory.rm_general.RFactory_Entity
                                     implements amGeneralFactoryFailureModeInfo.am_general.AFactory_FailureModeInfo
  {
    createEntity(entityName : string, error: amGeneralError.am_general.A_Error): amGeneral.am_general.A_Entity
    {
      return new rmGeneralFailureModeInfo.rm_general.R_FailureModeInfo();
    }
  }
} 


