import amGeneral = require("../../../../../app/ts/abstract/am_general/i_interface/I_Interface");

import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralPowerSaveModeInfo = require("../../../../../app/ts/abstract/am_general/a_powersavemodeinfo/A_PowerSafeModeInfo");
import amGeneralPowerProperties   = require("../../../../../app/ts/abstract/am_general/a_powerproperties/A_PowerProperties");
import amGeneralDeviceTimerInfo    = require("../../../../../app/ts/abstract/am_general/a_devicetimerinfo/A_DeviceTimerInfo");

export module am_renderingservices
{
  export interface I_SDKRenderer_PowerSetup extends amGeneral.am_general.I_Interface
  {
    _name: string;    

    //---------------------
    // Power Save Mode Info mode parameters.
    //  powerSaveModeInfo:
	  //     ses: Enable/disable Smart Energy Saving mode
	  //     dpmMode: Set Display Power Managerment mode. Refer to Signage.DpmMode for more information.
	  //     automaticStandby: Set Automatic Standby mode. Refer to Signage.AutomaticStandbyMode for more information.
    //     do15MinOff: Enable/disable 15 Minute Off feature.	
    //-----------------------
    //setPowerSaveMode(powerSaveMode: amGeneralPowerSaveModeInfo.am_general.A_PowerSafeModeInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;

    //getPowerSaveMode(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;

    //-----------------------------
    // Execute Power command
    //-----------------------------
    //executePowerCommand(powerProperties: amGeneralPowerProperties.am_general.A_PowerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;


    //-----------------------------
    // get/set Power Mng Mode
    //-----------------------------

    //setPowerMngMode(powerProperties: amGeneralPowerProperties.am_general.A_PowerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;

    //getPowerMngMode(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;


    //-----------------------------
    // get/set Power OnDelay
    //-----------------------------

    //setPowerOnDelayTime(powerProperties: amGeneralPowerProperties.am_general.A_PowerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;

    //getPowerOnDelayTime(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;

    //-----------------------------
    // get/set Display Power Mng Mode and WakeUp Signal
    //-----------------------------

    //setDisplayPowerMngMode(powerProperties: amGeneralPowerProperties.am_general.A_PowerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;

    //getDisplayPowerMngMode(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;

    //setDisplayPowerMngWakeupSignal(powerProperties: amGeneralPowerProperties.am_general.A_PowerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;

    //getDisplayPowerMngWakeupSignal(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;

    //-----------------------------
    // get/set Wake On Lan 
    //-----------------------------

    //setWakeOnLan(powerProperties: amGeneralPowerProperties.am_general.A_PowerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;

    //getWakeOnLan(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;

    //-----------------------------
    // Device Timer management 
    //-----------------------------

    //addOffDeviceTimer(deviceTimerInfo: amGeneralDeviceTimerInfo.am_general.A_DeviceTimerInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;

    //addOnDeviceTimer(deviceTimerInfo: amGeneralDeviceTimerInfo.am_general.A_DeviceTimerInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;

    //deleteOffDeviceTimer(deviceTimerInfo: amGeneralDeviceTimerInfo.am_general.A_DeviceTimerInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;

    //deleteOnDeviceTimer(deviceTimerInfo: amGeneralDeviceTimerInfo.am_general.A_DeviceTimerInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;

    //getOffDeviceTimerList(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;

    //getOnDeviceTimerList(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;

    //enableAllOffDeviceTimers(enable: boolean, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;

    //enableAllOnDeviceTimers(enable: boolean, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
  }
} 