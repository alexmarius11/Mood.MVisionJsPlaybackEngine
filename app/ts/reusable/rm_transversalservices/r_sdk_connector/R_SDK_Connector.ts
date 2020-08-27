
import amTransversalServicesSDKJsTV      = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/A_SDK_JsTV");
import amTransversalServicesSDKConsumer  = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_consumer/A_SDK_Consumer");

import amTransversalServicesJsTv = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/I_SDK_JsTV");
import amTransversalServicesFileSystem = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/I_SDK_FileSystem");
import amTransversalServicesAppplicationSetup  = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/I_SDK_ApplicationSetup");
import amTransversalServicesAudioSetup = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/I_SDK_AudioSetup");
import amTransversalServicesFirmwareSetup = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/I_SDK_FirmwareSetup");
import amTransversalServicesGeneralConfiguration = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/I_SDK_GeneralConfiguration");
import amTransversalServicesInputSourceSetup = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/I_SDK_InputSourceSetup");
import amTransversalServicesPowerSetup = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/I_SDK_PowerSetup");
import amTransversalServicesTimeSetup = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/I_SDK_TimeSetup");
import amTransversalServicesTvSignageSetup = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/I_SDK_TvSignageSetup");
import amTransversalServicesHardwareSetup = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/I_SDK_HardwareSetup");

import amGeneralError                          = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralService                        = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");
import amGeneralFactoryDescription             = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amTransversalServicesLogService         = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import rmGeneralService                = require("../../../../../app/ts/reusable/rm_general/r_service/R_Service");
import rmTransversalServicesJsTV       = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_connector/IImpl_SDK_JsTV_SDKConnector");
import rmTransversalServicesFileSystem = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_connector/IImpl_SDK_FileSystem_SDKConnector");
import rmTransversalServicesApplicationSetup  = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_connector/IImpl_SDK_ApplicationSetup_SDKConnector");
import rmTransversalServicesAudioSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_connector/IImpl_SDK_AudioSetup_SDKConnector");
import rmTransversalServicesFirmwareSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_connector/IImpl_SDK_FirmwareSetup_SDKConnector");
import rmTransversalServicesGeneralConfiguration = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_connector/IImpl_SDK_GeneralConfiguration_SDKConnector");
import rmTransversalServicesInputSourceSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_connector/IImpl_SDK_InputSourceSetup_SDKConnector");
import rmTransversalServicesPowerSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_connector/IImpl_SDK_PowerSetup_SDKConnector");
import rmTransversalServicesTimeSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_connector/IImpl_SDK_TimeSetup_SDKConnector");
import rmTransversalServicesTvSignageSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_connector/IImpl_SDK_TvSignageSetup_SDKConnector");
import rmTransversalServicesHardwareSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_connector/IImpl_SDK_HardwareSetup_SDKConnector");

import amTransversalServicesNotifyJsTv = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_consumer/I_SDK_notifyJsTV");
import amTransversalServicesNotifyFileSystem = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_consumer/I_SDK_notifyFileSystem");
import amTransversalServicesNotifyAppplicationSetup  = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_consumer/I_SDK_notifyApplicationSetup");
import amTransversalServicesNotifyAudioSetup = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_consumer/I_SDK_notifyAudioSetup");
import amTransversalServicesNotifyFirmwareSetup = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_consumer/I_SDK_notifyFirmwareSetup");
import amTransversalServicesNotifyGeneralConfiguration = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_consumer/I_SDK_notifyGeneralConfiguration");
import amTransversalServicesNotifyInputSourceSetup = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_consumer/I_SDK_notifyInputSourceSetup");
import amTransversalServicesNotifyPowerSetup = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_consumer/I_SDK_notifyPowerSetup");
import amTransversalServicesNotifyTimeSetup = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_consumer/I_SDK_notifyTimeSetup");
import amTransversalServicesNotifyTvSignageSetup = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_consumer/I_SDK_notifyTvSignageSetup");
import amTransversalServicesNotifyHardwareSetup = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_consumer/I_SDK_notifyHardwareSetup");

import rmTransversalServicesNotifyJsTV       = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_connector/IImpl_SDK_notifyJsTV_SDKConnector");
import rmTransversalServicesNotifyFileSystem = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_connector/IImpl_SDK_notifyFileSystem_SDKConnector");
import rmTransversalServicesNotifyApplicationSetup  = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_connector/IImpl_SDK_notifyApplicationSetup_SDKConnector");
import rmTransversalServicesNotifyAudioSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_connector/IImpl_SDK_notifyAudioSetup_SDKConnector");
import rmTransversalServicesNotifyFirmwareSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_connector/IImpl_SDK_notifyFirmwareSetup_SDKConnector");
import rmTransversalServicesNotifyGeneralConfiguration = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_connector/IImpl_SDK_notifyGeneralConfiguration_SDKConnector");
import rmTransversalServicesNotifyInputSourceSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_connector/IImpl_SDK_notifyInputSourceSetup_SDKConnector");
import rmTransversalServicesNotifyPowerSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_connector/IImpl_SDK_notifyPowerSetup_SDKConnector");
import rmTransversalServicesNotifyTimeSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_connector//IImpl_SDK_notifyTimeSetup_SDKConnector");
import rmTransversalServicesNotifyTvSignageSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_connector/IImpl_SDK_notifyTvSignageSetup_SDKConnector");
import rmTransversalServicesNotifyHardwareSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_connector/IImpl_SDK_notifyHardwareSetup_SDKConnector");


export module rm_transversalservices
{
  export class R_SDK_Connector   extends rmGeneralService.rm_general.R_Service 
                                 implements amTransversalServicesSDKJsTV.am_transversalservices.A_SDK_JsTV,
                                            amTransversalServicesSDKConsumer.am_transversalservices.A_SDK_Consumer
  {

    //---------- connected components
    _aSDKJsTV     : amTransversalServicesSDKJsTV.am_transversalservices.A_SDK_JsTV;
    _aSDKConsumer : amTransversalServicesSDKConsumer.am_transversalservices.A_SDK_Consumer;

    //---------- interfaces
    _iSDKJsTV       : amTransversalServicesJsTv.am_transversalservices.I_SDK_JsTV ;
    _iSDKFileSystem : amTransversalServicesFileSystem.am_transversalservices.I_SDK_FileSystem ;
    _iSDKApplicationSetup : amTransversalServicesAppplicationSetup.am_transversalservices.I_SDK_ApplicationSetup ;
    _iSDKAudioSetup : amTransversalServicesAudioSetup.am_transversalservices.I_SDK_AudioSetup ;
    _iSDKFirmwareSetup : amTransversalServicesFirmwareSetup.am_transversalservices.I_SDK_FirmwareSetup ;
    _iSDKGeneralConfiguration : amTransversalServicesGeneralConfiguration.am_transversalservices.I_SDK_GeneralConfiguration ;
    _iSDKInputSourceSetup : amTransversalServicesInputSourceSetup.am_transversalservices.I_SDK_InputSourceSetup ;
    _iSDKPowerSetup : amTransversalServicesPowerSetup.am_transversalservices.I_SDK_PowerSetup ;
    _iSDKTimeSetup : amTransversalServicesTimeSetup.am_transversalservices.I_SDK_TimeSetup ;
    _iSDKTvSignageSetup : amTransversalServicesTvSignageSetup.am_transversalservices.I_SDK_TvSignageSetup ;
    _iSDKHardwareSetup : amTransversalServicesHardwareSetup.am_transversalservices.I_SDK_HardwareSetup ;

    _iNotify_SDKJsTV       : amTransversalServicesNotifyJsTv.am_transversalservices.I_SDK_notifyJsTV ;
    _iNotify_SDKFileSystem : amTransversalServicesNotifyFileSystem.am_transversalservices.I_SDK_notifyFileSystem ;
    _iNotify_SDKApplicationSetup : amTransversalServicesNotifyAppplicationSetup.am_transversalservices.I_SDK_notifyApplicationSetup ;
    _iNotify_SDKAudioSetup : amTransversalServicesNotifyAudioSetup.am_transversalservices.I_SDK_notifyAudioSetup ;
    _iNotify_SDKFirmwareSetup : amTransversalServicesNotifyFirmwareSetup.am_transversalservices.I_SDK_notifyFirmwareSetup ;
    _iNotify_SDKGeneralConfiguration : amTransversalServicesNotifyGeneralConfiguration.am_transversalservices.I_SDK_notifyGeneralConfiguration ;
    _iNotify_SDKInputSourceSetup : amTransversalServicesNotifyInputSourceSetup.am_transversalservices.I_SDK_notifyInputSourceSetup ;
    _iNotify_SDKPowerSetup : amTransversalServicesNotifyPowerSetup.am_transversalservices.I_SDK_notifyPowerSetup ;
    _iNotify_SDKTimeSetup : amTransversalServicesNotifyTimeSetup.am_transversalservices.I_SDK_notifyTimeSetup ;
    _iNotify_SDKTvSignageSetup : amTransversalServicesNotifyTvSignageSetup.am_transversalservices.I_SDK_notifyTvSignageSetup ;
    _iNotify_SDKHardwareSetup : amTransversalServicesNotifyHardwareSetup.am_transversalservices.I_SDK_notifyHardwareSetup ;
    
    //----------- composants 
    _aLogService : amTransversalServicesLogService.am_transversalservices.A_LogService; 

    
    constructor( aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription, 
                 aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                 aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                 error              : amGeneralError.am_general.A_Error)  
    {      
      super(aFactoryDescription, aServiceContainer, aLogService, error);
      
      this._aSDKJsTV     = null;
      this._aSDKConsumer = null;
  
      this._iSDKJsTV       = new rmTransversalServicesJsTV.rm_transversalservices.IImpl_SDK_JsTV_SDKConnector(this) ;
      this._iSDKFileSystem = new rmTransversalServicesFileSystem.rm_transversalservices.IImpl_SDK_FileSystem_SDKConnector(this) ;
      this._iSDKApplicationSetup = new rmTransversalServicesApplicationSetup.rm_transversalservices.IImpl_SDK_ApplicationSetup_SDKConnector(this) ;
      this._iSDKAudioSetup = new rmTransversalServicesAudioSetup.rm_transversalservices.IImpl_SDK_AudioSetup_SDKConnector(this) ;
      this._iSDKFirmwareSetup = new rmTransversalServicesFirmwareSetup.rm_transversalservices.IImpl_SDK_FirmwareSetup_SDKConnector(this) ;
      this._iSDKGeneralConfiguration = new rmTransversalServicesGeneralConfiguration.rm_transversalservices.IImpl_SDK_GeneralConfiguration_SDKConnector(this) ;
      this._iSDKInputSourceSetup = new rmTransversalServicesInputSourceSetup.rm_transversalservices.IImpl_SDK_InputSourceSetup_SDKConnector(this) ;
      this._iSDKPowerSetup = new rmTransversalServicesPowerSetup.rm_transversalservices.IImpl_SDK_PowerSetup_SDKConnector(this) ;
      this._iSDKTimeSetup = new rmTransversalServicesTimeSetup.rm_transversalservices.IImpl_SDK_TimeSetup_SDKConnector(this) ;
      this._iSDKTvSignageSetup = new rmTransversalServicesTvSignageSetup.rm_transversalservices.IImpl_SDK_TvSignageSetup_SDKConnector(this) ;
      this._iSDKHardwareSetup = new rmTransversalServicesHardwareSetup.rm_transversalservices.IImpl_SDK_HardwareSetup_SDKConnector(this) ;

      this._iNotify_SDKJsTV       = new rmTransversalServicesNotifyJsTV.rm_transversalservices.IImpl_SDK_notifyJsTV_SDKConnector(this) ;
      this._iNotify_SDKFileSystem = new rmTransversalServicesNotifyFileSystem.rm_transversalservices.IImpl_SDK_notifyFileSystem_SDKConnector(this) ;
      this._iNotify_SDKApplicationSetup = new rmTransversalServicesNotifyApplicationSetup.rm_transversalservices.IImpl_SDK_notifyApplicationSetup_SDKConnector(this) ;
      this._iNotify_SDKAudioSetup = new rmTransversalServicesNotifyAudioSetup.rm_transversalservices.IImpl_SDK_notifyAudioSetup_SDKConnector(this) ;
      this._iNotify_SDKFirmwareSetup = new rmTransversalServicesNotifyFirmwareSetup.rm_transversalservices.IImpl_SDK_notifyFirmwareSetup_SDKConnector(this) ;
      this._iNotify_SDKGeneralConfiguration = new rmTransversalServicesNotifyGeneralConfiguration.rm_transversalservices.IImpl_SDK_notifyGeneralConfiguration_SDKConnector(this) ;
      this._iNotify_SDKInputSourceSetup = new rmTransversalServicesNotifyInputSourceSetup.rm_transversalservices.IImpl_SDK_notifyInputSourceSetup_SDKConnector(this) ;
      this._iNotify_SDKPowerSetup = new rmTransversalServicesNotifyPowerSetup.rm_transversalservices.IImpl_SDK_notifyPowerSetup_SDKConnector(this) ;
      this._iNotify_SDKTimeSetup = new rmTransversalServicesNotifyTimeSetup.rm_transversalservices.IImpl_SDK_notifyTimeSetup_SDKConnector(this) ;
      this._iNotify_SDKTvSignageSetup = new rmTransversalServicesNotifyTvSignageSetup.rm_transversalservices.IImpl_SDK_notifyTvSignageSetup_SDKConnector(this) ;
      this._iNotify_SDKHardwareSetup = new rmTransversalServicesNotifyHardwareSetup.rm_transversalservices.IImpl_SDK_notifyHardwareSetup_SDKConnector(this) ;

      //this._aLogService = aLogService;
    }

    //-----------------------------------------
    public setTargetService(targetService: amGeneralService.am_general.A_Service)
    {
      this._aSDKJsTV = <amTransversalServicesSDKJsTV.am_transversalservices.A_SDK_JsTV>targetService;
    }
    
    //-----------------------------------------
    public setConsumerService(consumerService: amGeneralService.am_general.A_Service)
    {
      this._aSDKConsumer = <amTransversalServicesSDKConsumer.am_transversalservices.A_SDK_Consumer>consumerService;
    }

  }
} 