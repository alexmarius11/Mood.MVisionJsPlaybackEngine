import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

export module am_general
{
  export interface A_PowerSafeModeInfo extends amGeneral.am_general.A_Entity
  {
    isEnableSmartEnergySaving() : boolean;
    enableSmartEnergySaving(enabledSmartEnergySaving : boolean) : void;

    getDisplayPowerManagementMode() : string;
    setDisplayPowerManagementMode(displayPowerManagementMode : string) : void;

    getAutomaticStandbyMode() : string;
    setAutomaticStandbyMode(automaticStandbyMode : string) : void;

    isEnabled15MinOff() : boolean;
    setEnabled15MinOff(enabled15MinOff : boolean) : void;

  }

} 