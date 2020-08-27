import amRenderingServices  = require("../../../../../app/ts/abstract/am_renderingservices/a_backgroundrenderer/A_BackgroundRenderer");
import amIBackgroundRenderer = require("../../../../../app/ts/abstract/am_renderingservices/a_backgroundrenderer/I_BackgroundRenderer");
import amIBackgroundRendererConfig = require("../../../../../app/ts/abstract/am_renderingservices/a_backgroundrenderer/I_BackgroundRenderer_Config");

import amGeneralError                          = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralFactoryDescription             = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amTransversalServicesLogService         = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
                                                     
import amPrepareParams = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Prepare");
import amRunParams     = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Run");

import rmRenderingServices         = require("../../../../../app/ts/reusable/rm_renderingservices/r_renderingservice/R_RenderingService");
import rmIBackgroundRenderer       = require("../../../../../app/ts/reusable/rm_renderingservices/r_backgroundrenderer/IImpl_BackgroundRenderer_R");
import rmIBackgroundRendererConfig = require("../../../../../app/ts/reusable/rm_renderingservices/r_backgroundrenderer/IImpl_BackgroundRenderer_Config");

import amTransversalServices4 = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

export module rm_renderingservices
{
  export class R_BackgroundRenderer extends rmRenderingServices.rm_renderingservices.R_RenderingService 
                                    implements amRenderingServices.am_renderingservices.A_BackgroundRenderer
  {
    //--------- properties
    _htmlZoneDiv       : HTMLDivElement;

    //---------- interfaces
    _iBackgroundRenderer      : amIBackgroundRenderer.am_renderingservices.I_BackgroundRenderer ;
    _iBackgroundRendererConfig : amIBackgroundRendererConfig.am_renderingservices.I_BackgroundRenderer_Config ;

    //----------- composants 
    _aLogService : amTransversalServices4.am_transversalservices.A_LogService; 

    //----------- constructor 
    constructor( aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription, 
                 aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                 aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                 error              : amGeneralError.am_general.A_Error)  
    {      
      super(aFactoryDescription, aServiceContainer, aLogService, error);

      this._iBackgroundRenderer       = new rmIBackgroundRenderer.rm_renderingservices.IImpl_BackgroundRenderer_R(this) ;
      this._iBackgroundRendererConfig = new rmIBackgroundRendererConfig.rm_renderingservices.IImpl_BackgroundRenderer_Config(this) ;
    
      this._aLogService = aLogService;

      this._htmlZoneDiv = null;

    }

    //---------------------------
    public reset() : void 
    {
      this._htmlZoneDiv = null;
    }


    //---------------------------------
    public setHtmlZoneDiv(htmlZoneDiv : HTMLDivElement)
    {
      this._htmlZoneDiv = htmlZoneDiv;
    }
    
    //-------------------------------
    public getHtmlZoneDiv() : HTMLDivElement
    {
      return this._htmlZoneDiv ;
    }
    
    

  }
} 