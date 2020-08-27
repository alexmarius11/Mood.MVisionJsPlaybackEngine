
import amGeneral  = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneral2  = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneral3 = require("../../../../../app/ts/abstract/am_general/a_factorydescription/AFactory_FactoryDescription");
import rmGeneral4  = require("../../../../../app/ts/reusable/rm_general/r_factorydescription/R_FactoryDescription");

import rmGeneralEntity     = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");
import rmGeneralEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_general
{
  export class RFactory_FactoryDescription  extends rmGeneralEntityFactory.rm_general.RFactory_Entity
                                            implements amGeneral3.am_general.AFactory_FactoryDescription
  {
    createEntity(entityName : string, error: amGeneral2.am_general.A_Error): amGeneral.am_general.A_Entity
    {
      return new rmGeneral4.rm_general.R_FactoryDescription();
    }
  }
} 


