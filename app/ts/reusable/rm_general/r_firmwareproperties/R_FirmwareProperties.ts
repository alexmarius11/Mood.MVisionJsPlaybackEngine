import amGeneralFirmwareProperties     = require("../../../../../app/ts/abstract/am_general/a_firmwareproperties/A_FirmwareProperties");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_general
{
  export class R_FirmwareProperties extends rmGeneralEntity.rm_general.R_Entity
                                    implements amGeneralFirmwareProperties.am_general.A_FirmwareProperties
  {

    _firmwareUrl : string;

    //----------- constructor 
    constructor()  
    {  
      super();
    }
    
    //----------------------
    public getFirmwareUrl() : string 
    {
      return this._firmwareUrl;
    }

    //-----------------------
    public setFirmwareUrl(firmwareUrl: string) : void 
    {
      this._firmwareUrl = firmwareUrl;
    }


  }
} 