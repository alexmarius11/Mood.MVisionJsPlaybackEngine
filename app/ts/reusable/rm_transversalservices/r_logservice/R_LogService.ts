import amGeneralError                          = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralFactoryDescription             = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amTransversalServicesLogService         = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");
import amGeneralContext                        = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralFileInfo                       = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");

import amGeneralService                        = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");

import amTransversalServicesILogMain   = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/I_LogMain");
import amTransversalServicesILogConfig = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/I_LogConfig");

import rmGeneral               = require("../../../../../app/ts/reusable/rm_general/r_service/R_Service");


import amTransversalServicesSDK         = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/A_SDK_JsTV");
import amTransversalServicesUtilsService        = require("../../../../../app/ts/abstract/am_transversalservices/a_utilsservice/A_UtilsService");

import rmTransversalServicesILogMain    = require("../../../../../app/ts/reusable/rm_transversalservices/r_logservice/IImpl_LogMain_R");
import rmTransversalServicesILogConfig  = require("../../../../../app/ts/reusable/rm_transversalservices/r_logservice/IImpl_LogConfig_R");

export module rm_transversalservices
{
  export class R_LogService  extends rmGeneral.rm_general.R_Service 
                             implements amTransversalServicesLogService.am_transversalservices.A_LogService
  {

    LOGMSG_FATALERROR:number  = 1;
    LOGMSG_ERROR:number       = 2;
    LOGMSG_WARNING:number     = 3;
    LOGMSG_INFO:number        = 4;
    LOGMSG_TRACELEVEL1:number = 5;
    LOGMSG_TRACELEVEL2:number = 6;
    LOGMSG_TRACELEVEL3:number = 7;

    //---------- properties
    _fileInfo    : amGeneralFileInfo.am_general.A_FileInfo;
    _fileUrlInfo : amGeneralFileInfo.am_general.A_FileInfo; 

    //---------- interfaces
    _iLogMain   : amTransversalServicesILogMain.am_transversalservices.I_LogMain ;
    _iLogConfig : amTransversalServicesILogConfig.am_transversalservices.I_LogConfig ;

    //----------- composants 
    _aTargetSDK : amTransversalServicesSDK.am_transversalservices.A_SDK_JsTV; 
    _aUtilsService : amTransversalServicesUtilsService.am_transversalservices.A_UtilsService;

    //----------- constructor 
    constructor( aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription, 
                 aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                 aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                 error              : amGeneralError.am_general.A_Error)  
    {  
      super(aFactoryDescription, aServiceContainer, aLogService, error);

      this._fileInfo    = null;
      this._fileUrlInfo = null;

      this._aTargetSDK = null;
      this._aUtilsService = null;
      
      this._iLogMain    = new rmTransversalServicesILogMain.rm_transversalservices.IImpl_LogMain_R(this) ;
      this._iLogConfig  = new rmTransversalServicesILogConfig.rm_transversalservices.IImpl_LogConfig_R(this) ;

      this._aLogService = this;//aLogService;
    }

    //----------------
    public log(logMsgLevel: number, logMsg: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      //var owner = this._owner;
      //-----------------
      //var callback2 = function(ctx: amGeneralContext.am_general.A_Context)
      //{
        //console.log( ctx.getResult);
        //owner._iNotify_SDKFileSystem.notify_readTextFile(fileFullName, error, context, callback) ;
      //}
      //-------------------------
      //2019/06/21 13:39:22  STANDARD    TCCron__loadCronActions                            Exiting loadCronActions.
      //2018/07/18 10:30:03  INFO        Program__Main                                      Environment Update Downloader is starting.
      //2018/07/18 10:30:05  WARNING     Program__Main                                      WARNING - List of File is Empty.
      //2018/07/18 10:30:03  ERROR       Program__getPlaylistInfo                           ERROR getting LastPlaylistUpdate: File D:\moodmedia\playlist\playlist_v5.json doesn t exist
      //--------------------------
      var msgLevel = "";
      if (logMsgLevel == 1)
        msgLevel = "F-ERROR";
      else if (logMsgLevel == 2)
        msgLevel = "ERROR";
      else if (logMsgLevel == 3)  
        msgLevel = "WARNING";
      else if (logMsgLevel == 4)  
        msgLevel = "INFO";
      else if (logMsgLevel == 5)  
        msgLevel = "TRACE L1";
      else if (logMsgLevel == 6)  
        msgLevel = "TRACE L2";
      else if (logMsgLevel == 7)  
        msgLevel = "TRACE L3";

      var format: string = "dd/LL/yyyy HH:mm:ss";
      var locale: string = "default";
      //var strCrtDateTime = this._aUtilsService._iUtilsDateTime.getCrtDateTimeAsISOString();
      //strCrtDateTime = this._aUtilsService._iUtilsDateTime.formatDateTimeFromISO(strCrtDateTime, format, locale);

      var strCrtDateTime = this._aUtilsService._iUtilsDateTime.getCrtDateTimeAsString("mm/dd/yyyy", "hh:mm:ss") ;
      //this._aUtilsService._iUtilsDateTime.formatDateTimeFromISO(fList[i]. _creationDate, format, locale);
      var message = "";
      if (logMsgLevel > 0)
        message = strCrtDateTime + "\t\t"+  msgLevel + "\t\t"+ logMsg + "\r\n";
      else  
        message = logMsg;
      var callback2 = function callback2(ctx)
      {
        ctx.setResult(message);
        if (callback != null)
          callback (ctx);
      } 
      this._aTargetSDK._iSDKFileSystem.appendTextToFile(this._fileInfo.getStorage(), this._fileInfo.getPath(), this._fileInfo.getName(), 
                                                        message, error, context, callback2) ;
    }


    //------------------   
    public setFileInfo( fileInfo : amGeneralFileInfo.am_general.A_FileInfo,  fileUrlInfo : amGeneralFileInfo.am_general.A_FileInfo, 
                        error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void     
    {
        if ((fileInfo === null) && (fileUrlInfo===null))
        {
          context.setError(error);
          if (context.getError() != null)
            context.getError().setError(1501,"r_logservice:logconfig error 1501. setFileInfo is null");
          if (callback != null)
            callback(context);
        }
        this._fileInfo     = fileInfo;
        this._fileUrlInfo  = fileUrlInfo;

        var callback2 = function callback2(ctx)
        {
          if (callback != null)
            callback (ctx);
        } 
        console.log(this._fileInfo.getStorage() + " " + this._fileInfo.getPath());
        this._aTargetSDK._iSDKFileSystem.createFolder2(this._fileInfo.getStorage(), this._fileInfo.getPath(), error, context, callback2) ;
    }

    //-----------------------------------------
    public setTargetService(targetService: amGeneralService.am_general.A_Service)
    {
      this._aTargetSDK = <amTransversalServicesSDK.am_transversalservices.A_SDK_JsTV>targetService;
    }
    
  }
} 