import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralConfig  = require("../../../../../app/ts/abstract/am_general/ae_config/AE_Config");

//import amGeneralService = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");

import amServiceLocator    = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");
import amServiceContainer  = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amServiceLog       = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

export module am_general
{
  export interface A_Entity
  {

    getEntityId()   : number;
    getEntityName()  : string;

    setEntityIdAndEntityName(entityId: number, entityName:string) : void;
    setEntityId(entityId: number) : void;
    setEntityName(entityName: string) : void;

    injectDependencies( aSrvContainer: amServiceContainer.am_configurationservices.A_ServiceContainer, 
                        aSrvLocator:   amServiceLocator.am_configurationservices.A_ServiceLocator, 
                        aSrvLog:       amServiceLog.am_transversalservices.A_LogService, 
                        error: amGeneralError.am_general.A_Error) : number;

    init( aConfig  : amGeneralConfig.am_general.AE_Config,  error : amGeneralError.am_general.A_Error,  context: amGeneralContext.am_general.A_Context, callback) : void;

                
  }

} 