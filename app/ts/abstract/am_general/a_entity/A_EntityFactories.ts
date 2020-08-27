import amGeneralEntity = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

import amGeneralEntityFactory = require("../../../../../app/ts/abstract/am_general/a_entity/AFactory_Entity");
import amGeneralError         = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralProperties    = require("../../../../../app/ts/abstract/am_general/a_property/A_Properties");

export module am_general
{
  export interface A_EntityFactories  extends amGeneralEntity.am_general.A_Entity 
  {
    getEntityFactories(error: amGeneralError.am_general.A_Error): Array<amGeneralEntityFactory.am_general.AFactory_Entity>;
 
    //to do : add getServiceByGuid
    
    getEntityFactoryByEntityName(entityName: string, error: amGeneralError.am_general.A_Error): amGeneralEntityFactory.am_general.AFactory_Entity;

    addEntityFactory(service: amGeneralEntityFactory.am_general.AFactory_Entity, error: amGeneralError.am_general.A_Error) : void;
     
    //to do : add removeServiceByGuid

    removeEntityFactoryByEntityName(entityName: string, error: amGeneralError.am_general.A_Error) : number;
  }
} 