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

import * as mod_N_VideoRenderer_Tizen from "../../../../../app/ts/native/nm_renderingservices/n_videorenderer_tizen/N_VideoRenderer_Tizen";
//import mod_N_VideoRenderer_WebOS  = require("../../../../../app/ts/native/nm_renderingservices/n_videorenderer_webos/N_VideoRenderer_WebOS");

export module nm_renderingservices
{
  export class NFactory_VideoRenderer_Tizen   extends rmGeneralServiceFactory.rm_general.RFactory_Service 
                                              implements amGeneralServiceFactory.am_general.AFactory_Service
  {
    public createService( aFactoryDescription : amGeneralFactoryDescription.am_general.A_FactoryDescription, 
                          aServiceContainer   : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer, 
                          serviceProperties   : amGeneralProperties.am_general.A_Properties, 
                          aLogService         : amTransversalServicesLogService.am_transversalservices.A_LogService,
                          error               : amGeneralError.am_general.A_Error)
                             : amGeneralService.am_general.A_Service
    {
      //require(["../../../../../app/ts/native/nm_renderingservices/n_videorenderer_tizen/N_VideoRenderer_Tizen"], (dyn_N_VideoRenderer_Tizen : typeof mod_N_VideoRenderer_Tizen) => 
      //{  
        return new mod_N_VideoRenderer_Tizen.nm_renderingservices.N_VideoRenderer_Tizen(aFactoryDescription, aServiceContainer, aLogService, error); 
      //});

      //return null;
    }
    

  }
} 