import amGeneral  = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneral2  = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneral3 = require("../../../../../app/ts/abstract/am_general/a_property/AFactory_Property");

import rmGeneral4  = require("../../../../../app/ts/reusable/rm_general/r_property/R_Property");
import rmGeneralEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_general
{
  export class RFactory_Property  extends rmGeneralEntityFactory.rm_general.RFactory_Entity
                                  implements amGeneral3.am_general.AFactory_Property
  {
    createEntity(entityName : string, error: amGeneral2.am_general.A_Error): amGeneral.am_general.A_Entity
    {
      return new rmGeneral4.rm_general.R_Property();
    }
  }
} 


