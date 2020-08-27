declare function require(moduleNames: string[], onLoad: (...args: any[]) => void): void;

import amGeneralError                           = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralFactoryDescription              = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer  = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amTransversalServicesLogService          = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import amConfigurationServicesPlatformConfigurator  = require("../../../../../app/ts/abstract/am_configurationservices/a_platformconfigurator/A_PlatformConfigurator");

import amConfigurationServices3  = require("../../../../../app/ts/abstract/am_configurationservices/a_platformconfigurator/I_PlatformConfigurator_LoadConfigurations");
import amConfigurationServices4  = require("../../../../../app/ts/abstract/am_configurationservices/a_platformconfigurator/I_PlatformConfigurator_StartupConfiguration");
import amConfigurationServices5  = require("../../../../../app/ts/abstract/am_configurationservices/a_platformconfigurator/I_PlatformConfigurator_PlatformConfiguration");


import amGeneralFactoryDescriptions = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescriptions");
import amGeneralProperty = require("../../../../../app/ts/abstract/am_general/a_property/A_Property");
import amGeneralProperties = require("../../../../../app/ts/abstract/am_general/a_property/A_Properties");

import amTransversalServicesSDKJsTv   = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/A_SDK_JsTV");
import amConfigurationServicesServiceLocator = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");

import rmGeneral    = require("../../../../../app/ts/reusable/rm_general/r_service/R_Service");
//import rmGeneral2   = require("../../../../../app/ts/reusable/rm_general/r_factorydescription/R_FactoryDescriptions");

import rmConfigurationServices2 = require("../../../../../app/ts/reusable/rm_configurationservices/r_platformconfigurator/IImpl_PlatformConfigurator_LoadConfigurations_R");
import rmConfigurationServices3 = require("../../../../../app/ts/reusable/rm_configurationservices/r_platformconfigurator/IImpl_PlatformConfigurator_StartupConfiguration_R");
import rmConfigurationServices4 = require("../../../../../app/ts/reusable/rm_configurationservices/r_platformconfigurator/IImpl_PlatformConfigurator_PlatformConfiguration_R");

import * as rmConfig                  from "../../../../../config/StartupConfig";
import * as rmConfigWebOS             from "../../../../../config/PlaybackEngine_DefaultConfiguration_forWebOS_406";
import * as rmConfigTizen             from "../../../../../config/PlaybackEngine_DefaultConfiguration_forTizen_SSSP4";
import * as rmConfigNodeJs            from "../../../../../config/PlaybackEngine_DefaultConfiguration_forNodeJs_10153LTS";
import * as rmConfigStandaloneBrowser from "../../../../../config/PlaybackEngine_DefaultConfiguration_forStandaloneBrowser_101";

export module rm_configurationservices
{
  export class R_PlatformConfigurator  extends    rmGeneral.rm_general.R_Service 
                                       implements amConfigurationServicesPlatformConfigurator.am_configurationservices.A_PlatformConfigurator
  {
    //--- data members
    _aProperties    : amGeneralProperties.am_general.A_Properties;
    _os             : string;
    _firmware       : string;
    _customerid     : string;
    _appbasepath    : string;
    _mediafilesbasepath : string;

    _srvFactoryDescriptions: amGeneralFactoryDescriptions.am_general.A_FactoryDescriptions;
    _entFactoryDescriptions: amGeneralFactoryDescriptions.am_general.A_FactoryDescriptions;
    
    //---------- interfaces
    _iLoadConfigurations         : amConfigurationServices3.am_configurationservices.I_PlatformConfigurator_LoadConfigurations ;
    _iStartupConfiguration       : amConfigurationServices4.am_configurationservices.I_PlatformConfigurator_StartupConfiguration ;
    _iPlatformConfiguration      : amConfigurationServices5.am_configurationservices.I_PlatformConfigurator_PlatformConfiguration ;

    //----------- components 
    _aLogService       : amTransversalServicesLogService.am_transversalservices.A_LogService; 
    _aSDKJsTV          : amTransversalServicesSDKJsTv.am_transversalservices.A_SDK_JsTV; 
    _aServiceLocator   : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator; 

    //----------- constructor 
    constructor( aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription, 
                 aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                 aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                 error              : amGeneralError.am_general.A_Error)  
     {  
      super(aFactoryDescription, aServiceContainer, aLogService, error);

      this._iLoadConfigurations      = new rmConfigurationServices2.rm_configurationservices.IImpl_PlatformConfigurator_LoadConfigurations_R(this) ;
      this._iStartupConfiguration    = new rmConfigurationServices3.rm_configurationservices.IImpl_PlatformConfigurator_StartupConfiguration_R(this) ;
      this._iPlatformConfiguration   = new rmConfigurationServices4.rm_configurationservices.IImpl_PlatformConfigurator_PlatformConfiguration_R(this) ;
      
    }

    //------------------------------
    public injectDependencies( aServiceContainer : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer, 
                               aServiceLocator   : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator, 
                               aLogService       : amTransversalServicesLogService.am_transversalservices.A_LogService, 
                               error : amGeneralError.am_general.A_Error) : number    
 
    {
      //------------------------
      if (this._aServiceLocator == null)
      {
        this._aServiceLocator = <amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator>
                                   this._aServiceContainer._iServiceManager.getServiceByAbstractName("A_ServiceLocator",null,error);
        if (this._aServiceLocator == null)
        {
          error.setError(211,"R_PlatformConfiguration.injectDependencies - cannot find Service Locator");
          return 1;
        }

        this._aProperties = this._aServiceLocator._iEntityCreation.createDefaultProperties(error); //new rmConfigurationServices5.rm_configurationservices.R_Properties();

        this._srvFactoryDescriptions = this._aServiceLocator._iEntityCreation.createDefaultFactoryDescriptions(error); //new rmGeneral2.rm_general.R_FactoryDescriptions(); 
        this._entFactoryDescriptions = this._aServiceLocator._iEntityCreation.createDefaultFactoryDescriptions(error); //new rmGeneral2.rm_general.R_FactoryDescriptions(); 
      }
      //------------------------
      if (this._aSDKJsTV == null)
      {
        this._aSDKJsTV        = <amTransversalServicesSDKJsTv.am_transversalservices.A_SDK_JsTV>
                                  this._aServiceContainer._iServiceManager.getServiceByAbstractName("A_SDK_JsTV",null,error);;
      } 
      return 0;
    }
    
    //--------------------------------------
    public getProperties(error: amGeneralError.am_general.A_Error) : amGeneralProperties.am_general.A_Properties
    {
      return this._aProperties ;
    }

    //-----------------------------------------
    public getProperty( propertyName : string, 
                 error        : amGeneralError.am_general.A_Error) : amGeneralProperty.am_general.A_Property
    {
      let foundProperty:amGeneralProperty.am_general.A_Property  = null;
      return foundProperty;
    }             

    //--------------------------
    public getOS() : string                        // "os" property
    {
      return this._os;
    }

    //---------------------------
    public getFirmwareVersion() : string     // "firmware" property = means also with "os version" property
    {
      return this._firmware;
    }

    //-----------------------------
    public getCustomerId() : string          // "customerid used for customized solutions 
    {
      return this._customerid;
    }

    //------------------------------
    public getAppBasePath() : string          // "appbasepath" the base folder-path of the application (ex. on windows "d:/moodmedia")
    {
      return this._appbasepath;
    }

    //-------------------------------
    public getMediaFilesBasePath() : string    // "mediafilesbasepath" the base folder-path of the media_files (ex. on windows "d:/media_files")
    {
      return this._mediafilesbasepath;
    }

    //---------------------------
    // Platform configuration
    //---------------------------

    //--------------------------------------
    public getServiceFactoryDescriptions(error: amGeneralError.am_general.A_Error): amGeneralFactoryDescriptions.am_general.A_FactoryDescriptions
    {
      return this._srvFactoryDescriptions;
    }
    
    //--------------------------------------
    public getServiceFactoryDescription(factoryName: string, error: amGeneralError.am_general.A_Error): amGeneralFactoryDescription.am_general.A_FactoryDescription
    {
      return this._srvFactoryDescriptions.getFactoryDescriptionByName(factoryName, error);
    }
    
    //--------------------------------------
    public getEntityFactoryDescriptions(error: amGeneralError.am_general.A_Error): amGeneralFactoryDescriptions.am_general.A_FactoryDescriptions
    {
      return this._entFactoryDescriptions;          
    }
    
    //--------------------------------------
    public getEntityFactoryDescription(factoryName: string, error: amGeneralError.am_general.A_Error): amGeneralFactoryDescription.am_general.A_FactoryDescription
    {
      return this._entFactoryDescriptions.getFactoryDescriptionByName(factoryName, error);    
    }
    
    //-----------------------------------
    // Load configuration files implementation 
    //-----------------------------------

    //------------
    public loadConfigurationFiles(error: amGeneralError.am_general.A_Error) 
    {
      //to do - move the loading code from client.js here 
      var message = "nothing";
      var os ="webos";


      var strStartupConfig = "";
      var oStartupConfig = null;

      //var strPlatformConfig = "";
      //var oPlatformConfig = null;
      require(["../../../../../config/StartupConfig"], (dynRMConfig: typeof rmConfig) => {
   
        strStartupConfig = dynRMConfig.rm_config.strStartupConfig;
        //alert(strStartupConfig);
        try{
          //strStartupConfig = '{ "os":"webos", "firmware":"SSSP4", "customerid":"renaultv1.01", "appbasepath":"/moodmedia", "mediafilesbasepath":"/media_files"}';
          oStartupConfig = JSON.parse(strStartupConfig);
        }catch(e)
        {
          alert("Fatal Error in R_PlatformConfiguration::loadConfigurationFiles - Invalid json format in strStartupConfig)"); 
          error.setError(101,"Fatal Error in R_PlatformConfiguration::loadConfigurationFiles - Invalid json format in StartupConfig");
          return;
        }
        if (oStartupConfig != null)
        {
          this.setupStartupProperties(oStartupConfig, error);
          if (error.isError())
          {
            alert("Fatal Error in R_PlatformConfiguration::loadConfigurationFiles - Cannot set startup properties in setupStartupPropertie+"); 
            error.setError(102,"Fatal Error in R_PlatformConfiguration::loadConfigurationFiles - Cannot set startup properties in setupStartupProperties");
            return;
          }

          this.loadPlatformConfig(oStartupConfig, error) ;
          /*
          os = oStartupConfig.os;
          //-----------------------
          if       (os =="WebOS")
          {
            //alert(os);
            require(["../../../../../config/PlaybackEngine_DefaultConfiguration_forWebOS_406"], (dynRMConfigWebOS: typeof rmConfigWebOS) => {
              strPlatformConfig = dynRMConfigWebOS.rm_config.strPlatformConfiguration_forWebOS_406 ;
              alert(strPlatformConfig);
            });
          //-----------------------
          }else if (os == "Tizen"){
            require(["../../../../../config/PlaybackEngine_DefaultConfiguration_forTizen_SSSP4"], (dynRMConfigTizen: typeof rmConfigTizen) => {
              strPlatformConfig = dynRMConfigTizen.rm_config.strPlatformConfiguration_forTizen_SSSP4 ;
              alert(strPlatformConfig);
            });
          //-----------------------
          }else if (os == "NodeJs"){
            require(["../../../../../config/PlaybackEngine_DefaultConfiguration_forNodeJs_10153LTS"], (dynRMConfigNodeJs: typeof rmConfigNodeJs) => {
              strPlatformConfig = dynRMConfigNodeJs.rm_config.strPlatformConfiguration_forNodeJs_10153LTS;
              alert(strPlatformConfig);
            });
          //-----------------------
          }else if (os == "StandaloneBrowser"){
            require(["../../../../../config/PlaybackEngine_DefaultConfiguration_forStandaloneBrowser_101"], (dynRMConfigStandaloneBrowser: typeof rmConfigStandaloneBrowser) => {
              strPlatformConfig = dynRMConfigStandaloneBrowser.rm_config.strPlatformConfiguration_forStandaloneBrowser_101;
              alert(strPlatformConfig);
            });
          }   
          */
          //load(os);
        }
      });   
    }

    //----------------------------------------
    protected loadPlatformConfig(oStartupConfig : any, error: amGeneralError.am_general.A_Error) 
    {
      var strPlatformConfig = "";
      var oPlatformConfig = null;
      var os = oStartupConfig.os;
      //-----------------------
      if       (os =="WebOS")
      {
        //alert(os);
        require(["../../../../../config/PlaybackEngine_DefaultConfiguration_forWebOS_406"], (dynRMConfigWebOS: typeof rmConfigWebOS) => {
          strPlatformConfig = dynRMConfigWebOS.rm_config.strPlatformConfiguration_forWebOS_406 ;
          this.setupServiceFactoryDescriptions(strPlatformConfig, error);
          //alert(strPlatformConfig);
        });
      //-----------------------
      }else if (os == "Tizen"){
        require(["../../../../../config/PlaybackEngine_DefaultConfiguration_forTizen_SSSP4"], (dynRMConfigTizen: typeof rmConfigTizen) => {
          strPlatformConfig = dynRMConfigTizen.rm_config.strPlatformConfiguration_forTizen_SSSP4 ;
          this.setupServiceFactoryDescriptions(strPlatformConfig, error);
          //alert(strPlatformConfig);
        });
      //-----------------------
      }else if (os == "NodeJs"){
        require(["../../../../../config/PlaybackEngine_DefaultConfiguration_forNodeJs_10153LTS"], (dynRMConfigNodeJs: typeof rmConfigNodeJs) => {
          strPlatformConfig = dynRMConfigNodeJs.rm_config.strPlatformConfiguration_forNodeJs_10153LTS;
          this.setupServiceFactoryDescriptions(strPlatformConfig, error);
          //alert(strPlatformConfig);
        });
      //-----------------------
      }else if (os == "StandaloneBrowser"){
        require(["../../../../../config/PlaybackEngine_DefaultConfiguration_forStandaloneBrowser_101"], (dynRMConfigStandaloneBrowser: typeof rmConfigStandaloneBrowser) => {
          strPlatformConfig = dynRMConfigStandaloneBrowser.rm_config.strPlatformConfiguration_forStandaloneBrowser_101;
          this.setupServiceFactoryDescriptions(strPlatformConfig, error);
          //alert(strPlatformConfig);
        });
      }   
      //alert(strPlatformConfig);
      //load(os);
    }

    //----------------------------------------
    protected setupServiceFactoryDescriptions(strPlatformConfig : string, error: amGeneralError.am_general.A_Error) : void
    {
      var oPlatformConfig = null; 
      try{
        oPlatformConfig = JSON.parse(strPlatformConfig);
      }catch(e)
      {
        alert("Fatal Error in R_PlatformConfiguration::loadConfigurationFiles - Invalid json format in strPlatformConfig"); 
        error.setError(105,"Fatal Error in R_PlatformConfiguration::loadConfigurationFiles - Invalid json format in strPlatformConfig");
        return;
      }
      //var factory_name:string = "";
      //var service_name:string = "";
      //var abstract_name:string = "";
      var aServiceFactoryDesc = null;
      for (let crtSrvFactoryDesc of oPlatformConfig.service_factory_description) 
      {
        aServiceFactoryDesc = this._aServiceLocator._iEntityCreation.createDefaultFactoryDescription(error);
        aServiceFactoryDesc.setNames(crtSrvFactoryDesc.factory_name, crtSrvFactoryDesc.service_name, crtSrvFactoryDesc.abstract_name, crtSrvFactoryDesc.service_name); 
        this._srvFactoryDescriptions.addFactoryDescription(aServiceFactoryDesc, error);
      }
      this._aServiceLocator._iFactorySetup.setupServiceFactories(this._srvFactoryDescriptions, error);
      //_srvFactoryDescriptions: amGeneralFactoryDescriptions.am_general.A_FactoryDescriptions;
    }

    //----------------------------------------
    protected setupStartupProperties(oStartupConfig : any, error: amGeneralError.am_general.A_Error) : void
    {
      //_aProperties    : amGeneral4.am_general.A_Properties;
      this._os                  = oStartupConfig.os;
      this._firmware            = oStartupConfig.firmware;
      this._customerid          = oStartupConfig.customerid;
      this._appbasepath         = oStartupConfig.appbasepath;
      this._mediafilesbasepath = oStartupConfig.mediafilesbasepath;
      //----
      var osProperty = this._aServiceLocator._iEntityCreation.createDefaultProperty(error);
      osProperty.setNameAndValue("os", this._os);
      this._aProperties.addProperty(osProperty, error);
      //----
      var firmwareProperty = this._aServiceLocator._iEntityCreation.createDefaultProperty(error);
      osProperty.setNameAndValue("firmware", this._firmware);
      this._aProperties.addProperty(firmwareProperty, error);
      //----
      var customeridProperty = this._aServiceLocator._iEntityCreation.createDefaultProperty(error);
      osProperty.setNameAndValue("customerid", this._customerid);
      this._aProperties.addProperty(customeridProperty, error);
      //----
      var appbasepathProperty = this._aServiceLocator._iEntityCreation.createDefaultProperty(error);
      osProperty.setNameAndValue("appbasepath", this._appbasepath);
      this._aProperties.addProperty(appbasepathProperty, error);
      //----
      var mediafilesbasepathProperty = this._aServiceLocator._iEntityCreation.createDefaultProperty(error);
      osProperty.setNameAndValue("mediafilesbasepath", this._mediafilesbasepath);
      this._aProperties.addProperty(mediafilesbasepathProperty, error);      
    }
  }
} 