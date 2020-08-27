
import amGeneralEntity = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneralError  = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import amFactoryRenderParametersAudio = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AEFactory_RenderParams_Audio");

import rmRenderParametersAudio      = require("../../../../../app/ts/reusable/rm_renderingservices/re_renderparams/RE_RenderParams_Audio");
import rmGeneralEntityFactory       = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_renderingservices
{
  export class RFactory_RenderParameters_Audio      extends    rmGeneralEntityFactory.rm_general.RFactory_Entity
                                                    implements amFactoryRenderParametersAudio.am_renderingservices.AEFactory_RenderParams_Audio
  {
    createEntity(entityName : string, error: amGeneralError.am_general.A_Error): amGeneralEntity.am_general.A_Entity
    {
      return new rmRenderParametersAudio.rm_renderingservices.RE_RenderParams_Audio();
    }
  }
} 


