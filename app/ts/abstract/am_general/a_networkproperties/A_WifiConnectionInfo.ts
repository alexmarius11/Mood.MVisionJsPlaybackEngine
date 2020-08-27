import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

export module am_general
{
  export interface A_WifiConnectionInfo extends amGeneral.am_general.A_Entity
  {
     getSSID() : string;
     setSSID(ssid: string) : void ;

     getWifiPassword() : string;
     setWifiPassword(pwd: string) : void ;

     getWifiSignalLevel() : string;
     setWifiSignalLevel(pwd: string) : void ;

  }

} 