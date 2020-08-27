
import amGeneralEntity = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneralError  = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import amFactoryControlParamsRun = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AEFactory_ControlParams_Run");

import rmControlParamsRun      = require("../../../../../app/ts/reusable/rm_renderingservices/re_controlparams/RE_ControlParams_Run");
import rmGeneralEntityFactory      = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_renderingservices
{
  export class RFactory_ControlParams_Run  extends    rmGeneralEntityFactory.rm_general.RFactory_Entity
                                               implements amFactoryControlParamsRun.am_renderingservices.AEFactory_ControlParams_Run
  {
    createEntity(entityName : string, error: amGeneralError.am_general.A_Error): amGeneralEntity.am_general.A_Entity
    {
      return new rmControlParamsRun.rm_renderingservices.RE_ControlParams_Run();
    }
  }
} 


