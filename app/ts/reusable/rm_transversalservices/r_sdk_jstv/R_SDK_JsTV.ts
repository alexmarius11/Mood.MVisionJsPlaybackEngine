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
import rmTransversalServicesJsTV       = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_jstv/IImpl_SDK_JsTV_R");
import rmTransversalServicesFileSystem = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_jstv/IImpl_SDK_FileSystem_JsTV_R");
import rmTransversalServicesApplicationSetup  = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_jstv/IImpl_SDK_ApplicationSetup_JsTV_R");
import rmTransversalServicesAudioSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_jstv/IImpl_SDK_AudioSetup_JsTV_R");
import rmTransversalServicesFirmwareSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_jstv/IImpl_SDK_FirmwareSetup_JsTV_R");
import rmTransversalServicesGeneralConfiguration = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_jstv/IImpl_SDK_GeneralConfiguration_JsTV_R");
import rmTransversalServicesInputSourceSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_jstv/IImpl_SDK_InputSourceSetup_JsTV_R");
import rmTransversalServicesPowerSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_jstv/IImpl_SDK_PowerSetup_JsTV_R");
import rmTransversalServicesTimeSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_jstv/IImpl_SDK_TimeSetup_JsTV_R");
import rmTransversalServicesTvSignageSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_jstv/IImpl_SDK_TvSignageSetup_JsTV_R");
import rmTransversalServicesHardwareSetup  = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_jstv/IImpl_SDK_HardwareSetup_JsTV_R");


export module rm_transversalservices
{
  export class R_SDK_JsTV   extends rmGeneralService.rm_general.R_Service 
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
    _iSDKHardwareSetup  : amTransversalServicesHardwareSetup.am_transversalservices.I_SDK_HardwareSetup ;


    //----------- composants 
    _aLogService : amTransversalServicesLogService.am_transversalservices.A_LogService; 

    constructor( aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription, 
                 aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                 aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                 error              : amGeneralError.am_general.A_Error)  
    {      
      super(aFactoryDescription, aServiceContainer, aLogService, error);

      this._iSDKJsTV       = new rmTransversalServicesJsTV.rm_transversalservices.IImpl_SDK_JsTV_R(this) ;
      this._iSDKFileSystem = new rmTransversalServicesFileSystem.rm_transversalservices.IImpl_SDK_FileSystem_JsTV_R(this) ;
      this._iSDKApplicationSetup = new rmTransversalServicesApplicationSetup.rm_transversalservices.IImpl_SDK_ApplicationSetup_JsTV_R(this) ;
      this._iSDKAudioSetup = new rmTransversalServicesAudioSetup.rm_transversalservices.IImpl_SDK_AudioSetup_JsTV_R(this) ;
      this._iSDKFirmwareSetup = new rmTransversalServicesFirmwareSetup.rm_transversalservices.IImpl_SDK_FirmwareSetup_JsTV_R(this) ;
      this._iSDKGeneralConfiguration = new rmTransversalServicesGeneralConfiguration.rm_transversalservices.IImpl_SDK_GeneralConfiguration_JsTV_R(this) ;
      this._iSDKInputSourceSetup = new rmTransversalServicesInputSourceSetup.rm_transversalservices.IImpl_SDK_InputSourceSetup_JsTV_R(this) ;
      this._iSDKPowerSetup = new rmTransversalServicesPowerSetup.rm_transversalservices.IImpl_SDK_PowerSetup_JsTV_R(this) ;
      this._iSDKTimeSetup = new rmTransversalServicesTimeSetup.rm_transversalservices.IImpl_SDK_TimeSetup_JsTV_R(this) ;
      this._iSDKTvSignageSetup = new rmTransversalServicesTvSignageSetup.rm_transversalservices.IImpl_SDK_TvSignageSetup_JsTV_R(this) ;
      this._iSDKHardwareSetup  = new rmTransversalServicesHardwareSetup.rm_transversalservices.IImpl_SDK_HardwareSetup_JsTV_R(this) ;

      //this._aLogService = aLogService;
    }

  }
} 