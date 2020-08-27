import amGeneralXmlNode     = require("../../../../../app/ts/abstract/am_general/ae_xmlobjects/AE_XmlNode");

import rmGeneralEntity      = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_general
{
  export class RE_XmlNode     extends rmGeneralEntity.rm_general.R_Entity
                             implements amGeneralXmlNode.am_general.AE_XmlNode
  {
    //------------
    _nativeXmlNode: any;

    //----------- constructor 
    constructor()  
    {  
      super();
      this._nativeXmlNode = null;
    }

    //-----------------------------
    public setNativeXmlNode(nativeXmlNode: any) : void
    {
      this._nativeXmlNode = nativeXmlNode;
    }

    //-----------------------------
    public getNativeXmlNode() : any
    {
      return this._nativeXmlNode;
    }


  }
} 