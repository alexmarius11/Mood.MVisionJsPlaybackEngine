import amGeneral = require("../../../../../app/ts/abstract/am_general/i_interface/I_Interface");

import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralService = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");

export module am_general
{
  export interface I_RemoteService extends amGeneral.am_general.I_Interface
  {
    _name: string; 

    send(socket : any, params: any) : void;
    receive(socket: any, params: any) : void;

    
    startup_withConnectClient(remoteServerUrl: string) : void;
    startup(socket: any) : void;
    
  }
} 