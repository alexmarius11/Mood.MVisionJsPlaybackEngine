
import amTransversalServicesLogConsumer  = require("../../../../../app/ts/abstract/am_transversalservices/a_log_consumer/A_Log_Consumer");

import amGeneralError                          = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralService                        = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");
import amGeneralFactoryDescription             = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amTransversalServicesLogService         = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");
import amTransversalServicesLogRenderer        = require("../../../../../app/ts/abstract/am_renderingservices/a_logrenderer/A_LogRenderer");


import amTransversalServicesINotifyLogMain   = require("../../../../../app/ts/abstract/am_transversalservices/a_log_consumer/I_Log_notifyLogMain");
import amTransversalServicesINotifyLogConfig = require("../../../../../app/ts/abstract/am_transversalservices/a_log_consumer/I_Log_notifyLogConfig");

import rmTransversalServicesINotifyLogMain    = require("../../../../../app/ts/reusable/rm_renderingservices/r_logrenderer/IImpl_Log_notifyLogMain_LogConsumer_LogRenderer");
import rmTransversalServicesINotifyLogConfig  = require("../../../../../app/ts/reusable/rm_renderingservices/r_logrenderer/IImpl_Log_notifyLogConfig_LogConsumer_LogRenderer");

import rmTransversalServicesLogConsumer  = require("../../../../../app/ts/reusable/rm_transversalservices/r_log_consumer/R_Log_Consumer");

import rmGeneralService                = require("../../../../../app/ts/reusable/rm_general/r_service/R_Service");


export module rm_renderingservices
{                                          
  export class R_LogConsumer_LogRenderer   extends  rmGeneralService.rm_general.R_Service
                                          //extends  rmTransversalServicesLogConsumer.rm_transversalservices.R_Log_Consumer 
                                          implements amTransversalServicesLogConsumer.am_transversalservices.A_Log_Consumer
  {

    //---------- interfaces
    _iNotifyLogMain        : amTransversalServicesINotifyLogMain.am_transversalservices.I_Log_notifyLogMain ;
    _iNotifyLogConfig      : amTransversalServicesINotifyLogConfig.am_transversalservices.I_Log_notifyLogConfig ;

    //----------- composants 
    _aLogService   : amTransversalServicesLogService.am_transversalservices.A_LogService; 

    _aLogRenderer : amTransversalServicesLogRenderer.am_renderingservices.A_LogRenderer; 

    //----------- constructor 
    constructor( aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription, 
                 aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                 aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                 error              : amGeneralError.am_general.A_Error)  
    {      
      super(aFactoryDescription, aServiceContainer, aLogService, error);

      this._aLogService  = aLogService;
      this._aLogRenderer = null;

      this._iNotifyLogMain       = new rmTransversalServicesINotifyLogMain.rm_transversalservices.IImpl_Log_notifyLogMain_LogConsumer_LogRenderer(this) ;
      this._iNotifyLogConfig     = new rmTransversalServicesINotifyLogConfig.rm_transversalservices.IImpl_Log_notifyLogConfig_LogConsumer_LogRenderer(this) ;

    }

    //--------------------------------------------
    public setOwnerService(aOwnerService: amGeneralService.am_general.A_Service) : void
    {
      this._aOwnerService = aOwnerService;    
      this._aLogRenderer  = <amTransversalServicesLogRenderer.am_renderingservices.A_LogRenderer>aOwnerService;    
    }
    
  }
} 