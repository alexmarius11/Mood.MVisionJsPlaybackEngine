import amGeneralIRemoteService = require("../../../../../app/ts/abstract/am_general/a_service/I_RemoteService");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");


import rmTransversalServicesXmlConfiguratorClient = require("../../../../../app/ts/reusable/rm_transversalservices/r_xmlconfigurator_client/R_XmlConfigurator_Client");
                                                     
import rmGeneralRemoteService = require("../../../../../app/ts/reusable/rm_general/r_service/IImpl_RemoteService_R");

export module rm_transversalservices
{
  export class IImpl_XmlConfiguratorRemoteService_Client extends    rmGeneralRemoteService.rm_general.IImpl_RemoteService_R
                                                         implements amGeneralIRemoteService.am_general.I_RemoteService
                                             
  {
    _name: string;    

    //----------- owner
    _owner: rmTransversalServicesXmlConfiguratorClient.rm_transversalservices.R_XmlConfigurator_Client;

    //----------- constructor 
    constructor(owner: rmTransversalServicesXmlConfiguratorClient.rm_transversalservices.R_XmlConfigurator_Client)  
    {
      super(owner);
      this._owner = owner;  
    }

    //---------------------------------------------
    public setRemoteUrl(url: string): void
    {
      //this._owner.setRemoteUrl(url);  
    }

    //------------------------------
    public send(socket: any, params: any) : void
    {
    }

    //------------------------------
    public receive(socket: any, params: any) : void
    {
      var owner = this._owner;
      //-------------------------
      this._owner._socket.on('xmlconfigurator.main.ret-getxmljsonobject', function(ctx) 
      {
        owner._iService.runCallback(ctx);
        //if (! owner._iService.runCallback(ctx))
          //owner._aLogConsumer._iNotifyLogMain.notify_log(null,null,null, ctx, null);
        //document.getElementById("filesystem").innerHTML = strFileSystem;        
      });

    }
    
    //-----------------------------------
    public startup_withConnectClient(remoteServerUrl: string) : void
    {
      return this._owner.startup_withConnectClient(remoteServerUrl);
    }

    //-----------------------------------
    public startup(socket: any) : void
    {
      return this._owner.startup(socket);
    }
    
  }
} 
