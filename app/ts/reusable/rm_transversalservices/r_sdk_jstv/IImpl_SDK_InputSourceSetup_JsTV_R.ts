import amGeneral = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/I_SDK_InputSourceSetup");

import rmTransversalServicesSDKJsTV = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_jstv/R_SDK_JsTV");
import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

export module rm_transversalservices
{
  export class IImpl_SDK_InputSourceSetup_JsTV_R implements amGeneral.am_transversalservices.I_SDK_InputSourceSetup
  {
    //----------- properties
    _name: string;  

    //----------- owner
    _owner: rmTransversalServicesSDKJsTV.rm_transversalservices.R_SDK_JsTV;

    //----------- constructor 
    constructor(owner: rmTransversalServicesSDKJsTV.rm_transversalservices.R_SDK_JsTV)  
    {
      this._owner = owner;  
    }


  }
} 