import amGeneral = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/I_SDK_GeneralConfiguration");

import nmTransversalServices = require("../../../../../app/ts/native/nm_transversalservices/n_sdk_webos/N_SDK_WebOS");
import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import amGeneralScreenProperties = require("../../../../../app/ts/abstract/am_general/a_screenproperties/A_ScreenProperties");
import amGeneralProperty = require("../../../../../app/ts/abstract/am_general/a_property/A_Property");

import "./cordova/cordova.webos";
import "./cordova/configuration";

declare var Configuration : any;

export module nm_transversalservices
{
  export class IImpl_SDK_GeneralConfiguration_WebOS implements amGeneral.am_transversalservices.I_SDK_GeneralConfiguration
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


    public api_clearCache(callback)
    {
      function successCb() {
          
        callback("clearCache success");
      }
  
      function failureCb(cbObject) {
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText;
     
        console.log ("Error Code [" + errorCode + "]: " + errorText);
        callback(cbObject);
      }
  
       var conf = new Configuration();
      conf.clearCache(successCb, failureCb);	
    }

    //-------------------------------------
    //     clear Cache 
    //-------------------------------------

    public clearChache(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      function successCb() {
            
            callback("clearCache success");
      }
      
      function failureCb(cbObject) {
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText;
        
        console.log ("Error Code [" + errorCode + "]: " + errorText);
        callback(cbObject);
      }
      
      var conf = new Configuration();
      conf.clearCache(successCb, failureCb);
    }

    public promise_clearCache(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
    }


    //-------------------------------------
    //     get/set Screen Properties
    //-------------------------------------

    public setScreenProperties(newScreenProperties: amGeneralScreenProperties.am_general.A_ScreenProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public promise_setScreenProperties(newScreenProperties: amGeneralScreenProperties.am_general.A_ScreenProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    public getScreenProperties(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public promise_getScreenProperties(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    //-------------------------------------
    //     get/set Screen Mode
    //-------------------------------------

    public setScreenMode(newScreenProperties: amGeneralScreenProperties.am_general.A_ScreenProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public promise_setScreenMode(newScreenProperties: amGeneralScreenProperties.am_general.A_ScreenProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    public getScreenMode(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public promise_getScreenMode(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }


    //-------------------------------------
    //     get/set OSD Languages
    //-------------------------------------

    public setOSDLanguages(osdLanguages: Array<string>, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      var options = {
        specifier : "ko-KR"
       }; 
     
         function successCb() {
           callback("setOSDLanguage success");
         }
     
         function failureCb(cbObject) {
             var errorCode = cbObject.errorCode;
             var errorText = cbObject.errorText;
             
             console.log ("Error Code [" + errorCode + "]: " + errorText);
             callback(cbObject);
         }
         
       new Configuration().setOSDLanguage(successCb, failureCb, options);
     
    }

    public promise_setOsdLanguages(crtDateTime: amGeneralScreenProperties.am_general.A_ScreenProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    public getOSDLanguages(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
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
      
      var conf = new Configuration();
      conf.getOSDLanguage(successCb, failureCb);

      
    }

    public promise_getOsdLanguages(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    //-------------------------------------
    //     get/set OSD Lock
    //-------------------------------------

    public setOSDLock(osdLock: boolean, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      var options = {
        enabled : true
       };
   
       function successCb() {
         callback("setOSDLock success");
       }
   
       function failureCb(cbObject) {
           var errorCode = cbObject.errorCode;
           var errorText = cbObject.errorText;
           
           console.log ("Error Code [" + errorCode + "]: " + errorText);
           callback(cbObject);
       }
       
       new Configuration().setOSDLock(successCb, failureCb, options);
   
      
    }

    public promise_setOsdLock(osdLock: boolean, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    public getOSDLock(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
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
      
      var conf = new Configuration();
      conf.getOSDLock(successCb, failureCb);

    }
    public promise_getOSDLock(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }


    //-------------------------------------
    //     get/set VirtualKeybordLanguages
    //-------------------------------------

    public setVirtualKeybordLanguages(virtKeyboardLanguages: Array<string>, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      var options = {
        languageCodeList : ["fr", "es", "ko"]
       };   
   
   
       function successCb() {
         callback("setVirtualKeyboardLanguage success");
       }
   
       function failureCb(cbObject) {
           var errorCode = cbObject.errorCode;
           var errorText = cbObject.errorText;
           
           console.log ("Error Code [" + errorCode + "]: " + errorText);
           callback(cbObject);
       }
       
      new Configuration().setVirtualKeyboardLanguage(successCb, failureCb, options);
   
    }

    public promise_setVirtualKeyboardLanguages(virtKeyboardLanguages: Array<string>, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    public getVirtualKeyboardLanguages(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
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
      
      var conf = new Configuration();
      conf.getVirtualKeyboardLanguage(successCb, failureCb);

    }

    public promise_getVirtualKeyboardLanguages(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }



    //--------------------------------
    //     get/set USB Lock
    //--------------------------------

    public setUSBLock(lockUsb: boolean, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      var options = {
        enabled : true
       };
   
       function successCb() {
         callback("setUSBLock success");
       }
   
       function failureCb(cbObject) {
           var errorCode = cbObject.errorCode;
           var errorText = cbObject.errorText;
           
           console.log ("Error Code [" + errorCode + "]: " + errorText);
           callback(cbObject);
       }
       
      new Configuration().setUSBLock(successCb, failureCb, options);
    }

    public promise_getUSB(lockUsb: boolean, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    public getUSBLock(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
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
      
      var conf = new Configuration();
      conf.getUSBLock(successCb, failureCb);
    }

    public promise_setUSBLock(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }


    //--------------------------------
    //     get/set General Property
    //--------------------------------

    public setGeneralProperty(property: amGeneralProperty.am_general.A_Property, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      var options = '{"alias":"display_1"}';
	
      function successCb() {
        callback("setPictureProperty success");
      }
  
      function failureCb(cbObject) {
          var errorCode = cbObject.errorCode;
          var errorText = cbObject.errorText;
          
          console.log ("Error Code [" + errorCode + "]: " + errorText);
          callback(cbObject);
      }
  
      new Configuration().setProperty(successCb, failureCb, options);
    }

    public promise_setGeneralProperty(property: amGeneralProperty.am_general.A_Property, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    public getGeneralProperty(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
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
    
    var options = '{"keys":["alias"]}';
	
  	new Configuration().getProperty(successCb, failureCb, options);
  }

    public promise_getGeneralProperty(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }


  } //--- end class

}
