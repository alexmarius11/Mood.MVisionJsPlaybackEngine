import amTransversalServicesIXmlConfiguratorSetup = require("../../../../../app/ts/abstract/am_transversalservices/a_xmlconfigurator/I_XmlConfigurator_Setup");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");

import amGeneralDateTime   = require("../../../../../app/ts/abstract/am_general/a_datetime/A_DateTime");
import amGeneralTimeZone   = require("../../../../../app/ts/abstract/am_general/a_timezone/A_TimeZone");

import rmTransversalServicesXmlConfiguratorClient = require("../../../../../app/ts/reusable/rm_transversalservices/r_xmlconfigurator_client/R_XmlConfigurator_Client");

export module rm_transversalservices
{
  export class IImpl_XmlConfiguratorSetup_Client implements amTransversalServicesIXmlConfiguratorSetup.am_transversalservices.I_XmlConfigurator_Setup
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

    
    //------------------------------------------------------
    public loadXMLFiles(fileInfoList: Array<amGeneralFileInfo.am_general.A_FileInfo>, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback): void
    {

      var callId = this._owner.addCallback(context, callback);
      var params = {
        fileInfo     : [],
        "callId"     : callId,
      };

      for (var i = 0 ; i < fileInfoList.length ; i++)
      {
         params.fileInfo.push(
              { 
                "_storage"  : fileInfoList[i].getStorage(), 
                "_path"     : fileInfoList[i].getPath(), 
                "_fileName" : fileInfoList[i].getName(), 
              }
          );
      }
      this._owner._socket.emit('xmlconfigurator.setup.loadxmlfiles', params);                
    }

    //------------------------------------
    public loadTextFiles( fileInfoList: Array<amGeneralFileInfo.am_general.A_FileInfo>, error: amGeneralError.am_general.A_Error, 
                          context: amGeneralContext.am_general.A_Context, callback): void
    {
      // to do
    }

  }
} 