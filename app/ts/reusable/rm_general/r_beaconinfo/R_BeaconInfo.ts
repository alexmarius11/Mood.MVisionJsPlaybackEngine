import amGeneralBeaconInfo     = require("../../../../../app/ts/abstract/am_general/a_beaconinfo/A_BeaconInfo");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_general
{
  export class R_BeaconInfo  extends rmGeneralEntity.rm_general.R_Entity
                             implements amGeneralBeaconInfo.am_general.A_BeaconInfo
  {
    //--- properties
    _enabled : boolean;
		_uuid    : string;
		_major   : number;
		_minor   : number;

    //----------- constructor 
    constructor()  
    {  
      super();
      this._enabled = false ; // true,
      this._uuid    = ""    ; // "f7826da64fa24e988024bc5b71e0893e",
      this._major   = 0     ; // 5000,
      this._minor   = 0     ; // 3000
    }

    //------------------------------
    public isEnabled() : boolean
    {
      return this._enabled;
    }
    //------------------------------
    public setEnabled(enabled : boolean) : void 
    {
      this._enabled = enabled;
    }

    //------------------------------
    public getUUID() : string
    {
      return this._uuid;
    }

    //------------------------------
    public setUUID(uuid : string) : void
    {
      this._uuid = uuid;
    }

    //------------------------------
    public getMajor() : number
    {
      return this._major;
    }
    //------------------------------
    public setMajor(major : number) : void 
    {
      this._major = major;
    }

    //------------------------------
    public getMinor() : number
    {
      return this._minor;
    }
    //------------------------------
    public setMinor(minor : number) : void 
    {
      this._minor = minor;
    }
  }
} 