import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

export module am_general
{
  export interface A_PlatformInfo extends amGeneral.am_general.A_Entity
  {
      getHardwareVersion() : string;
    
      getModelName() : string;
    
      getOSDResolution() : string;
    
      getPlatformName() : string;
    
      getSDKVersion() : string;
    
      getSerialNumber() : string;
    
      getFirmwareVersion() : string;
    
  }

} 