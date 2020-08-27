//declare var module: any;
//(module).exports = action_displayFile;

declare function require(moduleNames: string[], onLoad: (...args: any[]) => void): void;
//--------------------------------------------
//import rmConfigurationServicesServiceContainer = require("../app/ts/reusable/rm_configurationservices/r_servicecontainer/R_ServiceContainer");
//rmConfigurationServicesServiceContainer.rm_configurationservices.R_ServiceContainer.startup();
//--------------------------------------------
import amTransversalServicesSDKJsTV       = require("../app/ts/abstract/am_transversalservices/a_sdk_jstv/A_SDK_JsTV");
import amTransversalServicesSDKConnector  = require("../app/ts/abstract/am_transversalservices/a_sdk_connector/A_SDK_Connector");
import amRenderingServicesSDKRenderer   = require("../app/ts/abstract/am_renderingservices/a_sdkrenderer/A_SDKRenderer");
import amConfigurationServicesServiceLocator   = require("../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");
import amTransversalServicesUtilsService  = require("../app/ts/abstract/am_transversalservices/a_utilsservice/A_UtilsService");

import amGeneralContext = require("../app/ts/abstract/am_general/a_context/A_Context");

import amGeneralError    = require("../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralFileInfo = require("../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");
import amGeneralDateTime = require("../app/ts/abstract/am_general/a_datetime/A_DateTime");
import amGeneralTimeZone = require("../app/ts/abstract/am_general/a_timezone/A_TimeZone");

import amGeneralXmlDocument = require("../app/ts/abstract/am_general/ae_xmlobjects/AE_XmlDocument");

import rmConfigurationServicesServiceLocator   = require("../app/ts/reusable/rm_configurationservices/r_servicelocator/R_ServiceLocator");

import rmodSDKClient   = require("../app/ts/reusable/rm_transversalservices/r_sdk_client/R_SDK_Client");
import rmodSDKRenderer = require("../app/ts/reusable/rm_renderingservices/r_sdkrenderer/R_SDKRenderer");
import rmodSDKConnector = require("../app/ts/reusable/rm_transversalservices/r_sdk_connector/R_SDK_Connector");
//import nmodSDKWebOS = require("../app/ts/native/nm_transversalservices/n_sdk_webos/N_SDK_WebOS");
//import nmodSDKTizen = require("../app/ts/native/nm_transversalservices/n_sdk_tizen/N_SDK_Tizen");
import rmodUtilsService = require("../app/ts/reusable/rm_transversalservices/r_utilsservice/R_UtilsService");

import amTransversalServicesLogService   = require("../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");
import amTransversalServicesLogConnector = require("../app/ts/abstract/am_transversalservices/a_log_connector/A_Log_Connector");
import amRenderingServicesLogRenderer    = require("../app/ts/abstract/am_renderingservices/a_logrenderer/A_LogRenderer");

import rmodLogClient   = require("../app/ts/reusable/rm_transversalservices/r_log_client/R_Log_Client");
import rmodLogRenderer = require("../app/ts/reusable/rm_renderingservices/r_logrenderer/R_LogRenderer");
import rmodLogConnector = require("../app/ts/reusable/rm_transversalservices/r_log_connector/R_Log_Connector");

//--- the service creation
import amTransversalServicesXmlConfigurator  = require("../app/ts/abstract/am_transversalservices/a_xmlconfigurator/A_XmlConfigurator");
import rmodXmlConfigurator        = require("../app/ts/reusable/rm_transversalservices/r_xmlconfigurator/R_XmlConfigurator"); //temp
import rmodSDKGeneralService      = require("../app/ts/reusable/rm_transversalservices/r_sdk_jstv/R_SDK_JsTV"); //temp
import amPlaybackHardwareSettings = require("../app/ts/abstract/am_playback/a_hardwaresettings/A_HardwareSettings"); 
import amPlaybackOpeningHours     = require("../app/ts/abstract/am_playback/a_openinghours/A_OpeningHours"); 
import amPlaybackDayOpeningHours   = require("../app/ts/abstract/am_playback/a_openinghours/A_DayOpeningHours"); 
import amPlaybackScreenSaverConfig = require("../app/ts/abstract/am_playback/ae_screensaverconfig/AE_ScreenSaverConfig"); 
import amPlaybackGlobalConfig  = require("../app/ts/abstract/am_playback/ae_playbackglobalconfig/AE_PlaybackGlobalConfig");

import rmodXmlConfiguratorClient   = require("../app/ts/reusable/rm_transversalservices/r_xmlconfigurator_client/R_XmlConfigurator_Client");
//import amTransversalServicesLogConnector = require("../app/ts/abstract/am_transversalservices/a_log_connector/A_Log_Connector");
//import amRenderingServicesLogRenderer    = require("../app/ts/abstract/am_renderingservices/a_logrenderer/A_LogRenderer");
//import rmodLogRenderer = require("../app/ts/reusable/rm_renderingservices/r_logrenderer/R_LogRenderer");
//import rmodLogConnector = require("../app/ts/reusable/rm_transversalservices/r_log_connector/R_Log_Connector");


//=======================================
// renderers and controllers - new
//=======================================
import amPlaylistController  = require("../app/ts/abstract/am_coreservices/a_playlistcontroller/A_PlaylistController");
import amRenderingController  = require("../app/ts/abstract/am_coreservices/a_renderingcontroller/A_RenderingController");
import amPlaylistControllerConfig  = require("../app/ts/abstract/am_coreservices/a_playlistcontroller/AE_PlaylistControllerConfig");
import amRenderingControllerConfig  = require("../app/ts/abstract/am_coreservices/a_renderingcontroller/AE_RenderingControllerConfig");

//=======================================
// renderers and controllers - new 2
//=======================================
import amImageDisplayTypeEnum = require("../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_ImageDisplayTypeEnum");
import amMediaTypeEnum = require("../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_MediaTypeEnum");


import rmPlaylistController  = require("../app/ts/reusable/rm_coreservices/r_playlistcontroller/R_PlaylistController");
import rmRenderingController  = require("../app/ts/reusable/rm_coreservices/r_renderingcontroller/R_RenderingController");

// http://127.0.0.1:3000?pls_ip=http://127.0.0.1:3002&pls_storage=/c/&pls_localstorage=c:/&mf_ip=http://127.0.0.1:9080&mf_storage=/c/&mf_localstorage=c:/&
// http://192.168.0.222:3000?pls_ip=http://192.168.0.222:3000&pls_storage=/c/&pls_localstorage=c:/&mf_ip=http://192.168.0.222:9080&mf_storage=/c/&mf_localstorage=c:/&pls_name=playlist_v5.json.simple
//--
var url = new URL(location.href)
var callerHostName = url.hostname;
var callerPort = url.port;
var callerProtocol = url.protocol;
var callerUrl = location.href;
//alert("callerHost : " + callerHostName);
//alert("callerPort : " + callerPort);
//alert("callerProtocol : " + callerProtocol);

var defaultUrl = callerProtocol + "//" + callerHostName + ":" + callerPort;
var bUseDomain = true;
if ((callerHostName.charAt(0) >= "1") && (callerHostName.charAt(0) <= "9"))
  bUseDomain = false;
if (callerHostName == "localhost")
  bUseDomain = false;
//alert("bUseDomain : " + bUseDomain);
if ((callerPort != null) && (callerPort == ""))
{
  defaultUrl = callerProtocol + "//" + callerHostName;
}
//----------
var defaultMediaFilePort = 9080;
if (callerProtocol == "https:")
{
  if (bUseDomain)
    defaultMediaFilePort = 9082;
  else
    defaultMediaFilePort = 9081;
}
var defaultMediaFileUrl = callerProtocol + "//" + callerHostName + ":" + defaultMediaFilePort;

if (callerProtocol == "file:")
{
  defaultUrl          = "http://127.0.0.1:3000";
  defaultMediaFileUrl = "http://127.0.0.1:9080";;
}
//=======================================
var getOS = function () {
  var nVer = navigator.appVersion;
  var nAgt = navigator.userAgent;
  var osVersion:any = "unknown";
  var os:any = "unknown";
  // system

  var clientStrings = [
      { s: 'Windows 3.11', r: /Win16/ },
      { s: 'Windows 95', r: /(Windows 95|Win95|Windows_95)/ },
      { s: 'Windows ME', r: /(Win 9x 4.90|Windows ME)/ },
      { s: 'Windows 98', r: /(Windows 98|Win98)/ },
      { s: 'Windows CE', r: /Windows CE/ },
      { s: 'Windows 2000', r: /(Windows NT 5.0|Windows 2000)/ },
      { s: 'Windows XP', r: /(Windows NT 5.1|Windows XP)/ },
      { s: 'Windows Server 2003', r: /Windows NT 5.2/ },
      { s: 'Windows Vista', r: /Windows NT 6.0/ },
      { s: 'Windows 7', r: /(Windows 7|Windows NT 6.1)/ },
      { s: 'Windows 8.1', r: /(Windows 8.1|Windows NT 6.3)/ },
      { s: 'Windows 8', r: /(Windows 8|Windows NT 6.2)/ },
      { s: 'Windows NT 4.0', r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/ },
      { s: 'Windows ME', r: /Windows ME/ },
      { s: 'Android', r: /Android/ },
      { s: 'Open BSD', r: /OpenBSD/ },
      { s: 'Sun OS', r: /SunOS/ },
      { s: 'Linux', r: /(Linux|X11)/ },
      { s: 'iOS', r: /(iPhone|iPad|iPod)/ },
      { s: 'Mac OS X', r: /Mac OS X/ },
      { s: 'Mac OS', r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },
      { s: 'QNX', r: /QNX/ },
      { s: 'UNIX', r: /UNIX/ },
      { s: 'BeOS', r: /BeOS/ },
      { s: 'OS/2', r: /OS\/2/ },
      { s: 'Search Bot', r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/ }
  ];
  for (var id in clientStrings) {
      var cs = clientStrings[id];
      if (cs.r.test(nAgt)) {
          os = cs.s;
          break;
      }
  }

  if (/Windows/.test(os)) {
      osVersion = /Windows (.*)/.exec(os)[1];
      os = 'Windows';
  }

  switch (os) {
      case 'Mac OS X':
          osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1];
          break;

      case 'Android':
          osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1];
          break;

      case 'iOS':
          osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
          osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
          break;

  }

  return {
      name: os,
      versionString: osVersion
  };
}  

var os = getOS();

//=======================================
//alert("defaultUrl : " + defaultUrl);
//alert("defaultMediaFileUrl : " + defaultMediaFileUrl );

var display_mode = url.searchParams.get("display_mode");
if (display_mode == null)
  display_mode = "keep-aspect-ratio";

var pls_ip   = url.searchParams.get("pls_ip");
if (pls_ip == null)
  pls_ip = defaultUrl;//"http://127.0.0.1:3000";
//--------------
var pls_storage   = url.searchParams.get("pls_storage");
if (pls_storage == null)
  pls_storage = "/c/";
//--------------
var pls_localstorage   = url.searchParams.get("pls_localstorage");
if (pls_localstorage == null)
  pls_localstorage = "c:/";    
//--
var pls_path = url.searchParams.get("pls_path");
if (pls_path == null)
  pls_path = "/moodmedia/playlist/";
//--
var pls_name = url.searchParams.get("pls_name");
if (pls_name == null)
  pls_name = "playlist_v5.json";

//------------------------------------
var mf_ip   = url.searchParams.get("mf_ip");
if (mf_ip == null)
  mf_ip = defaultMediaFileUrl; //"http://127.0.0.1:9080";
//
var mf_storage   = url.searchParams.get("mf_storage");
if (mf_storage == null)
  mf_storage = "/c/";  
//--
var mf_localstorage   = url.searchParams.get("mf_localstorage");
if (mf_localstorage == null)
  mf_localstorage = "c:/";    
//--
var mf_path = url.searchParams.get("mf_path");
if (mf_path == null)
  mf_path = "/media_files/";


//===================================
// Get Default Storage Names
//===================================

//---------------------------------------------------------------
function _getDefaultResourceStorageName()
{
  return mf_localstorage; //"c:/";
}

//---------------------------------------------------------------
function _getDefaultResourceStorageUrlName()
{
   return mf_ip + mf_storage; //"https://127.0.0.1:9081/c/";//"http://192.168.0.222:9080/c/";//"http://127.0.0.1:9080/c/";
}

//---------------------------------------------------------------
function _getDefaultStorageUrlName()
{
   return pls_ip;  //"https://127.0.0.1:3002";//"http://192.168.0.222:3000"; 
}

//---------------------------------------------------------------
function _getDefaultStorageSameDomainUrlName()
{
   return pls_ip + pls_storage; //"https://127.0.0.1:3002/c/"; //"http://192.168.0.222:3000/c/";//"http://127.0.0.1:3000/c/";//"http://192.168.0.222:3000/ux/"; 
}

/*
//---------------------------------------------------------------
function _getDefaultResourceStorageName()
{
  return "c:/";
}

//---------------------------------------------------------------
function _getDefaultResourceStorageUrlName()
{
   return "https://turda.hopto.org:9081/c/";//"http://127.0.0.1:9080/c/";//"http://192.168.0.222:9080/c/";//"http://127.0.0.1:9080/c/";
}

//---------------------------------------------------------------
function _getDefaultStorageUrlName()
{
   return "https://turda.hopto.org";//"http://127.0.0.1:3000";//"http://192.168.0.222:3000"; 
}

//---------------------------------------------------------------
function _getDefaultStorageSameDomainUrlName()
{
   return "https://turda.hopto.org/c/";//"http://127.0.0.1:3000/c/";//"http://192.168.0.222:3000/ux/"; 
}*/
/*
//---------------------------------------------------------------
function _getDefaultResourceStorageName()
{
  return "c:/";
}

//---------------------------------------------------------------
function _getDefaultResourceStorageUrlName()
{
   return "https://127.0.0.1:9081/c/";//"http://192.168.0.222:9080/c/";//"http://127.0.0.1:9080/c/";
}

//---------------------------------------------------------------
function _getDefaultStorageUrlName()
{
   return "https://127.0.0.1:3002";//"http://192.168.0.222:3000"; 
}

//---------------------------------------------------------------
function _getDefaultStorageSameDomainUrlName()
{
   return "https://127.0.0.1:3002/c/"; //"http://192.168.0.222:3000/c/";//"http://127.0.0.1:3000/c/";//"http://192.168.0.222:3000/ux/"; 
}
*/

/*
// ClientNodeJs
*/
//alert("io url: " + _getDefaultStorageUrlName());

declare var io: any;
var __socket = io(_getDefaultStorageUrlName(), {
  // set to false only if you use self-signed certificate !
  "rejectUnauthorized": false
}); //"http://127.0.0.1:3000");

//-- the variables
var error             : amGeneralError.am_general.A_Error = null;
var aSrvLocator       : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator;
aSrvLocator = rmConfigurationServicesServiceLocator.rm_configurationservices.R_ServiceLocator.startupCreateDefaultServiceLocator(null,error);
var context:amGeneralContext.am_general.A_Context = aSrvLocator._iEntityCreation.createDefaultContext();
var error:amGeneralError.am_general.A_Error = aSrvLocator._iEntityCreation.createDefaultError();

//--- the service creation
var aUtilsService:amTransversalServicesUtilsService.am_transversalservices.A_UtilsService = new rmodUtilsService.rm_transversalservices.R_UtilsService(null, null, null, error);
aUtilsService._iService.setServiceLocator(aSrvLocator);

var aSDKJsTV:amTransversalServicesSDKJsTV.am_transversalservices.A_SDK_JsTV = new rmodSDKClient.rm_transversalservices.R_SDK_Client(null, null, null, error);
aSDKJsTV._iService.setServiceLocator(aSrvLocator);
aSDKJsTV._iService.setUtilsService(aUtilsService);

var aSDKRenderer : amRenderingServicesSDKRenderer.am_renderingservices.A_SDKRenderer = new rmodSDKRenderer.rm_renderingservices.R_SDKRenderer(null, null, null, error);
aSDKRenderer._iService.setServiceLocator(aSrvLocator);
aSDKRenderer._iService.setUtilsService(aUtilsService);

var aSDKConnector:amTransversalServicesSDKConnector.am_transversalservices.A_SDK_Connector = new rmodSDKConnector.rm_transversalservices.R_SDK_Connector(null, null, null, error);
aSDKConnector._iService.setServiceLocator(aSrvLocator);

//--- the services "wiring"
aSDKConnector._iService.setTargetService(aSDKJsTV);
aSDKConnector._iService.setConsumerService(aSDKRenderer._aSDKConsumer);
//-
aSDKRenderer._iService.setTargetService(aSDKConnector);
//-
aSDKJsTV._iService.setConsumerService(aSDKConnector);

//-  the initialization of input parameters 
//aSDKJsTV._iRemoteService.startup_withConnectClient("http://localhost:3000");
aSDKJsTV._iRemoteService.startup(__socket);
//-
var aStartFileFolder:amGeneralFileInfo.am_general.A_FileInfo = aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
var aStartUrlFileFolder:amGeneralFileInfo.am_general.A_FileInfo = aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
var aStartUrlDomainFileFolder:amGeneralFileInfo.am_general.A_FileInfo = aSrvLocator._iEntityCreation.createDefaultFileInfo(error);

aStartFileFolder.setStorage(_getDefaultResourceStorageName()) ;//"c:/");
aStartFileFolder.setPath("");
//aStartFileFolder.setStorage("");
//aStartFileFolder.setPath("./deploy/node.js/10.15.3LTS/public/mood");
 //amGeneralFileInfo.am_general.A_FileInfo();
 //aStartUrlFileFolder.setStorage("");
 //aStartUrlFileFolder.setPath("/mood");
 
 aStartUrlFileFolder.setStorage(_getDefaultResourceStorageUrlName());//"http://127.0.0.1:9080/c/");
 aStartUrlFileFolder.setPath("");

 aStartUrlDomainFileFolder.setStorage(_getDefaultStorageSameDomainUrlName()); //"http://127.0.0.1:3000/c/");
 aStartUrlDomainFileFolder.setPath("");

 aSDKRenderer._iFileSystemRenderer.setStartFolder(aStartFileFolder, aStartUrlFileFolder, aStartUrlDomainFileFolder);


//-----------------------
var errorGlobalConfig:amGeneralError.am_general.A_Error = aSrvLocator._iEntityCreation.createDefaultError();
var aPlaybackGlobalConfig:amPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig = aSrvLocator._iEntityCreation.createDefaultPlaybackGlobalConfig(error);
aPlaybackGlobalConfig.injectDependencies(null, aSrvLocator, null, error ) ;
aPlaybackGlobalConfig. initFolders( "",                                     //defaultAppStorageName //""
                                    "",                                     //defaultAppStorageUrlName       : string,        //""
                                    _getDefaultResourceStorageName(),       //defaultResourceStorageName "c:/";
                                    _getDefaultResourceStorageUrlName(),    //defaultResourceStorageUrlName : "http://127.0.0.1:9080/c/";  
                                    _getDefaultStorageUrlName(),            //defaultStorageUrlName     
                                    _getDefaultStorageSameDomainUrlName(),  //defaultStorageSameDomainUrlName : http://127.0.0.1:3000/c/
                                    "SOC Player",                           //appName: SOC PLAYER
                                    "169",                                  //appVersion: 162
                                    errorGlobalConfig );

aPlaybackGlobalConfig._aPlaylistFile.setPath(pls_path);
aPlaybackGlobalConfig._aPlaylistFile.setName(pls_name);

//=========================================
// Log Creation
//=========================================



//--- the service creation
var aLogService:amTransversalServicesLogService.am_transversalservices.A_LogService = new rmodLogClient.rm_transversalservices.R_Log_Client(null, null, null, error);
aLogService._iService.setServiceLocator(aSrvLocator);

//var aUtilsService:amTransversalServicesUtilsService.am_transversalservices.A_UtilsService = new rmodUtilsService.rm_transversalservices.R_UtilsService(null, null, null, error);
//aUtilsService._iService.setServiceLocator(aSrvLocator);

var aLogRenderer : amRenderingServicesLogRenderer.am_renderingservices.A_LogRenderer = new rmodLogRenderer.rm_renderingservices.R_LogRenderer(null, null, null, error);
aLogRenderer._iService.setServiceLocator(aSrvLocator);
aLogRenderer._iService.setUtilsService(aUtilsService);

var aLogConnector:amTransversalServicesLogConnector.am_transversalservices.A_Log_Connector = new rmodLogConnector.rm_transversalservices.R_Log_Connector(null, null, null, error);
aLogConnector._iService.setServiceLocator(aSrvLocator);

//--- the services "wiring"
aLogConnector._iService.setTargetService(aLogService);
aLogConnector._iService.setConsumerService(aLogRenderer._aLogConsumer);
//-
//aLogRenderer._iService.setTargetService(aLogConnector);
aLogRenderer._iService.setTargetService(aLogService);
//-
//aLogService._iService.setConsumerService(aLogConnector);
aLogService._iService.setConsumerService(aLogRenderer);

//-  the initialization of input parameters 
//aLogService._iRemoteService.startup_withConnectClient("http://localhost:3000");
aLogService._iRemoteService.startup(__socket);
//-
var aStartFileFolder:amGeneralFileInfo.am_general.A_FileInfo = aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
var aStartUrlFileFolder:amGeneralFileInfo.am_general.A_FileInfo = aSrvLocator._iEntityCreation.createDefaultFileInfo(error);

aStartFileFolder.setStorage(_getDefaultResourceStorageName()); //"c:/");
aStartFileFolder.setPath("/moodmedia/logs/"); 
aStartFileFolder.setName("sdkrenderer.log");

aStartUrlFileFolder.setStorage(_getDefaultResourceStorageUrlName());  //http://127.0.0.1:9080/c/");
aStartUrlFileFolder.setPath("/moodmedia/logs/");
aStartUrlFileFolder.setName("sdkrenderer.log");

aLogRenderer._iLogConfigRenderer.setFileInfo(aStartFileFolder, aStartUrlFileFolder);

aSDKRenderer.setLogRenderer(aLogRenderer);

var callbackSetFileFolder = function callbackLog(ctx)
{
  var a = 1;
  var callbackLog = function callbackLog(ctx)
  {
    var a = 1;
  }
  //context.setRemoteCallback(true);
  context.setRemoteCallback(true);
  aLogService._iLogMain.log( 4, "clientNodejs"+ "\t\t" + "Starts System Configuration Application : ok", error, context, callbackLog);
}
var context3:amGeneralContext.am_general.A_Context = aSrvLocator._iEntityCreation.createDefaultContext();
//context3.setRemoteCallback(true);
aLogService._iLogConfig.setFileInfo(aStartFileFolder, aStartUrlFileFolder, error, context3, callbackSetFileFolder);
//aSDKRenderer._iFileSystemRenderer.action_createLogRenderer();


//===================
//  config classes
//====================
var aHardwareSettings:amPlaybackHardwareSettings.am_playback.A_HardwareSettings = aSrvLocator._iEntityCreation.createDefaultHardwareSettings(error);
aSDKRenderer._iFileSystemRenderer.setHardwareSetting(aHardwareSettings);
var aOpeningHours:amPlaybackOpeningHours.am_playback.A_OpeningHours = aSrvLocator._iEntityCreation.createDefaultOpeningHours(error);
aSDKRenderer._iFileSystemRenderer.setOpeningHours(aOpeningHours);
var aScreenSaverConfig:amPlaybackScreenSaverConfig.am_playback.AE_ScreenSaverConfig = aSrvLocator._iEntityCreation.createDefaultScreenSaverConfig(error);
//aSDKRenderer._iFileSystemRenderer.setScreenSaverRenderer(aScreenSaverConfig);


//=======================================
// renderers
//=======================================
var aFileStorage: string = _getDefaultResourceStorageName(); //"c:/";
var aUrlStorage: string  = _getDefaultResourceStorageUrlName(); //"http://127.0.0.1:9080/c/";

  //------------------- 
  //    creation
  //-------------------
  var aPlaylistController:amPlaylistController.am_coreservices.A_PlaylistController = new rmPlaylistController.rm_coreservices.R_PlaylistController(null, null, null, error);
  //--
  var aRenderingController:amRenderingController.am_coreservices.A_RenderingController = new rmRenderingController.rm_coreservices.R_RenderingController(null, null, null, error);

  //------------------- 
  //    construction 
  //-------------------
  aPlaylistController._iService.injectDependencies( null, aSrvLocator, aLogService, error ) ;
  //aPlaylistController._iService.setServiceLocator(aSrvLocator);
  //aPlaylistController._iService.setSDKService(aSDKGeneralService); //test
  aPlaylistController._iService.setUtilsService(aUtilsService); //test
  aPlaylistController._iService.setTargetService(aRenderingController); //test
  aPlaylistController._iService.setSDKService(aSDKJsTV); //test); 
  aPlaylistController._iPlaylistControllerConfig.setPlaybackGlobalConfig(aPlaybackGlobalConfig);

  //--
  aRenderingController._iService.injectDependencies( null, aSrvLocator, aLogService, error ) ;
  //aRenderingController._iService.setServiceLocator(aSrvLocator);
  //aRenderingController._iService.setSDKService(aSDKGeneralService); //test
  aRenderingController._iService.setUtilsService(aUtilsService); //test
  aRenderingController._iService.setTargetService(aPlaylistController); //test


  //------------------- 
  //   configuration 
  //-------------------
//-------------------------------
function configPlayback( aFileStorage: string, aUrlStorage : string, 
                        aHardwareSettings:amPlaybackHardwareSettings.am_playback.A_HardwareSettings ,
                        aOpeningHours:amPlaybackOpeningHours.am_playback.A_OpeningHours,
                        aScreenSaverConfig:amPlaybackScreenSaverConfig.am_playback.AE_ScreenSaverConfig,
                        callback)
{
  var aPlaylistControllerConfig:amPlaylistControllerConfig.am_coreservices.AE_PlaylistControllerConfig = aSrvLocator._iEntityCreation.createDefaultPlaylistControllerConfig(error);
  //aPlaylistControllerConfig.setInitialPoolNb_OfPrepareParams(30000); 
  //aPlaylistControllerConfig.setInitialPoolNb_OfRunParams(30000);
  //aPlaylistControllerConfig.setInitialPoolNb_OfStopParams(30000);
  //aPlaylistControllerConfig.setInitialPoolNb_OfStatusParams(30000);
  aPlaylistController._iServiceConfig.init(aPlaylistControllerConfig, error, null, null);
  aPlaylistController._iPlaylistControllerConfig.getPlaybackGlobalConfig().setScreenSaverConfig(aScreenSaverConfig);
  aPlaylistController._iPlaylistControllerConfig.getPlaybackGlobalConfig().setOpeningHours(aOpeningHours);
  aPlaylistController._iPlaylistControllerConfig.getPlaybackGlobalConfig().setHardwareSettings(aHardwareSettings);
  //---
  var aRenderingControllerConfig:amRenderingControllerConfig.am_coreservices.AE_RenderingControllerConfig = aSrvLocator._iEntityCreation.createDefaultRenderingControllerConfig(error);
  aRenderingControllerConfig.setInitialPoolNb_OfRenderingZones(20); 
  //aRenderingControllerConfig.setInitialPoolNb_OfImageRenderers(10); 
  //aRenderingControllerConfig.setInitialPoolNb_OfVideoRenderers(10); 
  //aRenderingControllerConfig.setInitialPoolNb_OfVideoStreamRenderers(10); 
  //aRenderingControllerConfig.setInitialPoolNb_OfHtmlRenderers(10); 
  //aRenderingControllerConfig.setInitialPoolNb_OfFillRectRenderers(10); 
  //aRenderingControllerConfig.setInitialPoolNb_OfHtmlTemplateRenderers(10); 
  //aRenderingControllerConfig.setInitialPoolNb_OfScreenSaverRenderers(10); 
  //aRenderingControllerConfig.setInitialPoolNb_OfBackgroundRenderers(1); 
  //aRenderingControllerConfig.setInitialPoolNb_OfHtmlZones(10); 
  aRenderingControllerConfig.setRootDivId("background01"); 
  aRenderingControllerConfig.setScreenSaverConfig(aScreenSaverConfig);

  aRenderingController._iServiceConfig.init(aRenderingControllerConfig, error, null, null);
}

//--------------------------------------------------
function _changeDesign(iOldDesign: number, iNewDesign: number, designs, aFileStorage: string, aUrlStorage : string)
{
  var callbackChangeDesign = function callbackChangeDesign()
  {
    var a = 1;
  }  
  var aDesignError:amGeneralError.am_general.A_Error = aSrvLocator._iEntityCreation.createDefaultError();
  var aDesignContext:amGeneralContext.am_general.A_Context = aSrvLocator._iEntityCreation.createDefaultContext();
  aPlaylistController._iPlaylistControllerCommands.cmd_changeDesign(iOldDesign, iNewDesign, designs, 
                                                                    aFileStorage, aUrlStorage, 
                                                                    aDesignError, aDesignContext, callbackChangeDesign);
  return ;
}

//---------------------------------------------------
function _prepareAndPlayMediaFile( aFileStorage: string, aUrlStorage : string,  iDesign: number, iZone: number, iMediaInZone : number, designs)
{
  //alert("client_prepareAndPlayMediaFile iDesign: " +  iDesign + ", iZone: " + iZone + ", iMediaInZone " + iMediaInZone  + ", designs[0].id: " + designs[0].designId);
  //alert('' + designs[iDesign]);
  //alert('' + designs[iDesign].zones[iZone]);
  //alert('' + designs[iDesign].zones[iZone].mediaitems[iMediaInZone].mediaType);

  var targetZoneId  = iZone + 1;

  var prepareParams = aPlaylistController._iPlaylistControllerCommands.cmd_getNewPreparedParam(error,null,null);
  //var runParams     = aPlaylistController._iPlaylistControllerCommands.cmd_getNewRunParam(error,null,null);
  
  prepareParams.getRenderParams().getParamIdentification().setMediaType(designs[iDesign].zones[iZone].mediaitems[iMediaInZone].mediaType);
  //----
  var mediaStorage = designs[iDesign].zones[iZone].mediaitems[iMediaInZone].mediaStorage;
  if (mediaStorage == "defaultStorage")
    mediaStorage = aUrlStorage;
    
  prepareParams.getRenderParams().getParamFileInfo().setUrlStorage(mediaStorage);//designs[iDesign].zones[iZone].mediaitems[iMediaInZone].mediaStorage);
  prepareParams.getRenderParams().getParamFileInfo().setUrlPath(designs[iDesign].zones[iZone].mediaitems[iMediaInZone].mediaPath);
  prepareParams.getRenderParams().getParamFileInfo().setUrlName(designs[iDesign].zones[iZone].mediaitems[iMediaInZone].mediaFile);//"fluture01.jpg"); //("WuXi03.png");
  //---
  var left   : number ;
  var top    : number ;
  var width  : number ;
  var height : number ;
  var zOrder : number ;
  //var imgDisplayType : number;
  try{
    left   = parseInt(designs[iDesign].zones[iZone].zoneLeft);
    top    = parseInt(designs[iDesign].zones[iZone].zoneTop);
    width  = parseInt(designs[iDesign].zones[iZone].zoneWidth);
    height = parseInt(designs[iDesign].zones[iZone].zoneHeight);
    zOrder = parseInt(designs[iDesign].zones[iZone].zoneZOrder);
    //imgDisplayType = parseInt(designs[iDesign].zones[iZone].mediaitems[iMediaInZone].imageDisplayType);
  }catch(e){}
  
  prepareParams.getRenderParams().getParamContainerPosSize().setAllPosAndSizes( left, //designs[iDesign].zones[iZone].zoneLeft,
                                                                                top, //designs[iDesign].zones[iZone].zoneTop,
                                                                                left+width, //designs[iDesign].zones[iZone].zoneLeft+designs[iDesign].zones[iZone].zoneWidth,
                                                                                top+height, //designs[iDesign].zones[iZone].zoneTop+designs[iDesign].zones[iZone].zoneHeight,
                                                                                0,
                                                                                0,
                                                                                width,   //designs[iDesign].zones[iZone].zoneWidth,
                                                                                height);  //designs[iDesign].zones[iZone].zoneHeight); //left,top,right,bottom fel,top,right,bottom
  prepareParams.getRenderParams().getParamContainerPosSize().setContainerZOrder(zOrder);
  //---
  prepareParams.getRenderParams().getParamImage().setDisplayTypeAsString(designs[iDesign].zones[iZone].mediaitems[iMediaInZone].imageDisplayType);
  //prepareParams.getRenderParams().getParamBackground().setR(255);
  //prepareParams.getRenderParams().getParamBackground().setG(0);
  //prepareParams.getRenderParams().getParamBackground().setB(0);
  //prepareParams.getRenderParams().getParamBackground().setAlpha(1.0);
  prepareParams.getRenderParams().getParamFillRect().setR(255);
  prepareParams.getRenderParams().getParamFillRect().setG(0);
  prepareParams.getRenderParams().getParamFillRect().setB(0);
  prepareParams.getRenderParams().getParamFillRect().setAlpha(1.0);  

  //--
  var callbackPrepare = function callbackPrepare()
  {
    var callbackRun = function callbackRun()
    {
      prepareParams.setIsFree(true);
      var a = 1;
    }  
    aPlaylistController._iPlaylistControllerCommands.cmd_playNextMediaItem(targetZoneId , prepareParams, error, null, callbackRun);
    return ;
  }
  aPlaylistController._iPlaylistControllerCommands.cmd_prepareNextMediaItem(targetZoneId , prepareParams, error, null, callbackPrepare);

}




//=========================================
//  xml configurator
//=========================================
var aXmlConfigurator:amTransversalServicesXmlConfigurator.am_transversalservices.A_XmlConfigurator = new rmodXmlConfigurator.rm_transversalservices.R_XmlConfigurator(null, null, null, error);
aXmlConfigurator._iService.setServiceLocator(aSrvLocator);
aXmlConfigurator._iService.setSDKService(aSDKJsTV);//aSDKGeneralService); //test
aXmlConfigurator._iService.setUtilsService(aUtilsService); //test
//aXmlConfigurator._iRemoteService.startup(__socket);

//var aXmlConfiguratorClient:amTransversalServicesLogService.am_transversalservices.A_LogService = new rmodLogClient.rm_transversalservices.R_Log_Client(null, null, null, error);
//aXmlConfiguratorClient._iService.setServiceLocator(aSrvLocator);
//aXmlConfiguratorClient._iRemoteService.startup(__socket);

//------------------------------------------------------
function loadXMLConfigurationFiles( aFileStorage: string, aUrlStorage : string,
                                    aHardwareSettings:amPlaybackHardwareSettings.am_playback.A_HardwareSettings ,
                                    aOpeningHours:amPlaybackOpeningHours.am_playback.A_OpeningHours,
                                    aScreenSaverConfig:amPlaybackScreenSaverConfig.am_playback.AE_ScreenSaverConfig,
                                    callback)
{
  //var aSDKGeneralService:amTransversalServicesSDKJsTV.am_transversalservices.A_SDK_JsTV = new rmodSDKGeneralService.rm_transversalservices.R_SDK_JsTV(null, null, null, error);
  //aSDKGeneralService._iService.setUtilsService(aUtilsService); //test
  var aErrorLog:amGeneralError.am_general.A_Error = aSrvLocator._iEntityCreation.createDefaultError();
  var aErrorLoadXml:amGeneralError.am_general.A_Error = aSrvLocator._iEntityCreation.createDefaultError();

  var aXMLFileHD:amGeneralFileInfo.am_general.A_FileInfo = aSrvLocator._iEntityCreation.createDefaultFileInfo(aErrorLoadXml);
  aXMLFileHD.setStorage(aFileStorage);
  aXMLFileHD.setPath("/moodmedia/software_v5/settings/"); 
  aXMLFileHD.setName("hardware_settings.xml");
  aXMLFileHD.setUrlStorage(aUrlStorage);
  aXMLFileHD.setUrlPath(aXMLFileHD.getPath()); 
  aXMLFileHD.setUrlName(aXMLFileHD.getName());

  var aXMLFileOH:amGeneralFileInfo.am_general.A_FileInfo = aSrvLocator._iEntityCreation.createDefaultFileInfo(aErrorLoadXml);
  aXMLFileOH.setStorage(aFileStorage);
  aXMLFileOH.setPath("/moodmedia/software_v5/settings/"); 
  aXMLFileOH.setName("opening_hour_settings.xml");
  aXMLFileOH.setUrlStorage(aUrlStorage);
  aXMLFileOH.setUrlPath(aXMLFileOH.getPath()); 
  aXMLFileOH.setUrlName(aXMLFileOH.getName());

  //--- new 
  var aXMLFileScreenSaverConfig:amGeneralFileInfo.am_general.A_FileInfo = aSrvLocator._iEntityCreation.createDefaultFileInfo(aErrorLoadXml);
  aXMLFileScreenSaverConfig.setStorage(aFileStorage);
  aXMLFileScreenSaverConfig.setPath("/moodmedia/project/"); 
  aXMLFileScreenSaverConfig.setName("screen_saver_v5.xml");
  aXMLFileScreenSaverConfig.setUrlStorage(aUrlStorage);
  aXMLFileScreenSaverConfig.setUrlPath(aXMLFileScreenSaverConfig.getPath()); 
  aXMLFileScreenSaverConfig.setUrlName(aXMLFileScreenSaverConfig.getName());


  var xmlFileInfoList:Array<amGeneralFileInfo.am_general.A_FileInfo> = new Array<amGeneralFileInfo.am_general.A_FileInfo>();
  xmlFileInfoList.push(aXMLFileHD);
  xmlFileInfoList.push(aXMLFileOH);
  xmlFileInfoList.push(aXMLFileScreenSaverConfig);

  try{
    var callbackLoadXMLFiles = function callbackLoadXMLFiles(ctx)
    {
      if ((ctx._error != null) && (ctx._error._id != null) && (ctx._error._id != 0))
      {
        var callbackLog3 = function callbackLog3(ctx)
        {
        }
        aLogService._iLogMain.log( 4, "clientNodejs"+ "\t\t" + "Load XML Files : failed", aErrorLog, context, callbackLog3);
        return;
      }
      var callbackLog2 = function callbackLog2(ctx)
      {
      }
      //context.setRemoteCallback(true);
      aLogService._iLogMain.log( 4, "clientNodejs"+ "\t\t" + "Load XML Files : ok", aErrorLog, context, callbackLog2);
      //---------------------------
      var callbackGetXmlObjectsHS = function callbackGetXmlObjectsHS(ctxH)
      {
        var xmlDocumentHS = ctxH.getObjectResult(); 
        //-----------------------
        var strHardwareType = aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText(xmlDocumentHS, "HARDWARE_SETTINGS/ENVIRONMENT/ENV_NAME", aErrorLoadXml) ;
        var strEarlyAdapter = aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText(xmlDocumentHS, "HARDWARE_SETTINGS/ENVIRONMENT/EARLY_ADOPTER", aErrorLoadXml);
        var strSerialNumber = aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText(xmlDocumentHS, "HARDWARE_SETTINGS/SERIAL_NUMBER", aErrorLoadXml);
        var strAccountId    = aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText(xmlDocumentHS, "HARDWARE_SETTINGS/WINDOWS_ACCOUNTS/ACCOUNT/ACCOUNT_ID", aErrorLoadXml);
        var strAccountName  = aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText(xmlDocumentHS, "HARDWARE_SETTINGS/WINDOWS_ACCOUNTS/ACCOUNT/NAME", aErrorLoadXml);
        var strAccountPwd   = aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText(xmlDocumentHS, "HARDWARE_SETTINGS/WINDOWS_ACCOUNTS/ACCOUNT/PWD", aErrorLoadXml);

        //var strHardwareType = aUtilsService._iUtilsXMLJson.getXMLJsonObjectTagText(xmlJsonObject, "ENVIRONMENT/ENV_NAME");
        //var strEarlyAdapter = aUtilsService._iUtilsXMLJson.getXMLJsonObjectTagText(xmlJsonObject, "ENVIRONMENT/EARLY_ADOPTER");
        //var strSerialNumber = aUtilsService._iUtilsXMLJson.getXMLJsonObjectTagText(xmlJsonObject, "SERIAL_NUMBER");
        //var strAccountId    = aUtilsService._iUtilsXMLJson.getXMLJsonObjectTagText(xmlJsonObject, "WINDOWS_ACCOUNTS/ACCOUNT/ACCOUNT_ID");
        //var strAccountName  = aUtilsService._iUtilsXMLJson.getXMLJsonObjectTagText(xmlJsonObject, "WINDOWS_ACCOUNTS/ACCOUNT/NAME");
        //var strAccountPwd   = aUtilsService._iUtilsXMLJson.getXMLJsonObjectTagText(xmlJsonObject, "WINDOWS_ACCOUNTS/ACCOUNT/PWD");

        aHardwareSettings.setHardwareType(strHardwareType);
        aHardwareSettings.setEarlyAdapter(strEarlyAdapter);
        aHardwareSettings.setSerialNumber(strSerialNumber);
        aHardwareSettings.setAccountId(strAccountId);
        aHardwareSettings.setAccountName(strAccountName);
        aHardwareSettings.setAccountPassword(strAccountPwd);
        //-------------------------

        var callbackGetXmlObjectsOH = function callbackGetXmlObjectsOH(ctxOH)
        {
          var xmlDocumentOH = ctxH.getObjectResult(); 

          //var objWDays = aUtilsService._iUtilsXMLJson.getXMLJsonObjectTagArray(xmlJsonObjectOH, "WORKDAY");
          var objWDays = aUtilsService._iUtilsXMLJson.getXmlXPath_Nodes(xmlDocumentOH, "OPENING_HOURS/WORKDAY", aErrorLoadXml) ;
          if (objWDays != null)
          {
            var nbWDays = objWDays.length;
            var wdayOpenDay="";
            var wdayOpenTime="";
            var wdayCloseDay="";
            var wdayCloseTime="";
            var aDayOpeningHours:amPlaybackDayOpeningHours.am_playback.A_DayOpeningHours = null;
            var aDayOpenTime:amGeneralDateTime.am_general.A_DateTime = null;
            var aDayCloseTime:amGeneralDateTime.am_general.A_DateTime = null;
            var iCrtOH:number = 0;
            for(var i = 0; i < objWDays.length; i++) 
            {
              // get i-th object in the results array  
              iCrtOH = i+1;
              var objWDay = objWDays[i];

              wdayOpenDay   = aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText(xmlDocumentOH, "OPENING_HOURS/WORKDAY[" + iCrtOH + "]/OPEN/DAY", aErrorLoadXml);
              wdayOpenTime  = aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText(xmlDocumentOH, "OPENING_HOURS/WORKDAY[" + iCrtOH + "]/OPEN/TIME", aErrorLoadXml);
              wdayCloseDay  = aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText(xmlDocumentOH, "OPENING_HOURS/WORKDAY[" + iCrtOH + "]/CLOSE/DAY", aErrorLoadXml);
              wdayCloseTime = aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText(xmlDocumentOH, "OPENING_HOURS/WORKDAY[" + iCrtOH + "]/CLOSE/TIME", aErrorLoadXml);
              
              //wdayOpenDay   = aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText_FromNode(objWDay, "OPENING_HOURS/OPEN/DAY", error);
              //wdayOpenTime  = aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText_FromNode(objWDay, "OPENING_HOURS/OPEN/TIME", error);
              //wdayCloseDay  = aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText_FromNode(objWDay, "OPENING_HOURS/CLOSE/DAY", error);
              //wdayCloseTime = aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText_FromNode(objWDay, "OPENING_HOURS/CLOSE/TIME", error);

              //wdayOpenDay  = aUtilsService._iUtilsXMLJson.getXMLJsonTagText(objWDay,"OPEN/DAY");
              //wdayOpenTime = aUtilsService._iUtilsXMLJson.getXMLJsonTagText(objWDay,"OPEN/TIME");
              //wdayCloseDay  = aUtilsService._iUtilsXMLJson.getXMLJsonTagText(objWDay,"CLOSE/DAY");
              //wdayCloseTime = aUtilsService._iUtilsXMLJson.getXMLJsonTagText(objWDay,"CLOSE/TIME");

              aDayOpeningHours = aSrvLocator._iEntityCreation.createDefaultDayOpeningHours(aErrorLoadXml);
              aDayOpenTime  = aSrvLocator._iEntityCreation.createDefaultDateTime(aErrorLoadXml);
              aDayOpenTime.setTimeAsString(wdayOpenTime);
              aDayCloseTime = aSrvLocator._iEntityCreation.createDefaultDateTime(aErrorLoadXml);
              aDayCloseTime.setTimeAsString(wdayCloseTime);

              aDayOpeningHours.setOpenDayName(wdayOpenDay);
              aDayOpeningHours.setOpenTime(aDayOpenTime);
              aDayOpeningHours.setCloseDayName(wdayCloseDay);
              aDayOpeningHours.setCloseTime(aDayCloseTime);

              aOpeningHours.addDayOpeningHours(aDayOpeningHours);
            }
          }
          
          //-------------------------
          var callbackGetXmlObjectsScreenSaverConfig = function callbackGetXmlObjectsScreenSaverConfig(ctxSSC)
          {
            var xmlDocumentSSC = ctxSSC.getObjectResult(); 
            //<messages>
              //<buffer_message trans_id="0000">
              //   <file>/moodmedia/project/screen_saver/PLAY_SCREENSAVER_TOTEM.swf</file>
              //   <last_media_in_zone>False</last_media_in_zone>
              //   <type>form_flashplayer</type>
              //   <duration>10000</duration>
              //   <position>Stretch</position>
              //</buffer_message>
            //</messages>
            //-----------------------
            //var strBM_attr_transId       = aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText(xmlDocumentSSC, "messages/buffer_message/@trans_id", error) ;  
            var strBM_file               = aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText(xmlDocumentSSC, "messages/buffer_message/file", aErrorLoadXml) ;  
            var strBM_last_media_in_zone = aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText(xmlDocumentSSC, "messages/buffer_message/last_media_in_zone", aErrorLoadXml) ;  
            var strBM_type               = aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText(xmlDocumentSSC, "messages/buffer_message/type", aErrorLoadXml) ;  
            var strBM_duration           = aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText(xmlDocumentSSC, "messages/buffer_message/duration", aErrorLoadXml) ;  
            var strBM_position           = aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText(xmlDocumentSSC, "messages/buffer_message/position", aErrorLoadXml) ;  

            aScreenSaverConfig.setFileFullName(aUrlStorage + strBM_file);
            aScreenSaverConfig.setLastMediaInZoneFromString(strBM_last_media_in_zone);
            aScreenSaverConfig.setMediaTypeFromConfigString(strBM_type);
            aScreenSaverConfig.setDurationFromString(strBM_duration);
            aScreenSaverConfig.setImageDisplayTypeFromConfigString(strBM_position);

            if (callback != null)
              return callback(null);

          }      
          var contextFSC:amGeneralContext.am_general.A_Context = aSrvLocator._iEntityCreation.createDefaultContext();
          var errorFSC:amGeneralError.am_general.A_Error = aSrvLocator._iEntityCreation.createDefaultError();
          aXmlConfigurator._iXmlConfiguratorMain.getXmlJsonObject(aXMLFileScreenSaverConfig.getStorage(), 
                                                                  aXMLFileScreenSaverConfig.getPath(), 
                                                                  aXMLFileScreenSaverConfig.getName(), 
                                                                  errorFSC, contextFSC, callbackGetXmlObjectsScreenSaverConfig);
        }

        var contextOH:amGeneralContext.am_general.A_Context = aSrvLocator._iEntityCreation.createDefaultContext();
        var errorOH:amGeneralError.am_general.A_Error = aSrvLocator._iEntityCreation.createDefaultError();
        aXmlConfigurator._iXmlConfiguratorMain.getXmlJsonObject(aXMLFileOH.getStorage(), aXMLFileOH.getPath(), aXMLFileOH.getName(), 
                                                                errorHS, contextHS, callbackGetXmlObjectsOH);

                                                                                    
      }
      var contextHS:amGeneralContext.am_general.A_Context = aSrvLocator._iEntityCreation.createDefaultContext();
      var errorHS:amGeneralError.am_general.A_Error = aSrvLocator._iEntityCreation.createDefaultError();
      aXmlConfigurator._iXmlConfiguratorMain.getXmlJsonObject(aXMLFileHD.getStorage(), aXMLFileHD.getPath(), aXMLFileHD.getName(), 
                                                              errorHS, contextHS, callbackGetXmlObjectsHS);

    }
    var context4:amGeneralContext.am_general.A_Context = aSrvLocator._iEntityCreation.createDefaultContext();
    //context3.setRemoteCallback(true);
    aXmlConfigurator._iXmlConfiguratorSetup.loadXMLFiles(xmlFileInfoList, aErrorLoadXml, context4, callbackLoadXMLFiles);
  }catch(e){
    document.getElementById("sdk.message").innerHTML += "<p>cannot load xml files: " + e.stack + "</p>";
  }
}


//==================================
//  loadXMLConfigurationFiles2
//=================================
/*
function loadXMLConfigurationFiles2( aFileStorage: string, aUrlStorage : string,
                                    aHardwareSettings:amPlaybackHardwareSettings.am_playback.A_HardwareSettings ,
                                    aOpeningHours:amPlaybackOpeningHours.am_playback.A_OpeningHours,
                                    aScreenSaverConfig:amPlaybackScreenSaverConfig.am_playback.AE_ScreenSaverConfig,
                                    callback)
{
  //var aSDKGeneralService:amTransversalServicesSDKJsTV.am_transversalservices.A_SDK_JsTV = new rmodSDKGeneralService.rm_transversalservices.R_SDK_JsTV(null, null, null, error);
  //aSDKGeneralService._iService.setUtilsService(aUtilsService); //test

  var aXMLFileHD:amGeneralFileInfo.am_general.A_FileInfo = aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
  aXMLFileHD.setStorage(aFileStorage);
  aXMLFileHD.setPath("/moodmedia/software_v5/settings/"); 
  aXMLFileHD.setName("hardware_settings.xml");
  aXMLFileHD.setUrlStorage(aUrlStorage);
  aXMLFileHD.setUrlPath(aXMLFileHD.getPath()); 
  aXMLFileHD.setUrlName(aXMLFileHD.getName());

  var aXMLFileOH:amGeneralFileInfo.am_general.A_FileInfo = aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
  aXMLFileOH.setStorage(aFileStorage);
  aXMLFileOH.setPath("/moodmedia/software_v5/settings/"); 
  aXMLFileOH.setName("opening_hour_settings.xml");
  aXMLFileOH.setUrlStorage(aUrlStorage);
  aXMLFileOH.setUrlPath(aXMLFileOH.getPath()); 
  aXMLFileOH.setUrlName(aXMLFileOH.getName());

  //--- new 
  var aXMLFileScreenSaverConfig:amGeneralFileInfo.am_general.A_FileInfo = aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
  var errorFSC:amGeneralError.am_general.A_Error = aSrvLocator._iEntityCreation.createDefaultError();
  var contextFSC:amGeneralContext.am_general.A_Context = aSrvLocator._iEntityCreation.createDefaultContext();
  aXMLFileScreenSaverConfig.setStorage(aFileStorage);
  aXMLFileScreenSaverConfig.setPath("/moodmedia/project/"); 
  aXMLFileScreenSaverConfig.setName("screen_saver_v5.xml");
  aXMLFileScreenSaverConfig.setUrlStorage(aUrlStorage);
  aXMLFileScreenSaverConfig.setUrlPath(aXMLFileScreenSaverConfig.getPath()); 
  aXMLFileScreenSaverConfig.setUrlName(aXMLFileScreenSaverConfig.getName());


  var xmlFileInfoList:Array<amGeneralFileInfo.am_general.A_FileInfo> = new Array<amGeneralFileInfo.am_general.A_FileInfo>();
  //xmlFileInfoList.push(aXMLFileHD);
  //xmlFileInfoList.push(aXMLFileOH);
  xmlFileInfoList.push(aXMLFileScreenSaverConfig);

  try{
    var callbackLoadXMLFiles = function callbackLoadXMLFiles(ctx)
    {
      
      if ((ctx._error != null) && (ctx._error._id != null) && (ctx._error._id != 0))
      {
        var callbackLog3 = function callbackLog3(ctx)
        {
        }
        aLogService._iLogMain.log( 4, "clientNodejs"+ "\t\t" + "Load XML Files : failed" + ctx._error._msg, error, context, callbackLog3);
        return;
      }
      var callbackLog2 = function callbackLog2(ctx)
      {
      }
      //context.setRemoteCallback(true);
      aLogService._iLogMain.log( 4, "clientNodejs"+ "\t\t" + "Load XML Files : ok", error, context, callbackLog2);
          
          //-------------------------
          var callbackGetXmlObjectsScreenSaverConfig = function callbackGetXmlObjectsScreenSaverConfig(ctxSSC)
          {
            var xmlDocumentSSC : amGeneralXmlDocument.am_general.AE_XmlDocument = <amGeneralXmlDocument.am_general.AE_XmlDocument>ctxSSC.getObjectResult(); 
            var xmlString      = xmlDocumentSSC.getNativeXmlDocument();

            //var xmlText = xmlDocumentSSC.
            //<messages>
              //<buffer_message trans_id="0000">
              //   <file>/moodmedia/project/screen_saver/PLAY_SCREENSAVER_TOTEM.swf</file>
              //   <last_media_in_zone>False</last_media_in_zone>
              //   <type>form_flashplayer</type>
              //   <duration>10000</duration>
              //   <position>Stretch</position>
              //</buffer_message>
            //</messages>
            //-----------------------
            //var strBM_attr_transId       = aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText(xmlDocumentSSC, "messages/buffer_message/@trans_id", error) ;  
            
            
            var strBM_file               = aUtilsService._iUtilsStrings.getFieldValue(xmlString,"<file>","</file>");    //aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText(xmlDocumentSSC, "messages/buffer_message/file", error) ;  
            var strBM_last_media_in_zone = aUtilsService._iUtilsStrings.getFieldValue(xmlString,"<last_media_in_zone>","</last_media_in_zone>");    //aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText(xmlDocumentSSC, "messages/buffer_message/last_media_in_zone", error) ;  
            var strBM_type               = aUtilsService._iUtilsStrings.getFieldValue(xmlString,"<type>","</type>");    //aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText(xmlDocumentSSC, "messages/buffer_message/type", error) ;  
            var strBM_duration           = aUtilsService._iUtilsStrings.getFieldValue(xmlString,"<duration>","</duration>");    //aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText(xmlDocumentSSC, "messages/buffer_message/duration", error) ;  
            var strBM_position           = aUtilsService._iUtilsStrings.getFieldValue(xmlString,"<position>","</position>");    //aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText(xmlDocumentSSC, "messages/buffer_message/position", error) ;  

            aScreenSaverConfig.setFileFullName(aUrlStorage + strBM_file);
            aScreenSaverConfig.setLastMediaInZoneFromString(strBM_last_media_in_zone);
            aScreenSaverConfig.setMediaTypeFromConfigString(strBM_type);
            aScreenSaverConfig.setDurationFromString(strBM_duration);
            aScreenSaverConfig.setImageDisplayTypeFromConfigString(strBM_position);

            if (callback != null)
              return callback(null);
            
          }      
          var contextOH:amGeneralContext.am_general.A_Context = aSrvLocator._iEntityCreation.createDefaultContext();
          var errorOH:amGeneralError.am_general.A_Error = aSrvLocator._iEntityCreation.createDefaultError();
          aXmlConfigurator._iXmlConfiguratorMain.getXmlJsonObject(aXMLFileScreenSaverConfig.getStorage(), 
                                                                  aXMLFileScreenSaverConfig.getPath(), 
                                                                  aXMLFileScreenSaverConfig.getName(), 
                                                                  errorFSC, contextFSC, callbackGetXmlObjectsScreenSaverConfig);                                                                        

    }
    var context4:amGeneralContext.am_general.A_Context = aSrvLocator._iEntityCreation.createDefaultContext();
    //context3.setRemoteCallback(true);
    aXmlConfigurator._iXmlConfiguratorSetup.loadTextFiles(xmlFileInfoList, error, context4, callbackLoadXMLFiles);
  }catch(e){
    document.getElementById("sdk.message").innerHTML += "<p>cannot load xml files: " + e.stack + "</p>";
  }
}
*/



//-------------------------------
function startPlayback( aFileStorage: string, aUrlStorage : string, 
                        aHardwareSettings:amPlaybackHardwareSettings.am_playback.A_HardwareSettings ,
                        aOpeningHours:amPlaybackOpeningHours.am_playback.A_OpeningHours,
                        aScreenSaverConfig:amPlaybackScreenSaverConfig.am_playback.AE_ScreenSaverConfig,
                        callback)
{
  var aError:amGeneralError.am_general.A_Error = aSrvLocator._iEntityCreation.createDefaultError();
  configPlayback(aFileStorage, aUrlStorage,  aHardwareSettings,aOpeningHours, aScreenSaverConfig, callback);
  //------------------- 
  //   startup
  //-------------------
  var zoneId : number = 1;
  var prepareParams = aPlaylistController._iPlaylistControllerCommands.cmd_getNewPreparedParam(aError,null,null);
  aPlaylistController._iPlaylistControllerCommands.cmd_createZone(zoneId, prepareParams, aError, null, null);
  //-----
  prepareParams.getRenderParams().getParamIdentification().setMediaType(amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_ScreenSaver);
  //----
  prepareParams.getRenderParams().getParamFileInfo().setUrlStorage(aUrlStorage);//"http://127.0.0.1:9080/c/");
  prepareParams.getRenderParams().getParamFileInfo().setUrlPath("/media_files/");
  prepareParams.getRenderParams().getParamFileInfo().setUrlName("screensaver01.jpg");//"fluture01.jpg"); //("WuXi03.png");
  //---
  prepareParams.getRenderParams().getParamContainerPosSize().setAllPosAndSizes(0,0,0+900,0+400, 0,0,900,400); //left,top,right,bottom fel,top,right,bottom
  prepareParams.getRenderParams().getParamContainerPosSize().setContainerZOrder(9001);
  //---
  prepareParams.getRenderParams().getParamImage().setDisplayType(amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Center);
  //---
  var callbackPrepare1 = function callbackPrepare1()
  {
    //==
    aPlaylistController._iPlaylistControllerCommands.cmd_playNextMediaItem(zoneId, prepareParams, aError, null, null);
  }
  aPlaylistController._iPlaylistControllerCommands.cmd_prepareNextMediaItem(zoneId, prepareParams, aError, null, callbackPrepare1);
  //--
  //aPlaylistController._iPlaylistControllerCommands.cmd_freeNewPreparedParam(prepareParams, error, null, null);

  //-------------------
  var zoneId2 : number = 2;
  var prepareParams2 = aPlaylistController._iPlaylistControllerCommands.cmd_getNewPreparedParam(aError,null,null);
  aPlaylistController._iPlaylistControllerCommands.cmd_createZone(zoneId2, prepareParams2, aError, null, null);
  //-----
  prepareParams2.getRenderParams().getParamIdentification().setMediaType(amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Image);
  prepareParams2.getRenderParams().getParamContainerPosSize().setContainerZOrder(9002);
  //----
  prepareParams2.getRenderParams().getParamFileInfo().setUrlStorage(aUrlStorage);//"http://127.0.0.1:9080/c/");
  prepareParams2.getRenderParams().getParamFileInfo().setUrlPath("/media_files/");
  prepareParams2.getRenderParams().getParamFileInfo().setUrlName("flori01.jpg"); //("WuXi03.png");
  //---
  prepareParams2.getRenderParams().getParamContainerPosSize().setAllPosAndSizes(900,0,900+1080,0+400, 0,0,1080,400); //left,top,right,bottom fel,top,right,bottom
  //---
  prepareParams2.getRenderParams().getParamImage().setDisplayType(amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Center);

  //---
  var callbackPrepare2 = function callbackPrepare2()
  {
    //==
    aPlaylistController._iPlaylistControllerCommands.cmd_playNextMediaItem(zoneId2, prepareParams2, aError, null, null);
  }
  //---
  aPlaylistController._iPlaylistControllerCommands.cmd_prepareNextMediaItem(zoneId2, prepareParams2, aError, null, callbackPrepare2);
  //--
  //aPlaylistController._iPlaylistControllerCommands.cmd_freeNewPreparedParam(prepareParams2, error, null, null);

  //-------------------
  var zoneId3 : number = 3;
  var prepareParams3 = aPlaylistController._iPlaylistControllerCommands.cmd_getNewPreparedParam(aError,null,null);
  aPlaylistController._iPlaylistControllerCommands.cmd_createZone(zoneId3, prepareParams3, aError, null, null);
  //-----
  prepareParams3.getRenderParams().getParamIdentification().setMediaType(amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Rect);
  prepareParams3.getRenderParams().getParamFillRect().setR(255);
  prepareParams3.getRenderParams().getParamFillRect().setG(0);
  prepareParams3.getRenderParams().getParamFillRect().setB(0);
  prepareParams3.getRenderParams().getParamFillRect().setAlpha(1.0);
  //----
  //prepareParams3.getRenderParams().getParamFileInfo().setUrlStorage("http://127.0.0.1:9080/c/");
  //prepareParams3.getRenderParams().getParamFileInfo().setUrlPath("/media_files/");
  //prepareParams3.getRenderParams().getParamFileInfo().setUrlName("flori01.jpg"); //("WuXi03.png");
  //---
  prepareParams3.getRenderParams().getParamContainerPosSize().setAllPosAndSizes(0,400,0+600,400+680, 0,0,600,680); //left,top,right,bottom fel,top,right,bottom
  prepareParams3.getRenderParams().getParamContainerPosSize().setContainerZOrder(9003);
  //---
  //prepareParams3.getRenderParams().getParamImage().setDisplayType(amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Center);
  //---
  var callbackPrepare3 = function callbackPrepare3()
  {
    //==
    aPlaylistController._iPlaylistControllerCommands.cmd_playNextMediaItem(zoneId3, prepareParams3, aError, null, null);
  }  
  aPlaylistController._iPlaylistControllerCommands.cmd_prepareNextMediaItem(zoneId3, prepareParams3, aError, null, callbackPrepare3);
  //--
  //aPlaylistController._iPlaylistControllerCommands.cmd_freeNewPreparedParam(prepareParams3, error, null, null);

  //-------------------
  var zoneId4 : number = 4;
  var prepareParams4 = aPlaylistController._iPlaylistControllerCommands.cmd_getNewPreparedParam(aError,null,null);
  aPlaylistController._iPlaylistControllerCommands.cmd_createZone(zoneId4, prepareParams4, aError, null, null);
  //-----
  prepareParams4.getRenderParams().getParamIdentification().setMediaType(amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Video);
  //prepareParams4.getRenderParams().getParamBackground().setR(255);
  //prepareParams4.getRenderParams().getParamBackground().setG(0);
  //prepareParams4.getRenderParams().getParamBackground().setB(0);
  //prepareParams4.getRenderParams().getParamBackground().setAlpha(1.0);
  //----
  prepareParams4.getRenderParams().getParamFileInfo().setUrlStorage(aUrlStorage);//"http://127.0.0.1:9080/c/");
  prepareParams4.getRenderParams().getParamFileInfo().setUrlPath("/media_files/");
  prepareParams4.getRenderParams().getParamFileInfo().setUrlName("music.mp4"); //("WuXi03.png");
  //---
  prepareParams4.getRenderParams().getParamContainerPosSize().setAllPosAndSizes(600,400,600+700,400+680, 0,0,700,680); //left,top,right,bottom fel,top,right,bottom
  prepareParams4.getRenderParams().getParamContainerPosSize().setContainerZOrder(9004);
  //---
  //prepareParams4.getRenderParams().getParamImage().setDisplayType(amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Center);
  //---
  var callbackPrepare4 = function callbackPrepare4()
  {
    //==
    aPlaylistController._iPlaylistControllerCommands.cmd_playNextMediaItem(zoneId4, prepareParams4, aError, null, null);
  }   
  aPlaylistController._iPlaylistControllerCommands.cmd_prepareNextMediaItem(zoneId4, prepareParams4, aError, null, callbackPrepare4);
  //--
  //aPlaylistController._iPlaylistControllerCommands.cmd_freeNewPreparedParam(prepareParams4, error, null, null);

  //-------------------
  var zoneId5 : number = 5;
  var prepareParams5 = aPlaylistController._iPlaylistControllerCommands.cmd_getNewPreparedParam(aError,null,null);
  aPlaylistController._iPlaylistControllerCommands.cmd_createZone(zoneId5, prepareParams5, aError, null, null);
  //-----
  prepareParams5.getRenderParams().getParamIdentification().setMediaType(amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Html);
  //prepareParams5.getRenderParams().getParamBackground().setR(255);
  //prepareParams5.getRenderParams().getParamBackground().setG(0);
  //prepareParams5.getRenderParams().getParamBackground().setB(0);
  //prepareParams5.getRenderParams().getParamBackground().setAlpha(1.0);
  //----
  prepareParams5.getRenderParams().getParamFileInfo().setUrlStorage("https://www.stiripesurse.ro/");
  prepareParams5.getRenderParams().getParamFileInfo().setUrlPath("");
  prepareParams5.getRenderParams().getParamFileInfo().setUrlName(""); //("WuXi03.png");
  //---
  prepareParams5.getRenderParams().getParamContainerPosSize().setAllPosAndSizes(1300,400,1300+700,400+680, 0,0,700,680); //left,top,right,bottom fel,top,right,bottom
  prepareParams5.getRenderParams().getParamContainerPosSize().setContainerZOrder(9005);
  //---
  //prepareParams5.getRenderParams().getParamImage().setDisplayType(amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Center);
  //---
  //==
  var callbackPrepare5 = function callbackPrepare5()
  {
    //==
    aPlaylistController._iPlaylistControllerCommands.cmd_playNextMediaItem(zoneId5, prepareParams5, aError, null, null);
  }
  aPlaylistController._iPlaylistControllerCommands.cmd_prepareNextMediaItem(zoneId5, prepareParams5, aError, null, callbackPrepare5);
  //==
  //aPlaylistController._iPlaylistControllerCommands.cmd_playNextMediaItem(zoneId5, prepareParams5, error, null, null);
  //--
  //aPlaylistController._iPlaylistControllerCommands.cmd_freeNewPreparedParam(prepareParams5, error, null, null);

  if (callback != null)
    return callback(null);

}

//===================================================
// Playlist test methods 
//===================================================

  var aPlaylistError:amGeneralError.am_general.A_Error = aSrvLocator._iEntityCreation.createDefaultError();
  var aPlaylistContext:amGeneralContext.am_general.A_Context = aSrvLocator._iEntityCreation.createDefaultContext();
  //--
  var aPlaylistFile:amGeneralFileInfo.am_general.A_FileInfo = aSrvLocator._iEntityCreation.createDefaultFileInfo(aPlaylistError);
  aPlaylistFile.setStorage(aFileStorage);
  aPlaylistFile.setPath("/moodmedia/playlist/"); 
  aPlaylistFile.setName("playlist_v5.json");
  aPlaylistFile.setUrlStorage(aUrlStorage);
  aPlaylistFile.setUrlPath(aPlaylistFile.getPath()); 
  aPlaylistFile.setUrlName(aPlaylistFile.getName());
  //--
  var aSavePlaylistFile:amGeneralFileInfo.am_general.A_FileInfo = aSrvLocator._iEntityCreation.createDefaultFileInfo(aPlaylistError);
  //aSavePlaylistFile.setStorage(aFileStorage);
  aSavePlaylistFile.setStorage(_getDefaultResourceStorageName()); //"c:/");
  aSavePlaylistFile.setPath("/moodmedia/playlist/"); 
  aSavePlaylistFile.setName("playlist_v5_saved.json");
  aSavePlaylistFile.setUrlStorage(aUrlStorage);
  aSavePlaylistFile.setUrlPath(aPlaylistFile.getPath()); 
  aSavePlaylistFile.setUrlName(aPlaylistFile.getName());
  //--
  var aSaveUrlPlaylistFile:amGeneralFileInfo.am_general.A_FileInfo = aSrvLocator._iEntityCreation.createDefaultFileInfo(aPlaylistError);
  aSaveUrlPlaylistFile.setStorage(_getDefaultResourceStorageUrlName());
  aSaveUrlPlaylistFile.setPath("/moodmedia/playlist/"); 
  aSaveUrlPlaylistFile.setName("playlist_v5_saved.json");
  aSaveUrlPlaylistFile.setUrlStorage(aUrlStorage);
  aSaveUrlPlaylistFile.setUrlPath(aPlaylistFile.getPath()); 
  aSaveUrlPlaylistFile.setUrlName(aPlaylistFile.getName());
  //--
  var playlistType = "mood_v5";
  //--
  var aLogSaveFile:amTransversalServicesLogService.am_transversalservices.A_LogService = new rmodLogClient.rm_transversalservices.R_Log_Client(null, null, null, error);
  aLogSaveFile._iService.setServiceLocator(aSrvLocator);
  aLogSaveFile._iRemoteService.startup(__socket);


//---------------------------------------------------------------
/*
function _client_playlistLoad()
{
   alert("client_playlistLoad");
   var callbackLoadPlaylist = function callbackLoadPlaylist()
   {
     //==
     var jsonStream = aPlaylistController._iPlaylistControllerConfig.getPlaylist().toJSONString();
     (<HTMLTextAreaElement>document.getElementById('playlistparsingresume')).value=jsonStream;
     (<HTMLTextAreaElement>document.getElementById('playlisttext')).value=jsonStream;
     (<HTMLInputElement>document.getElementById('playlistmessage')).value="Successfully Load the playlist";
   }
   aPlaylistController._iPlaylistControllerConfig.loadPlaylist(playlistType, aPlaylistFile,  aPlaylistError, aPlaylistContext, callbackLoadPlaylist); 
   
}*/

//---------------------------------------------------------------
function _client_playlistLoad()
{
 alert("client_playlistLoad");
 var callbackLoadPlaylist = function callbackLoadPlaylist()
 {
   //==
   if (aPlaylistError.isError())
   {
    (<HTMLTextAreaElement>document.getElementById('playlisttext')).value="";
    (<HTMLTextAreaElement>document.getElementById('playlistparsingresume')).value=aPlaylistError.getErrMsg();
    (<HTMLInputElement>document.getElementById('playlistmessage')).value="Error Loading the playlist";
   }else{
     var jsonStream = aPlaylistController._iPlaylistControllerConfig.getPlaylist().toJSONString();
     (<HTMLTextAreaElement>document.getElementById('playlistparsingresume')).value=jsonStream;
     (<HTMLTextAreaElement>document.getElementById('playlisttext')).value=jsonStream;
     (<HTMLInputElement>document.getElementById('playlistmessage')).value="Successfully Load the playlist";
   }
 }
 var mediaFilesFolder = aPlaylistController._iPlaylistControllerConfig.getPlaybackGlobalConfig()._aMediaFilesFolder;
 var bTestFileExists = true;
 aPlaylistController._iPlaylistControllerConfig.loadPlaylist(playlistType, aPlaylistFile, mediaFilesFolder, bTestFileExists, aPlaylistError, aPlaylistContext, callbackLoadPlaylist); 
 
}


//---------------------------------------------------------------
function _client_playlistSave()
{
   if (aPlaylistController._iPlaylistControllerConfig.getPlaylist() == null)
   {
     alert("client_playlistSave: Playlist not loaded yet. Please load first the playlist");
     return ;
   }
   alert("client_playlistSave");
    //==
    var jsonStream = aPlaylistController._iPlaylistControllerConfig.getPlaylist().toJSONString();
    var a = 1;
    var callbackSetSaveFileFolder = function callbackSetSaveFileFolder(ctx)
    {
      var b  = 1;
      var callbackSaveJson = function callbackSaveJson(ctx)
      {
        var c = 1;
        (<HTMLInputElement>document.getElementById('playlistmessage')).value="Successfully Save the playlist";
      }
      contextSaveFile.setRemoteCallback(true);
      aLogSaveFile._iLogMain.log( 0, jsonStream, error, contextSaveFile, callbackSaveJson);
    }
    var contextSaveFile:amGeneralContext.am_general.A_Context = aSrvLocator._iEntityCreation.createDefaultContext();   
    contextSaveFile.setRemoteCallback(true);
    aLogSaveFile._iLogConfig.setFileInfo(aSavePlaylistFile, aSaveUrlPlaylistFile, error, contextSaveFile, callbackSetSaveFileFolder);
   
   
}

//=================================
//   start app
//=================================
//------------------------------------------------------
function loadPlaylist( aFileStorage: string, aUrlStorage : string,
                       aHardwareSettings:amPlaybackHardwareSettings.am_playback.A_HardwareSettings ,
                       aOpeningHours:amPlaybackOpeningHours.am_playback.A_OpeningHours,
                       aScreenSaverConfig:amPlaybackScreenSaverConfig.am_playback.AE_ScreenSaverConfig,
                       callback)
{
  //var aSDKGeneralService:amTransversalServicesSDKJsTV.am_transversalservices.A_SDK_JsTV = new rmodSDKGeneralService.rm_transversalservices.R_SDK_JsTV(null, null, null, error);
  //aSDKGeneralService._iService.setUtilsService(aUtilsService); //test

  /*
  var aPlaylistError:amGeneralError.am_general.A_Error = aSrvLocator._iEntityCreation.createDefaultError();
  var aPlaylistContext:amGeneralContext.am_general.A_Context = aSrvLocator._iEntityCreation.createDefaultContext();
  //--
  var aPlaylistFile:amGeneralFileInfo.am_general.A_FileInfo = aSrvLocator._iEntityCreation.createDefaultFileInfo(aPlaylistError);
  aPlaylistFile.setStorage(aFileStorage);
  aPlaylistFile.setPath("/moodmedia/playlist/"); 
  aPlaylistFile.setName("playlist_v5.json");
  aPlaylistFile.setUrlStorage(aUrlStorage);
  aPlaylistFile.setUrlPath(aPlaylistFile.getPath()); 
  aPlaylistFile.setUrlName(aPlaylistFile.getName());
  //--
  var aSavePlaylistFile:amGeneralFileInfo.am_general.A_FileInfo = aSrvLocator._iEntityCreation.createDefaultFileInfo(aPlaylistError);
  //aSavePlaylistFile.setStorage(aFileStorage);
  aSavePlaylistFile.setStorage(_getDefaultResourceStorageName()); //"c:/");
  aSavePlaylistFile.setPath("/moodmedia/playlist/"); 
  aSavePlaylistFile.setName("playlist_v5_saved.json");
  aSavePlaylistFile.setUrlStorage(aUrlStorage);
  aSavePlaylistFile.setUrlPath(aPlaylistFile.getPath()); 
  aSavePlaylistFile.setUrlName(aPlaylistFile.getName());
  //--
  var aSaveUrlPlaylistFile:amGeneralFileInfo.am_general.A_FileInfo = aSrvLocator._iEntityCreation.createDefaultFileInfo(aPlaylistError);
  aSaveUrlPlaylistFile.setStorage(_getDefaultResourceStorageUrlName());
  aSaveUrlPlaylistFile.setPath("/moodmedia/playlist/"); 
  aSaveUrlPlaylistFile.setName("playlist_v5_saved.json");
  aSaveUrlPlaylistFile.setUrlStorage(aUrlStorage);
  aSaveUrlPlaylistFile.setUrlPath(aPlaylistFile.getPath()); 
  aSaveUrlPlaylistFile.setUrlName(aPlaylistFile.getName());
  //--
  var playlistType = "mood_v5";
  //--
  var aLogSaveFile:amTransversalServicesLogService.am_transversalservices.A_LogService = new rmodLogClient.rm_transversalservices.R_Log_Client(null, null, null, error);
  aLogSaveFile._iService.setServiceLocator(aSrvLocator);
  aLogSaveFile._iRemoteService.startup(__socket);
  */
  //--
  var callbackLoadPlaylist = function callbackLoadPlaylist()
  {
    //==
    var jsonStream = aPlaylistController._iPlaylistControllerConfig.getPlaylist().toJSONString();
    var a = 1;
    var callbackSetSaveFileFolder = function callbackSetSaveFileFolder(ctx)
    {
      var b  = 1;
      var callbackSaveJson = function callbackSaveJson(ctx)
      {
        var c = 1;
      }
      contextSaveFile.setRemoteCallback(true);
      aLogSaveFile._iLogMain.log( 0, jsonStream, error, contextSaveFile, callbackSaveJson);
    }
    var contextSaveFile:amGeneralContext.am_general.A_Context = aSrvLocator._iEntityCreation.createDefaultContext();   
    contextSaveFile.setRemoteCallback(true);
    aLogSaveFile._iLogConfig.setFileInfo(aSavePlaylistFile, aSaveUrlPlaylistFile, error, contextSaveFile, callbackSetSaveFileFolder);
  }
  var mediaFilesFolder = aPlaylistController._iPlaylistControllerConfig.getPlaybackGlobalConfig()._aMediaFilesFolder;
  var bTestFileExists = true;
  aPlaylistController._iPlaylistControllerConfig.loadPlaylist(playlistType, aPlaylistFile, mediaFilesFolder, bTestFileExists, aPlaylistError, aPlaylistContext, callbackLoadPlaylist);
}

//=====================================================
var startApplication2 = function startApplication2()
{

  var callbackLoadXMLConfigurationFiles = function callbackLoadXMLConfigurationFiles(ctxLCF)
  {
    var a = 1;
    var callbackStartPlaylist = function callbackStartPlaylist(ctxSPL)
    {
      a = 2;
      /*
      var callbackLoadPlaylist = function callbackLoadPlaylist()
      {
        var a = 1;
        //startApplication2();
      }    
      loadPlaylist( aFileStorage, aUrlStorage,
        aHardwareSettings, aOpeningHours, aScreenSaverConfig,
        callbackLoadPlaylist);
      */
    }
    startPlayback( aFileStorage, aUrlStorage, aHardwareSettings, aOpeningHours, aScreenSaverConfig, callbackStartPlaylist)
  }

  loadXMLConfigurationFiles( aFileStorage, aUrlStorage,
                              aHardwareSettings, aOpeningHours, aScreenSaverConfig,
                              callbackLoadXMLConfigurationFiles);

}

//=====================================================
var startApplication = function startApplication()
{

  var callbackLoadPlaylist = function callbackLoadPlaylist()
  {
    var a = 1;
    startApplication2();
  }

  loadPlaylist( aFileStorage, aUrlStorage,
                aHardwareSettings, aOpeningHours, aScreenSaverConfig,
                callbackLoadPlaylist);

}
//startApplication2();
//startApplication();


//---------------------------------------------------------------
function _start_MainLoop()
{
 //alert("client_playlistLoad");
 
 var callbackLoadPlaylist = function callbackLoadPlaylist()
 {
   //==
   if (aPlaylistError.isError())
   {
     //(<HTMLTextAreaElement>document.getElementById('playlisttext')).value="";
     //(<HTMLTextAreaElement>document.getElementById('playlistparsingresume')).value=aPlaylistError.getErrMsg();
     //(<HTMLInputElement>document.getElementById('playlistmessage')).value="Error Loading the playlist";
     alert("ERROR: loading the playlist." + aPlaylistError.getErrMsg()) ;
   }else{
     //var jsonStream = aPlaylistController._iPlaylistControllerConfig.getPlaylist().toJSONString();
     //(<HTMLTextAreaElement>document.getElementById('playlistparsingresume')).value=jsonStream;
     //(<HTMLTextAreaElement>document.getElementById('playlisttext')).value=jsonStream;
     //(<HTMLInputElement>document.getElementById('playlistmessage')).value="Successfully Load the playlist";
     var callbackMainLoop = function callbackMainLoop()
     {
       var a =1;
     }    
     aPlaylistController._iPlaylistControllerRun.mainLoop(null,null, callbackMainLoop);
   }
 }
 var playlistFile     = aPlaylistController._iPlaylistControllerConfig.getPlaybackGlobalConfig()._aPlaylistFile;
 var mediaFilesFolder = aPlaylistController._iPlaylistControllerConfig.getPlaybackGlobalConfig()._aMediaFilesFolder;
 var bTestFileExists = true;
 aPlaylistController._iPlaylistControllerConfig.loadPlaylist(playlistType, playlistFile, mediaFilesFolder, bTestFileExists, aPlaylistError, aPlaylistContext, callbackLoadPlaylist); 
 
}
//var ratio = window.devicePixelRatio || 1;
//var w = screen.width * ratio;
//var h = screen.height * ratio;

//var w1 = Math.max(w, h) * ratio;
//var h1 = Math.round(w1 * (1080.0 / 1920.0));//screen.height * ratio;

var refScreenLeft = 0;
var refScreenTop  = 0;
var refScreenRight = 1920;
var refScreenBottom   = 1080;
var refScreenWidth  = refScreenRight - refScreenLeft;
var refScreenHeight = refScreenBottom - refScreenTop;

var realWindowLeft   = 0;
var realWindowTop    = 0;
var realWindowRight  = window.innerWidth;
var realWindowBottom = window.innerHeight;
var realWindowWidth  = realWindowRight  - realWindowLeft;
var realWindowHeight = realWindowBottom - realWindowTop;

var realPlaybackLeft   = 0;
var realPlaybackTop    = 0;
var realPlaybackRight  = 0;
var realPlaybackBottom = 0;
var realPlaybackWidth  = 0;
var realPlaybackHeight = 0;
if (realWindowWidth < realWindowHeight)
  display_mode = "keep-aspect-ratio";
else
  display_mode = "stretch";
if (display_mode == "keep-aspect-ratio")
{
  if (realWindowWidth < Math.round(1.000000 * realWindowHeight *  refScreenWidth / refScreenHeight))
  {
    realPlaybackWidth  = realWindowWidth;
    realPlaybackHeight = Math.round(1.000000 * realPlaybackWidth * refScreenHeight / refScreenWidth);
    realPlaybackLeft   = 0;
    realPlaybackTop    = 0;
    realPlaybackRight  = realPlaybackLeft + realPlaybackWidth;
    realPlaybackBottom = realPlaybackTop + realPlaybackHeight;
  }else{
    realPlaybackHeight  = realWindowHeight;
    realPlaybackWidth   = Math.round(1.000000 * realPlaybackHeight * refScreenWidth / refScreenHeight);
    realPlaybackLeft   = 0;
    realPlaybackTop    = 0;
    realPlaybackRight  = realPlaybackLeft + realPlaybackWidth;
    realPlaybackBottom = realPlaybackTop + realPlaybackHeight;
  }
}else{

  realPlaybackWidth  = realWindowWidth;
  realPlaybackHeight = realWindowHeight;
  realPlaybackLeft   = 0;
  realPlaybackTop    = 0;
  realPlaybackRight  = realPlaybackLeft + realPlaybackWidth;
  realPlaybackBottom = realPlaybackTop + realPlaybackHeight;
}
aPlaylistController._iPlaylistControllerConfig.getScreenProperties().setScreenLeft(0);
aPlaylistController._iPlaylistControllerConfig.getScreenProperties().setScreenTop(0);
aPlaylistController._iPlaylistControllerConfig.getScreenProperties().setScreenRight(realPlaybackRight);//960);//1920);//960);
aPlaylistController._iPlaylistControllerConfig.getScreenProperties().setScreenBottom(realPlaybackBottom);//1080);//500);

var callbackLoadXMLConfigurationFiles = function callbackLoadXMLConfigurationFiles()
{
  configPlayback(aFileStorage, aUrlStorage,  aHardwareSettings, aOpeningHours, aScreenSaverConfig, callback);
  _start_MainLoop();  
}
loadXMLConfigurationFiles( aFileStorage, aUrlStorage,
                           aHardwareSettings, aOpeningHours, aScreenSaverConfig,
                           callbackLoadXMLConfigurationFiles);

/*
var ratio = window.devicePixelRatio || 1;
var is_touch_device = 'ontouchstart' in document.documentElement;
var touch_status = (is_touch_device) ? 'touch' : 'no-touch';
touch_status = ' ts:' + touch_status;
var width_height = 'wh:' + screen.width + 'x' + screen.height;
var client_width_height = ' cwh:' + document.documentElement.clientWidth + 'x' + document.documentElement.clientHeight;
var rw = screen.width * ratio;
var rh = screen.height * ratio;
var ratio_width_height = ' r:' + ratio + ' rwh:' + rw + 'x' + rh;
var data_string = width_height + client_width_height + ratio_width_height + touch_status;*/
//=========================================
// exported functions in html
//=========================================

//--------------------------------------
//  display Folder File list functions
//--------------------------------------
//---------------------------------------------------------------
var client_displayFolderFileList = function client_displayFolderFileList(storageName: string, folderName: string)
{
  return aSDKRenderer._iFileSystemRenderer.action_getFileList(storageName, folderName);
}    
 
//--------------------------------------
//  display File functions
//--------------------------------------

//---------------------------------------------------------------
var client_displayFile = function client_displayFile(storageName: string, folderName: string, fileName: string)
{
  return aSDKRenderer._iFileSystemRenderer.action_displayFile(storageName, folderName, fileName);
}

//---------------------------------------------------------------
var client_displayNewFile = function client_displayNewFile(storageName: string, folderName: string)
{
  return aSDKRenderer._iFileSystemRenderer.action_displayNewFile(storageName, folderName);
}    
//---------------------------------------------------------------
var client_eraseDisplayFile = function client_displayFile(storageName: string, folderName: string, fileName: string)
{
  return aSDKRenderer._iFileSystemRenderer.action_eraseDisplayFile();
}
//---------------------------------------------------------------
var client_saveFile = function client_saveFile(storageName: string, folderName: string, fileName: string, fileContent: string)
{
  return aSDKRenderer._iFileSystemRenderer.action_saveFile(storageName, folderName, fileName, fileContent);
}
//--------
// delete file
//------
//---------------------------------------------------------------
var client_displayDeleteFile = function client_displayDeleteFile(storageName: string, folderName: string, fileName: string)
{
  return aSDKRenderer._iFileSystemRenderer.action_displayDeleteFile(storageName, folderName, fileName);
}    
//---------------------------------------------------------------
var client_eraseDisplayDeleteFile = function client_eraseDisplayDeleteFile()
{
  return aSDKRenderer._iFileSystemRenderer.action_eraseDisplayDeleteFile();
}    
//---------------------------------------------------------------
var client_deleteFile = function client_deleteFile(storageName: string, folderName: string, fileName: string)
{
  return aSDKRenderer._iFileSystemRenderer.action_deleteFile(storageName, folderName, fileName);
}    

//--------
// copy file
//-------

//---------------------------------------------------------------
var client_displayCopyFile = function client_displayCopyFile(srcStorageName: string, srcFolderName: string, srcFileName: string, dstStorageName: string, dstFolderName: string, dstFileName: string)
{
  return aSDKRenderer._iFileSystemRenderer.action_displayCopyFile(srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName);
}
//---------------------------------------------------------------
var client_eraseDisplayCopyFile = function client_eraseDisplayCopyFile()
{
  return aSDKRenderer._iFileSystemRenderer.action_eraseDisplayCopyFile();
}
//---------------------------------------------------------------
var client_copyFile = function client_copyFile(srcStorageName: string, srcFolderName: string, srcFileName: string, dstStorageName: string, dstFolderName: string, dstFileName: string)
{
  return aSDKRenderer._iFileSystemRenderer.action_copyFile(srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName);
}

//--------
// move file
//-------

//---------------------------------------------------------------
var client_displayMoveFile = function client_displayMoveFile(srcStorageName: string, srcFolderName: string, srcFileName: string, dstStorageName: string, dstFolderName: string, dstFileName: string)
{
  return aSDKRenderer._iFileSystemRenderer.action_displayMoveFile(srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName);
}
//---------------------------------------------------------------
var client_eraseDisplayMoveFile = function client_eraseDisplayMoveFile()
{
  return aSDKRenderer._iFileSystemRenderer.action_eraseDisplayMoveFile();
}
//---------------------------------------------------------------
var client_moveFile = function client_moveFile(srcStorageName: string, srcFolderName: string, srcFileName: string, dstStorageName: string, dstFolderName: string, dstFileName: string)
{
  return aSDKRenderer._iFileSystemRenderer.action_moveFile(srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName);
}

//--------
// download file
//-------

//---------------------------------------------------------------
var client_displayDownloadFile = function client_displayDownloadFile(remoteUrlName: string, dstStorageName: string, dstFolderName: string, dstFileName: string)
{
  return aSDKRenderer._iFileSystemRenderer.action_displayDownloadFile(remoteUrlName, dstStorageName, dstFolderName, dstFileName);
}
//---------------------------------------------------------------
var client_eraseDisplayDownloadFile = function client_eraseDisplayDownloadFile()
{
  return aSDKRenderer._iFileSystemRenderer.action_eraseDisplayDownloadFile();
}
//---------------------------------------------------------------
var client_downloadFile = function client_downloadFile(remoteUrlName: string, dstStorageName: string, dstFolderName: string, dstFileName: string)
{
  return aSDKRenderer._iFileSystemRenderer.action_downloadFile(remoteUrlName, dstStorageName, dstFolderName, dstFileName);
}

//--------
// upload file
//-------

//---------------------------------------------------------------
var client_displayUploadFile = function client_displayUploadFile(srcStorageName: string, srcFolderName: string, srcFileName: string, remoteUrlName: string, remoteFolderName: string, remoteFileName: string)
{
  return aSDKRenderer._iFileSystemRenderer.action_displayUploadFile(srcStorageName, srcFolderName, srcFileName, remoteUrlName, remoteFolderName, remoteFileName);
}
//---------------------------------------------------------------
var client_eraseDisplayUploadFile = function client_eraseDisplayUploadFile()
{
  return aSDKRenderer._iFileSystemRenderer.action_eraseDisplayUploadFile();
}
//---------------------------------------------------------------
var client_uploadFile = function client_uploadFile(srcStorageName: string, srcFolderName: string, srcFileName: string, remoteUrlName: string, remoteFolderName: string, remoteFileName: string)
{
  return aSDKRenderer._iFileSystemRenderer.action_uploadFile(srcStorageName, srcFolderName, srcFileName, remoteUrlName, remoteFolderName, remoteFileName);
}

//--------
// unzip file
//-------

//---------------------------------------------------------------
var client_displayUnzipFile = function client_displayUnzipFile(zipStorageName: string, zipFolderName: string, zipFileName: string, unzipStorageName: string, unzipFolderName: string)
{
  return aSDKRenderer._iFileSystemRenderer.action_displayUnzipFile(zipStorageName, zipFolderName, zipFileName, unzipStorageName, unzipFolderName);
}
//---------------------------------------------------------------
var client_eraseDisplayUnzipFile = function client_eraseDisplayUnzipFile()
{
  return aSDKRenderer._iFileSystemRenderer.action_eraseDisplayUnzipFile();
}
//---------------------------------------------------------------
var client_unzipFile = function client_unzipFile(zipStorageName: string, zipFolderName: string, zipFileName: string, unzipStorageName: string, unzipFolderName: string)
{
  return aSDKRenderer._iFileSystemRenderer.action_unzipFile(zipStorageName, zipFolderName, zipFileName, unzipStorageName, unzipFolderName);
}

//--------
// zip file
//-------

//---------------------------------------------------------------
var client_displayZipFile = function client_displayZipFile(storageName: string, folderName: string, fileName: string, zipStorageName: string, zipFolderName: string, zipFileName: string)
{
  return aSDKRenderer._iFileSystemRenderer.action_displayZipFile(storageName, folderName, fileName, zipStorageName, zipFolderName, zipFileName);
}
//---------------------------------------------------------------
var client_eraseDisplayZipFile = function client_eraseDisplayZipFile()
{
  return aSDKRenderer._iFileSystemRenderer.action_eraseDisplayZipFile();
}
//---------------------------------------------------------------
var client_zipFile = function client_zipFile(storageName: string, folderName: string, fileName: string, zipStorageName: string, zipFolderName: string, zipFileName: string)
{
  return aSDKRenderer._iFileSystemRenderer.action_zipFile(storageName, folderName, fileName, zipStorageName, zipFolderName, zipFileName);
}


//=======================
//  Folder functions
//=======================

//--------------------------------------
//  display Folder functions
//--------------------------------------
//---------------------------------------------------------------
var client_displayNewFolder = function client_displayNewFolder(storageName: string, folderName: string)
{
  return aSDKRenderer._iFileSystemRenderer.action_displayNewFolder(storageName, folderName);
}    
//---------------------------------------------------------------
var client_eraseDisplayNewFolder = function client_eraseDisplayNewFolder()
{
  return aSDKRenderer._iFileSystemRenderer.action_eraseDisplayNewFolder();
}    
//---------------------------------------------------------------
var client_createFolder = function client_createFolder(storageName: string, folderName: string)
{
  return aSDKRenderer._iFileSystemRenderer.action_createFolder(storageName, folderName);
}    

//--------
// delete folder
//-------

//---------------------------------------------------------------
var client_displayDeleteFolder = function client_displayDeleteFolder(storageName: string, folderName: string)
{
  return aSDKRenderer._iFileSystemRenderer.action_displayDeleteFolder(storageName, folderName);
}
//---------------------------------------------------------------
var client_eraseDisplayDeleteFolder = function client_eraseDisplayDeleteFolder()
{
  return aSDKRenderer._iFileSystemRenderer.action_eraseDisplayDeleteFolder();
}
//---------------------------------------------------------------
var client_deleteFolder = function client_deleteFolder(storageName: string, folderName: string)
{
  return aSDKRenderer._iFileSystemRenderer.action_deleteFolder(storageName, folderName);
}

//--------
// copy folder
//-------

//---------------------------------------------------------------
var client_displayCopyFolder = function client_displayCopyFolder(srcStorageName: string, srcFolderName: string, dstStorageName: string, dstFolderName: string)
{
  return aSDKRenderer._iFileSystemRenderer.action_displayCopyFolder(srcStorageName, srcFolderName, dstStorageName, dstFolderName);
}
//---------------------------------------------------------------
var client_eraseDisplayCopyFolder = function client_eraseDisplayCopyFolder()
{
  return aSDKRenderer._iFileSystemRenderer.action_eraseDisplayCopyFolder();
}
//---------------------------------------------------------------
var client_copyFolder = function client_copyFolder(srcStorageName: string, srcFolderName: string, dstStorageName: string, dstFolderName: string)
{
  return aSDKRenderer._iFileSystemRenderer.action_copyFolder(srcStorageName, srcFolderName, dstStorageName, dstFolderName);
}

//--------
// move folder
//-------

//---------------------------------------------------------------
var client_displayMoveFolder = function client_displayMoveFolder(srcStorageName: string, srcFolderName: string, dstStorageName: string, dstFolderName: string)
{
  return aSDKRenderer._iFileSystemRenderer.action_displayMoveFolder(srcStorageName, srcFolderName, dstStorageName, dstFolderName);
}
//---------------------------------------------------------------
var client_eraseDisplayMoveFolder = function client_eraseDisplayMoveFolder()
{
  return aSDKRenderer._iFileSystemRenderer.action_eraseDisplayMoveFolder();
}
//---------------------------------------------------------------
var client_moveFolder = function client_moveFolder(srcStorageName: string, srcFolderName: string, dstStorageName: string, dstFolderName: string)
{
  return aSDKRenderer._iFileSystemRenderer.action_moveFolder(srcStorageName, srcFolderName, dstStorageName, dstFolderName);
}

//--------
// zip folder
//-------

//---------------------------------------------------------------
var client_displayZipFolder = function client_displayZipFolder(storageName: string, folderName: string, zipStorageName: string, zipFolderName: string, zipFileName: string)
{
  return aSDKRenderer._iFileSystemRenderer.action_displayZipFolder(storageName, folderName, zipStorageName, zipFolderName, zipFileName);
}
//---------------------------------------------------------------
var client_eraseDisplayZipFolder = function client_eraseDisplayZipFolder()
{
  return aSDKRenderer._iFileSystemRenderer.action_eraseDisplayZipFolder();
}
//---------------------------------------------------------------
var client_zipFolder = function client_zipFolder(storageName: string, folderName: string, zipStorageName: string, zipFolderName: string, zipFileName: string)
{
  return aSDKRenderer._iFileSystemRenderer.action_zipFolder(storageName, folderName, zipStorageName, zipFolderName, zipFileName);
}


//=========================
//  display image function
//=========================
//---------------------------------------------------------------
var client_start_display_imageFile = function client_start_display_imageFile(imgStorageName: string, imgFolderName: string, imgFileName: string)
{
  return aSDKRenderer._iFileSystemRenderer.start_display_imageFile(imgStorageName, imgFolderName, imgFileName);
}

//---------------------------------------------------------------
var client_erase_display_imageFile = function client_erase_display_imageFile()
{
  return aSDKRenderer._iFileSystemRenderer.erase_display_imageFile();
}

//=========================
//  display video function
//=========================
//---------------------------------------------------------------
var client_start_display_videoFile = function client_start_display_videoFile(imgStorageName: string, imgFolderName: string, imgFileName: string)
{
  return aSDKRenderer._iFileSystemRenderer.start_display_videoFile(imgStorageName, imgFolderName, imgFileName);
}

//---------------------------------------------------------------
var client_erase_display_videoFile = function client_erase_display_videoFile()
{
  return aSDKRenderer._iFileSystemRenderer.erase_display_videoFile();
}

//=========================
//  display stream function
//=========================
//---------------------------------------------------------------
var client_start_display_streamFile = function client_start_display_streamFile(imgStorageName: string, imgFolderName: string, imgFileName: string)
{
  return aSDKRenderer._iFileSystemRenderer.start_display_streamFile(imgStorageName, imgFolderName, imgFileName);
}

//---------------------------------------------------------------
var client_erase_display_streamFile = function client_erase_display_streamFile()
{
  return aSDKRenderer._iFileSystemRenderer.erase_display_streamFile();
}

//=========================
//  compute sha file
//=========================

//---------------------------------------------------------------
var client_displayComputeAndSaveShaFile = function client_displayComputeAndSaveShaFile(srcStorageName: string, srcFolderName: string, srcFileName: string, 
                                                                         shaStorageName: string, shaFolderName: string, shaFileName: string)
{
  return aSDKRenderer._iFileSystemRenderer.action_displayComputeAndSaveShaFile( srcStorageName, srcFolderName, srcFileName, 
                                                                         shaStorageName, shaFolderName, shaFileName);
}

//---------------------------------------------------------------
var client_eraseDisplayComputeAndSaveShaFile = function client_eraseDisplayComputeAndSaveShaFile()
{
  return aSDKRenderer._iFileSystemRenderer.action_eraseDisplayComputeAndSaveShaFile();
}

//---------------------------------------------------------------
var client_computeAndSaveShaFile = function client_computeAndSaveShaFile( srcStorageName: string, srcFolderName: string, srcFileName: string, 
                                                            shaStorageName: string, shaFolderName: string, shaFileName: string)
{
  return aSDKRenderer._iFileSystemRenderer.action_computeAndSaveShaFile( srcStorageName, srcFolderName, srcFileName, 
                                                                  shaStorageName, shaFolderName, shaFileName);
}

//====================
// Log Functions
//====================

//---------------------------------------------------------------
var client_displayLogRenderer = function client_displayLogRenderer()
{
   return aSDKRenderer._iFileSystemRenderer.action_displayLogRenderer();
}

//---------------------------------------------------------------
var client_hideLogRenderer = function client_hideLogRenderer()
{
   return aSDKRenderer._iFileSystemRenderer.action_hideLogRenderer();
}

//---------------------------------------------------------------
var client_eraseLogRenderer = function client_eraseLogRenderer()
{
   return aSDKRenderer._iFileSystemRenderer.action_eraseLogRenderer();
}

//---------------------------------------------------------------
var client_viewLogFile = function client_viewLogFile()
{
   return aSDKRenderer._iFileSystemRenderer.action_viewLogFile();
}

//---------------------------------------------------------------
var client_closeViewLogFile = function client_closeViewLogFile()
{
   return aSDKRenderer._iFileSystemRenderer.action_closeViewLogFile();
}


//===============================
// Display Xml HardwareSettings
//================================

//---------------------------------------------------------------
var client_displayHardwareSettings = function client_displayHardwareSettings()
{
   return aSDKRenderer._iFileSystemRenderer.action_displayHardwareSettings();
}

//---------------------------------------------------------------
var client_closeHardwareSettings = function client_closeHardwareSettings()
{
   return aSDKRenderer._iFileSystemRenderer.action_closeHardwareSettings();
}

//===============================
// Display Xml OpeningHours
//================================

//---------------------------------------------------------------
var client_displayOpeningHours = function client_displayOpeningHours()
{
   return aSDKRenderer._iFileSystemRenderer.action_displayOpeningHours();
}

//---------------------------------------------------------------
var client_closeOpeningHours = function client_closeOpeningHours()
{
   return aSDKRenderer._iFileSystemRenderer.action_closeOpeningHours();
}


//===================================
// Display Xml Screen Render Config
//===================================

//---------------------------------------------------------------
var client_displayScreenRenderConfig = function client_displayScreenRenderConfig()
{
   //return aSDKRenderer._iFileSystemRenderer.action_displayScreenRenderConfig();
}

//---------------------------------------------------------------
var client_closeScreenRenderConfig = function client_closeScreenRenderConfig()
{
   //return aSDKRenderer._iFileSystemRenderer.action_closeScreenRenderConfig();
}

//===================================
// Get Default Resource Storage Name
//===================================

//---------------------------------------------------------------
var client_getDefaultResourceStorageName = function client_getDefaultResourceStorageName()
{
  return _getDefaultResourceStorageName();
}

//===================================
// Get Default Resource Storage Url Name
//===================================

//---------------------------------------------------------------
var client_getDefaultResourceStorageUrlName = function client_getDefaultResourceStorageUrlName()
{
   //alert("_getDefaultResourceStorageUrlName()");
   return _getDefaultResourceStorageUrlName();
}

//===================================
// Get Default Storage Url Name
//===================================

//---------------------------------------------------------------
var client_getDefaultStorageUrlName = function client_getDefaultStorageUrlName()
{
   return _getDefaultStorageUrlName();
}


//===================================
// prepare and play media file
//===================================

//---------------------------------------------------------------
var client_prepareAndPlayMediaFile = function client_prepareAndPlayMediaFile(iDesign: number, iZone: number, iMediaInZone : number, designs)
{
   //alert("client_prepareAndPlayMediaFile iDesign: " +  iDesign + ", iZone: " + iZone + ", iMediaInZone " + iMediaInZone  + ", designs[0].id: " + designs[0].designId);
   _prepareAndPlayMediaFile(aFileStorage, aUrlStorage, iDesign, iZone, iMediaInZone, designs);
}

//===================================
// change Design
//===================================

//---------------------------------------------------------------
var client_changeDesign = function client_changeDesign(iOldDesign: number, iNewDesign: number, designs)
{
   //alert("client_changeDesign iOldDesign: " +  iOldDesign + ", iDesign:" + iNewDesign + ", designs[0].id: " + designs[0].designId);
                                              //", iZone: " + iZone + ", iMediaInZone " + iMediaInZone  + ", designs[0].id: " + designs[0].designId);
   _changeDesign(iOldDesign, iNewDesign, designs, aFileStorage, aUrlStorage);
}

//===================================
// playlist
//===================================

//---------------------------------------------------------------
var client_playlistLoad = function client_playlistLoad()
{
   //alert("client_playlistLoad");
   _client_playlistLoad();
}

//---------------------------------------------------------------
var client_playlistSave = function client_playlistSave()
{
   //alert("client_playlistSave");
   _client_playlistSave();
}

declare var global_SDKRenderer : any;

global_SDKRenderer.displayFolderFileList  = client_displayFolderFileList;

global_SDKRenderer.displayFile            = client_displayFile;
global_SDKRenderer.displayNewFile         = client_displayNewFile;
global_SDKRenderer.eraseDisplayFile       = client_eraseDisplayFile;
global_SDKRenderer.saveFile               = client_saveFile;

global_SDKRenderer.displayDeleteFile      = client_displayDeleteFile;
global_SDKRenderer.eraseDisplayDeleteFile = client_eraseDisplayDeleteFile;
global_SDKRenderer.deleteFile             = client_deleteFile;

global_SDKRenderer.displayCopyFile        = client_displayCopyFile;
global_SDKRenderer.eraseDisplayCopyFile   = client_eraseDisplayCopyFile;
global_SDKRenderer.copyFile               = client_copyFile;

global_SDKRenderer.displayMoveFile        = client_displayMoveFile;
global_SDKRenderer.eraseDisplayMoveFile   = client_eraseDisplayMoveFile;
global_SDKRenderer.moveFile               = client_moveFile;

global_SDKRenderer.displayDownloadFile      = client_displayDownloadFile;
global_SDKRenderer.eraseDisplayDownloadFile = client_eraseDisplayDownloadFile;
global_SDKRenderer.downloadFile             = client_downloadFile;

global_SDKRenderer.displayUploadFile        = client_displayUploadFile;
global_SDKRenderer.eraseDisplayUploadFile   = client_eraseDisplayUploadFile;
global_SDKRenderer.uploadFile               = client_uploadFile;

global_SDKRenderer.displayUnzipFile         = client_displayUnzipFile;
global_SDKRenderer.eraseDisplayUnzipFile    = client_eraseDisplayUnzipFile;
global_SDKRenderer.unzipFile                = client_unzipFile;

global_SDKRenderer.displayZipFile           = client_displayZipFile;
global_SDKRenderer.eraseDisplayZipFile      = client_eraseDisplayZipFile;
global_SDKRenderer.zipFile                  = client_zipFile;



global_SDKRenderer.displayNewFolder      = client_displayNewFolder;
global_SDKRenderer.eraseDisplayNewFolder = client_eraseDisplayNewFolder;
global_SDKRenderer.createFolder          = client_createFolder;       

global_SDKRenderer.displayDeleteFolder   = client_displayDeleteFolder;       
global_SDKRenderer.eraseDisplayDeleteFolder   = client_eraseDisplayDeleteFolder;       
global_SDKRenderer.deleteFolder          = client_deleteFolder;

global_SDKRenderer.displayCopyFolder      = client_displayCopyFolder;       
global_SDKRenderer.eraseDisplayCopyFolder = client_eraseDisplayCopyFolder;       
global_SDKRenderer.copyFolder             = client_copyFolder;

global_SDKRenderer.displayMoveFolder        = client_displayMoveFolder;       
global_SDKRenderer.eraseDisplayMoveFolder   = client_eraseDisplayMoveFolder;       
global_SDKRenderer.moveFolder               = client_moveFolder;

global_SDKRenderer.displayZipFolder         = client_displayZipFolder;       
global_SDKRenderer.eraseDisplayZipFolder    = client_eraseDisplayZipFolder;       
global_SDKRenderer.zipFolder                = client_zipFolder;

//------------------
global_SDKRenderer.start_display_imageFile      = client_start_display_imageFile;
global_SDKRenderer.erase_display_imageFile      = client_erase_display_imageFile;

global_SDKRenderer.start_display_videoFile      = client_start_display_videoFile;
global_SDKRenderer.erase_display_videoFile      = client_erase_display_videoFile;

global_SDKRenderer.start_display_streamFile      = client_start_display_streamFile;
global_SDKRenderer.erase_display_streamFile      = client_erase_display_streamFile;

//------------------
global_SDKRenderer.displayComputeAndSaveShaFile      = client_displayComputeAndSaveShaFile;
global_SDKRenderer.eraseDisplayComputeAndSaveShaFile = client_eraseDisplayComputeAndSaveShaFile;
global_SDKRenderer.computeAndSaveShaFile             = client_computeAndSaveShaFile;

//-------------------
global_SDKRenderer.displayLogRenderer                = client_displayLogRenderer;
global_SDKRenderer.hideLogRenderer                   = client_hideLogRenderer;
global_SDKRenderer.eraseLogRenderer                  = client_eraseLogRenderer;
global_SDKRenderer.viewLogFile                       = client_viewLogFile;
global_SDKRenderer.closeViewLogFile                  = client_closeViewLogFile;

//---------------
global_SDKRenderer.displayHardwareSettings        = client_displayHardwareSettings;
global_SDKRenderer.closeHardwareSettings          = client_closeHardwareSettings;

//---------------
global_SDKRenderer.displayOpeningHours            = client_displayOpeningHours;
global_SDKRenderer.closeOpeningHours              = client_closeOpeningHours;


global_SDKRenderer.displayScreenRenderConfig     = client_displayScreenRenderConfig;
global_SDKRenderer.closeScreenRenderConfig       = client_closeScreenRenderConfig;

global_SDKRenderer.getDefaultResourceStorageName     = client_getDefaultResourceStorageName;
global_SDKRenderer.getDefaultResourceStorageUrlName  = client_getDefaultResourceStorageUrlName;

global_SDKRenderer.getDefaultStorageUrlName          = client_getDefaultStorageUrlName;

global_SDKRenderer.prepareAndPlayMediaFile           = client_prepareAndPlayMediaFile;
global_SDKRenderer.changeDesign                      = client_changeDesign;

global_SDKRenderer.playlistLoad                     = client_playlistLoad;
global_SDKRenderer.playlistSave                     = client_playlistSave;

export {
  client_displayFolderFileList,

  client_displayFile,
  client_displayNewFile,
  client_eraseDisplayFile,
  client_saveFile,

  client_displayDeleteFile,
  client_eraseDisplayDeleteFile,
  client_deleteFile,
  
  client_displayCopyFile,
  client_eraseDisplayCopyFile,
  client_copyFile,

  client_displayMoveFile,
  client_eraseDisplayMoveFile,
  client_moveFile,

  client_displayDownloadFile,
  client_eraseDisplayDownloadFile,
  client_downloadFile,

  client_displayUploadFile,
  client_eraseDisplayUploadFile,
  client_uploadFile,

  client_displayUnzipFile,
  client_eraseDisplayUnzipFile,
  client_unzipFile,

  client_displayZipFile,
  client_eraseDisplayZipFile,
  client_zipFile,


  client_displayNewFolder,
  client_eraseDisplayNewFolder,
  client_createFolder,

  client_displayDeleteFolder,  
  client_eraseDisplayDeleteFolder,
  client_deleteFolder,

  client_displayCopyFolder,  
  client_eraseDisplayCopyFolder,
  client_copyFolder,

  client_displayMoveFolder,  
  client_eraseDisplayMoveFolder,
  client_moveFolder,

  client_displayZipFolder,  
  client_eraseDisplayZipFolder,
  client_zipFolder,

  client_start_display_imageFile,
  client_erase_display_imageFile,

  client_start_display_videoFile,
  client_erase_display_videoFile,

  client_start_display_streamFile,
  client_erase_display_streamFile,

  client_displayComputeAndSaveShaFile,
  client_eraseDisplayComputeAndSaveShaFile,
  client_computeAndSaveShaFile,

  client_displayLogRenderer,
  client_hideLogRenderer,
  client_eraseLogRenderer,
  client_viewLogFile,
  client_closeViewLogFile,

  client_displayHardwareSettings,
  client_closeHardwareSettings,
  
  client_displayOpeningHours,
  client_closeOpeningHours,

  client_displayScreenRenderConfig,
  client_closeScreenRenderConfig,
  
  client_getDefaultResourceStorageName,
  client_getDefaultResourceStorageUrlName,

  client_getDefaultStorageUrlName,

  client_prepareAndPlayMediaFile,
  client_changeDesign,

  client_playlistLoad,
  client_playlistSave,
    
}

//=====================================================
//-  the initialization of input parameters 
//aSDKRenderer._iFileSystemRenderer.render_home();
//=====================================================







  //-----------------
//var callback2 = function(ctx: amGeneralContext.am_general.A_Context)
//{
  //console.log( ctx.getResult);
//}
//aSDKJsTV._iSDKFileSystem.getFileList(".\\deploy\\node.js\\10.15.3LTS\\public\\test_filesystem",error,context,callback2);//"C:\\W\\80\\Mood.MVisionJsPlaybackEngine\\deploy\\node.js\\10.15.3LTS\\public",error,context,null)
//var nSDKWebOS:nmodSDKTizen.nm_transversalservices.N_SDK_Tizen = new nmodSDKTizen.nm_transversalservices.N_SDK_Tizen(null, null, null, error);


//============================================ unit tests ===============================================================================
var fileFullName = "file://usb:2/StartupConfig.ts";
var storageName = "file://usb:2/";
var folderName  = "";
var fileName    = "StartupConfig.ts";
var fileContent = "+++ this is a test for a test append";
//variables for testing filesystem on Tizen
//var storageName = "removable_sda1";
//var folderName = "";
//var folderName = "/tests2/";
//var fileName = "70.zip";
var bUseCallback:boolean =true;
var bRunTest = "nothing";//"download-file";//"set-get-time-zone";
//"set-get-time-zone";
//"get-time-zone";
//"set-crt-time";
//"set-get-crt-time";
//"get-crt-time";//"download-file";//"read-text-file-2";//"unzip-file2";
//"read-text-file";
//"read-text-file-2";
//"write-text-file";
//"get-file-list"
//"get-file-list2"
//"file-exists";
//"file-exists2";
//"folder-exists";
//"create-folder" ; 
//"delete-folder" ; 
//"write-text-file";
//"append-text-to-file"
//"remove-file"
//"remove-directory"
//"create-directory"
//"unzip-file2"

//----------------------------------------------------------  
//                          test read-file
//----------------------------------------------------------  
if (bRunTest == "read-text-file") 
{ 
  if ( bUseCallback == true) 
  {
    //--   the callback
    var callback = function(ctx: amGeneralContext.am_general.A_Context)
    {
      document.getElementById("testreadfile").innerHTML += "<p>use-callback</p>";
      document.getElementById("testreadfile").innerHTML += "<p>" + context.getResult() + "</p>";
      console.log( ctx.getResult);
    }
    document.getElementById("testreadfile").innerHTML += "<p>before call</p>";
    aSDKJsTV._iSDKFileSystem.readTextFile(fileFullName,error, context, callback);
    //-------------------------
  }else{
    aSDKJsTV._iSDKFileSystem.promise_readTextFile(fileFullName,error, context, null)//callback)
   .then(ctx => 
    { 
      document.getElementById("testreadfile").innerHTML += "<p>use-promise</p>";
      document.getElementById("testreadfile").innerHTML += ctx.getResult();
      console.log( ctx.getResult);
    });
  }
} 
if (bRunTest == "read-text-file-2") 
{ 
  if ( bUseCallback == true) 
  {
    //--   the callback
    var callback = function(ctx: amGeneralContext.am_general.A_Context)
    {
      document.getElementById("testreadfile").innerHTML += "<p>use-callback</p>";
      document.getElementById("testreadfile").innerHTML += "<p>" + context.getResult() + "</p>";
      console.log( ctx.getResult);
    }
    aSDKJsTV._iSDKFileSystem.readTextFile2(storageName, folderName, fileName, error, context, callback);
    //-------------------------
  }else{
  //   nSDKWebOS._iSDKFileSystem.promise_readTextFile2(storageName, folderName, fileName, error, context, null)//callback)
  //  .then(ctx => 
  //   { 
  //     document.getElementById("testreadfile").innerHTML += "<p>use-promise</p>";
  //     document.getElementById("testreadfile").innerHTML += ctx.getResult();
  //     console.log( ctx.getResult);
  //   });
  }
} 


//-------------------------  
// test write-file
//-------------------------
if ( bRunTest == "write-text-file")
{ 
  var fileFullName2 = "file://usb:2/StartupConfig2.ts";
  //var fileContent: string = "tra la la 2";
  if (bUseCallback == true) 
  {
   
    //--   the callback
    var callback = function(ctx: amGeneralContext.am_general.A_Context)
    {
      document.getElementById("testreadfile").innerHTML += "<p>use-callback</p>";
      document.getElementById("testreadfile").innerHTML += context.getResult();
      //console.log( context.getResult);
    }
    aSDKJsTV._iSDKFileSystem.writeTextFile2(storageName,folderName,fileName, fileContent, error, context, callback);
    //nSDKWebOS._iSDKFileSystem.writeTextFile(fileFullName2, fileContent, error, context, callback);
    //-------------------------
  }else{
    // nSDKWebOS._iSDKFileSystem.promise_writeTextFile(fileFullName2, fileContent, error, context, null)
    // .then(ctx => 
    // { 
    //   document.getElementById("testreadfile").innerHTML += "<p>use-promise</p>";
    //   //document.getElementById("testreadfile").innerHTML += ctx.getResult();
    //   //console.log( ctx.getResult);
    // });
  }
}

//-------------------------  
// test append text to a file
//-------------------------
if ( bRunTest == "append-text-to-file")
{ 
  if (bUseCallback == true) 
  {
   
    //--   the callback
    var callback = function(ctx: amGeneralContext.am_general.A_Context)
    {
      document.getElementById("testreadfile").innerHTML += "<p>use-callback</p>";
      document.getElementById("testreadfile").innerHTML += context.getResult();
      //console.log( context.getResult);
    }
    aSDKJsTV._iSDKFileSystem.appendTextToFile(storageName, folderName, fileName, fileContent, error, context, callback);
  }else{
    // nSDKWebOS._iSDKFileSystem.promise_writeTextFile(fileFullName2, fileContent, error, context, null)
    // .then(ctx => 
    // { 
    //   document.getElementById("testreadfile").innerHTML += "<p>use-promise</p>";
    //   //document.getElementById("testreadfile").innerHTML += ctx.getResult();
    //   //console.log( ctx.getResult);
    // });
  }
}

//-------------------------  
// test unzip file
//-------------------------
if ( bRunTest == "unzip-file2")
{ 
  if (bUseCallback == true) 
  {

    //--   the callback
    var callback = function(ctx: amGeneralContext.am_general.A_Context)
    {
      document.getElementById("testreadfile").innerHTML += "<p>use-callback</p>";
      //document.getElementById("testreadfile").innerHTML += context.getResult();
      //console.log( context.getResult);
    }
    aSDKJsTV._iSDKFileSystem.unzipFile2(storageName, folderName, fileName, "storageDestination", "folderDestination", error, context, callback);
  }else{
    // nSDKWebOS._iSDKFileSystem.promise_writeTextFile(fileFullName2, fileContent, error, context, null)
    // .then(ctx => 
    // { 
    //   document.getElementById("testreadfile").innerHTML += "<p>use-promise</p>";
    //   //document.getElementById("testreadfile").innerHTML += ctx.getResult();
    //   //console.log( ctx.getResult);
    // });
  }
}

//-------------------------  
// test remove file
//-------------------------
if ( bRunTest == "remove-file")
{ 
  if (bUseCallback == true) 
  {
   
    //--   the callback
    var callback = function(ctx: amGeneralContext.am_general.A_Context)
    {
      document.getElementById("testreadfile").innerHTML += "<p>use-callback</p>";
      document.getElementById("testreadfile").innerHTML += context.getResult();
      //console.log( context.getResult);
    }
    aSDKJsTV._iSDKFileSystem.removeFile2(storageName, folderName, fileName, error, context, callback);
  }else{
    // nSDKWebOS._iSDKFileSystem.promise_writeTextFile(fileFullName2, fileContent, error, context, null)
    // .then(ctx => 
    // { 
    //   document.getElementById("testreadfile").innerHTML += "<p>use-promise</p>";
    //   //document.getElementById("testreadfile").innerHTML += ctx.getResult();
    //   //console.log( ctx.getResult);
    // });
  }
}

//-------------------------  
// test remove directory
//-------------------------
if ( bRunTest == "remove-directory")
{ 
  if (bUseCallback == true) 
  {
   
    //--   the callback
    var callback = function(ctx: amGeneralContext.am_general.A_Context)
    {
      document.getElementById("testreadfile").innerHTML += "<p>use-callback</p>";
      document.getElementById("testreadfile").innerHTML += context.getResult();
      //console.log( context.getResult);
    }
    aSDKJsTV._iSDKFileSystem.deleteFolder2(storageName, folderName, error, context, callback);
  }else{
    // nSDKWebOS._iSDKFileSystem.promise_writeTextFile(fileFullName2, fileContent, error, context, null)
    // .then(ctx => 
    // { 
    //   document.getElementById("testreadfile").innerHTML += "<p>use-promise</p>";
    //   //document.getElementById("testreadfile").innerHTML += ctx.getResult();
    //   //console.log( ctx.getResult);
    // });
  }
}

//-------------------------  
// test create directory
//-------------------------
if ( bRunTest == "create-directory")
{ 
  if (bUseCallback == true) 
  {
   
    //--   the callback
    var callback = function(ctx: amGeneralContext.am_general.A_Context)
    {
      document.getElementById("testreadfile").innerHTML += "<p>use-callback</p>";
      document.getElementById("testreadfile").innerHTML += context.getResult();
      //console.log( context.getResult);
    }
    aSDKJsTV._iSDKFileSystem.createFolder2(storageName, folderName, error, context, callback);
  }else{
    // nSDKWebOS._iSDKFileSystem.promise_writeTextFile(fileFullName2, fileContent, error, context, null)
    // .then(ctx => 
    // { 
    //   document.getElementById("testreadfile").innerHTML += "<p>use-promise</p>";
    //   //document.getElementById("testreadfile").innerHTML += ctx.getResult();
    //   //console.log( ctx.getResult);
    // });
  }
}

//-------------------------  
// test get-file-list
//-------------------------
if ( bRunTest == "get-file-list")
{ 
  var folderFullName = "file://usb:2/";
  var fileContent: string = "tra la la 2";
  if (bUseCallback == true) 
  {
   
    //--   the callback
    var callback = function(ctx: amGeneralContext.am_general.A_Context)
    {
      document.getElementById("testreadfile").innerHTML += "<p>use-callback</p>";
      var fileInfoList = ctx.getArrayResult();
      document.getElementById("testreadfile").innerHTML += "<h3> Folder: " + folderFullName + "</h3>";
      for(var i = 0 ; i < fileInfoList.length; ++i)
      {
        var fileInfo = fileInfoList[i];	
        document.getElementById("testreadfile").innerHTML += "<p>" + fileInfo.name; + "</p>";
        console.log( ctx.getResult);
      } 
    }
    aSDKJsTV._iSDKFileSystem.getFileList(folderFullName, error, context, callback);
    //-------------------------
  }else{
    aSDKJsTV._iSDKFileSystem.promise_getFileList(folderFullName, error, context, null)//callback)
    .then(ctx => 
    { 
      document.getElementById("testreadfile").innerHTML += "<p>use-promise</p>";
      var fileInfoList = ctx.getArrayResult();
      document.getElementById("testreadfile").innerHTML += "<h3> Folder: " + folderFullName + "</h3>";
      for(var i = 0 ; i < fileInfoList.length; ++i)
      {
        var fileInfo = fileInfoList[i];	
        document.getElementById("testreadfile").innerHTML += "<p>" + fileInfo.name; + "</p>";
        console.log( ctx.getResult);
      } 
    });
  }
}


//-------------------------  
// test get-file-list Tizen
//-------------------------
if ( bRunTest == "get-file-list2")
{ 
  var folderFullName = "/tests/";
  if (bUseCallback == true) 
  {
   
    //--   the callback
    var callback = function(ctx: amGeneralContext.am_general.A_Context)
    {
      document.getElementById("testreadfile").innerHTML += "<p>use-callback</p>";
      var fileInfoList = ctx.getArrayResult();
      document.getElementById("testreadfile").innerHTML += "<h3> Folder: " + folderFullName + "</h3>";
      for(var i = 0 ; i < fileInfoList.length; ++i)
      {
        var fileInfo = fileInfoList[i];	
        document.getElementById("testreadfile").innerHTML += "<p>" + fileInfo + "</p>";
        console.log( ctx.getResult);
      } 
    }
    aSDKJsTV._iSDKFileSystem.getFileList2(storageName, folderFullName, error, context, callback);
    //-------------------------
  }else{
    /*nSDKWebOS._iSDKFileSystem.promise_getFileList(folderFullName, error, context, null)//callback)
    .then(ctx => 
    { 
      document.getElementById("testreadfile").innerHTML += "<p>use-promise</p>";
      var fileInfoList = ctx.getArrayResult();
      document.getElementById("testreadfile").innerHTML += "<h3> Folder: " + folderFullName + "</h3>";
      for(var i = 0 ; i < fileInfoList.length; ++i)
      {
        var fileInfo = fileInfoList[i];	
        document.getElementById("testreadfile").innerHTML += "<p>" + fileInfo.name; + "</p>";
        console.log( ctx.getResult);
      } 
    });*/
  }
}

//-------------------------  
// create-folder
//-------------------------
if ( bRunTest == "create-folder")
{ 
  var newFolderFullName = "file://usb:2/folder1/folder2";
  if (bUseCallback == true) 
  {
   
    //--   the callback
    var callback = function(ctx: amGeneralContext.am_general.A_Context)
    {
      document.getElementById("testreadfile").innerHTML += "<p>use-callback</p>";
      document.getElementById("testreadfile").innerHTML += "<h3> Folder created: " + newFolderFullName + "</h3>";
      console.log( "Folder created: " + folderFullName );
    }
    aSDKJsTV._iSDKFileSystem.createFolder(newFolderFullName, error, context, callback);
    //-------------------------
  }else{
    aSDKJsTV._iSDKFileSystem.promise_createFolder(newFolderFullName, error, context, null)
    .then(ctx => 
    { 
      document.getElementById("testreadfile").innerHTML += "<p>use-promise</p>";
      document.getElementById("testreadfile").innerHTML += "<h3> Folder created: " + newFolderFullName + "</h3>";
      console.log( "Folder created: " + folderFullName );
    });
  }
}

//-------------------------  
// delete-folder
//-------------------------
if ( bRunTest == "delete-folder")
{ 
  var folderToBeRemoved = "file://usb:2/folder1/folder2";
  if (bUseCallback == true) 
  {
   
    //--   the callback
    var callback = function(ctx: amGeneralContext.am_general.A_Context)
    {
      document.getElementById("testreadfile").innerHTML += "<p>use-callback</p>";
      document.getElementById("testreadfile").innerHTML += "<h3>Folder: " + folderToBeRemoved + " was deleted.</h3>";
      console.log( "Folder: " + folderToBeRemoved + " was deleted." + folderToBeRemoved);
    }
    aSDKJsTV._iSDKFileSystem.deleteFolder(folderToBeRemoved, error, context, callback);
    //-------------------------
  }else{
    aSDKJsTV._iSDKFileSystem.promise_deleteFolder(folderToBeRemoved, error, context, null)
    .then(ctx => 
    { 
      document.getElementById("testreadfile").innerHTML += "<p>use-promise</p>";
      document.getElementById("testreadfile").innerHTML += "<h3>Folder: " + folderToBeRemoved + " was deleted.</h3>";
      console.log( "Folder: " + folderToBeRemoved + " was deleted." + folderToBeRemoved);
    });
  }
}


//--------------------------------------------------------------------  
//                    test file-exists
//--------------------------------------------------------------------
if ( bRunTest == "file-exists")
{ 
  var fileThatExists = "file://usb:2/StartupConfig.ts";
  var fileThatDoesNotExists = "file://usb:2/StartupConfig100.ts";
  if (bUseCallback == true) 
  {
   
    //--   the callback
    var callback = function(ctx: amGeneralContext.am_general.A_Context)
    {
      document.getElementById("testreadfile").innerHTML += "<p>use-callback</p>";
      document.getElementById("testreadfile").innerHTML += "<h3> File " + fileThatExists + " exists? " + ctx.getBoolResult() + "</h3>";
      console.log( "File exists?: " + ctx.getBoolResult());
    }
    aSDKJsTV._iSDKFileSystem.fileExists(fileThatExists, error, context, callback);
    
    
    //--   the callback
    var callback2 = function(ctx: amGeneralContext.am_general.A_Context)
    {
       document.getElementById("testreadfile").innerHTML += "<p>use-callback</p>";
       document.getElementById("testreadfile").innerHTML += "<h3> File " + fileThatDoesNotExists + " exists? " + ctx.getBoolResult() + "</h3>";
       console.log( "File exists?: " + ctx.getBoolResult());
    }
    aSDKJsTV._iSDKFileSystem.fileExists(fileThatDoesNotExists, error, context, callback2);
    
    //-------------------------
  }else{
    aSDKJsTV._iSDKFileSystem.promise_fileExists(fileThatExists, error, context, null)
    .then(ctx => 
    { 
      document.getElementById("testreadfile").innerHTML += "<p>use-promised</p>";
      document.getElementById("testreadfile").innerHTML += "<h3> File " + fileThatExists + " exists? " + ctx.getBoolResult() + "</h3>";
      console.log( "File exists?: " + ctx.getBoolResult());
    });
    aSDKJsTV._iSDKFileSystem.promise_fileExists(fileThatDoesNotExists, error, context, null)
    .then(ctx => 
    { 
      document.getElementById("testreadfile").innerHTML += "<p>use-promised</p>";
      document.getElementById("testreadfile").innerHTML += "<h3> File " + fileThatDoesNotExists + " exists? " + ctx.getBoolResult() + "</h3>";
      console.log( "File exists?: " + ctx.getBoolResult());
    });
  }
}

//-------------------------  
// file-exists2 -Tizen
//-------------------------
if ( bRunTest == "file-exists2")
{ 
  var fileThatExists = "index.html";
  var fileThatDoesNotExists = "index1000.html";
  if (bUseCallback == true) 
  {
   
    //--   the callback
    var callback = function(ctx: amGeneralContext.am_general.A_Context)
    {
      document.getElementById("testreadfile").innerHTML += "<p>use-callback</p>";
      document.getElementById("testreadfile").innerHTML += "<h3> File " + fileThatExists + " exists? " + ctx.getBoolResult() + "</h3>";
      console.log( "File exists?: " + ctx.getBoolResult());
    }
    aSDKJsTV._iSDKFileSystem.fileExists2(storageName, folderName, fileThatExists, error, context, callback);
    
    
    //--   the callback
    var callback2 = function(ctx: amGeneralContext.am_general.A_Context)
    {
       document.getElementById("testreadfile").innerHTML += "<p>use-callback</p>";
       document.getElementById("testreadfile").innerHTML += "<h3> File " + fileThatDoesNotExists + " exists? " + ctx.getBoolResult() + "</h3>";
       console.log( "File exists?: " + ctx.getBoolResult());
    }
    aSDKJsTV._iSDKFileSystem.fileExists2(storageName, folderName ,fileThatDoesNotExists, error, context, callback2);
    
    //-------------------------
  }else{
    
  }
}

//-------------------------  
// folder-exists
//-------------------------
if ( bRunTest == "folder-exists")
{ 
  var folderThatExists = "file://usb:2/folder1";
  var folderThatDoesNotExists = "file://usb:2/folder100";
  if (bUseCallback == true) 
  {   
    //--   the callback
    var callback = function(ctx: amGeneralContext.am_general.A_Context)
    {
      document.getElementById("testreadfile").innerHTML += "<p>use-callback</p>";
      document.getElementById("testreadfile").innerHTML += "<h3> Folder " + folderThatExists + " exists? " + ctx.getBoolResult() + "</h3>";
      console.log( "Folder exists?: " + ctx.getBoolResult());
    }
    aSDKJsTV._iSDKFileSystem.folderExists(folderThatExists, error, context, callback);
    
    
    //--   the callback
    var callback2 = function(ctx: amGeneralContext.am_general.A_Context)
    {
       document.getElementById("testreadfile").innerHTML += "<p>use-callback</p>";
       document.getElementById("testreadfile").innerHTML += "<h3> Folder " + folderThatDoesNotExists + " exists? " + ctx.getBoolResult() + "</h3>";
       console.log( "Folder exists?: " + ctx.getBoolResult());
    }
    aSDKJsTV._iSDKFileSystem.folderExists(folderThatDoesNotExists, error, context, callback2);
    
    //-------------------------
  }else{
    aSDKJsTV._iSDKFileSystem.promise_folderExists(folderThatExists, error, context, null)
    .then(ctx => 
    { 
      document.getElementById("testreadfile").innerHTML += "<p>use-promised</p>";
      document.getElementById("testreadfile").innerHTML += "<h3> Folder " + folderThatExists + " exists? " + ctx.getBoolResult() + "</h3>";
      console.log( "Folder exists?: " + ctx.getBoolResult());
    });
    aSDKJsTV._iSDKFileSystem.promise_folderExists(folderThatDoesNotExists, error, context, null)
    .then(ctx => 
    { 
      document.getElementById("testreadfile").innerHTML += "<p>use-promised</p>";
      document.getElementById("testreadfile").innerHTML += "<h3> Folder " + folderThatDoesNotExists + " exists? " + ctx.getBoolResult() + "</h3>";
      console.log( "Folder exists?: " + ctx.getBoolResult());
    });
  }
}

//-------------------------  
// copy-file
//-------------------------
if ( bRunTest == "copy-file")
{ 
  var srcFileFullName = "file://usb:2/StartupConfig.ts";
  var dstFileFullName = "file://usb:2/folder1/StartupConfig.ts";
  if (bUseCallback == true) 
  {
    //--   the callback
    var callback = function(ctx: amGeneralContext.am_general.A_Context)
    {
      document.getElementById("testreadfile").innerHTML += "<p>use-callback</p>";
      document.getElementById("testreadfile").innerHTML += "<h3>Src File: " + srcFileFullName + " was copied to " + dstFileFullName + "</h3>";
      console.log("Src File: " + srcFileFullName + " was copied to " + dstFileFullName);
    }
    aSDKJsTV._iSDKFileSystem.copyFile(srcFileFullName, dstFileFullName, error, context, callback);
    //-------------------------
  }else{
    aSDKJsTV._iSDKFileSystem.promise_copyFile(srcFileFullName, dstFileFullName, error, context, null)
    .then(ctx => 
    { 
      document.getElementById("testreadfile").innerHTML += "<p>use-promise</p>";
      document.getElementById("testreadfile").innerHTML += "<h3>Src File: " + srcFileFullName + " was copied to " + dstFileFullName + "</h3>";
      console.log("Src File: " + srcFileFullName + " was copied to " + dstFileFullName);
    });
  }
}

//-------------------------  
// copy-file
//-------------------------
if ( bRunTest == "download-file")
{ 
  var remoteFileFullName = "https://woondu.com/images/airplanes/planes-landing-over-maho-bay/maho-beach-st-maarten2.jpg";
  var dstFileFullName2 = "file://internal/maho_beach_st_maarten2.jpg";//"./maho_beach_st_maarten2.jpg"; //"file://internal/maho_beach_st_maarten2.jpg";//"file://usb:2/maho_beach_st_maarten2.jpg";
  if (bUseCallback == true) 
  {
    //--   the callback
    var callback = function(ctx: amGeneralContext.am_general.A_Context)
    {
      document.getElementById("testreadfile").innerHTML += "<p>use-callback</p>";
      document.getElementById("testreadfile").innerHTML += "<h3>Remote File: " + remoteFileFullName + " was copied to " + dstFileFullName2 + "</h3>";
      var htmlImg:HTMLImageElement  = <HTMLImageElement>document.getElementById("testimg");
      htmlImg.src = "http://127.0.0.1:9080/maho_beach_st_maarten2.jpg";
                       //"./content/maho_beach_st_maarten2.jpg"; //";//"http://127.0.0.1:9080/usb:2/procentric/scap/application/content/maho_beach_st_maarten2.jpg"; //"http://127.0.0.1:9080/[usb:2]:procentric/scap/application/content/maho_beach_st_maarten2.jpg";
                      //"./content/maho_beach_st_maarten2.jpg"; 
                      //"http://127.0.0.1:9080/maho_beach_st_maarten2.jpg"; good
                      //"file://usb:2/maho_beach_st_maarten2.jpg";
                      //"http://127.0.0.1:9080/[usb:2]:maho_beach_st_maarten2.jpg" ;
      console.log("File: " + remoteFileFullName + " was downloaded to " + dstFileFullName);
    }
    aSDKJsTV._iSDKFileSystem.downloadFile(remoteFileFullName, dstFileFullName2, error, context, callback);
    //-------------------------
  }else{
    aSDKJsTV._iSDKFileSystem.promise_downloadFile(remoteFileFullName, dstFileFullName2, error, context, null)
    .then(ctx => 
    { 
      document.getElementById("testreadfile").innerHTML += "<p>use-promise</p>";
      document.getElementById("testreadfile").innerHTML += "<h3>Remote File: " + remoteFileFullName + " was copied to " + dstFileFullName2 + "</h3>";
      console.log("File: " + remoteFileFullName + " was downloaded to " + dstFileFullName2);
    });
  }
}

//-------------------------  
// set-crt-time
//-------------------------
if (( bRunTest == "set-crt-time") || ( bRunTest == "set-get-crt-time"))
{ 
  var crtDateTime = aSrvLocator._iEntityCreation.createDefaultDateTime(error);
  crtDateTime.setYear(2019) ;
  crtDateTime.setMonth(7) ;
  crtDateTime.setDay(2) ;
  crtDateTime.setHour(12) ;
  crtDateTime.setMinutes(11) ;
  crtDateTime.setSeconds(10) ;
  crtDateTime.setMilliseconds(0) ;
  context.setObjectResult(crtDateTime);
  document.getElementById("testreadfile").innerHTML += "<p>Start set crt time...</p>";
  if (bUseCallback == true) 
  {
    //--   the callback
    var callback = function(ctx: amGeneralContext.am_general.A_Context)
    {
      //var resDateTime = <amGeneralDateTime.am_general.A_DateTime>ctx.getObjectResult();
      document.getElementById("testreadfile").innerHTML += "<p>use-callback</p>";
      document.getElementById("testreadfile").innerHTML += "<h3>Set Current Time : " + crtDateTime.getAsString() + " succesfully</h3>";
      console.log("Set Current Time : " + crtDateTime.getAsString() + " succesfully");
    }
    aSDKJsTV._iSDKTimeSetup.setCrtDateTime(crtDateTime, error, context, callback);
    //-------------------------
  }else{
    aSDKJsTV._iSDKTimeSetup.promise_setCrtDateTime(crtDateTime, error, context, null)
    .then(ctx => 
    { 
      var resDateTime = <amGeneralDateTime.am_general.A_DateTime>ctx.getObjectResult();
      document.getElementById("testreadfile").innerHTML += "<p>use-callback</p>";
      document.getElementById("testreadfile").innerHTML += "<h3>Set Current Time : " + crtDateTime.getAsString() + " succesfully</h3>";
      console.log("Set Current Time : " + crtDateTime.getAsString() + " succesfully");
    });
  }
}


//-------------------------  
// get-crt-time
//-------------------------
if (( bRunTest == "get-crt-time") || ( bRunTest == "set-get-crt-time"))
{ 
  var crtDateTime = aSrvLocator._iEntityCreation.createDefaultDateTime(error);
  context.setObjectResult(crtDateTime);
  if (bUseCallback == true) 
  {
    //--   the callback
    var callback = function(ctx: amGeneralContext.am_general.A_Context)
    {
      var resDateTime = <amGeneralDateTime.am_general.A_DateTime>ctx.getObjectResult();
      document.getElementById("testreadfile").innerHTML += "<p>use-callback</p>";
      document.getElementById("testreadfile").innerHTML += "<h3>Current Time is : " + resDateTime.getAsString() + "</h3>";
      console.log("Current Time is : " + crtDateTime.getAsString());
    }
    aSDKJsTV._iSDKTimeSetup.getCrtDateTime(error, context, callback);
    //-------------------------
  }else{
    aSDKJsTV._iSDKTimeSetup.promise_getCrtDateTime(error, context, null)
    .then(ctx => 
    { 
      var resDateTime = <amGeneralDateTime.am_general.A_DateTime>ctx.getObjectResult();
      document.getElementById("testreadfile").innerHTML += "<p>use-promise</p>";
      document.getElementById("testreadfile").innerHTML += "<h3>Current Time is : " + resDateTime.getAsString() + "</h3>";
      console.log("Current Time is : " + crtDateTime.getAsString());
    });
  }
}

//-------------------------  
// set-time-zone
//-------------------------
if (( bRunTest == "set-time-zone") || ( bRunTest == "set-get-time-zone"))
{ 
  var newTimeZone2 = aSrvLocator._iEntityCreation.createDefaultTimeZone(error);
  newTimeZone2.setContinent("Europe") ;
  newTimeZone2.setCountry("Romania") ;
  newTimeZone2.setCity("Bucharest") ;
  //context.setObjectResult(newTimeZone2);
  document.getElementById("testreadfile").innerHTML += "<p>Start set crt time...</p>";
  if (bUseCallback == true) 
  {
    //--   the callback
    var callback = function(ctx: amGeneralContext.am_general.A_Context)
    {
      document.getElementById("testreadfile").innerHTML += "<p>use-callback</p>";
      if (ctx.isError())
        document.getElementById("testreadfile").innerHTML += "<h3>Set Current Time Zone: " + newTimeZone2.getAsString() + " ERROR: "+ ctx.getError().getErrMsg() + "</h3>";
      else
        document.getElementById("testreadfile").innerHTML += "<h3>Set Current Time Zone: " + newTimeZone2.getAsString() + " succesfully</h3>";
      console.log("Set Time Zone: " + newTimeZone2.getAsString() + " succesfully");

      if (( bRunTest == "get-time-zone") || ( bRunTest == "set-get-time-zone"))
      { 
        var crtTimeZone = aSrvLocator._iEntityCreation.createDefaultTimeZone(error);
        context.setObjectResult(crtTimeZone);
        document.getElementById("testreadfile").innerHTML += "<p>Start get time zone...</p>";
        if (bUseCallback == true) 
        {
          //--   the callback
          var callback2 = function(ctx: amGeneralContext.am_general.A_Context)
          {
            var resTimeZone = <amGeneralTimeZone.am_general.A_TimeZone>ctx.getObjectResult();
            document.getElementById("testreadfile").innerHTML += "<p>use-callback</p>";
            document.getElementById("testreadfile").innerHTML += "<h3>Current Time Zone is : " + resTimeZone.getAsString() + "</h3>";
            console.log("Current Time Zone is : " + crtTimeZone.getAsString());
          }
          aSDKJsTV._iSDKTimeSetup.getTimeZone(error, context, callback2);
        }  
      }
    }
    aSDKJsTV._iSDKTimeSetup.setTimeZone(newTimeZone2, error, context, callback);

    //-------------------------
  }else{
    aSDKJsTV._iSDKTimeSetup.promise_setTimeZone(newTimeZone2, error, context, null)
    .then(ctx => 
    { 
      //var resDateTime = <amGeneralDateTime.am_general.A_DateTime>ctx.getObjectResult();
      document.getElementById("testreadfile").innerHTML += "<p>use-callback</p>";
      document.getElementById("testreadfile").innerHTML += "<h3>Set Current Time : " + newTimeZone2.getAsString() + " succesfully</h3>";
      console.log("Set Current Time Zone : " + newTimeZone2.getAsString() + " succesfully");
    });
  }
}

//-------------------------  
// get-time-zone
//-------------------------
if (( bRunTest == "get-time-zone") )
{ 
  var crtTimeZone = aSrvLocator._iEntityCreation.createDefaultTimeZone(error);
  context.setObjectResult(crtTimeZone);
  document.getElementById("testreadfile").innerHTML += "<p>Start get time zone...</p>";
  if (bUseCallback == true) 
  {
    //--   the callback
    var callback = function(ctx: amGeneralContext.am_general.A_Context)
    {
      var resTimeZone = <amGeneralTimeZone.am_general.A_TimeZone>ctx.getObjectResult();
      document.getElementById("testreadfile").innerHTML += "<p>use-callback</p>";
      document.getElementById("testreadfile").innerHTML += "<h3>Current Time Zone is : " + resTimeZone.getAsString() + "</h3>";
      console.log("Current Time Zone is : " + crtTimeZone.getAsString());
    }
    aSDKJsTV._iSDKTimeSetup.getTimeZone(error, context, callback);
    //-------------------------
  }else{
    aSDKJsTV._iSDKTimeSetup.promise_getTimeZone(error, context, null)
    .then(ctx => 
    { 
      var resTimeZone = <amGeneralTimeZone.am_general.A_TimeZone>ctx.getObjectResult();
      document.getElementById("testreadfile").innerHTML += "<p>use-promise</p>";
      document.getElementById("testreadfile").innerHTML += "<h3>Current Time Zone is : " + resTimeZone.getAsString() + "</h3>";
      console.log("Current Time Zone is : " + crtTimeZone.getAsString());
    });
  }
}

//}

//=====================================================================================================
//=====================================================================================================
/*
public writeTextFile( fileFullName: string, fileContent: string,
  error: amGeneralError.am_general.A_Error, 
  context: amGeneralContext.am_general.A_Context, callback) 
*/

//--------------------------------------------------------- previous tests ---------------------------------
/*
//import rmFileReader = require("./rmod_filereader/FileReader");

//import rmFileReader = require("../app/ts/native/nm_transversalservices/n_sdk_webos/FileReader");
//import { AsyncResource } from "async_hooks";
var rFileReader:rmFileReader.rmod_filereader.FileReader = new rmFileReader.rmod_filereader.FileReader();
//rFileReader.ReadFile(fileFullName);

var context = { 
  result: "",
  step: 1
}; 

var ret = rFileReader.promise_api_readFile_text(fileFullName, null, context) ;
if (ret == 0)
{
  document.getElementById("testreadfile").innerHTML += "<p>return 0</p>";
}
document.getElementById("testreadfile").innerHTML += "<p>return 1</p>";
*/

//async() =>
//{
  //rFileReader.api_readFile_text(fileFullName, null, context);   //ReadFile(fileFullName); //rFileReader.readTextFile(fileFullName, context) ;
  //document.getElementById("testreadfile").innerHTML += context.result;
  //console.log( context.result);
//}
/*
function asyncFunc() {
  return new Promise(
      function (resolve, reject) {
          rFileReader.api_readFile_text(fileFullName, null, context);
          resolve(context.result);
          //···
          //reject(error);
      });
}*/

/*
document.getElementById("testreadfile").innerHTML += "<p>before promise</p>";
console.log( "<p>before promise</p>");
rFileReader.api_readFile_text(fileFullName, null, context)
.then(result => 
  { 
    document.getElementById("testreadfile").innerHTML += context.result;
    console.log( context.result);
    document.getElementById("testreadfile").innerHTML += "<p>after read file</p>";
  });
  document.getElementById("testreadfile").innerHTML += "<p>after promise</p>";
  console.log( "<p>after promise</p>");
*/

//.catch(error => 
  //  { ··· });

/*
asyncFunc()
.then(result => { ··· })
.catch(error => { ··· });
*/

//--------------------------------------------
//import rmConfigurationServicesServiceContainer = require("../app/ts/reusable/rm_configurationservices/r_servicecontainer/R_ServiceContainer");
//rmConfigurationServicesServiceContainer.rm_configurationservices.R_ServiceContainer.startup();
//--------------------------------------------
/*
import * as rmodPersonal from "./rmod_personal/person";
import * as rmodPersonal2 from "./rmod_personal/salary";
import * as rmodPersonal3 from "./rmod_personal/person";

import * as rmConfig from "../config/StartupConfig";
import * as rmConfigWebOS             from "../config/PlaybackEngine_DefaultConfiguration_forWebOS_406";
import * as rmConfigTizen             from "../config/PlaybackEngine_DefaultConfiguration_forTizen_SSSP4";
import * as rmConfigNodeJs            from "../config/PlaybackEngine_DefaultConfiguration_forNodeJs_10153LTS";
import * as rmConfigStandaloneBrowser from "../config/PlaybackEngine_DefaultConfiguration_forStandaloneBrowser_101";


function greeterPerson (person: rmodPersonal.rmod_personal.Person){ 
    return "name: "+person.name;
}

function greeterSalary (salary: rmodPersonal2.rmod_personal.Salary){ 
    return "salary: "+salary.value;
}

var message = "nothing";
var os ="webos";


var strStartupConfig = "";
var oStartupConfig = null;

var strPlatformConfig = "";
var oPlatformConfig = null;
//alert("start");
require(["../config/StartupConfig"], (dynRMConfig: typeof rmConfig) => {
   
  strStartupConfig = dynRMConfig.rm_config.strStartupConfig;
  //alert(strStartupConfig);
  try{
    //strStartupConfig = '{ "os":"webos", "firmware":"SSSP4", "customerid":"renaultv1.01", "appbasepath":"/moodmedia", "mediafilesbasepath":"/media_files"}';
    oStartupConfig = JSON.parse(strStartupConfig);
  }catch(e)
  {
    alert("Fatal Error : StartupConfig - Invalid json format"); 
  }
  if (oStartupConfig != null)
  {
    os = oStartupConfig.os;
    //-----------------------
    if       (os =="WebOS")
    {
      //alert(os);
      require(["../config/PlaybackEngine_DefaultConfiguration_forWebOS_406"], (dynRMConfigWebOS: typeof rmConfigWebOS) => {
        strPlatformConfig = dynRMConfigWebOS.rm_config.strPlatformConfiguration_forWebOS_406 ;
        //alert(strPlatformConfig);
        load(os);
      });
    //-----------------------
    }else if (os == "Tizen"){
      require(["../config/PlaybackEngine_DefaultConfiguration_forTizen_SSSP4"], (dynRMConfigTizen: typeof rmConfigTizen) => {
        strPlatformConfig = dynRMConfigTizen.rm_config.strPlatformConfiguration_forTizen_SSSP4 ;
        //alert(strPlatformConfig);
        load(os);
      });
    //-----------------------
    }else if (os == "NodeJs"){
      require(["../config/PlaybackEngine_DefaultConfiguration_forNodeJs_10153LTS"], (dynRMConfigNodeJs: typeof rmConfigNodeJs) => {
        strPlatformConfig = dynRMConfigNodeJs.rm_config.strPlatformConfiguration_forNodeJs_10153LTS;
        //alert(strPlatformConfig);
        load(os);
      });
    //-----------------------
    }else if (os == "StandaloneBrowser"){
      require(["../config/PlaybackEngine_DefaultConfiguration_forStandaloneBrowser_101"], (dynRMConfigStandaloneBrowser: typeof rmConfigStandaloneBrowser) => {
        strPlatformConfig = dynRMConfigStandaloneBrowser.rm_config.strPlatformConfiguration_forStandaloneBrowser_101;
        //alert(strPlatformConfig);
        load(os);
      });
    }
    
  }
  
});
*/

/*
  var txt = '';
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function(){
  if(xmlhttp.status == 200 && xmlhttp.readyState == 4){
    txt = xmlhttp.responseText;
    var StartupConfig = JSON.parse(txt);
    os = StartupConfig.os;
    //alert(os);
    load(os);
    }
    //else{
      //  load("tizen");
    //}
  };
  //let fileUrl = URL.createObjectURL("./StartupConfig.json");
  xmlhttp.open("GET","./StartupConfig.json",true);
  xmlhttp.send();
*/
/*
function load(os: string) : void
{
   // your page initialization code here
   // the DOM will be available here
   if (os=="WebOS") {

     require(["./rmod_personal/person"], (dynRModPersonal: typeof rmodPersonal) => {
         var person= new dynRModPersonal.rmod_personal.Person("John");
         message = greeterPerson(person);
         document.getElementById("maindiv").innerHTML=message;
         //alert(message);
     });
   }
   else if (os=="Tizen")
   { 
     require(["./rmod_personal/salary"], (dynRModPersonal2: typeof rmodPersonal2) => {
        var salary = new dynRModPersonal2.rmod_personal.Salary("30.000 $");
        message = greeterSalary(salary);
        document.getElementById("maindiv").innerHTML=message;
        //alert(message);
     });
   }
   else if (os=="NodeJs")
   {
    require(["./rmod_personal/person"], (dynRModPersonal: typeof rmodPersonal) => {
      var person= new dynRModPersonal.rmod_personal.Person("NodeJs");
      message = greeterPerson(person);
      document.getElementById("maindiv").innerHTML=message;
      //alert(message);
    });
  }else if (os=="StandaloneBrowser")
    { 
       require(["./rmod_personal/salary"], (dynRModPersonal2: typeof rmodPersonal2) => {
            var salary = new dynRModPersonal2.rmod_personal.Salary("10.000 $");
            message = greeterSalary(salary);
            document.getElementById("maindiv").innerHTML=message;
            //alert(message);
         });
    }
           
 }
//);
*/

//(function() {
  //  document.getElementById("maindiv").innerHTML=message;
//});

//$(document).ready(function(){
  //  var message = greeter(person);
  //  $("#status")[0].innerHTML=message;
//});
