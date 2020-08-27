
import amGeneral = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");

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


export module am_transversalservices
{
  export interface A_SDK_JsTV extends amGeneral.am_general.A_Service 
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
    
  }
} 