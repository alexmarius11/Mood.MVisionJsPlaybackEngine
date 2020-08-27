
import amGeneral  = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneral2  = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import amGeneral3 = require("../../../../../app/ts/abstract/am_general/a_error/AFactory_Error");

import rmGeneralEvent         = require("../../../../../app/ts/reusable/rm_general/re_event/RE_Event");
import rmGeneralEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_general
{
  export class REFactory_Event  extends    rmGeneralEntityFactory.rm_general.RFactory_Entity
                                implements amGeneral3.am_general.AFactory_Error
  {
    createEntity(entityName : string, error: amGeneral2.am_general.A_Error): amGeneral.am_general.A_Entity
    {
      return new rmGeneralEvent.rm_general.RE_Event();
    }
  }
} 


