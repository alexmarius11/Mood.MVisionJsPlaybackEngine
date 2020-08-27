import amGeneral = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_consumer/I_SDK_notifyInputSourceSetup");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import rmTransversalServicesSDKConsumer = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_consumer/R_SDK_Consumer");


export module rm_transversalservices
{
  export class IImpl_SDK_notifyInputSourceSetup_SDKConsumer implements amGeneral.am_transversalservices.I_SDK_notifyInputSourceSetup
  {
    //----------- properties
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