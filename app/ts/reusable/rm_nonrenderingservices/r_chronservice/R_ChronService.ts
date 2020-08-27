import amNonRenderingServices  = require("../../../../../app/ts/abstract/am_nonrenderingservices/a_chronservice/A_ChronService");
import amNonRenderingServices2 = require("../../../../../app/ts/abstract/am_nonrenderingservices/a_chronservice/I_ChronService");

import amGeneralError                          = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralFactoryDescription             = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amTransversalServicesLogService         = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import rmNonRenderingServices     = require("../../../../../app/ts/reusable/rm_nonrenderingservices/r_nonrenderingservice/R_NonRenderingService");
import rmNonRenderingServices2    = require("../../../../../app/ts/reusable/rm_nonrenderingservices/r_chronservice/IImpl_ChronService_R");

import amTransversalServices4 = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

export module rm_nonrenderingservices
{
  export class R_ChronService extends rmNonRenderingServices.rm_nonrenderingservices.R_NonRenderingService 
                              implements amNonRenderingServices.am_nonrenderingservices.A_ChronService
  {
    //---------- interfaces
    _iChronService : amNonRenderingServices2.am_nonrenderingservices.I_ChronService ;

    //----------- composants 
    _aLogService : amTransversalServices4.am_transversalservices.A_LogService; 

    //----------- constructor 
    constructor( aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription, 
                 aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                 aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                 error              : amGeneralError.am_general.A_Error)  
    {      
      super(aFactoryDescription, aServiceContainer, aLogService, error);

      this._iChronService = new rmNonRenderingServices2.rm_nonrenderingservices.IImpl_ChronService_R(this) ;

      this._aLogService = aLogService;
    }

  }
} 