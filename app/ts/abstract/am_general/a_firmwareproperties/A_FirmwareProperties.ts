import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

export module am_general
{
  export interface A_FirmwareProperties extends amGeneral.am_general.A_Entity
  {
     getFirmwareUrl() : string ;
     setFirmwareUrl(firmwareUrl: string) : void ;
  }

} 