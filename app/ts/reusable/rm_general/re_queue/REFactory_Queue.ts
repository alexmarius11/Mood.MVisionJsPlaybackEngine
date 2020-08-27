
import amGeneral  = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneral2  = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import amGeneralQueue = require("../../../../../app/ts/abstract/am_general/ae_queue/AEFactory_Queue");

import rmGeneralQueue         = require("../../../../../app/ts/reusable/rm_general/re_queue/RE_Queue");
import rmGeneralEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_general
{
  export class RFactory_Queue   extends    rmGeneralEntityFactory.rm_general.RFactory_Entity
                                implements amGeneralQueue.am_general.AEFactory_Queue
  {
    createEntity(entityName : string, error: amGeneral2.am_general.A_Error): amGeneral.am_general.A_Entity
    {
      return new rmGeneralQueue.rm_general.RE_Queue();
    }
  }
} 


