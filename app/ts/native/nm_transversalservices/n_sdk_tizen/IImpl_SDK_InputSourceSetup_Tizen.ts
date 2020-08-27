import amGeneral = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/I_SDK_InputSourceSetup");

import nmTransversalServicesTizen = require("../../../../../app/ts/native/nm_transversalservices/n_sdk_tizen/N_SDK_Tizen");
import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

//import * as tizenTest from "./tizentest";

declare var tizen : any;

export module nm_transversalservices
{

  export class IImpl_SDK_InputSourceSetup_Tizen implements amGeneral.am_transversalservices.I_SDK_InputSourceSetup
  {
    //----------- properties
    _name: string;  

    //----------- owner
    _owner: nmTransversalServicesTizen.nm_transversalservices.N_SDK_Tizen;

    //----------- constructor 
    constructor(owner: nmTransversalServicesTizen.nm_transversalservices.N_SDK_Tizen)  
    {

      this._owner = owner;  
    }


  }
} 