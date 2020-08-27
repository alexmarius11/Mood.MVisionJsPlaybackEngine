import amGeneral = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/I_SDK_JsTV");

import rmTransversalServicesSDKServer = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_server/R_SDK_Server");

export module rm_transversalservices
{
  export class IImpl_SDK_JsTV_SDKServer implements amGeneral.am_transversalservices.I_SDK_JsTV
  {
    _name: string;    

    //----------- owner
    _owner: rmTransversalServicesSDKServer.rm_transversalservices.R_SDK_Server;

    //----------- constructor 
    constructor(owner: rmTransversalServicesSDKServer.rm_transversalservices.R_SDK_Server)  
    {
      this._owner = owner;  
    }

  }
} 