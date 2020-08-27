import amTransversalServicesIXmlConfiguratorSetup = require("../../../../../app/ts/abstract/am_transversalservices/a_xmlconfigurator/I_XmlConfigurator_Setup");

import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");
import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import amGeneralDateTime   = require("../../../../../app/ts/abstract/am_general/a_datetime/A_DateTime");
import amGeneralTimeZone   = require("../../../../../app/ts/abstract/am_general/a_timezone/A_TimeZone");

import rmTransversalServicesXmlConfiguratorServer = require("../../../../../app/ts/reusable/rm_transversalservices/r_xmlconfigurator_server/R_XmlConfigurator_Server");

export module rm_transversalservices
{
  export class IImpl_XmlConfiguratorSetup_Server implements amTransversalServicesIXmlConfiguratorSetup .am_transversalservices.I_XmlConfigurator_Setup
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

    //-------------------------------------
    public loadXMLFiles(fileInfoList: Array<amGeneralFileInfo.am_general.A_FileInfo>, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback): void
    {
      this._owner._aTargetXmlConfigurator._iXmlConfiguratorSetup.loadXMLFiles(fileInfoList, error, context, callback);        
    }

    //------------------------------------
    public loadTextFiles( fileInfoList: Array<amGeneralFileInfo.am_general.A_FileInfo>, error: amGeneralError.am_general.A_Error, 
                          context: amGeneralContext.am_general.A_Context, callback): void
    {
      this._owner._aTargetXmlConfigurator._iXmlConfiguratorSetup.loadTextFiles(fileInfoList, error, context, callback);        
    }

    //--------------------------
    /*
    public setFileInfo(  fileInfo : amGeneralFileInfo.am_general.A_FileInfo,  fileUrlInfo : amGeneralFileInfo.am_general.A_FileInfo, 
                         error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void     
    {
      this._owner._aTargetLog._iLogConfig.setFileInfo(fileInfo, fileUrlInfo, error, context, callback);        
    }*/

    
  }
} 