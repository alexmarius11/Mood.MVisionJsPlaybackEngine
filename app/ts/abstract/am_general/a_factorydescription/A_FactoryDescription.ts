
import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

export module am_general
{
  export interface A_FactoryDescription extends amGeneral.am_general.A_Entity
  {
    _factoryName:   string;
    _serviceName:   string;
    _abstractName:  string;
    _instanceName:  string;

    setNames(factoryName : string, serviceName : string, abstractName : string, instanceName : string) : void;
 }

} 