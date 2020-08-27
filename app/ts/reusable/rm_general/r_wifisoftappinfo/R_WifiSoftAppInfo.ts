import amGeneralWifiSoftAppInfo     = require("../../../../../app/ts/abstract/am_general/a_wifisoftappinfo/A_WifiSoftAppInfo");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_general
{
  export class R_WifiSoftAppInfo  extends rmGeneralEntity.rm_general.R_Entity
                             implements amGeneralWifiSoftAppInfo.am_general.A_WifiSoftAppInfo
  {
    //--- properties
    _enabled     : boolean; 
    _ssid        : string ;    
    _securityKey : string;     

    //----------- constructor 
    constructor()  
    {  
      super();
      this._enabled     = false; //: true,
      this._ssid        = "";    //: "1A2B3C4D5E1A2B3C4D5E1A2B3C4D5EFF",
      this._securityKey ="";     //:"123456"
    }

    //---------------------------
    public isEnabled()  : boolean
    {
      return this._enabled;
    } 

    //---------------------------------
    public setEnabled(enabled: boolean) : void 
    {
      this._enabled = enabled;
    }

    //---------------------------
    public getSSID()  : string
    {
      return this._ssid;
    } 

    //---------------------------------
    public setSSID(ssid: string) : void 
    {
      this._ssid = ssid;
    }

    //---------------------------
    public getSecurityKey()  : string
    {
      return this._securityKey;
    } 

    //---------------------------------
    public setSecurityKey(securityKey: string) : void
    {
      this._securityKey = securityKey;
    }

  }
} 