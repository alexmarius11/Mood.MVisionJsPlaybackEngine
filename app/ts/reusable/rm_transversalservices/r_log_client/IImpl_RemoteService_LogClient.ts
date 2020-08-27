import amGeneralIRemoteService = require("../../../../../app/ts/abstract/am_general/a_service/I_RemoteService");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");


import rmTransversalServicesLogClient = require("../../../../../app/ts/reusable/rm_transversalservices/r_log_client/R_Log_Client");
                                                     
import rmGeneralRemoteService = require("../../../../../app/ts/reusable/rm_general/r_service/IImpl_RemoteService_R");

export module rm_transversalservices
{
  export class IImpl_RemoteService_LogClient extends    rmGeneralRemoteService.rm_general.IImpl_RemoteService_R
                                             implements amGeneralIRemoteService.am_general.I_RemoteService
                                             
  {
    _name: string;    

    //----------- owner
    _owner: rmTransversalServicesLogClient.rm_transversalservices.R_Log_Client;

    //----------- constructor 
    constructor(owner: rmTransversalServicesLogClient.rm_transversalservices.R_Log_Client)  
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
      this._owner._socket.on('log.logmain.ret-log', function(ctx) 
      {
        /*
        if (ctx._callId !== null){
          var callback = owner._iService.getCallback(ctx._callId);
          if (callback != null)
          {
            callback(ctx);
            return;
          }
        }*/
        if (! owner._iService.runCallback(ctx))
        {
          if (owner._aLogConsumer == null)
            return ;
          if (owner._aLogConsumer._iNotifyLogMain == null)
            return;
          owner._aLogConsumer._iNotifyLogMain.notify_log(null,null,null, ctx, null);
        }
        //document.getElementById("filesystem").innerHTML = strFileSystem;        
      });
      //-------------------------
      this._owner._socket.on('log.logconfig.ret-setfileinfo', function(ctx) 
      {
        if (! owner._iService.runCallback(ctx))
        {
          if (owner._aLogConsumer == null)
            return;
          if (owner._aLogConsumer._iNotifyLogMain == null)
            return;

          owner._aLogConsumer._iNotifyLogMain.notify_log(null,null,null, ctx, null);
        }
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
