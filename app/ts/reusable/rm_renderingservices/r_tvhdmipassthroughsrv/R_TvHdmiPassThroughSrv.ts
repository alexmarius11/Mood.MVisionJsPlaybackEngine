import amRenderingServices  = require("../../../../../app/ts/abstract/am_renderingservices/a_tvhdmipassthroughsrv/A_TvHdmiPassThroughSrv");
import amITvHdmiPassThroughSrv = require("../../../../../app/ts/abstract/am_renderingservices/a_tvhdmipassthroughsrv/I_TvHdmiPassThroughSrv");
import amITvHdmiPassThroughSrvConfig = require("../../../../../app/ts/abstract/am_renderingservices/a_tvhdmipassthroughsrv/I_TvHdmiPassThroughSrv_Config");

import amGeneralError                          = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralFactoryDescription             = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amTransversalServicesLogService         = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
                                                     
import amPrepareParams = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Prepare");
import amRunParams     = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Run");

import rmRenderingServices           = require("../../../../../app/ts/reusable/rm_renderingservices/r_renderingservice/R_RenderingService");
import rmITvHdmiPassThroughSrv       = require("../../../../../app/ts/reusable/rm_renderingservices/r_tvhdmipassthroughsrv/IImpl_TvHdmiPassThroughSrv_R");
import rmITvHdmiPassThroughSrvConfig = require("../../../../../app/ts/reusable/rm_renderingservices/r_tvhdmipassthroughsrv/IImpl_TvHdmiPassThroughSrv_Config");

import amTransversalServices4 = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

export module rm_renderingservices
{
  export class R_TvHdmiPassThroughSrv  extends rmRenderingServices.rm_renderingservices.R_RenderingService 
                                       implements amRenderingServices.am_renderingservices.A_TvHdmiPassThroughSrv
  {
    //---------- interfaces
    _iTvHdmiPassThroughSrv       : amITvHdmiPassThroughSrv.am_renderingservices.I_TvHdmiPassThroughSrv ;
    _iTvHdmiPassThroughSrvConfig : amITvHdmiPassThroughSrvConfig.am_renderingservices.I_TvHdmiPassThroughSrv_Config ;

    //----------- composants 
    _aLogService : amTransversalServices4.am_transversalservices.A_LogService; 

    //----------- constructor 
    constructor( aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription, 
                 aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                 aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                 error              : amGeneralError.am_general.A_Error)  
    {      
      super(aFactoryDescription, aServiceContainer, aLogService, error);

      this._iTvHdmiPassThroughSrv = new rmITvHdmiPassThroughSrv.rm_renderingservices.IImpl_TvHdmiPassThroughSrv_R(this) ;
      this._iTvHdmiPassThroughSrv = new rmITvHdmiPassThroughSrvConfig.rm_renderingservices.IImpl_TvHdmiPassThroughSrv_Config(this) ;

      this._aLogService = aLogService;
    }

  }
} 