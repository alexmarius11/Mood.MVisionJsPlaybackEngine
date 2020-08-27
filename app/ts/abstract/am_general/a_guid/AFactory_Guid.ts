
import amGeneral = require("../../../../../app/ts/abstract/am_general/a_guid/A_Guid");

export module am_general
{
  export interface AFactory_Guid 
  {
     create() : amGeneral.am_general.A_Guid ;
  }
}  