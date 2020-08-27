import amGeneral = require("../../../../../app/ts/abstract/am_general/i_interface/I_Interface");

import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralService = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");
import amConfigurationServicesServiceLocator    = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");
import amConfigurationServicesServiceContainer  = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amTransversalServicesUtilsService  = require("../../../../../app/ts/abstract/am_transversalservices/a_utilsservice/A_UtilsService");
import amTransversalServicesSDKService  = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/A_SDK_JsTV");

import amTransversalServicesLogService         = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

export module am_general
{
  export interface I_Service extends amGeneral.am_general.I_Interface
  {
    _name: string; 

    getInstanceName() : string;
    getAbstractName() : string;
    getServiceName() : string;
    getFactoryName() : string;

    injectDependencies( aServiceContainer : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer, 
                        aServiceLocator   : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator, 
                        aLogService       : amTransversalServicesLogService.am_transversalservices.A_LogService, 
                        error : amGeneralError.am_general.A_Error) : number;

    setServiceLocator(aServiceLocator : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator) : void;

    setTargetService(targetService: amGeneralService.am_general.A_Service) : void;
    setConsumerService(targetService: amGeneralService.am_general.A_Service) : void;
    setOwnerService(ownerService: amGeneralService.am_general.A_Service) : void;

    //--- temporary seetting still the automatic injection will be plug-in
    setUtilsService(aUtilsService: amTransversalServicesUtilsService.am_transversalservices.A_UtilsService);
    setSDKService(aUtilsService: amTransversalServicesSDKService.am_transversalservices.A_SDK_JsTV);

    addCallback(context: amGeneralContext.am_general.A_Context, callback) : number ;
    runCallback(context) : boolean ;
    getCallback(callId : number) : any;

  }
} 