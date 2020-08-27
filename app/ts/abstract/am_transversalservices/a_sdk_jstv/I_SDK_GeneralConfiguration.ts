import amGeneral = require("../../../../../app/ts/abstract/am_general/i_interface/I_Interface");

import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import amGeneralScreenProperties = require("../../../../../app/ts/abstract/am_general/a_screenproperties/A_ScreenProperties");
import amGeneralProperty = require("../../../../../app/ts/abstract/am_general/a_property/A_Property");

export module am_transversalservices
{
  export interface I_SDK_GeneralConfiguration extends amGeneral.am_general.I_Interface
  {
    _name: string;    

    clearChache(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_clearCache(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;


    setScreenProperties(newScreenProperties: amGeneralScreenProperties.am_general.A_ScreenProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_setScreenProperties(newScreenProperties: amGeneralScreenProperties.am_general.A_ScreenProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    getScreenProperties(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_getScreenProperties(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    setScreenMode(newScreenProperties: amGeneralScreenProperties.am_general.A_ScreenProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_setScreenMode(newScreenProperties: amGeneralScreenProperties.am_general.A_ScreenProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    getScreenMode(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_getScreenMode(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;


    setOSDLanguages(osdLanguages: Array<string>, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_setOsdLanguages(crtDateTime: amGeneralScreenProperties.am_general.A_ScreenProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    getOSDLanguages(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_getOsdLanguages(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    setOSDLock(osdLock: boolean, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_setOsdLock(osdLock: boolean, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    getOSDLock(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_getOSDLock(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;


    setVirtualKeybordLanguages(virtKeyboardLanguages: Array<string>, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_setVirtualKeyboardLanguages(virtKeyboardLanguages: Array<string>, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    getVirtualKeyboardLanguages(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_getVirtualKeyboardLanguages(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;



    setUSBLock(lockUsb: boolean, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_getUSB(lockUsb: boolean, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    getUSBLock(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_setUSBLock(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;


    setGeneralProperty(property: amGeneralProperty.am_general.A_Property, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_setGeneralProperty(property: amGeneralProperty.am_general.A_Property, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    getGeneralProperty(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_getGeneralProperty(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

  }
} 