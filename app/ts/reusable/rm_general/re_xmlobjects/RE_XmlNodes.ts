import amGeneralXmlNodes     = require("../../../../../app/ts/abstract/am_general/ae_xmlobjects/AE_XmlNodes");

import rmGeneralEntity      = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_general
{
  export class RE_XmlNodes     extends rmGeneralEntity.rm_general.R_Entity
                               implements amGeneralXmlNodes.am_general.AE_XmlNodes
  {
    //------------
    _nativeXmlNodes: any;

    //----------- constructor 
    constructor()  
    {  
      super();
      this._nativeXmlNodes = null;
    }

    //-----------------------------
    public setNativeXmlNodes(nativeXmlNodes: any) : void
    {
      this._nativeXmlNodes = nativeXmlNodes;
    }

    //-----------------------------
    public getNativeXmlNodes() : any
    {
      return this._nativeXmlNodes;
    }


  }
} 