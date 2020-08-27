
import amTransversalServicesIXmlConfiguratorMain   = require("../../../../../app/ts/abstract/am_transversalservices/a_xmlconfigurator/I_XmlConfigurator_Main");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import rmTransversalServicesXmlConfiguratorServer = require("../../../../../app/ts/reusable/rm_transversalservices/r_xmlconfigurator_server/R_XmlConfigurator_Server");

export module rm_transversalservices
{
  export class IImpl_XmlConfiguratorMain_Server implements amTransversalServicesIXmlConfiguratorMain.am_transversalservices.I_XmlConfigurator_Main
  {
    //----------- properties
    _name: string;  


    //----------- owner
    _owner: rmTransversalServicesXmlConfiguratorServer.rm_transversalservices.R_XmlConfigurator_Server;

    //----------- constructor 
    constructor(owner: rmTransversalServicesXmlConfiguratorServer.rm_transversalservices.R_XmlConfigurator_Server)  
    {
      this._owner = owner;  
    }

    //----------------------
    public getXmlJsonObject(fileStorage : string, fileFolder: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback): void
    {

    }
    //----------------------
    /*
    public log(logMsgLevel: number, logMsg: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      this._owner._aTargetLog._iLogMain.log(logMsgLevel, logMsg, error, context, callback);        
    }*/

  }
} 