import amGeneral = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/I_SDK_JsTV");

import nmTransversalServices = require("../../../../../app/ts/native/nm_transversalservices/n_sdk_webos/N_SDK_WebOS");

export module nm_transversalservices
{
  export class IImpl_SDK_JsTV_WebOS implements amGeneral.am_transversalservices.I_SDK_JsTV
  {
    _name: string;    

    //----------- owner
    _owner: nmTransversalServices.nm_transversalservices.N_SDK_WebOS;

    //----------- constructor 
    constructor(owner: nmTransversalServices.nm_transversalservices.N_SDK_WebOS)  
    {
      this._owner = owner;  
    }
  }
} 