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

export module am_renderingservices
{
  export interface I_SDKRenderer_HardwareSetup extends amGeneral.am_general.I_Interface
  {
    _name: string;    

    //startWps(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;

    //stopWps(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;

    //getWifiList(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;  //return wifiList: Array<amGeneralWifiConnectionInfo.am_general.A_WifiConnectionInfo>, 

    //connectWifi(wifiConnectionInfo: amGeneralWifiConnectionInfo.am_general.A_WifiConnectionInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;


    //setNewtworkInfo(networkProperties: amGeneralNetworkProperties.am_general.A_NetworkProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;

    //getNewtworkInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;


    //setNewtworkProxyInfo(networkProperties: amGeneralNetworkProxyProperties.am_general.A_NetworkProxyProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;

    //getNewtworkProxyInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;

    //getMacAddress(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;

    //getPlatformInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;

    //getSystemUsageInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ; 

    //setBeaconInfo(beaconInfo: amGeneralBeaconInfo.am_general.A_BeaconInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;

    //getBeaconInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;

    //setEddystoneInfo(eddystoneInfo: amGeneralEddystoneInfo.am_general.A_EddystoneInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;

    //getEddystoneInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;


    //setWifiSoftAppInfo(wifiSoftAppInfo: amGeneralWifiSoftAppInfo.am_general.A_WifiSoftAppInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;

    //getWifiSoftAppInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
  }
} 