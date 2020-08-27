
import amGeneralEntityFactories = require("../../../../../app/ts/abstract/am_general/a_entity/A_EntityFactories");

import amGeneralEntityFactory   = require("../../../../../app/ts/abstract/am_general/a_entity/AFactory_Entity");
import amGeneralError           = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_general
{
  export class R_EntityFactories extends rmGeneralEntity.rm_general.R_Entity
                                 implements amGeneralEntityFactories.am_general.A_EntityFactories
  {
    //--- data members
     _list: Array<amGeneralEntityFactory.am_general.AFactory_Entity>

    //----------- constructor 
    constructor()  
    {  
      super();
      this._list = new Array<amGeneralEntityFactory.am_general.AFactory_Entity>();
    }

    //----------------------------
    public getEntityFactories(error: amGeneralError.am_general.A_Error): Array<amGeneralEntityFactory.am_general.AFactory_Entity>
    {
      return this._list;
    }

    //-------------------------------
    public getEntityFactoryByEntityName(entityName: string, error: amGeneralError.am_general.A_Error) : amGeneralEntityFactory.am_general.AFactory_Entity
    {
      this._list.forEach( (crtEntityFactory, index) => {
        if(crtEntityFactory.getEntityName() == entityName) 
          return crtEntityFactory;
        });
        return null;
    }


    //--------------------------
    public addEntityFactory(aEntityFactory: amGeneralEntityFactory.am_general.AFactory_Entity, error: amGeneralError.am_general.A_Error) : void
    {
       this._list.push(aEntityFactory);
    }
    
    //--------------------------
    public removeEntityFactoryByEntityName(entityName: string, error: amGeneralError.am_general.A_Error) : number
    {
      this._list.forEach( (crtEntityFactory, index) => {
      if(crtEntityFactory.getEntityName() == entityName) 
        this._list.splice(index,1);
        return index;
      });
      return -1;
    }
    
  }
} 



