import amGeneral = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/I_SDK_HardwareSetup");

import nmTransversalServices = require("../../../../../app/ts/native/nm_transversalservices/n_sdk_webos/N_SDK_WebOS");
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

import "./cordova/cordova.webos";
import "./cordova/storage";
import "./cordova/deviceInfo";

declare var DeviceInfo : any;

export module nm_transversalservices
{
  export class IImpl_SDK_HardwareSetup_WebOS implements amGeneral.am_transversalservices.I_SDK_HardwareSetup
  {
    //----------- properties
    _name: string;  

    //----------- owner
    _owner: nmTransversalServices.nm_transversalservices.N_SDK_WebOS;

    //----------- constructor 
    constructor(owner: nmTransversalServices.nm_transversalservices.N_SDK_WebOS)  
    {
      this._owner = owner;  
    }

    public startWps(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      function successCb() {                                            
        console.log("successCb");       
        callback("startWps success");
     }                                                                 
                                                                       
     function failureCb(cbObject) {                                    
        var errorCode = cbObject.errorCode;                            
        var errorText = cbObject.errorText;                            
        console.log ("Error Code [" + errorCode + "]: " + errorText);  
        callback(cbObject);
     }                                                                 
                                                                       
     var deviceInfo = new DeviceInfo();                                
                                                                       
     var options = {                                                   
       method : "PBC"                                                 
     };                                                                
                                                                       
     deviceInfo.startWps(successCb, failureCb, options);               
    }

    public promise_startWps(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    public stopWps(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public promise_stopWps(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      function successCb() {                                           
          console.log("successCb");
          callback("stopWps success");
      }                                                                
                                                                        
      function failureCb(cbObject) {                                   
          var errorCode = cbObject.errorCode;                           
          var errorText = cbObject.errorText;                           
          console.log ("Error Code [" + errorCode + "]: " + errorText);
          callback(cbObject);
      }                                                                
                                                                        
      var deviceInfo = new DeviceInfo();                               
                                                                        
      deviceInfo.stopWps(successCb, failureCb);                        
   
    }

    public getWifiList(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      function successCb(cbObject) {                                                           
          
          console.log("cbObject : " + JSON.stringify(cbObject));                                
                                                                                                
          for(var i=0; i < cbObject.networkInfo.length; i++) {                                  
              console.log("network info : ssid " + cbObject.networkInfo[i].ssid);               
              console.log("network info : signalLevel " + cbObject.networkInfo[i].signalLevel); 
          }                                                                                     
          
          callback(cbObject);
      }                                                                                        
                                                                                                
      function failureCb(cbObject) {                                                           
          var errorCode = cbObject.errorCode;                                                   
          var errorText = cbObject.errorText;                                                   
          console.log ("Error Code [" + errorCode + "]: " + errorText);      
          
          callback(cbObject);
      }                                                                                        
                                                                                                
      var deviceInfo = new DeviceInfo();                                                       
      deviceInfo.getWifiList(successCb, failureCb);                                            
      //return wifiList: Array<amGeneralWifiConnectionInfo.am_general.A_WifiConnectionInfo>, 
    }

    public promise_getWifiList(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
     //return wifiList: Array<amGeneralWifiConnectionInfo.am_general.A_WifiConnectionInfo>,   
    }

    public connectWifi(wifiConnectionInfo: amGeneralWifiConnectionInfo.am_general.A_WifiConnectionInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public promise_connectWifi(wifiConnectionInfo: amGeneralWifiConnectionInfo.am_general.A_WifiConnectionInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      function successCb() {                                          
          console.log("successCb");         
          callback("connectWifi success");
      }                                                               
                                                                      
      function failureCb(cbObject) {                                  
          var errorCode = cbObject.errorCode;                          
          var errorText = cbObject.errorText;                          
          console.log ("Error Code [" + errorCode + "]: " + errorText);
          callback(cbObject);
      }                                                               
                                                                      
      var deviceInfo = new DeviceInfo();                              
                                                                      
      var options = {                                                 
          ssid : "AP_NAME",                                            
          password : "12341234"                                        
      };                                                              
                                                                      
      deviceInfo.connectWifi(successCb, failureCb, options);          
    }


    public setNewtworkInfo(networkProperties: amGeneralNetworkProperties.am_general.A_NetworkProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      function successCb() {                                                
          console.log("successCb");   
          callback("setNetworkInfo success");
      }                                                                     
                                                                            
      function failureCb(cbObject) {                                        
          var errorCode = cbObject.errorCode;                                
          var errorText = cbObject.errorText;                                
          console.log ("Error Code [" + errorCode + "]: " + errorText);     
          
          callback(cbObject);
      }                                                                     
                                                                            
      var deviceInfo = new DeviceInfo();            
      
      var wired = {                                                         
          enabled : true,                                                    
          method : "manual",                                                 
          ipAddress : "192.168.0.2",                                         
          netmask : "255.255.255.0",                                         
          gateway : "192.168.0.1",                                           
          dns1 : "156.147.135.180",                                          
          dns2 : "156.147.135.181"                                           
      };
      
      var wifi = {                                                          
          enabled : true,                                                    
          method : "manual",                                                 
          ipAddress : "192.168.0.2",                                         
          netmask : "255.255.255.0",                                         
          gateway : "192.168.0.1",                                           
          dns1 : "156.147.135.180",                                          
          dns2 : "156.147.135.181"                                           
      };                                                       
      
      var options = {                                                       
          wired : wired,                                                     
          wifi : wifi                                                        
      };                                                       
      
      deviceInfo.setNetworkInfo(successCb, failureCb, options);             
    }

    public promise_setNewtworkInfo(networkProperties: amGeneralNetworkProperties.am_general.A_NetworkProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    public getNewtworkInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      function successCb(cbObject) {
          console.log("cbObject : " + JSON.stringify(cbObject));
            console.log("isInternetConnectionAvailable : " + cbObject.isInternetConnectionAvailable);
            console.log("wired.state : " + cbObject.wired.state);
            console.log("wired.method : " + cbObject.wired.method);
            console.log("wired.ipAddress : " + cbObject.wired.ipAddress);
            console.log("wired.netmask : " + cbObject.wired.netmask);
            console.log("wired.dns1 : " + cbObject.wired.dns1);
            console.log("wired.dns2 : " + cbObject.wired.dns2);
            console.log("wifi.state : " + cbObject.wifi.state);
            console.log("wifi.method : " + cbObject.wifi.method);
            console.log("wifi.ipAddress : " + cbObject.wifi.ipAddress);
            console.log("wifi.netmask : " + cbObject.wifi.netmask);
            console.log("wifi.dns1 : " + cbObject.wifi.dns1);
            console.log("wifi.dns2 : " + cbObject.wifi.dns2);
            
            callback(cbObject);
      }
      
      function failureCb(cbObject) {
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText;
        
        console.log ("Error Code [" + errorCode + "]: " + errorText);
        callback(cbObject);
      }
      
      new DeviceInfo().getNetworkInfo(successCb, failureCb);
  
      
    }

    public promise_getNewtworkInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }


    public setNewtworkProxyInfo(networkProperties: amGeneralNetworkProxyProperties.am_general.A_NetworkProxyProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public promise_setNewtworkProxyInfo(networkProperties: amGeneralNetworkProxyProperties.am_general.A_NetworkProxyProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    public getNewtworkProxyInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public promise_getNewtworkProxyInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    public getMacAddress(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      function successCb(cbObject) {
        console.log("cbObject : " + JSON.stringify(cbObject));
          console.log("wiredInfo.macAddress : " + cbObject.wiredInfo.macAddress);
          
          callback(cbObject);
    }
    
    function failureCb(cbObject) {
       var errorCode = cbObject.errorCode;
       var errorText = cbObject.errorText;
       
       console.log ("Error Code [" + errorCode + "]: " + errorText);
       callback(cbObject);
    }
    
    new DeviceInfo().getNetworkMacInfo(successCb, failureCb);
    }

    public promise_getMacAddress(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    public getPlatformInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      function successCb(cbObject) {
          console.log("cbObject : " + JSON.stringify(cbObject));
            console.log("hardwareVersion : " + cbObject.hardwareVersion);
            console.log("modelName : " + cbObject.modelName);
            console.log("osdResolution : " + cbObject.osdResolution);
            console.log("platformName : " + cbObject.platformName);
            console.log("sdkVersion : " + cbObject.sdkVersion);
            console.log("serialNumber : " + cbObject.serialNumber);
            console.log("firmwareVersion : " + cbObject.firmwareVersion);
            
            callback(cbObject);
      }
      
      function failureCb(cbObject) {
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText;
        
        console.log ("Error Code [" + errorCode + "]: " + errorText);
        callback(cbObject);
      }
      
      new DeviceInfo().getPlatformInfo(successCb, failureCb);
    }

    public promise_getPlatformInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    public getSystemUsageInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      function successCb(cbObject) {
          console.log("cbObject : " + JSON.stringify(cbObject));
          console.log("memory.total : " + cbObject.memory.total);
          console.log("memory.free : " + cbObject.memory.free);
          for (var i in cbObject.cpus) {
              console.log("cpu.model " +  cbObject.cpus[i].model);
              console.log("cpu.times.user " +  cbObject.cpus[i].times.user);
              console.log("cpu.times.nice " +  cbObject.cpus[i].times.nice);
              console.log("cpu.times.sys " +  cbObject.cpus[i].times.sys);
              console.log("cpu.times.idle " +  cbObject.cpus[i].times.idle);
              console.log("cpu.times.irq " +  cbObject.cpus[i].times.irq);
          } 
          
          callback(cbObject);
      }

      function failureCb(cbObject) {
          var errorCode = cbObject.errorCode;
          var errorText = cbObject.errorText;
          
          console.log ("Error Code [" + errorCode + "]: " + errorText);
          callback(cbObject);
      }
      
      
      var deviceInfo = new DeviceInfo();
      var options = {cpus : true, memory : true};
      deviceInfo.getSystemUsageInfo(successCb, failureCb, options);
    }

    public promise_getSystemUsageInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }


    public setBeaconInfo(beaconInfo: amGeneralBeaconInfo.am_general.A_BeaconInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      function successCb() {                                                
          console.log("successCb");   
          callback("setiBeaconInfo success");
      }                                                                     
                                                                            
      function failureCb(cbObject) {                                        
          var errorCode = cbObject.errorCode;                                
          var errorText = cbObject.errorText;                                
          console.log ("Error Code [" + errorCode + "]: " + errorText);     
          
          callback(cbObject);
      }                                                                     
                                                                            
      var deviceInfo = new DeviceInfo();            
      
      var options = {
        enabled : true,
        uuid : "f7826da64fa24e988024bc5b71e0893e",
        major : 5000,
        minor : 3000
      };
    
      
        deviceInfo.setiBeaconInfo(successCb, failureCb, options);             
      
    }

    public promise_setBeaconInfo(beaconInfo: amGeneralBeaconInfo.am_general.A_BeaconInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    public getBeaconInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      function successCb(cbObject) {
          console.log("cbObject : " + JSON.stringify(cbObject));
    
            callback(cbObject);
      }
      
      function failureCb(cbObject) {
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText;
        
        console.log ("Error Code [" + errorCode + "]: " + errorText);
        callback(cbObject);
      }
      
      new DeviceInfo().getiBeaconInfo(successCb, failureCb);
    }

    public promise_getBeaconInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }


    public setEddystoneInfo(eddystoneInfo: amGeneralEddystoneInfo.am_general.A_EddystoneInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      function successCb() {                                                
          console.log("successCb");   
          callback("setEddystoneInfo success");
      }                                                                     
                                                                            
      function failureCb(cbObject) {                                        
          var errorCode = cbObject.errorCode;                                
          var errorText = cbObject.errorText;                                
          console.log ("Error Code [" + errorCode + "]: " + errorText);     
          
          callback(cbObject);
      }                                                                     
                                                                            
      var deviceInfo = new DeviceInfo();            
      var options = {
        enabled : true,
        frame : DeviceInfo.EddystoneFrame.URL,
        frameData : "http://www.lge.com"
      };
                                                        
      deviceInfo.setEddystoneInfo(successCb, failureCb, options);             
   
    }
    public promise_setEddystoneInfo(eddystoneInfo: amGeneralEddystoneInfo.am_general.A_EddystoneInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    public getEddystoneInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      function successCb(cbObject) {
          console.log("cbObject : " + JSON.stringify(cbObject));        
            callback(cbObject);
      }
      
      function failureCb(cbObject) {
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText;
        
        console.log ("Error Code [" + errorCode + "]: " + errorText);
        callback(cbObject);
      }
      
      new DeviceInfo().getEddystoneInfo(successCb, failureCb);
    }

    public promise_getEddystoneInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }


    public setWifiSoftAppInfo(wifiSoftAppInfo: amGeneralWifiSoftAppInfo.am_general.A_WifiSoftAppInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      	function successCb() {                                                           
              
            console.log("successCb");   
            callback("setNetworkInfo success");
        }                                                                                        
                                                                                                
        function failureCb(cbObject) {                                                           
          var errorCode = cbObject.errorCode;                                                   
          var errorText = cbObject.errorText;                                                   
          console.log ("Error Code [" + errorCode + "]: " + errorText);      
          
          callback(cbObject);
        }                                                                                        
                                                                                                
        var deviceInfo = new DeviceInfo();                    
        var options = {
                  enabled : true,
                  ssid : "1A2B3C4D5E1A2B3C4D5E1A2B3C4D5EFF",
                  securityKey :"123456"
        };
        
        deviceInfo.setSoftApInfo(successCb, failureCb, options);                                            
    }

    public promise_getWifiSoftApp(wifiSoftAppInfo: amGeneralWifiSoftAppInfo.am_general.A_WifiSoftAppInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    public getWifiSoftAppInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      function successCb(cbObject) {                                                           
            
            console.log("cbObject : " + JSON.stringify(cbObject));                                
                                                                                                  
            console.log("enabled : " + cbObject.enabled);
            console.log("ssid : " + cbObject.ssid);
            console.log("securityKey : " + cbObject.securityKey);
            
            callback(cbObject);
        }                                                                                        
                                                                                                  
        function failureCb(cbObject) {                                                           
            var errorCode = cbObject.errorCode;                                                   
            var errorText = cbObject.errorText;                                                   
            console.log ("Error Code [" + errorCode + "]: " + errorText);      
            
            callback(cbObject);
        }                                                                                        
                                                                                                  
        var deviceInfo = new DeviceInfo();                                                       
        deviceInfo.getSoftApInfo(successCb, failureCb);                                            
    }

    public promise_getWifiSoftAppInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

  } //--- end class

}
