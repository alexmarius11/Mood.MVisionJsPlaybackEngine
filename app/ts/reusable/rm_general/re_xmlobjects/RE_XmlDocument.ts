
import amGeneralXmlDocument   = require("../../../../../app/ts/abstract/am_general/ae_xmlobjects/AE_XmlDocument");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_general
{
  export class RE_XmlDocument extends rmGeneralEntity.rm_general.R_Entity
                              implements amGeneralXmlDocument.am_general.AE_XmlDocument
  {
    //------------
    _nativeXmlDocument: any;

    //----------- constructor 
    constructor()  
    {  
      super();
      this._nativeXmlDocument = null;
    }

    //-----------------------------
    public setNativeXmlDocument(nativeXmlObject: any) : void
    {
      this._nativeXmlDocument = nativeXmlObject;
    }

    //-----------------------------
    public getNativeXmlDocument() : any
    {
      return this._nativeXmlDocument;
    }


  }
} 