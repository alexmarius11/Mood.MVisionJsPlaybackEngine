import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

export module am_general
{
  export interface AE_XmlDocument extends amGeneral.am_general.A_Entity
  {
    setNativeXmlDocument(native: any) : void;
    getNativeXmlDocument() : any;
  }

} 