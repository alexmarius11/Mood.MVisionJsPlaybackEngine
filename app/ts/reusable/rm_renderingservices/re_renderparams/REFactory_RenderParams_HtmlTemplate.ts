
import amGeneralEntity = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneralError  = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import amFactoryRenderParamsHtmlTemplate = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AEFactory_RenderParams_HtmlTemplate");

import rmRenderParametersHtmlTemplate = require("../../../../../app/ts/reusable/rm_renderingservices/re_renderparams/RE_RenderParams_HtmlTemplate");
import rmGeneralEntityFactory           = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_renderingservices
{
  export class RFactory_RenderParameters_HtmlTemplate extends    rmGeneralEntityFactory.rm_general.RFactory_Entity
                                                      implements amFactoryRenderParamsHtmlTemplate.am_renderingservices.AEFactory_RenderParams_HtmlTemplate
  {
    createEntity(entityName : string, error: amGeneralError.am_general.A_Error): amGeneralEntity.am_general.A_Entity
    {
      return new rmRenderParametersHtmlTemplate.rm_renderingservices.RE_RenderParams_HtmlTemplate();
    }
  }
} 


