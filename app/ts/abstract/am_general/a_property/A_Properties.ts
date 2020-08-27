
import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

import amGeneral2 = require("../../../../../app/ts/abstract/am_general/a_property/A_Property");
import amGeneral3 = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

export module am_general
{
  export interface A_Properties extends amGeneral.am_general.A_Entity 
  {
    getProperties(error: amGeneral3.am_general.A_Error): Array<amGeneral2.am_general.A_Property>;
 
    getPropertyByName(propertyName: string, error: amGeneral3.am_general.A_Error): amGeneral2.am_general.A_Property;

    addProperty(property: amGeneral2.am_general.A_Property, error: amGeneral3.am_general.A_Error) : void;
     
    removeProperty(propertyName: string, error: amGeneral3.am_general.A_Error) : number;
  }
} 