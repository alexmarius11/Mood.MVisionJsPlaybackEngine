import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

export module am_general
{
  export interface A_FailureModeInfo extends amGeneral.am_general.A_Entity
  {
    getMode() : string;
    setMode(mode : string) : void;

    setInputPriorities(arrInpuPriorities: Array<string>)  : void;
    getInputPriorities() : Array<string>;

  }

} 