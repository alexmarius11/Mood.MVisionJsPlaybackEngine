import amRenderingServices = require("../../../../../app/ts/abstract/am_renderingservices/a_renderingservice/A_RenderingService");

import amRenderingServicesILogMainRenderer   = require("../../../../../app/ts/abstract/am_renderingservices/a_logrenderer/I_LogRenderer_LogMain");
import amRenderingServicesILogConfigRenderer = require("../../../../../app/ts/abstract/am_renderingservices/a_logrenderer/I_LogRenderer_LogConfig");

import amTransversalServicesLogConsumer = require("../../../../../app/ts/abstract/am_transversalservices/a_log_consumer/A_Log_Consumer");
import amTransversalServicesLogService  = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

export module am_renderingservices
{
  export interface A_LogRenderer extends amRenderingServices.am_renderingservices.A_RenderingService
  {
    _iLogMainRenderer   : amRenderingServicesILogMainRenderer.am_renderingservices.I_LogRenderer_LogMain ;
    _iLogConfigRenderer : amRenderingServicesILogConfigRenderer.am_renderingservices.I_LogRenderer_LogConfig ;

    _aLogConsumer       : amTransversalServicesLogConsumer.am_transversalservices.A_Log_Consumer ;  
    _aTargetLog         : amTransversalServicesLogService.am_transversalservices.A_LogService ;  
  }
} 