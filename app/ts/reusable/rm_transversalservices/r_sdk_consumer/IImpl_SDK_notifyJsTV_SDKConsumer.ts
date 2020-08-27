import amGeneral = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_consumer/I_SDK_notifyJsTV");

import rmTransversalServicesSDKConsumer = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_consumer/R_SDK_Consumer");

export module rm_transversalservices
{
  export class IImpl_SDK_notifyJsTV_SDKConsumer implements amGeneral.am_transversalservices.I_SDK_notifyJsTV
  {
    _name: string;    

    //----------- owner
    _owner: rmTransversalServicesSDKConsumer.rm_transversalservices.R_SDK_Consumer;

    //----------- constructor 
    constructor(owner: rmTransversalServicesSDKConsumer.rm_transversalservices.R_SDK_Consumer)  
    {
      this._owner = owner;  
    }

  }
} 