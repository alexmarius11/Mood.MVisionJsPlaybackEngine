import amGeneralIXMLConfiguratorMain = require("../../../../../app/ts/abstract/am_transversalservices/a_xmlconfigurator/I_XmlConfigurator_Main");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import rmTransversalServicesXmlConfiguratorClient = require("../../../../../app/ts/reusable/rm_transversalservices/r_xmlconfigurator_client/R_XmlConfigurator_Client");


export module rm_transversalservices
{
  export class IImpl_XmlConfiguratorMain_Client implements amGeneralIXMLConfiguratorMain.am_transversalservices.I_XmlConfigurator_Main
  {
    //----------- properties
    _name: string;  

    //----------- owner
    _owner: rmTransversalServicesXmlConfiguratorClient.rm_transversalservices.R_XmlConfigurator_Client;

    //----------- constructor 
    constructor(owner: rmTransversalServicesXmlConfiguratorClient.rm_transversalservices.R_XmlConfigurator_Client)  
    {
      this._owner = owner;  
    }

    //----------------------
    public getXmlJsonObject(fileStorage : string, fileFolder: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback): void
    {
      var callId = this._owner.addCallback(context, callback);
      var params = {
        "fileStorage" : fileStorage,
        "fileFolder"  : fileFolder,
        "fileName"    : fileName,
      };
      this._owner._socket.emit('xmlconfigurator.main.getxmljsonobject', params);                
    }

    //----------------------
    /*
    public log(logMsgLevel: number, logMsg: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      var callId = this._owner.addCallback(context, callback);
      var params = {
        "logMsgLevel" : logMsgLevel,
        "logMsg"      : logMsg,
        "callId"      : callId,
      };
      this._owner._socket.emit('log.logmain.log', params);                
    }*/

  }
} 