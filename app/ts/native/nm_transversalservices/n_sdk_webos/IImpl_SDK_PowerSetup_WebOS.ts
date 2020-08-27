import amGeneral = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/I_SDK_PowerSetup");

import nmTransversalServices = require("../../../../../app/ts/native/nm_transversalservices/n_sdk_webos/N_SDK_WebOS");
import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import amGeneralPowerSaveModeInfo = require("../../../../../app/ts/abstract/am_general/a_powersavemodeinfo/A_PowerSafeModeInfo");
import amGeneralPowerProperties   = require("../../../../../app/ts/abstract/am_general/a_powerproperties/A_PowerProperties");
import amGeneralDeviceTimerInfo    = require("../../../../../app/ts/abstract/am_general/a_devicetimerinfo/A_DeviceTimerInfo");

import "./cordova/cordova.webos";
import "./cordova/storage";
import "./cordova/power";

export module nm_transversalservices
{
  export class IImpl_SDK_PowerSetup_WebOS implements amGeneral.am_transversalservices.I_SDK_PowerSetup
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

    //---------------------
    // Power Save Mode Info mode parameters.
    //  powerSaveModeInfo:
	  //     ses: Enable/disable Smart Energy Saving mode
	  //     dpmMode: Set Display Power Managerment mode. Refer to Signage.DpmMode for more information.
	  //     automaticStandby: Set Automatic Standby mode. Refer to Signage.AutomaticStandbyMode for more information.
    //     do15MinOff: Enable/disable 15 Minute Off feature.	
    //-----------------------
    
    //----------------------------
    public setPowerSaveMode(powerSaveMode: amGeneralPowerSaveModeInfo.am_general.A_PowerSafeModeInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }

    //----------------------------
    public promise_setPowerSaveMode(failureModeInfo: amGeneralPowerSaveModeInfo.am_general.A_PowerSafeModeInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //----------------------------
    public getPowerSaveMode(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }

    //----------------------------
    public promise_getPowerSaveMode(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //-----------------------------
    // Execute Power command
    //-----------------------------
    public executePowerCommand(powerProperties: amGeneralPowerProperties.am_general.A_PowerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public promise_executePowerCommand(powerProperties: amGeneralPowerProperties.am_general.A_PowerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }


    //-----------------------------
    // get/set Power Mng Mode
    //-----------------------------

    public setPowerMngMode(powerProperties: amGeneralPowerProperties.am_general.A_PowerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public promise_setPowerMngMode(powerProperties: amGeneralPowerProperties.am_general.A_PowerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }


    public getPowerMngMode(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public promise_getPowerMngMode(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }


    //-----------------------------
    // get/set Power OnDelay
    //-----------------------------

    public setPowerOnDelayTime(powerProperties: amGeneralPowerProperties.am_general.A_PowerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public promise_setPowerOnDelayTime(powerProperties: amGeneralPowerProperties.am_general.A_PowerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }


    public getPowerOnDelayTime(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public promise_getPowerOnDelayTime(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }


    //-----------------------------
    // get/set Display Power Mng Mode and WakeUp Signal
    //-----------------------------

    public setDisplayPowerMngMode(powerProperties: amGeneralPowerProperties.am_general.A_PowerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public promise_setDisplayPowerMngMode(powerProperties: amGeneralPowerProperties.am_general.A_PowerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }


    public getDisplayPowerMngMode(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public promise_getDisplayPowerMngMode(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }


    public setDisplayPowerMngWakeupSignal(powerProperties: amGeneralPowerProperties.am_general.A_PowerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public promise_setDisplayPowerMngWakeupSignal(powerProperties: amGeneralPowerProperties.am_general.A_PowerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }


    public getDisplayPowerMngWakeupSignal(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public promise_getDisplayPowerMngWakeupSignal(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }


    //-----------------------------
    // get/set Wake On Lan 
    //-----------------------------

    public setWakeOnLan(powerProperties: amGeneralPowerProperties.am_general.A_PowerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public promise_setWakeOnLan(powerProperties: amGeneralPowerProperties.am_general.A_PowerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }


    public getWakeOnLan(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public promise_getWakeOnLan(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }


    //-----------------------------
    // Device Timer management 
    //-----------------------------

    public addOffDeviceTimer(deviceTimerInfo: amGeneralDeviceTimerInfo.am_general.A_DeviceTimerInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public promise_addOffDeviceTimer(deviceTimerInfo: amGeneralDeviceTimerInfo.am_general.A_DeviceTimerInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }


    public addOnDeviceTimer(deviceTimerInfo: amGeneralDeviceTimerInfo.am_general.A_DeviceTimerInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public promise_addOnDeviceTimer(deviceTimerInfo: amGeneralDeviceTimerInfo.am_general.A_DeviceTimerInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }


    public deleteOffDeviceTimer(deviceTimerInfo: amGeneralDeviceTimerInfo.am_general.A_DeviceTimerInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public promise_deleteOffDeviceTimer(deviceTimerInfo: amGeneralDeviceTimerInfo.am_general.A_DeviceTimerInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }


    public deleteOnDeviceTimer(deviceTimerInfo: amGeneralDeviceTimerInfo.am_general.A_DeviceTimerInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public promise_deleteOnDeviceTimer(deviceTimerInfo: amGeneralDeviceTimerInfo.am_general.A_DeviceTimerInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }


    public getOffDeviceTimerList(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public promise_getOffDeviceTimerList(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }


    public getOnDeviceTimerList(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public promise_getOnDeviceTimerList(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }


    public enableAllOffDeviceTimers(enable: boolean, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public promise_enableAllOffDeviceTimers(enable: boolean, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    public enableAllOnDeviceTimers(enable: boolean, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public promise_enableAllOnDeviceTimers(enable: boolean, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

  } //--- end class

}
