
import amGeneral = require("../../../../../app/ts/abstract/am_general/a_property/A_Properties");

import amGeneral2 = require("../../../../../app/ts/abstract/am_general/a_property/A_Property");
import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import rmGeneralEntity = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_general
{
  export class R_Properties  extends rmGeneralEntity.rm_general.R_Entity
                             implements amGeneral.am_general.A_Properties 
  {
    //--- data members
     _list: Array<amGeneral2.am_general.A_Property>

    //----------- constructor 
    constructor()  
    {  
      super();
      this._list = new Array<amGeneral2.am_general.A_Property>();
    }

    //----------------------------
    public getProperties(error: amGeneralError.am_general.A_Error): Array<amGeneral2.am_general.A_Property>
    {
      return this._list;
    }

    //-------------------------------
    public getPropertyByName(propertyName: string, error: amGeneralError.am_general.A_Error) : amGeneral2.am_general.A_Property
    {
      this._list.forEach( (crtProperty, index) => {
        if(crtProperty.getName() == propertyName) 
          return crtProperty;
        });
        return null;
      }

    //--------------------------
    public addProperty(property: amGeneral2.am_general.A_Property, error: amGeneralError.am_general.A_Error) : void
    {
       this._list.push(property);
    }
    
    //--------------------------
    public removeProperty(propertyName: string, error: amGeneralError.am_general.A_Error) : number
    {
      this._list.forEach( (crtProperty, index) => {
      if(crtProperty.getName() == propertyName) 
        this._list.splice(index,1);
        return index;
      });
      return -1;
    }
    
  }
} 



