import amGeneralXmlNode     = require("../../../../../app/ts/abstract/am_general/a_xmljsonobject/A_XmlNode");

import rmGeneralEntity      = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_general
{
  export class R_XmlNode     extends rmGeneralEntity.rm_general.R_Entity
                             implements amGeneralXmlJsonObject.am_general.A_XmlNode
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