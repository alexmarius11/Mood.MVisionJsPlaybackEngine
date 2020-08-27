import amRenderingServices     = require("../../../../../app/ts/abstract/am_renderingservices/a_flashrenderer/A_FlashRenderer");
import amIFlashRenderer        = require("../../../../../app/ts/abstract/am_renderingservices/a_flashrenderer/I_FlashRenderer");
import amIFlashRendererConfig  = require("../../../../../app/ts/abstract/am_renderingservices/a_flashrenderer/I_FlashRenderer_Config");

import amGeneralError                          = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralFactoryDescription             = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amTransversalServicesLogService         = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
                                                     
import amPrepareParams = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Prepare");
import amRunParams     = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Run");

import rmRenderingServices     = require("../../../../../app/ts/reusable/rm_renderingservices/r_renderingservice/R_RenderingService");
import rmIFlashRenderer        = require("../../../../../app/ts/reusable/rm_renderingservices/r_flashrenderer/IImpl_FlashRenderer_R");
import rmIFlashRendererConfig  = require("../../../../../app/ts/reusable/rm_renderingservices/r_flashrenderer/IImpl_FlashRenderer_Config");

import amTransversalServices4 = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

export module rm_renderingservices
{
  export class R_FlashRenderer   extends rmRenderingServices.rm_renderingservices.R_RenderingService 
                                 implements amRenderingServices.am_renderingservices.A_FlashRenderer
  {

    //---------- properties
    _htmlZoneDiv       : HTMLDivElement;
    _htmlObject        : HTMLObjectElement;

    //---------- interfaces
    _iFlashRenderer       : amIFlashRenderer.am_renderingservices.I_FlashRenderer ;
    _iFlashRendererConfig : amIFlashRendererConfig.am_renderingservices.I_FlashRenderer_Config ;

    //----------- composants 
    _aLogService : amTransversalServices4.am_transversalservices.A_LogService; 

    //----------- constructor 
    constructor( aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription, 
        aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
        aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
        error              : amGeneralError.am_general.A_Error)  
    {      
      super(aFactoryDescription, aServiceContainer, aLogService, error);

      this._iFlashRenderer       = new rmIFlashRenderer.rm_renderingservices.IImpl_FlashRenderer_R(this) ;
      this._iFlashRendererConfig = new rmIFlashRendererConfig.rm_renderingservices.IImpl_FlashRenderer_Config(this) ;

      this._aLogService = aLogService;

      this._htmlZoneDiv       = null;
      this._htmlObject        = null;
    }

    //---------------------------
    public reset() : void 
    {
      this._htmlZoneDiv       = null;
      this._htmlObject        = null;
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


    //-------------------------------
    public setHtmlObject(htmlObject : HTMLObjectElement)
    {
      this._htmlObject = htmlObject;
    }

    //------------------------------
    public getHtmlObject() : HTMLObjectElement
    {
      return this._htmlObject;
    }


  }
} 