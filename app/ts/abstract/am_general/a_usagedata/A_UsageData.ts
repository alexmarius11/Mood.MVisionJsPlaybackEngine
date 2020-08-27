import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

export module am_general
{
  export interface A_UsageData extends amGeneral.am_general.A_Entity
  {

    getSystemUptime () : string ;
    setSystemUptime (systemUptime : string) : void;
    
    getSystemTotalUsed () : string ;
    setSystemTotalUsed (systemTotalUsed : string) : void;
    
  }

} 