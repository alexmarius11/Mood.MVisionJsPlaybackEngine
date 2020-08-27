
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
  export interface A_SDK_Connector extends amTransversalServicesSDKJsTv.am_transversalservices.A_SDK_JsTV, 
                                           amTransversalServicesSDKConsumer.am_transversalservices.A_SDK_Consumer
  {
    
  }
} 