import amGeneral = require("../../../../../app/ts/abstract/am_general/i_interface/I_Interface");

import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralPowerSaveModeInfo = require("../../../../../app/ts/abstract/am_general/a_powersavemodeinfo/A_PowerSafeModeInfo");
import amGeneralPowerProperties   = require("../../../../../app/ts/abstract/am_general/a_powerproperties/A_PowerProperties");
import amGeneralDeviceTimerInfo    = require("../../../../../app/ts/abstract/am_general/a_devicetimerinfo/A_DeviceTimerInfo");

export module am_transversalservices
{
  export interface I_SDK_notifyPowerSetup extends amGeneral.am_general.I_Interface
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
    notify_setPowerSaveMode(powerSaveMode: amGeneralPowerSaveModeInfo.am_general.A_PowerSafeModeInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_setPowerSaveMode(failureModeInfo: amGeneralPowerSaveModeInfo.am_general.A_PowerSafeModeInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    notify_getPowerSaveMode(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_getPowerSaveMode(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;


    //-----------------------------
    // Execute Power command
    //-----------------------------
    notify_executePowerCommand(powerProperties: amGeneralPowerProperties.am_general.A_PowerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_executePowerCommand(powerProperties: amGeneralPowerProperties.am_general.A_PowerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;


    //-----------------------------
    // get/set Power Mng Mode
    //-----------------------------

    notify_setPowerMngMode(powerProperties: amGeneralPowerProperties.am_general.A_PowerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_setPowerMngMode(powerProperties: amGeneralPowerProperties.am_general.A_PowerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    notify_getPowerMngMode(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_getPowerMngMode(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;


    //-----------------------------
    // get/set Power OnDelay
    //-----------------------------

    notify_setPowerOnDelayTime(powerProperties: amGeneralPowerProperties.am_general.A_PowerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_setPowerOnDelayTime(powerProperties: amGeneralPowerProperties.am_general.A_PowerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    notify_getPowerOnDelayTime(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_getPowerOnDelayTime(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    //-----------------------------
    // get/set Display Power Mng Mode and WakeUp Signal
    //-----------------------------

    notify_setDisplayPowerMngMode(powerProperties: amGeneralPowerProperties.am_general.A_PowerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_setDisplayPowerMngMode(powerProperties: amGeneralPowerProperties.am_general.A_PowerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    notify_getDisplayPowerMngMode(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_getDisplayPowerMngMode(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    notify_setDisplayPowerMngWakeupSignal(powerProperties: amGeneralPowerProperties.am_general.A_PowerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_setDisplayPowerMngWakeupSignal(powerProperties: amGeneralPowerProperties.am_general.A_PowerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    notify_getDisplayPowerMngWakeupSignal(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_getDisplayPowerMngWakeupSignal(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    //-----------------------------
    // get/set Wake On Lan 
    //-----------------------------

    notify_setWakeOnLan(powerProperties: amGeneralPowerProperties.am_general.A_PowerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_setWakeOnLan(powerProperties: amGeneralPowerProperties.am_general.A_PowerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    notify_getWakeOnLan(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_getWakeOnLan(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    //-----------------------------
    // Device Timer management 
    //-----------------------------

    notify_addOffDeviceTimer(deviceTimerInfo: amGeneralDeviceTimerInfo.am_general.A_DeviceTimerInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_addOffDeviceTimer(deviceTimerInfo: amGeneralDeviceTimerInfo.am_general.A_DeviceTimerInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    notify_addOnDeviceTimer(deviceTimerInfo: amGeneralDeviceTimerInfo.am_general.A_DeviceTimerInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_addOnDeviceTimer(deviceTimerInfo: amGeneralDeviceTimerInfo.am_general.A_DeviceTimerInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    notify_deleteOffDeviceTimer(deviceTimerInfo: amGeneralDeviceTimerInfo.am_general.A_DeviceTimerInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_deleteOffDeviceTimer(deviceTimerInfo: amGeneralDeviceTimerInfo.am_general.A_DeviceTimerInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    notify_deleteOnDeviceTimer(deviceTimerInfo: amGeneralDeviceTimerInfo.am_general.A_DeviceTimerInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_deleteOnDeviceTimer(deviceTimerInfo: amGeneralDeviceTimerInfo.am_general.A_DeviceTimerInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    notify_getOffDeviceTimerList(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_getOffDeviceTimerList(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    notify_getOnDeviceTimerList(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_getOnDeviceTimerList(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    notify_enableAllOffDeviceTimers(enable: boolean, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_enableAllOffDeviceTimers(enable: boolean, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    notify_enableAllOnDeviceTimers(enable: boolean, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_enableAllOnDeviceTimers(enable: boolean, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;
  }
} 