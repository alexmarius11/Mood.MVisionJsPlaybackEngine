import amGeneral = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_consumer/I_SDK_notifyApplicationSetup");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import amGeneralAppServerProperties = require("../../../../../app/ts/abstract/am_general/a_appserverproperties/A_AppServerProperties");

import rmTransversalServicesSDKConsumer = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_consumer/R_SDK_Consumer");


export module rm_transversalservices
{
  export class IImpl_SDK_notifyApplicationSetup_SDKConsumer implements amGeneral.am_transversalservices.I_SDK_notifyApplicationSetup
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

        //-----------------------------
    // AppServer get/set Properties 
    //-----------------------------

    //-------------------------------------
    public notify_getAppServerProperties(appServerProperties: amGeneralAppServerProperties.am_general.A_AppServerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }

    //-------------------------------------
    public notify_promise_getAppServerProperties(appServerProperties: amGeneralAppServerProperties.am_general.A_AppServerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //-------------------------------------
    public notify_setAppServerProperties(appServerProperties: amGeneralAppServerProperties.am_general.A_AppServerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
    }
    
    //-------------------------------------
    public notify_promise_setAppServerProperties(appServerProperties: amGeneralAppServerProperties.am_general.A_AppServerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //-----------------------------
    // Upgrade Application 
    //-----------------------------
    
    //-------------------------------------
    public notify_upgradeApplication(appServerProperties: amGeneralAppServerProperties.am_general.A_AppServerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    //-------------------------------------
    public notify_promise_upgradeApplication(appServerProperties: amGeneralAppServerProperties.am_general.A_AppServerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

  }
} 