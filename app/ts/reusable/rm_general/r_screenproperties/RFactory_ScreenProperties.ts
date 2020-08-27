
import amGeneralEntity    = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneralError     = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralScreenProperties  = require("../../../../../app/ts/abstract/am_general/a_screenproperties/A_ScreenProperties");

import amGeneralFactoryScreenProperties = require("../../../../../app/ts/abstract/am_general/a_screenproperties/AFactory_ScreenProperties");

import rmGeneralScreenProperties        = require("../../../../../app/ts/reusable/rm_general/r_screenproperties/R_ScreenProperties");
import rmGeneralEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_general
{
  export class RFactory_ScreenProperties extends  rmGeneralEntityFactory.rm_general.RFactory_Entity
                                                  implements amGeneralFactoryScreenProperties.am_general.AFactory_ScreenProperties
  {
    createEntity(entityName : string, error: amGeneralError.am_general.A_Error): amGeneralEntity.am_general.A_Entity
    {
      return new rmGeneralScreenProperties.rm_general.R_ScreenProperties();
    }
  }
} 


