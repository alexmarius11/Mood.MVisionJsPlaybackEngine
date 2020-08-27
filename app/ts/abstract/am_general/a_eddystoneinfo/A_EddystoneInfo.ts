import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

export module am_general
{
  export interface A_EddystoneInfo extends amGeneral.am_general.A_Entity
  {
    isEnabled() : boolean;
    setEnabled(enabled : boolean) : void;

    getFrameType() : string;
    setFrameType(frameType : string) : void;

    getFrameData() : string;
    setFramedata(frameData : string) : void;

  }

} 