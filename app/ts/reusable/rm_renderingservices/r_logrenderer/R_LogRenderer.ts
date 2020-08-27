import amRenderingServicesFileSystemRenderer  = require("../../../../../app/ts/abstract/am_renderingservices/a_logrenderer/A_LogRenderer");

import amRenderingServicesILogMain    = require("../../../../../app/ts/abstract/am_renderingservices/a_logrenderer/I_LogRenderer_LogMain");
import amRenderingServicesILogConfig  = require("../../../../../app/ts/abstract/am_renderingservices/a_logrenderer/I_LogRenderer_LogConfig");

import amRenderingServicesLogRenderer           = require("../../../../../app/ts/abstract/am_renderingservices/a_logrenderer/A_LogRenderer");

import amGeneralError                          = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralService                        = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");
import amGeneralFactoryDescription             = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amTransversalServicesLogService         = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");
import amGeneralFileInfo  = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");

import amTransversalServicesLogConsumer = require("../../../../../app/ts/abstract/am_transversalservices/a_log_consumer/A_Log_Consumer");

import rmRenderingServices     = require("../../../../../app/ts/reusable/rm_renderingservices/r_renderingservice/R_RenderingService");

import rmRenderingServicesLogRendererILogMain    = require("../../../../../app/ts/reusable/rm_renderingservices/r_logrenderer/IImpl_LogRenderer_LogMain_R");
import rmRenderingServicesLogRendererILogConfig  = require("../../../../../app/ts/reusable/rm_renderingservices/r_logrenderer/IImpl_LogRenderer_LogConfig_R");

import rmRenderingServicesLogConsumer     = require("../../../../../app/ts/reusable/rm_renderingservices/r_logrenderer/R_LogConsumer_LogRenderer");

export module rm_renderingservices
{
  export class R_LogRenderer extends rmRenderingServices.rm_renderingservices.R_RenderingService 
                                    implements amRenderingServicesLogRenderer.am_renderingservices.A_LogRenderer
  {
    //-- properties
    _fileInfo    : amGeneralFileInfo.am_general.A_FileInfo;
    _fileUrlInfo : amGeneralFileInfo.am_general.A_FileInfo; 

    //---------- interfaces
    public _iLogMainRenderer   : amRenderingServicesILogMain.am_renderingservices.I_LogRenderer_LogMain ;
    public _iLogConfigRenderer : amRenderingServicesILogConfig.am_renderingservices.I_LogRenderer_LogConfig;

    //----------- composants 
    _aLogService  : amTransversalServicesLogService.am_transversalservices.A_LogService; 

    //----
    _aTargetLog   : amTransversalServicesLogService.am_transversalservices.A_LogService;
    _aLogConsumer : amTransversalServicesLogConsumer.am_transversalservices.A_Log_Consumer;

    //----------- constructor 
    constructor( aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription, 
                 aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                 aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                 error              : amGeneralError.am_general.A_Error)  
    {      
      super(aFactoryDescription, aServiceContainer, aLogService, error);

      this._fileInfo    = null;
      this._fileUrlInfo = null;

      this._aLogConsumer = new rmRenderingServicesLogConsumer.rm_renderingservices.R_LogConsumer_LogRenderer(null,aServiceContainer,aLogService, error);
      this._aLogConsumer._iService.setOwnerService(this);

      this._iLogMainRenderer = new rmRenderingServicesLogRendererILogMain.rm_renderingservices.IImpl_LogRenderer_LogMain_R(this) ;
      this._iLogConfigRenderer = new rmRenderingServicesLogRendererILogConfig.rm_renderingservices.IImpl_LogRenderer_LogConfig_R(this) ;

      this._aTargetLog      = null;

      this._aLogService = aLogService;
    }

    //---------------------------------------------------------------
    public setFileInfo(fileInfo : amGeneralFileInfo.am_general.A_FileInfo,  fileUrlInfo : amGeneralFileInfo.am_general.A_FileInfo)    
    {
      this._fileInfo     = fileInfo;
      this._fileUrlInfo  = fileUrlInfo;
    }
    
    //--------------------------------------------
    public setTargetService(aTargetService: amGeneralService.am_general.A_Service) : void
    {
      this._aTargetService = aTargetService;    
      this._aTargetLog     = <amTransversalServicesLogService.am_transversalservices.A_LogService>aTargetService;    
    }
   
  }

} 