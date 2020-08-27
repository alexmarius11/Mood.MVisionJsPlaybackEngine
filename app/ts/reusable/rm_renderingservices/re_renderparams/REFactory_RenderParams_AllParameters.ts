
import amGeneralEntity = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneralError  = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import amFactoryRenderParametersAllParameters = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AEFactory_RenderParams_AllParameters");

import rmRenderParametersAllParameters = require("../../../../../app/ts/reusable/rm_renderingservices/re_renderparams/RE_RenderParams_AllParameters");
import rmGeneralEntityFactory           = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_renderingservices
{
  export class RFactory_RenderParameters_AllParameters   extends    rmGeneralEntityFactory.rm_general.RFactory_Entity
                                                         implements amFactoryRenderParametersAllParameters.am_renderingservices.AEFactory_RenderParams_AllParameters
  {
    createEntity(entityName : string, error: amGeneralError.am_general.A_Error): amGeneralEntity.am_general.A_Entity
    {
      return new rmRenderParametersAllParameters.rm_renderingservices.RE_RenderParams_AllParameters();
    }
  }
} 


