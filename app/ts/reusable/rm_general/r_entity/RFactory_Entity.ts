import amGeneralEntityFactory  = require("../../../../../app/ts/abstract/am_general/a_entity/AFactory_Entity");

import amGeneralEntity         = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneralError          = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");


export module rm_general
{
  export class RFactory_Entity implements amGeneralEntityFactory.am_general.AFactory_Entity
  {
    //---------- properties
    _entityName;

    //----------- constructor 
    constructor(aEntityName : string, 
                aError      : amGeneralError.am_general.A_Error)  
    {  
      this._entityName = name;
    }

    //------------------------------
    public createEntity(entityName : string, error: amGeneralError.am_general.A_Error): amGeneralEntity.am_general.A_Entity
    {
      return null;
    }

    //------------------------------
    public getEntityName() : string
    {
      return this._entityName;
    }

  }
} 