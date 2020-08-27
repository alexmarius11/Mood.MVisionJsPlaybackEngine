import amGeneralFactoryDescription             = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amTransversalServicesLogService         = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import amTransversalServicesSDKJsTV            = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/A_SDK_JsTV");
import amTransversalServicesUtilsService       = require("../../../../../app/ts/abstract/am_transversalservices/a_utilsservice/A_UtilsService");

import amTransversalServices  = require("../../../../../app/ts/abstract/am_transversalservices/a_xmlconfigurator/A_XmlConfigurator");
import amTransversalServicesIXmlConfiguratorMain  = require("../../../../../app/ts/abstract/am_transversalservices/a_xmlconfigurator/I_XmlConfigurator_Main");
import amTransversalServicesIXmlConfiguratorSetup = require("../../../../../app/ts/abstract/am_transversalservices/a_xmlconfigurator/I_XmlConfigurator_Setup");

import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");
import amGeneralXmlJsonObject = require("../../../../../app/ts/abstract/am_general/a_xmljsonobject/A_XmlJsonObject");

import amGeneralXmlDocument = require("../../../../../app/ts/abstract/am_general/ae_xmlobjects/AE_XmlDocument");

import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import rmGeneral               = require("../../../../../app/ts/reusable/rm_general/r_service/R_Service");
import rmTransversalServicesIXmlConfiguratorMain  = require("../../../../../app/ts/reusable/rm_transversalservices/r_xmlconfigurator/IImpl_XmlConfigurator_Main_R");
import rmTransversalServicesIXmlConfiguratorSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_xmlconfigurator/IImpl_XmlConfigurator_Setup_R");


import amTransversalServices4 = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/A_SDK_JsTV");
//------------
export module rm_transversalservices
{
  export class R_XmlConfigurator  extends rmGeneral.rm_general.R_Service 
                                  implements amTransversalServices.am_transversalservices.A_XmlConfigurator
  {
    //---------- properties
    _fileInfoList: Array<amGeneralFileInfo.am_general.A_FileInfo>;
    _xmlDocumentList: Array<amGeneralXmlDocument.am_general.AE_XmlDocument>;

    //---------- interfaces
    _iXmlConfiguratorMain  : amTransversalServicesIXmlConfiguratorMain.am_transversalservices.I_XmlConfigurator_Main ;
    _iXmlConfiguratorSetup : amTransversalServicesIXmlConfiguratorSetup.am_transversalservices.I_XmlConfigurator_Setup ;
    
    //----------- composants 
    _aLogService : amTransversalServicesLogService.am_transversalservices.A_LogService; 
    _aSDKJsTV    : amTransversalServices4.am_transversalservices.A_SDK_JsTV; 

    //----------- constructor 
    constructor( aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription, 
                 aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                 aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                error              : amGeneralError.am_general.A_Error)  
    {      
      super(aFactoryDescription, aServiceContainer, aLogService, error);

      this._fileInfoList = null;
      this._xmlDocumentList = null;
      //this._aSDKJsTV = aSDKJsTV;
      //this._aLogService = aLogService;

      this._iXmlConfiguratorMain  = new rmTransversalServicesIXmlConfiguratorMain.rm_transversalservices.IImpl_XmlConfigurator_Main_R(this) ;
      this._iXmlConfiguratorSetup = new rmTransversalServicesIXmlConfiguratorSetup.rm_transversalservices.IImpl_XmlConfigurator_Setup_R(this) ;
    }


    //-------------------
    public loadXMLFiles(fileInfoList: Array<amGeneralFileInfo.am_general.A_FileInfo>, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback): void
    {
      this._fileInfoList = fileInfoList;
      this._xmlDocumentList = new Array<amGeneralXmlDocument.am_general.AE_XmlDocument>();

      var self = this;
      var nbXmlFiles:number = this._fileInfoList.length;
      var crtFileIdx = 0;
      //---
      var loadOneXmlFile = function loadOneXmlFile( crtFileIdx: number, nbFiles: number, fileInfoLst: Array<amGeneralFileInfo.am_general.A_FileInfo>, 
                                                    xmlDocumentLst: Array<amGeneralXmlDocument.am_general.AE_XmlDocument>,
                                                    err: amGeneralError.am_general.A_Error, ctx: amGeneralContext.am_general.A_Context, callbck): void
      {
        //-------- succes all the files were loaded
        if (crtFileIdx + 1 > nbFiles)
        {
          context.setResult("Successfully loaded all xml files");
          console.log( "Successfully loaded all xml files"); 
          context.setError(error);
          //document.getElementById("renderer.message").innerHTML += "<p>success: " + crtFileIdx  + "</p>";
          if (callback != null)
            callback(context);     
          return ; 
        }
        //---------------------------
        var crtFileInfo = fileInfoLst[crtFileIdx];
        var fileFullName = crtFileInfo.getStorage() + crtFileInfo.getPath() + crtFileInfo.getName();
        var callbackReadAndParseXMLFile2 = function callbackReadAndParseXMLFile2(ctx2)
        {
          if (ctx2.isError())
          {
            //console.log( 'Error loading xml file ' + fileFullName + JSON.stringify(err)); 
            // add a log tracking 
            context.setError(error);
            context.setObjectResult(null);
            //if (context.getError() != null)
              //context.getError().setError(7001, 'Error reading file ' + fileFullName + JSON.stringify(err));
            //document.getElementById("renderer.message").innerHTML += "<p>cannot parse xml files: " + fileFullName + JSON.stringify(ctx2._error) + "</p>";
            if (callback != null)
              callback(context);  
            return;  
          }  
          //-------------- store a new xml-json object
          var aXmlDocument:amGeneralXmlDocument.am_general.AE_XmlDocument = self._aServiceLocator._iEntityCreation.createDefaultXmlDocument(error);
          var xmlNativeDoc = ctx2.getObjectResult();
          aXmlDocument.setNativeXmlDocument(xmlNativeDoc);
          self._xmlDocumentList.push(aXmlDocument);
          console.log( 'Succesfuly loaded xml file ' + fileFullName ); 
          // add a log tracking 
          //------------- load the next xml file 
          return loadOneXmlFile(++crtFileIdx, nbXmlFiles, fileInfoList, xmlDocumentLst, err, ctx2, callbck);
        }


        var callbackReadTextFile2 = function callbackReadTextFile2(ctx3)
        {
          if (ctx3.isError())
          {
            //console.log( 'Error loading xml file ' + fileFullName + JSON.stringify(err)); 
            // add a log tracking 
            context.setError(error);
            context.setObjectResult(null);
            //if (context.getError() != null)
              //context.getError().setError(7001, 'Error reading file ' + fileFullName + JSON.stringify(err));
            //document.getElementById("renderer.message").innerHTML += "<p>cannot read xml files: " + fileFullName + JSON.stringify(ctx3._error) + "</p>";
            if (callback != null)
              callback(context);  
            return;  
          }  
          var xmlString = ctx3._result;
          //document.getElementById("renderer.message").innerHTML += "<p>" + xmlString  + "</p>";
          //self._aSDKService._iSDKFileSystem.parseXMLString(xmlString, error, context, callbackReadAndParseXMLFile2);
          self._aUtilsService._iUtilsXMLJson.parseXMLString(xmlString, error, context, callbackReadAndParseXMLFile2);
        }

        context.setRemoteCallback(true);
        //document.getElementById("renderer.message").innerHTML += "<p>start read xml files: " + fileFullName  + "</p>";
        self._aSDKService._iSDKFileSystem.readTextFile2
                                          ( crtFileInfo.getStorage(), crtFileInfo.getPath(), crtFileInfo.getName(), 
                                          error, context, callbackReadTextFile2 ) ; 

        /*
        self._aSDKService._iSDKFileSystem.readTextFile2
                                          ( crtFileInfo.getStorage(), crtFileInfo.getPath(), crtFileInfo.getName(), 
                                          error, context, callbackReadAndParseXMLFile2) ; 
        */
        /*
        self._aSDKService._iSDKFileSystem.readAndParseXMLFile2
                ( crtFileInfo.getStorage(), crtFileInfo.getPath(), crtFileInfo.getName(), 
                  crtFileInfo.getUrlStorage(), crtFileInfo.getUrlPath(), crtFileInfo.getUrlName(),                 
                  error, context, callbackReadAndParseXMLFile2) ; 
          */        

      }

      loadOneXmlFile(crtFileIdx, nbXmlFiles, fileInfoList, this._xmlDocumentList, error, context, callback);
    }



    //---------------------------
    public getXmlJsonObject(fileStorage : string, fileFolder: string, fileName: string, 
                            error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback): void
    {
      if (this._xmlDocumentList == null)
      {
        console.log( 'Error getting xml file content of the file: xml files are not loaded'); 
        // add a log tracking 
        context.setError(error);
        context.setObjectResult(null);
        if (context.getError() != null)
          context.getError().setError(7502, 'Error getting xml file content of the file: xml files are not loaded');
        if (callback != null)
          callback(context);  
        return;  
      }
      var foundXmlDocument: amGeneralXmlDocument.am_general.AE_XmlDocument = null;
      var crtXmlDocument: amGeneralXmlDocument.am_general.AE_XmlDocument = null;
      var crtFileInfo : amGeneralFileInfo.am_general.A_FileInfo = null;
      var fileFullName = fileStorage + fileFolder + fileName; 

      var i:number = 0;
      for (i=0; i< this._xmlDocumentList.length; i++)
      {
        crtFileInfo = this._fileInfoList[i];
        crtXmlDocument = this._xmlDocumentList[i];
        if ( (crtFileInfo.getStorage() == fileStorage) && (crtFileInfo.getPath() == fileFolder) && (crtFileInfo.getName() == fileName))
        {
          foundXmlDocument = crtXmlDocument;
          break;
        }
      }
      //---------- error xml json file not found
      if (foundXmlDocument == null)
      {
        console.log( 'Error getting xml file content of the file ' + fileFullName ); 
        // add a log tracking 
        context.setError(error);
        context.setObjectResult(null);
        if (context.getError() != null)
          context.getError().setError(7501, 'Error getting xml file content of the file ' + fileFullName );
        if (callback != null)
          callback(context);  
        return;  
      }

      //--------------
      context.setObjectResult(foundXmlDocument);
      context.setResult("Successfully get the xml file content of the file " + fileFullName );
      context.setError(error);
      if (callback != null)
        callback(context);       
    }
    

    //========================================================================
    public loadTextFiles( fileInfoList: Array<amGeneralFileInfo.am_general.A_FileInfo>, error: amGeneralError.am_general.A_Error, 
                          context: amGeneralContext.am_general.A_Context, callback): void
    {
      this._fileInfoList = fileInfoList;
      this._xmlDocumentList = new Array<amGeneralXmlDocument.am_general.AE_XmlDocument>();

      var self = this;
      var nbXmlFiles:number = this._fileInfoList.length;
      var crtFileIdx = 0;
      //---
      var loadOneTextFile = function loadOneTextFile( crtFileIdx: number, nbFiles: number, fileInfoLst: Array<amGeneralFileInfo.am_general.A_FileInfo>, 
                                                      xmlDocumentLst: Array<amGeneralXmlDocument.am_general.AE_XmlDocument>,
                                                      err: amGeneralError.am_general.A_Error, ctx: amGeneralContext.am_general.A_Context, callbck): void
      {
        //-------- succes all the files were loaded
        if (crtFileIdx + 1 > nbFiles)
        {
          context.setResult("Successfully loaded all xml files");
          console.log( "Successfully loaded all xml files"); 
          context.setError(error);
          //document.getElementById("renderer.message").innerHTML += "<p>success: " + crtFileIdx  + "</p>";
          //document.getElementById("rend.message").innerHTML += "<p>start final callback "  +  "</p>";  
          if (callback != null)
            callback(context);     
          return ; 
        }
        //---------------------------
        var crtFileInfo = fileInfoLst[crtFileIdx];
        var fileFullName = crtFileInfo.getStorage() + crtFileInfo.getPath() + crtFileInfo.getName();
        
        var callbackReadTextFile2 = function callbackReadTextFile2(ctx3)
        {
          if (ctx3.isError())
          {
            //console.log( 'Error loading xml file ' + fileFullName + JSON.stringify(err)); 
            // add a log tracking 
            context.setError(error);
            context.setObjectResult(null);
            //if (context.getError() != null)
              //context.getError().setError(7001, 'Error reading file ' + fileFullName + JSON.stringify(err));
            //document.getElementById("renderer.message").innerHTML += "<p>cannot read xml files: " + fileFullName + JSON.stringify(ctx3._error) + "</p>";
            //document.getElementById("rend.message").innerHTML += "<p>callbackReadTextFile2: "  + JSON.stringify(ctx3._error) + "</p>";  
            if (callback != null)
              callback(context);  
            return;  
          }  
          //var xmlString = ctx3._result;
          //document.getElementById("renderer.message").innerHTML += "<p>" + xmlString  + "</p>";          
          //-------------- store a new xml-json-text object
          //document.getElementById("rend.message").innerHTML += "<p>start createDefaultXmlDocument "  +  "</p>";  
          var aXmlDocument:amGeneralXmlDocument.am_general.AE_XmlDocument = self._aServiceLocator._iEntityCreation.createDefaultXmlDocument(error);
          var xmlNativeDoc = ctx3.getResult();//ctx3.getObjectResult();
          aXmlDocument.setNativeXmlDocument(xmlNativeDoc);
          self._xmlDocumentList.push(aXmlDocument);
          console.log( 'Succesfuly loaded xml-text file ' + fileFullName ); 
          // add a log tracking 
          //------------- load the next xml file 
          //document.getElementById("rend.message").innerHTML += "<p>start load one text file "  +  "</p>";  
          return loadOneTextFile(++crtFileIdx, nbXmlFiles, fileInfoList, xmlDocumentLst, err, ctx3, callbck);

          //self._aUtilsService._iUtilsXMLJson.parseXMLString(xmlString, error, context, callbackReadAndParseXMLFile2);
        }

        context.setRemoteCallback(true);
        //document.getElementById("renderer.message").innerHTML += "<p>start read xml-text files: " + fileFullName  + "</p>";
        //document.getElementById("rend.message").innerHTML += "<p>start _iSDKFileSystem.readTextFile2: "  + "</p>";  
        self._aSDKService._iSDKFileSystem.readTextFile2
                                          ( crtFileInfo.getStorage(), crtFileInfo.getPath(), crtFileInfo.getName(), 
                                          error, context, callbackReadTextFile2 ) ; 

      }

      loadOneTextFile(crtFileIdx, nbXmlFiles, fileInfoList, this._xmlDocumentList, error, context, callback);
    }

  }
} 