
import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

import amGeneral2 = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");
import amGeneral3 = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneral4 = require("../../../../../app/ts/abstract/am_general/a_property/A_Properties");

export module am_general
{
  export interface A_Services  extends amGeneral.am_general.A_Entity 
  {
    getServices(error: amGeneral3.am_general.A_Error): Array<amGeneral2.am_general.A_Service>;
 
    //to do : add getServiceByGuid
    
    getServiceByInstanceName(instanceName: string, error: amGeneral3.am_general.A_Error): amGeneral2.am_general.A_Service;
    getServiceByAbstractName(abstractName: string, properties: amGeneral4.am_general.A_Properties, error: amGeneral3.am_general.A_Error): amGeneral2.am_general.A_Service;
    getServiceByServiceName(serviceName: string, error: amGeneral3.am_general.A_Error): amGeneral2.am_general.A_Service;

    addService(service: amGeneral2.am_general.A_Service, error: amGeneral3.am_general.A_Error) : void;
     
    //to do : add removeServiceByGuid

    removeServiceByInstanceName(serviceName: string, error: amGeneral3.am_general.A_Error) : number;
  }
} 