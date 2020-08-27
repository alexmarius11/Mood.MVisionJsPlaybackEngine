import amGeneral = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/I_SDK_JsTV");

import nmTransversalServices = require("../../../../../app/ts/native/nm_transversalservices/n_sdk_nodejs/N_SDK_NodeJs");

import amGeneralShaProperties = require("../../../../../app/ts/abstract/am_general/a_shaproperties/A_ShaProperties");

export module nm_transversalservices
{
  export class IImpl_SDK_JsTV_NodeJs implements amGeneral.am_transversalservices.I_SDK_JsTV
  {
    _name: string;    

    //----------- owner
    _owner: nmTransversalServices.nm_transversalservices.N_SDK_NodeJs;

    //----------- constructor 
    constructor(owner: nmTransversalServices.nm_transversalservices.N_SDK_NodeJs)  
    {
      this._owner = owner;  
    }

  }
} 