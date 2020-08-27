import amGeneral = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_consumer/I_SDK_notifyInputSourceSetup");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import rmTransversalServicesSDKConnector = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_connector/R_SDK_Connector");

export module rm_transversalservices
{
  export class IImpl_SDK_notifyInputSourceSetup_SDKConnector implements amGeneral.am_transversalservices.I_SDK_notifyInputSourceSetup
  {
    //----------- properties
    _name: string;  

    //----------- owner
    _owner: rmTransversalServicesSDKConnector.rm_transversalservices.R_SDK_Connector;

    //----------- constructor 
    constructor(owner: rmTransversalServicesSDKConnector.rm_transversalservices.R_SDK_Connector)  
    {
      this._owner = owner;  
    }


  }
} 