import amGeneralXmlObject     = require("../../../../../app/ts/abstract/am_general/a_xmljsonobject/A_XmlObject");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_general
{
  export class R_XmlObject   extends rmGeneralEntity.rm_general.R_Entity
                             implements amGeneralXmlJsonObject.am_general.A_XmlObject
  {
    //------------
    _nativeXmlObject: any;

    //----------- constructor 
    constructor()  
    {  
      super();
      this._nativeXmlObject = null;
    }

    //-----------------------------
    public setNativeXmlObject(nativeXmlObject: any) : void
    {
      this._nativeXmlObject = nativeXmlObject;
    }

    //-----------------------------
    public getNativeXmlObject() : any
    {
      return this._nativeXmlObject;
    }


  }
} 