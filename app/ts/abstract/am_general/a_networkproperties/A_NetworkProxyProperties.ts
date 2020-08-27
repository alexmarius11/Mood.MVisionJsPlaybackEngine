import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

export module am_general
{
  export interface A_NetworkProxyProperties extends amGeneral.am_general.A_Entity
  {
    isEnable() : boolean
    setEnable(isEnabled: boolean) : void ;

    getIP() : string;
    setIP(ipAddress: string) : void ;

    setPort(port: number) : void ;
    getPort() : number;

    setPassword(password: string) : void ;
    getPassword() :  string;
    
    getUserName() : string ;
    setUserName(userName: string) : void ;

  }

} 