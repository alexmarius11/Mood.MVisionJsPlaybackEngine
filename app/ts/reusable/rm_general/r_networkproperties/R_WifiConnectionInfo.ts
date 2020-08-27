import amGeneralWifiConnectionInfo    = require("../../../../../app/ts/abstract/am_general/a_networkproperties/A_WifiConnectionInfo");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_general
{
  export class R_WifiConnectionInfo extends rmGeneralEntity.rm_general.R_Entity
                                    implements amGeneralWifiConnectionInfo.am_general.A_WifiConnectionInfo
  {

    _ssid            : string;
    _wifiPassword    : string;
    _wifiSignalLevel : string;

    //----------- constructor 
    constructor()  
    {  
      super();
    }
    
    //---------------------------------
    public getSSID() : string
    {
      return this._ssid;
    }

    //------------------
    public setSSID(ssid: string) : void 
    {
      this._ssid = ssid;
    }

    //-----------------------------
    public getWifiPassword() : string
    {
      return this._wifiPassword;      
    }

    //-----------------------------
    public setWifiPassword(wifiPassword: string) : void 
    {
      this._wifiPassword = wifiPassword;
    }

    //------------------------------
    public getWifiSignalLevel() : string
    {
      return this._wifiSignalLevel;
    }

    //-----------------------------------
    public setWifiSignalLevel(wifiSignalLevel: string) : void 
    {
      this._wifiSignalLevel = wifiSignalLevel;
    }


  }
} 