
import amGeneralEntity = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneralError  = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import amFactoryControlParamsPrepare = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AEFactory_ControlParams_Prepare");

import rmControlParamsPrepare      = require("../../../../../app/ts/reusable/rm_renderingservices/re_controlparams/RE_ControlParams_Prepare");
import rmGeneralEntityFactory      = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_renderingservices
{
  export class RFactory_ControlParams_Prepare  extends    rmGeneralEntityFactory.rm_general.RFactory_Entity
                                               implements amFactoryControlParamsPrepare.am_renderingservices.AEFactory_ControlParams_Prepare
  {
    createEntity(entityName : string, error: amGeneralError.am_general.A_Error): amGeneralEntity.am_general.A_Entity
    {
      return new rmControlParamsPrepare.rm_renderingservices.RE_ControlParams_Prepare();
    }
  }
} 


