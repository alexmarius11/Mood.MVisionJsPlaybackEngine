import amGeneral = require("../../../../../app/ts/abstract/am_general/i_interface/I_Interface");

import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import amGeneralScreenProperties = require("../../../../../app/ts/abstract/am_general/a_screenproperties/A_ScreenProperties");
import amGeneralProperty = require("../../../../../app/ts/abstract/am_general/a_property/A_Property");

export module am_renderingservices
{
  export interface I_SDKRenderer_GeneralConfiguration extends amGeneral.am_general.I_Interface
  {
    _name: string;    

    //clearChache(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;

    //setScreenProperties(newScreenProperties: amGeneralScreenProperties.am_general.A_ScreenProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    //getScreenProperties(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;

    //setScreenMode(newScreenProperties: amGeneralScreenProperties.am_general.A_ScreenProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    //getScreenMode(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;

    //setOSDLanguages(osdLanguages: Array<string>, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    //getOSDLanguages(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;

    //setOSDLock(osdLock: boolean, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    //getOSDLock(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;


    //setVirtualKeybordLanguages(virtKeyboardLanguages: Array<string>, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    //getVirtualKeyboardLanguages(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;


    //setUSBLock(lockUsb: boolean, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    //getUSBLock(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;

    //setGeneralProperty(property: amGeneralProperty.am_general.A_Property, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    //getGeneralProperty(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;

  }
} 