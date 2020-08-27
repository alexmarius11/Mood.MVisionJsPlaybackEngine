import amGeneral = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/I_SDK_FirmwareSetup");

import nmTransversalServices = require("../../../../../app/ts/native/nm_transversalservices/n_sdk_webos/N_SDK_WebOS");
import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralFirmwareProperties = require("../../../../../app/ts/abstract/am_general/a_firmwareproperties/A_FirmwareProperties");

import "./cordova/cordova.webos";
import "./cordova/storage";

export module nm_transversalservices
{
  export class IImpl_SDK_FirmwareSetup_WebOS implements amGeneral.am_transversalservices.I_SDK_FirmwareSetup
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

    //-------------------------------------
    //   download Firmware
    //-------------------------------------   

    //-------------------------------------   
    public downloadFirmware(firmwareProperties: amGeneralFirmwareProperties.am_general.A_FirmwareProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      // Callback for a successful execution.
      // This callback will be called without any parameter.  
      var successCb = function (){
        console.log("download firmware is done.");
        callback("download firmware is done.");      
      };

      // Callback for a failed execution.
      // Failure callback will be invoked with the error code and the error text.
      var failureCb = function(cbObject){
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText;
        console.log( " Error Code [" + errorCode + "]: " + errorText); 
        
        callback(cbObject);
      };
    
      // Create storage object and invoke the API.    
      var storage = new Storage();
      var options = {
          uri : firmwareProperties.getFirmwareUrl() //"http://example.org/myModel-secured_usb_V3_SECURED.epk" 
      }; 

      storage.downloadFirmware(successCb, failureCb, options);
    }

    //-------------------------------------   
    public promise_downloadFirmware(firmwareProperties: amGeneralFirmwareProperties.am_general.A_FirmwareProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //-------------------------------------
    //   upgrade Firmware
    //-------------------------------------   

    //-------------------------------------   
    public upgradeFirmware(firmwareProperties: amGeneralFirmwareProperties.am_general.A_FirmwareProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      // Callback for a successful execution.
      // This callback will be called without any parameter.  
      var successCb = function (){
          console.log("upgradeFirmware is done.");
          callback("upgradeFirmwareis done.");      
      };

      // Callback for a failed execution.
      // Failure callback will be invoked with the error code and the error text.
      var failureCb = function(cbObject){
          var errorCode = cbObject.errorCode;
          var errorText = cbObject.errorText;
          console.log( " Error Code [" + errorCode + "]: " + errorText);           
          callback(cbObject);
      };
      
      // Create storage object and invoke the API.    
      var storage = new Storage();
      storage.upgradeFirmware(successCb, failureCb);
    }

    //-------------------------------------   
    public promise_upgradeFirmware(firmwareProperties: amGeneralFirmwareProperties.am_general.A_FirmwareProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //-------------------------------------   
    public getFirmwareUpgradeStatus(firmwareProperties: amGeneralFirmwareProperties.am_general.A_FirmwareProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      // Callback for a successful execution.
      // This callback will be called without any parameter.  
      var successCb = function (result){
          console.log("getFirmwareUpgradeStatus is done." + JSON.stringify(result));
          callback("getFirmwareUpgradeStatus is done." + JSON.stringify(result));      
      };
  
      // Callback for a failed execution.
      // Failure callback will be invoked with the error code and the error text.
      var failureCb = function(cbObject){
          var errorCode = cbObject.errorCode;
          var errorText = cbObject.errorText;
          console.log( " Error Code [" + errorCode + "]: " + errorText); 
          
          callback(cbObject);
      };
      
      // Create storage object and invoke the API.    
      var storage = new Storage();
      storage.getFirmwareUpgradeStatus(successCb, failureCb);
    }
    
    //-------------------------------------   
    public promise_getFirmwareUpgradeStatus(firmwareProperties: amGeneralFirmwareProperties.am_general.A_FirmwareProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

  } //--- end class

}
