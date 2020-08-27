import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

export module am_general
{
  export interface A_AppServerProperties extends amGeneral.am_general.A_Entity
  {
    
    getAppServerIp() : string ;
    setAppServerIp(appServerIp : string) : void;

    getAppServerPort() : number;
    setAppServerPort(appServerPort : number) : void;

    getAppSecureConnection() : boolean;
    setAppSecureConnection(appSecureConnection : boolean) : void;

    getAppLaunchMode() : string;
    setAppLaunchMode(appLaunchMode : string) : void;

    getFqdnMode() : boolean ;
    setFqdnAddress(fqdnAddr : string) : void;

    getFqdnAddress() : string;
    setFqdnMode(fqdnMode : boolean) : void;

  }

} 