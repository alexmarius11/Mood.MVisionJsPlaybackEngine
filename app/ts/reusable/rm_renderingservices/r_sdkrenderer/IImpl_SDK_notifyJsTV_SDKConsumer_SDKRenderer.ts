import amGeneral = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_consumer/I_SDK_notifyJsTV");

import rmTransversalServicesSDKConsumerSDKRenderer = require("../../../../../app/ts/reusable/rm_renderingservices/r_sdkrenderer/R_SDKConsumer_SDKRenderer");

export module rm_transversalservices
{
  export class IImpl_SDK_notifyJsTV_SDKConsumer_SDKRenderer implements amGeneral.am_transversalservices.I_SDK_notifyJsTV
  {
    _name: string;    

    //----------- owner
    _owner: rmTransversalServicesSDKConsumerSDKRenderer.rm_renderingservices.R_SDKConsumer_SDKRenderer;

    //----------- constructor 
    constructor(owner: rmTransversalServicesSDKConsumerSDKRenderer.rm_renderingservices.R_SDKConsumer_SDKRenderer)  
    {
      this._owner = owner;  
    }

  }
} 