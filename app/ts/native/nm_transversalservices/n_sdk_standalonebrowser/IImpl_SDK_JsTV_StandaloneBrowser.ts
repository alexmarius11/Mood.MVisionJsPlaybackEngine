import amGeneral = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/I_SDK_JsTV");

import nmTransversalServices = require("../../../../../app/ts/native/nm_transversalservices/n_sdk_standalonebrowser/N_SDK_StandaloneBrowser");

import amGeneralPowerSaveModeInfo = require("../../../../../app/ts/abstract/am_general/a_powersavemodeinfo/A_PowerSafeModeInfo");

export module nm_transversalservices
{
  export class IImpl_SDK_JsTV_StandaloneBrowser implements amGeneral.am_transversalservices.I_SDK_JsTV
  {
    _name: string;    

    //----------- owner
    _owner: nmTransversalServices.nm_transversalservices.N_SDK_StandaloneBrowser;

    //----------- constructor 
    constructor(owner: nmTransversalServices.nm_transversalservices.N_SDK_StandaloneBrowser)  
    {
      this._owner = owner;  
    }


  }
} 