import amGeneralXmlJsonObject     = require("../../../../../app/ts/abstract/am_general/a_xmljsonobject/A_XmlJsonObject");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_general
{
  export class R_XmlJsonObject   extends rmGeneralEntity.rm_general.R_Entity
                                 implements amGeneralXmlJsonObject.am_general.A_XmlJsonObject
  {
    //------------
    _nativeXmlJsonObject: any;

    //----------- constructor 
    constructor()  
    {  
      super();
      this._nativeXmlJsonObject = null;
    }

    //-----------------------------
    public setNativeXmlJsonObject(nativeXmlJsonObject: any) : void
    {
      this._nativeXmlJsonObject = nativeXmlJsonObject;
    }

    //-----------------------------
    public getNativeXmlJsonObject() : any
    {
      return this._nativeXmlJsonObject;
    }


  }
} 