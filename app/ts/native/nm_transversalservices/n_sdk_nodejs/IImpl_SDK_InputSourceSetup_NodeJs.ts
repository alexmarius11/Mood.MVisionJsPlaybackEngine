import amGeneral = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/I_SDK_InputSourceSetup");

import nmTransversalServices = require("../../../../../app/ts/native/nm_transversalservices/n_sdk_nodejs/N_SDK_NodeJs");
import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

export module nm_transversalservices
{
  export class IImpl_SDK_InputSourceSetup_NodeJs implements amGeneral.am_transversalservices.I_SDK_InputSourceSetup
  {
    //----------- properties
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