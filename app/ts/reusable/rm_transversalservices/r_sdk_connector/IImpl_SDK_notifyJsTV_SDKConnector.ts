import amGeneral = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_consumer/I_SDK_notifyJsTV");

import rmTransversalServicesSDKConnector = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_connector/R_SDK_Connector");

export module rm_transversalservices
{
  export class IImpl_SDK_notifyJsTV_SDKConnector implements amGeneral.am_transversalservices.I_SDK_notifyJsTV
  {
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