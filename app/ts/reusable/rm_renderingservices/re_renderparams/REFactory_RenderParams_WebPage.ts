
import amGeneralEntity = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneralError  = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import amFactoryRenderParametersWebPage = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AEFactory_RenderParams_WebPage");

import rmRenderParametersWebPage = require("../../../../../app/ts/reusable/rm_renderingservices/re_renderparams/RE_RenderParams_WebPage");
import rmGeneralEntityFactory           = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_renderingservices
{
  export class RFactory_RenderParameters_WebPage extends  rmGeneralEntityFactory.rm_general.RFactory_Entity
                                                          implements amFactoryRenderParametersWebPage.am_renderingservices.AEFactory_RenderParams_WebPage
  {
    createEntity(entityName : string, error: amGeneralError.am_general.A_Error): amGeneralEntity.am_general.A_Entity
    {
      return new rmRenderParametersWebPage.rm_renderingservices.RE_RenderParams_WebPage();
    }
  }
} 


