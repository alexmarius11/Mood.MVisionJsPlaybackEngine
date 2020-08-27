import amGeneral = require("../../../../../app/ts/abstract/am_general/i_interface/I_Interface");

import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
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

export module am_transversalservices
{
  export interface I_SDK_HardwareSetup extends amGeneral.am_general.I_Interface
  {
    _name: string;    

    startWps(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_startWps(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    stopWps(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_stopWps(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    getWifiList(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;  //return wifiList: Array<amGeneralWifiConnectionInfo.am_general.A_WifiConnectionInfo>, 
    promise_getWifiList(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any; //return wifiList: Array<amGeneralWifiConnectionInfo.am_general.A_WifiConnectionInfo>, 

    connectWifi(wifiConnectionInfo: amGeneralWifiConnectionInfo.am_general.A_WifiConnectionInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_connectWifi(wifiConnectionInfo: amGeneralWifiConnectionInfo.am_general.A_WifiConnectionInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;


    setNewtworkInfo(networkProperties: amGeneralNetworkProperties.am_general.A_NetworkProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_setNewtworkInfo(networkProperties: amGeneralNetworkProperties.am_general.A_NetworkProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    getNewtworkInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_getNewtworkInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;


    setNewtworkProxyInfo(networkProperties: amGeneralNetworkProxyProperties.am_general.A_NetworkProxyProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_setNewtworkProxyInfo(networkProperties: amGeneralNetworkProxyProperties.am_general.A_NetworkProxyProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    getNewtworkProxyInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_getNewtworkProxyInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    getMacAddress(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_getMacAddress(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    getPlatformInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_getPlatformInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    getSystemUsageInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ; 
    promise_getSystemUsageInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any; 


    setBeaconInfo(beaconInfo: amGeneralBeaconInfo.am_general.A_BeaconInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_setBeaconInfo(beaconInfo: amGeneralBeaconInfo.am_general.A_BeaconInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    getBeaconInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_getBeaconInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;


    setEddystoneInfo(eddystoneInfo: amGeneralEddystoneInfo.am_general.A_EddystoneInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_setEddystoneInfo(eddystoneInfo: amGeneralEddystoneInfo.am_general.A_EddystoneInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    getEddystoneInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_getEddystoneInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;


    setWifiSoftAppInfo(wifiSoftAppInfo: amGeneralWifiSoftAppInfo.am_general.A_WifiSoftAppInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_getWifiSoftApp(wifiSoftAppInfo: amGeneralWifiSoftAppInfo.am_general.A_WifiSoftAppInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    getWifiSoftAppInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_getWifiSoftAppInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;
  }
} 