import amGeneralEntity = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

import amGeneralServiceFactory = require("../../../../../app/ts/abstract/am_general/a_service/AFactory_Service");
import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneral4 = require("../../../../../app/ts/abstract/am_general/a_property/A_Properties");

export module am_general
{
  export interface A_ServiceFactories  extends amGeneralEntity.am_general.A_Entity 
  {
    getServiceFactories(error: amGeneralError.am_general.A_Error): Array<amGeneralServiceFactory.am_general.AFactory_Service>;
 
    //to do : add getServiceByGuid
    
    getServiceFactoryByFactoryName(instanceName: string, error: amGeneralError.am_general.A_Error): amGeneralServiceFactory.am_general.AFactory_Service;

    addServiceFactory(service: amGeneralServiceFactory.am_general.AFactory_Service, error: amGeneralError.am_general.A_Error) : void;
     
    //to do : add removeServiceByGuid

    removeServiceFactoryByFactoryName(factoryName: string, error: amGeneralError.am_general.A_Error) : number;
  }
} 