
import amGeneralEntity = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneralError  = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import amFactoryRenderParametersBackground = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AEFactory_RenderParams_Background");

import rmRenderParametersBackground = require("../../../../../app/ts/reusable/rm_renderingservices/re_renderparams/RE_RenderParams_Background");
import rmGeneralEntityFactory       = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_renderingservices
{
  export class RFactory_RenderParameters_Background extends    rmGeneralEntityFactory.rm_general.RFactory_Entity
                                                    implements amFactoryRenderParametersBackground.am_renderingservices.AEFactory_RenderParams_Background
  {
    createEntity(entityName : string, error: amGeneralError.am_general.A_Error): amGeneralEntity.am_general.A_Entity
    {
      return new rmRenderParametersBackground.rm_renderingservices.RE_RenderParams_Background();
    }
  }
} 


