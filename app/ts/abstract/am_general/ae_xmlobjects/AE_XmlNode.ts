import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

export module am_general
{
  export interface AE_XmlNode extends amGeneral.am_general.A_Entity
  {
    setNativeXmlNode(native: any) : void;
    getNativeXmlNode() : any;
  }

} 