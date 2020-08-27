
import amGeneralNetworkCardProperties     = require("../../../../../app/ts/abstract/am_general/a_networkproperties/A_NetworkCardProperties");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_general
{
  export class R_NetworkCardProperties extends rmGeneralEntity.rm_general.R_Entity
                                     implements amGeneralNetworkCardProperties.am_general.A_NetworkCardProperties
  {

    _isEnabled : boolean;
    _method    : string;
    _ipAddress : string;
    _netmask   : string ;  
    _gateway   : string; 
    _dns1      : string;
    _dns2      : string;

    //----------- constructor 
    constructor()  
    {  
      super();
      this._isEnabled = false ;
      this._method    = "manual" ;
      this._ipAddress = "0.0.0.0";/// "192.168.0.2",                                         
      this._netmask   = "255.255.255.0";
      this._gateway   = "192.168.0.1";
      this._dns1      = "0.0.0.0"; //: "156.147.135.180",                                          
      this._dns2      = "0.0.0.0";//dns2 : "156.147.135.181"                                           
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
    public getMethod() : string
    {
      return this._method;
    }

    //-----------------------------------
    public setMethod(method: string) : void 
    {
      this._method = method;
    }

    //------------------------------
    public getIPAddress() : string
    {
      return this._ipAddress;
    }

    //-----------------------------------
    public setIpAddress(ipAddress: string) : void 
    {
      this._ipAddress = ipAddress;
    }

    //------------------------------
    public getNetmask() : string
    {
      return this._netmask;
    }

    //-----------------------------------
    public setNetmask(netmask: string) : void 
    {
      this._netmask = netmask;
    }

    //------------------------------
    public getGateway() : string
    {
      return this._gateway;
    }

    //-----------------------------------
    public setGateway(gateway: string) : void 
    {
      this._gateway = gateway;
    }

    //------------------------------
    public getDNS1() : string
    {
      return this._dns1;
    }

    //-----------------------------------
    public setDNS1(dns1: string) : void 
    {
      this._dns1 = dns1;
    }

    //------------------------------
    public getDNS2() : string
    {
      return this._dns1;
    }

    //-----------------------------------
    public setDNS2(dns1: string) : void 
    {
      this._dns1 = dns1;
    }
    
  }
} 