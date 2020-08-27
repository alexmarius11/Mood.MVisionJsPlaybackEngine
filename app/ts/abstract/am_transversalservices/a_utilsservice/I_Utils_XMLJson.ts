import amGeneral = require("../../../../../app/ts/abstract/am_general/i_interface/I_Interface");

//import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");
import amGeneralXmlJsonObject = require("../../../../../app/ts/abstract/am_general/a_xmljsonobject/A_XmlJsonObject");

import amGeneralXmlDocument = require("../../../../../app/ts/abstract/am_general/ae_xmlobjects/AE_XmlDocument");
import amGeneralXmlNode     = require("../../../../../app/ts/abstract/am_general/ae_xmlobjects/AE_XmlNode");

import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

export module am_transversalservices
{
  export interface I_Utils_XMLJson extends amGeneral.am_general.I_Interface
  {
    _name: string;    

    xmlDocToJSON(xdoc: XMLDocument) : any;
    getXMLJsonTagObject(jsonObj: object, jsonPath: string) : object;
    getXMLJsonTagArray(jsonObj: object, jsonPath: string) : object[];
    getXMLJsonTagText(jsonObj: object, jsonPath: string) : string;

    getXMLJsonObjectTagText(aXmlJsonObject: amGeneralXmlJsonObject.am_general.A_XmlJsonObject, jsonPath: string) : string;
    getXMLJsonObjectTagArray(aXmlJsonObject: amGeneralXmlJsonObject.am_general.A_XmlJsonObject, jsonPath: string) : Array<object>;

    
    parseXMLString(xmlString: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;

    getXmlXPath_Nodes(aXmlDocument: amGeneralXmlDocument.am_general.AE_XmlDocument, xPathString: string, error: amGeneralError.am_general.A_Error) : Array<amGeneralXmlNode.am_general.AE_XmlNode>;
    getNativeXmlXPath_Nodes(xmlObject: any, xPathString: string, error: amGeneralError.am_general.A_Error) : Array<amGeneralXmlNode.am_general.AE_XmlNode>;

    getXmlXPath_FirstNodeText(aXmlDocument: amGeneralXmlDocument.am_general.AE_XmlDocument, xPathString: string, error: amGeneralError.am_general.A_Error) : string;
    getNativeXmlXPath_FirstNodeText(xmlObject: any, xPathString: string, error: amGeneralError.am_general.A_Error) : string;

    getXmlXPath_FirstNodeText_FromNode(aXmlNode: amGeneralXmlNode.am_general.AE_XmlNode, xPathString: string, error: amGeneralError.am_general.A_Error) : string;
    getNativeXmlXPath_FirstNodeText_FromNode(xmlObject: any, xPathString: string, error: amGeneralError.am_general.A_Error) : string;
  }


} 