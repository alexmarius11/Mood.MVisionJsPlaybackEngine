import amGeneralIRemoteService = require("../../../../../app/ts/abstract/am_general/a_service/I_RemoteService");

import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralService = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");

import rmRenderingServices = require("../../../../../app/ts/reusable/rm_general/r_service/R_Service");
                                                     

export module rm_general
{
  export class IImpl_RemoteService_R implements amGeneralIRemoteService.am_general.I_RemoteService
  {
    _name: string;    

    //----------- owner
    _owner: rmRenderingServices.rm_general.R_Service;

    //----------- constructor 
    constructor(owner: rmRenderingServices.rm_general.R_Service)  
    {
      this._owner = owner;  
    }

    //------------------------------
    public send(socket: any, params: any) : void
    {
    }

    //------------------------------
    public receive(socket: any, params: any) : void
    {
    }
   
    //----------------------------------
    public startup_withConnectClient(remoteServerUrl: string) : void
    {
    }

    //-----------------------------------
    public startup(socket: any) : void
    {

    }
  }
} 