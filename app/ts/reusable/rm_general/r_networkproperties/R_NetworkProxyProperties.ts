import amGeneralNetworkProxyProperties     = require("../../../../../app/ts/abstract/am_general/a_networkproperties/A_NetworkProxyProperties");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_general
{
  export class R_NetworkProxyProperties extends rmGeneralEntity.rm_general.R_Entity
                                     implements amGeneralNetworkProxyProperties.am_general.A_NetworkProxyProperties
  {
    _isEnabled : boolean;
		_ipAddress : string;
		_password  : string;
		_port      : number;
    _userName  : string;
    
    //----------- constructor 
    constructor()  
    {  
      super();
      this._isEnabled = false; 
      this._ipAddress = "0.0.0.0"; 
      this._password  = "";
      this._port      = 80;    //5000,
      this._userName   = ""; //"example"
    }

    //------------------------------
    public isEnable() : boolean
    {
      return this._isEnabled;
    }

    //-----------------------------------
    public setEnable(isEnabled: boolean) : void 
    {
      this._isEnabled = isEnabled;
    }

    //------------------------------
    public getIP() : string
    {
      return this._ipAddress;
    }

    //-----------------------------------
    public setIP(ipAddress: string) : void 
    {
      this._ipAddress = ipAddress;
    }

    //-----------------------------------
    public setPort(port: number) : void 
    {
      this._port = port;
    }

    //------------------------------
    public getPort() : number
    {
      return this._port;
    }

    //-----------------------------------
    public setPassword(password: string) : void 
    {
      this._password = password;
    }

    //-----------------------------------
    public getPassword() : string
    {
      return this._password;
    }
    
    //------------------------------
    public getUserName() : string
    {
      return this._userName;
    }

    //-----------------------------------
    public setUserName(userName: string) : void 
    {
      this._userName = userName;
    }


  }
} 