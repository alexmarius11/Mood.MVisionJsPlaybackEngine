
import amGeneral  = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneralFactoryCaptureScreenInfo  = require("../../../../../app/ts/abstract/am_general/a_capturescreeninfo/AFactory_CaptureScreenInfo");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import rmGeneralCaptureScreenInfo    = require("../../../../../app/ts/reusable/rm_general/r_capturescreeninfo/R_CaptureScreenInfo");
import rmGeneralEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_general
{
  export class RFactory_CaptureScreenInfo   extends    rmGeneralEntityFactory.rm_general.RFactory_Entity
                                     implements amGeneralFactoryCaptureScreenInfo.am_general.AFactory_CaptureScreenInfo
  {
    createEntity(entityName : string, error: amGeneralError.am_general.A_Error): amGeneral.am_general.A_Entity
    {
      return new rmGeneralCaptureScreenInfo.rm_general.R_CaptureScreenInfo();
    }
  }
} 


