import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

import amPlaybackHardwareSettings = require("../../../../../app/ts/abstract/am_playback/a_hardwaresettings/A_HardwareSettings");
import amGeneralError     = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");


export module rm_playback
{
  export class R_HardwareSettings    extends rmGeneralEntity.rm_general.R_Entity
                                     implements amPlaybackHardwareSettings.am_playback.A_HardwareSettings
  {

    //------------------
    //--- properties
    _hardwareType:  string;
    _earlyAdapter: string;
    _serialNumber: string;
    _accountId : string;
    _accountName : string;
    _accountPassword : string;
  
    
    //----------- constructor 
    constructor()  
    {  
      super();
      this._hardwareType = "";
      this._earlyAdapter = "";
      this._serialNumber = "";
      this._accountId   = "";
      this._accountName = "";
      this._accountPassword = "";
    }


    //-----------------
    // hardware type
    //-----------------

    //-------------------------
    public getHardwareType() : string  //like "MVP425_WES7"
    {
      return this._hardwareType;
    }

    //-------------------------
    public setHardwareType(hardwareType: string) 
    {
      this._hardwareType = hardwareType;
    }


    //-----------------
    // early adapters
    //-----------------

    //-------------------------
    public isEarlyAdapter() : boolean  // true/false
    {
      if (this._earlyAdapter == "1" )
        return true;
      return false;  
    }


    //-------------------------
    public getEarlyAdapter() : string  // like "0""/""1"
    {
      return this._earlyAdapter;
    }

    //-------------
    public setEarlyAdapter(earlyAdapter: string ) : void
    {
      this._earlyAdapter = earlyAdapter;
    }

    //-----------------
    // serial number
    //-----------------

    //----------
    public getSerialNumber() : string //like "PC10001"
    {
      return this._serialNumber;
    }

    //---------
    public setSerialNumber(serialNumber: string) : void
    {
      this._serialNumber = serialNumber;
    }
    
    //-----------------
    // account id 
    //-----------------

    //-------------------
    public getAccountId() : string //like "1"
    {
      return this._accountId;
    }

    //-------------------
    public setAccountId(accountId: string) : void
    {
      this._accountId = accountId ;
    }


    //-----------------
    // account name
    //-----------------

    public getAccountName() : string //like "stream01"
    {
      return this._accountName;
    }

    public setAccountName(accountName: string) : void
    {
      this._accountName = accountName;
    }


    //-----------------
    // account password
    //-----------------

    //----------
    public getAccountPassword() : string //like "retr9xEt"
    {
      return this._accountPassword;
    }

    //---------
    public setAccountPassword(accountPassword: string) : void
    {
      this._accountPassword = accountPassword;
    }

    
  }
} 

/*
<?xml version="1.0" encoding="UTF-8"?>

<!DOCTYPE HARDWARE_SETTINGS>

-<HARDWARE_SETTINGS>


-<ENVIRONMENT>

<ENV_NAME>MVP425_WES7</ENV_NAME>

<EARLY_ADOPTER>0</EARLY_ADOPTER>

</ENVIRONMENT>

<SERIAL_NUMBER>PC100001</SERIAL_NUMBER>


-<WINDOWS_ACCOUNTS>


-<ACCOUNT>

<ACCOUNT_ID>1</ACCOUNT_ID>

<NAME>stream01</NAME>

<PWD>retr9xEt</PWD>

</ACCOUNT>

</WINDOWS_ACCOUNTS>

</HARDWARE_SETTINGS>
*/