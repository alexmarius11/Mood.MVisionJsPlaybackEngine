
import amGeneral  = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneral2  = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import amGeneralDiffusion = require("../../../../../app/ts/abstract/am_general/ae_diffusion/AEFactory_Diffusion");

import rmGeneralDiffusion     = require("../../../../../app/ts/reusable/rm_general/re_diffusion/RE_Diffusion");
import rmGeneralEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_general
{
  export class REFactory_Diffusion extends    rmGeneralEntityFactory.rm_general.RFactory_Entity
                                   implements amGeneralDiffusion.am_general.AEFactory_Diffusion
  {
    createEntity(entityName : string, error: amGeneral2.am_general.A_Error): amGeneral.am_general.A_Entity
    {
      return new rmGeneralDiffusion.rm_general.RE_Diffusion();
    }
  }
} 


