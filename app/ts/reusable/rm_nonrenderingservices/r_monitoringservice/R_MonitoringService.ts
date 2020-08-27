import amNonRenderingServices  = require("../../../../../app/ts/abstract/am_nonrenderingservices/a_monitoringservice/A_MonitoringService");
import amNonRenderingServices2 = require("../../../../../app/ts/abstract/am_nonrenderingservices/a_monitoringservice/I_MonitoringService");

import amGeneralError                          = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralFactoryDescription             = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amTransversalServicesLogService         = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import rmNonRenderingServices     = require("../../../../../app/ts/reusable/rm_nonrenderingservices/r_nonrenderingservice/R_NonRenderingService");
import rmNonRenderingServices2    = require("../../../../../app/ts/reusable/rm_nonrenderingservices/r_monitoringservice/IImpl_MonitoringService_R");

import amTransversalServices4 = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

export module rm_nonrenderingservices
{
  export class R_MonitoringService extends rmNonRenderingServices.rm_nonrenderingservices.R_NonRenderingService 
                                   implements amNonRenderingServices.am_nonrenderingservices.A_MonitoringService
  {
    //---------- interfaces
    _iMonitoringService : amNonRenderingServices2.am_nonrenderingservices.I_MonitoringService ;

    //----------- composants 
    _aLogService : amTransversalServices4.am_transversalservices.A_LogService; 

    //----------- constructor 
    constructor( aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription, 
      aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
      aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
      error              : amGeneralError.am_general.A_Error)  
    {      
      super(aFactoryDescription, aServiceContainer, aLogService, error);

      this._iMonitoringService = new rmNonRenderingServices2.rm_nonrenderingservices.IImpl_MonitoringService_R(this) ;

      this._aLogService = aLogService;
    }

  }
} 