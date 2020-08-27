
import amGeneralService = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");

import amTransversalServicesSDKJsTv = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/A_SDK_JsTV");

import amTransversalServicesSDKConsumer = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_consumer/A_SDK_Consumer");

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


export module am_transversalservices
{
  export interface A_SDK_Consumer extends amGeneralService.am_general.A_Service
  {
    //---------- interfaces
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

  }
} 