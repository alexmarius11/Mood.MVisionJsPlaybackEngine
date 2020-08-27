import amGeneral = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_consumer/I_SDK_notifyHardwareSetup");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralWifiConnectionInfo = require("../../../../../app/ts/abstract/am_general/a_networkproperties/A_WifiConnectionInfo");
import amGeneralNetworkProperties = require("../../../../../app/ts/abstract/am_general/a_networkproperties/A_NetworkProperties");
import amGeneralNetworkCardProperties = require("../../../../../app/ts/abstract/am_general/a_networkproperties/A_NetworkCardProperties");
import amGeneralNetworkProxyProperties = require("../../../../../app/ts/abstract/am_general/a_networkproperties/A_NetworkProxyProperties");
import amGeneralBeaconInfo            = require("../../../../../app/ts/abstract/am_general/a_beaconinfo/A_BeaconInfo");
import amGeneralCaptureScreenInfo     = require("../../../../../app/ts/abstract/am_general/a_capturescreeninfo/A_CaptureScreenInfo");
import amGeneralEddystoneInfo         = require("../../../../../app/ts/abstract/am_general/a_eddystoneinfo/A_EddystoneInfo");
import amGeneralPlatformInfo          = require("../../../../../app/ts/abstract/am_general/a_platforminfo/A_PlatformInfo");
import amGeneralSystemUsageInfo       = require("../../../../../app/ts/abstract/am_general/a_systemusageinfo/A_SystemUsageInfo");
import amGeneralWifiSoftAppInfo       = require("../../../../../app/ts/abstract/am_general/a_wifisoftappinfo/A_WifiSoftAppInfo");

import rmTransversalServicesSDKConsumerSDKRenderer = require("../../../../../app/ts/reusable/rm_renderingservices/r_sdkrenderer/R_SDKConsumer_SDKRenderer");

export module rm_transversalservices
{
  export class IImpl_SDK_notifyHardwareSetup_SDKConsumer_SDKRenderer implements amGeneral.am_transversalservices.I_SDK_notifyHardwareSetup
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

    public notify_startWps(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public notify_promise_startWps(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    public notify_stopWps(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public notify_promise_stopWps(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    public notify_getWifiList(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      //return wifiList: Array<amGeneralWifiConnectionInfo.am_general.A_WifiConnectionInfo>, 
    }

    public notify_promise_getWifiList(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
     //return wifiList: Array<amGeneralWifiConnectionInfo.am_general.A_WifiConnectionInfo>,   
    }

    public notify_connectWifi(wifiConnectionInfo: amGeneralWifiConnectionInfo.am_general.A_WifiConnectionInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public notify_promise_connectWifi(wifiConnectionInfo: amGeneralWifiConnectionInfo.am_general.A_WifiConnectionInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }


    public notify_setNewtworkInfo(networkProperties: amGeneralNetworkProperties.am_general.A_NetworkProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public notify_promise_setNewtworkInfo(networkProperties: amGeneralNetworkProperties.am_general.A_NetworkProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    public notify_getNewtworkInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public notify_promise_getNewtworkInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }


    public notify_setNewtworkProxyInfo(networkProperties: amGeneralNetworkProxyProperties.am_general.A_NetworkProxyProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public notify_promise_setNewtworkProxyInfo(networkProperties: amGeneralNetworkProxyProperties.am_general.A_NetworkProxyProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    public notify_getNewtworkProxyInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public notify_promise_getNewtworkProxyInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    public notify_getMacAddress(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public notify_promise_getMacAddress(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    public notify_getPlatformInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public notify_promise_getPlatformInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    public notify_getSystemUsageInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public notify_promise_getSystemUsageInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }


    public notify_setBeaconInfo(beaconInfo: amGeneralBeaconInfo.am_general.A_BeaconInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public notify_promise_setBeaconInfo(beaconInfo: amGeneralBeaconInfo.am_general.A_BeaconInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    public notify_getBeaconInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }
    public notify_promise_getBeaconInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }


    public notify_setEddystoneInfo(eddystoneInfo: amGeneralEddystoneInfo.am_general.A_EddystoneInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }
    public notify_promise_setEddystoneInfo(eddystoneInfo: amGeneralEddystoneInfo.am_general.A_EddystoneInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    public notify_getEddystoneInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }
    public notify_promise_getEddystoneInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }


    public notify_setWifiSoftAppInfo(wifiSoftAppInfo: amGeneralWifiSoftAppInfo.am_general.A_WifiSoftAppInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public notify_promise_getWifiSoftApp(wifiSoftAppInfo: amGeneralWifiSoftAppInfo.am_general.A_WifiSoftAppInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    public notify_getWifiSoftAppInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }

    public notify_promise_getWifiSoftAppInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

  }
} 