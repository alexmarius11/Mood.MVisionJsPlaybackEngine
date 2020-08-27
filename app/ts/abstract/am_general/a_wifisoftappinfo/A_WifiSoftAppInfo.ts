import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

export module am_general
{
  export interface A_WifiSoftAppInfo extends amGeneral.am_general.A_Entity
  {
    isEnabled()  : boolean;
    setEnabled(enabled: boolean) : void ;

    getSSID()  : string
    setSSID(ssid: string) : void ;

    getSecurityKey()  : string
    setSecurityKey(securityKey: string) : void ;

  }

} 