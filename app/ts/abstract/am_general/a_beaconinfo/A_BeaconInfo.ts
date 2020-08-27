import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

export module am_general
{
  export interface A_BeaconInfo extends amGeneral.am_general.A_Entity
  {
    //------------------------------
    isEnabled() : boolean;
    setEnabled(enabled : boolean) : void ;

    getUUID() : string;
    setUUID(uuid : string) : void;

    getMajor() : number;
    setMajor(major : number) : void ;

    getMinor() : number;
    setMinor(minor : number) : void ;

  }

} 