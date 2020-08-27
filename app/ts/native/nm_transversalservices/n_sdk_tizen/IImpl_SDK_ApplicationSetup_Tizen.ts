import amGeneral = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/I_SDK_ApplicationSetup");

import nmTransversalServicesTizen = require("../../../../../app/ts/native/nm_transversalservices/n_sdk_tizen/N_SDK_Tizen");
import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import amGeneralAppServerProperties = require("../../../../../app/ts/abstract/am_general/a_appserverproperties/A_AppServerProperties");
//import * as tizenTest from "./tizentest";

declare var tizen : any;

export module nm_transversalservices
{

  export class IImpl_SDK_ApplicationSetup_Tizen implements amGeneral.am_transversalservices.I_SDK_ApplicationSetup
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

    //-----------------------------
    // AppServer get/set Properties 
    //-----------------------------

    //-------------------------------------
    public getAppServerProperties(appServerProperties: amGeneralAppServerProperties.am_general.A_AppServerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }

    //-------------------------------------
    public promise_getAppServerProperties(appServerProperties: amGeneralAppServerProperties.am_general.A_AppServerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //-------------------------------------
    public setAppServerProperties(appServerProperties: amGeneralAppServerProperties.am_general.A_AppServerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
    }
    
    //-------------------------------------
    public promise_setAppServerProperties(appServerProperties: amGeneralAppServerProperties.am_general.A_AppServerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //-----------------------------
    // Upgrade Application 
    //-----------------------------
    
    //-------------------------------------
    public upgradeApplication(appServerProperties: amGeneralAppServerProperties.am_general.A_AppServerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    //-------------------------------------
    public promise_upgradeApplication(appServerProperties: amGeneralAppServerProperties.am_general.A_AppServerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }


  }
} 