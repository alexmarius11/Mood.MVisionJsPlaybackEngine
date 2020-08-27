import amGeneralPowerSaveModeInfo = require("../../../../../app/ts/abstract/am_general/a_powersavemodeinfo/A_PowerSafeModeInfo");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_general
{
  export class R_PowerSaveModeInfo  extends rmGeneralEntity.rm_general.R_Entity
                                    implements amGeneralPowerSaveModeInfo.am_general.A_PowerSafeModeInfo
  {
    //--- properties
    //---------------------
    // Power Save Mode Info mode parameters.
    //  powerSaveModeInfo:
	  //     ses: Enable/disable Smart Energy Saving mode
	  //     dpmMode: Set Display Power Managerment mode. Refer to Signage.DpmMode for more information.
	  //     automaticStandby: Set Automatic Standby mode. Refer to Signage.AutomaticStandbyMode for more information.
    //     do15MinOff: Enable/disable 15 Minute Off feature.	
    //-----------------------
    _enabledSmartEnergySaving: boolean;
    _displayPowerMngMode: string;
    _automaticStandbyMode: string;
    _enabled15MinOff: boolean;
      

    //----------- constructor 
    constructor()  
    {  
      super();
      this._enabledSmartEnergySaving = false;  //ses: true,
      this._displayPowerMngMode      = "off";  //dpmMode: Signage.DpmMode.OFF,
      this._automaticStandbyMode     = "off";  //automaticStandby: Signage.AutomaticStandbyMode.OFF
      this._enabled15MinOff          = false;  //do15MinOff: true      
    }

    //-----------------------------
    public isEnableSmartEnergySaving() : boolean
    {
      return this._enabledSmartEnergySaving;
    }

    //-----------------------------
    public enableSmartEnergySaving(enabledSmartEnergySaving : boolean) : void
    {
      this._enabledSmartEnergySaving = enabledSmartEnergySaving;
    }


    //-----------------------------
    public getDisplayPowerManagementMode() : string
    {
      return this._displayPowerMngMode;
    }

    //-----------------------------
    public setDisplayPowerManagementMode(displayPowerManagementMode : string) : void
    {
      this._displayPowerMngMode = displayPowerManagementMode;
    }


    //-----------------------------
    public getAutomaticStandbyMode() : string
    {
      return this._automaticStandbyMode;
    }

    //-----------------------------
    public setAutomaticStandbyMode(automaticStandbyMode : string) : void
    {
      this._automaticStandbyMode = automaticStandbyMode;    
    }


    //-----------------------------
    public isEnabled15MinOff() : boolean
    {
      return this._enabled15MinOff;
    }

    //-----------------------------
    public setEnabled15MinOff(enabled15MinOff : boolean) : void
    {
      this._enabled15MinOff = enabled15MinOff;    
    }
  }
} 