import amGeneral = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_consumer/I_SDK_notifyGeneralConfiguration");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import rmTransversalServicesSDKConsumer = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_consumer/R_SDK_Consumer");

import amGeneralScreenProperties = require("../../../../../app/ts/abstract/am_general/a_screenproperties/A_ScreenProperties");
import amGeneralProperty = require("../../../../../app/ts/abstract/am_general/a_property/A_Property");

export module rm_transversalservices
{
  export class IImpl_SDK_notifyGeneralConfiguration_SDKConsumer implements amGeneral.am_transversalservices.I_SDK_notifyGeneralConfiguration
  {
    //----------- properties
    _name: string;  

    //----------- owner
    _owner: rmTransversalServicesSDKConsumer.rm_transversalservices.R_SDK_Consumer;

    //----------- constructor 
    constructor(owner: rmTransversalServicesSDKConsumer.rm_transversalservices.R_SDK_Consumer)  
    {
      this._owner = owner;  
    }

    //-------------------------------------
    //     clear Cache 
    //-------------------------------------

    public notify_clearChache(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public notify_promise_clearCache(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
    }


    //-------------------------------------
    //     get/set Screen Properties
    //-------------------------------------

    public notify_setScreenProperties(newScreenProperties: amGeneralScreenProperties.am_general.A_ScreenProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public notify_promise_setScreenProperties(newScreenProperties: amGeneralScreenProperties.am_general.A_ScreenProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    public notify_getScreenProperties(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public notify_promise_getScreenProperties(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    //-------------------------------------
    //     get/set Screen Mode
    //-------------------------------------

    public notify_setScreenMode(newScreenProperties: amGeneralScreenProperties.am_general.A_ScreenProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public notify_promise_setScreenMode(newScreenProperties: amGeneralScreenProperties.am_general.A_ScreenProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    public notify_getScreenMode(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public notify_promise_getScreenMode(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }


    //-------------------------------------
    //     get/set OSD Languages
    //-------------------------------------

    public notify_setOSDLanguages(osdLanguages: Array<string>, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public notify_promise_setOsdLanguages(crtDateTime: amGeneralScreenProperties.am_general.A_ScreenProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    public notify_getOSDLanguages(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public notify_promise_getOsdLanguages(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    //-------------------------------------
    //     get/set OSD Lock
    //-------------------------------------

    public notify_setOSDLock(osdLock: boolean, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public notify_promise_setOsdLock(osdLock: boolean, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    public notify_getOSDLock(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }
    public notify_promise_getOSDLock(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }


    //-------------------------------------
    //     get/set VirtualKeybordLanguages
    //-------------------------------------

    public notify_setVirtualKeybordLanguages(virtKeyboardLanguages: Array<string>, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public notify_promise_setVirtualKeyboardLanguages(virtKeyboardLanguages: Array<string>, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    public notify_getVirtualKeyboardLanguages(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public notify_promise_getVirtualKeyboardLanguages(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }



    //--------------------------------
    //     get/set USB Lock
    //--------------------------------

    public notify_setUSBLock(lockUsb: boolean, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }

    public notify_promise_getUSB(lockUsb: boolean, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    public notify_getUSBLock(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }

    public notify_promise_setUSBLock(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }


    //--------------------------------
    //     get/set General Property
    //--------------------------------

    public notify_setGeneralProperty(property: amGeneralProperty.am_general.A_Property, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }

    public notify_promise_setGeneralProperty(property: amGeneralProperty.am_general.A_Property, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    public notify_getGeneralProperty(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }

    public notify_promise_getGeneralProperty(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

  }
} 