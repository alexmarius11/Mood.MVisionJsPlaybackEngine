import amNonRenderingServices  = require("../../../../../app/ts/abstract/am_nonrenderingservices/a_nonrenderingservice/A_NonRenderingService");
import amNonRenderingServices2 = require("../../../../../app/ts/abstract/am_nonrenderingservices/a_nonrenderingservice/I_NonRenderingService");

import amGeneralError                          = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralFactoryDescription             = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amTransversalServicesLogService         = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import rmGeneral = require("../../../../../app/ts/reusable/rm_general/r_service/R_Service");

import rmNonRenderingServices2 = require("../../../../../app/ts/reusable/rm_nonrenderingservices/r_nonrenderingservice/IImpl_NonRenderingService_R");

import amTransversalServices4 = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

export module rm_nonrenderingservices
{
  export class R_NonRenderingService  extends rmGeneral.rm_general.R_Service
                                      implements amNonRenderingServices.am_nonrenderingservices.A_NonRenderingService
  {
    //---------- interfaces
    _iNonRenderingService : amNonRenderingServices2.am_nonrenderingservices.I_NonRenderingService ;

    //----------- composants 
    _aLogService : amTransversalServices4.am_transversalservices.A_LogService; 

    //----------- constructor 
    constructor( aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription, 
                 aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                 aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                 error              : amGeneralError.am_general.A_Error)  
    {      
      super(aFactoryDescription, aServiceContainer, aLogService, error);

      this._iNonRenderingService = new rmNonRenderingServices2.rm_nonrenderingservices.IImpl_NonRenderingService_R(this) ;

      this._aLogService = aLogService;
    }

  }
} 