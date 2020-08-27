import amGeneral = require("../../../../../app/ts/abstract/am_general/i_interface/I_Interface");

import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralPowerSaveModeInfo = require("../../../../../app/ts/abstract/am_general/a_powersavemodeinfo/A_PowerSafeModeInfo");
import amGeneralPowerProperties   = require("../../../../../app/ts/abstract/am_general/a_powerproperties/A_PowerProperties");
import amGeneralDeviceTimerInfo    = require("../../../../../app/ts/abstract/am_general/a_devicetimerinfo/A_DeviceTimerInfo");

export module am_transversalservices
{
  export interface I_SDK_PowerSetup extends amGeneral.am_general.I_Interface
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
    setPowerSaveMode(powerSaveMode: amGeneralPowerSaveModeInfo.am_general.A_PowerSafeModeInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_setPowerSaveMode(failureModeInfo: amGeneralPowerSaveModeInfo.am_general.A_PowerSafeModeInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    getPowerSaveMode(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_getPowerSaveMode(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;


    //-----------------------------
    // Execute Power command
    //-----------------------------
    executePowerCommand(powerProperties: amGeneralPowerProperties.am_general.A_PowerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_executePowerCommand(powerProperties: amGeneralPowerProperties.am_general.A_PowerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;


    //-----------------------------
    // get/set Power Mng Mode
    //-----------------------------

    setPowerMngMode(powerProperties: amGeneralPowerProperties.am_general.A_PowerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_setPowerMngMode(powerProperties: amGeneralPowerProperties.am_general.A_PowerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    getPowerMngMode(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_getPowerMngMode(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;


    //-----------------------------
    // get/set Power OnDelay
    //-----------------------------

    setPowerOnDelayTime(powerProperties: amGeneralPowerProperties.am_general.A_PowerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_setPowerOnDelayTime(powerProperties: amGeneralPowerProperties.am_general.A_PowerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    getPowerOnDelayTime(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_getPowerOnDelayTime(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    //-----------------------------
    // get/set Display Power Mng Mode and WakeUp Signal
    //-----------------------------

    setDisplayPowerMngMode(powerProperties: amGeneralPowerProperties.am_general.A_PowerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_setDisplayPowerMngMode(powerProperties: amGeneralPowerProperties.am_general.A_PowerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    getDisplayPowerMngMode(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_getDisplayPowerMngMode(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    setDisplayPowerMngWakeupSignal(powerProperties: amGeneralPowerProperties.am_general.A_PowerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_setDisplayPowerMngWakeupSignal(powerProperties: amGeneralPowerProperties.am_general.A_PowerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    getDisplayPowerMngWakeupSignal(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_getDisplayPowerMngWakeupSignal(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    //-----------------------------
    // get/set Wake On Lan 
    //-----------------------------

    setWakeOnLan(powerProperties: amGeneralPowerProperties.am_general.A_PowerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_setWakeOnLan(powerProperties: amGeneralPowerProperties.am_general.A_PowerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    getWakeOnLan(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_getWakeOnLan(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    //-----------------------------
    // Device Timer management 
    //-----------------------------

    addOffDeviceTimer(deviceTimerInfo: amGeneralDeviceTimerInfo.am_general.A_DeviceTimerInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_addOffDeviceTimer(deviceTimerInfo: amGeneralDeviceTimerInfo.am_general.A_DeviceTimerInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    addOnDeviceTimer(deviceTimerInfo: amGeneralDeviceTimerInfo.am_general.A_DeviceTimerInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_addOnDeviceTimer(deviceTimerInfo: amGeneralDeviceTimerInfo.am_general.A_DeviceTimerInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    deleteOffDeviceTimer(deviceTimerInfo: amGeneralDeviceTimerInfo.am_general.A_DeviceTimerInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_deleteOffDeviceTimer(deviceTimerInfo: amGeneralDeviceTimerInfo.am_general.A_DeviceTimerInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    deleteOnDeviceTimer(deviceTimerInfo: amGeneralDeviceTimerInfo.am_general.A_DeviceTimerInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_deleteOnDeviceTimer(deviceTimerInfo: amGeneralDeviceTimerInfo.am_general.A_DeviceTimerInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    getOffDeviceTimerList(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_getOffDeviceTimerList(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    getOnDeviceTimerList(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_getOnDeviceTimerList(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    enableAllOffDeviceTimers(enable: boolean, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_enableAllOffDeviceTimers(enable: boolean, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    enableAllOnDeviceTimers(enable: boolean, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_enableAllOnDeviceTimers(enable: boolean, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;
  }
} 