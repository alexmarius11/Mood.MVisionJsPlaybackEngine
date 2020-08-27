import amRenderingServices  = require("../../../../../app/ts/abstract/am_renderingservices/a_videorenderer/A_VideoRenderer");
import amIVideoRenderer     = require("../../../../../app/ts/abstract/am_renderingservices/a_videorenderer/I_VideoRenderer");
import amIVideoRendererConfig     = require("../../../../../app/ts/abstract/am_renderingservices/a_videorenderer/I_VideoRenderer_Config");

import amGeneralError                          = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralFactoryDescription             = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amTransversalServicesLogService         = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import rmRenderingServices     = require("../../../../../app/ts/reusable/rm_renderingservices/r_renderingservice/R_RenderingService");
import nmIVideoRendererTizen   = require("../../../../../app/ts/native/nm_renderingservices/n_videorenderer_tizen/IImpl_VideoRenderer_Tizen");

import amTransversalServices4 = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

export module nm_renderingservices
{
  export class N_VideoRenderer_Tizen   extends rmRenderingServices.rm_renderingservices.R_RenderingService 
                                       implements amRenderingServices.am_renderingservices.A_VideoRenderer
  {
    //---------- interfaces
    _iVideoRenderer       : amIVideoRenderer.am_renderingservices.I_VideoRenderer ;
    _iVideoRendererConfig : amIVideoRendererConfig.am_renderingservices.I_VideoRenderer_Config ;

    //----------- composants 
    _aLogService : amTransversalServices4.am_transversalservices.A_LogService; 

    //----------- constructor 
    constructor( aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription, 
                 aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                 aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                 error              : amGeneralError.am_general.A_Error)  
    {      
      super(aFactoryDescription, aServiceContainer, aLogService, error);

      this._iVideoRenderer = new nmIVideoRendererTizen.nm_renderingservices.IImpl_VideoRenderer_Tizen(this) ;

      this._aLogService = aLogService;
    }

  }
} 

