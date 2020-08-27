import amGeneral = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/I_SDK_JsTV");

import nmTransversalServicesSDKTizen = require("../../../../../app/ts/native/nm_transversalservices/n_sdk_tizen/N_SDK_Tizen");

export module nm_transversalservices
{
  export class IImpl_SDK_JsTV_Tizen implements amGeneral.am_transversalservices.I_SDK_JsTV
  {
    _name: string;    

    //----------- owner
    _owner: nmTransversalServicesSDKTizen.nm_transversalservices.N_SDK_Tizen;

    //----------- constructor 
    constructor(owner: nmTransversalServicesSDKTizen.nm_transversalservices.N_SDK_Tizen)  
    {
      this._owner = owner;  
    }
  }
} 