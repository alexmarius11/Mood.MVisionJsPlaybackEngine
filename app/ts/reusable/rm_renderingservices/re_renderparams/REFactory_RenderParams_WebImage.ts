
import amGeneralEntity = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneralError  = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import amFactoryRenderParametersWebImage = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AEFactory_RenderParams_WebImage");

import rmRenderParametersWebImage  = require("../../../../../app/ts/reusable/rm_renderingservices/re_renderparams/RE_RenderParams_WebImage");
import rmGeneralEntityFactory      = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_renderingservices
{
  export class RFactory_RenderParameters_WebImage extends   rmGeneralEntityFactory.rm_general.RFactory_Entity
                                                         implements amFactoryRenderParametersWebImage.am_renderingservices.AEFactory_RenderParams_WebImage
  {
    createEntity(entityName : string, error: amGeneralError.am_general.A_Error): amGeneralEntity.am_general.A_Entity
    {
      return new rmRenderParametersWebImage.rm_renderingservices.RE_RenderParams_WebImage();
    }
  }
} 


