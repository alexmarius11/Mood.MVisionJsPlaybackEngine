import amGeneral     = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescriptions");
import amGeneral2    = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");

import amGeneralError  = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import rmGeneralEntity = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");


export module rm_general
{
  export class R_FactoryDescriptions  extends rmGeneralEntity.rm_general.R_Entity
                                      implements amGeneral.am_general.A_FactoryDescriptions
  {
    //--- properties
    _list: Array<amGeneral2.am_general.A_FactoryDescription> ;
  
    //----------- constructor 
    constructor()  
    {  
      super();
      this._list = new Array<amGeneral2.am_general.A_FactoryDescription>();
    }

    //------------------------------
    public getFactoryDescriptions(error: amGeneralError.am_general.A_Error) : Array<amGeneral2.am_general.A_FactoryDescription>
    {
      return this._list;
    }

    //-------------------------------
    public getFactoryDescriptionByName(factoryName: string, error: amGeneralError.am_general.A_Error) : amGeneral2.am_general.A_FactoryDescription
    {
      this._list.forEach( (crtFactoryDesc, index) => {
        if(crtFactoryDesc._factoryName == factoryName) 
          return crtFactoryDesc;
      });
      return null;
    }

    //--------------------------
    public addFactoryDescription(factoryDescription: amGeneral2.am_general.A_FactoryDescription, error: amGeneralError.am_general.A_Error) : void
    {
       this._list.push(factoryDescription);
    }

    //--------------------------
    public removeFactoryDescription(factoryName: string, error: amGeneralError.am_general.A_Error) : number
    {
      this._list.forEach( (crtFactoryDesc, index) => {
        if(crtFactoryDesc._factoryName == factoryName) 
          this._list.splice(index,1);
          return index;
      });
      return -1;
    }
    
  }
} 