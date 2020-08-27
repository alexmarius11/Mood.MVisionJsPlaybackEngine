import amNonRenderingServices  = require("../../../../../app/ts/abstract/am_nonrenderingservices/a_watchdogservice/A_WatchDogService");
import amNonRenderingServices2 = require("../../../../../app/ts/abstract/am_nonrenderingservices/a_watchdogservice/I_WatchDogService");

import amGeneralError                          = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralFactoryDescription             = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amTransversalServicesLogService         = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import rmNonRenderingServices     = require("../../../../../app/ts/reusable/rm_nonrenderingservices/r_nonrenderingservice/R_NonRenderingService");
import rmNonRenderingServices2    = require("../../../../../app/ts/reusable/rm_nonrenderingservices/r_watchdogservice/IImpl_WatchDogService_R");

import amTransversalServices4 = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

export module rm_nonrenderingservices
{
  export class R_WatchDogService extends rmNonRenderingServices.rm_nonrenderingservices.R_NonRenderingService 
                                 implements amNonRenderingServices.am_nonrenderingservices.A_WatchDogService
  {
    //---------- interfaces
    _iWatchDogService : amNonRenderingServices2.am_nonrenderingservices.I_WatchDogService ;

    //----------- composants 
    _aLogService : amTransversalServices4.am_transversalservices.A_LogService; 

    //----------- constructor 
    constructor( aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription, 
      aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
      aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
      error              : amGeneralError.am_general.A_Error)  
    {      
      super(aFactoryDescription, aServiceContainer, aLogService, error);

      this._iWatchDogService = new rmNonRenderingServices2.rm_nonrenderingservices.IImpl_WatchDogService_R(this) ;

      this._aLogService = aLogService;
    }

  }
} 