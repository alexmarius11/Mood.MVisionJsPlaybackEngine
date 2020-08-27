
import amGeneralEntity    = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneralError     = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralSoundProperties  = require("../../../../../app/ts/abstract/am_general/a_soundproperties/A_SoundProperties");

import amGeneralFactoryDateTime = require("../../../../../app/ts/abstract/am_general/a_datetime/AFactory_DateTime");

import rmGeneralSoundProperties     = require("../../../../../app/ts/reusable/rm_general/r_soundproperties/R_SoundProperties");
import rmGeneralEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_general
{
  export class RFactory_ScreenProperties extends  rmGeneralEntityFactory.rm_general.RFactory_Entity
                                                  implements amGeneralFactoryDateTime.am_general.AFactory_DateTime
  {
    createEntity(entityName : string, error: amGeneralError.am_general.A_Error): amGeneralEntity.am_general.A_Entity
    {
      return new rmGeneralSoundProperties.rm_general.R_SoundProperties();
    }
  }
} 


