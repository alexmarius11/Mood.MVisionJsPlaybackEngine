import amGeneral = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_consumer/I_SDK_notifyFirmwareSetup");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralFirmwareProperties = require("../../../../../app/ts/abstract/am_general/a_firmwareproperties/A_FirmwareProperties");

import rmTransversalServicesSDKConsumerSDKRenderer = require("../../../../../app/ts/reusable/rm_renderingservices/r_sdkrenderer/R_SDKConsumer_SDKRenderer");


export module rm_transversalservices
{
  export class IImpl_SDK_notifyFirmwareSetup_SDKConsumer_SDKRenderer implements amGeneral.am_transversalservices.I_SDK_notifyFirmwareSetup
  {
    //----------- properties
    _name: string;  

    //----------- owner
    _owner: rmTransversalServicesSDKConsumerSDKRenderer.rm_renderingservices.R_SDKConsumer_SDKRenderer;

    //----------- constructor 
    constructor(owner: rmTransversalServicesSDKConsumerSDKRenderer.rm_renderingservices.R_SDKConsumer_SDKRenderer)  
    {
      this._owner = owner;  
    }

        //-------------------------------------
    //   download Firmware
    //-------------------------------------   

    //-------------------------------------   
    public notify_downloadFirmware(firmwareProperties: amGeneralFirmwareProperties.am_general.A_FirmwareProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }

    //-------------------------------------   
    public notify_promise_downloadFirmware(firmwareProperties: amGeneralFirmwareProperties.am_general.A_FirmwareProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //-------------------------------------
    //   upgrade Firmware
    //-------------------------------------   

    //-------------------------------------   
    public notify_upgradeFirmware(firmwareProperties: amGeneralFirmwareProperties.am_general.A_FirmwareProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }

    //-------------------------------------   
    public notify_promise_upgradeFirmware(firmwareProperties: amGeneralFirmwareProperties.am_general.A_FirmwareProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //-------------------------------------   
    public notify_getFirmwareUpgradeStatus(firmwareProperties: amGeneralFirmwareProperties.am_general.A_FirmwareProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
    }
    
    //-------------------------------------   
    public notify_promise_getFirmwareUpgradeStatus(firmwareProperties: amGeneralFirmwareProperties.am_general.A_FirmwareProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

  }
} 