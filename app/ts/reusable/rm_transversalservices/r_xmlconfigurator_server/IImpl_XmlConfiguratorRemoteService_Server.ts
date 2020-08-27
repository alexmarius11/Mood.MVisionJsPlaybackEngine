import amGeneralIRemoteService = require("../../../../../app/ts/abstract/am_general/a_service/I_RemoteService");

import amGeneralError  = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralService = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");
import amGeneralShaProperties = require("../../../../../app/ts/abstract/am_general/a_shaproperties/A_ShaProperties");
import amConfigurationServicesServiceLocator  = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");

import rmTransversalServicesXmlConfiguratorServer = require("../../../../../app/ts/reusable/rm_transversalservices/r_xmlconfigurator_server/R_XmlConfigurator_Server");
                                                     

//import amGeneralDateTime = require("../app/ts/abstract/am_general/a_datetime/A_DateTime");
//import amGeneralTimeZone = require("../app/ts/abstract/am_general/a_timezone/A_TimeZone");

import rmConfigurationServicesServiceLocator   = require("../../../../../app/ts/reusable/rm_configurationservices/r_servicelocator/R_ServiceLocator");

export module rm_transversalservices
{
  export class IImpl_XmlConfiguratorRemoteService_Server implements amGeneralIRemoteService.am_general.I_RemoteService
  {
    _name: string;    

    //----------- owner
    _owner: rmTransversalServicesXmlConfiguratorServer.rm_transversalservices.R_XmlConfigurator_Server;

    //----------- constructor 
    constructor(owner: rmTransversalServicesXmlConfiguratorServer.rm_transversalservices.R_XmlConfigurator_Server)  
    {
      this._owner = owner;  
    }

    //------------------------------
    public send(socket: any, params: any) : void
    {
    }

    //------------------------------
    public receive(socket: any, params: any) : void
    {
      // whenever we receive a 'message' we log it out
      var owner = this._owner;
      //------------------------------------------      
      socket.on('xmlconfigurator.main.getxmljsonobject', function(parameters: any) 
      {
        var context:amGeneralContext.am_general.A_Context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
        var error:amGeneralError.am_general.A_Error = owner._aServiceLocator._iEntityCreation.createDefaultError();       
        console.log("xmlconfigurator.main.getxmljsonobject" + JSON.stringify(parameters));
        var callback = function(ctx: amGeneralContext.am_general.A_Context)
        {
           socket.emit("xmlconfigurator.main.ret-getxmljsonobject", ctx);
        }
        context.setCallId(parameters.callId);
        owner._iXmlConfiguratorMain.getXmlJsonObject(parameters.fileStorage, parameters.fileFolder, parameters.fileName, error, context, callback);
      });  
      //------------------------------------------      
      socket.on('xmlconfigurator.setup.loadxmlfiles', function(parameters: any) 
      {
        var context:amGeneralContext.am_general.A_Context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
        var error:amGeneralError.am_general.A_Error = owner._aServiceLocator._iEntityCreation.createDefaultError();       
        console.log("xmlconfigurator.setup.loadxmlfiles" + JSON.stringify(parameters));
        var callback = function(ctx: amGeneralContext.am_general.A_Context)
        {
           socket.emit("xmlconfigurator.setup.ret-loadxmlfiles", ctx);
        }
        context.setCallId(parameters.callId);
        var fileInfoList = new Array<amGeneralFileInfo.am_general.A_FileInfo>();
        var crtFileInfo = null;
        for (var i=0; parameters.fileInfo.lenth; i++)
        {
          crtFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
          crtFileInfo.setStorage(parameters.fileInfo._storage);
          crtFileInfo.setPath(parameters.fileInfo._path);
          crtFileInfo.setFileName(parameters.fileInfo._fileName);
          fileInfoList.push(crtFileInfo);
        }
        owner._iXmlConfiguratorSetup.loadXMLFiles(fileInfoList, error, context, callback);
      });  

      //socket.on("message", function(message: any) {
      //  console.log(message);
      //  socket.emit("ret-get-message", message);
      //});
      /*
      //------------------------------------------      
      socket.on('log.logmain.log', function(parameters: any) 
      {
        var context:amGeneralContext.am_general.A_Context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
        var error:amGeneralError.am_general.A_Error = owner._aServiceLocator._iEntityCreation.createDefaultError();       
        console.log("log.logmain.log" + JSON.stringify(parameters));
        var callback = function(ctx: amGeneralContext.am_general.A_Context)
        {
           socket.emit("log.logmain.ret-log", ctx);
        }
        context.setCallId(parameters.callId);
        owner._iLogMain.log(parameters.logMsgLevel, parameters.logMsg, error, context, callback);
      });  
      //------------------------------------------      
      socket.on('log.logconfig.setfileinfo', function(parameters: any) 
      {
        console.log("log.logconfig.setfileinfo" + JSON.stringify(parameters));
        var context:amGeneralContext.am_general.A_Context           = owner._aServiceLocator._iEntityCreation.createDefaultContext();
        var error:amGeneralError.am_general.A_Error                 = owner._aServiceLocator._iEntityCreation.createDefaultError();       
        var aLogFileInfo:amGeneralFileInfo.am_general.A_FileInfo    = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
        var aLogFileUrlInfo:amGeneralFileInfo.am_general.A_FileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
        aLogFileInfo.setStorage(parameters.logStorage);
        aLogFileInfo.setPath(parameters.logFolder); 
        aLogFileInfo.setName(parameters.logFile);
        aLogFileUrlInfo.setStorage(parameters.logUrlStorage);
        aLogFileUrlInfo.setPath(parameters.logUrlFolder);
        aLogFileUrlInfo.setName(parameters.logUrlFile);        
        var callback = function(ctx: amGeneralContext.am_general.A_Context)
        {
           socket.emit("log.logconfig.ret-setfileinfo", ctx);
        }
        context.setCallId(parameters.callId);
        owner._iLogConfig.setFileInfo(aLogFileInfo, aLogFileUrlInfo, error, context, callback);
      });  */
    }
    
    //-----------------------------------
    public startup_withConnectClient(remoteServerUrl: string) : void
    {
    }

    //-----------------------------------
    public startup(socket: any) : void
    {
    }
    
  }
} 