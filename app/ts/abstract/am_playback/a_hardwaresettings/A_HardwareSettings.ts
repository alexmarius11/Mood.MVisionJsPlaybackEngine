import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

export module am_playback
{
  export interface A_HardwareSettings extends amGeneral.am_general.A_Entity
  {
    getHardwareType() : string;  //like "MVP425_WES7"
    setHardwareType(hardwareType: string) ; 

    isEarlyAdapter() : boolean;  // true/false
    getEarlyAdapter() : string;  // like "0""/""1"
    setEarlyAdapter(earlyAdapter: string ) : void;

    getSerialNumber() : string; //like "PC10001"
    setSerialNumber(serialNumber: string) : void;
    
    getAccountId() : string; //like "1"
    setAccountId(accountId: string) : void;

    getAccountName() : string; //like "stream01"
    setAccountName(accountName: string) : void;

    getAccountPassword() : string; //like "retr9xEt"
    setAccountPassword(accountPassword: string) : void;
  }

} 