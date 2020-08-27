import amRenderingServicesFileSystemRenderer  = require("../../../../../app/ts/abstract/am_renderingservices/a_sdkrenderer/A_SDKRenderer");
import amRenderingServicesIFileSystemRenderer  = require("../../../../../app/ts/abstract/am_renderingservices/a_sdkrenderer/I_SDKRenderer_FileSystem");

import amTransversalServicesSDKJsTV            = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/A_SDK_JsTV");

import amGeneralError                          = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralService                        = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");
import amGeneralFactoryDescription             = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amTransversalServicesLogService         = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");
import amTransversalServicesSDKConsumer        = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_consumer/A_SDK_Consumer");

import amRenderingServicesLogRenderer = require("../../../../../app/ts/abstract/am_renderingservices/a_logrenderer/A_LogRenderer");

import rmRenderingServices     = require("../../../../../app/ts/reusable/rm_renderingservices/r_renderingservice/R_RenderingService");
import rmRenderingServicesIFileSystemRenderer  = require("../../../../../app/ts/reusable/rm_renderingservices/r_sdkrenderer/IImpl_SDKRenderer_FileSystem_R");

import rmRenderingServicesSDKConsumer     = require("../../../../../app/ts/reusable/rm_renderingservices/r_sdkrenderer/R_SDKConsumer_SDKRenderer");

export module rm_renderingservices
{
  export class R_SDKRenderer extends rmRenderingServices.rm_renderingservices.R_RenderingService 
                                    implements amRenderingServicesFileSystemRenderer.am_renderingservices.A_SDKRenderer
  {
    //---------- interfaces
    public _iFileSystemRenderer : amRenderingServicesIFileSystemRenderer.am_renderingservices.I_SDKRenderer_FileSystem ;

    //----------- composants 
    _aLogService  : amTransversalServicesLogService.am_transversalservices.A_LogService; 
    _aSDKJsTV     : amTransversalServicesSDKJsTV.am_transversalservices.A_SDK_JsTV;
    _aSDKConsumer : amTransversalServicesSDKConsumer.am_transversalservices.A_SDK_Consumer;
    _aLogRenderer : amRenderingServicesLogRenderer.am_renderingservices.A_LogRenderer;    

    //----------- constructor 
    constructor( aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription, 
                 aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                 aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                 error              : amGeneralError.am_general.A_Error)  
    {      
      super(aFactoryDescription, aServiceContainer, aLogService, error);

      this._aSDKConsumer = new rmRenderingServicesSDKConsumer.rm_renderingservices.R_SDKConsumer_SDKRenderer(null,aServiceContainer,aLogService, error);
      this._aSDKConsumer._iService.setOwnerService(this);

      this._iFileSystemRenderer = new rmRenderingServicesIFileSystemRenderer.rm_renderingservices.IImpl_SDKRenderer_FileSystem_R(this) ;
      this._aSDKJsTV      = null;

      this._aLogService = aLogService;

      this._aLogRenderer = null;
    }

    //--------------------------------------------
    public setTargetService(aTargetService: amGeneralService.am_general.A_Service) : void
    {
      this._aTargetService = aTargetService;    
      this._aSDKJsTV       = <amTransversalServicesSDKJsTV.am_transversalservices.A_SDK_JsTV>aTargetService;    
    }
   
    //---------------------------------------------------------------
    public action_displayFile(storageName: string, folderName: string, fileName: string)
    {
      return this._iFileSystemRenderer.action_displayFile(storageName, folderName, fileName);
    }    

    //--------------------------------------------
    public setLogRenderer(aLogRenderer: amGeneralService.am_general.A_Service) : void
    {
      this._aLogRenderer  = <amRenderingServicesLogRenderer.am_renderingservices.A_LogRenderer>aLogRenderer;    
    }
       
    
  }

} 