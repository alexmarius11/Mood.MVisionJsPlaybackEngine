
import amTransversalServices  = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/A_SDK_JsTV");
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
import amGeneralFactoryDescription             = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amTransversalServicesLogService         = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import rmGeneralService                = require("../../../../../app/ts/reusable/rm_general/r_service/R_Service");
import nmTransversalServicesJsTV       = require("../../../../../app/ts/native/nm_transversalservices/n_sdk_nodejs/IImpl_SDK_JsTV_NodeJs");
import nmTransversalServicesFileSystem = require("../../../../../app/ts/native/nm_transversalservices/n_sdk_nodejs/IImpl_SDK_FileSystem_NodeJs");
import nmTransversalServicesApplicationSetup  = require("../../../../../app/ts/native/nm_transversalservices/n_sdk_nodejs/IImpl_SDK_ApplicationSetup_NodeJs");
import nmTransversalServicesAudioSetup = require("../../../../../app/ts/native/nm_transversalservices/n_sdk_nodejs/IImpl_SDK_AudioSetup_NodeJs");
import nmTransversalServicesFirmwareSetup = require("../../../../../app/ts/native/nm_transversalservices/n_sdk_nodejs/IImpl_SDK_FirmwareSetup_NodeJs");
import nmTransversalServicesGeneralConfiguration = require("../../../../../app/ts/native/nm_transversalservices/n_sdk_nodejs/IImpl_SDK_GeneralConfiguration_NodeJs");
import nmTransversalServicesInputSourceSetup = require("../../../../../app/ts/native/nm_transversalservices/n_sdk_nodejs/IImpl_SDK_InputSourceSetup_NodeJs");
import nmTransversalServicesPowerSetup = require("../../../../../app/ts/native/nm_transversalservices/n_sdk_nodejs/IImpl_SDK_PowerSetup_NodeJs");
import nmTransversalServicesTimeSetup = require("../../../../../app/ts/native/nm_transversalservices/n_sdk_nodejs/IImpl_SDK_TimeSetup_NodeJs");
import nmTransversalServicesTvSignageSetup = require("../../../../../app/ts/native/nm_transversalservices/n_sdk_nodejs/IImpl_SDK_TvSignageSetup_NodeJs");
import nmTransversalServicesHardwareSetup = require("../../../../../app/ts/native/nm_transversalservices/n_sdk_nodejs/IImpl_SDK_HardwareSetup_NodeJs");

export module nm_transversalservices
{
  export class N_SDK_NodeJs   extends rmGeneralService.rm_general.R_Service 
                             implements amTransversalServices.am_transversalservices.A_SDK_JsTV
  {
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

    //----------- composants 
    _aLogService : amTransversalServicesLogService.am_transversalservices.A_LogService; 

    constructor( aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription, 
                 aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                 aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                 error              : amGeneralError.am_general.A_Error)  
    {      
      super(aFactoryDescription, aServiceContainer, aLogService, error);

      this._iSDKJsTV       = new nmTransversalServicesJsTV.nm_transversalservices.IImpl_SDK_JsTV_NodeJs(this) ;
      this._iSDKFileSystem = new nmTransversalServicesFileSystem.nm_transversalservices.IImpl_SDK_FileSystem_NodeJs(this) ;
      this._iSDKApplicationSetup = new nmTransversalServicesApplicationSetup.nm_transversalservices.IImpl_SDK_ApplicationSetup_NodeJs(this) ;
      this._iSDKAudioSetup = new nmTransversalServicesAudioSetup.nm_transversalservices.IImpl_SDK_AudioSetup_NodeJs(this) ;
      this._iSDKFirmwareSetup = new nmTransversalServicesFirmwareSetup.nm_transversalservices.IImpl_SDK_FirmwareSetup_NodeJs(this) ;
      this._iSDKGeneralConfiguration = new nmTransversalServicesGeneralConfiguration.nm_transversalservices.IImpl_SDK_GeneralConfiguration_NodeJs(this) ;
      this._iSDKInputSourceSetup = new nmTransversalServicesInputSourceSetup.nm_transversalservices.IImpl_SDK_InputSourceSetup_NodeJs(this) ;
      this._iSDKPowerSetup = new nmTransversalServicesPowerSetup.nm_transversalservices.IImpl_SDK_PowerSetup_NodeJs(this) ;
      this._iSDKTimeSetup = new nmTransversalServicesTimeSetup.nm_transversalservices.IImpl_SDK_TimeSetup_NodeJs(this) ;
      this._iSDKTvSignageSetup = new nmTransversalServicesTvSignageSetup.nm_transversalservices.IImpl_SDK_TvSignageSetup_NodeJs(this) ;
      this._iSDKHardwareSetup = new nmTransversalServicesHardwareSetup.nm_transversalservices.IImpl_SDK_HardwareSetup_NodeJs(this) ;
  
      //this._aLogService = aLogService;
    }

  }
} 