
import amTransversalServicesSDKConsumer  = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_consumer/A_SDK_Consumer");

import amGeneralError                          = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralService                        = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");
import amGeneralFactoryDescription             = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amTransversalServicesLogService         = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");
import amTransversalServicesSDKRenderer        = require("../../../../../app/ts/abstract/am_renderingservices/a_sdkrenderer/A_SDKRenderer");


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

import rmTransversalServicesNotifyJsTV       = require("../../../../../app/ts/reusable/rm_renderingservices/r_sdkrenderer/IImpl_SDK_notifyJsTV_SDKConsumer_SDKRenderer");
import rmTransversalServicesNotifyFileSystem = require("../../../../../app/ts/reusable/rm_renderingservices/r_sdkrenderer/IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer");
import rmTransversalServicesNotifyApplicationSetup  = require("../../../../../app/ts/reusable/rm_renderingservices/r_sdkrenderer/IImpl_SDK_notifyApplicationSetup_SDKConsumer_SDKRenderer");
import rmTransversalServicesNotifyAudioSetup = require("../../../../../app/ts/reusable/rm_renderingservices/r_sdkrenderer/IImpl_SDK_notifyAudioSetup_SDKConsumer_SDKRenderer");
import rmTransversalServicesNotifyFirmwareSetup = require("../../../../../app/ts/reusable/rm_renderingservices/r_sdkrenderer/IImpl_SDK_notifyFirmwareSetup_SDKConsumer_SDKRenderer");
import rmTransversalServicesNotifyGeneralConfiguration = require("../../../../../app/ts/reusable/rm_renderingservices/r_sdkrenderer/IImpl_SDK_notifyGeneralConfiguration_SDKConsumer_SDKRenderer");
import rmTransversalServicesNotifyInputSourceSetup = require("../../../../../app/ts/reusable/rm_renderingservices/r_sdkrenderer/IImpl_SDK_notifyInputSourceSetup_SDKConsumer_SDKRenderer");
import rmTransversalServicesNotifyPowerSetup = require("../../../../../app/ts/reusable/rm_renderingservices/r_sdkrenderer/IImpl_SDK_notifyPowerSetup_SDKConsumer_SDKRenderer");
import rmTransversalServicesNotifyTimeSetup = require("../../../../../app/ts/reusable/rm_renderingservices/r_sdkrenderer//IImpl_SDK_notifyTimeSetup_SDKConsumer_SDKRenderer");
import rmTransversalServicesNotifyTvSignageSetup = require("../../../../../app/ts/reusable/rm_renderingservices/r_sdkrenderer/IImpl_SDK_notifyTvSignageSetup_SDKConsumer_SDKRenderer");
import rmTransversalServicesNotifyHardwareSetup = require("../../../../../app/ts/reusable/rm_renderingservices/r_sdkrenderer/IImpl_SDK_notifyHardwareSetup_SDKConsumer_SDKRenderer");

import rmTransversalServicesSDKConsumer  = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_consumer/R_SDK_Consumer");

import rmGeneralService                = require("../../../../../app/ts/reusable/rm_general/r_service/R_Service");


export module rm_renderingservices
{                                          
  export class R_SDKConsumer_SDKRenderer   extends  rmGeneralService.rm_general.R_Service
                                          //extends  rmTransversalServicesSDKConsumer.rm_transversalservices.R_SDK_Consumer 
                                          implements amTransversalServicesSDKConsumer.am_transversalservices.A_SDK_Consumer
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

    //----------- composants 
    _aLogService   : amTransversalServicesLogService.am_transversalservices.A_LogService; 

    _aSDKRenderer : amTransversalServicesSDKRenderer.am_renderingservices.A_SDKRenderer; 

    //----------- constructor 
    constructor( aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription, 
                 aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                 aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                 error              : amGeneralError.am_general.A_Error)  
    {      
      super(aFactoryDescription, aServiceContainer, aLogService, error);

      this._aLogService  = aLogService;
      this._aSDKRenderer = null;

      this._iNotify_SDKJsTV       = new rmTransversalServicesNotifyJsTV.rm_transversalservices.IImpl_SDK_notifyJsTV_SDKConsumer_SDKRenderer(this) ;
      this._iNotify_SDKFileSystem = new rmTransversalServicesNotifyFileSystem.rm_transversalservices.IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer(this) ;
      this._iNotify_SDKApplicationSetup = new rmTransversalServicesNotifyApplicationSetup.rm_transversalservices.IImpl_SDK_notifyApplicationSetup_SDKConsumer_SDKRenderer(this) ;
      this._iNotify_SDKAudioSetup = new rmTransversalServicesNotifyAudioSetup.rm_transversalservices.IImpl_SDK_notifyAudioSetup_SDKConsumer_SDKRenderer(this) ;
      this._iNotify_SDKFirmwareSetup = new rmTransversalServicesNotifyFirmwareSetup.rm_transversalservices.IImpl_SDK_notifyFirmwareSetup_SDKConsumer_SDKRenderer(this) ;
      this._iNotify_SDKGeneralConfiguration = new rmTransversalServicesNotifyGeneralConfiguration.rm_transversalservices.IImpl_SDK_notifyGeneralConfiguration_SDKConsumer_SDKRenderer(this) ;
      this._iNotify_SDKInputSourceSetup = new rmTransversalServicesNotifyInputSourceSetup.rm_transversalservices.IImpl_SDK_notifyInputSourceSetup_SDKConsumer_SDKRenderer(this) ;
      this._iNotify_SDKPowerSetup = new rmTransversalServicesNotifyPowerSetup.rm_transversalservices.IImpl_SDK_notifyPowerSetup_SDKConsumer_SDKRenderer(this) ;
      this._iNotify_SDKTimeSetup = new rmTransversalServicesNotifyTimeSetup.rm_transversalservices.IImpl_SDK_notifyTimeSetup_SDKConsumer_SDKRenderer(this) ;
      this._iNotify_SDKTvSignageSetup = new rmTransversalServicesNotifyTvSignageSetup.rm_transversalservices.IImpl_SDK_notifyTvSignageSetup_SDKConsumer_SDKRenderer(this) ;
      this._iNotify_SDKHardwareSetup = new rmTransversalServicesNotifyHardwareSetup.rm_transversalservices.IImpl_SDK_notifyHardwareSetup_SDKConsumer_SDKRenderer(this) ;

    }

    //--------------------------------------------
    public setOwnerService(aOwnerService: amGeneralService.am_general.A_Service) : void
    {
      this._aOwnerService = aOwnerService;    
      this._aSDKRenderer  = <amTransversalServicesSDKRenderer.am_renderingservices.A_SDKRenderer>aOwnerService;    
    }
    
  }
} 