import amGeneral = require("../../../../../app/ts/abstract/am_general/i_interface/I_Interface");

import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import amGeneralAppServerProperties = require("../../../../../app/ts/abstract/am_general/a_appserverproperties/A_AppServerProperties");

export module am_renderingservices
{
  export interface I_SDKRenderer_ApplicationSetup extends amGeneral.am_general.I_Interface
  {
    _name: string;    

    //getAppServerProperties(appServerProperties: amGeneralAppServerProperties.am_general.A_AppServerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;

    //setAppServerProperties(appServerProperties: amGeneralAppServerProperties.am_general.A_AppServerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;

    //upgradeApplication(appServerProperties: amGeneralAppServerProperties.am_general.A_AppServerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;

  }
} 