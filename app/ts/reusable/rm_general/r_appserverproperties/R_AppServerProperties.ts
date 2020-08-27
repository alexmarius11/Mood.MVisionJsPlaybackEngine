import amGeneralAppServerProperties     = require("../../../../../app/ts/abstract/am_general/a_appserverproperties/A_AppServerProperties");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_general
{
  export class R_AppServerProperties extends rmGeneralEntity.rm_general.R_Entity
                                     implements amGeneralAppServerProperties.am_general.A_AppServerProperties
  {

    _appServerIp : string ;
    _appServerPort : number ;
    _appSecureConnection : boolean ;  
    _appLaunchMode : string ;         
    _fqdnMode : boolean; 
    _fqdnAddr : string ; 

    //----------- constructor 
    constructor()  
    {  
      super();
      this._appServerIp = "192.168.0.2";
      this._appServerPort = 80;
      this._appSecureConnection = false;
      this._appLaunchMode = "local"; //üsb"/"remote";////Configuration.AppMode.LOCAL; //REMOTE, USB
      this._fqdnMode = false;
      this._fqdnAddr = "";//"http://signage.domain.com/index.html";  
    }
    
    //--------------------------------
    public getAppServerIp() : string 
    {
      return this._appServerIp;
    }

    //--------------------------------
    public setAppServerIp(appServerIp : string) : void
    {
      this._appServerIp = appServerIp;
    }

    //--------------------------------
    public getAppServerPort() : number
    {
      return this._appServerPort;
    }

    //--------------------------------
    public setAppServerPort(appServerPort : number) : void
    {
      this._appServerPort = appServerPort;
    }

    //--------------------------------
    public getAppSecureConnection() : boolean
    {
      return this._appSecureConnection;
    }

    //--------------------------------
    public setAppSecureConnection(appSecureConnection : boolean) : void
    {
      this._appSecureConnection = appSecureConnection;
    }

    //--------------------------------
    public getAppLaunchMode() : string 
    {
      return this._appLaunchMode;
    }

    //--------------------------------
    public setAppLaunchMode(appLaunchMode : string) : void
    {
      this._appLaunchMode = appLaunchMode;
    }

    //--------------------------------
    public getFqdnMode() : boolean 
    {
      return this._fqdnMode;
    }

    //--------------------------------
    public setFqdnAddress(fqdnAddr : string) : void
    {
      this._fqdnAddr = fqdnAddr;
    }

    //--------------------------------
    public getFqdnAddress() : string
    {
      return this._fqdnAddr;
    }

    //--------------------------------
    public setFqdnMode(fqdnMode : boolean) : void
    {
      this._fqdnMode = fqdnMode;
    }

  }
} 