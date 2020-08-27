import amGeneralConfig     = require("../../../../../app/ts/abstract/am_general/ae_config/AE_Config");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_general
{
  export class RE_Config   extends rmGeneralEntity.rm_general.R_Entity
                          implements amGeneralConfig.am_general.AE_Config
  {

  }
} 