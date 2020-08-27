import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

export module am_general
{
  export interface A_XmlJsonObject extends amGeneral.am_general.A_Entity
  {
    setNativeXmlJsonObject(native: any) : void;
    getNativeXmlJsonObject() : any;
  }

} 