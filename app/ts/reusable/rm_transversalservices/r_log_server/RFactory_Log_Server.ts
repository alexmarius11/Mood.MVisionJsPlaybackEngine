declare function require(moduleNames: string[], onLoad: (...args: any[]) => void): void;

import amTransversalServices  = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/A_SDK_JsTV");

import amGeneralServiceFactory                 = require("../../../../../app/ts/abstract/am_general/a_service/AFactory_Service");
import rmGeneralServiceFactory                 = require("../../../../../app/ts/reusable/rm_general/r_service/RFactory_Service");

import amGeneralError                          = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralFactoryDescription             = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amGeneralProperties                     = require("../../../../../app/ts/abstract/am_general/a_property/A_Properties");

import amTransversalServicesLogService         = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import amGeneralService                        = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");

//import * as mod_R_SDK_Server from "../../../../../app/ts/reusable/rm_transversalservices/r_sdk_server/R_SDK_Server";
import mod_R_Log_Server = require("../../../../../app/ts/reusable/rm_transversalservices/r_log_server/R_Log_Server");

export module rm_transversalservices
{
  export class RFactory_Log_Server   extends   rmGeneralServiceFactory.rm_general.RFactory_Service 
                                    implements amGeneralServiceFactory.am_general.AFactory_Service
  {
    public createService( aFactoryDescription : amGeneralFactoryDescription.am_general.A_FactoryDescription, 
                          aServiceContainer   : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer, 
                          serviceProperties   : amGeneralProperties.am_general.A_Properties, 
                          aLogService         : amTransversalServicesLogService.am_transversalservices.A_LogService,
                          error               : amGeneralError.am_general.A_Error)
                             : amGeneralService.am_general.A_Service
    {
      //require(["../../../../../app/ts/reusable/rm_transversalservices/r_sdk_server/R_SDK_Server"], (dyn_R_SDK_Server : typeof mod_R_SDK_Server) => 
      //{  
        return new mod_R_Log_Server.rm_transversalservices.R_Log_Server(aFactoryDescription, aServiceContainer, aLogService, error); 
      //});

      //return null;
    }
    

  }
} 