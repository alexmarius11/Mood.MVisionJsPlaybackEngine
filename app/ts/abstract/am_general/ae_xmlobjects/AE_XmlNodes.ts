import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

export module am_general
{
  export interface AE_XmlNodes extends amGeneral.am_general.A_Entity
  {
    setNativeXmlNodes(native: any) : void;
    getNativeXmlNodes() : any;
  }

} 