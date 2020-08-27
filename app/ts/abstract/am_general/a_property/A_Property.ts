import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

export module am_general
{
  export interface A_Property extends amGeneral.am_general.A_Entity
  {
    getName()  : string;
    getValue() : string;

    setNameAndValue(name: string, value: string) : void;
    setName(name: string)   : void;
    setValue(value: string) : void;
  }
} 