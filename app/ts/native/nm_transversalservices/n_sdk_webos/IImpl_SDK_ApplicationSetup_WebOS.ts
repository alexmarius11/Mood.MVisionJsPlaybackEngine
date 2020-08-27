import amGeneral = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/I_SDK_ApplicationSetup");

import nmTransversalServices = require("../../../../../app/ts/native/nm_transversalservices/n_sdk_webos/N_SDK_WebOS");
import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import amGeneralAppServerProperties = require("../../../../../app/ts/abstract/am_general/a_appserverproperties/A_AppServerProperties");

import "./cordova/cordova.webos";
import "./cordova/storage";
import "./cordova/configuration";

declare var Configuration : any;
declare var Storage : any;

export module nm_transversalservices
{
  export class IImpl_SDK_ApplicationSetup_WebOS implements amGeneral.am_transversalservices.I_SDK_ApplicationSetup
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

        //-----------------------------
    // AppServer get/set Properties 
    //-----------------------------

    //-------------------------------------
    public getAppServerProperties(appServerProperties: amGeneralAppServerProperties.am_general.A_AppServerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }

    //-------------------------------------
    public promise_getAppServerProperties(appServerProperties: amGeneralAppServerProperties.am_general.A_AppServerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //-------------------------------------
    public setAppServerProperties(appServerProperties: amGeneralAppServerProperties.am_general.A_AppServerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
    }
    
    //-------------------------------------
    public promise_setAppServerProperties(appServerProperties: amGeneralAppServerProperties.am_general.A_AppServerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //-----------------------------
    // Upgrade Application 
    //-----------------------------
    
    //-------------------------------------
    public upgradeApplication(appServerProperties: amGeneralAppServerProperties.am_general.A_AppServerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    //-------------------------------------
    public promise_upgradeApplication(appServerProperties: amGeneralAppServerProperties.am_general.A_AppServerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }


    public api_setAppServerProperty(callback)
    {
    
      var appMode = Configuration.AppMode.LOCAL;
      var options = 
      {
         serverIp : "192.168.0.2",
         serverPort : 80,
         secureConnection : false,
         appLaunchMode : appMode,
         fqdnMode : false,
         fqdnAddr : "http://signage.domain.com/index.html"
      }

      function successCb() {
          callback("setPictureProperty success");
      }
  
      function failureCb(cbObject) {
          var errorCode = cbObject.errorCode;
          var errorText = cbObject.errorText;
          
          console.log ("Error Code [" + errorCode + "]: " + errorText);
          callback(cbObject);
      }
  
      new Configuration().setServerProperty(successCb, failureCb, options);
    }

    //--------------------------------------
    public api_getAppServerProperty(callback)
    {
          
      function successCb(cbObject) {
          
          console.log("cbObject : " + JSON.stringify(cbObject));

          console.log("server IP : " + cbObject.serverIp);
          console.log("server Port : " + cbObject.serverPort);
          console.log("secure Connection : " + cbObject.secureConnection);
          console.log("applicationLaunchMode : " + cbObject.appLaunchMode);
          console.log("fully Qualified Domain Name Mode : " + cbObject.fqdnMode);
          console.log("fully Qualified Domain Name Address: " + cbObject.fqdnAddr);
          
          callback(cbObject);
      }

      function failureCb(cbObject) {
          var errorCode = cbObject.errorCode;
          var errorText = cbObject.errorText;
          
          console.log ("Error Code [" + errorCode + "]: " + errorText);
          callback(cbObject);
      }

      new Configuration().getServerProperty(successCb, failureCb);
    }

    //-------------------------------------------
    public api_UpgradeApplication(callback)
    {
      // Callback for a successful execution.
      // This callback will be called without any parameter.	
      var successCb = function (){
        console.log("Upgrading local application done.");
        callback("Upgrading local application done.");	  	
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
      // The parameters.
      // from : Where the application data will be downloaded from. The source can be either 'remote', the Pro:Centric IP server,
      //  or 'usb', the inserted USB storage. 
      var options = {
        to : Storage.AppMode.LOCAL,
        recovery : false
      }; 
    
      storage.upgradeApplication(successCb, failureCb, options);
    }

 } //--- end class
}
