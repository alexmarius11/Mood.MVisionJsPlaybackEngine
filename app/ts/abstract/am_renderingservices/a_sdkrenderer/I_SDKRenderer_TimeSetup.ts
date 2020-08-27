import amGeneral = require("../../../../../app/ts/abstract/am_general/i_interface/I_Interface");

import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralPowerSaveModeInfo = require("../../../../../app/ts/abstract/am_general/a_powersavemodeinfo/A_PowerSafeModeInfo");
import amGeneralPowerProperties   = require("../../../../../app/ts/abstract/am_general/a_powerproperties/A_PowerProperties");
import amGeneralDeviceTimerInfo    = require("../../../../../app/ts/abstract/am_general/a_devicetimerinfo/A_DeviceTimerInfo");

export module am_renderingservices
{
  export interface I_SDKRenderer_TimeSetup extends amGeneral.am_general.I_Interface
  {
    _name: string;    

    //setCrtDateTime(crtDateTime: amGeneralDateTime.am_general.A_DateTime, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;

    //getCrtDateTime(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;

    //setTimeZone(crtTimeZone: amGeneralTimeZone.am_general.A_TimeZone, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;

    //getTimeZone(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;

    //getTimeZoneList(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
  }
} 