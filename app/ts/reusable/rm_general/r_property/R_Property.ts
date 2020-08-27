import amGeneral = require("../../../../../app/ts/abstract/am_general/a_property/A_Property");
import rmGeneralEntity = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_general
{
  export class R_Property extends rmGeneralEntity.rm_general.R_Entity 
                          implements amGeneral.am_general.A_Property
  {
    _name:  string;
    _value: string;

    //-----------------------
    public getName() : string
    {
      return this._name ;
    }

    //-----------------------
    public getValue() : string
    {
      return this._value ;
    }

    //-----------------------
    public setNameAndValue(name: string, value: string) : void
    {
      this._name  = name;
      this._value = value;
    }

    //-----------------------
    public setName(name: string) : void
    {
      this._name = name;
    }

    //-----------------------
    public setValue(value: string) : void
    {
      this._value = value;
    }

  }
} 