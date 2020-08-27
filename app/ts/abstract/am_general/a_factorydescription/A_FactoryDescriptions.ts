
import amGeneral  = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneral2 = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");

import amGeneral3 = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

export module am_general
{
  export interface A_FactoryDescriptions extends amGeneral.am_general.A_Entity
  {
    getFactoryDescriptions(error: amGeneral3.am_general.A_Error) : Array<amGeneral2.am_general.A_FactoryDescription>;

    getFactoryDescriptionByName(factoryName: string, error: amGeneral3.am_general.A_Error) : amGeneral2.am_general.A_FactoryDescription;

    addFactoryDescription(factoryDescription: amGeneral2.am_general.A_FactoryDescription, error: amGeneral3.am_general.A_Error) : void;

    removeFactoryDescription(factoryName: string, error: amGeneral3.am_general.A_Error) : number;
  }

} 